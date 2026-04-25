#!/usr/bin/env node
/**
 * Build-time meta-tag length guard for FixitBay SSG output.
 *
 * Scans every HTML snapshot in build/ and enforces:
 *   - <meta name="description" content="..."> ≤ 160 chars  (HARD LIMIT — fails build)
 *   - <title>...</title> ≤ 60 chars                        (SOFT LIMIT — warning only)
 *   - description / title must be present                  (HARD LIMIT — fails build)
 *
 * Why: Google truncates descriptions >160 chars and titles >60 chars in SERPs,
 * which silently degrades CTR. This catches regressions before deploy.
 *
 * Run: node scripts/check-meta-length.cjs
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../build');
const DESC_LIMIT = 160;
const TITLE_LIMIT = 60;

const DESC_RE = /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i;
const TITLE_RE = /<title>([^<]+)<\/title>/i;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error(`\n❌ check-meta-length: ${BUILD_DIR} not found. Run 'yarn build' first.\n`);
  process.exit(1);
}

const files = walk(BUILD_DIR);
const descViolations = [];
const titleWarnings = [];
const missing = [];

for (const file of files) {
  // Skip 404/200 fallback shells
  const base = path.basename(file);
  if (base === '404.html' || base === '200.html') continue;

  const rel = '/' + path.relative(BUILD_DIR, file).replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\.html$/, '');
  const url = rel === '/' || rel === '' ? '/' : rel;

  const src = fs.readFileSync(file, 'utf-8');
  const desc = src.match(DESC_RE);
  const title = src.match(TITLE_RE);

  if (!desc) { missing.push(['description', url]); continue; }
  if (!title) { missing.push(['title', url]); continue; }

  if (desc[1].length > DESC_LIMIT) descViolations.push({ url, len: desc[1].length, text: desc[1] });
  if (title[1].length > TITLE_LIMIT) titleWarnings.push({ url, len: title[1].length, text: title[1] });
}

console.log(`\n🔍 check-meta-length: scanned ${files.length} HTML files`);

// HARD: description >160 chars
if (descViolations.length > 0) {
  console.error(`\n❌ Description >${DESC_LIMIT} chars (${descViolations.length} pages):`);
  for (const v of descViolations.sort((a, b) => b.len - a.len).slice(0, 30)) {
    console.error(`   [${v.len}] ${v.url}`);
    console.error(`         ${v.text.slice(0, 130)}…`);
  }
  if (descViolations.length > 30) console.error(`   …and ${descViolations.length - 30} more`);
}

// HARD: missing description/title
if (missing.length > 0) {
  console.error(`\n❌ Missing meta tag (${missing.length} pages):`);
  for (const [kind, u] of missing.slice(0, 20)) console.error(`   ${kind}: ${u}`);
}

// SOFT: title >60 chars
if (titleWarnings.length > 0) {
  console.warn(`\n⚠️  Title >${TITLE_LIMIT} chars — Google may truncate (${titleWarnings.length} pages, non-blocking):`);
  for (const v of titleWarnings.sort((a, b) => b.len - a.len).slice(0, 10)) {
    console.warn(`   [${v.len}] ${v.url}: ${v.text}`);
  }
  if (titleWarnings.length > 10) console.warn(`   …and ${titleWarnings.length - 10} more`);
}

if (descViolations.length === 0 && missing.length === 0) {
  console.log(`✅ All descriptions ≤${DESC_LIMIT} chars, all pages have description + title.${titleWarnings.length ? ` (${titleWarnings.length} title warnings — see above)` : ''}\n`);
  process.exit(0);
}

console.error(`\nFix required: trim description in scripts/seo-config.cjs (or page-level SEO_DATA) so the rendered <meta name="description"> is ≤${DESC_LIMIT} chars.\n`);
process.exit(1);

#!/usr/bin/env node
/**
 * Orphan-page detector for FixitBay SSG build.
 *
 * For every indexable route in the sitemap, scan every other SSG snapshot's
 * HTML and verify that at least one internal <a href> points back to it.
 *
 * Pages with zero internal inbound links are reported as orphans — these
 * are the URLs Google tends to classify as "Crawled — currently not indexed".
 *
 * Exit 0 = no orphans. Exit 1 = orphans found (details printed).
 *
 * Run: node scripts/check-orphan-pages.cjs
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../build');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');
const SITE_URL = 'https://fixitbay.net';

// Routes we don't require inbound links for (utility / legal / ingress-only)
const WHITELIST = new Set([
  '/',
  '/book',
  '/services',
  '/blog',
  '/service-areas',
  '/privacy-policy',
  '/terms',
  '/site-map',
  '/blog-faq',
  '/llm-info',
  '/thank-you-booking',
  '/admin',
  '/admin/dashboard',
  '/admin/cms',
]);

function parseSitemapUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].replace(SITE_URL, '') || '/');
  }
  return urls;
}

function routeToHtmlPath(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  // Prefer <route>.html, fallback to <route>/index.html
  const candidate1 = path.join(BUILD_DIR, clean + '.html');
  const candidate2 = path.join(BUILD_DIR, clean, 'index.html');
  if (fs.existsSync(candidate1)) return candidate1;
  if (fs.existsSync(candidate2)) return candidate2;
  return null;
}

function extractInternalHrefs(html) {
  const hrefs = new Set();
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1].trim();
    if (!href) continue;
    // Normalize absolute fixitbay URLs to relative paths
    if (href.startsWith(SITE_URL)) href = href.slice(SITE_URL.length) || '/';
    // Skip external, anchors, mailto, tel, javascript:
    if (/^(https?:|mailto:|tel:|javascript:|#)/i.test(href)) continue;
    if (!href.startsWith('/')) continue;
    // Drop query/hash
    href = href.split('#')[0].split('?')[0];
    // Normalize trailing slash (but keep root)
    if (href.length > 1 && href.endsWith('/')) href = href.slice(0, -1);
    hrefs.add(href);
  }
  return hrefs;
}

// --- Main -------------------------------------------------------------------

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error(`\n❌ check-orphan-pages: ${SITEMAP_PATH} not found. Run 'yarn build' first.\n`);
  process.exit(1);
}

const sitemapUrls = parseSitemapUrls(fs.readFileSync(SITEMAP_PATH, 'utf-8'));
const sitemapSet = new Set(sitemapUrls);

// Build: url -> set of URLs linking to it
const inbound = new Map();
sitemapUrls.forEach(u => inbound.set(u, new Set()));

let scannedPages = 0;
let missingSnapshots = [];

for (const sourceUrl of sitemapUrls) {
  const htmlPath = routeToHtmlPath(sourceUrl);
  if (!htmlPath) {
    missingSnapshots.push(sourceUrl);
    continue;
  }
  scannedPages++;
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const hrefs = extractInternalHrefs(html);
  hrefs.forEach(h => {
    if (h === sourceUrl) return; // self-link doesn't count
    if (inbound.has(h)) inbound.get(h).add(sourceUrl);
  });
}

const orphans = [];
for (const [url, sources] of inbound.entries()) {
  if (WHITELIST.has(url)) continue;
  if (sources.size === 0) orphans.push(url);
}

console.log(`\n🔎 check-orphan-pages: scanned ${scannedPages}/${sitemapUrls.length} snapshots`);
if (missingSnapshots.length > 0) {
  console.warn(`⚠️  Missing snapshots (${missingSnapshots.length}): ${missingSnapshots.slice(0, 5).join(', ')}${missingSnapshots.length > 5 ? '...' : ''}`);
}

if (orphans.length === 0) {
  console.log(`✅ No orphan pages — every indexable URL has at least one internal inbound link.\n`);
  process.exit(0);
}

console.error(`\n❌ Orphan pages detected (${orphans.length}):\n`);
orphans.sort().forEach(u => console.error(`  • ${u}`));
console.error(`\nFix: add an internal link from a hub page, or add the URL to WHITELIST in scripts/check-orphan-pages.cjs if it's intentionally ingress-only.\n`);
process.exit(1);

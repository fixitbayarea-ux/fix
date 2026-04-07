#!/usr/bin/env node

/**
 * FINAL cleanup: delete ALL static HTML files that correspond to
 * 301 redirect sources in public/_redirects.
 *
 * Runs as the LAST build step (after SSG, after verify, after everything).
 * Ensures Netlify cannot serve a stale .html file instead of executing the 301.
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const REDIRECTS_SRC = path.join(__dirname, '..', 'public', '_redirects');

if (!fs.existsSync(REDIRECTS_SRC)) {
  console.log('⚠️  public/_redirects not found — nothing to clean.');
  process.exit(0);
}

// 1. Collect every "from" path that has a 301 rule
const redirectSources = new Set();
const lines = fs.readFileSync(REDIRECTS_SRC, 'utf-8').split('\n');
for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const match = trimmed.match(/^(\S+)\s+\S+\s+301/);
  if (match) redirectSources.add(match[1]);
}

console.log(`\n🧹 cleanup-redirect-html: ${redirectSources.size} redirect sources to check\n`);

// 2. For each redirect source, delete every possible HTML representation
let deleted = 0;
for (const src of redirectSources) {
  const slug = src.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!slug || slug.includes('*')) continue;          // skip wildcards like /*/

  const targets = [
    path.join(BUILD_DIR, `${slug}.html`),             // build/appliance-repair-colma.html
    path.join(BUILD_DIR, slug, 'index.html'),          // build/appliance-repair-colma/index.html
  ];

  for (const filePath of targets) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      deleted++;
      console.log(`  🗑️  deleted: ${filePath.replace(BUILD_DIR, 'build')}`);

      // remove parent dir if now empty
      const dir = path.dirname(filePath);
      if (dir !== BUILD_DIR) {
        try {
          if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
        } catch (_) {}
      }
    }
  }
}

// 3. Verification scan — make sure nothing slipped through
let survivors = 0;
for (const src of redirectSources) {
  const slug = src.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!slug || slug.includes('*')) continue;
  if (fs.existsSync(path.join(BUILD_DIR, `${slug}.html`))) {
    console.error(`  ❌ STILL EXISTS: build/${slug}.html`);
    survivors++;
  }
  if (fs.existsSync(path.join(BUILD_DIR, slug, 'index.html'))) {
    console.error(`  ❌ STILL EXISTS: build/${slug}/index.html`);
    survivors++;
  }
}

if (deleted > 0) {
  console.log(`\n✅ Deleted ${deleted} stale HTML file(s) for redirect sources.`);
}
if (survivors > 0) {
  console.error(`\n❌ ${survivors} redirect-source HTML file(s) survived cleanup!`);
  process.exit(1);
}

console.log('✅ cleanup-redirect-html: no redirect-source HTML files in build/.\n');

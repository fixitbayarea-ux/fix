#!/usr/bin/env node

/**
 * Make CSS non-blocking for Mobile PSI
 * Remove duplicate canonical/meta tags after react-snap
 * Runs after react-snap prerendering
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BUILD_DIR = path.join(__dirname, '../build');

// Find all HTML files
const htmlFiles = glob.sync('**/*.html', { cwd: BUILD_DIR });

console.log(`\n🎨 Post-processing ${htmlFiles.length} HTML files...`);

let cssUpdated = 0;
let canonicalFixed = 0;

htmlFiles.forEach((file) => {
  const filePath = path.join(BUILD_DIR, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Make CSS non-blocking
  const cssLinkRegex = /<link\s+href="(\/static\/css\/main\.[^"]+\.css)"\s+rel="stylesheet"\s*\/?>/g;
  const cssMatch = cssLinkRegex.exec(html);
  if (cssMatch) {
    const cssHref = cssMatch[1];
    const preloadLink = `<link rel="preload" href="${cssHref}" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="${cssHref}"></noscript>`;
    html = html.replace(cssMatch[0], preloadLink);
    cssUpdated++;
    modified = true;
  }

  // 2. Remove duplicate canonical (keep first occurrence only)
  const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]+"\s*\/?>/g;
  const canonicals = html.match(canonicalRegex);
  if (canonicals && canonicals.length > 1) {
    // Remove all but first
    let firstFound = false;
    html = html.replace(canonicalRegex, (match) => {
      if (!firstFound) {
        firstFound = true;
        return match; // Keep first
      }
      return ''; // Remove duplicate
    });
    canonicalFixed++;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
  }
});

console.log(`✅ CSS non-blocking: ${cssUpdated}/${htmlFiles.length} files`);
console.log(`✅ Duplicate canonical fixed: ${canonicalFixed} files`);


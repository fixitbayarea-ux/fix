#!/usr/bin/env node

/**
 * Verify Prerender Script
 * HARD BUILD GUARD: Fails build if prerendering didn't produce real HTML
 * 
 * Checks that prerendered HTML files contain:
 * - Real content (not just empty <div id="root">)
 * - H1 tags
 * - Canonical links
 * - Internal links (at least 5)
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');

// Critical routes that MUST be prerendered
const CRITICAL_ROUTES = [
  { path: 'index.html', name: 'Homepage' },
  { path: 'refrigerator-repair/index.html', name: 'Refrigerator Repair' },
  { path: 'san-francisco-appliance-repair/index.html', name: 'San Francisco' },
  { path: 'service-areas/index.html', name: 'Service Areas' },
  { path: 'contact/index.html', name: 'Contact' },
  { path: 'whirlpool-appliance-repair/index.html', name: 'Whirlpool Brand' },
  { path: 'blog/index.html', name: 'Blog Index' },
  { path: 'reviews/index.html', name: 'Reviews' }
];

console.log('🔍 Verifying prerendered HTML...\n');

let allPassed = true;
let totalIssues = 0;

CRITICAL_ROUTES.forEach(route => {
  const filePath = path.join(BUILD_DIR, route.path);
  
  console.log(`\n📄 Checking: ${route.name} (${route.path})`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`  ❌ FILE NOT FOUND: ${filePath}`);
    allPassed = false;
    totalIssues++;
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Check 1: Not just empty SPA shell
  const hasRootDiv = html.includes('<div id="root">');
  const rootDivMatch = html.match(/<div id="root">(.*?)<\/div>/s);
  const rootContent = rootDivMatch ? rootDivMatch[1].trim() : '';
  
  if (hasRootDiv && rootContent.length < 100) {
    console.error(`  ❌ EMPTY SPA SHELL: Root div has only ${rootContent.length} chars`);
    allPassed = false;
    totalIssues++;
  } else {
    console.log(`  ✓ Has rendered content (${rootContent.length > 0 ? rootContent.length + ' chars' : 'filled'})`);
  }
  
  // Check 2: H1 tag present
  const h1Match = html.match(/<h1[^>]*>(.+?)<\/h1>/i);
  if (!h1Match) {
    console.error(`  ❌ NO H1 TAG FOUND`);
    allPassed = false;
    totalIssues++;
  } else {
    const h1Text = h1Match[1].replace(/<[^>]+>/g, '').substring(0, 60);
    console.log(`  ✓ H1 found: "${h1Text}${h1Text.length >= 60 ? '...' : ''}"`);
  }
  
  // Check 3: Canonical link present
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    console.error(`  ❌ NO CANONICAL TAG FOUND`);
    allPassed = false;
    totalIssues++;
  } else {
    console.log(`  ✓ Canonical found: ${canonicalMatch[1]}`);
  }
  
  // Check 4: Internal links (at least 5)
  const internalLinks = html.match(/<a\s+[^>]*href=["']\/[^"']*["']/gi) || [];
  const linkCount = internalLinks.length;
  
  if (linkCount < 5) {
    console.error(`  ❌ TOO FEW INTERNAL LINKS: Only ${linkCount} found (need at least 5)`);
    allPassed = false;
    totalIssues++;
  } else {
    console.log(`  ✓ Internal links: ${linkCount} found`);
  }
  
  // Check 5: Unique title and description
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  
  if (titleMatch) {
    console.log(`  ✓ Title: "${titleMatch[1].substring(0, 50)}..."`);
  } else {
    console.warn(`  ⚠ No title tag found`);
  }
  
  if (descMatch) {
    const descLength = descMatch[1].length;
    if (descLength < 140 || descLength > 160) {
      console.warn(`  ⚠ Description length: ${descLength} chars (recommended 140-160)`);
    } else {
      console.log(`  ✓ Description: ${descLength} chars`);
    }
  } else {
    console.warn(`  ⚠ No meta description found`);
  }
});

console.log('\n' + '='.repeat(60));

if (allPassed) {
  console.log('✅ PRERENDER VERIFICATION PASSED');
  console.log('All critical routes have proper HTML, H1, canonical, and links.');
  process.exit(0);
} else {
  console.error(`❌ PRERENDER VERIFICATION FAILED`);
  console.error(`Found ${totalIssues} critical issue(s).`);
  console.error(`\nBuild aborted to prevent deploying empty SPA shells.`);
  console.error(`Fix react-snap configuration or check build logs.`);
  process.exit(1);
}

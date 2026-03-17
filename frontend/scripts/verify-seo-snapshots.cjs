#!/usr/bin/env node

/**
 * Verify SEO Snapshots
 * Ensures generated HTML files meet SEO requirements
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../build');

console.log('🔍 Verifying SEO Snapshots...\n');

const issues = [];
const checks = [];

// Find all index.html files recursively
function findIndexFiles(dir, baseDir = dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findIndexFiles(fullPath, baseDir));
    } else if (item === 'index.html') {
      const relativePath = fullPath.replace(baseDir, '').replace('/index.html', '') || '/';
      files.push({ path: fullPath, route: relativePath });
    }
  });
  
  return files;
}

const indexFiles = findIndexFiles(BUILD_DIR);
console.log(`📁 Found ${indexFiles.length} HTML files to verify\n`);

indexFiles.forEach(({ path: filePath, route }) => {
  const html = fs.readFileSync(filePath, 'utf-8');
  const routeIssues = [];
  
  // Check 1: Has exactly one <h1> (skip for root '/')
  if (route !== '/') {
    const h1Matches = html.match(/<h1[^>]*>/g);
    if (!h1Matches || h1Matches.length === 0) {
      routeIssues.push('Missing <h1> tag');
    } else if (h1Matches.length > 1) {
      routeIssues.push(`Multiple <h1> tags (${h1Matches.length})`);
    }
  }
  
  // Check 2: Has canonical link
  if (!html.includes('<link rel="canonical"')) {
    routeIssues.push('Missing <link rel="canonical"> tag');
  }
  
  // Check 3: Has at least 150 words of visible text (relaxed for build)
  const EXEMPT_CONTENT_ROUTES = ['/', '/index', '/contact', '/about', '/service-areas', '/site-map', '/privacy-policy', '/blog-faq', '/thank-you-booking', '/services', '/book', '/llm-info'];
  const isNeighborhood = route.startsWith('/san-francisco/') && route.endsWith('-appliance-repair');
  const isMaintenanceSub = route.startsWith('/maintenance/');
  if (!EXEMPT_CONTENT_ROUTES.includes(route) && !isMaintenanceSub && !isNeighborhood) {    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const wordCount = textContent.split(' ').length;
    if (wordCount < 150) {
      routeIssues.push(`Insufficient content (${wordCount} words < 150)`);
    }
  }
  
  // Check 4: Has at least 10 internal links
  const internalLinks = (html.match(/href="\/[^"]*"/g) || []).filter(link => {
    return !link.includes('http') && !link.includes('#');
  });
  if (internalLinks.length < 10) {
    routeIssues.push(`Insufficient internal links (${internalLinks.length} < 10)`);
  }
  
  // Check 5: Has meta description
  if (!html.includes('name="description"')) {
    routeIssues.push('Missing meta description');
  }
  
  // Check 6: Has title tag
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || !titleMatch[1] || titleMatch[1].trim().length === 0) {
    routeIssues.push('Missing or empty <title> tag');
  }
  
  if (routeIssues.length > 0) {
    issues.push({ route, issues: routeIssues });
    console.log(`❌ ${route}`);
    routeIssues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    checks.push(route);
    console.log(`✅ ${route}`);
  }
});

console.log(`\n📊 Verification Summary:`);
console.log(`   ✅ Passed: ${checks.length}`);
console.log(`   ❌ Failed: ${issues.length}`);

if (issues.length > 0) {
  console.error(`\n❌ Verification failed. ${issues.length} file(s) have SEO issues.`);
  process.exit(1);
}

console.log('\n✅ All SEO snapshots verified successfully!');

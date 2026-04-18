#!/usr/bin/env node
/**
 * Sitemap drift check.
 * Compares URLs in public/sitemap.xml against what generate-seo-snapshots.cjs would produce.
 * Run: node scripts/check-sitemap-drift.cjs
 *
 * Exit 0 = in sync. Exit 1 = drift detected (with details).
 */

const fs = require('fs');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const SITE_URL = 'https://fixitbay.net';

// Extract URLs from sitemap.xml
function parseSitemapUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].replace(SITE_URL, ''));
  }
  return new Set(urls.map(u => u || '/'));
}

// Build expected URLs from the same sources as generate-seo-snapshots.cjs
function buildExpectedUrls() {
  const { ALLOWED_CITIES, KEY_SERVICES, BRAND_PAGES, BLOG_PAGES, OTHER_KEY_PAGES } = require('./seo-config.cjs');
  const routes = new Set();

  routes.add('/');

  // Services
  KEY_SERVICES.forEach(s => routes.add('/' + s));

  // Brands
  BRAND_PAGES.forEach(b => routes.add('/' + b.slug));

  // Blog
  routes.add('/blog');
  BLOG_PAGES.forEach(b => routes.add('/' + b.slug));

  // Other key pages
  OTHER_KEY_PAGES.forEach(p => routes.add('/' + p));

  // City hubs
  ALLOWED_CITIES.forEach(c => routes.add('/' + c.slug + '-appliance-repair'));

  // City+Service combos
  const CITY_SERVICE_CITIES = [
    'san-francisco', 'daly-city', 'south-san-francisco', 'san-bruno', 'pacifica',
    'millbrae', 'colma', 'brisbane', 'montara', 'mill-valley', 'san-rafael',
    'sausalito', 'novato', 'corte-madera', 'tiburon', 'belvedere', 'larkspur',
    'greenbrae', 'ross', 'fairfax', 'san-anselmo', 'san-quentin'
  ];
  const CITY_SERVICES = ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'wine-cooler', 'ice-maker'];
  CITY_SERVICE_CITIES.forEach(c => CITY_SERVICES.forEach(s => routes.add('/' + c + '-' + s + '-repair')));

  // Maintenance
  ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven-range', 'cooktop', 'wine-cooler'].forEach(m =>
    routes.add('/maintenance/' + m)
  );

  // Utility pages
  ['/privacy-policy', '/site-map', '/blog-faq', '/thank-you-booking', '/services',
   '/llm-info', '/book', '/terms', '/admin', '/admin/dashboard', '/admin/cms'].forEach(r => routes.add(r));

  // SF neighborhoods
  ['sunset-district', 'richmond-district', 'mission-district', 'noe-valley',
   'castro', 'marina', 'pacific-heights', 'nob-hill', 'north-beach', 'soma',
   'bernal-heights', 'potrero-hill'].forEach(n =>
    routes.add('/san-francisco/' + n + '-appliance-repair')
  );

  // Noindex exclusions (must match generate-seo-snapshots.cjs)
  const includeLlmInfoInSitemap = false;
  const noindexRoutes = new Set([
    '/thank-you-booking', '/privacy-policy', '/terms', '/blog-faq',
    ...(includeLlmInfoInSitemap ? [] : ['/llm-info']),
    '/admin', '/admin/dashboard', '/admin/cms',
  ]);

  // Redirect sources — these are 301'd, not indexable standalone pages
  const redirectSources = new Set([
    '/belvedere-appliance-repair',
  ]);

  // Filter: only indexable, non-redirect routes
  const indexable = new Set();
  routes.forEach(r => {
    if (!noindexRoutes.has(r) && !redirectSources.has(r)) indexable.add(r);
  });

  return indexable;
}

// Main
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
const currentUrls = parseSitemapUrls(sitemapContent);
const expectedUrls = buildExpectedUrls();

const missingFromSitemap = [...expectedUrls].filter(u => !currentUrls.has(u)).sort();
const extraInSitemap = [...currentUrls].filter(u => !expectedUrls.has(u)).sort();

if (missingFromSitemap.length === 0 && extraInSitemap.length === 0) {
  console.log(`\n✅ Sitemap is in sync (${currentUrls.size} URLs)\n`);
  process.exit(0);
} else {
  console.error(`\n❌ Sitemap drift detected!\n`);
  if (missingFromSitemap.length > 0) {
    console.error(`Missing from sitemap (${missingFromSitemap.length}):`);
    missingFromSitemap.forEach(u => console.error(`  + ${u}`));
  }
  if (extraInSitemap.length > 0) {
    console.error(`\nExtra in sitemap — should be excluded (${extraInSitemap.length}):`);
    extraInSitemap.forEach(u => console.error(`  - ${u}`));
  }
  console.error(`\nFix: run 'yarn build' to regenerate sitemap, then commit public/sitemap.xml\n`);
  process.exit(1);
}

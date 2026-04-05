#!/usr/bin/env node

/**
 * SEO Snapshots Generator - NO Chromium Required
 * Generates static HTML files with SEO content injected into root div
 */

const fs = require('fs');
const path = require('path');

// Import SEO configuration from CommonJS file
const { ALLOWED_CITIES, KEY_SERVICES, BRAND_PAGES, BLOG_PAGES, OTHER_KEY_PAGES, getSEOContent } = require('./seo-config.cjs');

const BUILD_DIR = path.join(__dirname, '../build');
const TEMPLATE_PATH = path.join(BUILD_DIR, 'index.html');

console.log('🚀 Starting SEO Snapshots Generation...\n');

// Read the template HTML
if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('❌ Build directory not found. Run `yarn build` first.');
  process.exit(1);
}

const templateHTML = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Generate routes list
const routes = [];

// Home page
routes.push('/');

// Service pages
KEY_SERVICES.forEach(service => {
  routes.push(`/${service}`);
});

// Brand pages
BRAND_PAGES.forEach(brand => {
  routes.push(`/${brand.slug}`);
});

// Blog pages
routes.push('/blog');
BLOG_PAGES.forEach(blog => {
  routes.push(`/${blog.slug}`);
});

// Other key pages
OTHER_KEY_PAGES.forEach(page => {
  routes.push(`/${page}`);
});

// City pages — CANONICAL pattern: /{city}-appliance-repair
ALLOWED_CITIES.forEach(city => {
  routes.push(`/${city.slug}-appliance-repair`);
});

// City+Service combination pages — {city}-{service}-repair
const CITY_SERVICE_CITIES = [
  'san-francisco', 'daly-city', 'south-san-francisco', 'san-bruno', 'pacifica',
  'millbrae', 'mill-valley', 'san-rafael', 'sausalito', 'novato',
  'corte-madera', 'tiburon', 'belvedere', 'larkspur', 'greenbrae',
  'ross', 'fairfax', 'san-anselmo'
];
const CITY_SERVICE_SERVICES = ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'wine-cooler', 'ice-maker'];
CITY_SERVICE_CITIES.forEach(city => {
  CITY_SERVICE_SERVICES.forEach(svc => {
    routes.push(`/${city}-${svc}-repair`);
  });
});

// Maintenance sub-pages
routes.push('/maintenance/refrigerator');
routes.push('/maintenance/washer');
routes.push('/maintenance/dryer');
routes.push('/maintenance/dishwasher');
routes.push('/maintenance/oven-range');
routes.push('/maintenance/cooktop');
routes.push('/maintenance/wine-cooler');

// Utility / legal / other pages
routes.push('/privacy-policy');
routes.push('/site-map');
routes.push('/blog-faq');
routes.push('/thank-you-booking');
routes.push('/services');
routes.push('/llm-info');
routes.push('/book');

// SF neighborhood pages
const SF_NEIGHBORHOODS = [
  'sunset-district', 'richmond-district', 'mission-district', 'noe-valley',
  'castro', 'marina', 'pacific-heights', 'nob-hill', 'north-beach',
  'soma', 'bernal-heights', 'potrero-hill'
];
SF_NEIGHBORHOODS.forEach(n => routes.push(`/san-francisco/${n}-appliance-repair`));

console.log(`📝 Generating ${routes.length} SEO snapshots...\n`);

let successCount = 0;
let failedRoutes = [];

routes.forEach(route => {
  try {
    const seoData = getSEOContent(route);
    
    // Normalize route for filesystem use (strip leading slashes)
    // route keeps its original value for URL/canonical generation
    const routePath = (route === '/') ? '' : route.replace(/^\/+/, '');
    
    // For root '/', overwrite build/index.html directly
    // For other routes, create both directory-based AND flat HTML files
    let outputDir, outputPath;
    if (route === '/') {
      outputDir = BUILD_DIR;
      outputPath = path.join(BUILD_DIR, 'index.html');
    } else {
      // Directory-based file (build/routePath/index.html)
      outputDir = path.join(BUILD_DIR, routePath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      outputPath = path.join(outputDir, 'index.html');
    }
    
    // Build static SEO HTML block
    const seoHTML = `
      <div style="max-width: 1200px; margin: 0 auto; padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1A3B5D;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: #1A3B5D;">${seoData.h1}</h1>
        ${seoData.content}
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 2px solid #E8F4FA;">
          <p style="margin-bottom: 0.5rem;"><strong>Related Services & Areas:</strong></p>
          ${seoData.internalLinks.map(link => {
            const linkText = link.replace('/', '').replace(/-/g, ' ').replace(/appliance repair /i, '');
            return `<a href="${link}" style="margin-right: 1rem; color: #C0362C; text-decoration: none;">${linkText || 'Home'}</a>`;
          }).join(' • ')}
        </div>
      </div>
    `;
    
    // Update HTML: title, meta, canonical, root content
    let html = templateHTML;
    
    // Update title
    html = html.replace(/<title>.*?<\/title>/, `<title>${seoData.title}</title>`);
    
    // Update or add meta description
    if (html.includes('name="description"')) {
      html = html.replace(/(<meta name="description" content=")[^"]*"/, `$1${seoData.description}"`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${seoData.description}">\n</head>`);
    }
    
    // Update or add canonical link — use seoData.canonical if explicitly set
    const canonicalURL = seoData.canonical || `https://fixitbay.net${route}`;
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/(<link rel="canonical" href=")[^"]*"/, `$1${canonicalURL}"`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalURL}">\n</head>`);
    }
    
    // Update og:title, og:description, og:url if present
    html = html.replace(/(<meta property="og:title" content=")[^"]*"/, `$1${seoData.title}"`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*"/, `$1${seoData.description}"`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonicalURL}"`);
    
    // Update twitter:title and twitter:description
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${seoData.title}"`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${seoData.description}"`);
    
    // Add robots meta if specified (e.g., noindex for utility pages)
    if (seoData.robots) {
      if (html.includes('name="robots"')) {
        html = html.replace(/(<meta name="robots" content=")[^"]*"/, `$1${seoData.robots}"`);
      } else {
        html = html.replace('</head>', `  <meta name="robots" content="${seoData.robots}">\n</head>`);
      }
    }
    
    // Inject page-specific JSON-LD schemas (BreadcrumbList, Service, etc.)
    if (seoData.schemas && seoData.schemas.length > 0) {
      const schemaScripts = seoData.schemas.map(s =>
        `<script type="application/ld+json">${JSON.stringify(s)}</script>`
      ).join('\n  ');
      html = html.replace('</head>', `  ${schemaScripts}\n</head>`);
    }

    // Inject SEO content into root div (handles both empty and pre-filled templates)
    html = html.replace(/<div id="root">[\s\S]*?<\/div>(?=<script)/, `<div id="root">${seoHTML}</div>`);
    
    // Write output file (directory-based: build/route/index.html)
    fs.writeFileSync(outputPath, html, 'utf-8');
    
    // ALSO write flat HTML file (build/routePath.html) for Netlify rewrite compatibility
    // This ensures the file is served even if Netlify's Pretty URLs is disabled
    if (route !== '/') {
      const flatPath = path.join(BUILD_DIR, `${routePath}.html`);
      fs.writeFileSync(flatPath, html, 'utf-8');
    }
    
    successCount++;
    console.log(`✅ ${route}`);
    
  } catch (error) {
    console.error(`❌ Failed: ${route} - ${error.message}`);
    failedRoutes.push(route);
  }
});

console.log(`\n✅ Generated ${successCount}/${routes.length} SEO snapshots successfully!`);

if (failedRoutes.length > 0) {
  console.error(`\n❌ Failed routes (${failedRoutes.length}):`);
  failedRoutes.forEach(r => console.error(`  - ${r}`));
  process.exit(1);
}

// Generate _redirects file for Netlify
// This ensures each route is explicitly mapped to its flat HTML file
// _redirects rules are processed BEFORE netlify.toml rules
const redirectLines = [];
routes.forEach(route => {
  if (route !== '/') {
    // Normalize: strip leading slash for the filesystem target filename
    const routePath = route.replace(/^\/+/, '');
    // Map clean URL to flat HTML file (target without leading /)
    redirectLines.push(`${route}  /${routePath}.html  200`);
  }
});
// SPA fallback MUST be last — catches any route without a prerendered file
// BUT FIRST: add 301 redirects for alternate slugs, misc redirects, and extended city pages
const redirects301 = [
  // Alternate slug redirects
  ['/disposal-repair', '/garbage-disposal-repair'],
  ['/wine-refrigerator-repair', '/wine-cooler-repair'],
  ['/stacked-washer-dryer-repair', '/washer-repair'],
  ['/wall-oven-repair', '/oven-repair'],
  ['/built-in-refrigerator-repair', '/refrigerator-repair'],
  // Misc public redirects
  ['/appliance-repair', '/services'],
  ['/appliance-repair-near-you', '/service-areas'],
  ['/appliance-repair-tips', '/blog'],
  ['/appliance-replacement', '/services'],
  // Extended city redirects (outside service area)
  ['/alameda-appliance-repair', '/service-areas'],
  ['/appliance-repair-alameda', '/service-areas'],
  ['/berkeley-appliance-repair', '/service-areas'],
  ['/appliance-repair-berkeley', '/service-areas'],
  ['/burlingame-appliance-repair', '/service-areas'],
  ['/appliance-repair-burlingame', '/service-areas'],
  ['/castro-valley-appliance-repair', '/service-areas'],
  ['/concord-appliance-repair', '/service-areas'],
  ['/appliance-repair-concord', '/service-areas'],
  ['/cupertino-appliance-repair', '/service-areas'],
  ['/appliance-repair-cupertino', '/service-areas'],
  ['/dublin-appliance-repair', '/service-areas'],
  ['/appliance-repair-dublin', '/service-areas'],
  ['/foster-city-appliance-repair', '/service-areas'],
  ['/appliance-repair-foster-city', '/service-areas'],
  ['/fremont-appliance-repair', '/service-areas'],
  ['/appliance-repair-fremont', '/service-areas'],
  ['/hayward-appliance-repair', '/service-areas'],
  ['/appliance-repair-hayward', '/service-areas'],
  ['/livermore-appliance-repair', '/service-areas'],
  ['/appliance-repair-livermore', '/service-areas'],
  ['/milpitas-appliance-repair', '/service-areas'],
  ['/appliance-repair-milpitas', '/service-areas'],
  ['/mountain-view-appliance-repair', '/service-areas'],
  ['/appliance-repair-mountain-view', '/service-areas'],
  ['/newark-appliance-repair', '/service-areas'],
  ['/appliance-repair-newark', '/service-areas'],
  ['/oakland-appliance-repair', '/service-areas'],
  ['/appliance-repair-oakland', '/service-areas'],
  ['/palo-alto-appliance-repair', '/service-areas'],
  ['/appliance-repair-palo-alto', '/service-areas'],
  ['/pleasanton-appliance-repair', '/service-areas'],
  ['/appliance-repair-pleasanton', '/service-areas'],
  ['/redwood-city-appliance-repair', '/service-areas'],
  ['/appliance-repair-redwood-city', '/service-areas'],
  ['/richmond-appliance-repair', '/service-areas'],
  ['/appliance-repair-richmond', '/service-areas'],
  ['/san-jose-appliance-repair', '/service-areas'],
  ['/appliance-repair-san-jose', '/service-areas'],
  ['/san-leandro-appliance-repair', '/service-areas'],
  ['/appliance-repair-san-leandro', '/service-areas'],
  ['/san-mateo-appliance-repair', '/service-areas'],
  ['/appliance-repair-san-mateo', '/service-areas'],
  ['/union-city-appliance-repair', '/service-areas'],
  ['/appliance-repair-union-city', '/service-areas'],
  ['/vallejo-appliance-repair', '/service-areas'],
  ['/appliance-repair-vallejo', '/service-areas'],
  ['/walnut-creek-appliance-repair', '/service-areas'],
  ['/appliance-repair-walnut-creek', '/service-areas'],
  ['/appliance-repair-santa-clara', '/service-areas'],
  ['/belvedere-tiburon-appliance-repair', '/belvedere-appliance-repair'],
];
redirects301.forEach(([from, to]) => {
  redirectLines.push(`${from}  ${to}  301`);
});
redirectLines.push('/*  /index.html  200');

// Add www → non-www canonical redirect
redirectLines.unshift('https://www.fixitbay.net/* https://fixitbay.net/:splat 301!');

// Add city alternate-slug redirects
const cityRedirects = [
  '/appliance-repair-san-francisco /san-francisco-appliance-repair 301',
  '/appliance-repair-daly-city /daly-city-appliance-repair 301',
  '/appliance-repair-south-san-francisco /south-san-francisco-appliance-repair 301',
  '/appliance-repair-san-bruno /san-bruno-appliance-repair 301',
  '/appliance-repair-pacifica /pacifica-appliance-repair 301',
  '/appliance-repair-millbrae /millbrae-appliance-repair 301',
  '/appliance-repair-colma /colma-appliance-repair 301',
  '/appliance-repair-brisbane /brisbane-appliance-repair 301',
  '/appliance-repair-montara /montara-appliance-repair 301',
  '/appliance-repair-mill-valley /mill-valley-appliance-repair 301',
  '/appliance-repair-san-rafael /san-rafael-appliance-repair 301',
  '/appliance-repair-sausalito /sausalito-appliance-repair 301',
  '/appliance-repair-novato /novato-appliance-repair 301',
  '/appliance-repair-corte-madera /corte-madera-appliance-repair 301',
  '/appliance-repair-tiburon /tiburon-appliance-repair 301',
  '/appliance-repair-larkspur /larkspur-appliance-repair 301',
  '/appliance-repair-greenbrae /greenbrae-appliance-repair 301',
  '/appliance-repair-ross /ross-appliance-repair 301',
  '/appliance-repair-fairfax /fairfax-appliance-repair 301',
  '/appliance-repair-san-anselmo /san-anselmo-appliance-repair 301',
  '/appliance-repair-belvedere /belvedere-appliance-repair 301',
];
redirectLines.push(...cityRedirects);

const redirectsPath = path.join(BUILD_DIR, '_redirects');
fs.writeFileSync(redirectsPath, redirectLines.join('\n') + '\n', 'utf-8');
console.log(`\n📄 Generated _redirects with ${redirectLines.length} rules (${redirectLines.length - 1} routes + SPA fallback)`);

console.log('\n🎉 SEO Snapshots generation complete!');

// Generate sitemap.xml — canonical indexable URLs only
const SITE_URL = 'https://fixitbay.net';
const noindexRoutes = [
  '/thank-you-booking', '/book',
  '/llm-info', '/blog-faq', '/privacy-policy'
];
const sitemapUrls = ['/', ...routes.filter(r => r !== '/' && !noindexRoutes.includes(r))];
const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(r => {
  const priority = r === '/' ? '1.0'
    : r === '/services' || r === '/service-areas' || r === '/brands' ? '0.8'
    : r.startsWith('/blog/') || r.startsWith('/maintenance/') ? '0.5'
    : '0.7';
  return `  <url>
    <loc>${SITE_URL}${r}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`\n🗺️  Generated sitemap.xml with ${sitemapUrls.length} canonical URLs (excluded ${noindexRoutes.length} noindex route(s))`);


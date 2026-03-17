#!/usr/bin/env node
/**
 * submit-indexnow.cjs — Submit new/updated URLs to IndexNow (Bing, Yandex, etc.)
 * Also pings Google and Bing sitemap endpoints.
 *
 * Usage:
 *   node scripts/submit-indexnow.cjs                  # Submit all sitemap URLs
 *   node scripts/submit-indexnow.cjs --new-only       # Submit only city+service + new pages
 *   node scripts/submit-indexnow.cjs --urls /a /b /c  # Submit specific URLs
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE = 'https://fixitbay.net';
const INDEXNOW_KEY = 'd905a0c5900bccfa6834d45047983926';
const SITEMAP_URL = `${SITE}/sitemap.xml`;

// Parse sitemap for all URLs
function parseSitemapURLs() {
  const sitemapPath = path.join(__dirname, '..', 'build', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('build/sitemap.xml not found. Run generate-seo-snapshots.cjs first.');
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = regex.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

// New pages = city+service, marin-county, blog, neighborhood pages added recently
function filterNewPages(urls) {
  return urls.filter(u => {
    const p = u.replace(SITE, '');
    return (
      /\/[a-z-]+-(?:refrigerator|washer|dryer|dishwasher|oven|wine-cooler|ice-maker)-repair$/.test(p) ||
      p === '/marin-county-appliance-repair' ||
      p.startsWith('/blog/') ||
      p.startsWith('/san-francisco/')
    );
  });
}

// Submit URLs to IndexNow API
function submitIndexNow(urls) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: 'fixitbay.net',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) },
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// Ping Google & Bing sitemap endpoints
function pingSitemap() {
  const endpoints = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  ];
  return Promise.all(endpoints.map(url =>
    new Promise((resolve) => {
      https.get(url, res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => resolve({ url: url.split('?')[0], status: res.statusCode }));
      }).on('error', err => resolve({ url: url.split('?')[0], status: 'ERROR', error: err.message }));
    })
  ));
}

// Batch URLs (IndexNow max 10,000 per request, use 500 per batch)
async function submitInBatches(urls) {
  const BATCH_SIZE = 500;
  let submitted = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    try {
      const result = await submitIndexNow(batch);
      submitted += batch.length;
      const statusMsg = result.status === 200 ? 'OK' : result.status === 202 ? 'Accepted' : `Status ${result.status}`;
      console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs → ${statusMsg}`);
    } catch (err) {
      console.error(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ERROR — ${err.message}`);
    }
  }
  return submitted;
}

async function main() {
  const args = process.argv.slice(2);
  const newOnly = args.includes('--new-only');
  const urlsIdx = args.indexOf('--urls');

  let urls;
  if (urlsIdx >= 0) {
    urls = args.slice(urlsIdx + 1).map(u => u.startsWith('http') ? u : `${SITE}${u}`);
  } else {
    const allUrls = parseSitemapURLs();
    urls = newOnly ? filterNewPages(allUrls) : allUrls;
  }

  console.log(`\n📡 IndexNow Submission`);
  console.log(`   Key: ${INDEXNOW_KEY}`);
  console.log(`   URLs to submit: ${urls.length}`);
  console.log(`   Mode: ${newOnly ? 'new pages only' : urlsIdx >= 0 ? 'specific URLs' : 'all sitemap URLs'}\n`);

  // Submit to IndexNow
  if (urls.length > 0) {
    console.log('Submitting to IndexNow (api.indexnow.org)...');
    const count = await submitInBatches(urls);
    console.log(`  Total submitted: ${count}\n`);
  }

  // Ping Google & Bing
  console.log('Pinging sitemap endpoints...');
  const pings = await pingSitemap();
  for (const p of pings) {
    console.log(`  ${p.url}: ${p.status === 200 ? 'OK' : p.status}`);
  }

  console.log(`\n✅ Done. ${urls.length} URLs submitted to IndexNow, sitemap pinged to Google & Bing.\n`);
}

main().catch(console.error);

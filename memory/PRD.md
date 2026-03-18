# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase SEO and content optimization of a React SPA appliance repair website (fixitbay.net). Ongoing SEO fixes based on Google Search Console and Ahrefs data.

## Architecture
```
/app/frontend/src/
  components/
    SEOMetaTags.js, CityRepairRoute.js
    pages/CityServicePage.js, BookPage.js, cities/[21 custom]
    templates/ApplianceRepairPageNew.js, CityRepairPage.js, MobileServiceLanding.js
  seo/seoContent.js
  public/
    index.html, sitemap.xml (230 URLs), robots.txt, _redirects
    d905a0c5900bccfa6834d45047983926.txt  (IndexNow verification key)
/app/frontend/scripts/
    seo-config.cjs, generate-seo-snapshots.cjs
    submit-indexnow.cjs  (IndexNow + sitemap ping script)
```

## Completed Work

### Session 19 (Mar 18, 2026) — New Blog Post Integration
- Integrated 2 new blog post components into the app:
  - `/blog/dryer-not-heating` — "Dryer Not Heating? Common Causes & Repair Cost in San Francisco"
  - `/blog/appliance-repair-cost-san-francisco` — "Appliance Repair Cost in San Francisco 2026 — Complete Price Guide"
- Added lazy imports and routes in `App.js`
- Added metadata to `STATIC_POSTS` in `BlogListPage.js` (new "San Francisco" category filter tab auto-generated)
- Added SEO config entries in `seo-config.cjs` (BLOG_PAGES + blogSEO + internalLinks)
- Rebuilt production build — all 233 SEO snapshots verified (0 failures)
- Submitted 160 URLs via IndexNow (`blog/refrigerator-not-cooling` update also included)
- Testing: 8/8 frontend tests passed

### Session 18 (Mar 17, 2026) — Sitemap Sync & IndexNow
- Synced public/sitemap.xml with build/sitemap.xml (207→230 URLs), adding 23 missing pages (marin-county, 9 blog, 12 SF neighborhoods, llm-info)
- Created IndexNow setup: API key `d905a0c5900bccfa6834d45047983926`, verification file in public/
- Created `scripts/submit-indexnow.cjs`: submits URLs to api.indexnow.org, pings Google & Bing sitemap endpoints
- Submitted 159 new pages to IndexNow (status: 202 Accepted)
- robots.txt already declares `Sitemap: https://fixitbay.net/sitemap.xml`
- Google/Bing `/ping` endpoints deprecated; user should verify sitemap in GSC

### Session 17 — Meta Description Lengths
- All descriptions normalized to 130-160 chars across seo-config.cjs, seoContent.js, CityServicePage.js, component files

### Session 16 — Internal Links
- City pages: "Popular Repairs" section → city+service links
- Service pages: city chips → city+service links

### Session 15 — Core SEO Fixes
- 126 city+service routes, noindex fix, /book removed from sitemap, title format fix, warranty text fix

## Backlog
- (P1) Investigate 2 Soft 404 pages from GSC
- (P1) Refactor dual content sources into single source
- (P2) Refactor monolithic components

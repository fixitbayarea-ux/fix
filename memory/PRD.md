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

### Session 21 (Mar 18, 2026) — Internal Linking (78 low-link pages)
- In `ApplianceRepairPageNew.js` city layout: replaced hardcoded 7-service "Popular Repairs" list with `CITY_SERVICE_LINKS` per-city data — cities in the map show only their actual service pages; others fall back to full list
- Added "by City" section on service pages (refrigerator, washer, dryer, dishwasher, oven): uses reverse `SERVICE_CITY_LINKS` map to list all cities offering that service with `/${citySlug}-${service}-repair` links
- Added `CITY_DISPLAY_NAMES`, `SERVICE_LABELS`, and `SERVICE_CITY_LINKS` (reverse map) constants to the template
- 233 SEO snapshots rebuilt (0 failures)


- Fixed 30+ page titles exceeding 60 chars across all page components and seo-config.cjs:
  - Removed "Fast " from "Fast Same-Day Service" pattern across all city pages (11 in seo-config + 3 component files)
  - Removed "& Bay Area" from service page titles (Refrigerator, Dishwasher, Cooktop, Ice Maker, Wine Cooler, Stove, Range, Freezer)
  - Shortened blog post titles: DryerTakingTooLong, ApplianceLifespan, GasSmellFromStove, RepairVsReplace, WasherErrorCodes, DishwasherNotDraining, IceMakerTroubleshooting, OvenTemperatureCalibration, EnergyEfficientAppliances, RefrigeratorWaterFilter
  - Shortened misc pages: About, Contact, Services, Book, LocalRepair, Reviews, CooktopMaintenance, BelvedereTiburon, BlogFAQ
  - Fixed city+service page title template in seo-config.cjs (line 929)
- Fixed description template in getCityServiceContent() (seoContent.js + seo-config.cjs): max 150 chars (was 160 for worst case)
- Replaced "6-month life" with "180-day life" in Whirlpool & KitchenAid sections of brandLandingData.js
- Rebuilt production build: 233 SEO snapshots verified (0 failures)
- All existing content, links, H1s, and functionality preserved


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

### Session 22 (Mar 18, 2026) — Fix "Page and SERP titles do not match" (P0)
- Root cause: `applySEO()` function in `public/index.html` had a fallback `routeMeta[path] || routeMeta['/']` that overrode city+service page titles with the home page title when routes weren't in the `routeMeta` object
- Fix: Changed fallback to early `return` when route not in `routeMeta` — React's `SEOMetaTags` component handles title for unknown routes
- Verified: `/daly-city-refrigerator-repair` → `"Refrigerator Repair Daly City | Same-Day | FixitBay"` ✅, `/san-francisco-washer-repair` → `"Washer Repair San Francisco | Same-Day | FixitBay"` ✅
- File changed: `frontend/public/index.html` (3-line change)

### Session 23 (Mar 18, 2026) — Mobile UX Fixes & Blog Date Updates
- **FIX 2 (P0)**: SF city page (`SanFrancisco.js`) hero CTA buttons — added `className="sf-cta-row/sf-cta-book/sf-cta-call"` and CSS rules: `align-items: stretch`, `width: 100%`, `display: flex`, `min-width: 0` at `@media (max-width: 767px)` for full-width mobile buttons
- **FIX 2B**: `ApplianceRepairPageNew.js` — enhanced `.city-cta-row/book/call` mobile CSS with `align-items: stretch` and `display: flex !important` (all 20 city pages using template)
- **FIX 3**: Homepage intro CTA buttons (`ProfessionalLandingPage.js`) — added `align-items: stretch !important` and `display: flex !important` to `.intro-cta-row`, `.intro-cta-book`, `.intro-cta-call` CSS rules
- **FIX 4**: Updated all blog post dates from January 2025 → January 2026 across `BlogPage.js`, `BlogPost.js`, `BlogListPage.js`, and all individual blog files; updated `dateModified` in JSON-LD; regenerated 233 SEO snapshots
- **FIX 1 (Ghost div)**: Not identified via code analysis — requires user testing on actual mobile device to reproduce and pinpoint

### Session 24 (Mar 18, 2026) — Blog Post Enhancements
- **FIX 1 (Mid-Article CTA)**: Updated all 11 existing orange CTAs to dark navy (#0D1B2A) with orange left border (#FF5722). Added missing CTA to 3 posts (DishwasherMaintenance, DryerNotHeating, ApplianceRepairCostSanFrancisco). Standardized heading: "Need appliance repair in San Francisco?", subtext, Call + Book online buttons.
- **FIX 2 (Related Articles)**: Added `data-testid="related-articles"` section to all 14 blog posts with 2-3 topically-relevant article cards and "Read article →" text. Fixed broken internal links (/blog/repair-vs-replace → /blog/when-to-repair-vs-replace) in 3 posts.
- **SEO**: Regenerated 233/233 SEO snapshots successfully.

### Session 25 (Mar 18, 2026) — Blog SEO Enhancements
- **RefrigeratorNotCooling**: Title updated to "[SF Tech Guide]", datePublished → March 2026, meta description fixed to 157 chars, SF coastal humidity tip added for coils, FAQ pricing updated to "from $255"
- **DryerNotHeating**: Meta description updated to reflect "from $235", 154 chars
- **ApplianceRepairCostSanFrancisco**: Title → "Price Guide", datePublished → March 2026, PRICING_DATA updated to match servicePricing.js (from $255/240/235/195/230), service links updated, FAQ pricing updated

### Session 26 (Mar 18, 2026) — SEO Meta Description & Title Length Fixes
- **FIX 2 (Titles > 60 chars)**: All page titles verified ≤60 chars across 466 generated HTML files. Fixed generic service fallback template and city+service template in `seo-config.cjs`. Also fixed city+service template in `seoContent.js`.
- **FIX 3 (Descriptions > 158 chars)**: Trimmed 30 meta descriptions across `seo-config.cjs` and `seoContent.js`:
  - City pages (Daly City), Reviews, Service Areas, Contact, Maintenance, Brands index
  - 12 blog descriptions (refrigerator-not-cooling, dishwasher-maintenance, dishwasher-not-draining, dryer-taking-too-long, washer-error-codes, oven-temperature-calibration, ice-maker-troubleshooting, appliance-lifespan, energy-efficient, gas-smell, marin-county, same-day, refrigerator-water-filter, when-to-repair-vs-replace)
  - 5 maintenance sub-pages (refrigerator, washer, dryer, dishwasher, wine-cooler)
  - Services, Privacy Policy, Blog FAQ pages
  - Generic service fallback and neighborhood page templates
- **FIX 1 (6-month text)**: All brand page warranty mentions already fixed. Fixed 1 remaining warranty-related "within 6 months" → "within 180 days" in neighborhood page template. All other "6 months" instances are legitimate service advice (e.g., "clean coils every 6 months").
- Regenerated 233/233 SEO snapshots. Final validation: 466 HTML files, 0 titles >60, 0 descriptions >158.

### Session 27 (Mar 19, 2026) — About Page VideoObject Schema & Video Enhancement
- Added `VideoObject` JSON-LD schema to About page (both React component via `useSchemas` hook and `seo-config.cjs` for pre-rendered HTML)
- Schema includes: name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl, publisher, duration
- Updated video section heading: "Watch Andrei in Action" → "See How Our Repair Process Works"
- Added descriptive subtitle above videos and a process description paragraph below the video embeds
- 233/233 SEO snapshots rebuilt. VideoObject schema validated in pre-rendered about.html.

### Session 28 (Mar 19, 2026) — Blog Date Updates & BlogFAQ CTA
- **FIX 1**: Updated blog post publication dates to 2026 in both `BlogListPage.js` (publish_date) and individual blog component JSON-LD schemas (datePublished + dateModified):
  - dishwasher-maintenance → 2026-01-18
  - washer-error-codes → 2026-02-10
  - dishwasher-not-draining → 2026-02-20
  - gas-smell-from-stove → 2026-03-01
- **FIX 2**: Added mid-article CTA box to `BlogFAQPage.js` after the 3rd category section (Dishwasher). Dark navy (#0D1B2A) background, orange (#FF5722) left border, Call + Book online buttons.
- 233/233 SEO snapshots rebuilt.

### Session 29 (Mar 19, 2026) — About Page Video Thumbnail + Schema Update
- **FIX 1**: Replaced YouTube iframe embeds with clickable thumbnail images linking to YouTube (resolves GSC "Video isn't on a watch page" error). Updated VideoObject JSON-LD schema: name includes "San Francisco", uploadDate→2024-01-01, removed duration field. Updated both React component and seo-config.cjs.
- **FIX 2**: Swipe hint on homepage services carousel was already implemented (no changes needed).
- 233/233 SEO snapshots rebuilt.

## Backlog
- (P1) Investigate 2 Soft 404 pages from GSC
- (P2) Remove `applySEO()` from `index.html` entirely (now that the core bug is fixed) to fully defer to `SEOMetaTags.js`
- (P2) Refactor dual content sources (`seoContent.js` + `seo-config.cjs`) into single source
- (P2) Refactor monolithic components

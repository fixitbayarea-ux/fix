# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase SEO and content optimization of a React SPA appliance repair website (fixitbay.net). Mobile-first, responsive on desktop. Ongoing SEO fixes based on Google Search Console data.

## Architecture
```
/app/frontend/src/
  components/
    SEOMetaTags.js             # Meta tags, robots, OG, Twitter
    pages/
      CityServicePage.js       # 126 city+service combo pages
      BookPage.js              # Booking page (noindex=true)
    templates/
      ApplianceRepairPageNew.js # Desktop template
      MobileServiceLanding.js   # Mobile template
  seo/
    seoContent.js              # Runtime SEO content
  public/
    index.html                 # routeMeta inline script
    sitemap.xml                # 207 canonical URLs
    _redirects                 # Netlify 301 redirects
/app/frontend/scripts/
    seo-config.cjs             # SEO content for snapshots (robots tags added)
    generate-seo-snapshots.cjs # Generates 232 HTML snapshots + build/sitemap.xml
```

## Completed Work

### Session 15 (Mar 17, 2026)

**Critical Fix 1 — noindex removal from indexable pages:**
- Added explicit `robots: 'index, follow'` to ALL page types in seo-config.cjs: city+service, city, service, blog, marin-county
- Added `robots: 'noindex, follow'` to /book in seo-config.cjs
- Added `noindex={true}` to SEOMetaTags in BookPage.js
- Added `/book` to noindexRoutes array in generate-seo-snapshots.cjs
- Verified: all indexable pages have `index, follow`, /book has `noindex, follow`

**Critical Fix 2 — City+service page title format:**
- Moved city+service handler BEFORE generic service handler in seo-config.cjs (was matching wrong regex)
- Title now: `"{Service} Repair {City} | Same-Day | FixitBay"` (was: `"{City} {Service} Repair in San Francisco & Bay Area | FixitBay"`)
- Verified on /daly-city-refrigerator-repair, /san-francisco-washer-repair, /mill-valley-wine-cooler-repair, etc.

**Critical Fix 3 — /book removed from sitemap:**
- Added `/book` to noindexRoutes in generate-seo-snapshots.cjs
- Build sitemap: 230 canonical URLs (excluded /thank-you-booking and /book)
- Verified: /book not in build/sitemap.xml

**Previous Session Work (inherited):**
- 126 city+service routes (18 cities × 7 services) in App.js
- "6-month warranty" → "180-day warranty" globally (26 in index.html, 9 in seo-config.cjs)
- All city+service pages render 300+ words with city context, problems, pricing, FAQs, JSON-LD schema
- SEO snapshots regenerated: 232/232

## Test Results
- iteration_95.json: 10/10 passed (content rendering, mobile, JSON-LD, warranty text)
- iteration_96.json: 9/10 passed (titles, robots tags), /book noindex fixed post-test

## Backlog
- (P1) Investigate 2 Soft 404 pages from GSC
- (P1) Refactor dual content sources (seoContent.js + seo-config.cjs) into single source
- (P2) Refactor monolithic components into smaller sub-components
- (P2) Centralize hardcoded content into JSON structures

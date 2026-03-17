# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase SEO and content optimization of a React SPA appliance repair website (fixitbay.net). Mobile-first, responsive on desktop. Ongoing SEO fixes based on Google Search Console data.

## Architecture
```
/app/frontend/src/
  components/
    SEOMetaTags.js             # Meta tags, robots, OG, Twitter
    CityRepairRoute.js         # Dynamic router → custom city pages or generic CityRepairPage
    pages/
      CityServicePage.js       # 126 city+service combo pages
      BookPage.js              # Booking page (noindex=true)
      cities/                  # 21 custom city page components (all custom layouts)
    templates/
      ApplianceRepairPageNew.js # Desktop template (Popular Repairs + Service Areas sections)
      CityRepairPage.js        # Generic city template (Popular Repairs section added)
      MobileServiceLanding.js  # Mobile template
  seo/
    seoContent.js              # Runtime SEO content
  public/
    index.html                 # routeMeta inline script
    sitemap.xml                # 207+ canonical URLs
    _redirects                 # Netlify 301 redirects
/app/frontend/scripts/
    seo-config.cjs             # SEO content for snapshots (city+service handler, robots tags)
    generate-seo-snapshots.cjs # Generates 232 HTML snapshots + build/sitemap.xml
```

## Completed Work

### Session 16 (Mar 17, 2026) — Internal Link Fixes

**Fix: Orphan city+service pages — added internal links from city & service pages:**

1. **City pages → city+service links (Popular Repairs section):**
   - ApplianceRepairPageNew.js: Added "Popular Repairs in {cityName}" section INSIDE city layout (before footer). 7 links: refrigerator, washer, dryer, dishwasher, oven, wine-cooler, ice-maker. Uses `Link` component for SPA navigation.
   - SanFrancisco.js: Added same section directly (custom layout, doesn't use template).
   - CityRepairPage.js: Added same section (generic fallback template).
   - seo-config.cjs: Updated `popularRepairsClusterHTML()` to link to `/{city}-{service}-repair` instead of `/{service}-repair`.

2. **Service pages → city+service links (city chips):**
   - ApplianceRepairPageNew.js: City chips now link to `/{city}-{service}-repair` for the 7 supported services. Falls back to `/{city}-appliance-repair` for non-city-service services (cooktop, freezer, etc.).
   - seo-config.cjs: Updated `serviceAreaClusterHTML()` to conditionally link to city+service pages.

3. **Also from Session 15 carried forward:**
   - "6-month warranty" → "180-day warranty" globally (index.html, seo-config.cjs, build/)
   - noindex fix: explicit `robots: 'index, follow'` on all indexable page types
   - /book: noindex=true in both React component and seo-config.cjs
   - /book removed from sitemap (noindexRoutes in generator)
   - City+service title format: "Refrigerator Repair Daly City | Same-Day | FixitBay"
   - 126 city+service routes (18 cities × 7 services)

## Test Results
- iteration_95.json: 10/10 passed (content rendering, mobile, JSON-LD, warranty text)
- iteration_96.json: 9/10 passed (titles, robots tags) — /book noindex fixed post-test
- iteration_97.json: 4/8 failed (Popular Repairs not in city layout return path — fixed)
- iteration_98.json: 6/7 passed (SF custom page needed separate fix — fixed)
- Final verification: Screenshot confirms "Popular Repairs in Daly City" visible with 7 links

## Backlog
- (P1) Investigate 2 Soft 404 pages from GSC
- (P1) Refactor dual content sources (seoContent.js + seo-config.cjs) into single source
- (P2) Refactor monolithic components into smaller sub-components
- (P2) Add "Popular Repairs" to remaining custom city pages (Brisbane, Colma, Montara, San Quentin — these don't have city+service routes but could benefit)

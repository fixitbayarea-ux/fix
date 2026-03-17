# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase SEO and content optimization of a React SPA appliance repair website (fixitbay.net). Ongoing SEO fixes based on Google Search Console and Ahrefs data.

## Architecture
```
/app/frontend/src/
  components/
    SEOMetaTags.js             # Meta tags, robots, OG, Twitter
    CityRepairRoute.js         # Dynamic router → custom city pages or generic CityRepairPage
    pages/
      CityServicePage.js       # 126 city+service combo pages
      BookPage.js              # Booking page (noindex=true)
      cities/                  # 21 custom city page components
    templates/
      ApplianceRepairPageNew.js # Desktop template (Popular Repairs + Service Areas)
      CityRepairPage.js        # Generic city template (Popular Repairs section)
      MobileServiceLanding.js  # Mobile template
  seo/
    seoContent.js              # Runtime SEO content
  public/
    index.html                 # routeMeta inline script
    sitemap.xml                # 207+ canonical URLs
    _redirects                 # Netlify 301 redirects
/app/frontend/scripts/
    seo-config.cjs             # SEO content for snapshots
    generate-seo-snapshots.cjs # 232 HTML snapshots + build/sitemap.xml (230 canonical)
```

## Completed Work

### Session 17 (Mar 17, 2026) — Meta Description Length Fix

**All meta descriptions normalized to 130-160 characters:**
- seo-config.cjs: Fixed 12+ descriptions (city data, city+service template, generic city fallback, service data, blog, generic service fallback)
- seoContent.js: Updated getCityServiceContent() template to user-specified format (~140 chars)
- CityServicePage.js: Updated metaDescription template (removed neighborhoods, standardized format)
- DalyCity.js, Colma.js: Trimmed component-level metaDescription
- Verified 33 routes: 33 OK, 0 SHORT, 0 LONG
- SEO snapshots regenerated: 232/232

### Session 16 (Mar 17, 2026) — Internal Links
- City pages: "Popular Repairs in {City}" section with 7 city+service links
- Service pages: City chips link to city+service pages (conditional)
- Added to ApplianceRepairPageNew.js, SanFrancisco.js, CityRepairPage.js, seo-config.cjs

### Session 15 (Mar 17, 2026) — SEO Fixes
- "6-month warranty" → "180-day warranty" globally
- noindex fix: explicit robots tags on all page types
- /book: noindex=true, removed from sitemap
- City+service title format: "{Service} Repair {City} | Same-Day | FixitBay"
- 126 city+service routes (18 cities × 7 services)

## Backlog
- (P1) Investigate 2 Soft 404 pages from GSC
- (P1) Refactor dual content sources (seoContent.js + seo-config.cjs) into single source
- (P2) Refactor monolithic components into smaller sub-components

# FixitBay.net - Product Requirements Document

## Original Problem Statement
React SPA for appliance repair business (FixitBay). SSG via react-snap. Focus on SEO optimization (Ahrefs/GSC), mobile UX, WCAG accessibility.

## Architecture
- React SPA with react-snap SSG + seo-config.cjs
- react-router-dom with useDeferredValue (SPA flash fix)
- Netlify hosting with _redirects for 301s
- Static data (no backend DB)
- Schema.org JSON-LD (LocalBusiness, Service, FAQ, etc.)

## Current Status (Apr 2026)
- 230 URLs in sitemap.xml
- 232 pages in build
- All Ahrefs P0 issues resolved (sitemap sync, redirects, titles)

## Completed Work (Sessions 11-18)
- Mobile UI/UX overhaul, WCAG compliance
- react-helmet-async removal, SEOMetaTags migration
- Shared section components (13 reusable components)
- Non-breaking spaces across 170 files
- Review counts updated (Google 95, Thumbtack 153)
- Price list audit and update
- Garbage Disposal service fully removed
- Wine Refrigerator Repair standalone page
- RelatedServices internal linking component
- 301 redirects in _redirects (Netlify)
- Title tags optimized (all under 60 chars)
- Blog enrichment (bylines, CTAs, thumbnails)
- City landing pages (7 new)
- Maintenance pages pricing/schedule sections
- Commercial pages updated
- Sitemap.xml synced with all 230 URLs

## Backlog
- (P2) Refactor: merge CityRepairPage.js + CityLandingPage.js into universal component
- (P3) Performance: code-splitting, lazy-loading below-fold content

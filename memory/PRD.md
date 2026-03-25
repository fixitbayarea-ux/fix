# FixitBay.net - Product Requirements Document

## Original Problem Statement
An appliance repair business website (fixitbay.net) built as a React SPA with static pre-rendering via Node.js script. Ongoing SEO, content, and performance optimization work.

## Core Architecture
- **Frontend**: React SPA with static site generation (SSG)
- **Backend**: FastAPI + MongoDB (CMS for reviews, services, areas)
- **Pre-rendering**: `frontend/scripts/generate-seo-snapshots.cjs`
- **SEO Config**: `frontend/scripts/seo-config.cjs` (single source of truth — `seoContent.js` was removed as dead code)
- **Deployment**: Netlify/Cloudflare (uses `_headers` file for cache control)

## Completed Work

### Sessions 1-10 (Previous)
- SEO keyword fixes, schema dedup, blog rewrites, homepage UI fixes
- WebP images, cache headers, lazy loading
- Mobile grid responsiveness, sticky CTA padding, H1 sizing, CTA contrast
- Trust stats bar mobile layout, SF city content enrichment, soft 404 fix

### Session 11 (Mar 2026) — P2 Cleanup & Schema Audit
- Removed legacy `applySEO()` from `index.html` (~565 lines of dead code)
- Fixed duplicate BlogPosting schemas in 10 blog pages
- Converted `DishwasherMaintenance.js` from Helmet to SEOMetaTags+useSchemas
- Fixed stats section hidden on mobile (removed `display: none !important`)
- Added hero reassurance micro-copy on mobile
- Removed duplicate LocalBusiness on brand pages (BrandLandingPage.js)
- Added skip navigation link for keyboard accessibility
- Added `aria-controls` to FAQ accordion buttons
- Increased mobile nav touch targets to 44px minimum
- Changed nav buttons from implicit `type="submit"` to `type="button"`
- Fixed broken brand SVG logos (LG, Speed Queen, Thermador, Whirlpool)
- **Fixed sitewide LocalBusiness schema duplicates**: Added MutationObserver to `SchemaMarkup.js` that catches and removes page-level LocalBusiness schemas injected after mount — all 30+ pages now show exactly 1 LocalBusiness
- **Merged SEO sources**: Deleted unused `seoContent.js` (586 lines of dead code). `seo-config.cjs` is now the single source of truth.

## Backlog (Prioritized)

### P2
- Refactor monolithic page components (ProfessionalLandingPage.js is 800+ lines)
- Remove legacy `react-helmet-async` from remaining components
- Audit blog schema types beyond BlogPosting (FAQ, BreadcrumbList duplicates)

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

### Session 12 (Mar 2026) — CTA Contrast Fix
- Standardized secondary CTA button border opacity to `rgba(255,255,255,0.65)` across all dark-background templates
- Updated `ApplianceRepairPageNew.js`: 5 secondary CTAs (city-hero, city-cta-banner, city-final, service-hero, service-cta-banner) — border `2px solid rgba(255,255,255,0.65)`, `minHeight: 52`, hover reset to 0.65
- Updated `BrandLandingPage.js`: bottom CTA border from `PC.white15` (0.15) to 0.65, added `minHeight: 52` to both brand CTAs
- WCAG AA contrast compliance for secondary CTA buttons on dark backgrounds
- Fixed desktop nav tel link touch target: added `min-h-[44px]` to meet WCAG 2.5.5 (was 21px → now 44px)
- Removed duplicate mobile trust bar from ProfessionalLandingPage.js (was duplicating hero inline badges within 200px)
- Hidden breadcrumbs on mobile (<768px) in BrandLandingPage.js and ApplianceRepairPageNew.js hero sections (saves ~30px, markup stays in DOM for SEO)
- Added sr-only "(opens in new tab)" span to all 101 `target="_blank"` links across 30+ files (WCAG 2.4.4)
- Ensured all external links have `rel="noopener noreferrer"` (fixed 16 missing instances)
- Added `minHeight: 44px` to nav "Book Online" button (was 41px → 44px, WCAG 2.5.5)
- Standardized primary CTA text to "BOOK REPAIR ONLINE" across all templates (service, brand, homepage intro, DynamicLandingPage)

## Backlog (Prioritized)

### P1
- Refactor monolithic page components (ProfessionalLandingPage.js, ApplianceRepairPageNew.js are 800+ lines)

### P2
- Remove legacy `react-helmet-async` from remaining components
- Audit blog schema types beyond BlogPosting (FAQ, BreadcrumbList duplicates)

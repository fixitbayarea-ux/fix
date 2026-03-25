# FixitBay.net - Product Requirements Document

## Original Problem Statement
An appliance repair business website (fixitbay.net) built as a React SPA with static pre-rendering via Node.js script. Ongoing SEO, content, and performance optimization work.

## Core Architecture
- **Frontend**: React SPA with static site generation (SSG)
- **Backend**: FastAPI + MongoDB (CMS for reviews, services, areas)
- **Pre-rendering**: `frontend/scripts/generate-seo-snapshots.cjs`
- **SEO Config**: `frontend/scripts/seo-config.cjs` + `frontend/src/seo/seoContent.js`
- **Deployment**: Netlify/Cloudflare (uses `_headers` file for cache control)

## IMPORTANT: Dual SEO Source
SEO changes must be updated in BOTH:
1. `frontend/src/seo/seoContent.js` (client-side React)
2. `frontend/scripts/seo-config.cjs` (SSG pre-rendering)
3. Individual page component files (e.g., `RefrigeratorRepairPage.js`)

## Completed Work

### Sessions 1-4 — SEO & Content
- Fixed keyword cannibalization for 7 service pages
- Removed duplicate Service schema injections
- Rewrote 2 blog posts, created 1 new blog post

### Session 5 — Homepage Visual Fixes
- Hero microcopy, stats row, pricing cards, reviews 3x3 grid, explore section

### Session 6 — Performance Optimization
- Hero logo WebP (98% smaller), service card WebP, cache headers, lazy loading

### Session 7 — SEO Title & Description Fixes
- Wine Cooler title -> "San Francisco", 3 meta descriptions shortened to <=160 chars

### Session 8 — Soft 404 Fix & SF City Content
- Garbage Disposal: full SERVICE_DATA entry (11p, 6h2) to fix soft 404
- 5 SF city-service pages: rich, neighborhood-specific content added

### Session 9 — Mobile Grid Responsiveness
- Service cards grid: responsive `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Process steps grid: responsive `grid-cols-2 lg:grid-cols-4`
- SanFrancisco.js city page: Updated grids for mobile
- Removed conflicting CSS `!important` overrides

### Session 10 — Mobile UI Improvements
- Sticky CTA padding fix for bottom overlap
- Mobile H1 font size standardization
- Mobile CTA "Call Now" button contrast fix
- Trust stats bar mobile layout (mobile flex + desktop grid)

### Session 11 (Mar 2026) — P2 Cleanup & Schema Audit
- **Removed legacy `applySEO()` from `index.html`**: Deleted ~565 lines of redundant `routeMeta` object, `ensureMeta*` helpers, `applySEO()` function, and `history.pushState` overrides. Preserved only the `dedupLocalBusiness` logic (prevents duplicate LocalBusiness schemas).
- **Fixed duplicate blog schemas**: Removed inline `<script type="application/ld+json">` from 10 blog pages that already used `useSchemas()` hook, eliminating double BlogPosting schema injection.
- **Converted DishwasherMaintenance.js**: Migrated from legacy `react-helmet-async` `<Helmet>` to modern `SEOMetaTags` + `useSchemas()` pattern for consistency.
- **Fixed stats section visibility on mobile**: Removed CSS `[data-testid="stats-section"] { display: none !important; }` that was hiding the "22 Cities / $60 Diagnostic / 180-Day Warranty" stats on mobile. Added responsive padding (`py-6 lg:py-16`).
- **Investigated ghost div**: Confirmed the "ghost div" is actually the lazy-loaded ServiceAreaMapLibre section that renders city links and heading on mobile when scrolled to — functioning correctly as a lazy-loading container.
- Files changed: `public/index.html`, `ProfessionalLandingPage.js`, `DishwasherMaintenance.js`, 10 blog post files
- Build: 233 pages, 0 failures

## Backlog (Prioritized)

### P2
- Merge dual SEO content sources (`seoContent.js` + `seo-config.cjs`) into single source of truth
- Audit remaining blog posts for duplicate schemas (non-BlogPosting types)
- Refactor monolithic page components

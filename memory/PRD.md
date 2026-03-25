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
- Wine Cooler title → "San Francisco", 3 meta descriptions shortened to ≤160 chars

### Session 8 — Soft 404 Fix & SF City Content
- Garbage Disposal: full SERVICE_DATA entry (11p, 6h2) to fix soft 404
- 5 SF city-service pages: rich, neighborhood-specific content added

### Session 9 (Feb 2026) — Mobile Grid Responsiveness
- **Service cards grid**: Changed from desktop-only `hidden lg:grid lg:grid-cols-3` to responsive `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Hid legacy mobile carousel.
- **Process steps grid**: Changed from desktop-only `hidden lg:block` 4-col inline grid to responsive `grid grid-cols-2 lg:grid-cols-4`. Hid legacy mobile vertical list. Dashed connector line hidden on mobile.
- **SanFrancisco.js city page**: Updated process steps from `md:grid-cols-4` to `grid-cols-2 lg:grid-cols-4`. Updated pricing cards from `md:grid-cols-3` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Removed CSS override that forced 1-column at 480px.
- **Removed conflicting CSS**: Deleted `!important` overrides for `grid-cols-3` and `grid-cols-4` at 480px that fought with Tailwind responsive classes.
- Files changed: `ProfessionalLandingPage.js`, `SanFrancisco.js`
- Build: 233 pages, 0 failures

## Backlog (Prioritized)

### P2
- Remove legacy `applySEO()` function from `public/index.html`
- Merge dual SEO content sources into single source of truth
- Audit remaining blog posts for duplicate schemas
- Refactor monolithic page components
- Fix "ghost div" on mobile homepage

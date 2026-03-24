# FixitBay.net - Product Requirements Document

## Original Problem Statement
An appliance repair business website (fixitbay.net) built as a React SPA with static pre-rendering via Node.js script. Ongoing SEO, content, and performance optimization work.

## Core Architecture
- **Frontend**: React SPA with static site generation (SSG)
- **Backend**: FastAPI + MongoDB (CMS for reviews, services, areas)
- **Pre-rendering**: `frontend/scripts/generate-seo-snapshots.cjs`
- **SEO Config**: `frontend/scripts/seo-config.cjs` + `frontend/src/seo/seoContent.js`
- **Deployment**: Netlify/Cloudflare (uses `_headers` file for cache control)

## Key Files
- `frontend/src/components/ProfessionalLandingPage.js` - Homepage
- `frontend/src/components/sections/HomeHero.jsx` - Hero section
- `frontend/src/seo/seoContent.js` - Client-side SEO content
- `frontend/scripts/seo-config.cjs` - SSG SEO config (BOTH must be updated for SEO changes)
- `frontend/public/_headers` - Cache control headers

## Completed Work

### Sessions 1-4 (Previous)
- Fixed keyword cannibalization for 7 service pages
- Removed duplicate Service schema injections
- Rewrote 2 blog posts, created 1 new blog post

### Session 5 (Feb 2026) - Homepage Visual Fixes
- Hero microcopy alignment, stats row balance, pricing card alignment
- Reviews grid expanded to 9 in 3-column layout
- Explore section copy cleanup

### Session 6 (Feb 2026) - Performance Optimization
- Hero logo: 1.6MB PNG → 37KB WebP with `<picture>` tag
- 15 service images converted to WebP with `<picture>` tags
- Cache headers (`_headers`) for static assets
- Lazy loading on all below-fold images

### Session 7 (Feb 2026) - SEO Title & Description Fixes
- **Wine Cooler title**: Changed from "Bay Area" to "San Francisco" (vol 700, pos #26 target)
- **3 meta descriptions shortened to ≤160 chars**:
  - Refrigerator: 172→150 chars
  - Dishwasher: 172→135 chars
  - Dryer: 165→124 chars
- Updated in BOTH `seoContent.js` AND `seo-config.cjs` (dual source)
- Updated in component files: `WineRefrigeratorRepairPage.js`, `RefrigeratorRepairPage.js`, `DishwasherRepairPage.js`, `DryerRepairPage.js`
- Tasks 3-5 (hero WebP, service WebP, orphan links) were already complete from Session 6

## IMPORTANT: Dual SEO Source
SEO changes must be updated in BOTH:
1. `frontend/src/seo/seoContent.js` (client-side React)
2. `frontend/scripts/seo-config.cjs` (SSG pre-rendering)
3. Individual page component files (e.g., `RefrigeratorRepairPage.js`)

## Backlog (Prioritized)

### P1
- Investigate 2 "Soft 404" pages from Google Search Console (`/garbage-disposal-repair`)
- Add rich SF-specific content to 5 remaining SF city-specific pages

### P2
- Remove legacy `applySEO()` function from `public/index.html`
- Merge dual SEO content sources into single source of truth
- Audit remaining blog posts for duplicate schemas
- Refactor monolithic page components
- Fix "ghost div" on mobile homepage

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

### Sessions 1-4 (Previous)
- Fixed keyword cannibalization for 7 service pages
- Removed duplicate Service schema injections
- Rewrote 2 blog posts, created 1 new blog post

### Session 5 - Homepage Visual Fixes
- Hero microcopy, stats row, pricing cards, reviews 3x3 grid, explore section

### Session 6 - Performance Optimization
- Hero logo WebP (98% smaller), service card WebP, cache headers, lazy loading

### Session 7 - SEO Title & Description Fixes
- Wine Cooler title → "San Francisco" (vol 700 target keyword)
- 3 meta descriptions shortened to ≤160 chars

### Session 8 (Feb 2026) - Soft 404 Fix & SF City Content
- **Garbage Disposal Soft 404 Fix**: Added full `SERVICE_DATA` entry in seo-config.cjs with:
  - 11 paragraphs, 6 h2 headings of unique content
  - Common problems, pricing, repair vs replace guidance, FAQs
  - Updated title, description, and component file to match
- **5 SF City-Service Pages** — Added `CITY_SERVICE_RICH` entries for:
  - `/san-francisco-refrigerator-repair` — Sub-Zero specialists, Victorian kitchen expertise, coastal humidity content
  - `/san-francisco-washer-repair` — Multi-unit plumbing, stacked configurations, water pressure content
  - `/san-francisco-dryer-repair` — Victorian venting, gas dryer safety, stacked dryer content
  - `/san-francisco-oven-repair` — Gas igniter humidity, Wolf/Viking expertise, Victorian gas lines content
  - `/san-francisco-ice-maker-repair` — Water pressure hillside, SFPUC minerals, Sub-Zero specialists content
  - Each page: ~280 words, 4 h2s, 5 list items, neighborhood references, pricing, CTAs
- **SSG Build**: 233 pages verified, 0 failures

## Backlog (Prioritized)

### P2
- Remove legacy `applySEO()` function from `public/index.html`
- Merge dual SEO content sources (`seoContent.js` + `seo-config.cjs`) into single source of truth
- Audit remaining blog posts for duplicate schemas
- Refactor monolithic page components
- Fix "ghost div" on mobile homepage

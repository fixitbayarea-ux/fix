# FixitBay.net - Product Requirements Document

## Original Problem Statement
An appliance repair business website (fixitbay.net) built as a React SPA with static pre-rendering via Node.js script. Ongoing SEO, content, and performance optimization work.

## Core Architecture
- **Frontend**: React SPA with static site generation (SSG)
- **Backend**: FastAPI + MongoDB (CMS for reviews, services, areas)
- **Pre-rendering**: `frontend/scripts/generate-seo-snapshots.cjs`
- **SEO Config**: `frontend/scripts/seo-config.cjs` + `frontend/src/seo/seoContent.js`
- **Deployment**: Netlify/Cloudflare (uses `_headers` file)

## Key Files
- `frontend/src/components/ProfessionalLandingPage.js` - Homepage
- `frontend/src/components/sections/HomeHero.jsx` - Hero section
- `frontend/src/components/pages/` - Service pages, blog posts
- `frontend/scripts/generate-seo-snapshots.cjs` - SSG script

## Completed Work

### Session 1-4 (Previous)
- Fixed keyword cannibalization for 7 service pages (dishwasher, refrigerator, washer, dryer, oven, ice-maker, wine-cooler)
- Removed duplicate Service schema injections from all service pages
- Rewrote `/blog/refrigerator-not-cooling` with new 1500+ word expert guide
- Rewrote `/blog/dryer-not-heating` with comprehensive gas/electric guide
- Created new `/blog/appliance-repair-cost-san-francisco` pricing guide

### Session 5 (Current - Feb 2026)
- **Task 1 - Hero Microcopy**: Grouped two desktop microcopy lines under CTA into a single aligned block. Both lines center-aligned with consistent spacing.
- **Task 2 - Stats Row Balance**: Fixed "180-Day" stat overflowing by reducing numSize to 36px with whiteSpace: nowrap. All 3 blocks now visually balanced.
- **Task 3 - Pricing Card Alignment**: Fixed middle card offset by using absolute positioning for "MOST ASKED" badge and uniform padding across all cards. 0px Y difference confirmed.
- **Task 4 - Reviews Grid**: Expanded fallback reviews from 3 to 9 using real customer reviews from existing codebase (AboutPage, BookPage, ThumbtackWidget). Changed grid from 2-col to 3-col layout.
- **Task 5 - Explore Section**: Updated subheading copy, stacked "View all service areas" and "Marin County" links vertically. Blog links clearly labeled.

## Backlog (Prioritized)

### P1
- Investigate 2 "Soft 404" pages from Google Search Console (`/garbage-disposal-repair`)
- Add rich SF-specific content to 5 remaining SF city-specific pages (refrigerator, washer, dryer, oven, ice-maker)

### P2
- Remove legacy `applySEO()` function from `public/index.html`
- Merge dual SEO content sources (`seoContent.js` + `seo-config.cjs`) into single source of truth
- Audit remaining blog posts for duplicate schemas
- Refactor monolithic page components
- Fix "ghost div" on mobile homepage

### Performance (Deferred from current session)
- Convert hero logo PNG to WebP with `<picture>` tag
- Convert 10 service card JPGs to WebP
- Add long-term cache headers in `_headers` file
- Ensure lazy loading on below-fold images

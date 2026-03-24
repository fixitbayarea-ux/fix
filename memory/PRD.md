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
- `frontend/src/components/pages/` - Service pages, blog posts
- `frontend/scripts/generate-seo-snapshots.cjs` - SSG script
- `frontend/public/_headers` - Cache control headers

## Completed Work

### Session 1-4 (Previous)
- Fixed keyword cannibalization for 7 service pages
- Removed duplicate Service schema injections from all service pages
- Rewrote `/blog/refrigerator-not-cooling` with new 1500+ word expert guide
- Rewrote `/blog/dryer-not-heating` with comprehensive gas/electric guide
- Created new `/blog/appliance-repair-cost-san-francisco` pricing guide

### Session 5 (Feb 2026) - Homepage Visual Fixes
- Hero microcopy: Grouped two desktop lines under CTA into aligned block
- Stats row balance: Fixed "180-Day" overflow with reduced font and nowrap
- Pricing card alignment: Absolute badge positioning, 0px Y offset
- Reviews grid: Expanded from 3 to 9 real reviews, 3-column grid
- Explore section: Updated subheading, stacked links vertically

### Session 6 (Feb 2026) - Performance Optimization
- **FIX 1 - Hero Logo WebP**: Converted 1.6MB PNG to 37KB WebP (98% reduction). `<picture>` tag with WebP source, `loading="eager"`, `fetchpriority="high"`.
- **FIX 2 - Service Card WebP**: Converted all 15 service JPGs to WebP (31-88% savings each). `<picture>` tags with WebP `<source>` + JPG fallback.
- **FIX 3 - Cache Headers**: Created `_headers` file with long-term caching: 1yr immutable for static/webp, 30 days for jpg/png.
- **FIX 4 - Lazy Loading**: All service card images set to `loading="lazy"`. Only hero logo and navbar logo remain `loading="eager"`.
- **SSG Build**: 233 pages verified, 0 failures.

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

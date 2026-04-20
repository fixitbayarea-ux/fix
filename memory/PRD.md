# FixitBay.net - Product Requirements Document

## Original Problem Statement
React SPA for appliance repair business (FixitBay). SSG via custom script. SEO optimization (Ahrefs/GSC), mobile UX.

## Architecture
- React SPA + custom SSG (generate-seo-snapshots.cjs + seo-config.cjs)
- Netlify hosting: base directory = `frontend/`, publish = `build/`
- `netlify.toml` — located at repo root (`/netlify.toml`) with `base = "frontend"`, `publish = "frontend/build"`. Netlify reads it ONLY from repo root.
- `_redirects` — located at `frontend/public/_redirects` (copied to `build/` during build, read from publish directory)
- **CRITICAL**: `public/_redirects` is the SINGLE SOURCE OF TRUTH for all redirects during SSG build. SSG reads it, preserves all rules, and appends route-to-HTML rewrites.

## Key Architecture Change (P13 final fix)
- ROOT CAUSE #1: `netlify.toml` was in `public/` (publish directory). Moved to repo root with `base = "frontend"`.
- ROOT CAUSE #2: SSG script created HTML snapshots for 301 redirect sources (e.g., `appliance-repair-colma.html`). Netlify served these with 200 instead of applying the 301 redirect.
- FIX: SSG script now parses `public/_redirects`, collects all 301 "from" URLs, skips HTML generation for them, removes any stale HTML files, and excludes them from route-to-HTML rewrites.

## Completed SEO Prompts
1. P3-P8: Sitemap, VideoObject, RelatedServices, Garbage Disposal, Meta, Titles, SSG
2. P9: Orphan Page wine-refrigerator-repair linked
3. P10: Code Review (console.log, DOMPurify, catch blocks)
4. P11: GSC fixes (wall-oven-repair page, 301 redirects)
5. P12: Blog conversion optimization (CTA blocks)
6. P13: Server-side 301 redirects — FIXED: moved netlify.toml to base directory
7. P14: Stacked Washer/Dryer Repair standalone page
8. P15: FOUC prevention (reactSnap waitFor, CSS fadeIn)
9. P16: AggregateRating schema added to LocalBusiness + review count updated 95→106 across entire site (April 2026)
10. P17: VideoObject schema fix — eliminated duplicate schemas (4→2) on /about page, fixed uploadDate format to valid ISO 8601 with timezone (April 2026)
11. P18: LLM Info page update — review counts (106 Google + 165 Thumbtack + 6 Yelp = 277+ total), HVAC/Commercial diagnostic pricing ($100), HVAC added to services (April 2026)
12. BreadcrumbList deduplication verified on 7+ city URLs — no duplicates found
13. P19 (Feb 2026): GSC "Crawled — currently not indexed" — Root Cause 3 (thin content / orphan pages) FIXED. Internal cross-linking added to `CityServicePage.js` (desktop + mobile templates) so every city-service page links to: city hub, service hub, service-areas + 2-3 related city-service pages. Verified on `/larkspur-dishwasher-repair` — 6 expected internal links rendered in "Related Services" block. Build: 265/265 SSG snapshots pass.
14. P19 cleanup (Feb 2026): Removed dead file `src/components/schema/StructuredData.js` — nowhere imported in src/ or scripts/.
15. P20 (Feb 2026): Orphan-pages CI guard — new `scripts/check-orphan-pages.cjs` wired into `postbuild` pipeline. Scans every indexable snapshot in `build/` and fails the build if any sitemap URL has zero internal inbound links. First run caught 10 orphans (7 Belvedere city-service pages + 3 new blog posts). Fixed by:
    - Adding 5 missing blog post slugs to `/blog` internalLinks in `seo-config.cjs` (sub-zero-refrigerator-not-cooling, lg-washer-ue-error, bosch-dishwasher-error-codes, appliance-repair-marin-county, same-day-appliance-repair-bay-area).
    - Cross-linking Tiburon ↔ Belvedere in city-service SSG internalLinks (NEIGHBORS map).
    - Tiburon city hub now lists all 7 Belvedere service pages (since `/belvedere-appliance-repair` is a 301 → Tiburon; Belvedere service pages were orphaned because their own hub redirects away).
16. P21 (Feb 2026): CityRepairPage + CityLandingPage refactor — deduped shared logic without merging visually distinct templates (two different UX concepts). Extracted:
    - `src/hooks/useCitySchemas.js` — BreadcrumbList + FAQPage JSON-LD with unique id prefix.
    - `src/hooks/useCityCtaHandlers.js` — GA4-tracked Book/Call handlers.
    - `src/components/sections/PopularRepairsCluster.jsx` — reusable internal-link cluster with `classic` and `landing` visual variants.
    - CityRepairPage.js: 570 → 482 LOC (-88). CityLandingPage.js: 330 → 298 LOC (-32). 3 shared modules (186 LOC) now available for future city templates.
    - Verified: build 265/265, 0 orphans, 0 lint errors, Millbrae landing renders all 7 popular-repair links + all JSON-LD schemas present.

## Current Review Data (April 2026)
- Google reviews: 106
- Thumbtack reviews: 165
- Yelp reviews: 6
- Rating: 4.9 out of 5
- Schema uses ratingValue: "4.9", reviewCount: "106" (Google only)

## Backlog
- (P2) Refactor: merge CityRepairPage + CityLandingPage
- (P3) Performance: code-splitting, lazy-loading

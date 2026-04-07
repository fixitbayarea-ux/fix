# FixitBay.net - Product Requirements Document

## Original Problem Statement
React SPA for appliance repair business (FixitBay). SSG via custom script. SEO optimization (Ahrefs/GSC), mobile UX.

## Architecture
- React SPA + custom SSG (generate-seo-snapshots.cjs + seo-config.cjs)
- Netlify hosting: base directory = `frontend/`, publish = `build/`
- `netlify.toml` — located at `frontend/netlify.toml` (base directory, where Netlify reads it)
- `_redirects` — located at `frontend/public/_redirects` (copied to `build/` during build, read from publish directory)
- **CRITICAL**: `public/_redirects` is the SINGLE SOURCE OF TRUTH for all redirects during SSG build. SSG reads it, preserves all rules, and appends route-to-HTML rewrites.

## Key Architecture Change (P13 final fix)
- ROOT CAUSE: `netlify.toml` was in `public/` (publish directory). Netlify reads it from base directory (`frontend/`), so all `[[redirects]]` rules were silently ignored.
- FIX: Moved `netlify.toml` from `frontend/public/netlify.toml` to `frontend/netlify.toml`.
- SSG script reads `public/_redirects` as base, filters SPA catch-all, appends route-to-HTML rewrites, re-adds catch-all at end.

## Completed SEO Prompts
1. P3-P8: Sitemap, VideoObject, RelatedServices, Garbage Disposal, Meta, Titles, SSG
2. P9: Orphan Page wine-refrigerator-repair linked
3. P10: Code Review (console.log, DOMPurify, catch blocks)
4. P11: GSC fixes (wall-oven-repair page, 301 redirects)
5. P12: Blog conversion optimization (CTA blocks)
6. P13: Server-side 301 redirects — FIXED: moved netlify.toml to base directory
7. P14: Stacked Washer/Dryer Repair standalone page
8. P15: FOUC prevention (reactSnap waitFor, CSS fadeIn)

## Backlog
- (P2) Refactor: merge CityRepairPage + CityLandingPage
- (P3) Performance: code-splitting, lazy-loading

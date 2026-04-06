# FixitBay.net - Product Requirements Document

## Original Problem Statement
React SPA for appliance repair business (FixitBay). SSG via custom script. SEO optimization (Ahrefs/GSC), mobile UX.

## Architecture
- React SPA + custom SSG (generate-seo-snapshots.cjs + seo-config.cjs)
- Netlify hosting with _redirects for 301s
- **CRITICAL**: `public/_redirects` is now the SINGLE SOURCE OF TRUTH for all redirects. SSG reads it, preserves all rules, and appends route-to-HTML rewrites. No more overwriting.

## Key Architecture Change (P13 v2 fix)
- SSG script now READS `public/_redirects` as base
- Filters out ONLY the SPA catch-all
- Appends route-to-HTML 200 rewrites for prerendered pages
- Re-adds SPA catch-all at the end
- All `301!` redirects from `public/_redirects` are PRESERVED in the build output

## Completed SEO Prompts
1. P3-P8: Sitemap, VideoObject, RelatedServices, Garbage Disposal, Meta, Titles, SSG
2. P9: Orphan Page wine-refrigerator-repair linked
3. P10: Code Review (console.log, DOMPurify, catch blocks)
4. P11: GSC fixes (wall-oven-repair page, 301 redirects)
5. P12: Blog conversion optimization (CTA blocks)
6. P13: Server-side 301 redirects — ROOT CAUSE: SSG was overwriting `public/_redirects`. Fixed by making SSG read `public/_redirects` as base.
7. P14: Stacked Washer/Dryer Repair standalone page
8. P15: FOUC prevention (reactSnap waitFor, CSS fadeIn)

## Backlog
- (P2) Refactor: merge CityRepairPage + CityLandingPage
- (P3) Performance: code-splitting, lazy-loading

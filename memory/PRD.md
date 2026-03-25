# FixitBay.net — Product Requirements Document

## Original Problem Statement
Appliance repair React SPA with SSG. Focus on mobile UI/UX, WCAG accessibility, SEO optimization, and code quality.

## Architecture
- React SPA with Node/Puppeteer SSG
- Schema management via SEOMetaTags + useEffect DOM injection
- CSS: mix of Tailwind and inline styles (transitioning to Tailwind)
- Shared components in `src/components/sections/`

## What's Been Implemented

### Session 11 (Previous) — Mobile UI & SEO
- Deleted legacy applySEO() script from index.html
- Fixed sitewide LocalBusiness schema duplicates (MutationObserver in SchemaMarkup.js)
- Removed duplicate BlogPosting schemas from 10 blog files
- Added skip-to-main-content link, ARIA controls for FAQ
- Fixed mobile grids (4-col→2-col process, 3-col→1-col services)
- Fixed SVG brand logos, stacked brand CTAs on mobile
- Added pb-[72px] for sticky CTA compensation

### Session 12 (Mar 2026) — CTA, Accessibility & Refactoring
- Standardized secondary CTA border opacity to rgba(255,255,255,0.65) across all templates
- Fixed desktop nav tel link touch target: 21px → 44px (WCAG 2.5.5)
- Removed duplicate mobile trust bar from homepage
- Hidden breadcrumbs on mobile (<768px) — markup stays for SEO
- Added sr-only "(opens in new tab)" to all 101 target="_blank" links (WCAG 2.4.4)
- Fixed 16 links missing rel="noopener noreferrer"
- Added minHeight: 44px to nav "Book Online" button (WCAG 2.5.5)
- Standardized primary CTA text to "BOOK REPAIR ONLINE" across all templates
- Increased brand logo from 38×38 to 80×80 on brand pages
- Restyled "View Service" buttons: outline style, 44px touch target, 14px Montserrat
- Added 8 CSS custom properties for typography & spacing tokens

### Session 12 — P1 Refactoring (COMPLETED)
- **ProfessionalLandingPage.js**: 779 → 350 lines (−55%)
  - Extracted: HomeServicesGrid, HomePricing, HomeReviews, HomeExploreLinks, FAQAccordion
- **ApplianceRepairPageNew.js**: 1273 → 1108 lines (−13%)
  - Replaced: BrandsGrid, CTABanner, CompactFooter, ProcessSteps, FAQAccordion
- Created 8 shared section components in `sections/`
- Testing: 9/9 tests passed (homepage, city, service, brand, blog, FAQ, tabs, mobile)

### Session 12 — P2 react-helmet-async Removal (COMPLETED)
- Migrated 13 files from react-helmet-async to SEOMetaTags / useEffect DOM injection
- Removed HelmetProvider from index.js
- Files migrated: BlogPage, RangeRepair, CommercialApplianceRepairPage, ApplianceReplacementPage, RefrigeratorRepairMobile, BlogPost, BlogPostPage, MaintenancePage, ServiceAreasHub, DryerRepair, StructuredData, Breadcrumbs, ApplianceRepairPage

## Shared Section Components
- `sections/FAQAccordion.jsx` — Reusable FAQ accordion with own state
- `sections/BrandsGrid.jsx` — 18 brand logos with hover + links
- `sections/CTABanner.jsx` — Dark CTA banner with book + call buttons
- `sections/CompactFooter.jsx` — Minimal footer with logo, phone, copyright
- `sections/ProcessSteps.jsx` — 4-step process grid
- `sections/HomeServicesGrid.jsx` — Tabbed service cards with carousel
- `sections/HomeReviews.jsx` — Review carousel with autoplay
- `sections/HomeExploreLinks.jsx` — Services & areas sitemap
- `sections/HomePricing.jsx` — 3-card pricing section

### Session 13 (Mar 25 2026) — Brand Logo PNG Fix
- Replaced SVG logos with pre-rendered white PNG equivalents (320x160px, 2x retina) for all 8 brand hero sections
- Brands: LG, Samsung, Whirlpool, GE, Bosch, KitchenAid, Viking, Thermador
- Removed CSS `brightness(0) invert(1)` filter (PNGs are already white on transparent)
- Added `onError` fallback to SVG, `loading="eager"`, `data-testid="brand-hero-logo"`
- Testing: 8/8 brand pages pass — all logos load (naturalWidth=320, complete=true)

## Backlog (Prioritized)

### P1
- Audit blog schema types beyond BlogPosting (FAQ, BreadcrumbList duplicates)

### P2
- Continue migrating inline styles to Tailwind/CSS variables where appropriate

### P3
- Consider extracting city-specific sections from ApplianceRepairPageNew.js (currently 1108 lines)
- Performance audit: code-split heavy sections, lazy-load below-fold content

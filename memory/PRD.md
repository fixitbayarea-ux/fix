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

### Session 13 (Mar 25-26 2026) — Brand Logo PNG, Global H2, Refactoring
- Replaced SVG logos with white PNGs (320x160px, 2x retina) for 8 brand hero sections
- Fixed aria-label leaking on CTA buttons (brand pages)
- Fixed mobile H1 (28px) and H3 (16px) on brand pages
- Rewrote /service-areas as standalone custom page (removed template placeholder text)
- **Global H2 typography system**: single rule in `index.css` with `!important` — 22px mobile / 28px desktop
- Removed 5 per-page H2 overrides (ApplianceRepairPageNew, SanFrancisco, ServiceAreasHub, LocalApplianceRepairPage, BrandLandingPage)
- **P1 COMPLETED**: Blog schema audit — zero duplicates across all blog pages
- **P2 COMPLETED**: Added CSS utility classes to index.css (`.section-container`, `.bg-navy`, `.bg-cream`, `.eyebrow`, `.section-pad`)
- **P3 COMPLETED**: Extracted 4 sections from ApplianceRepairPageNew.js (1109 → 1023 lines, −8%):
  - `PricingCards.jsx`, `HousingTypes.jsx`, `CaseStudies.jsx`, `Testimonials.jsx`
- Fixed BrandsGrid H2 (30px→36px desktop), "Nearby Service Areas" H2 (30px→36px), "Popular Repairs" H2 (28px→36px)
- Testing: iteration_105 — 7/7 tests passed (100%)

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
- `sections/PricingCards.jsx` — Transparent pricing (city pages)
- `sections/HousingTypes.jsx` — Local housing expertise (city pages)
- `sections/CaseStudies.jsx` — Recent repair case studies (city pages)
- `sections/Testimonials.jsx` — Client review cards + external links (city pages)

### Session 14 (Mar 26 2026) — Contact Page Refinements + About Page Images Fix
- Changed `/contact` page mobile H1 from 28px to 30px
- Replaced `fixitbayarea@gmail.com` → `info@fixitbay.net` globally (Quick Bar, Email Card, JSON-LD schema)
- Added Google Maps iframe (Bay Area — San Francisco, Marin, Peninsula) to Service Area panel
- Verified: 0 remaining references to old email across entire codebase
- **BUG FIX**: Migrated 2 Andrei team photos from external CDN to local `/images/team/` as WebP (34KB + 23KB). Added explicit width/height for CLS prevention. External CDN was unreliable on production Netlify deploys.
- **SEO**: Enhanced structured data on /about — Person schema (Andrei Suprunov, hasCredential, knowsAbout) + global LocalBusiness enriched with foundingDate, numberOfEmployees, employee. Removed duplicate LocalBusiness from AboutPage (global SchemaMarkup.js is single source of truth via MutationObserver dedup).
- **SEO**: Added AggregateRating to /reviews page LocalBusiness schema (ratingValue 4.9, reviewCount 90, bestRating 5, worstRating 1). Whitelisted `reviews-localbusiness` in SchemaMarkup.js MutationObserver dedup. Updated global reviewCount to 90.
- **SEO**: Set `noindex, follow` on `/privacy-policy` and `/site-map` pages to save crawl budget.
- **Legal**: Created `/terms` page (Terms of Service) with 8 sections: Services Provided, Appointments & Scheduling, Diagnostic Fee, Payment Terms, 180-Day Warranty, Limitation of Liability, Governing Law (CA), Contact & Disputes. `noindex, follow`. Linked from UnifiedFooter and Privacy Policy.
- **UI**: Fixed /blog card grid — enforced 1-col mobile (≤600px), 2-col tablet (601-900px), 3-col desktop via `index.css`. Fixed blog H3 from 15px → 17px minimum.
- **E-E-A-T**: Added `BlogByline` component to all 14 blog posts — "By Andrei · Lead Technician, FixitBay" + `<time datetime="...">` + readTime. Updated BlogPosting schema author name to "Andrei Suprunov" across all posts.
- **Internal Linking**: Added 2-4 contextual service page links per blog post (refrigerator-repair, washer-repair, dryer-repair, dishwasher-repair, oven-repair, ice-maker-repair). Created `BlogCTA.js` component ("Get Expert Help — $60 Diagnostic — Book Online") and inserted into all 14 blog posts before Related Articles section.
- **UI**: Fixed /services page mobile grid overflow — changed from 3-col (568px+) to 2-col on ≤600px. Cards use vertical icon layout on mobile for readability. No page overflow at 390px.
- **BUG FIX**: Fixed duplicate "Home → Home" breadcrumb on /maintenance. Root cause: `breadcrumbCategoryName="Home"` in MaintenanceHub.js. Fixed to `"Maintenance"` with self-referencing detection in template. Also fixed "Maintenance Maintenance" duplication in H1/eyebrow by detecting when appliance name already contains serviceWord.
- **PROMPT 01-07**: Mobile Hero CALL button differentiation, Hero Trust Strip visual box, Global brand rename "FixitBay" → "FixitBay LLC", Mobile Hero Stats 3-col grid with dividers, How It Works connector arrows, Homepage Blog section revamp with visual cards.
- **PROMPT 08**: Mobile footer accordion optimization in `UnifiedFooter.js` — sections collapsed by default (max-height:0), smooth CSS transition, ChevronDown rotation, 0px gap between sections on mobile, border-top separators, reduced padding. Desktop 4-col grid preserved unchanged. Testing: 9/9 tests passed (iteration_106).
- **PROMPT 09**: Fixed mobile navbar overlay menu positioning bug. Root cause: `backdrop-filter:blur()` on `<nav>` created new containing block, breaking `position:fixed` for child elements. Fix: moved mobile menu to `createPortal(document.body)`, added `body.overflow-hidden` scroll lock via useEffect with cleanup, CSS variable `--navbar-height`. Testing: 12/12 tests passed (iteration_107).
- **PROMPT 10**: Renamed "Maintenance Plans" → "Maintenance Services" in mobile nav accordion (`SiteNavbar.jsx`) and sitemap page (`SiteMapPage.js`). URLs unchanged.
- **PROMPT 11**: Restructured Areas dropdown (desktop) and Service Areas accordion (mobile). Grouped cities by 3 regions: San Francisco (13), Peninsula (8), Marin County (11). Desktop: 3-column grid with orange uppercase region headers, column borders. Mobile: region labels (10px, uppercase, 0.3 opacity). Data consolidated in `navbarData.js` `areasGrouped` export. Testing: 100% passed (iteration_108).
- **PROMPT 12**: Fixed mobile navbar brand text visibility bug — removed `style={{display:'none'}}` that overrode Tailwind `flex sm:hidden`. Brand now shows "FixitBay LLC" (14px/700) + "Appliance Repair" (11px/0.75 opacity). Phone replaced with icon-only (no text) to save space. Desktop unchanged.
- **PROMPT 13**: Fixed navbar logo — removed `rounded-full` (circle crop), set `border-radius: 4px`, `object-fit: contain`. Sizes: mobile 48×48px, desktop 56×56px. Logo no longer clipped.
- **ПРОМТ 01 (new)**: Replaced homepage H1 from "Appliance Repair in San Francisco — Fixed Same Day" to "Appliance Repair San Francisco — Licensed & Trusted" (51 chars). Removed legally risky "Fixed Same Day" promise. SEO keywords preserved.

## Backlog (Prioritized)
- P2: Continue migrating inline styles to Tailwind/CSS vars (ApplianceRepairPageNew.js, MobileServiceLanding.js)
- P3: Performance audit — code-split heavy sections, lazy-load below-fold content

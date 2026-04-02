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
- **ПРОМТ 02**: Global "same-day" guarantee audit. Changed ~150+ occurrences across 100+ files. Replaced guarantees with "fast scheduling", "same- or next-day appointments". Preserved honest FAQ answers, customer reviews, blog URLs.
- **ПРОМТ 03**: Fixed mobile stats bar visual balance. "22"→"22+" (32px), "$60" stays 22px, "180-Day" split into "180"(28px)+"-Day"(14px superscript). Shortened labels: "BAY AREA", "TOWARD REPAIR". min-height:80px, center alignment. Desktop unchanged.
- **ПРОМТ 04**: Improved How It Works mobile connector. Replaced single ↓ with L-shaped dashed connector (border-right + border-bottom + ↓ arrow). Added pill badges (01-04) with orange background on mobile, watermark numbers preserved on desktop. Desktop layout (4-col) unchanged.
- **ПРОМТ 05**: Added blog card thumbnails. Downloaded 3 stock photos (Pexels), converted to WebP (12-34KB). Updated `HomeBlogSection.jsx` with `<img>` 16:9 ratio, loading="lazy", category tag overlay, date+readTime.
- **ПРОМТ 06**: Removed "Marin County Appliance Repair →" standalone link from `HomeExploreLinks.jsx`. Added Colma + Brisbane to Popular Service Areas chips. Replaced Marin County featured card in blog page with Peninsula link.
- **ПРОМТ 07**: Moved trust badges from inside hero to standalone trust-strip div between hero and next section. Applied to `ApplianceRepairPageNew.js` (city + service heroes) and `SanFrancisco.js`. Desktop: centered single line, max-width 800px. Mobile: 11px, gap 12px, flex-wrap. Added "(94 Reviews)" to Google rating.
- **ПРОМТ 08**: Fixed false "10+ Years" → "3+ Years" across all components (7 files). Redesigned city stats from inline flex to 3-column grid with `#1A2F45` background, border-radius 12px, dividers, clamp() font sizes.
- **ПРОМТ 09**: SF Neighborhoods tabs — replaced horizontal scroll (`overflow-x: auto`) with grid layout. Mobile: `auto-fill, minmax(140px, 1fr)` (2 cols, all 10 districts visible). Desktop: `repeat(5, 1fr)`. Chips styled as pills with hover/active states. Tab content unchanged.

### Session 15 (Mar 27 2026) — Brand Image Fix + Non-Breaking Spaces
- **ПРОМТ 10 FIX**: Fixed invisible Thermador logo on city pages. Root cause: `thermador.png` was a white-on-transparent PNG (320×160, created for dark hero backgrounds) — invisible on light card backgrounds. Changed to `thermador.svg` in SanFrancisco.js, BrandsGrid.jsx, LocalApplianceRepairPage.js. All 18 brand logos now render correctly. Zero 404 errors in console.
- **ПРОМТ 01 (Session 15)**: Non-breaking spaces (`\u00A0`) injected into 170 files (3488 replacements). Protected phrases: FixitBay LLC, San Francisco, Bay Area, Daly City, San Mateo, Palo Alto, Santa Clara, Redwood City, Marin County, San Bruno, San Rafael, Mill Valley, Corte Madera, San Quentin, San Anselmo, Belvedere Tiburon, South San Francisco, Appliance Repair, Refrigerator Repair, Washer Repair, Dryer Repair, Dishwasher Repair, Cooktop Repair, Freezer Repair, Range Repair, Stove Repair, Oven Repair, Ice Maker, Wine Cooler, Garbage Disposal, Wall Oven, Wine Refrigerator. Also added `.nowrap` CSS utility class to index.css. Fixed pre-existing `showServiceHero` undefined bug in ApplianceRepairPageNew.js (replaced with `!isCity && !hideHero`). Fixed literal `/ /g` → `/\s+/g` in AboutPage.js slug generation for \u00A0 compatibility.

- **ПРОМТ 02 (Session 15)**: Updated review counts sitewide. Google: 90→95, Thumbtack: 142→153, Total: 237→253. Updated 14 files: ReviewsPage.js, SchemaMarkup.js, HomeHero.jsx, LocalApplianceRepairPage.js, ApplianceRepairPageNew.js, SanFrancisco.js, BrandsPage.js, BrandLandingPage.js, LLMInfoPage.js, NeighborhoodPage.js, StructuredData.js, schemaMarkup.js, MobileServiceLanding.js. All JSON-LD reviewCount updated to "95" (Google-verified). Meta descriptions updated.

- **ПРОМТ 03 (Session 15)**: Restored review cards on /reviews page. Root cause: `useReviews` hook fetched from non-existent `/api/cms/reviews` API, returned empty array. Fix: created `/data/reviewsData.js` with 9 hardcoded verified reviews (5 Google, 3 Thumbtack, 1 Yelp), modified `useReviews.js` to use static data as default with API override. Filter tabs work: All(9), Google(5), Thumbtack(3), Yelp(1). Masonry 2-col desktop / 1-col mobile layout.

- **ПРОМТ 04 (Session 15)**: Completed JSON-LD schema audit. Fixed index.html reviewCount 94→95, MarinCountyPage.js 127→95. Added bestRating/worstRating to BrandsPage, LocalApplianceRepairPage, NeighborhoodPage schemas. Added datePublished to ReviewsPage review schema objects. All schemas now consistent: reviewCount="95", bestRating="5", worstRating="1".

- **ПРОМТ 05 (Session 15)**: Added "Awards & Recognition" section to /reviews page with Nextdoor Neighborhood Fave 2025 card (responsive: horizontal desktop, vertical mobile). Added "Nextdoor Fave 2025" badge to homepage trust strip. Added `"award"` field to JSON-LD in ReviewsPage.js, SchemaMarkup.js, index.html, schemaMarkup.js. Award images stored in `/public/images/awards/`.

- **ПРОМТ 01-fix (Session 16)**: Fixed tiny brand logos on all mobile service pages. Root cause: `MobileServiceLanding.js` had `maxHeight: 28px` + `width: 75%`. Changed to `height: 40px` + `width: 100%` + `minHeight: 64px` cells + `gap: 12px`. Applied to all service pages via shared template.

- **ПРОМТ 02 (Session 16)**: Fixed generic city links on service pages. Added 28 CityServicePage routes for colma/brisbane/montara/san-quentin in App.js. Converted static city text to clickable `<a>` links in MobileServiceLanding.js using `pageSlug` for service-specific URLs. Removed fallback to generic `appliance-repair` in desktop template. All 21 cities now link to `/{city}-{service}-repair`.

- **ПРОМТ 03 (Session 16)**: Fixed Andrei's experience from "10+ years" to "3+ years" across 14 files: MobileServiceLanding.js, AboutPage.js (schema + meta), and 11 blog author bios. Also changed "Mechanical engineer" to "Licensed CA appliance technician" and "Certified" to "Licensed" throughout.

- **ПРОМТ 04 (Session 16)**: Fixed stale review counts in MobileServiceLanding.js: Google 82→95, Thumbtack 117→153.

- **ПРОМТ 05 (Session 16)**: Removed duplicate "NO HIDDEN FEES" badge from pricing section in MobileServiceLanding.js. Renamed third occurrence card to "Upfront Estimates". Now only 1 instance of "No Hidden Fees" (H2) in pricing section.

- **ПРОМТ 06 (Session 16)**: Updated entire price list in servicePricing.js. Removed compressor from Refrigerator repairs. Updated: Thermostat→$295, Ice maker→$295, Evaporator fan→$285, Door seal→$250. Luxury: Viking $325→$450, Built-in $445→$500. "Starting from" $255→$250. Added pricing disclaimer footnote in both mobile and desktop templates. Updated blog pricing page (ApplianceRepairCostSanFrancisco.js).

- **ПРОМТ 07 (Session 16)**: Updated FAQ prices across ~30 files. General repair range $150-$400→$250-$650. Specific repairs: thermostat→$295, ice maker→$295, evaporator fan→$285, door seal→$250. Removed compressor references. Updated blog pages (RefrigeratorNotCooling, DryerNotHeating, DishwasherNotDraining, WasherErrorCodes, DryerTakingTooLong, ApplianceRepairCostSanFrancisco), CooktopRepairPage, DisposalRepairPage, FreezerRepairPage, city pages, and all FAQ sections.

- **ПРОМТ 08 (Session 16)**: Replaced → with ✗ (red cross) for "replace" items in repair vs replace guide. Mobile: `\u2192`→`\u2717` with red color `#DC2626`. Desktop: grey `<X>`→red `#DC2626`. Added red left-border for replace cards. Applied to both MobileServiceLanding.js and ApplianceRepairPageNew.js.

- **ПРОМТ 09 (Session 16)**: Replaced "Genuine parts" → "OEM & aftermarket parts" and "One-visit resolution" → "Most jobs same visit" in MobileServiceLanding.js CTA section. Also updated LLMInfoPage.js. Brand page FAQs kept as-is (already say "OEM ... parts or equivalents").

- **ПРОМТ 01 (Session 17)**: Fixed stats bar visual alignment on homepage mobile. Unified font sizes for stat numbers to `clamp(22px, 5vw, 30px)`. Increased title font from 9px→10px, unit from 11px→12px. Fixed "180-Day" suffix to use `0.55em` with `verticalAlign: middle`. All 3 stat cells now visually balanced.

- **ПРОМТ 02 (Session 17)**: Upgraded "How It Works" arrows on homepage from text arrows (→) and CSS dashed borders to polished SVG icons (ArrowRight + ArrowDownCurved) in ProfessionalLandingPage.js.

- **ПРОМТ 03 (Session 17)**: Added 3 scroll-hint elements to mobile reviews carousel in HomeReviews.jsx: (1) text hint "← Swipe to read all reviews →" below carousel, (2) right fade gradient (`::after` pseudo-element matching section background `#0D1B2A`), (3) JS `onScroll` handler hiding fade at scroll end via `.scrolled-end` class. Desktop unaffected (`@media min-width:1024px` + `lg:hidden`).

- **ПРОМТ 04 (Session 17)**: Removed "Click a city" hints from 3 files: `ServiceAreaMapLibre.jsx` ("Click a city to view its local service page."), `ServiceAreasHub.js` ("Click on any city below..."), `MarinCountyPage.js` ("Click your city for local service details."). Adjusted heading margins to compensate for removed paragraphs.

- **ПРОМТ 05 (Session 17)**: Fixed FAQ Q2 and Q8 on homepage. Q2: removed "and next-day" duplicate, added "Monday through Saturday" + "today's availability". Q8: replaced generic booking text with 4 contact methods (online, phone/text, Google, email). Added `whiteSpace: 'pre-line'` to FAQAccordion.jsx for multi-line answers. Global cleanup: removed 40 instances of "same- or next-day and next-day" → "same- or next-day" across 33 files. Updated JSON-LD FAQ schema.

- **ПРОМТ 06 (Session 17)**: Hidden floating sticky "BOOK REPAIR" buttons on mobile only (`hidden md:inline-flex`). Added `className` to 3 files: `ApplianceRepairPageNew.js` (2 instances), `SanFrancisco.js`. `ProfessionalLandingPage.js` (CALL NOW) already had `hidden md:flex`. Removed mobile-only floating bottom bars (`showFloat && <div className="flex md:hidden"...>`) from 9 files (LocalApplianceRepairPage, 8 blog pages). Desktop floating buttons preserved on all pages.

- **ПРОМТ 07 (Session 17)**: Fixed brand logos rendering at 0px height on service/city pages. Added explicit `width={120} height={54}` attributes and `height` style to `<img>` tags in `BrandsGrid.jsx` and `SanFrancisco.js`. Root cause: SVG files without explicit width/height on `<svg>` tag + CSS `maxHeight` without `height` caused browser to render 0px. All 18 brand logos now render correctly on both platforms.

- **ПРОМТ 08 (Session 17)**: Made platform labels in /reviews hero clickable. Replaced `<span>` with `<a>` for Google (share.google), Thumbtack, and Yelp links. Added `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`, and `cursor: pointer`. No visual change — same look, now clickable.

- **ПРОМТ 09 (Session 17)**: Fixed Nextdoor award card on /reviews — changed from `<div>` to `<a>` with correct href `https://nextdoor.com/page/fixitbay-san-francisco-ca/`. Added `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`. Entire card is now clickable.

- **ПРОМТ 10 (Session 17)**: Updated "Repair vs. Replace" content on /freezer-repair. Section already existed via `repairVsReplace` prop in `ApplianceRepairPageNew.js` template. Updated 4 items to user-specified content: built-in/combo units, standalone under 10yo, compressor on old unit, multiple failures/15+ years. Updated template to render `repairVsReplace.title` dynamically instead of hardcoded "Repair vs. Replace?".

- **ПРОМТ 11 (Session 17)**: Fixed all 7 maintenance pages PRICING sections. (1) Added `maintenancePricing` prop to template — shows service/price table instead of repair parts pricing. (2) Added `maintenanceSchedule` prop — new "SCHEDULE" section with interval-based maintenance cards (grid layout, orange left border). (3) Made CTA buttons dynamic: "BOOK MAINTENANCE ONLINE" on maintenance pages, "BOOK REPAIR ONLINE" on repair pages. (4) Made PRICING heading dynamic: `{appliance} {serviceWord} Cost`. Applied to all 7 files: RefrigeratorMaintenance, WasherMaintenance, DryerMaintenance, DishwasherMaintenance, OvenRangeMaintenance, CooktopMaintenance, WineCoolerMaintenance.

- **ПРОМТ 12 (Session 17)**: Fixed HIW section on /maintenance/* mobile pages (`MobileServiceLanding.js`). Heading: "4 Steps to a Fixed Appliance" → "4 Steps to a Well-Maintained Appliance" (dynamic via `isMaintenance`). Step 3: "Professional Repair" → "Professional Maintenance" with updated description. Repair pages unaffected.

- **ПРОМТ 13 (Session 17)**: Enlarged brand hero logo from 80×80px to 160×80px container with `object-fit: contain` in `BrandLandingPage.js`. Applied to all brand pages. Also fixed one remaining `"next-day &amp; next-day"` duplicate.

- **ПРОМТ 14 (Session 17)**: Global cleanup of "next-day" duplication. Removed 25 instances across 18 files — patterns: `"next-day & next-day"`, `"next-day &amp; next-day"`, `"next-day and next-day"`, `"next-day or next-day"` → all replaced with `"next-day"`. Affected files include ContactPage, BrandLandingPage, all Commercial pages, BlogCTA, SanFrancisco, CityHeroNew, CTABanner, HomeHero, and others.

- **ПРОМТ 15 (Session 17)**: Changed stats bar on brand pages from "Same-Day Service" to "Same/Next-Day Service" in `BrandLandingPage.js`. Only BrandLandingPage had this stats bar pattern.

- **ПРОМТ 16 (Session 17)**: Made entire service cards clickable on brand pages. Wrapped card `<div>` with `<a>` tag using same href as "VIEW SERVICE →" button. Changed button from `<a>` to `<span>`. Added hover effect: `box-shadow + translateY(-2px)` on `.brand-svc-card:hover`.

- **ПРОМТ 17 (Session 17)**: Updated "Where We Serve" city lists on all brand pages (`BrandLandingPage.js`). Removed San Mateo & Burlingame. Added Montara (Peninsula), Larkspur, Greenbrae, Fairfax, San Anselmo, Ross, Belvedere (Marin). Renamed "NORTH BAY" → "MARIN COUNTY". Changed SF entry to "San Francisco & All Neighborhoods".

### Session 18 (Mar 28 2026) — Build Fix + Video Thumbnails
- **BUG FIX**: Fixed production build failure caused by syntax error in `AboutPage.js` line 91. Root cause: `@media` CSS rule placed outside template literal during Session 17 git rollback. Build: 233/233 pages pass.
- **ПРОМТ 18**: Replaced plain text video links on /about with proper YouTube thumbnail cards. Changed `maxresdefault.jpg` → `hqdefault.jpg` (more reliable). Added explicit `height: 180px` + `objectFit: cover` to images. Replaced `<div>` wrapper with `<a>` tag (`video-thumbnail-card` class). Added SVG play overlay, hover effects (box-shadow + translateY), and styled captions. Added 6 CSS rules for `.video-thumbnail-card`, `.video-thumb-wrapper`, `.play-overlay`, `.video-caption`.
- **ПРОМТ 19**: Replaced Google Maps iframe on /contact with custom styled service area map component. Shows 3 labeled regions (San Francisco, Peninsula, Marin County) with orange dots, city lists, footer with "Field service only" note and "Open in Google Maps →" link. Inline styles matching site aesthetic (#FF5722 accent, #f8f4f0 background, 12px border-radius).
- **ПРОМТ 20**: Upgraded Areas dropdown to 2-level region→cities structure. Desktop: 3-column grid (560px min-width), 11px orange uppercase region headers, 14px city links with hover color. Mobile: replaced flat list with sub-accordions — tap region header to expand cities, chevron rotates 180°. Added `mobileAreaRegion` state. Added Belvedere to Marin County in navbarData.js (now 12 cities).
- **ПРОМТ 21**: Fixed city page cross-linking. Service cards in "Every Major Appliance" section now link to city-specific pages (`/[citySlug]-[service]-repair`) instead of generic pages. Added `getCityServiceHref()` helper with `CITIES_WITH_SERVICE_PAGES` allowlist (21 cities). Fallback to generic links for unlisted cities. Applied to `ApplianceRepairPageNew.js`.
- **ПРОМТ 22**: Removed `.city-stats-grid` from non-city pages (service + maintenance). Stats bar was rendering inside service hero with `maxHeight:580px` + `overflow:hidden`, causing clipping. Removed the stats grid block from generic service hero in `ApplianceRepairPageNew.js`. City pages retain their stats grid.
- **ПРОМТ 23**: Expanded "LOCAL SERVICE / [Service] Repair by City" section. Updated `CITY_SERVICE_LINKS` from 11 cities with partial services to 21 cities with all 7 services. Expanded `CITY_DISPLAY_NAMES` (12→21 cities). Added `CITY_REGIONS` for 3-region grouping (SF, Peninsula, Marin). Removed `!isCity` condition so section also renders on city-specific service pages (e.g., `/daly-city-dryer-repair`). Current city auto-excluded from list. Fixed reverse-map bug (`SERVICE_CITY_LINKS[s]` → `CITY_SERVICE_LINKS[s]`).
- **ПРОМТ 25**: Added Coverage/Service Areas section to /commercial-appliance-repair. Removed `!isCommercial` from SERVICE AREAS condition. Added commercial-specific H2 ("Commercial Service Areas") and description text for restaurants/cafes/hotels. City pills link to `/[city]-appliance-repair` instead of nonexistent commercial-city routes. Repair vs Replace was already rendering correctly.
- **ПРОМТ 26**: Fixed "repair" → "maintenance" language on /maintenance/* desktop pages. Changed: THE PROCESS H2 to "4 Steps to a Well-Maintained Appliance", Step 04 title to "Professional Maintenance", Step 04 text to "Genuine parts and manufacturer specs", Step 02 diagnostic text uses serviceWord, schema description uses serviceWord. Mobile hero CTA: "BOOK REPAIR ONLINE" → "BOOK MAINTENANCE ONLINE". Pricing heading and STEP BY STEP were already correct.
- **ПРОМТ 27**: Removed duplicate "Popular Repairs in [City]" section (label "APPLIANCE REPAIR") from city pages. Kept only the correct "MOST REQUESTED" section with city-specific links and arrows. Verified: H2 count = 1 on /daly-city-appliance-repair.
- **ПРОМТ 28**: Replaced bullet list "WHAT WE FIX / Every Major Appliance" with tabbed grid (Kitchen/Laundry/Commercial). Created `CityServicesTabbed` component with 3 tabs, card grid (4-col desktop), city-specific hrefs via `getCityServiceHref()`, hover effects. Kitchen: 7 items, Laundry: 2, Commercial: 1.
- **ПРОМТ 29**: Fixed PricingCards grid from 1-column to 3-column on desktop. Changed Tailwind `grid-cols-1 sm:grid-cols-3` to inline `gridTemplateColumns: 'repeat(3, 1fr)'` (react-snap SSG doesn't resolve Tailwind breakpoints). Increased `maxWidth` from 780px to 900px for better card spacing.
- **ПРОМТ 30**: Added 4th housing fact to all 22 cities in `cityLocalData.js` (was 2-3, now all 4). Added city-specific "Fast Local Response" facts with drive times, freeway access, route info. Fixed `HousingTypes.jsx` grid from Tailwind `md:grid-cols-2` to inline `gridTemplateColumns: 'repeat(2, 1fr)'` for SSG compatibility. All city pages now show 2×2 grid.
- **ПРОМТ 31**: Added `ScrollToTop` component to fix missing scroll-to-top on React Router navigation. Created `ScrollToTop.js` with `useLocation` + `window.scrollTo({ top: 0, behavior: 'instant' })`. Added as first child inside `<BrowserRouter>` in `App.js`. Affects all page transitions site-wide.
- **ПРОМТ 33**: Updated homepage meta description in `index.html` to under 155 chars: "Professional appliance repair in the SF Bay Area. Same- or next-day appointments. $60 diagnostic applied to repair. 180-day warranty. Licensed & insured."
- **ПРОМТ 34**: Fixed H1 geographic mismatch on all service pages. Changed `displayH1` logic from "in San Francisco" to "in the San Francisco Bay Area" for all non-city service pages (washer, dryer, dishwasher, oven, cooktop, ice-maker, wine-cooler, etc.). Now matches `<title>` which already said "Bay Area".
- **ПРОМТ 35**: Fixed pricing H2 "Repair Cost in San Francisco" on city-service pages. Added `pricingCityName` prop to `ApplianceRepairPageNew`. `CityServicePage` now passes `pricingCityName={cityName}`. H2 dynamically shows "[Appliance] Repair Cost in [City Name]" (e.g., "Refrigerator Repair Cost in Greenbrae"). Generic service pages fallback to "the San Francisco Bay Area".
- **ПРОМТ 36**: Updated /commercial-appliance-repair: title → "Commercial Appliance Repair Bay Area | FixitBay LLC", H1 → "Expert Commercial Appliance Repair in the Bay Area" via `customH1`. Replaced residential relatedLinks with 5 commercial equivalents (commercial-refrigerator, dishwasher, oven, dryer, laundry). Service Areas section already present from ПРОМТ 25.
- **ПРОМТ 37**: Updated all 7 maintenance pages: titles now include "San Francisco Bay Area" geo. Fixed H2s: pricing → "[Appliance] Maintenance Service Cost" (both maintenancePricing section and generic section), problems → "Signs Your [Appliance] Needs Maintenance", eyebrow → "MAINTENANCE GUIDE".
- **ПРОМТ 38**: Fixed broken internal link `/blog/same- or next-day-appliance-repair-bay-area` (URL with space → 404) in 3 blog files (4 occurrences): ApplianceRepairCostSanFrancisco.js (2), DryerNotHeating.js (1), RefrigeratorNotCooling.js (1). Replaced with `/book` (booking page). Audited all blog posts — no other broken URLs found.

### Session 18 (Mar 29 2026) — Prompt 40 Verification
- **ПРОМТ 40**: Verified San Francisco hub page content expansion. 3 new sections confirmed rendering correctly: (1) "San Francisco Neighborhoods We Serve" — 30-neighborhood grid with MapPin icons, (2) "Why SF Appliances Need Expert Care" — 3-paragraph local expertise content, (3) "Appliance Repair Cost Guide for San Francisco" — 7-row pricing table. Build: 233/233 pages passed. Visual verification: all sections render on desktop.
- **ПРОМТ 41**: Added dynamic "Serving [City] Customers" section to city-service page template (e.g., /daly-city-refrigerator-repair). Section appears between "How Your Repair Visit Works" and "Common Problems". Created expandable `CITY_SERVING_DATA` config in CityServicePage.js with 3 initial entries (Daly City, Greenbrae, San Francisco) containing neighborhoods and local notes. New `servingCity` prop passed to ApplianceRepairPageNew template. Build: 233/233 pages passed.
- **ПРОМТ 42**: Fixed BreadcrumbList schema on service pages. Was showing 2 levels with wrong 3rd-level URL (homepage). Now correctly shows 3 levels: Home → Services → [Service Name] with proper canonical URL (e.g., `https://fixitbay.net/refrigerator-repair`). Fixed `name` field from full pageTitle to clean `${appliance} ${serviceWord}`. Build: 233/233.
- **ПРОМТ 43**: Expanded /refrigerator-repair content with 3 new sections: (1) "Repair vs. Replacement — How to Decide" comparison table with 4 scenarios and ✓/✗ columns, (2) "Refrigerator Symptoms Checklist" — 7 symptoms with diagnostic explanations, (3) "How We Diagnose and Fix Refrigerators" — 3-step process. New template props: `comparisonTable`, `symptomsChecklist`, `diagnosisSteps` (reusable for other service pages). Build: 233/233.
- **ПРОМТ 43 (расширение)**: Applied all 3 new sections to ALL 12 service pages (Refrigerator, Washer, Dryer, Dishwasher, Oven, Range, Stove, Cooktop, Freezer, Ice Maker, Wine Cooler, Disposal) with unique appliance-specific content. Created shared `/data/serviceContentData.js`. Removed old duplicate "EXPERT ADVICE / Repair vs. Replace" section (`repairVsReplace`) from template and all 21 page files (12 service + 7 maintenance + 2 commercial/residential). Build: 233/233.
- **Фикс дубликата**: Removed duplicate "COVERAGE / Service Areas" section from regular service pages. Now only "LOCAL SERVICE / [Appliance] Repair by City" (grouped by region) shows on service pages. COVERAGE section preserved for commercial and maintenance pages where "by City" doesn't appear. Build: 233/233.
- **Pricing Table**: Replaced text-block pricing with structured HTML table on all 12 service pages. Columns: Repair | Starting From. Includes highlighted Diagnostic visit row ($60 in orange) and Luxury/Premium Brands pills section. Data stored in `serviceContentData.js` as `pricingTable` — easy for user to edit prices. Old text fallback preserved for commercial/brand/city-service pages. Build: 233/233.
- **Maintenance & Commercial унификация**: Applied pricingTable + comparisonTable + symptomsChecklist + diagnosisSteps to all 7 maintenance pages and 5 commercial pages. Added 12 new data entries to `serviceContentData.js`. Removed old `maintenancePricing` flat-list format. All page types now share the same visual structure: table pricing, comparison, symptoms cards, 3-step process. Build: 233/233.
- **ПРОМПТ 49**: Fixed title tags on 18+ pages where Google rewrites titles. 23 replacements across 18 files. All titles now 38-57 chars (within 50-60 target). Format: `[Service] in [City] | FixitBay`. Also fixed dynamic title in CityServicePage.js (was up to 76 chars, now max 57). Build: 233/233.
- **ПРОМПТ 50**: Rewrote `/blog/dishwasher-not-draining` for Featured Snippet capture. New H1: "Dishwasher Not Draining? 7 Causes & How to Fix It". Added 55-word snippet paragraph after H1. Restructured H2s: Cause 1-7 (Clogged Filter, Blocked Drain Hose, Faulty Drain Pump, Garbage Disposal Connection, Kinked Hose, Check Valve, Control Board Failure). Updated HowTo Schema with detailed steps for first 3 causes. Added internal links to /dishwasher-repair and /san-francisco-dishwasher-repair. Updated bottom CTA. Build: 233/233.

- **ПРОМПТ 51**: Localized `/dishwasher-repair` for "san francisco dishwasher repair" query. Updated `DishwasherRepairPage.js`: customH1="Dishwasher Repair in San Francisco | Same-Day Service", pageTitle="Dishwasher Repair San Francisco | FixitBay" (42 chars), SF-specific heroDescription, updated serviceSchema (areaServed: City/San Francisco, provider.addressLocality: San Francisco). Added `SanFranciscoDishwasherSection` component with 30 SF neighborhoods grid, "Why SF Residents Choose FixitBay" dark card with 6 value props, local Victorian/Edwardian content. Updated `seo-config.cjs` dishwasher entry with SF-localized title, H1, meta description, content (incl. "Why SF Residents" list). Mobile: updated heroTitle to "San Francisco", all alt texts to SF. Build: 233/233. Both mobile + desktop match SF intent.

- **Массовое обновление цен**: Обновлены прайс-таблицы на 13 страницах (7 repair + 6 maintenance). Все цены отображаются в формате "from $X". Удалены строки: Drum bearing, Water pump (Washer); Spray arm, Door gasket (Dishwasher); Infinite switch (Stove, Cooktop); Glass-top surface (Cooktop); Compressor (Wine Cooler). Добавлена строка Door boot/gasket replacement $310 (Washer). Обновлены цены: Drain pump 285→295 (Washer), Gas valve 295→325 (Dryer), Water inlet valve 265→285, Control board 350→385 (Dishwasher), Burner assembly 285→325 (Range, Stove, Cooktop). Maintenance: полностью пересмотрены цены (255-290 вместо 45-149), удалены Full maintenance check и дешёвые позиции (DONE)
- **Удаление Garbage Disposal**: Полностью удалена услуга из сайта. Удалён DisposalRepairPage.js, маршруты из App.js, ссылки из SiteNavbar, ServicesPage, SiteMapPage, HomeServicesGrid, HomeExploreLinks, NeighborhoodPage, CityRepairPage, LLMInfoPage, SchemaMarkup, StructuredData, ProfessionalLandingPage, RelatedServices, navbarData, servicePricing, seo-config.cjs (маршрут + конфигурация). Билд: 232/232 (было 233). Упоминания garbage disposal в блоге (dishwasher-not-draining) сохранены как фактический контент (DONE)

- **GSC "Crawled — not indexed" Fix (31 pages, 4 groups)**:
  - **Group 1**: Added 30 server-side 301 redirects in `_redirects` for cities outside service area → `/service-areas`. Removed client-side Navigate routes from App.js.
  - **Group 2**: Created `CityLandingPage.js` template (navy/cream design, 13 sections) + 7 city landing pages: South SF, San Bruno, Millbrae, Colma, Pacifica, Brisbane, Mill Valley. Each with ~1000 words unique content. Integrated via CityRepairRoute.
  - **Group 3**: Updated 5 maintenance pages (Dryer, Washer, Refrigerator, Oven, Wine Cooler): new titles/H1, removed `noindex`, added MaintenanceSections component (Maintenance vs Repair table + Checklist + Annual Schedule).
  - **Group 4**: Marina neighborhood page: 8 H2 sections (was 0), 1657 words (was 718), 37 Marina mentions. Added homeTypes + recentRepairs sections.
  - Build: 232/232 (DONE)

### Session 19 (Mar 30 2026) — Prompt 57 Visual Fixes
- **ПРОМПТ 57 (Проблема 2)**: Fixed stats bar "180-Day Warranty" cell alignment. Changed `num` from `'180-Day'` (36px) to `'180'` (64px, matching "22" and "$60"). Changed `unit` from `'Warranty'` to `'Day Warranty'` (orange). All 3 stat cells now follow identical visual pattern: big number → orange unit → uppercase title → description. Build: 232/232.
- **ПРОМПТ 57 (Проблема 1)**: Redesigned desktop Hero right column (Trust Bar). Replaced plain logo with glassmorphism card (`rgba(255,255,255,0.08)`, `backdrop-filter: blur(16px)`, rounded 20px). Added CSS `@keyframes sway` animation (2.5° rotation, 4s infinite) for logo. Created 2x2 trust grid with Lucide icons: Star (4.9 Google Rating), CheckCircle (95+ Verified Reviews), Shield (#51001 CA License), Award (2025 Nextdoor Fave). Grid items have hover effects. Added social icons row (Google, Thumbtack, Nextdoor, Facebook) with circular glassmorphism buttons. Mobile unchanged (card hidden <1024px). Build: 232/232.
- **ПРОМПТ 57 (Проблема 3)**: Fixed missing arrow between steps 02→03 in THE PROCESS section. Root cause: `i !== 1` condition excluded the arrow after step 02, rendering only a `.hiw-arrow-down` L-connector (hidden on desktop). Changed to `i < 3` for all arrows. All 3 connectors (01→02, 02→03, 03→04) now render identically. Build: 232/232.

- **ПРОМПТ 57 (Проблема 4)**: Merged "Related Services" + "Service Areas/Repair by City" into two-column layout on all service, maintenance, and commercial pages. Left card: navy `#0D1B2A` with white chip links. Right card: white with city chips/pins. Grid `1fr 1fr` on desktop, `1fr` on mobile (<768px). Cards have `border-radius: 16px`, `padding: 28px 32px`. Service pages show "Repair by City" (grouped by region with MapPin), maintenance/commercial show "Service Areas" coverage chips. Build: 232/232.

- **ПРОМПТ 57 (Проблема 5)**: Replaced unstyled city grid on `/maintenance` with navy-themed coverage section. New design: `#0D1B2A` background, eyebrow "WE SERVICE THESE AREAS", H2 "Our Bay Area Coverage", 11 city chips with inline SVG MapPin icons (orange `#FF5722`), "All SF Neighborhoods →" accent chip, orange CTA button "View All Service Areas". Build: 232/232.
## Backlog (Prioritized)
- **ПРОМПТ 57 (Проблема 6)**: Redesigned both footers. Full footer (UnifiedFooter.js): 4-column grid (`2fr 1fr 1fr 1fr`), brand col with tagline + 5-star rating + license badge, Services col, Service Areas col (cities), Contact col (phone/email/social icons). Bottom bar with copyright + legal links. Mobile: accordion navigation, 2-col→1-col responsive. Compact footer (CompactFooter.jsx): orange `2px` top border, flex layout (logo | phone with icon | copyright), stacks vertically on mobile (<600px). Build: 232/232.
- P2: Continue migrating inline styles to Tailwind/CSS vars (ApplianceRepairPageNew.js, MobileServiceLanding.js)

### Session 19 — Prompt 58 Bug Fixes
- **БАГ 1**: Fixed DynamicLandingPage.js — merged duplicate `className` on `<Star>` and `<div>`, removed all duplicate `rel="noopener noreferrer"` attributes.
- **БАГ 2A**: Fixed StructuredData.js — removed extra `}, }` trailing comma in `itemListElement` (Wine Cooler Repair entry).
- **БАГ 2B**: Fixed StructuredData.js — added `[]` dependency array to `useEffect` to prevent infinite re-renders.
- **БАГ 3**: Renamed `backend/models/content_models.py` → `.js` (file contained JavaScript code, not Python). Not imported from any Python module. Build: 232/232.

### Session 19 — Hero Redesign (User Prompt)

### Session 19 — SEO & Internal Linking Tasks
- **Задача 1 (301 Redirects)**: Added `/appliance-repair-santa-clara → /service-areas` to `_redirects`. All other requested redirects (Group 1: 18 out-of-area cities, Group 2: 7 old-format URLs) were already present.
- **Задача 2 (Sitemap)**: Added 5 maintenance subpages to `public/sitemap.xml` (dryer, washer, refrigerator, oven-range, wine-cooler) with `<priority>0.7</priority>` and `<lastmod>2026-04-01</lastmod>`.
- **Задача 3 (Prerender)**: Already implemented — `react-snap` + `generate-seo-snapshots.cjs` already prerender all maintenance and blog routes. No changes needed.
- **Задача 4 (Internal Linking)**: Added "Maintenance" column to UnifiedFooter (5 links + "All maintenance →", 5-column grid). Added maintenance cross-link section on repair pages ("Want to prevent breakdowns? Learn about our [X] Maintenance Service →") for dryer, washer, refrigerator, oven, wine-cooler. Build: 232/232.

### Session 19 — Prompt 62: Fix "Video isn't on a watch page"
- **Задача 1**: Replaced single `VideoObject` schema with `ItemList` containing 2 `VideoObject` entries (WBEc8Lz2saA + ottiV_KfcUI) with full publisher+logo data in AboutPage.js.
- **Задача 2**: Replaced thumbnail+link pattern with embedded `<iframe>` for both YouTube videos. Responsive 16:9 aspect ratio, lazy loading. Build: 232/232.
- **Hero complete rewrite**: Removed glassmorphism trust card (logo + 2x2 grid + social icons), urgency "SLOTS AVAILABLE TODAY" line, and dark trust strip. New layout: `1fr 280px` grid. Left: logo block with circular avatar, H1 with orange "Bay Area" accent + subtitle regions, paragraph, Book/Phone CTA buttons. Right: vertical trust panel with 4 data blocks (Google Rating 4.9/5, Service Area 22 cities, Warranty 180 days, License #S1001) separated by thin lines. Mobile: trust panel hidden, existing mobile elements preserved. Build: 232/232.
- P3: Performance audit — code-split heavy sections, lazy-load below-fold content

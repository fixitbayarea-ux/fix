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

## Backlog (Prioritized)
- P2: Continue migrating inline styles to Tailwind/CSS vars (ApplianceRepairPageNew.js, MobileServiceLanding.js)
- P3: Performance audit — code-split heavy sections, lazy-load below-fold content

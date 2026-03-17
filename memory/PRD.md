# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase "Precision Craft" redesign of a static appliance repair SPA (React). Mobile-first, responsive on desktop. Dark/cream alternating section design system across all page templates.

## Design System: Precision Craft
- **Light sections**: bg `#F8F5F0`, cards `#FFFFFF`, headings `#1A1A1A`, body `#4A5568`, eyebrow `#FF5722`
- **Dark sections**: bg `#0D1B2A`, cards `#1A2F45`, headings `#FFFFFF`, body `rgba(255,255,255,0.60)`, eyebrow `rgba(255,255,255,0.45)`
- Accent: `#FF5722`, Border radius: 4px

## Architecture
```
/app/frontend/src/
  components/
    SiteNavbar.jsx             # Mobile menu accordion redesign (5 parts)
    SEOMetaTags.js             # twitterTitle/Desc/Site props
    ProfessionalLandingPage.js # Merged h2s, geo/twitter meta
    pages/
      AboutPage.js             # Mobile-first responsive redesign
      BrandsPage.js            # Theme aligned
      BlogListPage.js          # Mobile-first redesign
    templates/
      MobileServiceLanding.js  # Theme aligned
      BrandLandingPage.js      # 13-part redesign
    sections/
      HomeHero.jsx             # Unified layout, single h1
      ServiceAreaMapLibre.jsx  # Merged 'Where We Serve' h2
  public/
    index.html                 # Updated twitter route data
  App.js
```

## Completed Work

### Session 1–3 (Previous Forks)
- MobileServiceLanding.js, BrandsPage.js, BrandLandingPage.js, BlogListPage.js redesigns
- SiteNavbar.jsx: "Tips" -> "Blog & Tips"
- Cream/Navy theme alignment across all templates

### Session 4 (Mar 11, 2026)
- AboutPage.js 12-part mobile-first redesign — 26/26 tests

### Session 5 (Mar 11, 2026)
- **Single H1**: HomeHero.jsx unified layout, `querySelectorAll('h1').length === 1`
- **Merged H2s**: "No Surprises. Ever.", "Quick Answers", "Explore Services & Areas", "Where We Serve"
- **GEO + Twitter meta**: SEOMetaTags enhanced with twitter props, index.html inline script updated
- 28/28 tests (iteration_88.json)

### Session 6 (Mar 11, 2026)
- **Mobile Menu Accordion Redesign (5 parts)**:
  - PART 1: Mobile top bar — [BOOK] [Phone] [Hamburger] layout
  - PART 2: CSS animations — accordion body (max-height transition), arrow rotation, trigger highlight, sub-item hover
  - PART 3: Full menu body — Quick Links (Home, SF, Reviews), Services (12 items), Maintenance (7), Brands (14 in 2-col grid), Service Areas (32 locations: SF/Peninsula/Marin), Company (Blog & Tips, About Us, Contact), Bottom CTAs (Book, Call, Text)
  - PART 4: Text labels — "Blog & Tips", "About Us" in mobile; desktop "Blog & Tips" already set
  - PART 5: mobileAreasOpen state + route change reset
  - Desktop navbar completely unchanged
  - All tests passed 100% (iteration_89.json)

### Session 7 (Mar 11, 2026)
- **Homepage Final Fixes Verification** — All 5 targeted fixes confirmed working:
  1. Single H1 in HomeHero.jsx — verified only 1 h1 in DOM
  2. No duplicate H2s — "No Surprises. Ever.", "Quick Answers", "Explore Services & Areas" each appear once
  3. OG Image fixed to `og-cover.png` in SEOMetaTags call AND index.html routeMeta (testing agent caught stale value in index.html)
  4. FAQ buttons — minHeight 48px, padding 12px 16px
  5. Trust badges — parent containers minHeight 44px, display:flex, alignItems:center
- **Global Sticky Footer** (StickyCTA.jsx) always visible on mobile, local sticky bars removed from NeighborhoodPage, MobileServiceLanding, BrandLandingPage
- **Navbar Performance** — logo: fetchPriority="high", loading="eager", width/height attrs
- **SEOMetaTags.js** — GEO tags, preconnect links, OG image dimensions added
- 11/11 tests passed (iteration_90.json)

### Session 8 (Mar 11, 2026)
- **NeighborhoodPage.js Targeted Fixes:**
  1. BreadcrumbList JSON-LD schema added (Home → San Francisco → Neighborhood)
  2. Breadcrumb links: 44px min-height touch targets
  3. FAQ buttons: min-height 48px, padding 14px 20px
  4. `.nh-page { padding-bottom: 0 }` on mobile (global StickyCTA handles body padding)
  5. Confirmed: `nh-mobile-bar` and `nh-float` already removed in previous session
- 10/10 tests passed (iteration_91.json)

### Session 9 (Mar 11, 2026)
- **MobileServiceLanding.js Targeted Fixes:**
  1. Confirmed: internal sticky bar already removed
  2. LocalBusiness schema added (FixitBay LLC, address, aggregateRating 4.9/87)
  3. Eyebrow text: "We Service" → "Appliances We Service", "HOW IT WORKS" → "How It Works"
  4. BreadcrumbList dedup logic (filters duplicates, keeps first)
  5. FAQ touch targets already at minHeight:52 (exceeds 48px requirement)
- 9/9 tests passed (iteration_92.json)

### Session 10 (Mar 11, 2026)
- **ApplianceRepairPageNew.js Targeted Fixes:**
  1. Service JSON-LD schema added for city pages (provider, areaServed, offers $60)
  2. BreadcrumbList dedup logic (filters duplicates, keeps first)
  3. Duplicate H2 "Need Appliance Repair in [City]?" → H3 in Section 13 (final CTA)
  4. FAQ buttons (Section 11): minHeight 48px added
  5. Neighborhood pill links (Section 12): padding 10px 16px, minHeight 44px, display inline-flex, alignItems center
  6. Fixed UniversalBreadcrumb.js race condition (300ms → 600ms delay)
- 8/9 tests passed (iteration_93.json), intermittent BreadcrumbList race fixed

### Session 11 (Mar 11, 2026)
- **BrandLandingPage.js Targeted Fixes:**
  1. Floating button removed (showFloat state, useEffect, element, CSS)
  2. Sticky bar CSS remnants cleaned (72px padding-bottom removed)
  3. BreadcrumbList schema added (Home → Brands → [Brand] Appliance Repair)
  4. Eyebrow text capitalization: "COMMON ISSUES" → "Common Issues We Fix", "DIY FIRST STEPS" → "What to Check Before You Call", "WHERE WE SERVE" → "Where We Serve", "OUR ADVANTAGE" → "Why Choose FixitBay", "VERIFIED REVIEWS" → "What Customers Say"
  5. Breadcrumb links: 44px min-height touch targets
- 17/17 tests passed (iteration_94.json)

### Session 12 (Mar 13, 2026)
- **Mid-page Technician Photo on Mobile:**
  - Added `techImage` + `techImageAlt` props to 5 mobile pages to match refrigerator page layout:
    1. WasherRepairPage.js (`/washer-repair`)
    2. DryerRepairPage.js (`/dryer-repair`)
    3. IceMakerRepairPage.js (`/ice-maker-repair`)
    4. WasherMaintenance.js (`/maintenance/washer`)
    5. DryerMaintenance.js (`/maintenance/dryer`)
  - Verified via screenshots: tech photo renders after "Appliances We Service" section on all pages
- **SEO Fix — Removed noindex from 4 brand pages:**
  - Maytag, Frigidaire, Kenmore, Wolf brand pages had `noindex={true}` on mobile MobileServiceLanding
  - Google crawls mobile-first, so these pages were excluded from index
  - Removed `noindex` prop from all 4 files; verified meta robots = "index, follow"
- **Dishwasher Tech Photo Added:**
  - Downloaded dishwasher technician photo to `/images/technicians/dishwasher-tech.jpg`
  - Added `heroImage` + `heroImageAlt` to desktop (ApplianceRepairPageNew) for both pages
  - Added `heroImage`, `heroImageAlt`, `techImage`, `techImageAlt` to mobile (MobileServiceLanding) for both pages
  - Pages: `/dishwasher-repair`, `/maintenance/dishwasher`

### Session 13 (Mar 16, 2026)
- **Wine Cooler Repair Page SEO & Content Update:**
  1. Breadcrumb: "Wine Refrigerator Repair" → "Wine Cooler Repair" (both mobile & desktop)
  2. Hero H1: "Wine Fridge Repair in SF. Today." → "Wine Cooler Repair in SF. Today." (mobile), auto-updated via `appliance` prop (desktop)
  3. Hero alt text: "wine cooler repair san francisco" added to both templates
  4. New descriptive paragraph added after hero subtitle (types of wine coolers serviced, pricing)
  5. Schema `serviceType` updated: "WineRefrigerator Repair" → "Wine Cooler Repair"
  6. Added `heroDescription` prop to both `MobileServiceLanding.js` and `ApplianceRepairPageNew.js` templates
  7. SEO snapshots regenerated: 102/102 pages

### Session 14 (Mar 17, 2026)
- **GitHub Import & Environment Setup:**
  - Imported existing project from https://github.com/fixitbayarea-ux/fix
  - Set up backend/.env (MONGO_URL, DB_NAME) and frontend/.env (REACT_APP_BACKEND_URL)
  - Installed dependencies (backend via pip, frontend via yarn)
  - Started services via supervisor (backend port 8001, frontend port 3000)
  - Verified API endpoints working: /api/, /api/business-info
  - Verified frontend rendering correctly with homepage hero, navigation, and service sections

- **SEO & Content Fixes:**
  1. City page titles: Updated pattern to "Appliance Repair ${cityName} | Fast Same-Day Service | FixitBay"
  2. Warranty text: Fixed 4 pages (ResidentialApplianceRepairPage, AboutPage, ContactPage, MaintenanceHub) - changed "6-month" warranty to "180-day"
  3. Wine Cooler page JSON-LD Schema: Added comprehensive Service schema with full address, 22 service areas, and priceRange
  4. SEO snapshots regenerated: 102/102 pages

## Backlog
- (P1) Refactor monolithic components into smaller sub-components
- (P2) Centralize hardcoded content into JSON structures
- (P2) Migrate inline styles to scoped CSS files
- (P2) ProfessionalLandingPage.js cream color check

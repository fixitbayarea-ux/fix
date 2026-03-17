# FixitBay Appliance Repair Website — PRD

## Original Problem Statement
Multi-phase "Precision Craft" redesign of a static appliance repair SPA (React). Mobile-first, responsive on desktop. Dark/cream alternating section design system across all page templates. Ongoing SEO and content optimization based on Google Search Console data.

## Design System: Precision Craft
- **Light sections**: bg `#F8F5F0`, cards `#FFFFFF`, headings `#1A1A1A`, body `#4A5568`, eyebrow `#FF5722`
- **Dark sections**: bg `#0D1B2A`, cards `#1A2F45`, headings `#FFFFFF`, body `rgba(255,255,255,0.60)`, eyebrow `rgba(255,255,255,0.45)`
- Accent: `#FF5722`, Border radius: 4px

## Architecture
```
/app/frontend/src/
  components/
    SiteNavbar.jsx             # Mobile menu accordion redesign
    SEOMetaTags.js             # Meta tags, OG, Twitter, GEO
    ProfessionalLandingPage.js # Homepage
    pages/
      CityServicePage.js       # 119 city+service combo pages (NEW)
      AboutPage.js             # Mobile-first responsive
      BrandsPage.js            # Theme aligned
      BlogListPage.js          # Mobile-first
    templates/
      ApplianceRepairPageNew.js # Desktop template (commonProblems, faqData, serviceDescription, serviceSchema)
      MobileServiceLanding.js   # Mobile template
      BrandLandingPage.js       # Brand pages
    sections/
      HomeHero.jsx             # Single H1
  seo/
    seoContent.js              # Runtime SEO content for React app
  public/
    index.html                 # routeMeta inline script (warranty text fixed)
    sitemap.xml                # 207 URLs (101 original + 126 city+service)
    _redirects                 # Netlify 301 redirects
/app/frontend/scripts/
    seo-config.cjs             # SEO content for static snapshots
    generate-seo-snapshots.cjs # Generates 232 HTML snapshots + build/sitemap.xml
```

## Completed Work

### Sessions 1–13 (Previous Forks)
- Full Precision Craft redesign across all templates
- Mobile menu accordion, sticky footer, navbar performance
- NeighborhoodPage, MobileServiceLanding, ApplianceRepairPageNew, BrandLandingPage fixes
- Tech photos on all service pages
- Wine Cooler SEO overhaul
- Session 14: GitHub import, env setup, city page titles, warranty text (6-month→180-day)

### Session 15 (Mar 17, 2026)
- **"6-Month Warranty" → "180-Day Warranty" Global Fix:**
  - Fixed 26 occurrences in `public/index.html` routeMeta script (garbage-disposal, commercial-*, local-appliance, residential-appliance, colma, mill-valley, pacifica)
  - Fixed 9 occurrences in `scripts/seo-config.cjs` (homepage, Colma city, generic city fallback, generic service fallback, default fallback)
  - Fixed in all 232 build/ HTML snapshot files
  - Enhanced `seoContent.js` `getCityServiceContent()` with pricing data
  - Verified: 0 "6-month warranty" instances in source and build

- **City+Service Pages (119 Routes) — Full Implementation:**
  - Added `san-francisco` to CITY_CONTEXT in CityServicePage.js (18 total cities with context)
  - Registered 126 explicit routes in App.js (18 cities × 7 services)
  - Each page renders 300+ words: city context, 6 common problems, pricing, 5 FAQs, JSON-LD Service schema
  - Desktop: via ApplianceRepairPageNew template
  - Mobile: via MobileServiceLanding template
  - Added city+service handler to `seo-config.cjs` for static HTML snapshots
  - Added city+service route generation to `generate-seo-snapshots.cjs`
  - Regenerated snapshots: 232/232 (up from 102)
  - Build sitemap: 231 canonical URLs (up from ~100)
  - Public sitemap: 207 URLs (126 city+service added)
  - 10/10 tests passed (iteration_95.json)

- **Sitemap Verification:**
  - Confirmed: NO old redirect URLs (/appliance-repair-daly-city, /wine-refrigerator-repair) in either public or build sitemap
  - Both sitemaps clean of redirected URLs

- **noindex Audit:**
  - Only NotFound404 and ThankYouBooking have noindex=true (both correct)
  - All other pages set noindex=false → renders as "index, follow"

## Backlog
- (P1) Refactor monolithic components into smaller sub-components
- (P1) Refactor dual content sources (seoContent.js + seo-config.cjs) into single source of truth
- (P2) Centralize hardcoded content into JSON structures
- (P2) Migrate inline styles to scoped CSS files
- (P2) ProfessionalLandingPage.js cream color check

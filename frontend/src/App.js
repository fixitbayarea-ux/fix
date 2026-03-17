import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CanonicalUpdater from "./components/CanonicalUpdater";
import SchemaMarkup from "./components/SchemaMarkup";
import StickyCTA from "./components/StickyCTA";
import SiteNavbar from "./components/SiteNavbar";
import UniversalBreadcrumb from "./components/UniversalBreadcrumb";

// Critical components (loaded immediately)
// cache-bust: 2026-03-14b
import ProfessionalLandingPage from "./components/ProfessionalLandingPage";

// Reviews page (needs to be indexed, not lazy)
const ReviewsPage = lazy(() => import("./components/pages/ReviewsPage"));

// Blog pages
const BlogListPage = lazy(() => import("./components/pages/BlogListPage"));
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage"));

// Lazy-loaded components (code splitting)
// Admin
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const CMSDashboard = lazy(() => import("./components/admin/CMSDashboard"));

// Pages (services)
const RefrigeratorRepairPage = lazy(() => import("./components/pages/RefrigeratorRepairPage"));
const FreezerRepairPage = lazy(() => import("./components/pages/FreezerRepairPage"));
const IceMakerRepairPage = lazy(() => import("./components/pages/IceMakerRepairPage"));
const WasherRepairPage = lazy(() => import("./components/pages/WasherRepairPage"));
const DryerRepairPage = lazy(() => import("./components/pages/DryerRepairPage"));
const DishwasherRepairPage = lazy(() => import("./components/pages/DishwasherRepairPage"));
const OvenRepairPage = lazy(() => import("./components/pages/OvenRepairPage"));
const StoveRepairPage = lazy(() => import("./components/pages/StoveRepairPage"));
const RangeRepairPage = lazy(() => import("./components/pages/RangeRepairPage"));
const CooktopRepairPage = lazy(() => import("./components/pages/CooktopRepairPage"));
const WineRefrigeratorRepairPage = lazy(() => import("./components/pages/WineRefrigeratorRepairPage"));
const DisposalRepairPage = lazy(() => import("./components/pages/DisposalRepairPage"));

// Hubs / misc
const ServiceAreasHub = lazy(() => import("./components/pages/ServiceAreasHub"));
const BrandsPage = lazy(() => import("./components/pages/BrandsPage"));
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const SiteMapPage = lazy(() => import("./components/pages/SiteMapPage"));

// Cities route catcher
const CityRepairRoute = lazy(() => import("./components/CityRepairRoute"));

// 404
const NotFound404 = lazy(() => import("./components/pages/NotFound404"));

// Extra informational pages
const ResidentialApplianceRepairPage = lazy(() => import("./components/pages/ResidentialApplianceRepairPage"));
const CommercialApplianceRepairPage = lazy(() => import("./components/pages/CommercialApplianceRepairPage"));
const CommercialRefrigeratorRepairPage = lazy(() => import("./components/pages/CommercialRefrigeratorRepairPage"));
const CommercialDishwasherRepairPage = lazy(() => import("./components/pages/CommercialDishwasherRepairPage"));
const CommercialWasherRepairPage = lazy(() => import("./components/pages/CommercialWasherRepairPage"));
const CommercialDryerRepairPage = lazy(() => import("./components/pages/CommercialDryerRepairPage"));
const CommercialOvenRepairPage = lazy(() => import("./components/pages/CommercialOvenRepairPage"));
const BlogFAQPage = lazy(() => import("./components/BlogFAQPage"));
const ApplianceReplacementPage = lazy(() => import("./components/pages/ApplianceReplacementPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const LocalApplianceRepairPage = lazy(() => import("./components/pages/LocalApplianceRepairPage"));
const MaintenanceHub = lazy(() => import("./components/pages/MaintenanceHub"));
const RefrigeratorMaintenance = lazy(() => import("./components/pages/maintenance/RefrigeratorMaintenance"));
const WasherMaintenance = lazy(() => import("./components/pages/maintenance/WasherMaintenance"));
const DryerMaintenance = lazy(() => import("./components/pages/maintenance/DryerMaintenance"));
const DishwasherMaintenance = lazy(() => import("./components/pages/maintenance/DishwasherMaintenance"));
const OvenRangeMaintenance = lazy(() => import("./components/pages/maintenance/OvenRangeMaintenance"));
const CooktopMaintenance = lazy(() => import("./components/pages/maintenance/CooktopMaintenance"));
const WineCoolerMaintenance = lazy(() => import("./components/pages/maintenance/WineCoolerMaintenance"));

// Brand pages (lazy-loaded)
const WhirlpoolApplianceRepairPage = lazy(() => import("./components/pages/brands/WhirlpoolApplianceRepairPage"));
const LGApplianceRepairPage = lazy(() => import("./components/pages/brands/LGApplianceRepairPage"));
const SamsungApplianceRepairPage = lazy(() => import("./components/pages/brands/SamsungApplianceRepairPage"));
const GEApplianceRepairPage = lazy(() => import("./components/pages/brands/GEApplianceRepairPage"));
const BoschApplianceRepairPage = lazy(() => import("./components/pages/brands/BoschApplianceRepairPage"));
const KitchenAidApplianceRepairPage = lazy(() => import("./components/pages/brands/KitchenAidApplianceRepairPage"));
const MaytagApplianceRepairPage = lazy(() => import("./components/pages/brands/MaytagApplianceRepairPage"));
const FrigidaireApplianceRepairPage = lazy(() => import("./components/pages/brands/FrigidaireApplianceRepairPage"));
const KenmoreApplianceRepairPage = lazy(() => import("./components/pages/brands/KenmoreApplianceRepairPage"));
const ThermadorApplianceRepairPage = lazy(() => import("./components/pages/brands/ThermadorApplianceRepairPage"));
const VikingApplianceRepairPage = lazy(() => import("./components/pages/brands/VikingApplianceRepairPage"));
const MieleApplianceRepairPage = lazy(() => import("./components/pages/brands/MieleApplianceRepairPage"));
const SubZeroApplianceRepairPage = lazy(() => import("./components/pages/brands/SubZeroApplianceRepairPage"));
const WolfApplianceRepairPage = lazy(() => import("./components/pages/brands/WolfApplianceRepairPage"));
const PrivacyPolicyPage = lazy(() => import("./components/pages/PrivacyPolicyPage"));
const LLMInfoPage = lazy(() => import("./components/pages/LLMInfoPage"));
const BookPage = lazy(() => import("./components/pages/BookPage"));
const ThankYouBooking = lazy(() => import("./components/pages/ThankYouBooking"));

// Blog post pages
const RefrigeratorNotCooling = lazy(() => import("./components/pages/blog/RefrigeratorNotCooling"));
const DishwasherMaintenanceBlog = lazy(() => import("./components/pages/blog/DishwasherMaintenance"));
const RepairVsReplace = lazy(() => import("./components/pages/blog/RepairVsReplace"));
const DryerTakingTooLong = lazy(() => import("./components/pages/blog/DryerTakingTooLong"));
const WasherErrorCodes = lazy(() => import("./components/pages/blog/WasherErrorCodes"));
const OvenTemperatureCalibration = lazy(() => import("./components/pages/blog/OvenTemperatureCalibration"));
const IceMakerTroubleshooting = lazy(() => import("./components/pages/blog/IceMakerTroubleshooting"));
const ApplianceLifespan = lazy(() => import("./components/pages/blog/ApplianceLifespan"));
const EnergyEfficientAppliances = lazy(() => import("./components/pages/blog/EnergyEfficientAppliances"));
const GasSmellFromStove = lazy(() => import("./components/pages/blog/GasSmellFromStove"));
const RefrigeratorWaterFilter = lazy(() => import("./components/pages/blog/RefrigeratorWaterFilter"));
const DishwasherNotDraining = lazy(() => import("./components/pages/blog/DishwasherNotDraining"));
const NeighborhoodPage = lazy(() => import("./components/pages/NeighborhoodPage"));
const MarinCountyPage = lazy(() => import("./components/pages/MarinCountyPage"));
const CityServicePage = lazy(() => import("./components/pages/CityServicePage"));

export default function App() {
  return (
    <BrowserRouter>
      <CanonicalUpdater />
      <SchemaMarkup />
      <UniversalBreadcrumb />
      <style>{`@media(max-width:767px){body{padding-bottom:56px!important}}`}</style>
      <SiteNavbar />
      <StickyCTA />
      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/cms" element={<CMSDashboard />} />
        
        {/* Canonical redirect mapping (client-side fallback) */}
        <Route path="/appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-near-you" element={<Navigate to="/service-areas" replace />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/wine-refrigerator-repair" element={<Navigate to="/wine-cooler-repair" replace />} />
        <Route path="/stacked-washer-dryer-repair" element={<Navigate to="/washer-repair" replace />} />
        <Route path="/wall-oven-repair" element={<Navigate to="/oven-repair" replace />} />
        <Route path="/range-repair" element={<RangeRepairPage />} />
        <Route path="/stove-repair" element={<StoveRepairPage />} />
        <Route path="/built-in-refrigerator-repair" element={<Navigate to="/refrigerator-repair" replace />} />
        <Route path="/appliance-repair-tips" element={<Navigate to="/blog" replace />} />
        <Route path="/appliance-replacement" element={<Navigate to="/about" replace />} />
        <Route path="/reviews" element={<Suspense fallback={<div style={{minHeight:'100vh'}} />}><ReviewsPage /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<div style={{minHeight:'100vh'}} />}><BlogListPage /></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense fallback={<div style={{minHeight:'100vh'}} />}><BlogPostPage /></Suspense>} />

        {/* Redirects for non-approved cities → service areas (both URL patterns) */}
        <Route path="/dublin-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-dublin" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-newark" element={<Navigate to="/service-areas" replace />} />
        <Route path="/newark-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-palo-alto" element={<Navigate to="/service-areas" replace />} />
        <Route path="/palo-alto-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-fremont" element={<Navigate to="/service-areas" replace />} />
        <Route path="/fremont-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-redwood-city" element={<Navigate to="/service-areas" replace />} />
        <Route path="/redwood-city-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-livermore" element={<Navigate to="/service-areas" replace />} />
        <Route path="/livermore-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-concord" element={<Navigate to="/service-areas" replace />} />
        <Route path="/concord-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-pleasanton" element={<Navigate to="/service-areas" replace />} />
        <Route path="/pleasanton-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/union-city-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-union-city" element={<Navigate to="/service-areas" replace />} />
        <Route path="/hayward-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-walnut-creek" element={<Navigate to="/service-areas" replace />} />
        <Route path="/walnut-creek-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-san-jose" element={<Navigate to="/service-areas" replace />} />
        <Route path="/san-jose-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-mountain-view" element={<Navigate to="/service-areas" replace />} />
        <Route path="/mountain-view-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/berkeley-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-berkeley" element={<Navigate to="/service-areas" replace />} />
        <Route path="/san-leandro-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-san-leandro" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-oakland" element={<Navigate to="/service-areas" replace />} />
        <Route path="/oakland-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/richmond-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-richmond" element={<Navigate to="/service-areas" replace />} />
        <Route path="/cupertino-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-cupertino" element={<Navigate to="/service-areas" replace />} />
        <Route path="/alameda-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-alameda" element={<Navigate to="/service-areas" replace />} />
        <Route path="/vallejo-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-vallejo" element={<Navigate to="/service-areas" replace />} />
        <Route path="/burlingame-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-burlingame" element={<Navigate to="/service-areas" replace />} />
        <Route path="/foster-city-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-foster-city" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-milpitas" element={<Navigate to="/service-areas" replace />} />
        <Route path="/milpitas-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/appliance-repair-san-mateo" element={<Navigate to="/service-areas" replace />} />
        <Route path="/san-mateo-appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/castro-valley-appliance-repair" element={<Navigate to="/service-areas" replace />} />

        {/* SF Neighborhood Pages */}
        <Route path="/san-francisco/:neighborhood" element={<NeighborhoodPage />} />

        {/* Home */}
        <Route path="/" element={<ProfessionalLandingPage />} />

        {/* Hubs / misc */}
        <Route path="/service-areas" element={<ServiceAreasHub />} />
        <Route path="/brands" element={<BrandsPage />} />
        {/* BlogPage removed — BlogListPage at /blog handles listing now */}
        
        {/* Blog posts */}
        <Route path="/blog/refrigerator-not-cooling" element={<RefrigeratorNotCooling />} />
        <Route path="/blog/dishwasher-maintenance" element={<DishwasherMaintenanceBlog />} />
        <Route path="/blog/when-to-repair-vs-replace" element={<RepairVsReplace />} />
        <Route path="/blog/dryer-taking-too-long" element={<DryerTakingTooLong />} />
        <Route path="/blog/washer-error-codes" element={<WasherErrorCodes />} />
        <Route path="/blog/oven-temperature-calibration" element={<OvenTemperatureCalibration />} />
        <Route path="/blog/ice-maker-troubleshooting" element={<IceMakerTroubleshooting />} />
        <Route path="/blog/appliance-lifespan" element={<ApplianceLifespan />} />
        <Route path="/blog/energy-efficient-appliances" element={<EnergyEfficientAppliances />} />
        <Route path="/blog/gas-smell-from-stove" element={<GasSmellFromStove />} />
        <Route path="/blog/refrigerator-water-filter" element={<RefrigeratorWaterFilter />} />
        <Route path="/blog/dishwasher-not-draining" element={<DishwasherNotDraining />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you-booking" element={<ThankYouBooking />} />
        <Route path="/site-map" element={<SiteMapPage />} />
        <Route path="/blog-faq" element={<Suspense fallback={<div style={{minHeight:'100vh'}} />}><BlogFAQPage /></Suspense>} />
        <Route path="/residential-appliance-repair" element={<ResidentialApplianceRepairPage />} />
        <Route path="/commercial-appliance-repair" element={<CommercialApplianceRepairPage />} />
        <Route path="/commercial-refrigerator-repair" element={<CommercialRefrigeratorRepairPage />} />
        <Route path="/commercial-dishwasher-repair" element={<CommercialDishwasherRepairPage />} />
        <Route path="/commercial-washer-repair" element={<CommercialWasherRepairPage />} />
        <Route path="/commercial-dryer-repair" element={<CommercialDryerRepairPage />} />
        <Route path="/commercial-oven-repair" element={<CommercialOvenRepairPage />} />
        <Route path="/local-appliance-repair" element={<LocalApplianceRepairPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/llm-info" element={<LLMInfoPage />} />
        <Route path="/book" element={<BookPage />} />

        {/* Maintenance hub and guides */}
        <Route path="/maintenance" element={<MaintenanceHub />} />
        <Route path="/maintenance/refrigerator" element={<RefrigeratorMaintenance />} />
        <Route path="/maintenance/washer" element={<WasherMaintenance />} />
        <Route path="/maintenance/dryer" element={<DryerMaintenance />} />
        <Route path="/maintenance/dishwasher" element={<DishwasherMaintenance />} />
        <Route path="/maintenance/oven-range" element={<OvenRangeMaintenance />} />
        <Route path="/maintenance/cooktop" element={<CooktopMaintenance />} />
        <Route path="/maintenance/wine-cooler" element={<WineCoolerMaintenance />} />

        {/* Brand-specific service pages */}
        <Route path="/marin-county-appliance-repair" element={<MarinCountyPage />} />
        
        {/* City+Service combination pages - explicit routes for SEO */}
        <Route path="/daly-city-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/daly-city-washer-repair" element={<CityServicePage />} />
        <Route path="/daly-city-dryer-repair" element={<CityServicePage />} />
        <Route path="/daly-city-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-washer-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-washer-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-dryer-repair" element={<CityServicePage />} />
        <Route path="/novato-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/novato-washer-repair" element={<CityServicePage />} />
        <Route path="/novato-dryer-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/pacifica-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/sausalito-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/tiburon-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-refrigerator-repair" element={<CityServicePage />} />
        
        <Route path="/whirlpool-appliance-repair" element={<WhirlpoolApplianceRepairPage />} />
        <Route path="/lg-appliance-repair" element={<LGApplianceRepairPage />} />
        <Route path="/samsung-appliance-repair" element={<SamsungApplianceRepairPage />} />
        <Route path="/ge-appliance-repair" element={<GEApplianceRepairPage />} />
        <Route path="/bosch-appliance-repair" element={<BoschApplianceRepairPage />} />
        <Route path="/kitchenaid-appliance-repair" element={<KitchenAidApplianceRepairPage />} />
        <Route path="/maytag-appliance-repair" element={<MaytagApplianceRepairPage />} />
        <Route path="/frigidaire-appliance-repair" element={<FrigidaireApplianceRepairPage />} />
        <Route path="/kenmore-appliance-repair" element={<KenmoreApplianceRepairPage />} />
        <Route path="/thermador-appliance-repair" element={<ThermadorApplianceRepairPage />} />
        <Route path="/viking-appliance-repair" element={<VikingApplianceRepairPage />} />
        <Route path="/miele-appliance-repair" element={<MieleApplianceRepairPage />} />
        <Route path="/sub-zero-appliance-repair" element={<SubZeroApplianceRepairPage />} />
        <Route path="/wolf-appliance-repair" element={<WolfApplianceRepairPage />} />

        {/* Services */}
        <Route path="/refrigerator-repair" element={<RefrigeratorRepairPage />} />
        <Route path="/freezer-repair" element={<FreezerRepairPage />} />
        <Route path="/ice-maker-repair" element={<IceMakerRepairPage />} />
        <Route path="/washer-repair" element={<WasherRepairPage />} />
        <Route path="/dryer-repair" element={<DryerRepairPage />} />
        <Route path="/dishwasher-repair" element={<DishwasherRepairPage />} />
        <Route path="/oven-repair" element={<OvenRepairPage />} />
        <Route path="/cooktop-repair" element={<CooktopRepairPage />} />
        <Route path="/wine-cooler-repair" element={<WineRefrigeratorRepairPage />} />
        <Route path="/garbage-disposal-repair" element={<DisposalRepairPage />} />
        <Route path="/disposal-repair" element={<Navigate to="/garbage-disposal-repair" replace />} />

        {/* Cities (prefix + suffix support) */}
        <Route path="/appliance-repair-:city" element={<CityRepairRoute />} />
        <Route path="/:city-appliance-repair" element={<CityRepairRoute />} />

        {/* Final fallback */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      </Suspense>
      </main>
    </BrowserRouter>
  );
}

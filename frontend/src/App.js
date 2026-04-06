import React, { lazy, Suspense, useDeferredValue, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

/* Strip trailing slashes client-side (backup for server-side _redirects rule) */
const TrailingSlashRedirect = () => {
  const { pathname, search } = useLocation();
  if (pathname !== '/' && pathname.endsWith('/')) {
    return <Navigate to={pathname.slice(0, -1) + search} replace />;
  }
  return null;
};

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
const WineRefrigeratorRepairStandalone = lazy(() => import("./components/pages/WineRefrigeratorRepairStandalone"));
const WallOvenRepairPage = lazy(() => import("./components/pages/WallOvenRepairPage"));
const StackedWasherDryerRepairPage = lazy(() => import("./components/pages/StackedWasherDryerRepairPage"));

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
const TermsPage = lazy(() => import("./components/pages/TermsPage"));
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
const DryerNotHeating = lazy(() => import("./components/pages/blog/DryerNotHeating"));
const ApplianceRepairCostSanFrancisco = lazy(() => import("./components/pages/blog/ApplianceRepairCostSanFrancisco"));
const NeighborhoodPage = lazy(() => import("./components/pages/NeighborhoodPage"));
const MarinCountyPage = lazy(() => import("./components/pages/MarinCountyPage"));
const CityServicePage = lazy(() => import("./components/pages/CityServicePage"));

function AppShell() {
  const location = useLocation();
  const deferredLocation = useDeferredValue(location);
  const isTransitioning = location.pathname !== deferredLocation.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [deferredLocation.pathname]);

  return (
    <>
      <TrailingSlashRedirect />
      <CanonicalUpdater />
      <SchemaMarkup />
      <UniversalBreadcrumb />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-sm"
        data-testid="skip-to-main"
      >
        Skip to main content
      </a>
      <SiteNavbar />
      <StickyCTA />
      <main id="main-content" className="pb-[72px] md:pb-0" style={{ opacity: isTransitioning ? 0.85 : 1, transition: 'opacity 120ms ease-out' }}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }>
          <Routes location={deferredLocation}>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/cms" element={<CMSDashboard />} />
        
        {/* Canonical redirect mapping (client-side fallback) */}
        <Route path="/appliance-repair" element={<Navigate to="/service-areas" replace />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/wine-refrigerator-repair" element={<WineRefrigeratorRepairStandalone />} />
        <Route path="/wine-appliance-repair" element={<Navigate to="/wine-cooler-repair" replace />} />
        <Route path="/stacked-washer-dryer-repair" element={<StackedWasherDryerRepairPage />} />
        <Route path="/wall-oven-repair" element={<WallOvenRepairPage />} />
        <Route path="/range-repair" element={<RangeRepairPage />} />
        <Route path="/stove-repair" element={<StoveRepairPage />} />
        <Route path="/built-in-refrigerator-repair" element={<Navigate to="/refrigerator-repair" replace />} />
        <Route path="/appliance-repair-tips" element={<Navigate to="/blog" replace />} />
        <Route path="/appliance-replacement" element={<Navigate to="/about" replace />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

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
        <Route path="/blog/dryer-not-heating" element={<DryerNotHeating />} />
        <Route path="/blog/appliance-repair-cost-san-francisco" element={<ApplianceRepairCostSanFrancisco />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you-booking" element={<ThankYouBooking />} />
        <Route path="/site-map" element={<SiteMapPage />} />
        <Route path="/blog-faq" element={<BlogFAQPage />} />
        <Route path="/residential-appliance-repair" element={<ResidentialApplianceRepairPage />} />
        <Route path="/commercial-appliance-repair" element={<CommercialApplianceRepairPage />} />
        <Route path="/commercial-refrigerator-repair" element={<CommercialRefrigeratorRepairPage />} />
        <Route path="/commercial-dishwasher-repair" element={<CommercialDishwasherRepairPage />} />
        <Route path="/commercial-washer-repair" element={<CommercialWasherRepairPage />} />
        <Route path="/commercial-dryer-repair" element={<CommercialDryerRepairPage />} />
        <Route path="/commercial-oven-repair" element={<CommercialOvenRepairPage />} />
        <Route path="/local-appliance-repair" element={<LocalApplianceRepairPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
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
        
        {/* City+Service combination pages — 17 cities × 7 services = 119 routes */}
        {/* San Francisco */}
        <Route path="/san-francisco-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-washer-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-oven-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/san-francisco-ice-maker-repair" element={<CityServicePage />} />
        {/* Daly City */}
        <Route path="/daly-city-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/daly-city-washer-repair" element={<CityServicePage />} />
        <Route path="/daly-city-dryer-repair" element={<CityServicePage />} />
        <Route path="/daly-city-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/daly-city-oven-repair" element={<CityServicePage />} />
        <Route path="/daly-city-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/daly-city-ice-maker-repair" element={<CityServicePage />} />
        {/* South San Francisco */}
        <Route path="/south-san-francisco-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-washer-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-dryer-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-oven-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/south-san-francisco-ice-maker-repair" element={<CityServicePage />} />
        {/* San Bruno */}
        <Route path="/san-bruno-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-washer-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-oven-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/san-bruno-ice-maker-repair" element={<CityServicePage />} />
        {/* Pacifica */}
        <Route path="/pacifica-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/pacifica-washer-repair" element={<CityServicePage />} />
        <Route path="/pacifica-dryer-repair" element={<CityServicePage />} />
        <Route path="/pacifica-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/pacifica-oven-repair" element={<CityServicePage />} />
        <Route path="/pacifica-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/pacifica-ice-maker-repair" element={<CityServicePage />} />
        {/* Millbrae */}
        <Route path="/millbrae-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/millbrae-washer-repair" element={<CityServicePage />} />
        <Route path="/millbrae-dryer-repair" element={<CityServicePage />} />
        <Route path="/millbrae-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/millbrae-oven-repair" element={<CityServicePage />} />
        <Route path="/millbrae-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/millbrae-ice-maker-repair" element={<CityServicePage />} />
        {/* Mill Valley */}
        <Route path="/mill-valley-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-washer-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-dryer-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-oven-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/mill-valley-ice-maker-repair" element={<CityServicePage />} />
        {/* San Rafael */}
        <Route path="/san-rafael-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-washer-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-oven-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/san-rafael-ice-maker-repair" element={<CityServicePage />} />
        {/* Sausalito */}
        <Route path="/sausalito-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/sausalito-washer-repair" element={<CityServicePage />} />
        <Route path="/sausalito-dryer-repair" element={<CityServicePage />} />
        <Route path="/sausalito-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/sausalito-oven-repair" element={<CityServicePage />} />
        <Route path="/sausalito-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/sausalito-ice-maker-repair" element={<CityServicePage />} />
        {/* Novato */}
        <Route path="/novato-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/novato-washer-repair" element={<CityServicePage />} />
        <Route path="/novato-dryer-repair" element={<CityServicePage />} />
        <Route path="/novato-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/novato-oven-repair" element={<CityServicePage />} />
        <Route path="/novato-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/novato-ice-maker-repair" element={<CityServicePage />} />
        {/* Corte Madera */}
        <Route path="/corte-madera-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-washer-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-dryer-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-oven-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/corte-madera-ice-maker-repair" element={<CityServicePage />} />
        {/* Tiburon */}
        <Route path="/tiburon-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/tiburon-washer-repair" element={<CityServicePage />} />
        <Route path="/tiburon-dryer-repair" element={<CityServicePage />} />
        <Route path="/tiburon-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/tiburon-oven-repair" element={<CityServicePage />} />
        <Route path="/tiburon-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/tiburon-ice-maker-repair" element={<CityServicePage />} />
        {/* Belvedere */}
        <Route path="/belvedere-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/belvedere-washer-repair" element={<CityServicePage />} />
        <Route path="/belvedere-dryer-repair" element={<CityServicePage />} />
        <Route path="/belvedere-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/belvedere-oven-repair" element={<CityServicePage />} />
        <Route path="/belvedere-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/belvedere-ice-maker-repair" element={<CityServicePage />} />
        {/* Larkspur */}
        <Route path="/larkspur-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/larkspur-washer-repair" element={<CityServicePage />} />
        <Route path="/larkspur-dryer-repair" element={<CityServicePage />} />
        <Route path="/larkspur-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/larkspur-oven-repair" element={<CityServicePage />} />
        <Route path="/larkspur-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/larkspur-ice-maker-repair" element={<CityServicePage />} />
        {/* Greenbrae */}
        <Route path="/greenbrae-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-washer-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-dryer-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-oven-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/greenbrae-ice-maker-repair" element={<CityServicePage />} />
        {/* Ross */}
        <Route path="/ross-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/ross-washer-repair" element={<CityServicePage />} />
        <Route path="/ross-dryer-repair" element={<CityServicePage />} />
        <Route path="/ross-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/ross-oven-repair" element={<CityServicePage />} />
        <Route path="/ross-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/ross-ice-maker-repair" element={<CityServicePage />} />
        {/* Fairfax */}
        <Route path="/fairfax-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/fairfax-washer-repair" element={<CityServicePage />} />
        <Route path="/fairfax-dryer-repair" element={<CityServicePage />} />
        <Route path="/fairfax-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/fairfax-oven-repair" element={<CityServicePage />} />
        <Route path="/fairfax-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/fairfax-ice-maker-repair" element={<CityServicePage />} />
        {/* San Anselmo */}
        <Route path="/san-anselmo-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-washer-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-oven-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/san-anselmo-ice-maker-repair" element={<CityServicePage />} />
        {/* Colma */}
        <Route path="/colma-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/colma-washer-repair" element={<CityServicePage />} />
        <Route path="/colma-dryer-repair" element={<CityServicePage />} />
        <Route path="/colma-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/colma-oven-repair" element={<CityServicePage />} />
        <Route path="/colma-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/colma-ice-maker-repair" element={<CityServicePage />} />
        {/* Brisbane */}
        <Route path="/brisbane-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/brisbane-washer-repair" element={<CityServicePage />} />
        <Route path="/brisbane-dryer-repair" element={<CityServicePage />} />
        <Route path="/brisbane-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/brisbane-oven-repair" element={<CityServicePage />} />
        <Route path="/brisbane-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/brisbane-ice-maker-repair" element={<CityServicePage />} />
        {/* Montara */}
        <Route path="/montara-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/montara-washer-repair" element={<CityServicePage />} />
        <Route path="/montara-dryer-repair" element={<CityServicePage />} />
        <Route path="/montara-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/montara-oven-repair" element={<CityServicePage />} />
        <Route path="/montara-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/montara-ice-maker-repair" element={<CityServicePage />} />
        {/* San Quentin */}
        <Route path="/san-quentin-refrigerator-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-washer-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-dryer-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-dishwasher-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-oven-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-wine-cooler-repair" element={<CityServicePage />} />
        <Route path="/san-quentin-ice-maker-repair" element={<CityServicePage />} />
        
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

        {/* Cities (prefix + suffix support) */}
        <Route path="/appliance-repair-:city" element={<CityRepairRoute />} />
        <Route path="/:city-appliance-repair" element={<CityRepairRoute />} />

        {/* Final fallback */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      </Suspense>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

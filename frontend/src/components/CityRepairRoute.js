import React, { lazy, Suspense } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import CityRepairPage from './templates/CityRepairPage';
import NotFound404 from './pages/NotFound404';

import { SERVICE_CITIES } from '../data/cities';

// Import ALL 21 custom city pages
import SanFrancisco from './pages/cities/SanFrancisco';
import DalyCity from './pages/cities/DalyCity';
import Colma from './pages/cities/Colma';
import Pacifica from './pages/cities/Pacifica';
import MillValley from './pages/cities/MillValley';
import SanBruno from './pages/cities/SanBruno';
import Millbrae from './pages/cities/Millbrae';
import SouthSanFrancisco from './pages/cities/SouthSanFrancisco';
import Brisbane from './pages/cities/Brisbane';
import Montara from './pages/cities/Montara';
import SanRafael from './pages/cities/SanRafael';
import Sausalito from './pages/cities/Sausalito';
import Novato from './pages/cities/Novato';
import BelvedereTiburon from './pages/cities/BelvedereTiburon';
import CorteMadera from './pages/cities/CorteMadera';
import Ross from './pages/cities/Ross';
import SanQuentin from './pages/cities/SanQuentin';
import Fairfax from './pages/cities/Fairfax';
import Larkspur from './pages/cities/Larkspur';
import SanAnselmo from './pages/cities/SanAnselmo';
import Greenbrae from './pages/cities/Greenbrae';

// Mapping of all 21 city slugs to custom components
const CUSTOM_CITY_PAGES = {
  'san-francisco': SanFrancisco,
  'daly-city': DalyCity,
  'colma': Colma,
  'pacifica': Pacifica,
  'mill-valley': MillValley,
  'san-bruno': SanBruno,
  'millbrae': Millbrae,
  'south-san-francisco': SouthSanFrancisco,
  'brisbane': Brisbane,
  'montara': Montara,
  'san-rafael': SanRafael,
  'sausalito': Sausalito,
  'novato': Novato,
  'belvedere': BelvedereTiburon,
  'tiburon': BelvedereTiburon,
  'belvedere-tiburon': BelvedereTiburon,
  'corte-madera': CorteMadera,
  'ross': Ross,
  'san-quentin': SanQuentin,
  'fairfax': Fairfax,
  'larkspur': Larkspur,
  'san-anselmo': SanAnselmo,
  'greenbrae': Greenbrae
};

// List of valid Bay Area cities (derived from shared SERVICE_CITIES)
const VALID_CITIES = SERVICE_CITIES.map(c => c.slug.toLowerCase());

const slugToCity = (slug) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const CityRepairRoute = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/^\//, '').toLowerCase();

  let citySlug = null;
  let usedOldPrefix = false;
  
  // New canonical pattern: /{city}-appliance-repair
  if (path.endsWith('-appliance-repair')) {
    citySlug = path.replace('-appliance-repair', '');
  } else if (path.startsWith('appliance-repair-')) {
    // Old pattern — needs redirect to canonical
    citySlug = path.replace('appliance-repair-', '');
    usedOldPrefix = true;
  }

  if (!citySlug) return <NotFound404 />;
  
  // If old prefix pattern used, redirect to canonical suffix pattern
  if (usedOldPrefix && VALID_CITIES.includes(citySlug)) {
    return <Navigate to={`/${citySlug}-appliance-repair`} replace />;
  }
  
  // Non-approved city → redirect to service areas
  if (!VALID_CITIES.includes(citySlug)) {
    return <Navigate to="/service-areas" replace />;
  }

  // Check if we have a custom page for this city
  const CustomCityPage = CUSTOM_CITY_PAGES[citySlug];
  if (CustomCityPage) {
    return <CustomCityPage />;
  }

  // Fallback to generic city page
  const cityName = slugToCity(citySlug);

  const pageTitle = `Appliance Repair ${cityName} | FixItBay Appliance Repair & Maintenance`;
  const metaDescription = `Same/next-day appliance repair in ${cityName}. $60 diagnostic credited to repair. 180-day warranty. Book online or call (760) 543-5733.`;

  const neighborhoods = [cityName + ' Downtown', 'Central', 'East', 'West'];
  const localFeatures = `We proudly serve ${cityName} neighborhoods with licensed, insured technicians.`;
  const faqData = [
    { question: `Do you offer fast scheduling in ${cityName}?`, answer: `Yes, we provide same/next-day appointments in ${cityName}.` },
    { question: `What is your diagnostic fee in ${cityName}?`, answer: `Our diagnostic is $60 and it is applied toward the repair if you proceed.` }
  ];

  return (
    <CityRepairPage
      city={cityName}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      neighborhoods={neighborhoods}
      localFeatures={localFeatures}
      faqData={faqData}
    />
  );
};

export default CityRepairRoute;

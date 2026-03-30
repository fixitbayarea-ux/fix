import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { Phone, MapPin, Wrench, Check, X, CalendarCheck, Search, ClipboardCheck, Home, HelpCircle, DollarSign, Clock, ArrowRight } from 'lucide-react';
import useCMSContent from '../../hooks/useCMSContent';
import { useSchemas } from '../../hooks/useSchema';
import brandLocalData from '../../data/brandLocalData';
import cityLocalData from '../../data/cityLocalData';
import { SERVICE_CITIES as ALL_SERVICE_CITIES } from '../../data/cities';
import BrandsGrid from '../sections/BrandsGrid';
import CTABanner from '../sections/CTABanner';
import CompactFooter from '../sections/CompactFooter';
import PricingCards from '../sections/PricingCards';
import HousingTypes from '../sections/HousingTypes';
import CaseStudies from '../sections/CaseStudies';
import Testimonials from '../sections/Testimonials';
import ProcessSteps from '../sections/ProcessSteps';
import FAQAccordion from '../sections/FAQAccordion';

import { SERVICE_PRICING } from '../../data/servicePricing';
const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url
  }))
});

const buildFAQSchema = (faqData) => {
  const valid = faqData.filter(faq => faq.question?.trim() && faq.answer?.trim());
  if (valid.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": valid.map(faq => ({
      "@type": "Question",
      "name": faq.question.trim(),
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer.trim() }
    }))
  };
};

// Standard Service schema for all service pages
const buildServiceSchema = (serviceName) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${serviceName} Repair San Francisco Bay Area`,
  "serviceType": `${serviceName} Repair`,
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "telephone": "+17605435733",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1549 Franklin St, Unit A",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109"
    },
    "priceRange": "$$"
  },
  "areaServed": [
    "San Francisco", "Daly City", "South San Francisco", "San Bruno",
    "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
    "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
    "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
    "Fairfax", "San Anselmo", "Novato"
  ]
});

const POPULAR_REPAIRS_MAP = {
  'san-francisco': ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven'],
  'daly-city': ['refrigerator', 'washer', 'dryer'],
  'south-san-francisco': ['refrigerator', 'washer', 'dryer'],
  'san-rafael': ['refrigerator', 'washer', 'dryer', 'dishwasher'],
  'mill-valley': ['refrigerator', 'dryer'],
  'novato': ['refrigerator', 'washer'],
  'san-bruno': ['refrigerator', 'washer'],
  'pacifica': ['refrigerator', 'dryer'],
  'millbrae': ['refrigerator', 'washer'],
  'sausalito': ['refrigerator'],
  'tiburon': ['refrigerator'],
  'corte-madera': ['refrigerator', 'dryer'],
};
const SERVICE_DISPLAY_NAMES = {
  refrigerator: 'Refrigerator Repair',
  washer: 'Washer Repair',
  dryer: 'Dryer Repair',
  dishwasher: 'Dishwasher Repair',
  oven: 'Oven Repair',
};

const SERVICE_CITIES = [
  { slug: 'san-francisco', name: 'San Francisco' }, { slug: 'daly-city', name: 'Daly City' },
  { slug: 'south-san-francisco', name: 'South San Francisco' }, { slug: 'san-bruno', name: 'San Bruno' },
  { slug: 'pacifica', name: 'Pacifica' }, { slug: 'millbrae', name: 'Millbrae' },
  { slug: 'mill-valley', name: 'Mill Valley' }, { slug: 'san-rafael', name: 'San Rafael' },
  { slug: 'sausalito', name: 'Sausalito' }, { slug: 'novato', name: 'Novato' },
  { slug: 'tiburon', name: 'Tiburon' }, { slug: 'corte-madera', name: 'Corte Madera' },
];
const CITY_GROUPS = {
  'San Francisco': ['San Francisco', 'Daly City', 'South San Francisco', 'Colma', 'Brisbane'],
  'Peninsula': ['San Bruno', 'Millbrae', 'Pacifica', 'Montara'],
  'North Bay / Marin': ['Sausalito', 'Mill Valley', 'Tiburon', 'Belvedere Tiburon', 'Corte Madera', 'San Rafael', 'Larkspur', 'Greenbrae', 'Novato', 'San Quentin', 'Ross', 'Fairfax', 'San Anselmo'],
};

// Geographic proximity map - 5 nearest cities for internal linking clusters
const CITY_NEIGHBORS = {
  'san-francisco': ['daly-city', 'south-san-francisco', 'sausalito', 'mill-valley', 'tiburon'],
  'daly-city': ['san-francisco', 'south-san-francisco', 'colma', 'pacifica', 'san-bruno'],
  'south-san-francisco': ['daly-city', 'san-francisco', 'san-bruno', 'brisbane', 'millbrae'],
  'san-bruno': ['south-san-francisco', 'millbrae', 'san-francisco', 'brisbane', 'colma'],
  'pacifica': ['daly-city', 'san-francisco', 'san-bruno', 'montara', 'millbrae'],
  'millbrae': ['san-bruno', 'south-san-francisco', 'colma', 'brisbane', 'pacifica'],
  'colma': ['daly-city', 'san-francisco', 'south-san-francisco', 'millbrae', 'brisbane'],
  'brisbane': ['san-francisco', 'south-san-francisco', 'colma', 'daly-city', 'san-bruno'],
  'montara': ['pacifica', 'san-bruno', 'millbrae', 'san-francisco', 'daly-city'],
  'mill-valley': ['san-francisco', 'sausalito', 'tiburon', 'corte-madera', 'san-rafael'],
  'san-rafael': ['novato', 'corte-madera', 'san-anselmo', 'fairfax', 'greenbrae'],
  'sausalito': ['san-francisco', 'mill-valley', 'tiburon', 'corte-madera', 'belvedere'],
  'novato': ['san-rafael', 'san-anselmo', 'fairfax', 'corte-madera', 'greenbrae'],
  'corte-madera': ['mill-valley', 'san-rafael', 'larkspur', 'tiburon', 'sausalito'],
  'larkspur': ['corte-madera', 'san-rafael', 'greenbrae', 'ross', 'san-anselmo'],
  'greenbrae': ['larkspur', 'san-rafael', 'corte-madera', 'ross', 'san-anselmo'],
  'ross': ['san-anselmo', 'fairfax', 'greenbrae', 'larkspur', 'san-rafael'],
  'fairfax': ['san-anselmo', 'ross', 'san-rafael', 'novato', 'greenbrae'],
  'san-anselmo': ['fairfax', 'ross', 'san-rafael', 'larkspur', 'greenbrae'],
  'tiburon': ['belvedere', 'sausalito', 'mill-valley', 'corte-madera', 'san-rafael'],
  'belvedere': ['tiburon', 'sausalito', 'mill-valley', 'corte-madera', 'san-rafael'],
  'san-quentin': ['san-rafael', 'larkspur', 'corte-madera', 'greenbrae', 'novato'],
};

// Helper to convert slug to display name
const slugToName = (slug) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Generate nearby links from CITY_NEIGHBORS
const nearbyLookup = Object.fromEntries(
  Object.entries(CITY_NEIGHBORS).map(([citySlug, neighbors]) => [
    slugToName(citySlug),
    neighbors.map(n => ({ href: `/${n}-appliance-repair`, label: slugToName(n) }))
  ])
);

// City+service cross-linking data
const ALL_CITY_SERVICES = ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'cooktop', 'wine-cooler', 'ice-maker'];
const CITY_SERVICE_LINKS = {
  'san-francisco': ALL_CITY_SERVICES,
  'daly-city': ALL_CITY_SERVICES,
  'south-san-francisco': ALL_CITY_SERVICES,
  'san-bruno': ALL_CITY_SERVICES,
  'millbrae': ALL_CITY_SERVICES,
  'pacifica': ALL_CITY_SERVICES,
  'colma': ALL_CITY_SERVICES,
  'brisbane': ALL_CITY_SERVICES,
  'montara': ALL_CITY_SERVICES,
  'sausalito': ALL_CITY_SERVICES,
  'mill-valley': ALL_CITY_SERVICES,
  'san-rafael': ALL_CITY_SERVICES,
  'novato': ALL_CITY_SERVICES,
  'tiburon': ALL_CITY_SERVICES,
  'corte-madera': ALL_CITY_SERVICES,
  'larkspur': ALL_CITY_SERVICES,
  'greenbrae': ALL_CITY_SERVICES,
  'fairfax': ALL_CITY_SERVICES,
  'san-anselmo': ALL_CITY_SERVICES,
  'ross': ALL_CITY_SERVICES,
  'belvedere': ALL_CITY_SERVICES,
};

const SERVICE_LABELS = {
  refrigerator: 'Refrigerator', washer: 'Washer', dryer: 'Dryer',
  dishwasher: 'Dishwasher', oven: 'Oven & Range',
};

// Reverse map: service → [city slugs]
const SERVICE_CITY_LINKS = {};
Object.entries(CITY_SERVICE_LINKS).forEach(([city, services]) => {
  services.forEach(svc => {
    if (!SERVICE_CITY_LINKS[svc]) SERVICE_CITY_LINKS[svc] = [];
    SERVICE_CITY_LINKS[svc].push(city);
  });
});

const CITY_DISPLAY_NAMES = {
  'san-francisco': 'San Francisco', 'daly-city': 'Daly City',
  'south-san-francisco': 'South San Francisco', 'san-bruno': 'San Bruno',
  'millbrae': 'Millbrae', 'pacifica': 'Pacifica',
  'colma': 'Colma', 'brisbane': 'Brisbane', 'montara': 'Montara',
  'sausalito': 'Sausalito', 'mill-valley': 'Mill Valley',
  'san-rafael': 'San Rafael', 'novato': 'Novato',
  'tiburon': 'Tiburon', 'corte-madera': 'Corte Madera',
  'larkspur': 'Larkspur', 'greenbrae': 'Greenbrae',
  'fairfax': 'Fairfax', 'san-anselmo': 'San Anselmo',
  'ross': 'Ross', 'belvedere': 'Belvedere',
};

const CITY_REGIONS = [
  { label: 'San Francisco', slugs: ['san-francisco'] },
  { label: 'Peninsula', slugs: ['daly-city', 'south-san-francisco', 'san-bruno', 'millbrae', 'pacifica', 'colma', 'brisbane', 'montara'] },
  { label: 'Marin County', slugs: ['sausalito', 'mill-valley', 'san-rafael', 'novato', 'tiburon', 'corte-madera', 'larkspur', 'greenbrae', 'fairfax', 'san-anselmo', 'ross', 'belvedere'] },
];

/* ═══ Shared Inline Styles ═══ */
const S = {
  font: 'Montserrat, sans-serif',
  eyebrow: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em' },
  h2: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 36, lineHeight: 1.15 },
  body: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: 1.7, color: '#4A5568' },
};

/* ═══ City Hero Background Images ═══ */
const CITY_HERO_BG = {
  'daly-city': '/images/cities/daly-city-bg.webp',
  'south-san-francisco': '/images/cities/ssf-bg.webp',
  'san-bruno': '/images/cities/san-bruno-bg.webp',
  'pacifica': '/images/cities/pacifica-bg.webp',
  'millbrae': '/images/cities/millbrae-bg.webp',
  'colma': '/images/cities/colma-bg.webp',
  'brisbane': '/images/cities/brisbane-bg.webp',
  'montara': '/images/cities/montara-bg.webp',
  'mill-valley': '/images/cities/mill-valley-bg.webp',
  'san-rafael': '/images/cities/san-rafael-bg.webp',
  'sausalito': '/images/cities/sausalito-bg.webp',
  'novato': '/images/cities/novato-bg.webp',
  'belvedere-tiburon': '/images/cities/belvedere-bg.webp',
  'corte-madera': '/images/cities/corte-madera-bg.webp',
  'ross': '/images/cities/ross-bg.webp',
  'san-quentin': '/images/cities/san-quentin-bg.webp',
  'fairfax': '/images/cities/fairfax-bg.webp',
  'larkspur': '/images/cities/larkspur-bg.webp',
  'san-anselmo': '/images/cities/san-anselmo-bg.webp',
  'greenbrae': '/images/cities/greenbrae-bg.webp',
};

/* ═══ City-Specific Static Data ═══ */
const CITY_APPLIANCE_SERVICES = [
  { name: 'Refrigerator repair', href: '/refrigerator-repair', svc: 'refrigerator', desc: 'Not cooling, leaking, noisy compressor, ice buildup' },
  { name: 'Washer repair', href: '/washer-repair', svc: 'washer', desc: 'Won\'t drain, excessive vibration, error codes, leaks' },
  { name: 'Dryer repair', href: '/dryer-repair', svc: 'dryer', desc: 'Not heating, long dry times, lint buildup, drum noise' },
  { name: 'Dishwasher repair', href: '/dishwasher-repair', svc: 'dishwasher', desc: 'Not cleaning, leaking, won\'t start, drainage issues' },
  { name: 'Oven & range repair', href: '/oven-repair', svc: 'oven', desc: 'Uneven heating, igniter failure, door seal problems' },
  { name: 'Cooktop repair', href: '/cooktop-repair', svc: 'cooktop', desc: 'Burner not lighting, element failure, cracked glass' },
  { name: 'Wine cooler repair', href: '/wine-cooler-repair', svc: 'wine-cooler', desc: 'Temperature swings, compressor noise, door seal' },
  { name: 'Ice maker repair', href: '/ice-maker-repair', svc: 'ice-maker', desc: 'No ice production, water line clogs, slow output' },
];

const CITIES_WITH_SERVICE_PAGES = ['daly-city','south-san-francisco','san-francisco','san-bruno','millbrae','pacifica','colma','brisbane','sausalito','mill-valley','san-rafael','novato','tiburon','corte-madera','san-anselmo','fairfax','larkspur','greenbrae','ross','belvedere','montara'];

const getCityServiceHref = (citySlug, item) => {
  if (citySlug && CITIES_WITH_SERVICE_PAGES.includes(citySlug)) {
    return `/${citySlug}-${item.svc}-repair`;
  }
  return item.href;
};

const TABBED_SERVICES = {
  Kitchen: [
    { name: 'Refrigerator', svc: 'refrigerator', desc: 'Not cooling, leaking, noisy compressor, ice buildup', href: '/refrigerator-repair' },
    { name: 'Freezer', svc: 'freezer', desc: 'Not freezing, frost buildup, temperature problems', href: '/freezer-repair' },
    { name: 'Ice Maker', svc: 'ice-maker', desc: 'No ice production, water line clogs, slow output', href: '/ice-maker-repair' },
    { name: 'Dishwasher', svc: 'dishwasher', desc: 'Not cleaning, leaking, drainage issues', href: '/dishwasher-repair' },
    { name: 'Oven & Range', svc: 'oven', desc: 'Uneven heating, igniter failure, door seal', href: '/oven-repair' },
    { name: 'Cooktop', svc: 'cooktop', desc: 'Burner not lighting, element failure, cracked glass', href: '/cooktop-repair' },
    { name: 'Wine Cooler', svc: 'wine-cooler', desc: 'Temperature swings, compressor noise, door seal', href: '/wine-cooler-repair' },
  ],
  Laundry: [
    { name: 'Washer', svc: 'washer', desc: 'Won\'t drain, vibration, error codes, leaks', href: '/washer-repair' },
    { name: 'Dryer', svc: 'dryer', desc: 'Not heating, long dry times, lint buildup, drum noise', href: '/dryer-repair' },
  ],
  Commercial: [
    { name: 'Commercial Appliance Repair', svc: 'commercial-appliance', desc: 'Restaurants, cafes, hotels, property managers', href: '/commercial-appliance-repair' },
  ],
};

const CityServicesTabbed = ({ citySlug }) => {
  const [activeTab, setActiveTab] = useState('Kitchen');
  const tabs = Object.keys(TABBED_SERVICES);
  const items = TABBED_SERVICES[activeTab] || [];
  return (
    <section data-testid="city-services" style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={S.eyebrow}>WHAT WE FIX</div>
        <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 24 }}>Every Major Appliance</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {tabs.map(tab => (
            <button key={tab} data-testid={`tab-${tab.toLowerCase()}`} onClick={() => setActiveTab(tab)} style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 3, border: '1.5px solid', borderColor: activeTab === tab ? '#FF5722' : 'rgba(0,0,0,0.12)', background: activeTab === tab ? '#FF5722' : '#FFFFFF', color: activeTab === tab ? '#FFFFFF' : '#0D1B2A', cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tab}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: 14 }}>
          {items.map(item => {
            const svcHref = getCityServiceHref(citySlug, item);
            return (
              <a key={item.svc} href={svcHref} data-testid={`city-svc-${item.svc}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: 20, textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,87,34,0.10)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div>
                  <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}><span style={{ color: '#FF5722', marginRight: 8 }}>&bull;</span>{item.name} Repair</div>
                  <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.6, marginBottom: 14 }}>{item.desc}</p>
                </div>
                <span className="city-svc-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 44, background: 'transparent', color: '#FF5722', border: '1.5px solid #FF5722', fontFamily: S.font, fontWeight: 700, fontSize: 14, padding: '10px 16px', borderRadius: 3, textAlign: 'center', transition: 'background 0.2s, color 0.2s' }}>View Service</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ApplianceRepairPageNew = ({
  appliance, pageTitle, metaDescription, commonProblems = [], faqData = [],
  serviceDescription = null, breadcrumbCategoryName = 'Services', breadcrumbCategoryHref = '/#services',
  relatedServicesCategory = null, relatedServicesSubtitle = null,
  hideHero = false, noPaddingTop = false, cmsSlug = null, cityName = null,
  serviceSchema = null, noindex, heroImage = null, heroImageAlt = '', heroImagePosition = 'center 15%',
  relatedLinks = null, hideHowItWorks = false, customH1 = null, heroDescription = null, maintenancePricing = null, maintenanceSchedule = null, pricingCityName = null, servingCity = null, comparisonTable = null, symptomsChecklist = null, diagnosisSteps = null, pricingTable = null, children
}) => {
  const isMaintenance = breadcrumbCategoryHref === '/maintenance';
  const serviceWord = isMaintenance ? 'Maintenance' : 'Repair';
  const isCity = !!cityName;
  const isBrand = breadcrumbCategoryHref === '/brands';
  const isCommercial = appliance?.toLowerCase().includes('commercial');
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/';

  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyBtn(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const autoRelatedLinks = (() => {
    if (relatedLinks) return relatedLinks;
    if (isCity) {
      const nearby = nearbyLookup[cityName] || [];
      return [{ href: '/service-areas', label: 'All Service Areas' }, { href: '/brands', label: 'Brands We Repair' }, { href: '/services', label: 'All Services' }, ...nearby.map(n => ({ ...n, label: `${n.label} Appliance Repair` }))];
    }
    if (isBrand) return [{ href: '/refrigerator-repair', label: 'Refrigerator Repair' }, { href: '/washer-repair', label: 'Washer Repair' }, { href: '/dishwasher-repair', label: 'Dishwasher Repair' }, { href: '/oven-repair', label: 'Oven Repair' }, { href: '/brands', label: 'All Brands' }, { href: '/services', label: 'All Services' }];
    if (isCommercial) return [{ href: '/commercial-appliance-repair', label: 'Commercial Appliance Repair' }, { href: '/commercial-refrigerator-repair', label: 'Commercial Refrigerator Repair' }, { href: '/services', label: 'All Services' }];
    if (isMaintenance) {
      const al = appliance.toLowerCase();
      const mr = al.includes('refrigerator') ? '/refrigerator-repair' : al.includes('washer') ? '/washer-repair' : al.includes('dryer') ? '/dryer-repair' : al.includes('dishwasher') ? '/dishwasher-repair' : al.includes('oven') || al.includes('range') ? '/oven-repair' : null;
      const links = [{ href: '/services', label: 'All Services' }, { href: '/maintenance', label: 'All Maintenance' }];
      if (mr) links.unshift({ href: mr, label: mr.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) });
      return links;
    }
    return null;
  })();

  const { cmsData } = useCMSContent(cmsSlug);
  const effectiveTitle = cmsData?.meta_title || pageTitle || `${appliance} ${serviceWord}`;
  const effectiveDescription = cmsData?.meta_description || metaDescription;
  const effectiveServiceDescription = cmsData?.intro_paragraphs?.length > 0
    ? { title: `About ${appliance} ${serviceWord}`, paragraphs: cmsData.intro_paragraphs }
    : serviceDescription;

  useEffect(() => {
    if (!hideHero) document.body.classList.add('service-page');
    return () => document.body.classList.remove('service-page');
  }, [hideHero]);

  const breadcrumbLabel = breadcrumbCategoryName || 'Services';
  const breadcrumbHref = breadcrumbCategoryHref || '/#services';
  const isTopLevel = breadcrumbHref === '/';
  const isSelfReferencing = typeof window !== 'undefined' && breadcrumbHref === window.location.pathname;

  const pageSchemas = useMemo(() => {
    const crumbs = [{ name: 'Home', url: 'https://fixitbay.net/' }];
    if (!isTopLevel) {
      crumbs.push({ name: breadcrumbLabel, url: breadcrumbHref.startsWith('/') ? `https://fixitbay.net${breadcrumbHref}` : 'https://fixitbay.net/#services' });
    }
    if (!isSelfReferencing) {
      crumbs.push({ name: cityName || `${appliance} ${serviceWord}`, url: `https://fixitbay.net${currentPath}` });
    }
    const schemas = [{
      id: `breadcrumb-schema-${appliance}`,
      data: buildBreadcrumbSchema(crumbs)
    }];
    if (faqData?.length > 0) { const fs = buildFAQSchema(faqData); if (fs) schemas.push({ id: `faq-schema-${appliance}`, data: fs }); }
    
    // Add Service schema - use provided schema or generate default
    const effectiveServiceSchema = serviceSchema || buildServiceSchema(appliance);
    schemas.push({ id: `service-schema-${appliance}`, data: effectiveServiceSchema });

    // Add HowTo schema for all service pages
    schemas.push({
      id: `howto-schema-${appliance}`,
      data: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Get Your ${appliance} Repaired in San Francisco`,
        "description": `Book fast ${appliance.toLowerCase()} ${serviceWord.toLowerCase()} with FixitBay LLC. $60 diagnostic applied to ${serviceWord.toLowerCase()} cost. 180-day warranty.`,
        "totalTime": "P1D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "60"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Book Online",
            "text": "Schedule your repair at fixitbay.net/book — takes 60 seconds, no phone call needed.",
            "url": "https://fixitbay.net/book"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Technician Arrives",
            "text": "A licensed California technician arrives fast or next-day with professional tools."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Diagnosis and Estimate",
            "text": "$60 diagnostic visit with upfront estimate before any work begins. No surprises."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Repair Complete",
            "text": "Your appliance is fixed with a comprehensive 180-day warranty on all parts and labor."
          }
        ]
      }
    });
    
    if (cityName) {
      const cSlug = cityName.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
      schemas.push({
        id: `city-service-${cSlug}`,
        data: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Appliance Repair in ${cityName}`,
          provider: {
            '@type': 'LocalBusiness',
            name: 'FixitBay LLC',
            telephone: '+17605435733',
          },
          areaServed: {
            '@type': 'City',
            name: cityName,
          },
          description: `Fast appliance repair in ${cityName}. $60 diagnostic fee applied to repair. 180-day warranty on parts and labor.`,
          offers: {
            '@type': 'Offer',
            price: '60',
            priceCurrency: 'USD',
            description: 'Diagnostic fee, credited toward repair',
          },
        },
      });
    }
    // Deduplicate: keep only the first BreadcrumbList and Service
    const seenTypes = new Set();
    const deduped = schemas.filter(s => {
      const t = s.data?.['@type'];
      if (t === 'BreadcrumbList' || t === 'Service') {
        if (seenTypes.has(t)) return false;
        seenTypes.add(t);
      }
      return true;
    });
    return deduped;
  }, [appliance, breadcrumbLabel, breadcrumbHref, isTopLevel, cityName, pageTitle, faqData, serviceSchema]);
  useSchemas(pageSchemas);

  const displayName = cityName ? `Appliance Repair in ${cityName}` : (appliance.toLowerCase().includes(serviceWord.toLowerCase()) ? appliance : `${appliance} ${serviceWord}`);
  const displayH1 = customH1 || (cityName ? `Expert Appliance Repair in ${cityName}` : (appliance.toLowerCase().includes(serviceWord.toLowerCase()) ? `Expert ${appliance} in the San Francisco Bay Area` : `Expert ${appliance} ${serviceWord} in the San Francisco Bay Area`));


  /* ═══════════════════════════════════════════════════════════
     CITY-SPECIFIC LAYOUT — Precision Craft Design System
     ═══════════════════════════════════════════════════════════ */
  if (isCity) {
    const cd = cityLocalData[cityName] || cityLocalData[cityName?.split(' & ')[0]] || {};
    const citySlug = cityName.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
    const cityBg = CITY_HERO_BG[citySlug] || '/background_new2.webp';

    return (
      <div className="city-page-wrap" style={{ fontFamily: S.font }}>
        <SEOMetaTags
          title={effectiveTitle}
          description={effectiveDescription || `Professional appliance repair in ${cityName}. Fast scheduling. Licensed technicians, 180-day warranty. Call (760) 543-5733.`}
          canonical={`https://fixitbay.net${currentPath}`}
          ogImage="https://fixitbay.net/images/og-cover.png"
          noindex={noindex}
        />

        {/* ═══ SECTION 1 — HERO ═══ */}
        <section data-testid="city-hero" style={{
          background: `linear-gradient(rgba(13,27,42,0.96),rgba(13,27,42,0.96)), url('${cityBg}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 60%',
          minHeight: 520, maxHeight: 580, overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '100px 40px 80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 36, height: 2, background: '#FF5722', display: 'inline-block' }} />
              <span style={{ ...S.eyebrow, letterSpacing: '0.22em' }}>{cityName.toUpperCase()} APPLIANCE REPAIR</span>
            </div>
            <h1 className="hero-main-h1" data-testid="city-hero-h1" style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FFFFFF', lineHeight: 1.12, marginTop: 16 }}>Appliance Repair in<br/>{cityName}</h1>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>Same- or next-day &middot; $60 diagnostic &middot; 180-day warranty</p>
            {/* Urgency micro-copy */}
            <p data-testid="city-hero-urgency" style={{ fontFamily: S.font, fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 12 }}>
              Most slots filled by noon — book now to secure today
            </p>
          </div>
          {/* ═══ STATS GRID ═══ */}
          <div data-testid="city-stats-grid" className="city-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, background: '#1A2F45', borderRadius: 12, margin: '16px 20px 0', overflow: 'hidden' }}>
            {[
              { num: '3+', line1: 'Years', line2: 'of Service' },
              { num: '180', line1: 'Day', line2: 'Warranty' },
              { num: '$60', line1: 'Diagnostic', line2: 'Waived*' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '16px 8px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 'clamp(24px, 6vw, 36px)', lineHeight: 1, color: '#FF5722' }}>{s.num}</span>
                <span style={{ fontFamily: S.font, fontWeight: 600, fontSize: 'clamp(11px, 3vw, 14px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginTop: 4 }}>{s.line1}</span>
                <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.line2}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TRUST STRIP ═══ */}
        <div className="city-trust-strip" data-testid="city-trust-strip" style={{ background: '#0D1B2A', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', fontFamily: S.font, fontWeight: 500, fontSize: 13, letterSpacing: '0.3px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>Licensed CA Technician</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>4.9 Google (95 Reviews)</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>License #51001</span></span>
          </div>
        </div>

        {/* ═══ SECTION 2 — APPLIANCES (TABBED) ═══ */}
        <CityServicesTabbed citySlug={citySlug} />

        {/* ═══ SECTION 3 — PROBLEMS ═══ */}
        {commonProblems.length > 0 && (
          <section data-testid="city-problems" id="issues" style={{ background: '#FFFFFF', padding: '70px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
              <div style={S.eyebrow}>COMMON ISSUES</div>
              <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 0 }}>Common Appliance Problems in {cityName}</h2>
              {effectiveServiceDescription?.paragraphs?.[0] && (
                <p style={{ maxWidth: 720, margin: '16px auto 40px', fontFamily: S.font, fontSize: 13, fontWeight: 400, lineHeight: 1.80, color: '#4A5568' }}>
                  {effectiveServiceDescription.paragraphs[0]}
                </p>
              )}
              <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
                {commonProblems.map((p, i) => (
                  <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}>{p.title}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SECTION 4 — PROCESS ═══ */}
        <ProcessSteps gridClassName="city-process-grid grid grid-cols-2 lg:grid-cols-4 gap-8" testId="city-process" />

        {/* ═══ SECTION 5 — PRICING ═══ */}
        <PricingCards testId="city-pricing" />

        {/* ═══ SECTION 6 — CTA BANNER ═══ */}
        <CTABanner heading={`Need Appliance Repair in ${cityName} Today?`} testId="city-cta-banner" />

        {/* ═══ SECTION 7 — BRANDS ═══ */}
        <BrandsGrid cityName={cityName} testId="city-brands" />

        {/* ═══ SECTION 8 — HOUSING TYPES ═══ */}
        <HousingTypes cityName={cityName} housingTypes={cd?.housingTypes} testId="city-housing" />

        {/* ═══ SECTION 9 — CASE STUDIES ═══ */}
        <CaseStudies cityName={cityName} caseStudies={cd?.caseStudies} testId="city-case-studies" />

        {/* ═══ SECTION 10 — REVIEWS ═══ */}
        <Testimonials testimonials={cd?.testimonials} testId="city-testimonials" />

        {/* ═══ POPULAR REPAIRS ═══ */}
        {POPULAR_REPAIRS_MAP[citySlug]?.length > 0 && (
          <section data-testid="popular-repairs" style={{ background: '#FFFFFF', padding: '60px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
              <div style={S.eyebrow}>MOST REQUESTED</div>
              <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 28 }}>Popular Repairs in {cityName}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {POPULAR_REPAIRS_MAP[citySlug].map(service => (
                  <a
                    key={service}
                    href={`/${citySlug}-${service}-repair`}
                    data-testid={`popular-repair-${service}`}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#FF5722'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'}
                  >
                    <span style={{ fontFamily: S.font, fontWeight: 600, fontSize: 15, color: '#0D1B2A' }}>{SERVICE_DISPLAY_NAMES[service]} in {cityName}</span>
                    <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SECTION 11 — FAQ ═══ */}
        {faqData?.length > 0 && <FAQAccordion faqs={faqData} testIdPrefix="city-faq" />}

        {/* ═══ SECTION 12 — NEARBY SERVICE AREAS ═══ */}
        <section data-testid="city-nearby" style={{ background: '#F8F5F0', padding: '60px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div style={S.eyebrow}>ALSO SERVING</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 8 }}>Nearby Service Areas</h2>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>We serve the entire Bay Area</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ALL_SERVICE_CITIES.filter(c => c.slug !== citySlug && !['belvedere', 'tiburon'].includes(c.slug)).map(city => (
                <Link key={city.slug} to={city.path} style={{ fontFamily: S.font, fontWeight: 500, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20, padding: '10px 16px', whiteSpace: 'nowrap', transition: 'all 0.15s ease', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0D1B2A'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}>
                  {city.name}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 20 }}>
              <Link to="/service-areas" style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', transition: 'text-decoration 0.2s' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all 22 service cities &rarr;</Link>
            </p>
          </div>
        </section>

        {/* ═══ SECTION 13 — FINAL CTA ═══ */}
        <section data-testid="city-final-cta" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '70px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
            <h3 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 40, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 12 }}>Need Appliance Repair in {cityName}?</h3>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginTop: 12, marginBottom: 28 }}>Same- or next-day appointments available across all neighborhoods</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/book?go=1" data-testid="city-final-book" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 32px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>{`BOOK ${serviceWord.toUpperCase()} ONLINE`}</a>
              <a href="tel:+17605435733" data-testid="city-final-call" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 28px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>CALL (760) 543-5733</a>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 14 — FOOTER ═══ */}
        <CompactFooter testId="city-footer" />

        {/* Floating sticky Book Repair */}
        {showStickyBtn && (
          <a href="/book?go=1" data-testid="city-sticky-book" className="hidden md:inline-flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 24px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', alignItems: 'center', gap: 8, transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#FF7043'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            {`BOOK ${serviceWord.toUpperCase()}`}
          </a>
        )}

        <style>{`
          .city-svc-btn:hover { background: #FF5722 !important; }
          .city-cta-book, .city-cta-call { min-height: 52px; box-sizing: border-box; }
          @media (max-width: 1023px) {
            .hero-main-h1 { font-size: 28px !important; line-height: 1.2 !important; }
          }
          @media (max-width: 767px) {
            [data-testid="city-hero"] { min-height: auto !important; max-height: none !important; }
            [data-testid="city-hero"] > div { padding: 48px 20px !important; }
            [data-testid="city-hero-h1"] { max-width: 100% !important; }
            .city-trust-strip > div { gap: 12px !important; font-size: 11px !important; }
            .city-page-wrap h2 { /* handled by global index.css */ }
          }
          @media (max-width: 480px) {
          }
        `}</style>
      </div>
    );
  }
  /* ═══ END CITY-SPECIFIC LAYOUT ═══ */

  return (
    <div style={{ fontFamily: S.font, background: '#F8F5F0' }}>
      <SEOMetaTags
        title={effectiveTitle}
        description={effectiveDescription || `Professional ${appliance.toLowerCase()} repair in San Francisco, Peninsula, and Marin County. Licensed technicians, 180-day warranty, fast scheduling.`}
        canonical={`https://fixitbay.net${currentPath}`}
        ogImage="https://fixitbay.net/images/og-cover.png"
        noindex={noindex}
      />

      {/* ═══ HERO ═══ */}
      {!hideHero && (
        <section data-testid="service-hero" style={{ background: '#0D1B2A', maxHeight: 580, minHeight: 520, overflow: 'hidden', borderBottom: '1px solid rgba(255,87,34,0.20)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: heroImage ? '35fr 65fr' : '1fr', maxHeight: 580, minHeight: 520 }} className="service-hero-grid">
            {/* Left: Photo */}
            {heroImage && (
              <div style={{ position: 'relative', overflow: 'hidden', maxHeight: 580 }} className="service-hero-photo">
                <img src={heroImage} alt={heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: heroImagePosition, display: 'block' }} loading="eager" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0D1B2A 100%)', pointerEvents: 'none' }} />
              </div>
            )}
            {/* Right: Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 7vw 60px 50px', background: '#0D1B2A' }} className="service-hero-text">
              {/* Breadcrumb */}
              <div className="hidden md:block" aria-label="breadcrumb" style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
                <a href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Home</a>
                {!isTopLevel && (<>
                  <span style={{ margin: '0 8px' }}>&rarr;</span>
                  <a href={breadcrumbHref} style={{ color: isSelfReferencing ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{breadcrumbLabel}</a>
                </>)}
                {!isSelfReferencing && (<>
                  <span style={{ margin: '0 8px' }}>&rarr;</span>
                  <span>{displayName}</span>
                </>)}
              </div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 36, height: 2, background: '#FF5722', display: 'inline-block' }} />
                <span style={{ ...S.eyebrow, letterSpacing: '0.22em' }}>{appliance ? (appliance.toLowerCase().includes(serviceWord.toLowerCase()) ? appliance.toUpperCase() : `${appliance.toUpperCase()} ${serviceWord.toUpperCase()}`) : 'APPLIANCE REPAIR'}</span>
              </div>
              {/* H1 */}
              <h1 className="hero-main-h1" style={{ fontFamily: S.font, fontWeight: 800, fontSize: 46, color: '#FFFFFF', lineHeight: 1.12, maxWidth: 520, marginTop: 16 }}>{displayH1}</h1>
              {/* Subtext */}
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>$60 diagnostic &middot; Same/Next-Day &middot; 180-Day Warranty</p>
              {heroDescription && <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 12, lineHeight: 1.6, maxWidth: 480 }}>{heroDescription}</p>}
              {/* CTAs */}
              <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
                <a href="/book?go=1" data-testid="service-hero-book" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>{`BOOK ${serviceWord.toUpperCase()} ONLINE`}</a>
                <a href="tel:+17605435733" data-testid="service-hero-call" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>Call (760) 543-5733</a>
              </div>
              {/* Tech note */}
              <p style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 20 }}>Andrei — Licensed CA Appliance Technician, 3+ years</p>
            </div>
          </div>
          {/* Stats grid */}
        </section>
      )}

      {/* ═══ TRUST STRIP (service pages) ═══ */}
      {!isCity && !hideHero && (
        <div className="city-trust-strip" data-testid="service-trust-strip" style={{ background: '#0D1B2A', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', fontFamily: S.font, fontWeight: 500, fontSize: 13, letterSpacing: '0.3px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>Licensed CA Technician</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>4.9 Google (95 Reviews)</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>License #51001</span></span>
          </div>
        </div>
      )}

      {/* ═══ HOW IT WORKS ═══ */}
      {!hideHowItWorks && (
      <section data-testid="how-it-works" style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>THE PROCESS</div>
          <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 48 }}>{isMaintenance ? '4 Steps to a Well-Maintained Appliance' : 'Simple. Fast. Professional.'}</h2>
          <div className="service-how-grid grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', icon: <CalendarCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'Book Online', text: 'Schedule your appointment at your convenience.' },
              { num: '02', icon: <Search size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Diagnose', text: `$60 diagnostic visit — applied to ${serviceWord.toLowerCase()} if you proceed.` },
              { num: '03', icon: <ClipboardCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'You Approve', text: 'Upfront estimate before any work begins. No surprises.' },
              { num: '04', icon: <Wrench size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: isMaintenance ? 'Professional Maintenance' : 'We Fix It', text: isMaintenance ? 'Genuine parts and manufacturer specs. 180-day warranty on parts and labor.' : 'Professional repair with 180-day warranty on parts and labor.' },
            ].map(s => (
              <div key={s.num} data-testid={`how-step-${s.num}`}>
                <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 72, color: 'rgba(255,87,34,0.18)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ marginTop: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>{s.title}</div>
                <p style={{ ...S.body, fontSize: 13, marginTop: 8 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ═══ HOW YOUR REPAIR VISIT WORKS ═══ */}
      <section data-testid="repair-visit-steps" style={{ background: '#0D1B2A', padding: '70px 0' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>STEP BY STEP</div>
          <h2 style={{ ...S.h2, color: '#FFFFFF', marginBottom: 36 }}>How Your {serviceWord} Visit Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { n: 1, t: 'Book Online or Call', d: `Schedule your ${serviceWord.toLowerCase()} at a time that works. Same- or next-day available.` },
              { n: 2, t: 'Diagnostic Visit', d: `Licensed technician arrives on time, inspects your ${appliance.toLowerCase()}, identifies the problem. $60 fee applies.` },
              { n: 3, t: 'Upfront Quote', d: 'Clear written estimate before work begins. $60 diagnostic credited if you proceed.' },
              { n: 4, t: `Professional ${serviceWord}`, d: isMaintenance ? 'Genuine parts and manufacturer specs. Most jobs completed in one visit. 180-day warranty included.' : 'Issue fixed with quality parts. Most jobs completed in one visit. 180-day warranty included.' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 16, borderLeft: '2px solid rgba(255,87,34,0.25)', paddingLeft: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: S.font, fontWeight: 800, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#FFFFFF' }}>{s.t}</div>
                  <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.60)', marginTop: 4 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVING [CITY] CUSTOMERS ═══ */}
      {servingCity && (
        <section data-testid="serving-city" style={{ background: '#F8F5F0', padding: '60px 0' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>LOCAL SERVICE</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 16 }}>Serving {servingCity.name} Customers</h2>
            <div style={{ ...S.body, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 12 }}>
                We provide {appliance.toLowerCase()} {serviceWord.toLowerCase()} throughout {servingCity.name}, including {servingCity.neighborhoods.join(', ')} and surrounding areas. {servingCity.note}
              </p>
              <p>
                Our technicians arrive with common {appliance.toLowerCase()} parts stocked for first-visit resolution. $60 diagnostic — applied to your {serviceWord.toLowerCase()} if you proceed.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ═══ COMMON PROBLEMS ═══ */}
      {commonProblems.length > 0 && (
        <section data-testid="common-problems" id="issues" style={{ background: '#F8F5F0', padding: '70px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>{isMaintenance ? 'MAINTENANCE GUIDE' : 'WHAT WE FIX'}</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 32 }}>{isMaintenance ? `Signs Your ${appliance} Needs Maintenance` : `Common ${appliance} Problems`}</h2>
            {effectiveServiceDescription && (
              <div style={{ maxWidth: 720, margin: '0 auto 40px' }}>
                {effectiveServiceDescription.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontFamily: S.font, fontSize: 13, fontWeight: 400, lineHeight: 1.80, color: '#4A5568', marginBottom: 16 }}>{p}</p>
                ))}
              </div>
            )}
            <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
              {commonProblems.map((p, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
                  <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}>{p.title}</div>
                  <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner heading={`Need ${appliance.toLowerCase().includes(serviceWord.toLowerCase()) ? appliance : `${appliance} ${serviceWord}`} Today?`} testId="cta-banner" />

      {/* ═══ COMPARISON TABLE ═══ */}
      {comparisonTable && (
        <section data-testid="comparison-table" style={{ background: '#FFFFFF', padding: '70px 0' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>REPAIR OR REPLACE?</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 12 }}>{comparisonTable.title}</h2>
            <p style={{ ...S.body, marginBottom: 28 }}>{comparisonTable.intro}</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: S.font }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #0D1B2A' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, fontSize: 13, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Situation</th>
                    <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 700, fontSize: 13, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.06em', width: 90 }}>Repair</th>
                    <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 700, fontSize: 13, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.06em', width: 90 }}>Replace</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{row.situation}</div>
                        <div style={{ fontSize: 13, color: '#4A5568', marginTop: 4, lineHeight: 1.5 }}>{row.note}</div>
                      </td>
                      <td style={{ textAlign: 'center', padding: '14px 16px', fontSize: 18 }}>{row.repair ? <Check size={20} style={{ color: '#FF5722' }} /> : <span style={{ color: 'rgba(0,0,0,0.15)' }}>&mdash;</span>}</td>
                      <td style={{ textAlign: 'center', padding: '14px 16px', fontSize: 18 }}>{row.replace ? <X size={20} style={{ color: '#DC2626' }} /> : <span style={{ color: 'rgba(0,0,0,0.15)' }}>&mdash;</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ═══ SYMPTOMS CHECKLIST ═══ */}
      {symptomsChecklist && (
        <section data-testid="symptoms-checklist" style={{ background: '#F8F5F0', padding: '70px 0' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>SYMPTOMS GUIDE</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 28 }}>{appliance} Symptoms Checklist</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {symptomsChecklist.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '16px 20px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,87,34,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Wrench size={14} style={{ color: '#FF5722' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 4 }}>{item.symptom}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{item.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ DIAGNOSIS PROCESS ═══ */}
      {diagnosisSteps && (
        <section data-testid="diagnosis-process" style={{ background: '#0D1B2A', padding: '70px 0' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, color: '#FF5722', marginBottom: 10 }}>OUR PROCESS</div>
            <h2 style={{ ...S.h2, color: '#FFFFFF', marginBottom: 36 }}>How We Diagnose and Fix {appliance}s</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {diagnosisSteps.map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: S.font, fontWeight: 800, fontSize: 20, color: '#FF5722' }}>{s.step}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 6 }}>{s.title}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PRICING ═══ */}
      {maintenancePricing ? (
        <section data-testid="pricing-section" style={{ background: '#F8F5F0', padding: '40px 20px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ color: '#FF5722', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Montserrat, sans-serif' }}>PRICING</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 26, color: '#0D1B2A', marginBottom: 6 }}>
              {appliance} Maintenance Service Cost
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 20 }}>
              Written estimate before any work begins. $60 diagnostic applied to maintenance cost.
            </p>
            <div style={{ background: '#fff', borderRadius: 6, padding: '20px 24px', border: '1px solid #e5e7eb', marginBottom: 12 }}>
              {maintenancePricing.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < maintenancePricing.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#0D1B2A', fontWeight: i === maintenancePricing.length - 1 ? 700 : 400 }}>{item.service}</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#FF5722', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 16 }}>{item.price}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', margin: 0 }}>
              * Final cost depends on model and condition. You receive a written estimate before work begins.
            </p>
          </div>
        </section>
      ) : pricingTable ? (
        <section data-testid="pricing-section" style={{ background: '#F8F5F0', padding: '60px 0' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>PRICING</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 8 }}>{appliance} {serviceWord} Cost in {pricingCityName || cityName || 'the San Francisco Bay Area'}</h2>
            <p style={{ ...S.body, marginBottom: 24 }}>$60 diagnostic fee &mdash; applied to your {serviceWord.toLowerCase()} if you proceed. Written estimate before any work begins.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: S.font }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #0D1B2A' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, fontSize: 13, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Repair</th>
                    <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: 700, fontSize: 13, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.06em', width: 120 }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 500, fontSize: 14, color: '#0D1B2A' }}>{row.repair}</td>
                      <td style={{ textAlign: 'right', padding: '14px 16px', fontWeight: 700, fontSize: 15, color: '#0D1B2A' }}>from ${row.price}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: '2px solid #0D1B2A', background: 'rgba(255,87,34,0.04)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, fontSize: 14, color: '#0D1B2A' }}>Diagnostic visit</td>
                    <td style={{ textAlign: 'right', padding: '14px 16px', fontWeight: 700, fontSize: 15, color: '#FF5722' }}>${pricingTable.diagnostic}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {pricingTable.luxury && pricingTable.luxury.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Luxury / Premium Brands</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {pricingTable.luxury.map((item, i) => (
                    <div key={i} style={{ fontFamily: S.font, fontSize: 13, color: '#4A5568', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 4, padding: '8px 16px' }}>
                      <span style={{ fontWeight: 600, color: '#0D1B2A' }}>{item.brand}</span> from <span style={{ fontWeight: 700, color: '#FF5722' }}>${item.from}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p style={{ fontFamily: S.font, fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', marginTop: 20 }}>
              * Prices include parts and labor. Final cost depends on model and parts required.
            </p>
          </div>
        </section>
      ) : SERVICE_PRICING[appliance] && (
        <section data-testid="pricing-section" style={{ background: '#F8F5F0', padding: '40px 20px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ color: '#FF5722', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Montserrat, sans-serif' }}>PRICING</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 26, color: '#0D1B2A', marginBottom: 6 }}>
              {isMaintenance ? `${appliance} Maintenance Service Cost` : `${appliance} ${serviceWord} Cost in ${pricingCityName || cityName || 'the San Francisco Bay Area'}`}
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 20 }}>
              Written estimate before any work begins. $60 diagnostic applied to {serviceWord.toLowerCase()} cost.
            </p>
            <div style={{ background: '#fff', borderRadius: 6, padding: '20px 24px', border: '1px solid #e5e7eb', marginBottom: 12 }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#0D1B2A', lineHeight: 1.9, margin: '0 0 10px' }}>
                <strong>Starting from ${SERVICE_PRICING[appliance].from}</strong> after $60 diagnostic.
                <br /><span style={{ fontSize: 11, color: '#4A5568', fontStyle: 'italic' }}>* Prices include parts and labor. Final cost depends on model and parts availability.</span>
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#4A5568', lineHeight: 1.8, margin: 0 }}>
                {SERVICE_PRICING[appliance].repairs}.
              </p>
              {SERVICE_PRICING[appliance].luxury && (
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#4A5568', lineHeight: 1.8, margin: '8px 0 0' }}>
                  <strong>Luxury brands:</strong> {SERVICE_PRICING[appliance].luxury}.
                </p>
              )}
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', margin: 0 }}>
              * Final cost depends on model and parts required. You receive a written estimate before work begins.
            </p>
          </div>
        </section>
      )}

      {/* ═══ MAINTENANCE SCHEDULE ═══ */}
      {maintenanceSchedule && (
        <section data-testid="maintenance-schedule" style={{ background: '#FFFFFF', padding: '60px 20px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ color: '#FF5722', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, fontFamily: 'Montserrat, sans-serif' }}>SCHEDULE</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 26, color: '#0D1B2A', marginBottom: 6 }}>
              {maintenanceSchedule.title}
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 28 }}>
              {maintenanceSchedule.intro}
            </p>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {maintenanceSchedule.items.map((item, i) => (
                <div key={i} style={{ background: '#F8F5F0', borderRadius: 10, padding: '20px 24px', borderLeft: '4px solid #FF5722' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FF5722', marginBottom: 8 }}>{item.interval}</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ ═══ */}
      {faqData?.length > 0 && <FAQAccordion faqs={faqData} background="#FFFFFF" testIdPrefix="faq" />}

      {/* ═══ BRANDS ═══ */}
      <BrandsGrid testId="brands-section" />

      {/* ═══ COMBINED: RELATED SERVICES + SERVICE AREAS / BY CITY ═══ */}
      {(() => {
        const svcSlug = appliance ? appliance.toLowerCase().replace(/\s+/g, '-').replace(/-appliance$/, '') : '';
        const currentCitySlug = isCity ? cityName.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') : (cmsSlug ? cmsSlug.replace(`-${svcSlug}-repair`, '') : '');
        const hasRelated = autoRelatedLinks?.length > 0;
        const showByCity = !isBrand && !isCommercial && !isMaintenance;
        const showCoverage = !isCity && !isBrand && (isCommercial || isMaintenance);
        const hasAnyCities = showByCity && CITY_REGIONS.some(r => r.slugs.some(s => s !== currentCitySlug && CITY_SERVICE_LINKS[s]?.includes(svcSlug)));
        const hasRightCol = (showByCity && hasAnyCities) || showCoverage;
        if (!hasRelated && !hasRightCol) return null;

        const COVERAGE_CITIES = ['San Francisco','Daly City','South San Francisco','Colma','Brisbane','San Bruno','Millbrae','Pacifica','Montara','Sausalito','Mill Valley','Tiburon','Belvedere','Corte Madera','San Rafael','Larkspur','Greenbrae','Novato','Ross','Fairfax','San Anselmo'];
        const CITY_SVC_SLUGS = ['refrigerator','washer','dryer','dishwasher','oven','wine-cooler','ice-maker'];
        const hasCityRoutes = !isCommercial && CITY_SVC_SLUGS.includes(svcSlug);

        return (
          <section style={{ background: '#F8F5F0', padding: '60px 0' }} data-testid="explore-services-areas">
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
              <div className="explore-two-col" data-testid="explore-two-col-grid">
                {/* LEFT CARD: Related Services */}
                {hasRelated && (
                  <div className="explore-card explore-card-navy" data-testid="explore-related-services">
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>ALSO WE FIX</div>
                    <h2 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 20, color: '#FFFFFF', marginBottom: 20 }}>Related Services</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                      {autoRelatedLinks.map((link, i) => (
                        <a key={i} href={link.href} data-testid={`related-service-${i}`} style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FFFFFF', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '8px 16px', whiteSpace: 'nowrap', transition: 'all 0.15s ease', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.borderColor = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 18, fontSize: 13, fontWeight: 700, color: '#FF5722', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all services &rarr;</a>
                  </div>
                )}

                {/* RIGHT CARD: Service Areas or By City */}
                {showCoverage && (
                  <div className="explore-card explore-card-cream" data-testid="explore-service-areas">
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>COVERAGE</div>
                    <h2 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 20, color: '#0D1B2A', marginBottom: 20 }}>{isCommercial ? 'Commercial Service Areas' : `Service Areas for ${appliance} ${serviceWord}`}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {COVERAGE_CITIES.map(city => {
                        const slug = city.toLowerCase().replace(/\s+/g, '-');
                        const href = isCommercial ? `/${slug}-appliance-repair` : (hasCityRoutes ? `/${slug}-${svcSlug}-repair` : `/${slug}-appliance-repair`);
                        return (
                          <Link key={city} to={href} style={{ fontFamily: S.font, fontWeight: 500, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20, padding: '7px 16px', whiteSpace: 'nowrap', transition: 'all 0.15s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0D1B2A'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}>
                            {city}
                          </Link>
                        );
                      })}
                    </div>
                    <Link to="/service-areas" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 18, fontSize: 13, fontWeight: 700, color: '#FF5722', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all service cities &rarr;</Link>
                  </div>
                )}

                {showByCity && hasAnyCities && (
                  <div className="explore-card explore-card-cream" data-testid="explore-by-city">
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>LOCAL SERVICE</div>
                    <h2 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 20, color: '#0D1B2A', marginBottom: 20 }}>{appliance} Repair by City</h2>
                    {CITY_REGIONS.map(region => {
                      const regionCities = region.slugs.filter(s => s !== currentCitySlug && CITY_SERVICE_LINKS[s]?.includes(svcSlug));
                      if (regionCities.length === 0) return null;
                      return (
                        <div key={region.label} style={{ marginBottom: 16 }}>
                          <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>{region.label}</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {regionCities.map(cs => (
                              <Link key={cs} to={`/${cs}-${svcSlug}-repair`} data-testid={`city-service-link-${cs}`} style={{ fontFamily: S.font, fontWeight: 500, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20, padding: '7px 16px', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all 0.15s ease', whiteSpace: 'nowrap' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0D1B2A'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}>
                                <MapPin size={12} /> {CITY_DISPLAY_NAMES[cs]} {appliance} Repair
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    <Link to="/service-areas" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 6, fontSize: 13, fontWeight: 700, color: '#FF5722', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all service cities &rarr;</Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ═══ CITY/BRAND SPECIFIC ═══ */}
      {isBrand && appliance && (() => {
        const bk = appliance.replace(' Appliance', '');
        const bd = brandLocalData[bk];
        if (!bd) return null;
        return (
          <section style={{ background: '#FFFFFF', padding: '60px 0' }}>
            <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
              <h2 style={{ ...S.h2, fontSize: 28, color: '#0D1B2A', marginBottom: 16 }}>{bk} Repair: What to Know</h2>
              <div style={{ ...S.body }}>
                <p style={{ marginBottom: 12 }}><strong>{bk}</strong> was founded in {bd.founded} and is known for {bd.specialty.charAt(0).toLowerCase() + bd.specialty.slice(1)}.</p>
                <p style={{ marginBottom: 12 }}><strong>Common issues:</strong> {bd.commonIssues.slice(0, 2).join('. ')}.</p>
                <p style={{ marginBottom: 12 }}><strong>Parts:</strong> {bd.partsAvailability}</p>
                <p><strong>Warranty:</strong> {bd.warrantyNote}</p>
              </div>
            </div>
          </section>
        );
      })()}

      {cityName && (() => {
        const cd = cityLocalData[cityName];
        return (
          <section style={{ background: '#FFFFFF', padding: '60px 0' }}>
            <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
              <h2 style={{ ...S.h2, fontSize: 28, color: '#0D1B2A', marginBottom: 16 }}>Why {cityName} Residents Call FixitBay LLC</h2>
              <div style={{ ...S.body }}>
                {cd ? (
                  <>
                    <p style={{ marginBottom: 12 }}>We serve all of {cityName} including {cd.neighborhoods.slice(0, 5).join(', ')}. Typical response time: {cd.driveTime}.</p>
                    <p style={{ marginBottom: 12 }}>{cityName} homes include {cd.housingType.toLowerCase()}. {cd.localTip}</p>
                    {cd.nearbyDescription && <p style={{ marginBottom: 12 }}>{cd.nearbyDescription}</p>}
                    <p><strong>ZIP codes:</strong> {cd.zipCodes.join(', ')}</p>
                  </>
                ) : (
                  <p>We provide fast appliance repair across {cityName}. Most repairs completed fast.</p>
                )}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Template already has compact Service Areas above — children (ServiceAreasList) removed to avoid duplicate */}

      {/* Custom content sections passed as children */}
      {children}

      {/* ═══ MINIMAL FOOTER ═══ */}
      <CompactFooter testId="service-footer" />

      {/* Mobile responsive */}
      <style>{`
        .related-svc-btn:hover { background: #FF5722 !important; }
        .explore-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .explore-card { border-radius: 16px; padding: 28px 32px; }
        .explore-card-navy { background: #0D1B2A; }
        .explore-card-cream { background: #FFFFFF; border: 1px solid rgba(0,0,0,0.08); }
        @media (max-width: 767px) {
          .explore-two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-main-h1 { font-size: 28px !important; line-height: 1.2 !important; }
        }
        @media (max-width: 767px) {
          .service-hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; max-height: none !important; }
          .service-hero-photo { height: 280px; max-height: 280px !important; }
          .service-hero-text { padding: 36px 20px 44px !important; }
          .service-hero-text h1 { max-width: 100% !important; }
          .service-how-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; text-align: center; }
        }
        @media (max-width: 480px) {
          .service-how-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
      `}</style>

      {/* Floating sticky Book Repair button */}
      {showStickyBtn && (
        <a
          href="/book?go=1"
          data-testid="sticky-book-btn"
          className="hidden md:inline-flex"
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 999,
            background: '#FF5722', color: '#FFFFFF',
            fontFamily: S.font, fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '16px 24px', borderRadius: 4,
            boxShadow: '0 4px 20px rgba(255,87,34,0.45)',
            textDecoration: 'none', alignItems: 'center', gap: 8,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FF7043'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <CalendarCheck size={16} /> {`BOOK ${serviceWord.toUpperCase()}`}
        </a>
      )}
    </div>
  );
};

export default ApplianceRepairPageNew;

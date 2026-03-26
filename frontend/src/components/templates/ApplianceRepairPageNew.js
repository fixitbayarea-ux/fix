import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { Phone, MapPin, Wrench, Check, X, CalendarCheck, Search, ClipboardCheck, Star, Home, HelpCircle, DollarSign, Clock, ArrowRight } from 'lucide-react';
import useCMSContent from '../../hooks/useCMSContent';
import { useSchemas } from '../../hooks/useSchema';
import brandLocalData from '../../data/brandLocalData';
import cityLocalData from '../../data/cityLocalData';
import { SERVICE_CITIES as ALL_SERVICE_CITIES } from '../../data/cities';
import BrandsGrid from '../sections/BrandsGrid';
import CTABanner from '../sections/CTABanner';
import CompactFooter from '../sections/CompactFooter';
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
  "name": `${serviceName} Repair San Francisco Bay Area`,
  "serviceType": `${serviceName} Repair`,
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "telephone": "+17605435733",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1549 Franklin St, Unit A",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109"
    },
    "priceRange": "$$"
  },
  "areaServed": [
    "San Francisco", "Daly City", "South San Francisco", "San Bruno",
    "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
    "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
    "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
    "Fairfax", "San Anselmo", "Novato"
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
  refrigerator: 'Refrigerator Repair',
  washer: 'Washer Repair',
  dryer: 'Dryer Repair',
  dishwasher: 'Dishwasher Repair',
  oven: 'Oven Repair',
};

const SERVICE_CITIES = [
  { slug: 'san-francisco', name: 'San Francisco' }, { slug: 'daly-city', name: 'Daly City' },
  { slug: 'south-san-francisco', name: 'South San Francisco' }, { slug: 'san-bruno', name: 'San Bruno' },
  { slug: 'pacifica', name: 'Pacifica' }, { slug: 'millbrae', name: 'Millbrae' },
  { slug: 'mill-valley', name: 'Mill Valley' }, { slug: 'san-rafael', name: 'San Rafael' },
  { slug: 'sausalito', name: 'Sausalito' }, { slug: 'novato', name: 'Novato' },
  { slug: 'tiburon', name: 'Tiburon' }, { slug: 'corte-madera', name: 'Corte Madera' },
];
const CITY_GROUPS = {
  'San Francisco': ['San Francisco', 'Daly City', 'South San Francisco', 'Colma', 'Brisbane'],
  'Peninsula': ['San Bruno', 'Millbrae', 'Pacifica', 'Montara'],
  'North Bay / Marin': ['Sausalito', 'Mill Valley', 'Tiburon', 'Belvedere Tiburon', 'Corte Madera', 'San Rafael', 'Larkspur', 'Greenbrae', 'Novato', 'San Quentin', 'Ross', 'Fairfax', 'San Anselmo'],
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
const CITY_SERVICE_LINKS = {
  'san-francisco': ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven'],
  'daly-city': ['refrigerator', 'washer', 'dryer'],
  'san-rafael': ['refrigerator', 'washer', 'dryer', 'dishwasher'],
  'mill-valley': ['refrigerator', 'dryer'],
  'novato': ['refrigerator', 'washer'],
  'south-san-francisco': ['refrigerator', 'washer', 'dryer'],
  'san-bruno': ['refrigerator', 'washer'],
  'pacifica': ['refrigerator', 'dryer'],
  'millbrae': ['refrigerator', 'washer'],
  'sausalito': ['refrigerator'],
  'tiburon': ['refrigerator'],
  'corte-madera': ['refrigerator', 'dryer'],
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
  'san-francisco': 'San Francisco', 'daly-city': 'Daly City',
  'san-rafael': 'San Rafael', 'mill-valley': 'Mill Valley',
  'novato': 'Novato', 'south-san-francisco': 'South San Francisco',
  'san-bruno': 'San Bruno', 'pacifica': 'Pacifica',
  'millbrae': 'Millbrae', 'sausalito': 'Sausalito',
  'tiburon': 'Tiburon', 'corte-madera': 'Corte Madera',
};

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
  { name: 'Refrigerator repair', href: '/refrigerator-repair', desc: 'Not cooling, leaking, noisy compressor, ice buildup' },
  { name: 'Washer repair', href: '/washer-repair', desc: 'Won\'t drain, excessive vibration, error codes, leaks' },
  { name: 'Dryer repair', href: '/dryer-repair', desc: 'Not heating, long dry times, lint buildup, drum noise' },
  { name: 'Dishwasher repair', href: '/dishwasher-repair', desc: 'Not cleaning, leaking, won\'t start, drainage issues' },
  { name: 'Oven & range repair', href: '/oven-repair', desc: 'Uneven heating, igniter failure, door seal problems' },
  { name: 'Cooktop repair', href: '/cooktop-repair', desc: 'Burner not lighting, element failure, cracked glass' },
  { name: 'Wine cooler repair', href: '/wine-cooler-repair', desc: 'Temperature swings, compressor noise, door seal' },
  { name: 'Ice maker repair', href: '/ice-maker-repair', desc: 'No ice production, water line clogs, slow output' },
];

const ApplianceRepairPageNew = ({
  appliance, pageTitle, metaDescription, commonProblems = [], faqData = [],
  serviceDescription = null, breadcrumbCategoryName = 'Services', breadcrumbCategoryHref = '/#services',
  relatedServicesCategory = null, relatedServicesSubtitle = null,
  hideHero = false, noPaddingTop = false, cmsSlug = null, cityName = null,
  serviceSchema = null, noindex, heroImage = null, heroImageAlt = '', heroImagePosition = 'center 15%',
  repairVsReplace = null, relatedLinks = null, hideHowItWorks = false, customH1 = null, heroDescription = null, children
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
      return [{ href: '/service-areas', label: 'All Service Areas' }, { href: '/brands', label: 'Brands We Repair' }, { href: '/services', label: 'All Services' }, ...nearby.map(n => ({ ...n, label: `${n.label} Appliance Repair` }))];
    }
    if (isBrand) return [{ href: '/refrigerator-repair', label: 'Refrigerator Repair' }, { href: '/washer-repair', label: 'Washer Repair' }, { href: '/dishwasher-repair', label: 'Dishwasher Repair' }, { href: '/oven-repair', label: 'Oven Repair' }, { href: '/brands', label: 'All Brands' }, { href: '/services', label: 'All Services' }];
    if (isCommercial) return [{ href: '/commercial-appliance-repair', label: 'Commercial Appliance Repair' }, { href: '/commercial-refrigerator-repair', label: 'Commercial Refrigerator Repair' }, { href: '/services', label: 'All Services' }];
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

  const pageSchemas = useMemo(() => {
    const schemas = [{
      id: `breadcrumb-schema-${appliance}`,
      data: buildBreadcrumbSchema([
        { name: 'Home', url: 'https://fixitbay.net/' },
        { name: breadcrumbLabel, url: breadcrumbHref.startsWith('/') ? `https://fixitbay.net${breadcrumbHref}` : 'https://fixitbay.net/#services' },
        { name: cityName || pageTitle || `${appliance} Repair`, url: 'https://fixitbay.net/' }
      ])
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
        "name": `How to Get Your ${appliance} Repaired in San Francisco`,
        "description": `Book same-day ${appliance.toLowerCase()} repair with FixitBay LLC. $60 diagnostic applied to repair cost. 180-day warranty.`,
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
            "text": "A licensed California technician arrives same-day or next-day with professional tools."
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
          name: `Appliance Repair in ${cityName}`,
          provider: {
            '@type': 'LocalBusiness',
            name: 'FixitBay LLC',
            telephone: '+17605435733',
          },
          areaServed: {
            '@type': 'City',
            name: cityName,
          },
          description: `Same-day appliance repair in ${cityName}. $60 diagnostic fee applied to repair. 180-day warranty on parts and labor.`,
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
  }, [appliance, breadcrumbLabel, breadcrumbHref, cityName, pageTitle, faqData, serviceSchema]);
  useSchemas(pageSchemas);

  const displayName = cityName ? `Appliance Repair in ${cityName}` : `${appliance} ${serviceWord}`;
  const displayH1 = customH1 || (cityName ? `Expert Appliance Repair in ${cityName}` : (appliance === 'Dishwasher' ? `Expert ${appliance} ${serviceWord} in the Bay\u00A0Area` : `Expert ${appliance} ${serviceWord} in San\u00A0Francisco`));


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
          description={effectiveDescription || `Professional appliance repair in ${cityName}. Same-day service. Licensed technicians, 180-day warranty. Call (760) 543-5733.`}
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
            <h1 className="hero-main-h1" data-testid="city-hero-h1" style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FFFFFF', lineHeight: 1.12, marginTop: 16 }}>Appliance Repair in<br/>{cityName}</h1>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>Same-day & next-day &middot; $60 diagnostic &middot; 180-day warranty</p>
            <div data-testid="city-trust-badges" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 20, fontFamily: S.font, fontWeight: 500, fontSize: 13, flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>Licensed CA Technician</span></span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>4.9 Google</span></span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>License #51001</span></span>
            </div>
            <div className="city-cta-row" style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="/book?go=1" data-testid="city-hero-book" className="city-cta-book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 32px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR ONLINE</a>
              <a href="tel:+17605435733" data-testid="city-hero-call" className="city-cta-call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 28px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>CALL (760) 543-5733</a>
            </div>
            {/* Urgency micro-copy */}
            <p data-testid="city-hero-urgency" style={{ fontFamily: S.font, fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 12 }}>
              ⚡ Most slots filled by noon — book now to secure today
            </p>
            <div style={{ width: 48, height: 2, background: 'rgba(255,87,34,0.40)', margin: '24px 0 20px' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[{ value: '10+', label: 'Years' }, { value: '180-Day', label: 'Warranty' }, { value: 'Same-Day', label: 'Service' }].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)', margin: '0 20px' }} />}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#FFFFFF' }}>{stat.value}</span>
                    <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2 — APPLIANCES ═══ */}
        <section data-testid="city-services" style={{ background: '#F8F5F0', padding: '70px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div style={S.eyebrow}>WHAT WE FIX</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 28 }}>Every Major Appliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: 14 }}>
              {CITY_APPLIANCE_SERVICES.map((item) => (
                <a key={item.href} href={item.href} data-testid={`city-svc-${item.href.replace(/\//g, '')}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: 20, textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,87,34,0.10)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}><span style={{ color: '#FF5722', marginRight: 8 }}>&bull;</span>{item.name}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.6, marginBottom: 14 }}>{item.desc}</p>
                  </div>
                  <span className="city-svc-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 44, background: 'transparent', color: '#FF5722', border: '1.5px solid #FF5722', fontFamily: S.font, fontWeight: 700, fontSize: 14, padding: '10px 16px', borderRadius: 3, textAlign: 'center', transition: 'background 0.2s, color 0.2s' }}>View Service</span>
                </a>
              ))}
            </div>
          </div>
        </section>

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
        <section data-testid="city-pricing" style={{ background: '#1A2F45', padding: '70px 0' }}>
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <div style={{ ...S.eyebrow, color: '#FF5722', textAlign: 'center', marginBottom: 10 }}>TRANSPARENT PRICING</div>
            <h2 style={{ ...S.h2, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>No Surprises. Ever.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 20 }}>
              <div style={{ border: '2px solid #FF5722', background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '32px 24px', position: 'relative' }}>
                <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 10, textTransform: 'uppercase', borderRadius: 2, padding: '3px 10px', whiteSpace: 'nowrap' }}>MOST ASKED</span>
                <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FF5722', marginBottom: 8 }}>$60</div>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Diagnostic Fee</div>
                <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Applied toward repair if you proceed</p>
              </div>
              <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
                <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FFFFFF', marginBottom: 8 }}>180<span style={{ color: '#FF5722' }}>-Day</span></div>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Warranty</div>
                <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>On parts & labor. Same issue returns — we fix it at no charge</p>
              </div>
              <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
                <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FFFFFF', marginBottom: 8 }}>$0</div>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Hidden Fees</div>
                <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>No trip charges. No after-hours surcharges</p>
              </div>
            </div>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.30)', fontStyle: 'italic', marginTop: 24 }}>Typical repairs range $150–$400 after diagnosis</p>
          </div>
        </section>

        {/* ═══ SECTION 6 — CTA BANNER ═══ */}
        <CTABanner heading={`Need Appliance Repair in ${cityName} Today?`} testId="city-cta-banner" />

        {/* ═══ SECTION 7 — BRANDS ═══ */}
        <BrandsGrid cityName={cityName} testId="city-brands" />

        {/* ═══ SECTION 8 — HOUSING TYPES ═══ */}
        {cd?.housingTypes?.length > 0 && (
          <section data-testid="city-housing" style={{ background: '#0D1B2A', padding: '70px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ ...S.eyebrow, color: '#FF5722' }}>LOCAL EXPERTISE</div>
              <h2 style={{ ...S.h2, color: '#FFFFFF', marginTop: 10, marginBottom: 28 }}>We Know {cityName} Homes</h2>
              <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
                {cd.housingTypes.map((h, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: 24, transition: 'border-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,87,34,0.40)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>{h.type}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.60)', lineHeight: 1.70, marginBottom: 10 }}>{h.desc}</p>
                    <div style={{ fontFamily: S.font, fontWeight: 500, fontSize: 11, color: '#FF5722', letterSpacing: '0.06em' }}>{h.areas}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SECTION 9 — CASE STUDIES ═══ */}
        {cd?.caseStudies?.length > 0 && (
          <section data-testid="city-case-studies" style={{ background: '#F8F5F0', padding: '70px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
              <div style={S.eyebrow}>RECENT WORK</div>
              <h2 style={{ ...S.h2, color: '#0D1B2A', marginTop: 10, marginBottom: 28 }}>Recent Repairs in {cityName}</h2>
              <div className="grid md:grid-cols-3" style={{ gap: 16 }}>
                {cd.caseStudies.map((cs, i) => (
                  <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: 24 }}>
                    <span style={{ display: 'inline-block', background: 'rgba(255,87,34,0.08)', color: '#FF5722', fontFamily: S.font, fontWeight: 700, fontSize: 11, textTransform: 'uppercase', padding: '3px 10px', borderRadius: 2, marginBottom: 12 }}>{cs.appliance}</span>
                    <div style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: '#FF5722', marginBottom: 6 }}>{cs.neighborhood}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginBottom: 0 }}>{cs.issue}</p>
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 12, marginTop: 12 }}>
                      <span style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: '#4A5568' }}>{cs.timeframe}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SECTION 10 — REVIEWS ═══ */}
        {cd?.testimonials?.length > 0 && (
          <section data-testid="city-testimonials" style={{ background: '#0D1B2A', padding: '70px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ ...S.eyebrow, color: '#FF5722', textAlign: 'center', marginBottom: 10 }}>WHAT CLIENTS SAY</div>
              <h2 style={{ ...S.h2, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>Real People. Real Repairs.</h2>
              <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
                {cd.testimonials.slice(0, 4).map((t, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: 24 }}>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={14} style={{ fill: '#FFB800', color: '#FFB800' }} />
                      ))}
                    </div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.80)', lineHeight: 1.70, marginBottom: 14 }}>"{t.text}"</p>
                    <div>
                      <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>{t.name}</div>
                      <div style={{ fontFamily: S.font, fontWeight: 400, fontSize: 12, color: '#FF5722' }}>{t.area}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
                <a href="https://www.google.com/maps/place/FixitBay+Appliance+Repair" target="_blank" rel="noopener noreferrer" data-testid="city-reviews-google" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FFFFFF', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 20px', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.background = 'rgba(255,87,34,0.10)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
                  <Star size={14} style={{ fill: '#FFB800', color: '#FFB800' }} /> Read Google Reviews
                </a>
                <a href="https://www.thumbtack.com/ca/san-francisco/appliance-repair/fixitbay" target="_blank" rel="noopener noreferrer" data-testid="city-reviews-thumbtack" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FFFFFF', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 20px', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.background = 'rgba(255,87,34,0.10)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
                  <Star size={14} style={{ fill: '#FFB800', color: '#FFB800' }} /> Read Thumbtack Reviews
                </a>
              </div>
            </div>
          </section>
        )}

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
            <h2 style={{ ...S.h2, fontSize: 30, color: '#0D1B2A', marginTop: 10, marginBottom: 8 }}>Nearby Service Areas</h2>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>We serve the entire Bay Area</p>
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
            <h3 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 40, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 12 }}>Need Appliance Repair in {cityName}?</h3>
            <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginTop: 12, marginBottom: 28 }}>Same-day & next-day appointments available across all neighborhoods</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/book?go=1" data-testid="city-final-book" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 32px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR ONLINE</a>
              <a href="tel:+17605435733" data-testid="city-final-call" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 28px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>CALL (760) 543-5733</a>
            </div>
          </div>
        </section>

        {/* ═══ POPULAR REPAIRS IN CITY ═══ */}
        {(() => {
          const cs = cityName.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
          const cityServices = CITY_SERVICE_LINKS[cs];
          const repairs = cityServices
            ? cityServices.map(svc => ({ label: SERVICE_LABELS[svc] || (svc.charAt(0).toUpperCase() + svc.slice(1)), svc }))
            : [
                { label: 'Refrigerator', svc: 'refrigerator' }, { label: 'Washer', svc: 'washer' },
                { label: 'Dryer', svc: 'dryer' }, { label: 'Dishwasher', svc: 'dishwasher' },
                { label: 'Oven & Range', svc: 'oven' }, { label: 'Wine Cooler', svc: 'wine-cooler' },
                { label: 'Ice Maker', svc: 'ice-maker' },
              ];
          return (
            <section style={{ background: '#F8F5F0', padding: '60px 0' }}>
              <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ ...S.eyebrow, marginBottom: 10 }}>APPLIANCE REPAIR</div>
                <h2 style={{ ...S.h2, fontSize: 28, color: '#0D1B2A', marginBottom: 24 }}>Popular Repairs in {cityName}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: 12 }}>
                  {repairs.map(s => (
                    <Link key={s.svc} to={`/${cs}-${s.svc}-repair`} data-testid={`popular-repair-${s.svc}`} style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#fff', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 3, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; }}>
                      <Wrench size={14} style={{ color: '#FF5722' }} /> {s.label} Repair
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* ═══ SECTION 14 — FOOTER ═══ */}
        <CompactFooter testId="city-footer" />

        {/* Floating sticky Book Repair */}
        {showStickyBtn && (
          <a href="/book?go=1" data-testid="city-sticky-book" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 24px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#FF7043'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            BOOK REPAIR
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
            .city-cta-row { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
            .city-cta-book { width: 100% !important; display: flex !important; justify-content: center !important; min-width: 0 !important; }
            .city-cta-call { width: 100% !important; display: flex !important; justify-content: center !important; min-width: 0 !important; }
            .city-page-wrap h2 { font-size: 22px !important; line-height: 1.3 !important; }
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
        description={effectiveDescription || `Professional ${appliance.toLowerCase()} repair in San Francisco, Peninsula, and Marin County. Licensed technicians, 180-day warranty, same-day service.`}
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
                <span style={{ margin: '0 8px' }}>&rarr;</span>
                <a href={breadcrumbHref} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{breadcrumbLabel}</a>
                <span style={{ margin: '0 8px' }}>&rarr;</span>
                <span>{displayName}</span>
              </div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 36, height: 2, background: '#FF5722', display: 'inline-block' }} />
                <span style={{ ...S.eyebrow, letterSpacing: '0.22em' }}>{appliance ? `${appliance.toUpperCase()} ${serviceWord.toUpperCase()}` : 'APPLIANCE REPAIR'}</span>
              </div>
              {/* H1 */}
              <h1 className="hero-main-h1" style={{ fontFamily: S.font, fontWeight: 800, fontSize: 46, color: '#FFFFFF', lineHeight: 1.12, maxWidth: 520, marginTop: 16 }}>{displayH1}</h1>
              {/* Subtext */}
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>$60 diagnostic &middot; Same/Next-Day &middot; 180-Day Warranty</p>
              {heroDescription && <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 12, lineHeight: 1.6, maxWidth: 480 }}>{heroDescription}</p>}
              {/* Trust badges */}
              <div data-testid="trust-badges" style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 20, fontFamily: S.font, fontWeight: 500, fontSize: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span> <span style={{ color: 'rgba(255,255,255,0.85)' }}>Licensed CA Technician</span></span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span> <span style={{ color: 'rgba(255,255,255,0.85)' }}>4.9 Google</span></span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span> <span style={{ color: 'rgba(255,255,255,0.85)' }}>License #51001</span></span>
              </div>
              {/* CTAs */}
              <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
                <a href="/book?go=1" data-testid="service-hero-book" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR ONLINE</a>
                <a href="tel:+17605435733" data-testid="service-hero-call" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>Call (760) 543-5733</a>
              </div>
              {/* Tech note */}
              <p style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 20 }}>Andrei — Licensed CA Appliance Technician, 10+ years</p>
              {/* Divider + stats row */}
              <div style={{ width: 48, height: 2, background: 'rgba(255,87,34,0.40)', margin: '20px 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {[
                  { value: '10+', label: 'Years' },
                  { value: '180-Day', label: 'Warranty' },
                  { value: 'Same-Day', label: 'Service' },
                ].map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)', margin: '0 20px' }} />}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#FFFFFF' }}>{stat.value}</span>
                      <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ HOW IT WORKS ═══ */}
      {!hideHowItWorks && (
      <section data-testid="how-it-works" style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>THE PROCESS</div>
          <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 48 }}>Simple. Fast. Professional.</h2>
          <div className="service-how-grid grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', icon: <CalendarCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'Book Online', text: 'Schedule same-day or next-day at your convenience.' },
              { num: '02', icon: <Search size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Diagnose', text: '$60 diagnostic visit — applied to repair if you proceed.' },
              { num: '03', icon: <ClipboardCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'You Approve', text: 'Upfront estimate before any work begins. No surprises.' },
              { num: '04', icon: <Wrench size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Fix It', text: 'Professional repair with 180-day warranty on parts and labor.' },
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
              { n: 1, t: 'Book Online or Call', d: `Schedule your ${serviceWord.toLowerCase()} at a time that works. Same-day and next-day available.` },
              { n: 2, t: 'Diagnostic Visit', d: `Licensed technician arrives on time, inspects your ${appliance.toLowerCase()}, identifies the problem. $60 fee applies.` },
              { n: 3, t: 'Upfront Quote', d: 'Clear written estimate before work begins. $60 diagnostic credited if you proceed.' },
              { n: 4, t: `Professional ${serviceWord}`, d: 'Issue fixed with quality parts. Most jobs same day. 180-day warranty included.' },
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

      {/* ═══ COMMON PROBLEMS ═══ */}
      {commonProblems.length > 0 && (
        <section data-testid="common-problems" id="issues" style={{ background: '#F8F5F0', padding: '70px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>WHAT WE FIX</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 32 }}>Common {appliance} Problems</h2>
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

      {/* ═══ REPAIR VS REPLACE ═══ */}
      {repairVsReplace && (
        <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>EXPERT ADVICE</div>
            <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 12 }}>Repair vs. Replace?</h2>
            <p style={{ ...S.body, marginBottom: 28 }}>{repairVsReplace.intro}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {repairVsReplace.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, background: item.action === 'repair' ? 'rgba(255,87,34,0.10)' : 'rgba(74,85,104,0.10)' }}>
                    {item.action === 'repair' ? <Check size={14} style={{ color: '#FF5722' }} /> : <X size={14} style={{ color: '#4A5568' }} />}
                  </div>
                  <div>
                    <div style={{ fontFamily: S.font, fontWeight: item.action === 'repair' ? 700 : 500, fontSize: 15, color: item.action === 'repair' ? '#0D1B2A' : '#4A5568' }}>{item.condition}</div>
                    <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', marginTop: 4 }}>{item.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PRICING ═══ */}
      {SERVICE_PRICING[appliance] && (
        <section data-testid="pricing-section" style={{ background: '#F8F5F0', padding: '40px 20px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ color: '#FF5722', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Montserrat, sans-serif' }}>PRICING</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 26, color: '#0D1B2A', marginBottom: 6 }}>
              {appliance} Repair Cost in San Francisco
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 20 }}>
              Written estimate before any work begins. $60 diagnostic applied to repair cost.
            </p>
            <div style={{ background: '#fff', borderRadius: 6, padding: '20px 24px', border: '1px solid #e5e7eb', marginBottom: 12 }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#0D1B2A', lineHeight: 1.9, margin: '0 0 10px' }}>
                <strong>Starting from ${SERVICE_PRICING[appliance].from}</strong> after $60 diagnostic fee.
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

      {/* ═══ FAQ ═══ */}
      {faqData?.length > 0 && <FAQAccordion faqs={faqData} background="#FFFFFF" testIdPrefix="faq" />}

      {/* ═══ BRANDS ═══ */}
      <BrandsGrid testId="brands-section" />

      {/* ═══ RELATED SERVICES ═══ */}
      {autoRelatedLinks?.length > 0 && (
        <section style={{ background: '#FFFFFF', padding: '70px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, marginBottom: 10 }}>ALSO WE FIX</div>
            <h2 style={{ ...S.h2, fontSize: 32, color: '#0D1B2A', marginBottom: 28 }}>Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
              {autoRelatedLinks.map((link, i) => (
                <a key={i} href={link.href} data-testid={`related-service-${i}`} style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, textDecoration: 'none', transition: 'border-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#FF5722'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                  <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{link.label}</div>
                  {link.desc && <p style={{ fontFamily: S.font, fontSize: 12, color: '#4A5568', lineHeight: 1.5 }}>{link.desc}</p>}
                  <div style={{ marginTop: 'auto', paddingTop: 14 }}>
                    <span className="related-svc-btn" style={{ fontFamily: S.font, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 16px', background: '#0D1B2A', color: '#fff', borderRadius: 3, display: 'inline-block', transition: 'background 0.2s', whiteSpace: 'nowrap' }}>Learn More</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SERVICE AREAS ═══ */}
      {!isCity && !isBrand && !isCommercial && (() => {
        const CITY_SERVICE_SLUGS = ['san-francisco','daly-city','south-san-francisco','san-bruno','pacifica','millbrae','mill-valley','san-rafael','sausalito','novato','corte-madera','tiburon','belvedere','larkspur','greenbrae','ross','fairfax','san-anselmo'];
        const CITY_SERVICE_SVCS = ['refrigerator','washer','dryer','dishwasher','oven','wine-cooler','ice-maker'];
        const svcSlug = appliance ? appliance.toLowerCase().replace(/\s+/g, '-').replace(/-appliance$/, '') : '';
        const hasCityServiceRoutes = CITY_SERVICE_SVCS.includes(svcSlug);
        return (
          <section style={{ background: '#F8F5F0', padding: '60px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ ...S.eyebrow, marginBottom: 10 }}>COVERAGE</div>
              <h2 style={{ ...S.h2, fontSize: 30, color: '#0D1B2A', marginBottom: 10 }}>Service Areas for {appliance} {serviceWord}</h2>
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>We serve San Francisco, Peninsula &amp; North Bay / Marin County</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#4A5568', marginBottom: 16, lineHeight: 1.7 }}>We provide {appliance.toLowerCase()} {serviceWord.toLowerCase()} throughout San Francisco, Peninsula, and Marin County — including Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara, Mill Valley, San Rafael, Sausalito, Novato, Corte Madera, Larkspur, Greenbrae, Tiburon, Fairfax, San Anselmo, and Ross. Same-day and next-day appointments available across all service areas.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-start' }}>
                {['San Francisco','Daly City','South San Francisco','Colma','Brisbane','San Bruno','Millbrae','Pacifica','Montara','Sausalito','Mill Valley','Tiburon','Belvedere','Corte Madera','San Rafael','Larkspur','Greenbrae','Novato','Ross','Fairfax','San Anselmo'].map(city => {
                  const slug = city.toLowerCase().replace(/\s+/g, '-');
                  const href = hasCityServiceRoutes && CITY_SERVICE_SLUGS.includes(slug) ? `/${slug}-${svcSlug}-repair` : `/${slug}-appliance-repair`;
                  return (
                    <Link key={city} to={href} style={{ fontFamily: S.font, fontWeight: 500, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20, padding: '7px 16px', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'all 0.15s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0D1B2A'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}>
                      {city}
                    </Link>
                  );
                })}
              </div>
              <p style={{ marginTop: 20 }}>
                <Link to="/service-areas" style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', transition: 'text-decoration 0.2s' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all service cities &rarr;</Link>
              </p>
            </div>
          </section>
        );
      })()}

      {/* ═══ BY CITY CROSS-LINKS ═══ */}
      {!isCity && !isBrand && !isCommercial && !isMaintenance && (() => {
        const svcSlug = appliance ? appliance.toLowerCase().replace(/\s+/g, '-').replace(/-appliance$/, '') : '';
        const cities = SERVICE_CITY_LINKS[svcSlug] || [];
        if (cities.length === 0) return null;
        return (
          <section style={{ background: '#FFFFFF', padding: '60px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ ...S.eyebrow, marginBottom: 10 }}>LOCAL SERVICE</div>
              <h2 style={{ ...S.h2, fontSize: 30, color: '#0D1B2A', marginBottom: 10 }}>{appliance} Repair by City</h2>
              <p style={{ fontFamily: S.font, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>Same-day {appliance.toLowerCase()} repair available in these cities:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {cities.map(citySlug => (
                  <Link key={citySlug} to={`/${citySlug}-${svcSlug}-repair`} data-testid={`city-service-link-${citySlug}`} style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 3, padding: '10px 18px', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.background = '#F8F5F0'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)'; }}>
                    <MapPin size={13} /> {CITY_DISPLAY_NAMES[citySlug]} {appliance} Repair
                  </Link>
                ))}
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
              <h2 style={{ ...S.h2, fontSize: 28, color: '#0D1B2A', marginBottom: 16 }}>Why {cityName} Residents Call FixitBay</h2>
              <div style={{ ...S.body }}>
                {cd ? (
                  <>
                    <p style={{ marginBottom: 12 }}>We serve all of {cityName} including {cd.neighborhoods.slice(0, 5).join(', ')}. Typical response time: {cd.driveTime}.</p>
                    <p style={{ marginBottom: 12 }}>{cityName} homes include {cd.housingType.toLowerCase()}. {cd.localTip}</p>
                    {cd.nearbyDescription && <p style={{ marginBottom: 12 }}>{cd.nearbyDescription}</p>}
                    <p><strong>ZIP codes:</strong> {cd.zipCodes.join(', ')}</p>
                  </>
                ) : (
                  <p>We provide fast appliance repair across {cityName}. Most repairs completed same-day.</p>
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
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 999,
            background: '#FF5722', color: '#FFFFFF',
            fontFamily: S.font, fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '16px 24px', borderRadius: 4,
            boxShadow: '0 4px 20px rgba(255,87,34,0.45)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FF7043'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <CalendarCheck size={16} /> BOOK REPAIR
        </a>
      )}
    </div>
  );
};

export default ApplianceRepairPageNew;

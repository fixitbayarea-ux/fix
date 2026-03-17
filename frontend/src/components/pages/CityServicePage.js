import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

// List of valid services
const SERVICES = ['refrigerator', 'washer', 'dryer', 'dishwasher', 
  'oven', 'wine-cooler', 'ice-maker', 'cooktop', 'range', 'freezer'];

// City+Service combination page - renders service-specific content for a city
const CityServicePage = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Parse city and service from URL pathname (e.g., /daly-city-refrigerator-repair)
  const pathname = location.pathname;
  
  let serviceSlug = '';
  let citySlug = '';
  
  for (const svc of SERVICES) {
    const suffix = `-${svc}-repair`;
    if (pathname.endsWith(suffix)) {
      serviceSlug = svc;
      citySlug = pathname.replace(/^\//, '').replace(suffix, '');
      break;
    }
  }
  
  // Convert slug to display name with null check
  const toDisplayName = (slug) => slug
    ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : '';
  
  // Redirect if we can't parse the URL
  if (!citySlug || !serviceSlug) {
    return <Navigate to="/" replace />;
  }
  
  const cityName = toDisplayName(citySlug);
  const serviceName = toDisplayName(serviceSlug);
  
  // Service-specific data
  const serviceData = {
    'refrigerator': {
      problems: [
        { title: "Not Cooling", description: "Refrigerator warm, not maintaining temperature, or food spoiling." },
        { title: "Water Leaking", description: "Water pooling under fridge, dripping inside, or ice buildup." },
        { title: "Ice Maker Issues", description: "Not making ice, ice dispenser jammed, or slow production." },
        { title: "Strange Noises", description: "Clicking, buzzing, humming, or grinding sounds from fridge." },
        { title: "Freezer Not Freezing", description: "Freezer section warm, ice melting, or frost buildup." },
        { title: "Running Constantly", description: "Compressor won't stop, high energy bills, or overheating." },
      ],
      heroImage: "/images/technicians/fridge-tech.jpg",
      heroImageAlt: `FixitBay technician repairing a refrigerator in ${cityName}`,
    },
    'washer': {
      problems: [
        { title: "Won't Spin", description: "Washer not spinning, clothes still wet after cycle." },
        { title: "Won't Drain", description: "Water stays in drum, not draining properly." },
        { title: "Leaking Water", description: "Water leaking from washer, puddles on floor." },
        { title: "Won't Start", description: "No power, won't turn on, or unresponsive controls." },
        { title: "Loud Noises", description: "Banging, grinding, or excessive vibration during cycle." },
        { title: "Not Filling", description: "Water not entering drum, slow fill, or no water." },
      ],
      heroImage: "/images/technicians/washer-tech.jpg",
      heroImageAlt: `FixitBay technician repairing a washer in ${cityName}`,
    },
    'dryer': {
      problems: [
        { title: "Not Heating", description: "Dryer runs but clothes stay wet, no heat output." },
        { title: "Won't Start", description: "No power, won't turn on, or door switch issues." },
        { title: "Takes Too Long", description: "Extended dry times, clothes still damp after cycle." },
        { title: "Making Noise", description: "Squeaking, thumping, or grinding during operation." },
        { title: "Overheating", description: "Gets too hot, burns clothes, or shuts off mid-cycle." },
        { title: "Won't Tumble", description: "Drum not spinning, motor runs but no movement." },
      ],
      heroImage: "/images/technicians/dryer-tech.jpg",
      heroImageAlt: `FixitBay technician repairing a dryer in ${cityName}`,
    },
    'dishwasher': {
      problems: [
        { title: "Not Cleaning", description: "Dishes still dirty, food residue, or cloudy glasses." },
        { title: "Won't Drain", description: "Standing water in bottom, not draining properly." },
        { title: "Leaking Water", description: "Water leaking from door, under unit, or from hoses." },
        { title: "Won't Start", description: "No power, unresponsive controls, or won't begin cycle." },
        { title: "Not Drying", description: "Dishes wet after cycle, condensation issues." },
        { title: "Making Noise", description: "Grinding, humming, or unusual sounds during operation." },
      ],
      heroImage: "/images/technicians/dishwasher-tech.jpg",
      heroImageAlt: `FixitBay technician repairing a dishwasher in ${cityName}`,
    },
    'oven': {
      problems: [
        { title: "Not Heating", description: "Oven won't heat up, uneven cooking, or temperature issues." },
        { title: "Burners Not Working", description: "Gas burners won't light or electric elements not heating." },
        { title: "Temperature Inaccurate", description: "Runs too hot or cold, food burns or undercooks." },
        { title: "Door Issues", description: "Door won't close, seal broken, or latch problems." },
        { title: "Control Problems", description: "Display not working, timer issues, or unresponsive buttons." },
        { title: "Self-Clean Issues", description: "Self-clean cycle not working or door locked after clean." },
      ],
      heroImage: "/images/technicians/oven-tech.jpg",
      heroImageAlt: `FixitBay technician repairing an oven in ${cityName}`,
    },
    'ice-maker': {
      problems: [
        { title: "Not Making Ice", description: "No ice production, ice maker stopped working." },
        { title: "Water Leaking", description: "Water leaks around ice maker or dispenser." },
        { title: "Ice Tastes Bad", description: "Ice has strange taste or smell." },
        { title: "Ice Maker Jammed", description: "Ice stuck, cubes clumped together." },
        { title: "Dispenser Not Working", description: "Ice won't dispense or mechanical jam." },
        { title: "Small Ice Cubes", description: "Ice cubes too small or misshapen." },
      ],
      heroImage: "/images/technicians/ice-maker-tech.jpg",
      heroImageAlt: `FixitBay technician repairing an ice maker in ${cityName}`,
    },
    'wine-cooler': {
      problems: [
        { title: "Not Cooling", description: "Wine cooler warm, not maintaining temperature." },
        { title: "Temperature Fluctuations", description: "Inconsistent temperature, wine at wrong temp." },
        { title: "Making Noise", description: "Loud humming, clicking, or vibration." },
        { title: "Compressor Issues", description: "Compressor not running or cycling constantly." },
        { title: "Door Seal Problems", description: "Door not sealing, cold air escaping." },
        { title: "Light Not Working", description: "Interior light burned out or flickering." },
      ],
      heroImage: "/images/technicians/wine-cooler-tech.jpg",
      heroImageAlt: `FixitBay technician repairing a wine cooler in ${cityName}`,
    },
  };
  
  const data = serviceData[serviceSlug] || serviceData['refrigerator'];
  
  const faqData = [
    {
      question: `How much does ${serviceName.toLowerCase()} repair cost in ${cityName}?`,
      answer: `${serviceName} repair in ${cityName} typically costs $150–$350 depending on the issue. We charge a $60 diagnostic fee that's fully applied to your repair cost. Our technicians provide upfront pricing before any work begins.`
    },
    {
      question: `Do you offer same-day ${serviceName.toLowerCase()} repair in ${cityName}?`,
      answer: `Yes! We offer same-day and next-day ${serviceName.toLowerCase()} repair service throughout ${cityName}. Call (760) 543-5733 in the morning for same-day availability.`
    },
    {
      question: `What ${serviceName.toLowerCase()} brands do you service in ${cityName}?`,
      answer: `We service all major ${serviceName.toLowerCase()} brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, and more.`
    },
    {
      question: `Is your ${serviceName.toLowerCase()} repair covered by warranty?`,
      answer: `Yes! Every ${serviceName.toLowerCase()} repair includes our comprehensive 180-day warranty on parts and labor. If the same issue returns within 180 days, we'll fix it at no charge.`
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} Repair ${cityName}`,
    "serviceType": `${serviceName} Repair`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "+17605435733"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    }
  };

  const pageTitle = `${serviceName} Repair ${cityName} | Same-Day | FixitBay`;
  const metaDescription = `Professional ${serviceName.toLowerCase()} repair in ${cityName}. $60 diagnostic applied to repair. Same-day service. 180-day warranty. Licensed & insured.`;

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance={serviceName}
        pageSlug={`${citySlug}-${serviceSlug}-repair`}
        pageTitle={pageTitle}
        metaDescription={metaDescription}
        heroTitle={<>{serviceName} Repair<br />{cityName}</>}
        heroSubtitle="Same-Day Service Available"
        techImage={data.heroImage}
        techImageAlt={data.heroImageAlt}
        issues={data.problems.slice(0, 6).map(p => ({ icon: '🔧', label: p.title }))}
        faqs={faqData}
        relatedLinks={[
          { href: `/${citySlug}-appliance-repair`, label: `${cityName} Appliance Repair`, desc: 'All appliances' },
          { href: `/${serviceSlug}-repair`, label: `${serviceName} Repair`, desc: 'All locations' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance={serviceName}
      customH1={`${serviceName} Repair in ${cityName}`}
      cmsSlug={`${citySlug}-${serviceSlug}-repair`}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      heroImage={data.heroImage}
      heroImageAlt={data.heroImageAlt}
      commonProblems={data.problems}
      faqData={faqData}
      serviceSchema={serviceSchema}
      serviceDescription={{
        title: `Expert ${serviceName} Repair in ${cityName}`,
        paragraphs: [
          <>FixitBay provides professional {serviceName.toLowerCase()} repair in {cityName} with same-day and next-day service. Our licensed technicians arrive with common replacement parts stocked for same-visit repairs. We charge a transparent <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost.</>,
          <>Every {serviceName.toLowerCase()} repair in {cityName} includes our comprehensive <strong>180-day warranty</strong> on parts and labor. We service all major brands and provide upfront pricing before any work begins. Call <a href="tel:+17605435733">(760) 543-5733</a> or book online for fast {serviceName.toLowerCase()} repair service.</>,
        ]
      }}
      relatedLinks={[
        { href: `/${citySlug}-appliance-repair`, label: `${cityName} Appliance Repair`, desc: 'All appliance services' },
        { href: `/${serviceSlug}-repair`, label: `${serviceName} Repair SF`, desc: 'All Bay Area locations' },
        { href: '/service-areas', label: 'Service Areas', desc: 'All 22 cities we serve' },
      ]}
    />
  );
};

export default CityServicePage;

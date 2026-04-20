import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

// List of valid services
const SERVICES = ['refrigerator', 'washer', 'dryer', 'dishwasher', 
  'oven', 'wine-cooler', 'ice-maker', 'cooktop', 'range', 'freezer'];

// City-specific "Serving [City] Customers" section data — expandable
const CITY_SERVING_DATA = {
  'daly-city': {
    neighborhoods: ['Westlake', 'Serramonte', 'Crocker Amazon'],
    note: "Daly City's coastal proximity means appliances often deal with salt air and humidity, which accelerates wear on seals, coils, and electrical connections."
  },
  'greenbrae': {
    neighborhoods: ['Kentfield', 'Larkspur Landing'],
    note: "Marin's foggy mornings and warm afternoons create temperature cycling that stresses refrigerator compressors and causes condensation issues in dryers and freezers."
  },
  'san-francisco': {
    neighborhoods: ['SOMA', 'Mission', 'Castro', 'Sunset', 'Richmond'],
    note: "SF's Victorian-era homes often have older electrical panels that require careful handling when servicing modern high-efficiency appliances."
  },
};

// City-specific local context for rich content
const CITY_CONTEXT = {
  'san-francisco': {
    region: 'San Francisco',
    neighborhoods: 'Sunset, Richmond, Mission, Noe Valley, Marina, Pacific Heights, SoMa, Castro, North Beach, Bernal Heights',
    localFactor: 'San Francisco\'s Victorian and Edwardian homes often have compact kitchens with built-in appliances that require experienced technicians. Our team navigates tight spaces, steep driveways, and multi-unit buildings daily—arriving with the right tools and parts for first-visit repairs.',
    features: 'dense urban housing, Victorian homes, steep hills, fog-belt climate'
  },
  'daly-city': {
    region: 'Peninsula',
    neighborhoods: 'Westlake, Serramonte, Top of the Hill, St. Francis Heights',
    localFactor: 'Daly City\'s coastal fog and humidity create unique challenges for appliances. Refrigerator coils collect moisture faster, dryer vents need more frequent cleaning, and gas igniters can corrode more quickly than in drier climates.',
    features: 'fog-belt climate, dense housing, many multi-unit buildings'
  },
  'south-san-francisco': {
    region: 'Peninsula',
    neighborhoods: 'Downtown SSF, Sunshine Gardens, Sign Hill, Westborough',
    localFactor: 'South San Francisco homes range from historic Craftsman bungalows to modern developments. Our technicians are experienced with appliances in both older homes with limited kitchen space and newer builds with high-end integrated appliances.',
    features: 'mix of old and new homes, proximity to SFO, industrial heritage'
  },
  'san-bruno': {
    region: 'Peninsula',
    neighborhoods: 'Downtown, Crestmoor, Mills Park, Rollingwood',
    localFactor: 'San Bruno\'s location near SFO means many busy professionals need fast, reliable appliance repair. We offer flexible scheduling and fast scheduling to accommodate work schedules.',
    features: 'near SFO airport, suburban neighborhoods, Tanforan shopping area'
  },
  'pacifica': {
    region: 'Peninsula',
    neighborhoods: 'Linda Mar, Sharp Park, Rockaway Beach, Pedro Point',
    localFactor: 'Pacifica\'s oceanfront location exposes appliances to salt air and high humidity. We see accelerated corrosion on refrigerator coils, washer drums, and dryer heating elements. Our technicians come prepared with rust-resistant parts.',
    features: 'coastal climate, salt air exposure, beach community'
  },
  'millbrae': {
    region: 'Peninsula',
    neighborhoods: 'Downtown, Meadows, Mills Estate, Green Hills',
    localFactor: 'Millbrae homeowners value convenience with BART and Caltrain nearby. We offer flexible appointment windows and typically arrive within 60-90 minutes of booking.',
    features: 'transit hub, suburban homes, family neighborhoods'
  },
  'mill-valley': {
    region: 'Marin',
    neighborhoods: 'Downtown, Tamalpais Valley, Alto, Homestead Valley, Blithedale Canyon',
    localFactor: 'Mill Valley\'s hillside homes and canyon properties often have limited access and narrow kitchens. Our technicians are experienced navigating challenging driveways and working in compact spaces. We also specialize in the high-end appliances common in Mill Valley—Sub-Zero, Wolf, Thermador, and Miele.',
    features: 'hillside homes, luxury appliances, narrow roads, redwood setting'
  },
  'san-rafael': {
    region: 'Marin',
    neighborhoods: 'Terra Linda, Dominican, Downtown, Canal District, Gerstle Park, Sun Valley',
    localFactor: 'San Rafael is Marin County\'s largest city with diverse housing—from Terra Linda tract homes to downtown Victorians to Canal District apartments. Our technicians are experienced with all building types and appliance configurations.',
    features: 'Marin County seat, diverse housing stock, mixed neighborhoods'
  },
  'sausalito': {
    region: 'Marin',
    neighborhoods: 'Downtown, Marinship, Hurricane Gulch, Spring Street',
    localFactor: 'Sausalito\'s waterfront location and hillside homes present unique challenges. We service houseboats, hillside properties with limited parking, and homes with premium appliances. Salt air exposure means we check for corrosion on every visit.',
    features: 'waterfront, houseboats, hillside properties, tourist area'
  },
  'novato': {
    region: 'Marin',
    neighborhoods: 'Downtown, Hamilton, Ignacio, Bel Marin Keys, San Marin, Vintage Oaks',
    localFactor: 'Novato is Marin\'s northernmost city with a mix of suburban neighborhoods and the Hamilton community. We cover all of Novato with no extra travel charges, offering fast scheduling throughout the area.',
    features: 'North Marin, suburban, Hamilton former Air Force base'
  },
  'tiburon': {
    region: 'Marin',
    neighborhoods: 'Downtown, Tiburon Peninsula, Paradise Cay',
    localFactor: 'Tiburon homeowners expect premium service for premium appliances. Our factory-trained technicians specialize in Sub-Zero, Wolf, Thermador, Miele, and other luxury brands common in waterfront and hillside estates. We understand gated community access protocols.',
    features: 'luxury homes, waterfront, high-end appliances, gated communities'
  },
  'belvedere': {
    region: 'Marin',
    neighborhoods: 'Belvedere Island, West Shore Road, San Rafael Avenue',
    localFactor: 'Belvedere\'s exclusive island community features some of the Bay Area\'s finest homes with matching high-end appliances. We provide white-glove service with appointment flexibility to accommodate homeowners\' schedules.',
    features: 'island community, luxury estates, exclusive neighborhood'
  },
  'corte-madera': {
    region: 'Marin',
    neighborhoods: 'Downtown, Christmas Tree Hill, Madera Gardens',
    localFactor: 'Corte Madera offers convenient access between Mill Valley and San Rafael. We service homes near Town Center and throughout residential neighborhoods with fast scheduling.',
    features: 'central Marin location, Town Center shopping, family-friendly'
  },
  'larkspur': {
    region: 'Marin',
    neighborhoods: 'Downtown, Greenbrae, Bon Air',
    localFactor: 'Larkspur\'s charming downtown and surrounding neighborhoods feature a mix of historic homes and newer developments. We\'re experienced with appliances in both Victorian-era kitchens and modern open-concept layouts.',
    features: 'historic downtown, Larkspur Landing ferry, walkable community'
  },
  'greenbrae': {
    region: 'Marin',
    neighborhoods: 'Greenbrae, Bon Air Center area',
    localFactor: 'Greenbrae homeowners appreciate efficient service in this quiet residential area. We offer morning and afternoon appointment windows with reliable arrival times.',
    features: 'residential, near Larkspur, family neighborhoods'
  },
  'ross': {
    region: 'Marin',
    neighborhoods: 'Ross, Shady Lane, Upper Road',
    localFactor: 'Ross is one of Marin\'s most affluent communities with estate homes featuring high-end integrated appliances. Our technicians are trained on luxury brands and understand the discretion expected in this exclusive neighborhood.',
    features: 'affluent community, estate homes, privacy-focused'
  },
  'fairfax': {
    region: 'Marin',
    neighborhoods: 'Downtown, Manor, Cascade Canyon',
    localFactor: 'Fairfax\'s artistic community values local businesses and quality service. We provide personalized repair service with honest assessments and fair pricing.',
    features: 'artistic community, small-town feel, canyon homes'
  },
  'san-anselmo': {
    region: 'Marin',
    neighborhoods: 'Downtown, Sleepy Hollow, Seminary',
    localFactor: 'San Anselmo\'s charming downtown and hillside homes require technicians who know the area. We navigate Sleepy Hollow\'s winding roads and service appliances in homes of all styles.',
    features: 'antique shops, hillside homes, family community'
  }
};

// Service-specific pricing data
const SERVICE_PRICING = {
  'refrigerator': { range: '$250–$650', common: 'thermostat from $295, evaporator fan from $285, ice maker from $295' },
  'washer': { range: '$150–$350', common: 'pump $120–$180, motor $200–$350, control board $180–$280' },
  'dryer': { range: '$120–$300', common: 'heating element $100–$150, belt $80–$120, thermal fuse $70–$100' },
  'dishwasher': { range: '$140–$320', common: 'pump $150–$220, control board $180–$280, door latch $80–$120' },
  'oven': { range: '$250–$650', common: 'igniter $120–$180, heating element $140–$220, thermostat $150–$250' },
  'wine-cooler': { range: '$150–$350', common: 'compressor $250–$400, thermostat $120–$180, fan motor $100–$150' },
  'ice-maker': { range: '$150–$280', common: 'water inlet valve $100–$150, module $120–$200, auger motor $80–$150' },
  'cooktop': { range: '$140–$350', common: 'igniter $100–$160, element $120–$200, control switch $140–$220' },
  'range': { range: '$160–$420', common: 'igniter $120–$180, burner $100–$180, control board $180–$300' },
  'freezer': { range: '$150–$380', common: 'compressor $350–$500, thermostat $120–$180, defrost timer $90–$140' }
};

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
  
  // Get city context or use default
  const cityContext = CITY_CONTEXT[citySlug] || {
    region: 'Bay Area',
    neighborhoods: 'all neighborhoods',
    localFactor: `Our technicians serve all of ${cityName} with same- and next-day availability. We're familiar with the area and arrive prepared with common replacement parts.`,
    features: 'residential areas'
  };
  
  // Get service pricing
  const pricing = SERVICE_PRICING[serviceSlug] || SERVICE_PRICING['refrigerator'];
  
  // Service-specific data
  const serviceData = {
    'refrigerator': {
      problems: [
        { title: "Not Cooling", description: "Refrigerator warm, not maintaining temperature, or food spoiling quickly." },
        { title: "Water Leaking", description: "Water pooling under fridge, dripping inside, or ice buildup in freezer." },
        { title: "Ice Maker Issues", description: "Not making ice, ice dispenser jammed, or slow ice production." },
        { title: "Strange Noises", description: "Clicking, buzzing, humming, or grinding sounds from refrigerator." },
        { title: "Freezer Not Freezing", description: "Freezer section warm, ice melting, or excessive frost buildup." },
        { title: "Running Constantly", description: "Compressor won't stop, high energy bills, or unit overheating." },
      ],
      heroImage: "/images/technicians/fridge-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a refrigerator in ${cityName}`,
    },
    'washer': {
      problems: [
        { title: "Won't Spin", description: "Washer not spinning, clothes still wet after cycle ends." },
        { title: "Won't Drain", description: "Water stays in drum, not draining properly after wash." },
        { title: "Leaking Water", description: "Water leaking from washer, puddles forming on floor." },
        { title: "Won't Start", description: "No power, won't turn on, or controls unresponsive." },
        { title: "Loud Noises", description: "Banging, grinding, or excessive vibration during cycle." },
        { title: "Not Filling", description: "Water not entering drum, slow fill, or no water flow." },
      ],
      heroImage: "/images/technicians/washer-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a washer in ${cityName}`,
    },
    'dryer': {
      problems: [
        { title: "Not Heating", description: "Dryer runs but clothes stay wet, no heat being produced." },
        { title: "Won't Start", description: "No power, won't turn on, or door switch issues." },
        { title: "Takes Too Long", description: "Extended dry times, clothes still damp after full cycle." },
        { title: "Making Noise", description: "Squeaking, thumping, or grinding sounds during operation." },
        { title: "Overheating", description: "Gets too hot, burns clothes, or shuts off mid-cycle." },
        { title: "Won't Tumble", description: "Drum not spinning, motor runs but no drum movement." },
      ],
      heroImage: "/images/technicians/dryer-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a dryer in ${cityName}`,
    },
    'dishwasher': {
      problems: [
        { title: "Not Cleaning", description: "Dishes still dirty after cycle, food residue remaining." },
        { title: "Won't Drain", description: "Standing water in bottom after cycle completes." },
        { title: "Leaking Water", description: "Water leaking from door, under unit, or from hoses." },
        { title: "Won't Start", description: "No power, unresponsive controls, or won't begin cycle." },
        { title: "Not Drying", description: "Dishes wet after cycle, condensation issues persist." },
        { title: "Making Noise", description: "Grinding, humming, or unusual sounds during operation." },
      ],
      heroImage: "/images/technicians/dishwasher-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a dishwasher in ${cityName}`,
    },
    'oven': {
      problems: [
        { title: "Not Heating", description: "Oven won't heat up, uneven cooking, or temperature issues." },
        { title: "Burners Not Working", description: "Gas burners won't light or electric elements not heating." },
        { title: "Temperature Inaccurate", description: "Runs too hot or cold, food burns or undercooks." },
        { title: "Door Issues", description: "Door won't close properly, seal broken, or latch problems." },
        { title: "Control Problems", description: "Display not working, timer issues, or unresponsive buttons." },
        { title: "Self-Clean Issues", description: "Self-clean cycle not working or door locked after cleaning." },
      ],
      heroImage: "/images/technicians/oven-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing an oven in ${cityName}`,
    },
    'ice-maker': {
      problems: [
        { title: "Not Making Ice", description: "No ice production, ice maker has stopped working." },
        { title: "Water Leaking", description: "Water leaks around ice maker or water dispenser." },
        { title: "Ice Tastes Bad", description: "Ice has strange taste, smell, or discoloration." },
        { title: "Ice Maker Jammed", description: "Ice stuck together, cubes clumped, mechanism jammed." },
        { title: "Dispenser Not Working", description: "Ice won't dispense, mechanical jam in chute." },
        { title: "Small Ice Cubes", description: "Ice cubes too small, hollow, or misshapen." },
      ],
      heroImage: "/images/technicians/ice-maker-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing an ice maker in ${cityName}`,
    },
    'wine-cooler': {
      problems: [
        { title: "Not Cooling", description: "Wine cooler warm, not maintaining proper temperature." },
        { title: "Temperature Fluctuations", description: "Inconsistent temperature, wine stored at wrong temp." },
        { title: "Making Noise", description: "Loud humming, clicking, vibration during operation." },
        { title: "Compressor Issues", description: "Compressor not running or cycling on and off constantly." },
        { title: "Door Seal Problems", description: "Door not sealing properly, cold air escaping." },
        { title: "Light Not Working", description: "Interior light burned out, flickering, or not turning on." },
      ],
      heroImage: "/images/technicians/wine-cooler-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a wine cooler in ${cityName}`,
    },
    'cooktop': {
      problems: [
        { title: "Burner Won't Light", description: "Gas burner won't ignite, clicks but no flame." },
        { title: "Uneven Heat", description: "Hot spots, uneven cooking, flame too high or low." },
        { title: "Electric Element Out", description: "One or more electric elements not heating." },
        { title: "Igniter Clicking", description: "Constant clicking sound even when burner is off." },
        { title: "Gas Smell", description: "Smell of gas near cooktop when not in use." },
        { title: "Control Issues", description: "Knobs not working, touch controls unresponsive." },
      ],
      heroImage: "/images/technicians/cooktop-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a cooktop in ${cityName}`,
    },
    'range': {
      problems: [
        { title: "Oven Not Heating", description: "Oven cavity won't heat while burners work fine." },
        { title: "Burners Not Working", description: "Stovetop burners won't light or heat properly." },
        { title: "Temperature Problems", description: "Oven too hot, too cold, or inconsistent temperature." },
        { title: "Door Won't Close", description: "Range door misaligned, won't seal, or latch broken." },
        { title: "Display Issues", description: "Clock, timer, or temperature display not working." },
        { title: "Self-Clean Problems", description: "Self-clean function not working or door stuck." },
      ],
      heroImage: "/images/technicians/range-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a range in ${cityName}`,
    },
    'freezer': {
      problems: [
        { title: "Not Freezing", description: "Freezer warm, food thawing, not reaching temperature." },
        { title: "Frost Buildup", description: "Excessive frost or ice accumulation inside freezer." },
        { title: "Running Constantly", description: "Compressor runs non-stop, high energy consumption." },
        { title: "Making Noise", description: "Loud humming, clicking, or buzzing sounds." },
        { title: "Door Seal Issues", description: "Door not sealing, frost around edges, cold air escaping." },
        { title: "Temperature Fluctuations", description: "Temperature varying, items partially frozen." },
      ],
      heroImage: "/images/technicians/freezer-tech.jpg",
      heroImageAlt: `FixitBay LLC technician repairing a freezer in ${cityName}`,
    },
  };
  
  const data = serviceData[serviceSlug] || serviceData['refrigerator'];
  
  // Expanded FAQ data with pricing and local context
  const faqData = [
    {
      question: `How much does ${serviceName.toLowerCase()} repair cost in ${cityName}?`,
      answer: `${serviceName} repair in ${cityName} typically costs ${pricing.range} after our $80 diagnostic fee. Common repairs include: ${pricing.common}. The $80 diagnostic is fully applied to your repair cost when you proceed. We provide exact pricing before starting any work—no surprises.`
    },
    {
      question: `Do you offer quick ${serviceName.toLowerCase()} repair in ${cityName}?`,
      answer: `Yes! We offer fast ${serviceName.toLowerCase()} repair throughout ${cityName}, including ${cityContext.neighborhoods}. Call (760) 543-5733 before noon for fast scheduling, or book online for next-day appointments. Our technicians typically arrive within 2-4 hours of booking.`
    },
    {
      question: `What ${serviceName.toLowerCase()} brands do you service in ${cityName}?`,
      answer: `We service all major ${serviceName.toLowerCase()} brands in ${cityName}: Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Miele, JennAir, Electrolux, and more. Our technicians are factory-trained on both standard and luxury brands.`
    },
    {
      question: `Is ${serviceName.toLowerCase()} repair in ${cityName} covered by warranty?`,
      answer: `Absolutely! Every ${serviceName.toLowerCase()} repair in ${cityName} includes our comprehensive 180-day warranty on parts and labor. If the same issue returns within 180 days, we'll come back and fix it at no additional charge. This warranty covers all our work throughout the ${cityContext.region}.`
    },
    {
      question: `What areas of ${cityName} do you cover for ${serviceName.toLowerCase()} repair?`,
      answer: `We provide ${serviceName.toLowerCase()} repair service throughout all of ${cityName}, including ${cityContext.neighborhoods}. No extra travel fees anywhere in ${cityName}—same flat $80 diagnostic regardless of your neighborhood.`
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} Repair ${cityName}`,
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
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "description": `Professional ${serviceName.toLowerCase()} repair in ${cityName}. Fast scheduling, $80 diagnostic applied to repair, 180-day warranty.`
  };

  const pageTitle = `${serviceName} Repair in ${cityName} | FixitBay`;
  const metaDescription = `Licensed ${serviceName.toLowerCase()} repair in ${cityName}, CA. Same- & next-day appointments. $80 diagnostic applied to repair. 180-day warranty on parts and labor.`;

  // Rich service description with local context
  const serviceDescription = {
    title: `Expert ${serviceName} Repair in ${cityName}`,
    paragraphs: [
      <>FixitBay LLC provides professional {serviceName.toLowerCase()} repair throughout {cityName}, serving {cityContext.neighborhoods} with same- or next-day availability. Our licensed technicians arrive with common {serviceName.toLowerCase()} parts stocked—including thermostats, pumps, motors, and control boards—enabling us to complete most repairs during the first visit.</>,
      <><strong>Local expertise matters.</strong> {cityContext.localFactor}</>,
      <><strong>{serviceName} Repair Pricing in {cityName}:</strong> Most repairs cost {pricing.range} after the $80 diagnostic fee. Common repairs include: {pricing.common}. We provide exact pricing before starting any work, and the $80 diagnostic is fully applied to your repair cost.</>,
      <>Every {serviceName.toLowerCase()} repair in {cityName} includes our comprehensive <strong>180-day warranty</strong> on parts and labor. We service all major brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, and Thermador. Call <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a> for fast {serviceName.toLowerCase()} repair service in {cityName}.</>,
    ]
  };

  // Get city serving data for "Serving [City] Customers" section
  const servingData = CITY_SERVING_DATA[citySlug];
  const servingCity = servingData ? {
    name: cityName,
    neighborhoods: servingData.neighborhoods,
    note: servingData.note,
  } : null;

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance={serviceName}
        pageSlug={`${citySlug}-${serviceSlug}-repair`}
        pageTitle={pageTitle}
        metaDescription={metaDescription}
        heroTitle={<>{serviceName} Repair<br />{cityName}</>}
        heroSubtitle={`Fast Scheduling • ${pricing.range}`}
        heroDescription={`Serving ${cityContext.neighborhoods}. ${cityContext.localFactor.split('.')[0]}.`}
        techImage={data.heroImage}
        techImageAlt={data.heroImageAlt}
        issues={data.problems.slice(0, 6).map(p => ({ icon: '🔧', label: p.title }))}
        faqs={faqData}
        relatedLinks={[
          { href: `/${citySlug}-appliance-repair`, label: `${cityName} Appliance Repair`, desc: 'All appliances' },
          { href: `/${serviceSlug}-repair`, label: `${serviceName} Repair`, desc: 'All locations' },
          ...SERVICES.filter(s => s !== serviceSlug).slice(0, 2).map(s => ({
            href: `/${citySlug}-${s}-repair`,
            label: `${cityName} ${toDisplayName(s)} Repair`,
            desc: `${toDisplayName(s)} service`
          })),
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance={serviceName}
      customH1={`${serviceName} Repair in ${cityName}`}
      pricingCityName={cityName}
      heroDescription={`Serving ${cityContext.neighborhoods}. ${cityContext.localFactor.split('.')[0]}.`}
      cmsSlug={`${citySlug}-${serviceSlug}-repair`}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      heroImage={data.heroImage}
      heroImageAlt={data.heroImageAlt}
      commonProblems={data.problems}
      faqData={faqData}
      serviceSchema={serviceSchema}
      serviceDescription={serviceDescription}
      servingCity={servingCity}
      relatedLinks={[
        { href: `/${citySlug}-appliance-repair`, label: `${cityName} Appliance Repair`, desc: 'All appliance services' },
        { href: `/${serviceSlug}-repair`, label: `${serviceName} Repair SF`, desc: 'All Bay Area locations' },
        { href: '/service-areas', label: 'Service Areas', desc: 'All 22 cities we serve' },
        ...SERVICES.filter(s => s !== serviceSlug).slice(0, 3).map(s => ({
          href: `/${citySlug}-${s}-repair`,
          label: `${cityName} ${toDisplayName(s)} Repair`,
          desc: `${toDisplayName(s)} service in ${cityName}`
        })),
      ]}
    />
  );
};

export default CityServicePage;

import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../data/serviceContentData';

const WineRefrigeratorRepairStandalone = () => {
  const isMobile = useIsMobile();

  const commonProblems = [
    {
      title: "Not Cooling Properly",
      description: "Wine refrigerator failing to reach set temperature. We diagnose thermostat, compressor, and sealed system issues in Sub-Zero, Liebherr, Thermador, and Viking units."
    },
    {
      title: "Excessive Frost or Ice Buildup",
      description: "Frost forming inside the wine refrigerator compartment. Typically caused by defective defrost heaters, faulty door gaskets, or thermostat sensor drift."
    },
    {
      title: "Compressor Running Constantly",
      description: "Wine refrigerator compressor won't cycle off. We check condenser coils, relay switches, and refrigerant levels to restore proper cycling."
    },
    {
      title: "Door Gasket Deterioration",
      description: "Worn or cracked door seals allow warm air infiltration. We replace OEM gaskets for Sub-Zero, Viking, Thermador, and other premium brands."
    },
    {
      title: "Vibration and Noise",
      description: "Excessive vibration disturbs wine sediment and accelerates aging. We diagnose compressor mounts, fan motors, and leveling issues."
    },
    {
      title: "Control Panel Malfunction",
      description: "Digital display not responding, temperature settings resetting, or error codes. We repair electronic control boards and interface panels."
    }
  ];

  const faqData = [
    {
      question: "What brands of wine refrigerators do you repair?",
      answer: "We service all premium wine refrigerator brands including Sub-Zero, Liebherr, Thermador, Viking, Miele, Bosch, GE Monogram, KitchenAid, and Dacor. Our technicians are factory-trained on both built-in and freestanding wine refrigerator models with single-zone, dual-zone, and triple-zone temperature control."
    },
    {
      question: "How is a wine refrigerator different from a wine cooler?",
      answer: "Wine refrigerators use compressor-based cooling systems (like Sub-Zero and Liebherr) and maintain precise temperatures between 40-65\u00B0F. They handle larger collections (50-200+ bottles) and offer better humidity control. Wine coolers are often thermoelectric, best for smaller collections under 50 bottles. We repair both types across the SF Bay Area."
    },
    {
      question: "Can you repair built-in undercounter wine refrigerators?",
      answer: "Yes, built-in wine refrigerators are our specialty. We service undercounter units by Sub-Zero, Thermador, Viking, and Liebherr. Our technicians understand proper ventilation clearances, front-vent requirements, and custom panel integration. We work carefully around cabinetry and countertops."
    },
    {
      question: "My wine refrigerator temperature is fluctuating — is this an emergency?",
      answer: "Temperature fluctuations above 5\u00B0F from setpoint put your wine collection at risk. Cork drying, premature aging, and oxidation can occur within days. We offer priority scheduling for wine refrigerator emergencies across San Francisco, the Peninsula, and Marin County. Call immediately to protect your collection."
    },
    {
      question: "Do you offer maintenance service for wine refrigerators?",
      answer: "Yes. Annual maintenance includes condenser coil cleaning, gasket inspection, temperature calibration, humidity sensor testing, and vibration assessment. Regular service extends wine refrigerator lifespan by 3-5 years and prevents costly compressor failures. Visit our maintenance page for details."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wine Refrigerator Repair Bay Area",
    "serviceType": "Wine Refrigerator Repair",
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
      }
    },
    "areaServed": [
      "San Francisco", "Daly City", "South San Francisco", "San Bruno",
      "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
      "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
      "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
      "Fairfax", "San Anselmo", "Novato"
    ],
    "priceRange": "From $195"
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Wine Refrigerator"
        pageSlug="wine-refrigerator-repair"
        pageTitle="Wine Refrigerator Repair San Francisco & Bay Area | FixitBay"
        metaDescription="Professional wine refrigerator repair in San Francisco & Bay Area. Same-day service, 180-day warranty. We fix Sub-Zero, Liebherr, Thermador, Viking wine refrigerators."
        heroTitle={<>Wine Refrigerator<br />Repair. Bay Area.</>}
        heroImage="/images/technicians/wine-cooler-tech.png"
        heroImageAlt="FixitBay technician Andrei servicing a wine refrigerator"
        heroImagePosition="center 15%"
        techImage="/images/technicians/wine-cooler-tech.png"
        techImageAlt="FixitBay technician Andrei next to an open wine refrigerator"
        heroDescription="FixitBay LLC repairs all wine refrigerators in the Bay Area — built-in, freestanding, undercounter. Sub-Zero, Liebherr, Thermador, Viking, Miele. $60 diagnostic applied to repair. 180-day warranty."
        issues={[
          { icon: '\u{1F321}\uFE0F', label: 'Temp Wrong' },
          { icon: '\uD83D\uDD0A', label: 'Loud Noise' },
          { icon: '\uD83D\uDCA7', label: 'Leaking' },
          { icon: '\u2744\uFE0F', label: 'Frost Buildup' },
          { icon: '\u26A1', label: "Won't Start" },
          { icon: '\uD83D\uDCDF', label: 'Panel Error' },
        ]}
        faqs={faqData}
        pricingTable={SERVICE_CONTENT['Wine Cooler'].pricingTable}
        comparisonTable={SERVICE_CONTENT['Wine Cooler'].comparisonTable}
        symptomsChecklist={SERVICE_CONTENT['Wine Cooler'].symptomsChecklist}
        diagnosisSteps={SERVICE_CONTENT['Wine Cooler'].diagnosisSteps}
        relatedLinks={[
          { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Thermoelectric and smaller wine coolers' },
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Standard refrigerator issues' },
          { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Freezer not working or frost buildup' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Wine Refrigerator"
      heroImage="/images/technicians/wine-cooler-tech.png"
      heroImageAlt="FixitBay technician Andrei servicing a wine refrigerator"
      heroImagePosition="center 15%"
      heroDescription="FixitBay LLC repairs all wine refrigerators in the Bay Area — built-in undercounter units, freestanding models, and integrated panel-ready refrigerators. Sub-Zero, Liebherr, Thermador, Viking, Miele, Bosch. $60 diagnostic applied to repair. 180-day warranty."
      cmsSlug="wine-refrigerator-repair"
      pageTitle="Wine Refrigerator Repair San Francisco & Bay Area | FixitBay"
      metaDescription="Professional wine refrigerator repair in San Francisco & Bay Area. Same-day service, 180-day warranty. We fix Sub-Zero, Liebherr, Thermador, Viking wine refrigerators."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Expert Wine Refrigerator Repair Service",
        paragraphs: [
          <>Wine refrigerators are precision appliances — compressor-based cooling systems designed for large collections, precise temperature zones, and long-term wine storage. Unlike thermoelectric wine coolers, wine refrigerators (Sub-Zero, Liebherr, Thermador, Viking) use sealed refrigeration systems that require specialized diagnostic equipment. We charge a <strong>$60 diagnostic fee</strong> (applied to repair) and respond same-day for emergencies.</>,
          <>Our wine refrigerator repair process covers the full sealed system: compressor testing, condenser coil inspection, evaporator fan diagnosis, thermostat calibration, and electronic control board troubleshooting. We service both single-zone units (ideal for all-red or all-white collections) and dual/triple-zone models that maintain separate temperatures for reds (55-65&deg;F) and whites (45-55&deg;F).</>,
          <>Built-in undercounter wine refrigerators (common in San Francisco, Pacific Heights, and Marin County homes) require careful handling around custom cabinetry. Our technician Andrei has extensive experience with panel-ready units and front-ventilation clearances. We carry OEM parts for Sub-Zero, Liebherr, Thermador, and Viking. Every repair includes a <strong>180-day warranty</strong> on parts and labor.</>,
          <><strong>Looking for wine cooler repair instead?</strong> Visit our <a href="/wine-cooler-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>Wine Cooler Repair</a> page for thermoelectric and smaller wine cooler service.</>
        ]
      }}
      pricingTable={SERVICE_CONTENT['Wine Cooler'].pricingTable}
      comparisonTable={SERVICE_CONTENT['Wine Cooler'].comparisonTable}
      symptomsChecklist={SERVICE_CONTENT['Wine Cooler'].symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT['Wine Cooler'].diagnosisSteps}
      relatedLinks={[
        { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Thermoelectric and smaller wine coolers' },
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Standard refrigerator not cooling or leaking' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Freezer not working, frost buildup, or temp issues' },
      ]}
    />
  );
};

export default WineRefrigeratorRepairStandalone;

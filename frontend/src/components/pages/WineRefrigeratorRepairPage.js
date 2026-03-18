import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const WineRefrigeratorRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: "Temperature Fluctuations",
      description: "Inconsistent temperatures can damage wine. We repair faulty thermostats, sensors, and cooling systems."
    },
    {
      title: "Humidity Control Issues",
      description: "Wrong humidity levels affect cork integrity. We fix humidity controls and ventilation systems."
    },
    {
      title: "Vibration Problems",
      description: "Excessive vibrations disturb wine sediment. We repair or replace faulty compressors and mounting systems."
    },
    {
      title: "Door Seal and Gasket Issues",
      description: "Poor sealing compromises temperature and humidity. We replace door gaskets to maintain optimal storage."
    },
    {
      title: "Compressor Not Working",
      description: "Failed compressors stop cooling entirely. We diagnose and repair or replace compressor units."
    },
    {
      title: "Interior Light Problems",
      description: "UV-filtered lighting is crucial for wine storage. We repair lighting systems that won't turn on or stay on."
    }
  ];

  const faqData = [
    {
      question: "Do you repair all wine refrigerator and cooler brands?",
      answer: "Yes! We service all major wine refrigerator brands—Sub-Zero, Vintec, EuroCave, Wine Enthusiast, NewAir, Kalamera, Phiestina, EdgeStar, and more. Our technicians are trained on single-zone, dual-zone, and multi-zone wine coolers with separate temperature controls for red and white wines. We stock thermostats, door gaskets, and compressor parts for same-day repairs."
    },
    {
      question: "How quickly can you repair a wine refrigerator that's warming up?",
      answer: "We understand wine storage is time-critical to protect your collection from spoilage. We offer same-day emergency service in San Francisco, Peninsula, and Marin County. Most wine cooler repairs (thermostat, compressor, door seal) take 1-2 hours. Call us immediately to prevent wine damage from temperature fluctuations."
    },
    {
      question: "Can you repair built-in and freestanding wine refrigerators?",
      answer: "Absolutely! We service both freestanding wine coolers and built-in under-counter wine refrigerators. Our technicians understand custom cabinetry clearances, front-ventilation requirements, and proper spacing for built-in units. Whether your wine fridge is in the kitchen, wine cellar, or bar area, we'll repair it correctly."
    },
    {
      question: "Why is the temperature in my dual-zone wine cooler uneven?",
      answer: "Dual-zone wine coolers have separate cooling systems or dampers for each zone. Uneven temperatures are caused by faulty zone thermostats, broken damper controls, or failing fan motors. Our technicians diagnose which zone's components are malfunctioning and replace the thermostat, damper actuator, or fan to restore proper red wine (55-65°F) and white wine (45-55°F) zones."
    },
    {
      question: "Do you offer preventive maintenance for wine refrigerators?",
      answer: "Yes! Regular maintenance extends lifespan and prevents costly repairs that could damage your wine collection. Our maintenance service includes cleaning condenser coils, calibrating temperature controls, inspecting door gaskets for air leaks, checking UV lighting, and testing humidity sensors. Schedule annual maintenance to keep your wine cooler in optimal condition."
    }
  ];


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wine Cooler Repair San Francisco Bay Area",
    "serviceType": "Wine Cooler Repair",
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
        appliance="Wine Cooler"
        pageSlug="wine-refrigerator-repair"
        pageTitle="Wine Cooler Repair San Francisco | Same-Day | FixitBay"
        metaDescription="Specialized wine refrigerator repair in San Francisco. Temperature, humidity, compressor issues. Same-day service. 180-day warranty."
        heroTitle={<>Wine Cooler Repair<br />San Francisco &amp; Bay Area</>}
        heroImageAlt="wine cooler repair san francisco"
        heroDescription="FixitBay repairs all types of wine coolers and wine refrigerators in San Francisco — thermoelectric units, compressor-based systems, dual-zone wine fridges, and built-in wine refrigerators. Same-day service, from $195 after $60 diagnostic."
       
        issues={[
          { icon: '🌡️', label: 'Temp Wrong' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '💧', label: 'Leaking' },
          { icon: '❄️', label: 'Over Cooling' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '💡', label: 'Light Out' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Wine Cooler",
          intro: "Wine coolers protect an investment — your wine collection.",
          items: [
            { action: 'repair', condition: 'Temperature fluctuating but compressor runs', recommendation: 'Faulty thermostat or sensor costs $150–$250 to replace.' },
            { action: 'repair', condition: 'Door seal worn or not closing properly', recommendation: 'New gasket $80–$150 installed — restores seal and humidity.' },
            { action: 'replace', condition: 'Compressor failure on thermoelectric cooler', recommendation: 'Compact thermoelectric units ($200–$500 new). Repair may cost as much.' },
            { action: 'repair', condition: 'Compressor failure on premium built-in', recommendation: 'High-end units cost $2,000–$8,000+. Compressor repair ($400–$800) is worth it.' },
          ]
        }}
        relatedLinks={[
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling or temperature issues' },
          { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice or leaking' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Wine Cooler"
      heroImageAlt="wine cooler repair san francisco"
      heroDescription="FixitBay repairs all types of wine coolers and wine refrigerators in San Francisco — thermoelectric units, compressor-based systems, dual-zone wine fridges, and built-in wine refrigerators. Same-day service, from $195 after $60 diagnostic."
      cmsSlug="wine-cooler-repair"
      pageTitle="Wine Cooler Repair San Francisco & Bay Area | Same-Day | FixitBay"
      metaDescription="Specialized wine refrigerator repair in San Francisco. Temperature, humidity, compressor issues. Same-day service. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Specialized Wine Cooler Repair Service",
        paragraphs: [
          <>Wine refrigerators require precise temperature and humidity control to protect valuable wine collections. Our technicians specialize in diagnosing single-zone, dual-zone, and built-in wine coolers. We identify thermostat failures, compressor issues, humidity control problems, and vibration concerns. We charge a <strong>$60 diagnostic fee</strong> (waived with repair) and respond urgently to prevent wine damage from temperature fluctuations.</>,
          <>Our wine cooler repair process includes calibrating temperature controls, testing compressor performance, checking humidity sensors, inspecting door gaskets for proper sealing, and examining UV-filtered lighting systems. We understand the critical importance of maintaining optimal red wine (55-65°F) and white wine (45-55°F) storage temperatures. Most wine refrigerator repairs are completed same-day to minimize risk to your collection.</>,
          <>Whether your wine cooler has inconsistent temperatures, excessive vibration, or humidity problems, we'll restore proper function. We service all wine refrigerator brands including Sub-Zero, Vintec, EuroCave, Wine Enthusiast, and NewAir. Every wine cooler repair includes our <strong>180-day warranty</strong> on parts and labor, protecting your investment.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Wine Cooler",
        intro: "Wine coolers protect an investment — your wine collection. Here's how to make the right call.",
        items: [
          { action: 'repair', condition: 'Temperature fluctuating but compressor runs', recommendation: 'A faulty thermostat or temperature sensor ($150–$250 to replace) is the most common cause. Your compressor and cooling system are likely fine.' },
          { action: 'repair', condition: 'Door seal worn or not closing properly', recommendation: 'A new gasket ($80–$150 installed) restores the seal, maintains humidity, and prevents the compressor from overworking.' },
          { action: 'replace', condition: 'Compressor failure on a thermoelectric wine cooler', recommendation: 'Thermoelectric coolers are compact and affordable ($200–$500 new). Compressor repair may cost nearly as much as a replacement unit.' },
          { action: 'repair', condition: 'Compressor failure on a premium built-in unit (Sub-Zero, EuroCave)', recommendation: 'High-end wine refrigerators cost $2,000–$8,000+ new. Compressor replacement ($400–$800) is almost always worth it to protect a premium unit and your wine collection.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or temperature issues' },
        { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Not freezing, frost buildup, or temp problems' },
      ]}
    />

  );
};

export default WineRefrigeratorRepairPage;

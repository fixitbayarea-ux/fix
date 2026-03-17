import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const FreezerRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: "Freezer Not Freezing or Too Warm",
      description: "Temperature issues can be caused by faulty thermostats, defrost systems, or refrigerant leaks."
    },
    {
      title: "Ice Buildup or Frost Problems",
      description: "Excessive frost can indicate door seal issues, defrost timer problems, or ventilation blockages."
    },
    {
      title: "Freezer Making Strange Noises",
      description: "Unusual sounds from compressors, fans, or motors signal mechanical issues."
    },
    {
      title: "Freezer Not Running or Won't Start",
      description: "Power issues, control board failures, or compressor problems can prevent startup."
    },
    {
      title: "Door Seal Problems",
      description: "Damaged door gaskets cause temperature loss and energy waste."
    },
    {
      title: "Water Leaking from Freezer",
      description: "Blocked drains, damaged seals, or defrost issues cause leaks."
    }
  ];

  const faqData = [
    {
      question: "Why is my freezer not freezing properly and how much to fix it?",
      answer: "Freezers fail to freeze due to faulty thermostats ($125-$175), malfunctioning defrost systems ($150-$250), failed evaporator fans ($140-$200), or refrigerant leaks ($300-$500). Our technicians test temperature control, inspect defrost cycles, check fan operation, and test for leaks. Most freezer cooling repairs are completed same day with parts stocked in our vans."
    },
    {
      question: "Is it worth repairing a 10-year-old chest or upright freezer?",
      answer: "For freezers under 10-12 years old, repair is typically cost-effective for issues like thermostat failures, door seal replacements, or defrost timer issues. Standalone freezers are built to last longer than refrigerator-freezer combos. Our technicians assess your freezer's overall condition and provide honest repair-vs-replace guidance based on the specific problem."
    },
    {
      question: "Do you service both upright and chest freezers?",
      answer: "Yes! Our technicians are trained to repair all freezer types—upright freezers, chest freezers, drawer-style freezers, and built-in freezer units. We service all major brands including Frigidaire, GE, Whirlpool, KitchenAid, Kenmore, LG, Samsung, Maytag, and commercial freezer models."
    },
    {
      question: "How quickly can you repair a freezer that stopped working and food is thawing?",
      answer: "We understand freezer emergencies are time-sensitive to prevent food spoilage. We offer same-day emergency service in San Francisco, Peninsula, and Marin County. Most freezer repairs (thermostat, fan, defrost system) take 1-2 hours. Call us immediately and we'll prioritize your freezer repair to save your frozen food."
    },
    {
      question: "Does your freezer repair warranty cover compressor and cooling system failures?",
      answer: "Yes! Our comprehensive 180-day warranty covers all freezer repairs—parts and labor—including compressors, evaporator fans, defrost timers, thermostats, and door seals. If your freezer stops freezing again or temperature issues return within 180 days, we'll come back at no additional charge to fix it right."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Freezer Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay",
      "telephone": "(760) 543-5733"
    },
    "areaServed": SERVICE_CITIES_SCHEMA
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Freezer"
        pageSlug="freezer-repair"
        pageTitle="Freezer Repair San Francisco | Same-Day | FixitBay"
        metaDescription="Expert freezer repair in San Francisco. Standalone and built-in freezers. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Freezer<br />Repair in SF. Today.</>}
        techImage="/images/technicians/freezer-tech.jpg"
        techImageAlt="FixitBay technician repairing a freezer in a San Francisco home"
        issues={[
          { icon: '🌡️', label: 'Not Freezing' },
          { icon: '❄️', label: 'Frost Buildup' },
          { icon: '💧', label: 'Leaking' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '🔥', label: 'Runs Too Warm' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Freezer"
      pageTitle="Freezer Repair San Francisco | Same-Day | FixitBay"
      metaDescription="Expert freezer repair in San Francisco. Standalone and built-in freezers. $60 diagnostic applied to repair. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      heroImage="/images/technicians/freezer-tech.jpg"
      heroImageAlt="FixitBay technician repairing a freezer in a San Francisco home"
      serviceDescription={{
        title: "Emergency Freezer Repair Service",
        paragraphs: [
          <>Freezer failures require urgent attention to prevent food spoilage. Our licensed technicians provide same-day emergency service for both upright and chest freezers. We diagnose temperature control failures, compressor issues, defrost system malfunctions, and door seal problems. We charge a <strong>$60 diagnostic fee</strong> (waived with repair) and prioritize your service to save your frozen food.</>,
          <>Our freezer repair process includes testing thermostats, checking compressor operation, inspecting evaporator fans, and examining defrost timers. We use specialized tools to detect refrigerant leaks and measure temperature accuracy. Most freezer repairs—from thermostat replacement to defrost system fixes—are completed during our first visit with parts stocked for all major brands.</>,
          <>Whether your freezer isn't freezing properly, has excessive frost buildup, or stopped running completely, we'll diagnose and fix it fast. We service standalone freezers, chest freezers, and built-in freezer units from Frigidaire, GE, Whirlpool, Kenmore, and more. Every freezer repair includes our <strong>180-day warranty</strong> on parts and labor.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Freezer",
        intro: "Standalone and built-in freezers are built to last — here's how to decide based on what our technicians see.",
        items: [
          { action: 'repair', condition: 'Under 12 years old with a single failure', recommendation: 'Thermostat, defrost timer, or fan motor replacements cost $125–$300 — much less than a new $600+ freezer.' },
          { action: 'repair', condition: 'Door seal is damaged or worn', recommendation: 'A gasket replacement ($80–$150) restores efficiency and prevents frost buildup. Quick, affordable fix.' },
          { action: 'replace', condition: 'Compressor failure on a 15+ year unit', recommendation: 'Compressor replacement costs $400–$700. For older freezers, investing in a newer, energy-efficient model saves long-term.' },
          { action: 'replace', condition: 'Repeated refrigerant leaks', recommendation: 'Multiple leak repairs add up fast. If the sealed system has failed, replacement is the more cost-effective path.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
        { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, jammed dispenser, or leaking' },
        { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature problems or compressor failures' },
        { href: '/commercial-appliance-repair', label: 'Commercial Repair', desc: 'Walk-in coolers, commercial freezers' },
      ]}
    />
  );
};

export default FreezerRepairPage;

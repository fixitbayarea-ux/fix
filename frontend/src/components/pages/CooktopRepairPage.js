import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const CooktopRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: "Burners Not Heating or Igniting",
      description: "Gas ignition problems or electric element failures prevent proper heating."
    },
    {
      title: "Uneven Heat Distribution",
      description: "Hot spots or cold areas indicate faulty burners or heating elements."
    },
    {
      title: "Gas Smell or Leak Detection",
      description: "Gas odors require immediate attention for safety."
    },
    {
      title: "Control Knobs Not Working",
      description: "Broken or unresponsive controls affect cooking precision."
    },
    {
      title: "Induction Cooktop Error Codes",
      description: "Electronic error messages indicate system malfunctions."
    },
    {
      title: "Scratched or Cracked Glass Surface",
      description: "Damaged glass surfaces on electric or induction cooktops can be dangerous."
    }
  ];

  const faqData = [
    {
      question: "Do you repair gas, electric, and induction cooktops?",
      answer: "Yes! Our certified technicians repair all cooktop types—gas cooktops ($150-$400 for igniter/valve repairs), electric coil and smooth-top cooktops ($140-$300 for element replacements), and induction cooktops ($200-$450 for control board/sensor fixes). We're trained on all major brands and carry parts for same-day repairs."
    },
    {
      question: "My gas cooktop smells like gas or won't ignite. Is this dangerous?",
      answer: "Yes, gas leaks and ignition failures are serious safety hazards. Turn off the gas supply immediately, open windows for ventilation, and call us for emergency same-day service. DO NOT use the cooktop or attempt DIY repairs. Our licensed technicians use professional gas leak detectors to locate leaks, then repair gas valves, igniters, or burner heads safely and to code."
    },
    {
      question: "How much does cooktop repair cost in the Bay Area?",
      answer: "Cooktop repairs range from $140-$450 depending on the type and issue. Gas igniter replacements ($150-$220), electric element swaps ($140-$200), and control valve fixes ($180-$280) are common. Induction cooktop control board repairs ($250-$450) or glass surface replacements ($300-$600) cost more. We charge a $60 diagnostic fee (waived with repair)."
    },
    {
      question: "Can you repair professional-grade and commercial cooktops?",
      answer: "Absolutely! We repair residential and commercial cooktops including restaurant-grade equipment, high-BTU professional models, and luxury brands (Wolf, Viking, Thermador, Bosch, Miele). Our technicians have specialized training and tools for professional cooktop systems, ensuring code-compliant repairs."
    },
    {
      question: "Does your cooktop repair warranty cover igniter and heating element failures?",
      answer: "Yes! Our 180-day comprehensive warranty covers all cooktop repairs—parts and labor—including igniters, heating elements, control boards, gas valves, and sensors. If your cooktop burner stops working or ignition issues return within 6 months, we'll come back at no charge to fix it properly."
    }
  ];


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cooktop Repair",
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
        appliance="Cooktop"
        pageSlug="cooktop-repair"
        pageTitle="Cooktop Repair San Francisco | Gas & Electric | FixitBay"
        metaDescription="Gas, electric, and induction cooktop repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Cooktop<br />Repair in SF. Today.</>}
       
        issues={[
          { icon: '🔥', label: 'No Ignition' },
          { icon: '🌡️', label: 'Uneven Heat' },
          { icon: '⚡', label: 'Won\'t Turn On' },
          { icon: '💨', label: 'Gas Smell' },
          { icon: '🔧', label: 'Cracked Top' },
          { icon: '🔊', label: 'Clicking' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Cooktop",
          intro: "Cooktops are simpler than full ranges, so repairs are often straightforward.",
          items: [
            { action: 'repair', condition: 'Gas burner won\'t ignite or weak flame', recommendation: 'Igniter and valve replacements cost $150–$250. Most common cooktop repair.' },
            { action: 'repair', condition: 'One electric element not heating', recommendation: 'Individual element replacement runs $140–$200.' },
            { action: 'replace', condition: 'Cracked glass on older smooth-top model', recommendation: 'Glass replacement costs $300–$600, near the price of a new cooktop.' },
            { action: 'repair', condition: 'Induction cooktop shows error codes', recommendation: 'Board or sensor issues $200–$400. Induction cooktops are expensive to replace.' },
          ]
        }}
        relatedLinks={[
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating or temperature problems' },
          { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Cooktop"
      cmsSlug="cooktop-repair"
      pageTitle="Cooktop Repair San Francisco | Gas & Electric | FixitBay"
      metaDescription="Gas, electric, and induction cooktop repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Certified Gas & Electric Cooktop Repair",
        paragraphs: [
          <>Cooktop repairs demand technical expertise and safety compliance. Our certified technicians diagnose gas cooktops, electric coil cooktops, smooth-top electric ranges, and induction cooktops. We identify igniter failures, burner valve issues, element burnouts, and control board malfunctions. We charge a <strong>$60 diagnostic fee</strong> (credited toward your repair) with transparent pricing and safety-first service.</>,
          <>Our cooktop repair process includes testing gas igniters and valves, checking electric heating elements, inspecting induction sensors, and evaluating control modules. For gas cooktops, we perform professional leak detection and ensure proper flame characteristics. Most cooktop repairs—from replacing igniters to swapping heating elements—are completed same-day with parts available for immediate installation.</>,
          <>Whether your cooktop burners won't ignite, electric elements don't heat, or you smell gas, we'll diagnose and repair it safely. We service all cooktop types including professional-grade models from Wolf, Viking, Thermador, and Bosch. Every cooktop repair is backed by our <strong>180-day warranty</strong> on parts and labor.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Cooktop",
        intro: "Cooktops are simpler than full ranges, so repairs are often straightforward. Here's when each option makes sense.",
        items: [
          { action: 'repair', condition: 'Gas burner won\'t ignite or has a weak flame', recommendation: 'Igniter and valve replacements cost $150–$250 and restore full function. This is the most common cooktop repair we do in San Francisco.' },
          { action: 'repair', condition: 'Electric element not heating on one burner', recommendation: 'Individual element replacement runs $140–$200. The rest of your cooktop is likely in good shape.' },
          { action: 'replace', condition: 'Cracked glass top on an older smooth-top model', recommendation: 'Glass replacement costs $300–$600, approaching the price of a new cooktop. If the unit is 10+ years old, replacement is often better value.' },
          { action: 'repair', condition: 'Induction cooktop shows error codes', recommendation: 'Control board or sensor issues ($200–$400) are repairable. Induction cooktops are expensive to replace, making repair the better option in most cases.' },
        ]
      }}
      relatedLinks={[
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, temperature problems, or igniter issues' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop repair' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Burner issues, ignition, and flame problems' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or poor cleaning' },
      ]}
    />

  );
};

export default CooktopRepairPage;

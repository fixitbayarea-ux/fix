import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';
import SERVICE_CONTENT from '../../data/serviceContentData';

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
      answer: "Yes! Our certified technicians repair all cooktop types—gas cooktops ($250-$400 for igniter/valve repairs), electric coil and smooth-top cooktops ($250-$350 for element replacements), and induction cooktops ($300-$500 for control board/sensor fixes). We're trained on all major brands and carry parts for on-site repairs."
    },
    {
      question: "My gas cooktop smells like gas or won't ignite. Is this dangerous?",
      answer: "Yes, gas leaks and ignition failures are serious safety hazards. Turn off the gas supply immediately, open windows for ventilation, and call us for emergency fast scheduling. DO NOT use the cooktop or attempt DIY repairs. Our licensed technicians use professional gas leak detectors to locate leaks, then repair gas valves, igniters, or burner heads safely and to code."
    },
    {
      question: "How much does cooktop repair cost in the Bay Area?",
      answer: "Cooktop repairs range from $250-$550 depending on the type and issue. Gas igniter replacements ($250-$295), electric element swaps ($250-$295), and control valve fixes ($285-$395) are common. Induction cooktop control board repairs ($350-$500) or glass surface replacements ($400-$650) cost more. We charge a $60 diagnostic fee (waived with repair)."
    },
    {
      question: "Can you repair professional-grade and commercial cooktops?",
      answer: "Absolutely! We repair residential and commercial cooktops including restaurant-grade equipment, high-BTU professional models, and luxury brands (Wolf, Viking, Thermador, Bosch, Miele). Our technicians have specialized training and tools for professional cooktop systems, ensuring code-compliant repairs."
    },
    {
      question: "Does your cooktop repair warranty cover igniter and heating element failures?",
      answer: "Yes! Our 180-day comprehensive warranty covers all cooktop repairs—parts and labor—including igniters, heating elements, control boards, gas valves, and sensors. If your cooktop burner stops working or ignition issues return within 180 days, we'll come back at no charge to fix it properly."
    }
  ];


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cooktop Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    },
    "areaServed": SERVICE_CITIES_SCHEMA
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Cooktop"
        pageSlug="cooktop-repair"
        pageTitle="Cooktop Repair San Francisco | Gas & Electric | FixitBay LLC"
        metaDescription="Gas, electric, and induction cooktop repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
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
        pricingTable={SERVICE_CONTENT.Cooktop.pricingTable}
      comparisonTable={SERVICE_CONTENT.Cooktop.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Cooktop.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Cooktop.diagnosisSteps}
      relatedLinks={[
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating or temperature problems' },
          { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop' },
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
      pageTitle="Cooktop Repair San Francisco | Gas & Electric | FixitBay LLC"
      metaDescription="Gas, electric, and induction cooktop repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Certified Gas & Electric Cooktop Repair",
        paragraphs: [
          <>Cooktop repairs demand technical expertise and safety compliance. Our certified technicians diagnose gas cooktops, electric coil cooktops, smooth-top electric ranges, and induction cooktops. We identify igniter failures, burner valve issues, element burnouts, and control board malfunctions. We charge a <strong>$60 diagnostic fee</strong> (credited toward your repair) with transparent pricing and safety-first service.</>,
          <>Our cooktop repair process includes testing gas igniters and valves, checking electric heating elements, inspecting induction sensors, and evaluating control modules. For gas cooktops, we perform professional leak detection and ensure proper flame characteristics. Most cooktop repairs—from replacing igniters to swapping heating elements—are completed on the first visit with parts available for immediate installation.</>,
          <>Whether your cooktop burners won't ignite, electric elements don't heat, or you smell gas, we'll diagnose and repair it safely. We service all cooktop types including professional-grade models from Wolf, Viking, Thermador, and Bosch. Every cooktop repair is backed by our <strong>180-day warranty</strong> on parts and labor.</>
        ]
      }}
      pricingTable={SERVICE_CONTENT.Cooktop.pricingTable}
      comparisonTable={SERVICE_CONTENT.Cooktop.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Cooktop.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Cooktop.diagnosisSteps}
      relatedLinks={[
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, temperature problems, or igniter issues' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop repair' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Burner issues, ignition, and flame problems' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or poor cleaning' },
      ]}
    />

  );
};

export default CooktopRepairPage;

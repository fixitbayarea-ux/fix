import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const StoveRepairPage = () => {
  const isMobile = useIsMobile();

  const commonProblems = [
    { title: 'Burners Won\'t Ignite', description: 'Failed igniters, clogged burner ports, or faulty spark modules prevent your stove burners from lighting. We diagnose ignition systems and restore reliable operation.' },
    { title: 'Weak or Uneven Flames', description: 'Yellow, weak, or flickering flames indicate clogged ports, incorrect air-to-gas ratio, or regulator problems. We clean and adjust burners for strong, even blue flames.' },
    { title: 'Gas Smell When Off', description: 'A gas odor when all burners are off signals a leaking valve, loose connection, or cracked gas line. This is a safety issue that requires immediate professional repair.' },
    { title: 'Electric Coils Not Heating', description: 'Burned-out coil elements, faulty receptacles, or wiring issues prevent electric stove burners from heating. We test circuits and replace defective components.' },
    { title: 'Knob or Control Issues', description: 'Broken, stuck, or loose control knobs make temperature adjustment impossible. We repair or replace knob assemblies, valve stems, and infinite switches.' },
    { title: 'Continuous Clicking', description: 'If igniters keep clicking after the burner is lit, moisture, debris, or a faulty spark module is the cause. We clean ignition components and replace faulty parts.' },
    { title: 'Surface Burner Overheating', description: 'Burners that won\'t regulate temperature can damage cookware and burn food. We repair infinite switches, thermostats, and control boards to restore precise heat control.' },
    { title: 'Glass Top Cracks', description: 'Cracked glass-ceramic surfaces on smooth-top stoves are safety hazards. We assess damage and provide replacement glass for all major stove brands.' }
  ];

  const faqData = [
    { question: 'How much does stove repair cost in San Francisco?', answer: 'Our diagnostic fee is $60 and is fully applied toward the repair cost if you proceed. Final pricing depends on the specific issue and parts needed. We provide a written estimate before starting any work.' },
    { question: 'Do you repair both gas and electric stoves?', answer: 'Yes! Our technicians are trained on all stove types — gas, electric coil, smooth-top ceramic, and induction. We service residential stoves from all major brands.' },
    { question: 'How quickly can you fix my stove?', answer: 'Most stove repairs are completed in a single visit, typically within 1-2 hours. We carry common parts for popular brands. If a specialty part is needed, we order it and return promptly.' },
    { question: 'Is it safe to use my stove if one burner doesn\'t work?', answer: 'Generally yes, if other burners work normally and there\'s no gas smell. However, we recommend getting it checked soon — a failed burner can indicate electrical or gas supply issues that may affect other components.' },
    { question: 'What stove brands do you service?', answer: 'We repair all major brands: GE, Whirlpool, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, and more. We also service high-end brands like Thermador, Viking, and Wolf.' },
    { question: 'Can you convert my stove from natural gas to propane?', answer: 'Yes, we perform gas conversions for most stove brands. This involves replacing orifices, adjusting regulators, and testing all burners. We ensure the conversion meets local building codes.' }
  ];

  const serviceDescription = {
    title: 'Expert Stove Repair Across San Francisco',
    paragraphs: [
      'Your stovetop is the workhorse of your kitchen — from morning coffee to family dinners, it sees daily use. When burners fail, flames weaken, or controls malfunction, cooking becomes frustrating or even dangerous. FixitBay LLC provides fast, professional stove repair throughout San Francisco, the Peninsula, and Marin County for all fuel types and brands.',
      'Our licensed technicians diagnose and repair gas stoves (including pilot light and electronic ignition systems), electric coil stoves, smooth-top ceramic stoves, and induction cooktops. We handle everything from simple igniter replacements to complex control board repairs. San Francisco\'s older homes often have unique gas line configurations — our techs are experienced with the specific challenges of Victorian and Edwardian kitchens.',
      'Every repair starts with our $60 diagnostic, which is credited toward the final cost. We carry common parts for major brands and complete most repairs in a single visit. All work is backed by our 180-day warranty on parts and labor, with same- or next-day and next-day appointments available throughout the Bay Area.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stove Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    },
    "areaServed": { "@type": "City", "name": "San Francisco" }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Stove"
        pageSlug="stove-repair"
        pageTitle="Stove Repair San Francisco | Gas & Electric | FixitBay LLC"
        metaDescription="Expert stove repair in San Francisco. Gas and electric stoves. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Stove<br />Repair in SF. Today.</>}
        heroImage="/images/technicians/range-tech.jpg"
        heroImageAlt="FixitBay technician next to a stove in a San Francisco kitchen"
        heroImagePosition="center center"
        techImage="/images/technicians/range-tech.jpg"
        techImageAlt="FixitBay technician next to a stove in a San Francisco kitchen"
        heroSubtitle="Gas & Electric — Fast Scheduling"
        issues={[
          { icon: '🔥', label: 'Won\'t Ignite' },
          { icon: '🌡️', label: 'Weak Flame' },
          { icon: '💨', label: 'Gas Smell' },
          { icon: '⚡', label: 'Not Heating' },
          { icon: '🔧', label: 'Knob Issues' },
          { icon: '🔊', label: 'Clicking' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Stove"
      pageTitle="Stove Repair San Francisco | Gas & Electric | FixitBay LLC"
      metaDescription="Expert stove repair in San Francisco. Gas and electric stoves. $60 diagnostic applied to repair. 180-day warranty."
      heroImage="/images/technicians/range-tech.jpg"
      heroImageAlt="FixitBay technician next to a stove in a San Francisco kitchen"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Stove",
        intro: "Stoves are kitchen workhorses. Here's practical guidance from our Bay Area technicians.",
        items: [
          { action: 'repair', condition: 'Single burner not lighting or heating', recommendation: 'Igniter or element swap costs $100–$220 — quick fix that extends your stove\'s life for years.' },
          { action: 'repair', condition: 'Gas smell when burner is off', recommendation: 'A faulty gas valve or loose connection is a safety issue but an affordable repair ($120–$250). Don\'t delay.' },
          { action: 'replace', condition: 'Cracked cooktop surface', recommendation: 'Glass-ceramic cooktop replacement often costs $400–$700+. If the stove is 10+ years old, a new unit is usually a better investment.' },
          { action: 'replace', condition: 'Repeated igniter/control failures', recommendation: 'If you\'ve had 3+ repairs in 2 years, ongoing costs will exceed half the price of a new, more efficient stove.' },
        ]
      }}
      relatedLinks={[
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and cooktop range service' },
        { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Electric, gas, or induction surface repair' },
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, uneven temperature, timer issues' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or poor cleaning' },
      ]}
    />

  );
};

export default StoveRepairPage;

import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const RangeRepairPage = () => {
  const isMobile = useIsMobile();

  const commonProblems = [
    { title: 'Oven Won\'t Heat But Burners Work', description: 'When stovetop burners fire but the oven won\'t heat, the issue is typically a failed bake element, faulty igniter (gas ranges), or a broken temperature sensor. We isolate and fix the oven section.' },
    { title: 'Uneven Oven Temperatures', description: 'Hot spots, underbaked centers, or burned edges indicate calibration drift, a failing convection fan, or worn heating elements. We test with precision instruments and restore even cooking.' },
    { title: 'Burner Ignition Failures', description: 'Range burners that won\'t light or click endlessly have clogged igniter ports, failed spark modules, or gas valve issues. We clean, test, and replace components for reliable ignition.' },
    { title: 'Self-Clean Lock Stuck', description: 'Door locks that jam during or after self-clean cycles prevent oven use. We safely release stuck locks and repair the latch mechanism, motor, or control board causing the issue.' },
    { title: 'Gas Range Won\'t Convert', description: 'Ranges need orifice and regulator changes when switching between natural gas and propane. We perform safe, code-compliant conversions and test all burners and the oven afterward.' },
    { title: 'Digital Display Errors', description: 'Error codes, blank displays, or unresponsive touchpads indicate control board or overlay failures. We diagnose electronic issues and repair or replace control components.' },
    { title: 'Oven Door Won\'t Close', description: 'Bent hinges, broken springs, or misaligned door seals let heat escape, wasting energy and causing uneven cooking. We realign, replace, and adjust door hardware.' },
    { title: 'Dual-Fuel Range Issues', description: 'Dual-fuel ranges combine gas burners with an electric oven, doubling potential failure points. We diagnose both systems — gas supply, igniters, elements, and electronic controls.' }
  ];

  const faqData = [
    { question: 'What\'s the difference between a range, stove, and oven?', answer: 'A range is the combined unit with stovetop burners and a built-in oven below. A stove typically refers to the cooktop/burner surface. An oven is the enclosed baking/roasting compartment. We repair all three.' },
    { question: 'How much does range repair cost?', answer: 'Our diagnostic fee is $60 and applies toward the repair. Common range repairs (igniters, elements, sensors) typically run $150-$350 total. We provide written estimates before starting work.' },
    { question: 'Do you repair dual-fuel ranges?', answer: 'Yes! Dual-fuel ranges (gas burners + electric oven) are our specialty. We\'re trained on both gas and electrical systems and can diagnose complex issues where the two systems interact.' },
    { question: 'Can you fix a range that\'s tripping my circuit breaker?', answer: 'Absolutely. This usually indicates a short in the bake or broil element, faulty wiring, or a control board issue. We safely test all electrical paths to find and fix the fault.' },
    { question: 'What range brands do you service?', answer: 'We service all residential range brands: GE, Whirlpool, Samsung, LG, Frigidaire, KitchenAid, Maytag, Bosch, as well as pro-style brands like Viking, Thermador, Wolf, and BlueStar.' },
    { question: 'How long does a typical range repair take?', answer: 'Most range repairs are completed in 1-2 hours during a single visit. Complex issues (control boards, dual-fuel diagnostics) may require a parts order and follow-up visit at no extra trip charge.' }
  ];

  const serviceDescription = {
    title: 'Professional Range Repair in San Francisco',
    paragraphs: [
      'A kitchen range combines the convenience of a stovetop with a full oven in one unit — and when either section fails, it disrupts your entire cooking routine. FixitBay LLC provides expert range repair throughout San Francisco, the Peninsula, and Marin County. We service freestanding ranges, slide-in ranges, drop-in ranges, and professional-style units from every major manufacturer.',
      'Our licensed technicians are trained to work on gas ranges, electric ranges, and dual-fuel models. We diagnose and repair igniters, heating elements, temperature sensors, convection fans, gas valves, control boards, and door mechanisms. San Francisco\'s diverse housing — from compact apartment kitchens to expansive chef\'s kitchens — means we encounter every range type and configuration. We bring the right tools and parts for each.',
      'Every service call begins with our $60 diagnostic fee, which is credited in full toward your repair. We stock common parts for popular range brands and complete most repairs on the first visit. For specialty or pro-grade range parts, we source from authorized distributors and schedule a return visit at no additional trip charge. All repairs are backed by our 180-day warranty on parts and labor.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Range Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay",
      "telephone": "(760) 543-5733"
    },
    "areaServed": { "@type": "City", "name": "San Francisco" }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Range"
        pageSlug="range-repair"
        pageTitle="Range Repair San Francisco | Gas & Electric | FixitBay"
        metaDescription="Expert range repair in San Francisco. Gas and electric ranges. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Range<br />Repair in SF. Today.</>}
        heroImage="/images/technicians/range-tech.jpg"
        heroImageAlt="FixitBay technician next to a gas range in a San Francisco kitchen"
        heroImagePosition="center center"
        techImage="/images/technicians/range-tech.jpg"
        techImageAlt="FixitBay technician next to a gas range in a San Francisco kitchen"
        heroSubtitle="Gas, Electric & Dual-Fuel Ranges"
        issues={[
          { icon: '🔥', label: 'Oven Cold' },
          { icon: '🌡️', label: 'Uneven Heat' },
          { icon: '⚡', label: 'Won\'t Ignite' },
          { icon: '🔒', label: 'Door Stuck' },
          { icon: '💻', label: 'Error Code' },
          { icon: '🔧', label: 'Dual-Fuel' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Range"
      pageTitle="Range Repair San Francisco | Gas & Electric | FixitBay"
      metaDescription="Expert range repair in San Francisco. Gas and electric ranges. $60 diagnostic applied to repair. 180-day warranty."
      heroImage="/images/technicians/range-tech.jpg"
      heroImageAlt="FixitBay technician next to a gas range in a San Francisco kitchen"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Range",
        intro: "Gas and electric ranges are built to last 15+ years. Here's how to make the right call.",
        items: [
          { action: 'repair', condition: 'Burner won\'t ignite or heats unevenly', recommendation: 'Igniter or element replacement costs $120–$250 — a fraction of a new $800+ range.' },
          { action: 'repair', condition: 'Oven temperature is inaccurate', recommendation: 'Thermostat or sensor recalibration/replacement ($100–$200) restores cooking precision quickly.' },
          { action: 'replace', condition: 'Multiple burners and oven both failing', recommendation: 'When several components fail simultaneously on a 12+ year unit, cumulative repair costs approach replacement price.' },
          { action: 'replace', condition: 'Control board failure on older model', recommendation: 'Electronic control boards for discontinued models can cost $300–$500 if available. A new range offers better efficiency and features.' },
        ]
      }}
      relatedLinks={[
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Temperature issues, not heating, or timer problems' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Burner issues, igniter problems, gas leaks' },
        { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Electric, gas, or induction cooktop service' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or cleaning issues' },
      ]}
    />

  );
};

export default RangeRepairPage;

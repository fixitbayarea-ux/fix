import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const OvenRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: "Not Heating", description: "Oven won't reach temperature, no heat, or uneven heating." },
    { title: "Temperature Issues", description: "Oven too hot or too cold, inaccurate temperature, or poor calibration." },
    { title: "Burners Not Working", description: "Gas burners won't ignite, electric elements not heating, or weak flame." },
    { title: "Door Won't Close", description: "Door won't shut properly, hinges broken, or latch failure." },
    { title: "Self-Clean Not Working", description: "Self-clean cycle won't start, door won't lock, or oven won't heat during cleaning." },
    { title: "Oven Won't Turn On", description: "No power, control panel unresponsive, or circuit breaker trips." },
    { title: "Strange Noises", description: "Clicking, popping, or humming sounds during operation." },
    { title: "Igniter Problems", description: "Gas oven igniter glows but won't light, weak igniter, or delayed ignition." },
    { title: "Error Codes", description: "Digital display shows fault codes or error messages." },
    { title: "Broiler Not Working", description: "Broil element not heating or broiler won't turn on." }
  ];

  const faqData = [
    {
      question: "How much does oven repair cost in San Francisco?",
      answer: "Oven repair costs vary by issue. Common repairs like replacing an igniter, heating element, or temperature sensor typically range from $150-$300. More complex repairs involving the control board or gas valve may cost $300-$500. Our $60 diagnostic fee is fully applied to your repair cost. We provide transparent pricing before starting any work."
    },
    {
      question: "Should I repair or replace my oven that's not heating?",
      answer: "For ovens under 10-12 years old, repair is usually the best choice. Heating issues are often caused by a faulty igniter, heating element, or temperature sensor—all cost-effective fixes. If your oven is older and multiple components are failing, replacement may be more economical. Our technicians will provide honest recommendations based on your oven's age and condition."
    },
    {
      question: "Do you service both gas and electric ovens?",
      answer: "Yes! We repair both gas and electric ovens, ranges, and cooktops following all safety procedures. Our technicians are trained to work with gas lines, igniters, heating elements, and control systems. We service all major brands."
    },
    {
      question: "How quickly can you fix an oven that's not heating?",
      answer: "We offer same-day and next-day service for urgent oven issues across San Francisco and the Bay Area. Most heating problems—like bad igniters, broken heating elements, or faulty sensors—can be diagnosed and repaired within 1-2 hours. Our vans carry common oven parts for faster repairs."
    },
    {
      question: "What brands of ovens do you repair?",
      answer: "We service all major oven brands including GE, Whirlpool, Frigidaire, Bosch, Samsung, LG, KitchenAid, Thermador, Viking, Wolf, Miele, and more. Whether you have a standard range or a high-end double oven, we can fix it."
    },
    {
      question: "Does your warranty cover oven repairs?",
      answer: "Yes! Every oven repair includes a comprehensive 6-month warranty on parts and labor. If the same issue reoccurs within 6 months, we'll return at no charge to fix it properly."
    },
    {
      question: "Why is my oven not reaching the right temperature?",
      answer: "Common causes include a faulty temperature sensor, broken heating element, bad igniter, calibration issues, or control board problems. Our technicians will inspect all components and restore accurate heating."
    },
    {
      question: "Can you repair wall ovens and double ovens?",
      answer: "Yes! We service all oven types including freestanding ranges, slide-in ranges, wall ovens, double ovens, and commercial-grade ovens. Our technicians have experience with all configurations."
    }
  ];

  const brands = ['GE', 'Whirlpool', 'Frigidaire', 'Bosch', 'Samsung', 'LG', 'KitchenAid', 'Thermador', 'Viking', 'Wolf', 'Miele', 'JennAir'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Oven, Range & Stove Repair",
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
        appliance="Oven"
        pageSlug="oven-repair"
        pageTitle="Oven Repair San Francisco | Same-Day | FixitBay"
        metaDescription="Expert oven repair in San Francisco. Gas and electric. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Oven<br />Repair in SF. Today.</>}
        techImage="/images/technicians/oven-tech.jpg"
        techImageAlt="FixitBay technician repairing an oven in a San Francisco kitchen"
        issues={[
          { icon: '🔥', label: 'Not Heating' },
          { icon: '🌡️', label: 'Temp Off' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '💨', label: 'Burner Issue' },
          { icon: '🔧', label: 'Door Problem' },
          { icon: '🔊', label: 'Strange Noise' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Oven",
          intro: "Ovens are built to last 15–20 years, so repair is often the smart call.",
          items: [
            { action: 'repair', condition: 'Not heating or temperature is off', recommendation: 'Igniters, heating elements cost $150–$300 to replace and restore full function.' },
            { action: 'repair', condition: 'Gas oven clicks but won\'t light', recommendation: 'Weak igniter — quick $150–$220 replacement eliminates safety concern.' },
            { action: 'replace', condition: 'Board + multiple parts failing on 15+ year unit', recommendation: 'Total repair cost may exceed half the price of a new range.' },
            { action: 'repair', condition: 'Self-clean cycle stopped working', recommendation: 'Door lock mechanism or thermal fuse — affordable fix.' },
          ]
        }}
        relatedLinks={[
          { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Gas, electric, induction issues' },
          { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop' },
          { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining or leaking' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
        serviceSchema={serviceSchema}
      appliance="Oven"
      pageTitle="Oven Repair San Francisco | Same-Day | FixitBay"
      metaDescription="Expert oven repair in San Francisco. Gas and electric. $60 diagnostic applied to repair. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      heroImage="/images/technicians/oven-tech.jpg"
      heroImageAlt="FixitBay technician repairing an oven in a San Francisco kitchen"
      serviceDescription={{
        title: "Professional Oven Repair in San Francisco",
        paragraphs: [
          <>When your oven won't heat, won't reach temperature, or shows error codes, FixitBay provides expert repair service throughout San Francisco, the Peninsula, and North Bay. Our licensed technicians diagnose and fix most oven issues on the same visit. We charge a transparent <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost—honest pricing from start to finish.</>,
          <>Our oven repair process includes a thorough inspection of heating elements, igniters, temperature sensors, gas valves, control boards, door hinges, and safety systems. We test all heating functions, check for gas leaks (if applicable), and identify the root cause of issues like no heat, temperature problems, or error codes. Whether you have a wall oven, double oven, or built-in unit, we have the expertise.</>,
          <>We service all major oven brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts like igniters, heating elements, and temperature sensors, enabling same-day repairs in most cases. Every repair is backed by our <strong>6-month warranty</strong> on parts and labor. Need <a href="/range-repair" style={{color:'#C0362C', fontWeight:'bold'}}>range repair</a> or <a href="/stove-repair" style={{color:'#C0362C', fontWeight:'bold'}}>stove repair</a>? We have dedicated pages for those too.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Oven",
        intro: "Ovens and ranges are built to last 15–20 years, so repair is often the smart call. Here's our guide.",
        items: [
          { action: 'repair', condition: 'Oven not heating or temperature is inaccurate', recommendation: 'Igniters, heating elements, and temperature sensors are the most common failures. These parts cost $150–$300 to replace and restore full function.' },
          { action: 'repair', condition: 'Gas oven clicks but won\'t light', recommendation: 'A weak igniter is the #1 cause. Replacement is quick ($150–$220) and eliminates the safety concern of unburned gas.' },
          { action: 'replace', condition: 'Control board and multiple components failing on 15+ year unit', recommendation: 'If the control board ($300–$500) is just one of several failing parts, the total repair cost may exceed half the price of a new range.' },
          { action: 'repair', condition: 'Self-clean cycle stopped working', recommendation: 'Usually a door lock mechanism or thermal fuse issue — both affordable fixes that don\'t affect the oven\'s core cooking ability.' },
        ]
      }}
      relatedLinks={[
        { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Gas, electric, and induction cooktop issues' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and stovetop repair' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or dishes still dirty' },
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, ice maker issues, or leaking' },
      ]}
    />
  );
};

export default OvenRepairPage;
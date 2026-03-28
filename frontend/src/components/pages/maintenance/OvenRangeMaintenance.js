import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const OvenRangeMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Oven Not Heating', description: 'If your oven won\'t heat or takes too long to reach temperature, the heating element, igniter (gas), or temperature sensor may be faulty. We diagnose and replace defective components.' },
    { title: 'Uneven Cooking', description: 'Hot spots or uneven baking indicate problems with heating elements, convection fans, or temperature calibration. We test and adjust all systems for consistent cooking results.' },
    { title: 'Gas Burners Won\'t Light', description: 'Failed igniters, clogged burner ports, or gas valve issues prevent burners from lighting. We clean components and replace faulty igniters to restore reliable ignition.' },
    { title: 'Oven Door Problems', description: 'A door that won\'t close properly, has a broken seal, or loose hinges causes heat loss and inefficient cooking. We repair or replace door components for proper sealing.' },
    { title: 'Temperature Inaccuracy', description: 'If your oven runs too hot or too cold, temperature calibration or sensor issues are likely. We test with precision thermometers and recalibrate your oven for accurate cooking.' },
    { title: 'Self-Clean Issues', description: 'If the self-clean cycle won\'t start, won\'t complete, or produces excessive smoke, there may be door lock problems or overheating sensors. We safely repair self-clean systems.' },
    { title: 'Control Panel Failures', description: 'Unresponsive buttons, error codes, or display issues indicate control board or touchpad problems. We diagnose electronic components and make repairs or replacements.' },
    { title: 'Gas Smell', description: 'Any persistent gas odor is a serious safety concern requiring immediate attention. We inspect all gas connections, valves, and lines to ensure safe operation.' }
  ];

  const faqData = [
    { question: 'How much does oven maintenance cost?', answer: 'Our diagnostic fee is $60 and includes testing all burners, checking heating elements, testing temperature accuracy, and inspecting safety features. This fee applies toward any repair costs.' },
    { question: 'How often should I service my oven or range?', answer: 'We recommend annual professional maintenance, especially for gas ranges. Between visits, clean spills immediately, check burner flames monthly, and use the self-clean feature as needed (but not more than quarterly).' },
    { question: 'Why is my oven temperature inaccurate?', answer: 'Temperature variations of 25-50\u00B0F from the set temperature indicate calibration issues or a faulty temperature sensor. We test with calibrated thermometers and adjust or replace components as needed.' },
    { question: 'Is it safe to use my oven if it smells like gas?', answer: 'No. If you smell gas, do not light the oven or any burners. Turn off the gas supply, open windows, evacuate your home, and call your gas utility company immediately. Once safe, contact us for repairs.' },
    { question: 'What brands of ovens and ranges do you service?', answer: 'We service all major brands including GE, Whirlpool, Samsung, LG, Frigidaire, Bosch, KitchenAid, Thermador, Viking, Wolf, and more. We work on gas, electric, and dual-fuel ranges.' },
    { question: 'Can you replace oven heating elements?', answer: 'Yes! We replace bake elements, broil elements, and convection fans. We also service gas igniters, burners, and all related components. We carry common parts and can source specialized components quickly.' }
  ];

  const serviceDescription = {
    title: 'Professional Oven, Range & Stove Maintenance Services',
    paragraphs: [
      'Your oven and range are essential for daily cooking, and proper maintenance ensures safe, efficient operation. Regular service prevents dangerous gas leaks, reduces energy waste, and ensures consistent cooking performance. FixitBay LLC provides comprehensive oven and range maintenance throughout San Francisco, Peninsula, and Marin County for all fuel types and brands.',
      'Our certified technicians perform thorough maintenance including testing all burners and heating elements, checking gas connections for leaks, cleaning burner ports and igniters, inspecting door seals and hinges, testing temperature accuracy with precision instruments, and verifying all safety features. We service gas, electric, and dual-fuel ranges, including high-end professional-style units. For gas ranges, we also inspect control valves and perform combustion tests.',
      'During our $60 diagnostic visit, we test your oven\'s temperature accuracy, inspect heating elements or igniters, check the door seal, test all burners, and verify proper ventilation. We also look for signs of wear that could lead to future breakdowns. Regular maintenance helps prevent costly repairs, ensures food cooks evenly, reduces energy consumption, and most importantly, keeps your family safe. All our work is backed by a 180-day warranty with same- or next-day service available.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Oven, Range & Stove Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Oven, Range & Stove"
        pageSlug="maintenance/oven-range"
        pageTitle="Oven Maintenance | FixitBay LLC"
        metaDescription="Professional oven maintenance in San Francisco Bay Area. Gas and electric service. Ensure safe, efficient cooking. $60 diagnostic, 180-day warranty."
        heroTitle={<>Oven<br />Maintenance. Today.</>}
        heroSubtitle="Safe, Efficient Cooking — Guaranteed"
        techImage="/images/technicians/oven-tech.jpg"
        techImageAlt="FixitBay technician servicing an oven range in a San Francisco kitchen"
        issues={[
          { icon: '\u{1F525}', label: 'Not Heating' },
          { icon: '\u{1F321}', label: 'Temp Off' },
          { icon: '\u{1F4A8}', label: 'Gas Smell' },
          { icon: '\u{1F6AA}', label: 'Door Issues' },
          { icon: '\u{26A1}', label: 'Won\'t Start' },
          { icon: '\u{1F50A}', label: 'Self-Clean' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Oven, Range & Stove"
      pageTitle="Oven Maintenance | FixitBay LLC"
      metaDescription="Professional oven maintenance in San Francisco Bay Area. Gas and electric service. Ensure safe, efficient cooking. $60 diagnostic, 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Kitchen"
      relatedServicesSubtitle="Expert maintenance for all your kitchen appliances"
      heroImage="/images/technicians/oven-tech.jpg"
      heroImageAlt="FixitBay technician servicing an oven range in a San Francisco kitchen"
      isMaintenance={true}
      serviceWord="Maintenance"
      maintenancePricing={[
        { service: 'Burner inspection & cleaning', price: 'from $75' },
        { service: 'Door seal inspection & replacement', price: 'from $85' },
        { service: 'Temperature calibration', price: 'from $65' },
        { service: 'Convection fan cleaning', price: 'from $75' },
        { service: 'Igniter check (gas models)', price: 'from $65' },
        { service: 'Full maintenance check (all of the above)', price: 'from $139' },
      ]}
      maintenanceSchedule={{
        title: 'When to Call for Oven Maintenance',
        intro: 'Regular oven maintenance ensures even cooking, energy efficiency, and safety — especially for gas models.',
        items: [
          { interval: 'Every 3 months', title: 'Burner & Element Inspection', description: 'Check electric elements for hot spots and gas burners for even flame. Uneven heating ruins meals and wastes energy.' },
          { interval: 'Every 6 months', title: 'Door Seal Check', description: "A damaged oven door seal lets heat escape, raising energy costs and causing uneven cooking. Replace if you feel heat escaping." },
          { interval: 'Annually', title: 'Temperature Calibration', description: 'Ovens drift from their set temperature over time. Professional calibration ensures your oven bakes at the temperature it displays.' },
          { interval: 'Annually', title: 'Full Maintenance Check', description: 'Our technician tests all burners/elements, calibrates temperature, inspects gas connections, cleans the convection fan, and checks safety controls.' },
        ]
      }}
      repairVsReplace={{
        title: "Oven Maintenance vs. Emergency Repair",
        intro: "Regular oven maintenance ensures safe cooking and accurate temperatures.",
        items: [
          { action: 'repair', condition: 'Annual calibration and safety check', recommendation: 'Oven temperatures drift 25–50°F over time. A $60 calibration visit restores precision and catches gas leaks early.' },
          { action: 'repair', condition: 'Door hinge and seal inspection', recommendation: 'A loose door or worn seal wastes energy and causes uneven cooking. Fixing early ($80–$150) prevents bigger issues.' },
          { action: 'replace', condition: 'Gas oven with persistent ignition problems', recommendation: 'If maintenance reveals a cracked igniter, warped burner, and worn valves together, cumulative repair costs exceed replacement value.' },
          { action: 'replace', condition: 'Oven is 15+ years with poor temperature accuracy', recommendation: 'Modern ovens heat faster, cook more evenly, and use less energy. Self-cleaning and convection features add real cooking value.' },
        ]
      }}
      relatedLinks={[
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, uneven temperature, timer issues' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and cooktop service' },
        { href: '/maintenance/cooktop', label: 'Cooktop Maintenance', desc: 'Burner and surface cleaning service' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Gas and electric stove service' },
      ]}
    />
  );
};

export default OvenRangeMaintenance;

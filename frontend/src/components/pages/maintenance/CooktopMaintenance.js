import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const CooktopMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Burners Won\'t Light (Gas)', description: 'Clogged burner ports, failed igniters, or gas flow issues prevent burners from lighting. We clean ports, replace igniters, and test gas connections for reliable operation.' },
    { title: 'Weak or Yellow Flames (Gas)', description: 'Gas burners should produce strong blue flames. Weak or yellow flames indicate clogged ports or improper air mixture, which we clean and adjust for optimal combustion.' },
    { title: 'Elements Not Heating (Electric)', description: 'Burned-out coil elements or failed radiant elements under glass cooktops prevent heating. We test and replace defective heating elements to restore full cooking capability.' },
    { title: 'Uneven Heating', description: 'If some burners heat more than others, there may be electrical connection issues, faulty switches, or gas flow problems. We diagnose and correct uneven heating.' },
    { title: 'Cracked Glass Surface', description: 'Cracks in glass or ceramic cooktops are safety hazards and efficiency problems. We assess damage and provide glass replacement options for smooth, safe cooking surfaces.' },
    { title: 'Induction Not Detecting Cookware', description: 'Induction cooktops require magnetic cookware. If your cooktop won\'t recognize pans or shows error codes, we test sensors and control boards to restore functionality.' },
    { title: 'Control Knobs Stuck or Broken', description: 'Sticky, loose, or broken control knobs make temperature adjustment difficult. We clean mechanisms, replace worn parts, and ensure smooth, precise control.' },
    { title: 'Gas Smell', description: 'Any gas odor requires immediate attention. We perform thorough leak tests on all connections, valves, and supply lines to ensure your cooktop operates safely.' }
  ];

  const faqData = [
    { question: 'How much does cooktop maintenance cost?', answer: 'Our diagnostic fee is $60 and includes testing all burners or elements, checking gas connections (if applicable), inspecting controls, and identifying any issues. This fee applies toward repair costs.' },
    { question: 'How often should I service my cooktop?', answer: 'We recommend professional maintenance annually, especially for gas cooktops. Clean your cooktop after each use, check gas burner flames monthly for proper color and strength, and deep clean burner ports quarterly.' },
    { question: 'Why won\'t my gas cooktop burners light?', answer: 'Failed igniters are the most common cause. Food debris clogging burner ports, moisture in the igniter, or gas supply issues can also prevent lighting. We diagnose and repair all these issues.' },
    { question: 'Can you repair cracked glass cooktops?', answer: 'Cracked glass requires replacement, not repair. We assess the damage, provide cost estimates, and can source and install replacement glass for most brands and models.' },
    { question: 'What cooktop types and brands do you service?', answer: 'We service all cooktop types: gas, electric coil, radiant glass, and induction. We work on all major brands including Bosch, GE, Frigidaire, Samsung, LG, KitchenAid, Thermador, Wolf, and more.' },
    { question: 'Is it normal for gas burners to make noise when igniting?', answer: 'Some clicking during ignition is normal. However, continuous clicking after the burner lights or loud popping sounds indicate problems with the igniter or burner cap alignment that we should inspect.' }
  ];

  const serviceDescription = {
    title: 'Expert Cooktop Maintenance for Gas, Electric & Induction Models',
    paragraphs: [
      'Whether you have a gas, electric, or induction cooktop, regular maintenance ensures safe operation, even heating, and extended appliance life. Proper care prevents gas leaks, electrical hazards, and costly breakdowns. FixitBay LLC provides professional cooktop maintenance services throughout San Francisco, Peninsula, and Marin County for all cooktop types and brands.',
      'Our certified technicians perform comprehensive maintenance including cleaning and testing all burners or heating elements, checking gas connections for leaks (gas cooktops), cleaning burner ports and igniters, testing induction sensors (induction cooktops), inspecting control knobs and switches, verifying proper ignition and flame patterns, and ensuring safe electrical connections. We service standard drop-in cooktops, built-in models, and high-end professional-grade units.',
      'During our $60 diagnostic visit, we test each burner or heating zone, inspect for gas leaks or electrical issues, clean accessible components, and verify all controls function properly. For gas cooktops, we check flame color and strength. For electric and induction models, we test heating consistency and sensor accuracy. Regular maintenance prevents dangerous gas leaks, ensures even cooking, reduces energy waste, and extends your cooktop\'s lifespan. All work is backed by our 180-day warranty with flexible same- or next-day and next-day scheduling.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cooktop Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Cooktop"
        pageSlug="maintenance/cooktop"
        pageTitle="Cooktop Maintenance | Gas, Electric & Induction | FixitBay LLC"
        metaDescription="Professional cooktop maintenance in San Francisco Bay Area. Service for gas, electric, and induction cooktops. $60 diagnostic, 180-day warranty. FixitBay LLC."
        heroTitle={<>Cooktop<br />Maintenance. Today.</>}
        heroSubtitle="Gas, Electric & Induction Service"
        issues={[
          { icon: '\u{1F525}', label: 'Won\'t Light' },
          { icon: '\u{1F321}', label: 'Uneven Heat' },
          { icon: '\u{1F4A8}', label: 'Gas Smell' },
          { icon: '\u{1F529}', label: 'Knob Issues' },
          { icon: '\u{26A1}', label: 'Not Heating' },
          { icon: '\u{1F4BB}', label: 'Induction' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Cooktop"
      pageTitle="Cooktop Maintenance | Gas, Electric & Induction | FixitBay LLC"
      metaDescription="Professional cooktop maintenance in San Francisco Bay Area. Service for gas, electric, and induction cooktops. $60 diagnostic, 180-day warranty. FixitBay LLC."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Kitchen"
      relatedServicesSubtitle="Expert maintenance for all your kitchen appliances"
      isMaintenance={true}
      serviceWord="Maintenance"
      repairVsReplace={{
        title: "Cooktop Maintenance vs. Emergency Repair",
        intro: "Gas, electric, and induction cooktops all benefit from regular professional service.",
        items: [
          { action: 'repair', condition: 'Annual burner and connection inspection', recommendation: 'Gas cooktops need periodic valve checks for safety. A $60 maintenance visit catches leaks before they become dangerous.' },
          { action: 'repair', condition: 'Deep cleaning and element testing', recommendation: 'Grease buildup causes uneven heating and fire risk. Professional cleaning restores performance and extends cooktop life.' },
          { action: 'replace', condition: 'Cracked glass-ceramic surface', recommendation: 'Surface cracks on electric/induction cooktops cost $300–$600 to replace. If the unit is 10+ years old, a new cooktop is usually smarter.' },
          { action: 'replace', condition: 'Multiple burners failing on gas cooktop', recommendation: 'When 2+ burners have valve or igniter issues, repair costs approach $400+. Modern cooktops offer better safety features.' },
        ]
      }}
      relatedLinks={[
        { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Burner, igniter, and surface issues' },
        { href: '/maintenance/oven-range', label: 'Oven Maintenance', desc: 'Calibration and safety inspection' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and cooktop service' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Gas and electric stove repairs' },
      ]}
    />

  );
};

export default CooktopMaintenance;

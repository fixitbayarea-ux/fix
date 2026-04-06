import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../data/serviceContentData';

const WallOvenRepairPage = () => {
  const isMobile = useIsMobile();

  const commonProblems = [
    { title: 'Heating Element Failure', description: 'Bake or broil elements burn out over time. We test and replace elements in single and double wall ovens from all major brands.' },
    { title: 'Temperature Sensor Issues', description: 'Faulty oven sensors cause uneven cooking or temperature drift. We calibrate and replace sensors to restore accurate heating.' },
    { title: 'Control Board Malfunction', description: 'Electronic control boards manage all oven functions. Error codes, unresponsive displays, and erratic behavior indicate board failure.' },
    { title: 'Convection Fan Problems', description: 'Convection fans distribute heat evenly. Noisy, slow, or non-spinning fans lead to uneven cooking and hot spots.' },
    { title: 'Door Hinge and Latch Failure', description: 'Wall oven doors are heavy. Worn hinges cause sagging or difficulty closing. Broken latches prevent self-clean mode from engaging.' },
    { title: 'Self-Clean Cycle Issues', description: 'Self-clean locks that won\'t release, incomplete cleaning, or error codes after self-clean. We diagnose door lock motors and thermal fuses.' },
  ];

  const faqData = [
    { question: 'How much does wall oven repair cost?', answer: 'Our diagnostic fee is $60 and is fully applied toward the repair cost if you proceed. Most wall oven repairs range from $195 to $495 depending on the part needed. We provide a written estimate before starting work.' },
    { question: 'Do you repair built-in single and double wall ovens?', answer: 'Yes. We service all built-in wall oven configurations: single ovens, double ovens, combination microwave-oven units, and steam ovens. Our technicians are experienced with the specific installation challenges of built-in units.' },
    { question: 'What wall oven brands do you service?', answer: 'We repair all major brands: GE, Whirlpool, KitchenAid, Bosch, Thermador, Viking, Wolf, Miele, Samsung, LG, Frigidaire, Maytag, and Dacor. We carry common parts and order specialty components as needed.' },
    { question: 'Can you repair the control panel on my wall oven?', answer: 'Yes. Control board and touch panel issues are among our most common wall oven repairs. We diagnose whether the board, membrane switch, or wiring harness needs replacement and provide a clear estimate.' },
    { question: 'How quickly can you fix my wall oven?', answer: 'Most wall oven repairs are completed in a single visit within 1-2 hours. We offer same- or next-day scheduling across San Francisco, the Peninsula, and Marin County.' },
  ];

  const serviceDescription = {
    title: 'Professional Wall Oven Repair Service',
    paragraphs: [
      'Wall ovens require specialized repair skills due to their built-in installation. FixitBay LLC provides same-day wall oven repair across San Francisco, the Peninsula, and Marin County. We fix single wall ovens, double wall ovens, combination microwave-oven units, and steam ovens from all major brands.',
      'Our technician diagnoses heating element failures, temperature sensor issues, control board malfunctions, convection fan problems, door hinge and latch failures, and self-clean cycle issues. We service GE, Whirlpool, KitchenAid, Bosch, Thermador, Viking, Wolf, Miele, and Samsung.',
      'Every repair starts with a $60 diagnostic fee, which is credited toward the final cost if you proceed. All work is backed by our 180-day warranty on parts and labor. Built-in wall ovens require careful handling around cabinetry, and our technicians have extensive experience with proper installation clearances.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wall Oven Repair",
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
        appliance="Wall Oven"
        pageSlug="wall-oven-repair"
        pageTitle="Wall Oven Repair San Francisco Bay Area | FixitBay LLC"
        metaDescription="Professional wall oven repair in San Francisco & Bay Area. Built-in single and double wall ovens. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Wall Oven Repair<br />Bay Area. Fast.</>}
        heroImage="/images/technicians/range-tech.jpg"
        heroImageAlt="FixitBay technician repairing a built-in wall oven"
        heroImagePosition="center center"
        techImage="/images/technicians/range-tech.jpg"
        techImageAlt="FixitBay technician repairing a built-in wall oven"
        heroDescription="FixitBay LLC repairs all built-in wall ovens across the Bay Area. Single, double, combination, and steam ovens. $60 diagnostic applied to repair. 180-day warranty."
        issues={[
          { icon: '\u{1F525}', label: 'Not Heating' },
          { icon: '\u{1F321}\uFE0F', label: 'Temp Wrong' },
          { icon: '\u{1F4DF}', label: 'Panel Error' },
          { icon: '\u{1F50A}', label: 'Fan Noise' },
          { icon: '\u{1F6AA}', label: 'Door Issue' },
          { icon: '\u26A1', label: "Won't Start" },
        ]}
        faqs={faqData}
        pricingTable={SERVICE_CONTENT.Oven.pricingTable}
        comparisonTable={SERVICE_CONTENT.Oven.comparisonTable}
        symptomsChecklist={SERVICE_CONTENT.Oven.symptomsChecklist}
        diagnosisSteps={SERVICE_CONTENT.Oven.diagnosisSteps}
        relatedLinks={[
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Freestanding and slide-in oven service' },
          { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and cooktop range service' },
          { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Electric, gas, or induction surface repair' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Wall Oven"
      pageTitle="Wall Oven Repair San Francisco Bay Area | FixitBay LLC"
      metaDescription="Professional wall oven repair in San Francisco & Bay Area. Built-in single and double wall ovens. $60 diagnostic applied to repair. 180-day warranty."
      heroImage="/images/technicians/range-tech.jpg"
      heroImageAlt="FixitBay technician repairing a built-in wall oven"
      cmsSlug="wall-oven-repair"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      pricingTable={SERVICE_CONTENT.Oven.pricingTable}
      comparisonTable={SERVICE_CONTENT.Oven.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Oven.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Oven.diagnosisSteps}
      relatedLinks={[
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Freestanding and slide-in oven service' },
        { href: '/range-repair', label: 'Range Repair', desc: 'Combined oven and cooktop range service' },
        { href: '/cooktop-repair', label: 'Cooktop Repair', desc: 'Electric, gas, or induction surface repair' },
        { href: '/stove-repair', label: 'Stove Repair', desc: 'Gas valve, electric element, and burner repair' },
      ]}
    />
  );
};

export default WallOvenRepairPage;

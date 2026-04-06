import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../data/serviceContentData';

const StackedWasherDryerRepairPage = () => {
  const isMobile = useIsMobile();

  const commonProblems = [
    { title: 'Washer Not Draining', description: 'Clogged drain pump or kinked hose — the most common issue in stacked units tucked into SF apartment laundry closets.' },
    { title: 'Dryer Not Heating', description: 'Failed heating element, thermal fuse, or gas valve. We test all heat-path components on stacked pairs and combo units.' },
    { title: 'Dryer Takes Multiple Cycles', description: 'Clogged exhaust vent or worn heating element. Vent blockage in stacked setups is a fire hazard — we inspect and clear the full vent run.' },
    { title: 'Loud Banging or Vibrating', description: 'Worn drum bearings, out-of-balance drum, or damaged suspension springs. Especially common in stacked units on upper floors.' },
    { title: 'Washer Won\'t Spin', description: 'Motor coupler failure, worn drive belt, or lid switch issue. We diagnose and repair the root cause, not just the symptom.' },
    { title: 'Door Latch Won\'t Lock', description: 'Front-load washer door seal or latch mechanism failure. The cycle won\'t start until the door is securely locked.' },
    { title: 'Error Codes Displayed', description: 'We diagnose all digital error codes on modern LG, Samsung, Bosch, and GE stacked units — no guesswork.' },
    { title: 'Combo Unit Won\'t Dry Completely', description: 'Condenser or heat pump filter needs cleaning. All-in-one combo units dry by condensation and need periodic maintenance.' },
  ];

  const faqData = [
    { question: 'Can you repair a stacked washer/dryer in my San Francisco apartment?', answer: 'Yes — this is one of our most common calls. SF apartment laundry closets are tight, but we bring all necessary tools to safely unstack, repair, and re-stack units. Our technicians are experienced with the space constraints in SoMa lofts, Marina apartments, and Peninsula condos.' },
    { question: 'What\'s the difference between an all-in-one combo and a stacked pair?', answer: 'An all-in-one combo (LG, Samsung, Bosch) washes and dries in a single drum using condensation — no exhaust vent needed, common in closet installs. A stacked pair is two separate units on a stacking kit with a standard dryer vent. We repair both types.' },
    { question: 'My combo washer/dryer doesn\'t dry completely. Is that fixable?', answer: 'Usually yes. Combo units dry by condensation, which requires a clean condenser. In most cases it\'s a simple condenser or heat pump filter cleaning — a 30-minute fix that restores full drying performance.' },
    { question: 'Do you service LG and Samsung stacked units?', answer: 'Yes. LG and Samsung are the most common stacked brands in Bay Area apartments. We carry parts for both and are trained on LG Direct Drive and Samsung VRT systems.' },
    { question: 'How much does stacked washer/dryer repair cost?', answer: 'Our $60 diagnostic fee covers the visit and full diagnosis. Most repairs run $150\u2013$400 depending on the part needed. We provide a written upfront estimate before any work begins.' },
  ];

  const serviceDescription = {
    title: 'Expert Stacked Washer/Dryer Repair for Bay Area Apartments',
    paragraphs: [
      'Stacked washer/dryer units are the standard in San Francisco apartments, SoMa lofts, and Peninsula condos \u2014 and when one breaks, you lose both machines at once. FixitBay LLC technicians are trained on both all-in-one combo units (single drum that washes and dries by condensation) and stacked pairs (separate washer and dryer on a stacking kit). We bring the right tools to safely unstack, repair, and re-stack units in tight San Francisco laundry closets.',
      'Our repair process covers the full system: drain pumps, motors, belts, heating elements, thermal fuses, door latches, control boards, condensers, and vent runs. We diagnose error codes, test all cycles, and identify the root cause \u2014 whether it\'s a clogged drain, a failed heating element, or a worn drum bearing.',
      'We service all major stacked unit brands: LG, Samsung, Bosch, GE, Whirlpool, Maytag, Electrolux, Frigidaire, and Haier. Every repair starts with a $60 diagnostic fee that\'s fully applied toward the repair cost. All work is backed by our 180-day warranty on parts and labor.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stacked Washer Dryer Repair",
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
        appliance="Stacked Washer/Dryer"
        pageSlug="stacked-washer-dryer-repair"
        pageTitle="Stacked Washer Dryer Repair San Francisco Bay Area | FixitBay LLC"
        metaDescription="Expert stacked washer/dryer repair in SF and the Peninsula. We fix all-in-one combo units and stacked pairs — LG, Samsung, Bosch, GE. Same-day service. (760) 543-5733."
        heroTitle={<>Stacked Washer/Dryer<br />Repair. Bay Area.</>}
        heroImage="/images/technicians/washer-tech.jpg"
        heroImageAlt="FixitBay technician repairing a stacked washer dryer unit in a San Francisco apartment"
        heroImagePosition="center center"
        techImage="/images/technicians/washer-tech.jpg"
        techImageAlt="FixitBay technician repairing a stacked washer dryer"
        heroDescription="FixitBay LLC repairs stacked washer/dryer units across the Bay Area. Combo units and stacked pairs. $60 diagnostic applied to repair. 180-day warranty."
        issues={[
          { icon: '\u{1F4A7}', label: 'Won\'t Drain' },
          { icon: '\u{1F525}', label: 'No Heat' },
          { icon: '\u{1F50A}', label: 'Loud Noise' },
          { icon: '\u{1F504}', label: 'Won\'t Spin' },
          { icon: '\u{1F6AA}', label: 'Door Latch' },
          { icon: '\u26A1', label: 'Error Code' },
        ]}
        faqs={faqData}
        pricingTable={SERVICE_CONTENT.Washer.pricingTable}
        comparisonTable={SERVICE_CONTENT.Washer.comparisonTable}
        symptomsChecklist={SERVICE_CONTENT.Washer.symptomsChecklist}
        diagnosisSteps={SERVICE_CONTENT.Washer.diagnosisSteps}
        relatedLinks={[
          { href: '/washer-repair', label: 'Washer Repair', desc: 'Standalone washing machine service' },
          { href: '/dryer-repair', label: 'Dryer Repair', desc: 'Standalone dryer service' },
          { href: '/maintenance/washer', label: 'Washer Maintenance', desc: 'Preventive care for washers' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Stacked Washer/Dryer"
      pageTitle="Stacked Washer Dryer Repair San Francisco Bay Area | FixitBay LLC"
      metaDescription="Expert stacked washer/dryer repair in SF and the Peninsula. We fix all-in-one combo units and stacked pairs — LG, Samsung, Bosch, GE. Same-day service. (760) 543-5733."
      heroImage="/images/technicians/washer-tech.jpg"
      heroImageAlt="FixitBay technician repairing a stacked washer dryer unit in a San Francisco apartment"
      cmsSlug="stacked-washer-dryer-repair"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      pricingTable={SERVICE_CONTENT.Washer.pricingTable}
      comparisonTable={SERVICE_CONTENT.Washer.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Washer.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Washer.diagnosisSteps}
      relatedLinks={[
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Standalone washing machine service' },
        { href: '/dryer-repair', label: 'Dryer Repair', desc: 'Standalone dryer service' },
        { href: '/maintenance/washer', label: 'Washer Maintenance', desc: 'Preventive washer care and cleaning' },
        { href: '/maintenance/dryer', label: 'Dryer Maintenance', desc: 'Vent cleaning and dryer upkeep' },
      ]}
    />
  );
};

export default StackedWasherDryerRepairPage;

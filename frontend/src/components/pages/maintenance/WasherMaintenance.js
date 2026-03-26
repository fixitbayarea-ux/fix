import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const WasherMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Washer Won\'t Drain', description: 'Standing water after a cycle indicates a clogged pump filter, blocked drain hose, or faulty drain pump. We clear blockages and replace defective components to restore proper drainage.' },
    { title: 'Excessive Vibration', description: 'Shaking, banging, or "walking" during the spin cycle often results from unbalanced loads, worn shock absorbers, or improper leveling. We diagnose and fix the root cause for smooth operation.' },
    { title: 'Water Leaks', description: 'Leaks can occur from damaged hoses, worn door seals, or loose connections. We inspect all water pathways and replace faulty parts to prevent water damage to your floors.' },
    { title: 'Washer Won\'t Spin', description: 'If your washer fills but doesn\'t spin, the issue may be a faulty lid switch, worn drive belt, or motor coupling failure. We test all components and make necessary repairs.' },
    { title: 'Foul Odors', description: 'Musty or mildew smells come from bacteria buildup in the drum, door seal, or detergent dispenser. We deep clean your washer and recommend maintenance practices to prevent odors.' },
    { title: 'Clothes Still Dirty', description: 'If clothes come out with residue or stains, the problem may be detergent buildup, clogged spray nozzles, or insufficient water pressure. We restore your washer\'s cleaning performance.' },
    { title: 'Error Codes', description: 'Modern washers display error codes for issues like door lock failures, sensor malfunctions, or water inlet problems. We decode errors and perform targeted repairs.' },
    { title: 'Long Cycle Times', description: 'If wash cycles take much longer than usual, the issue may involve water temperature sensors, heating elements, or control board problems. We diagnose and fix timing issues.' }
  ];

  const faqData = [
    { question: 'How much does washer maintenance cost?', answer: 'Our diagnostic fee is $60, which covers a thorough inspection and is applied to any repair costs. Maintenance services include cleaning filters, checking hoses, and testing all functions. Final costs depend on parts and labor needed.' },
    { question: 'How often should I service my washing machine?', answer: 'We recommend professional maintenance once a year, especially for high-efficiency washers. Between visits, clean the door seal monthly, run a cleaning cycle quarterly, and inspect hoses for wear every 6 months.' },
    { question: 'Can maintenance prevent washing machine breakdowns?', answer: 'Absolutely! Regular maintenance catches issues like hose wear, pump blockages, and seal damage before they cause major failures. This extends your washer\'s lifespan and prevents costly emergency repairs.' },
    { question: 'What brands of washers do you service?', answer: 'We service all major washer brands including Whirlpool, Maytag, LG, Samsung, GE, Frigidaire, Bosch, Electrolux, and more. Our technicians are trained on both top-load and front-load models, including HE washers.' },
    { question: 'Why does my washer smell bad?', answer: 'Front-load washers especially can develop mildew odors from moisture trapped in the door seal and drum. Regular cleaning cycles with vinegar or washer cleaner, leaving the door open after use, and wiping the seal prevents this issue.' },
    { question: 'Should I replace my washing machine hoses?', answer: 'Yes, we recommend replacing inlet hoses every 3-5 years or sooner if you notice cracks, bulges, or corrosion. Upgrading to braided stainless steel hoses provides extra protection against bursting and flooding.' }
  ];

  const serviceDescription = {
    title: 'Expert Washing Machine Maintenance in San Francisco Bay Area',
    paragraphs: [
      'Your washing machine handles one of your home\'s most essential tasks, processing countless loads of laundry year after year. Regular maintenance is crucial to prevent leaks, reduce breakdowns, and ensure your clothes come out clean every time. FixitBay LLC provides professional washer maintenance services throughout San Francisco, Peninsula, and Marin County for all major brands and models.',
      'Our certified technicians perform comprehensive maintenance including cleaning pump filters, inspecting inlet and drain hoses, testing door seals for leaks, checking drive belts, and running diagnostic cycles. We also clean detergent dispensers, remove buildup from the drum, and verify that all safety features function correctly. Whether you have a traditional top-loader or a modern front-load HE washer, we keep it running at peak performance.',
      'During our $60 diagnostic visit, we examine all critical components, identify any wear or damage, and recommend preventive measures. We also check leveling to prevent vibration, test water temperature controls, and ensure the washer drains completely. Our maintenance service helps you avoid expensive repairs, extends your washer\'s lifespan, and maintains optimal cleaning performance. All our work comes with a 180-day warranty and flexible same-day or next-day scheduling.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Washer Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Washer"
        pageSlug="maintenance/washer"
        pageTitle="Washer Maintenance | FixitBay LLC"
        metaDescription="Professional washing machine maintenance in San Francisco Bay Area. Prevent leaks and breakdowns with expert washer service from FixitBay LLC. $60 diagnostic, 180-day warranty."
        heroTitle={<>Washer<br />Maintenance. Today.</>}
        heroImage="/images/technicians/washer-tech.jpg"
        heroImageAlt="FixitBay technician servicing a washing machine in San Francisco"
        heroImagePosition="65% center"
        techImage="/images/technicians/washer-tech.jpg"
        techImageAlt="FixitBay technician servicing a washing machine in San Francisco"
        heroSubtitle="Prevent Leaks — Extend Washer Life"
        issues={[
          { icon: '\u{1F4A7}', label: 'Won\'t Drain' },
          { icon: '\u{1F4A5}', label: 'Vibration' },
          { icon: '\u{1F30A}', label: 'Leaking' },
          { icon: '\u{1F4A8}', label: 'Bad Smell' },
          { icon: '\u{26A1}', label: 'Won\'t Spin' },
          { icon: '\u{26A0}', label: 'Error Code' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Washer"
      pageTitle="Washer Maintenance | FixitBay LLC"
      metaDescription="Professional washing machine maintenance in San Francisco Bay Area. Prevent leaks and breakdowns with expert washer service from FixitBay LLC. $60 diagnostic, 180-day warranty."
      heroImage="/images/technicians/washer-tech.jpg"
      heroImageAlt="FixitBay technician servicing a washing machine in San Francisco"
      heroImagePosition="65% center"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Laundry"
      relatedServicesSubtitle="Complete maintenance services for your laundry appliances"
      isMaintenance={true}
      serviceWord="Maintenance"
      repairVsReplace={{
        title: "Maintenance vs. Emergency Washer Repair",
        intro: "Regular washer maintenance prevents costly water damage and extends machine life.",
        items: [
          { action: 'repair', condition: 'Annual hose and connection inspection', recommendation: 'Burst washer hoses cause $5,000+ in water damage. A $60 maintenance check catches weak hoses before they fail.' },
          { action: 'repair', condition: 'Drum cleaning and gasket check', recommendation: 'Mold buildup and worn seals cause odors and leaks. Preventive cleaning extends gasket life by 3–5 years.' },
          { action: 'replace', condition: 'Washer is 10+ years old and vibrates heavily', recommendation: 'Worn bearings and suspension cost $300–$500 to replace. Modern HE washers use 50% less water and energy.' },
          { action: 'replace', condition: 'Transmission or motor failure', recommendation: 'These $400+ repairs approach half the cost of a new washer. Upgrade for better efficiency and a full warranty.' },
        ]
      }}
      relatedLinks={[
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Emergency washer breakdowns and leaks' },
        { href: '/maintenance/dryer', label: 'Dryer Maintenance', desc: 'Vent cleaning and heating element check' },
        { href: '/maintenance/dishwasher', label: 'Dishwasher Maintenance', desc: 'Filter and spray arm cleaning service' },
        { href: '/maintenance/refrigerator', label: 'Fridge Maintenance', desc: 'Coil cleaning and seal inspection' },
      ]}
    />

  );
};

export default WasherMaintenance;

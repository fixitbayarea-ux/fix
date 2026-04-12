import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../../data/serviceContentData';
import MaintenanceSections from '../../sections/MaintenanceSections';

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
    { question: 'How much does washer maintenance cost?', answer: 'Our diagnostic fee is $80, which covers a thorough inspection and is applied to any repair costs. Maintenance services include cleaning filters, checking hoses, and testing all functions. Final costs depend on parts and labor needed.' },
    { question: 'How often should I service my washing machine?', answer: 'We recommend professional maintenance once a year, especially for high-efficiency washers. Between visits, clean the door seal monthly, run a cleaning cycle quarterly, and inspect hoses for wear every 6 months.' },
    { question: 'Can maintenance prevent washing machine breakdowns?', answer: 'Absolutely! Regular maintenance catches issues like hose wear, pump blockages, and seal damage before they cause major failures. This extends your washer\'s lifespan and prevents costly emergency repairs.' },
    { question: 'What brands of washers do you service?', answer: 'We service all major washer brands including Whirlpool, Maytag, LG, Samsung, GE, Frigidaire, Bosch, Electrolux, and more. Our technicians are trained on both top-load and front-load models, including HE washers.' },
    { question: 'Why does my washer smell bad?', answer: 'Front-load washers especially can develop mildew odors from moisture trapped in the door seal and drum. Regular cleaning cycles with vinegar or washer cleaner, leaving the door open after use, and wiping the seal prevents this issue.' },
    { question: 'Should I replace my washing machine hoses?', answer: 'Yes, we recommend replacing inlet hoses every 3-5 years or sooner if you notice cracks, bulges, or corrosion. Upgrading to braided stainless steel hoses provides extra protection against bursting and flooding.' }
  ];

  const serviceDescription = {
    title: 'Expert Washing Machine Maintenance in San Francisco Bay Area',
    paragraphs: [
      'Your washing machine handles one of your home\'s most essential tasks, processing countless loads of laundry year after year. Regular maintenance is crucial to prevent leaks, reduce breakdowns, and ensure your clothes come out clean every time. FixitBay LLC provides professional washer maintenance services throughout San Francisco, Peninsula, and Marin County for all major brands and models.',
      'Our certified technicians perform comprehensive maintenance including cleaning pump filters, inspecting inlet and drain hoses, testing door seals for leaks, checking drive belts, and running diagnostic cycles. We also clean detergent dispensers, remove buildup from the drum, and verify that all safety features function correctly. Whether you have a traditional top-loader or a modern front-load HE washer, we keep it running at peak performance.',
      'During our $80 diagnostic visit, we examine all critical components, identify any wear or damage, and recommend preventive measures. We also check leveling to prevent vibration, test water temperature controls, and ensure the washer drains completely. Our maintenance service helps you avoid expensive repairs, extends your washer\'s lifespan, and maintains optimal cleaning performance. All our work comes with a 180-day warranty and flexible same- or next-day scheduling.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Washer Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Washer"
        pageSlug="maintenance/washer"
        pageTitle="Washer Maintenance Service San Francisco | FixitBay"
        metaDescription="Professional washer maintenance in San Francisco. Prevent leaks and breakdowns. $80 diagnostic, 180-day warranty. FixitBay LLC."
        heroTitle={<>Washer<br />Maintenance. Today.</>}
        heroImage="/images/technicians/washer-tech.jpg"
        heroImageAlt="FixitBay technician servicing a washing machine in San Francisco"
        heroImagePosition="65% center"
        techImage="/images/technicians/washer-tech.jpg"
        techImageAlt="FixitBay technician servicing a washing machine in San Francisco"
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
      pageTitle="Washer Maintenance San Francisco Bay Area | FixitBay LLC"
      metaDescription="Professional washing machine maintenance in San Francisco Bay Area. Prevent leaks and breakdowns with expert washer service from FixitBay LLC. $80 diagnostic, 180-day warranty."
      heroImage="/images/technicians/washer-tech.jpg"
      heroImageAlt="FixitBay technician servicing a washing machine in San Francisco"
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
      maintenanceSchedule={{
        title: 'When to Call for Washer Maintenance',
        intro: 'Regular maintenance prevents odors, leaks, and extends the life of your washing machine.',
        items: [
          { interval: 'Monthly', title: 'Drum Cleaning Cycle', description: 'Run a hot empty cycle with washer cleaner to prevent mold, mildew, and odor buildup inside the drum and gasket.' },
          { interval: 'Every 6 months', title: 'Inlet Hose Inspection', description: 'Check hoses for bulges, cracks, or weak connections. Burst hoses cause major water damage. Replace rubber hoses every 5 years.' },
          { interval: 'Annually', title: 'Door Seal & Gasket Check', description: 'Front-loader gaskets trap moisture and debris. Clean monthly, inspect annually for tears or mold that could cause leaks.' },
          { interval: 'Annually', title: 'Full Maintenance Check', description: 'Our technician inspects drum bearings, drain pump, inlet valves, belt tension, and leveling for optimal performance.' },
        ]
      }}
      pricingTable={SERVICE_CONTENT['Washer Maintenance'].pricingTable}
      comparisonTable={SERVICE_CONTENT['Washer Maintenance'].comparisonTable}
      symptomsChecklist={SERVICE_CONTENT['Washer Maintenance'].symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT['Washer Maintenance'].diagnosisSteps}
      relatedLinks={[
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Emergency washer breakdowns and leaks' },
        { href: '/maintenance/dryer', label: 'Dryer Maintenance', desc: 'Vent cleaning and heating element check' },
        { href: '/maintenance/dishwasher', label: 'Dishwasher Maintenance', desc: 'Filter and spray arm cleaning service' },
        { href: '/maintenance/refrigerator', label: 'Fridge Maintenance', desc: 'Coil cleaning and seal inspection' },
      ]}
    >
      <MaintenanceSections appliance="Washer" checklistItems={['Drum and tub deep cleaning', 'Drain pump filter check and cleaning', 'Inlet hose inspection for cracks and bulges', 'Door seal cleaning and mold prevention (front-load)', 'Detergent dispenser flush and descale', 'Water level sensor calibration', 'Drain system flow test', 'Shock absorber and spring check', 'Hot and cold valve operation test', 'Electrical connection inspection']} />
    </ApplianceRepairPageNew>

  );
};

export default WasherMaintenance;

import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const DishwasherMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Dishes Not Clean', description: 'If dishes come out dirty or with residue, the problem may be clogged spray arms, a dirty filter, hard water buildup, or low water temperature. We restore optimal cleaning performance.' },
    { title: 'Won\'t Drain', description: 'Standing water at the bottom indicates a clogged filter, blocked drain hose, or faulty drain pump. We clear blockages and replace defective components to ensure complete drainage.' },
    { title: 'Water Leaks', description: 'Leaks around the door or underneath signal worn door seals, damaged hoses, or a faulty pump seal. We identify the source and make repairs to prevent water damage.' },
    { title: 'Unusual Noises', description: 'Grinding, buzzing, or rattling sounds often come from failing pumps, worn wash arms, or foreign objects in the spray system. We diagnose and fix noisy operation.' },
    { title: 'Won\'t Fill', description: 'If your dishwasher won\'t fill with water, the water inlet valve, float switch, or electronic control may be faulty. We test components and restore proper water flow.' },
    { title: 'Not Drying Dishes', description: 'Wet dishes at the end of a cycle can result from a faulty heating element, broken vent fan, or rinse aid dispenser issues. We repair heating and drying systems for spotless, dry dishes.' },
    { title: 'Foul Odors', description: 'Bad smells come from food debris trapped in the filter, spray arms, or door seal. We deep clean your dishwasher and recommend maintenance practices to prevent odors.' },
    { title: 'Error Codes', description: 'Modern dishwashers display error codes for drainage issues, heating problems, or sensor failures. We decode errors and perform precise repairs to restore functionality.' }
  ];

  const faqData = [
    { question: 'How much does dishwasher maintenance cost?', answer: 'Our diagnostic fee is $60 and includes a complete inspection of all dishwasher components, testing cycles, and identifying any issues. This fee applies toward repair costs if you proceed with our service.' },
    { question: 'How often should I service my dishwasher?', answer: 'We recommend professional maintenance annually. Between visits, clean the filter monthly, wipe door seals weekly, and run a cleaning cycle every few months to prevent buildup and maintain performance.' },
    { question: 'Why isn\'t my dishwasher cleaning dishes properly?', answer: 'Poor cleaning results from clogged spray arms, dirty filters, insufficient water temperature, or using the wrong detergent. We clean components, test water temperature, and ensure proper detergent usage.' },
    { question: 'Can maintenance prevent dishwasher breakdowns?', answer: 'Yes! Regular maintenance catches issues like clogged filters, worn seals, and pump problems before they cause major failures. This extends your dishwasher\'s lifespan and ensures consistent cleaning performance.' },
    { question: 'What brands of dishwashers do you service?', answer: 'We service all major brands including Bosch, KitchenAid, Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, Miele, and more. Our technicians are trained on traditional and smart dishwashers.' },
    { question: 'How do I prevent dishwasher odors?', answer: 'Clean the filter regularly, wipe door seals, run hot water at the sink before starting the dishwasher, and occasionally run a cleaning cycle with vinegar or dishwasher cleaner. Leaving the door slightly open between cycles helps too.' }
  ];

  const serviceDescription = {
    title: 'Expert Dishwasher Maintenance in San Francisco Bay Area',
    paragraphs: [
      'Your dishwasher saves you countless hours of manual labor, but only when it\'s working properly. Regular maintenance ensures sparkling clean dishes, prevents leaks and breakdowns, and extends the life of your appliance. FixitBay LLC provides professional dishwasher maintenance services throughout San Francisco, Peninsula, and Marin County for all major brands and models.',
      'Our certified technicians perform comprehensive maintenance including cleaning and inspecting filters, checking spray arms for clogs, testing drain pumps, inspecting door seals for leaks, cleaning the interior and detergent dispenser, and running diagnostic cycles. We also test heating elements, water inlet valves, and electronic controls to ensure every component functions correctly. Whether you have a standard built-in dishwasher or a drawer-style model, we maintain optimal cleaning performance.',
      'During our $60 diagnostic visit, we thoroughly inspect your dishwasher, test all cycles, check for leaks, and identify any parts showing wear. We also verify proper water temperature, test the drying system, and ensure the drain functions completely. Our preventive maintenance helps you avoid costly repairs, reduces water waste, and guarantees consistently clean dishes. All our work is backed by a 180-day warranty, and we offer flexible same- or next-day service appointments.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dishwasher Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Dishwasher"
        pageSlug="maintenance/dishwasher"
        pageTitle="Dishwasher Maintenance | FixitBay LLC"
        metaDescription="Professional dishwasher maintenance in San Francisco Bay Area. Keep your dishwasher cleaning efficiently with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
        heroTitle={<>Dishwasher<br />Maintenance. Today.</>}
        heroImage="/images/technicians/dishwasher-tech.jpg"
        heroImageAlt="FixitBay technician servicing a dishwasher in San Francisco"
        heroImagePosition="center center"
        techImage="/images/technicians/dishwasher-tech.jpg"
        techImageAlt="FixitBay technician servicing a dishwasher in San Francisco"
        heroSubtitle="Sparkling Dishes — Prevent Breakdowns"
        issues={[
          { icon: '\u{1F4A7}', label: 'Not Cleaning' },
          { icon: '\u{1F30A}', label: 'Won\'t Drain' },
          { icon: '\u{1F4A6}', label: 'Leaking' },
          { icon: '\u{1F50A}', label: 'Loud Noise' },
          { icon: '\u{1F4A8}', label: 'Bad Smell' },
          { icon: '\u{26A0}', label: 'Error Code' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Dishwasher"
      pageTitle="Dishwasher Maintenance | FixitBay LLC"
      metaDescription="Professional dishwasher maintenance in San Francisco Bay Area. Keep your dishwasher cleaning efficiently with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
      heroImage="/images/technicians/dishwasher-tech.jpg"
      heroImageAlt="FixitBay technician servicing a dishwasher in San Francisco"
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
        title: "Dishwasher Maintenance vs. Emergency Repair",
        intro: "A well-maintained dishwasher lasts 12+ years and cleans better. Here's why regular service pays off.",
        items: [
          { action: 'repair', condition: 'Quarterly filter and spray arm cleaning', recommendation: 'Clogged filters reduce cleaning power and cause odors. A $60 maintenance visit restores full washing performance.' },
          { action: 'repair', condition: 'Door seal inspection and cleaning', recommendation: 'Catching a worn gasket early ($70–$120 fix) prevents leaks that can damage kitchen cabinetry and flooring.' },
          { action: 'replace', condition: 'Dishwasher leaves dishes dirty after maintenance', recommendation: 'If cleaning, descaling, and component checks don\'t improve results, the pump or motor may be failing. Modern units are quieter and more efficient.' },
          { action: 'replace', condition: 'Tub or sump housing cracked', recommendation: 'Structural damage costs $300+ to repair on older units. A new dishwasher ($400–$700) gives you better features and a full warranty.' },
        ]
      }}
      relatedLinks={[
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or poor cleaning' },
        { href: '/maintenance/refrigerator', label: 'Fridge Maintenance', desc: 'Coil cleaning and seal inspection' },
        { href: '/garbage-disposal-repair', label: 'Disposal Repair', desc: 'Connected to dishwasher drain line' },
        { href: '/maintenance/cooktop', label: 'Cooktop Maintenance', desc: 'Burner and surface cleaning service' },
      ]}
    />

  );
};

export default DishwasherMaintenance;

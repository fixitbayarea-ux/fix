import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const DryerMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Dryer Takes Too Long', description: 'Extended drying times usually indicate clogged vents, a blocked lint trap housing, or a failing heating element. We clean the entire vent system and test all heating components.' },
    { title: 'No Heat', description: 'If your dryer runs but produces no heat, the issue may be a blown thermal fuse, faulty heating element, or gas valve problem (gas dryers). We diagnose and restore proper heating.' },
    { title: 'Overheating', description: 'Excessively hot dryers pose a fire risk and can damage clothes. Restricted airflow, faulty thermostats, or a stuck heating element are common causes. We fix these safety hazards immediately.' },
    { title: 'Unusual Noises', description: 'Squealing, thumping, or grinding sounds indicate worn drum rollers, a damaged belt, or failing motor bearings. We replace worn parts to restore quiet operation.' },
    { title: 'Won\'t Start', description: 'If your dryer won\'t turn on, the problem could be a faulty door switch, broken start button, blown fuse, or thermal overload. We test electrical components and make repairs.' },
    { title: 'Drum Won\'t Turn', description: 'A broken drive belt is the most common cause when the dryer starts but the drum doesn\'t rotate. We replace belts and check related pulleys and tensioners.' },
    { title: 'Burning Smell', description: 'Burning odors are a serious fire hazard and often result from lint buildup, overheating elements, or motor issues. We inspect and clean thoroughly to eliminate this danger.' },
    { title: 'Vent Problems', description: 'Clogged or damaged dryer vents reduce efficiency and create fire risks. We professionally clean and inspect the entire vent system from the dryer to the exterior vent.' }
  ];

  const faqData = [
    { question: 'How much does dryer maintenance cost?', answer: 'Our diagnostic service costs $60 and includes a thorough safety inspection, vent check, and performance testing. This fee applies toward any repairs. Preventive maintenance helps avoid costly breakdowns and fire hazards.' },
    { question: 'How often should I have my dryer serviced?', answer: 'We recommend professional dryer maintenance annually, with special attention to vent cleaning. Clean your lint trap after every load, and have vents professionally cleaned at least once a year\u2014more often if you do multiple loads daily.' },
    { question: 'Are clogged dryer vents really a fire hazard?', answer: 'Yes, clogged dryer vents are a leading cause of house fires. Lint is highly flammable, and restricted airflow causes dryers to overheat. Professional vent cleaning is essential for safety and efficiency.' },
    { question: 'Why is my dryer taking so long to dry clothes?', answer: 'Long drying times usually stem from clogged vents, a dirty lint trap housing, or failing heating elements. We clean the entire vent system and test heating components to restore normal drying times.' },
    { question: 'Do you service both gas and electric dryers?', answer: 'Yes! We service all dryer types including electric, gas, and compact models from all major brands like Whirlpool, Maytag, Samsung, LG, GE, Bosch, and more.' },
    { question: 'Can you clean dryer vents that go through walls or the roof?', answer: 'Absolutely. We have professional-grade equipment to clean long vent runs, vertical vents, and complex routing. We also inspect for damage, leaks, or improper installation that could affect performance or safety.' }
  ];

  const serviceDescription = {
    title: 'Professional Dryer Maintenance & Safety Inspection',
    paragraphs: [
      'Dryer maintenance isn\'t just about efficiency\u2014it\'s a critical safety issue. According to the U.S. Fire Administration, thousands of dryer fires occur each year, most caused by failure to clean lint buildup. FixitBay LLC provides comprehensive dryer maintenance and vent cleaning services throughout San Francisco, Peninsula, and Marin County to keep your home safe and your dryer running efficiently.',
      'Our certified technicians perform thorough maintenance including professional vent system cleaning, lint trap housing cleaning, testing heating elements and thermostats, inspecting belts and drum rollers, and checking all safety features. We service both gas and electric dryers from all major brands, ensuring every component functions safely and efficiently. For gas dryers, we also inspect gas connections and igniters.',
      'During our $60 diagnostic visit, we check your dryer\'s entire vent system for blockages, test heating performance, measure drying times, and inspect electrical connections. We also check for fire hazards like excessive lint buildup and overheating components. Regular maintenance not only prevents dangerous fires but also reduces energy costs, extends your dryer\'s lifespan, and ensures clothes dry properly. All our maintenance and repairs come with a 180-day warranty, and we offer convenient same- or next-day appointments.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dryer Maintenance & Vent Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Dryer"
        pageSlug="maintenance/dryer"
        pageTitle="Dryer Maintenance San Francisco Bay Area | FixitBay LLC"
        metaDescription="Professional dryer maintenance and vent cleaning in San Francisco Bay Area. Prevent fires and improve efficiency. $60 diagnostic, 180-day warranty. FixitBay LLC."
        heroTitle={<>Dryer Maintenance<br />&amp; Vent Cleaning.</>}
        heroImage="/images/technicians/dryer-tech.jpg"
        heroImageAlt="FixitBay technician servicing a dryer in San Francisco"
        heroImagePosition="60% top"
        techImage="/images/technicians/dryer-tech.jpg"
        techImageAlt="FixitBay technician servicing a dryer in San Francisco"
        heroSubtitle="Fire Prevention — Faster Drying"
        issues={[
          { icon: '\u{1F525}', label: 'No Heat' },
          { icon: '\u{23F1}', label: 'Slow Drying' },
          { icon: '\u{1F50A}', label: 'Loud Noise' },
          { icon: '\u{1F4A8}', label: 'Vent Clogged' },
          { icon: '\u{26A1}', label: 'Won\'t Start' },
          { icon: '\u{26A0}', label: 'Burning Smell' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Dryer"
      pageTitle="Dryer Maintenance San Francisco Bay Area | FixitBay LLC"
      metaDescription="Professional dryer maintenance and vent cleaning in San Francisco Bay Area. Prevent fires and improve efficiency. $60 diagnostic, 180-day warranty. FixitBay LLC."
      heroImage="/images/technicians/dryer-tech.jpg"
      heroImageAlt="FixitBay technician servicing a dryer in San Francisco"
      heroImagePosition="60% top"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Laundry"
      relatedServicesSubtitle="Complete maintenance services for your laundry appliances"
      isMaintenance={true}
      serviceWord="Maintenance"
      maintenancePricing={[
        { service: 'Lint trap deep cleaning', price: 'from $55' },
        { service: 'Vent duct inspection & cleaning', price: 'from $95' },
        { service: 'Drum seal inspection', price: 'from $65' },
        { service: 'Heating element check', price: 'from $75' },
        { service: 'Moisture sensor calibration', price: 'from $65' },
        { service: 'Full maintenance check (all of the above)', price: 'from $139' },
      ]}
      maintenanceSchedule={{
        title: 'When to Call for Dryer Maintenance',
        intro: 'Clogged vents are a leading cause of house fires. Regular dryer maintenance is essential for safety and efficiency.',
        items: [
          { interval: 'After every load', title: 'Lint Trap Cleaning', description: 'Clean the lint screen after every load. A clogged lint trap reduces airflow, increases drying time, and is a fire hazard.' },
          { interval: 'Annually', title: 'Vent Duct Cleaning', description: 'Professional vent cleaning removes built-up lint from the entire duct system. Reduces fire risk and cuts drying time by up to 30%.' },
          { interval: 'Annually', title: 'Full Maintenance Check', description: 'Our technician inspects the heating element, drum seals, belt condition, moisture sensors, and exhaust system for safe, efficient operation.' },
          { interval: 'Every 2 years', title: 'Drum Seal & Belt Inspection', description: 'Worn seals and belts cause noisy operation and uneven drying. Replacing them proactively prevents mid-cycle breakdowns.' },
        ]
      }}
      relatedLinks={[
        { href: '/dryer-repair', label: 'Dryer Repair', desc: 'No heat, won\'t tumble, or making noise' },
        { href: '/maintenance/washer', label: 'Washer Maintenance', desc: 'Hose inspection and drum cleaning' },
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Won\'t drain, spin, or fill issues' },
        { href: '/maintenance/refrigerator', label: 'Fridge Maintenance', desc: 'Coil cleaning and seal inspection' },
      ]}
    />

  );
};

export default DryerMaintenance;

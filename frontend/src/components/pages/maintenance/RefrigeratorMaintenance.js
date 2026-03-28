import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const RefrigeratorMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: 'Temperature Inconsistencies',
      description: 'Fluctuating temperatures can spoil food and waste energy. We check thermostats, sensors, and cooling systems to restore proper temperature control.'
    },
    {
      title: 'Excessive Frost Buildup',
      description: 'Frost accumulation in the freezer indicates issues with the defrost system, door seals, or temperature settings. Our technicians identify and fix the root cause.'
    },
    {
      title: 'Water Leaks',
      description: 'Pooling water inside or under your refrigerator can stem from clogged drain lines, damaged water lines, or faulty door seals. We diagnose and repair leaks quickly.'
    },
    {
      title: 'Unusual Noises',
      description: 'Grinding, buzzing, or clicking sounds often signal compressor issues, fan problems, or loose components. We pinpoint the source and restore quiet operation.'
    },
    {
      title: 'Ice Maker Malfunctions',
      description: 'If your ice maker stops producing ice, makes small or hollow cubes, or leaks water, we service the water inlet valve, ice mold, and control module.'
    },
    {
      title: 'Warm Refrigerator Compartment',
      description: 'When the fridge isn\'t cooling but the freezer works, the issue may be a faulty evaporator fan, damper control, or airflow blockage. We restore proper cooling.'
    },
    {
      title: 'Faulty Door Seals',
      description: 'Worn or torn gaskets allow cold air to escape, forcing the compressor to work harder. We replace seals to improve efficiency and reduce energy costs.'
    },
    {
      title: 'Compressor Not Running',
      description: 'If the compressor won\'t start, your refrigerator can\'t cool. We test electrical components, relays, and the compressor itself to restore functionality.'
    }
  ];

  const faqData = [
    {
      question: 'How much does refrigerator maintenance cost?',
      answer: 'Our diagnostic fee is $60, which is applied toward the repair if you proceed. Maintenance typically involves cleaning coils, checking seals, and testing components. Final costs depend on any parts or repairs needed.'
    },
    {
      question: 'How often should I schedule refrigerator maintenance?',
      answer: 'We recommend annual professional maintenance to keep your refrigerator running efficiently. However, you should clean the coils every 6 months and check door seals monthly to prevent issues.'
    },
    {
      question: 'Can regular maintenance prevent refrigerator breakdowns?',
      answer: 'Yes! Routine maintenance catches small issues before they become major problems. Cleaning coils, checking seals, and inspecting components can extend your refrigerator\'s lifespan by several years.'
    },
    {
      question: 'What are signs my refrigerator needs maintenance?',
      answer: 'Watch for these warning signs: inconsistent temperatures, excessive frost, water leaks, unusual noises, higher energy bills, or warm spots in the refrigerator compartment. Any of these indicate it\'s time for professional service.'
    },
    {
      question: 'Do you service all refrigerator brands?',
      answer: 'Yes! We service all major brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, and more. Our technicians are trained on both traditional and smart refrigerators.'
    },
    {
      question: 'How long does refrigerator maintenance take?',
      answer: 'A standard maintenance visit takes 30-60 minutes. If repairs are needed, the time varies depending on the issue. We provide an estimate before starting any repair work.'
    }
  ];

  const serviceDescription = {
    title: 'Professional Refrigerator Maintenance in the Bay Area',
    paragraphs: [
      'Your refrigerator is one of the hardest-working appliances in your home, running 24/7 to keep your food fresh and safe. Regular maintenance is essential to prevent costly breakdowns, reduce energy consumption, and extend the lifespan of your unit. At FixitBay LLC, we provide comprehensive refrigerator maintenance services throughout San Francisco, Peninsula, and Marin County.',
      'Our certified technicians perform thorough inspections and cleaning of critical components including condenser coils, evaporator fans, door seals, and temperature controls. We also test the defrost system, check refrigerant levels, and ensure all electrical connections are secure. Whether you have a standard top-freezer model, a French door refrigerator, or a high-end built-in unit, we have the expertise to keep it running at peak efficiency.',
      'During our maintenance visit, we provide a $60 diagnostic assessment that includes testing temperature accuracy, inspecting door seals for air leaks, cleaning accessible coils, and checking the ice maker and water dispenser (if equipped). This proactive approach helps identify potential issues before they lead to food spoilage or complete system failure. All our work is backed by a 180-day warranty, and we offer same- or next-day service appointments to fit your schedule.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Refrigerator Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Refrigerator"
        pageSlug="maintenance/refrigerator"
        pageTitle="Refrigerator Maintenance | FixitBay LLC"
        metaDescription="Professional refrigerator maintenance in San Francisco Bay Area. Keep your fridge running efficiently with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
        heroTitle={<>Refrigerator<br />Maintenance. Today.</>}
        heroSubtitle="Prevent Breakdowns — Keep Food Fresh"
        techImage="/images/technicians/fridge-tech.jpg"
        techImageAlt="FixitBay technician next to a refrigerator in a San Francisco home"
        issues={[
          { icon: '\u{1F321}', label: 'Temp Issues' },
          { icon: '\u{2744}', label: 'Frost Buildup' },
          { icon: '\u{1F4A7}', label: 'Leaking' },
          { icon: '\u{1F50A}', label: 'Noisy' },
          { icon: '\u{1F9CA}', label: 'Ice Maker' },
          { icon: '\u{1F6AA}', label: 'Door Seals' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Refrigerator"
      pageTitle="Refrigerator Maintenance | FixitBay LLC"
      metaDescription="Professional refrigerator maintenance in San Francisco Bay Area. Keep your fridge running efficiently with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Kitchen"
      relatedServicesSubtitle="Expert maintenance for all your kitchen appliances"
      heroImage="/images/technicians/fridge-tech.jpg"
      heroImageAlt="FixitBay technician next to a refrigerator in a San Francisco home"
      isMaintenance={true}
      serviceWord="Maintenance"
      repairVsReplace={{
        title: "Maintenance vs. Emergency Repair",
        intro: "Preventive maintenance saves money and prevents food spoilage. Here's why it matters.",
        items: [
          { action: 'repair', condition: 'Annual coil cleaning and inspection', recommendation: 'A $60 maintenance visit prevents $200–$500 emergency repairs. Clean condenser coils cut energy use by 15%.' },
          { action: 'repair', condition: 'Door seals showing wear', recommendation: 'Replacing a worn gasket ($80–$150) prevents the compressor from overworking and failing prematurely.' },
          { action: 'replace', condition: 'Refrigerator is 15+ years old', recommendation: 'Modern refrigerators use 40% less energy. If maintenance reveals chronic issues, upgrading saves long-term.' },
          { action: 'replace', condition: 'Compressor runs constantly', recommendation: 'If maintenance can\'t improve efficiency, the sealed system may be failing. Replacement is often more cost-effective.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Emergency cooling failures and leaks' },
        { href: '/maintenance/dishwasher', label: 'Dishwasher Maintenance', desc: 'Filter cleaning and spray arm service' },
        { href: '/maintenance/washer', label: 'Washer Maintenance', desc: 'Hose inspection and drum cleaning' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Frost buildup and temperature issues' },
      ]}
    />
  );
};

export default RefrigeratorMaintenance;

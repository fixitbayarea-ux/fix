import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';

const Tiburon = () => {
  const commonProblems = [
    { title: 'Premium Appliance Service', description: 'Tiburon homes feature high-end brands like Sub-Zero, Wolf, and Miele requiring specialized expertise.' },
    { title: 'Waterfront Property Challenges', description: 'Bay proximity creates humidity and salt-air issues for appliances in waterfront homes.' },
    { title: 'Built-In Refrigerator Issues', description: 'Many Tiburon homes have integrated refrigeration requiring specialized service.' },
    { title: 'Wine Cooler Repairs', description: 'Luxury homes feature wine storage systems needing expert temperature control service.' },
    { title: 'Gas Range Premium Brands', description: 'Wolf, Viking, and Thermador ranges require specialized igniter and burner service.' },
    { title: 'Dishwasher Luxury Models', description: 'High-end dishwashers from Miele and Bosch need expert repair.' },
    { title: 'Washer High-Efficiency Models', description: 'Premium front-load washers require specialized diagnostic and repair.' },
    { title: 'Oven Convection Systems', description: 'Luxury ovens with convection features need expert calibration and repair.' }
  ];

  const faqData = [
    { question: 'Do you service luxury appliance brands?', answer: 'Yes! We specialize in premium brands: Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, and all major manufacturers.' },
    { question: 'Can you service waterfront homes?', answer: 'Absolutely. We understand coastal humidity and salt-air challenges affecting appliances in Tiburon waterfront properties, including Paradise Cay and Old Tiburon neighborhoods.' },
    { question: 'Do you handle built-in appliances?', answer: 'Yes. We regularly service built-in refrigerators, wine coolers, and integrated appliances common in luxury homes.' },
    { question: 'What\'s your response time?', answer: 'We typically arrive within 1-2 hours for scheduled appointments throughout Tiburon (typically Highway 101 to Tiburon Boulevard).' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in Tiburon and throughout Marin County.' },
    { question: 'What warranty do you offer?', answer: 'Every repair includes a 180-day parts and labor warranty covering premium appliances.' }
  ];

  const serviceDescription = {
    title: 'Tiburon Appliance Repair \u2014 Luxury Home Specialists',
    paragraphs: [
      'Tiburon on the Marin Peninsula represents some of the Bay Area\'s most exclusive real estate, with luxury homes featuring premium appliances. Our technicians specialize in high-end brands like Sub-Zero, Wolf, Thermador, and Miele \u2014 standard in Tiburon kitchens. We understand both the sophisticated appliances and the service expectations of Tiburon homeowners overlooking San Francisco Bay.',
      'We service homes throughout Downtown Tiburon, Paradise Cay, Reed Heights, Old Tiburon, and the Tiburon Peninsula \u2014 also covering nearby Belvedere. Our team handles challenges unique to waterfront living: humidity and salt air that accelerate wear on door seals, terminal corrosion on gas range igniters, and the premium integrated appliances found in luxury kitchens. We carry specialized tools and maintain supplier relationships for fast access to high-end replacement parts.',
      'Same-day service is available throughout Tiburon with a $80 diagnostic fee credited toward repairs. We provide detailed estimates for premium appliances and back every repair with a 180-day parts and labor warranty. Our technicians are luxury appliance specialists experienced with integrated installations.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Tiburon Appliance Repair | Same-Day Service | FixitBay LLC"
        metaDescription="Tiburon appliance repair by licensed technicians. Sub-Zero, Wolf, Miele specialists for waterfront homes. Same- or next-day service. $80 diagnostic. 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Luxury appliance specialists"
        cityName="Tiburon"
      />
    </div>
  );
};

export default Tiburon;

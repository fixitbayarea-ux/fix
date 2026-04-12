import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const BelvedereTiburon = () => {
  const commonProblems = [
    { title: 'Premium Appliance Service', description: 'Belvedere Tiburon homes feature high-end brands like Sub-Zero, Wolf, and Miele requiring specialized expertise.' },
    { title: 'Waterfront Property Challenges', description: 'Bay proximity creates humidity and salt-air issues for appliances in waterfront homes.' },
    { title: 'Built-In Refrigerator Issues', description: 'Many Belvedere Tiburon homes have integrated refrigeration requiring specialized service.' },
    { title: 'Wine Cooler Repairs', description: 'Luxury homes feature wine storage systems needing expert temperature control service.' },
    { title: 'Gas Range Premium Brands', description: 'Wolf, Viking, and Thermador ranges require specialized igniter and burner service.' },
    { title: 'Dishwasher Luxury Models', description: 'High-end dishwashers from Miele and Bosch need expert repair.' },
    { title: 'Washer High-Efficiency Models', description: 'Premium front-load washers require specialized diagnostic and repair.' },
    { title: 'Oven Convection Systems', description: 'Luxury ovens with convection features need expert calibration and repair.' }
  ];

  const faqData = [
    { question: 'Do you service luxury appliance brands?', answer: 'Yes! We specialize in premium brands: Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, and all major manufacturers.' },
    { question: 'Can you service waterfront homes?', answer: 'Absolutely. We understand coastal humidity and salt-air challenges affecting appliances in Belvedere Tiburon waterfront properties.' },
    { question: 'Do you handle built-in appliances?', answer: 'Yes. We regularly service built-in refrigerators, wine coolers, and integrated appliances common in luxury homes.' },
    { question: 'What\'s your response time?', answer: 'We typically arrive within 1-2 hours for scheduled appointments to Belvedere and Tiburon.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in Belvedere, Tiburon, and throughout Marin County.' },
    { question: 'What warranty do you offer?', answer: 'Every repair includes a 180-day parts and labor warranty covering premium appliances.' }
  ];

  const serviceDescription = {
    title: 'Belvedere Tiburon Appliance Repair - Luxury Home Specialists',
    paragraphs: [
      'Belvedere and Tiburon\'s waterfront peninsula represents some of Marin County\'s most exclusive real estate, featuring luxury homes with premium appliances. Our technicians specialize in high-end brands like Sub-Zero, Wolf, Thermador, and Miele, common in these affluent communities. We understand both the appliances and the service expectations of Belvedere Tiburon homeowners.',
      'We navigate the peninsula regularly, servicing waterfront estates, hillside homes with bay views, and downtown Tiburon properties. Our team handles challenges unique to waterfront living: humidity, salt air, and the premium integrated appliances found in luxury kitchens. We carry specialized tools and can source high-end parts quickly.',
      'Fast scheduling is available throughout Belvedere and Tiburon with a $80 diagnostic fee credited toward repairs. We provide detailed estimates for premium appliances and back every repair with a 180-day warranty. Our technicians are luxury appliance specialists experienced with integrated installations.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Belvedere Tiburon | FixitBay LLC"
        metaDescription="Premium appliance repair in Belvedere and Tiburon. Sub-Zero, Wolf, Miele specialists. Waterfront home experts. Fast scheduling. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Luxury appliance specialists"
        cityName="Belvedere & Tiburon"
        
        
      />

    </div>
  );
};

export default BelvedereTiburon;

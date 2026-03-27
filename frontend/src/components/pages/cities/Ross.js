import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Ross = () => {
  const commonProblems = [
    { title: 'Premium Appliance Service', description: 'Ross homes feature high-end brands like Sub-Zero, Wolf, and Thermador requiring specialized expertise.' },
    { title: 'Built-In Refrigerator Issues', description: 'Luxury Ross homes have integrated refrigeration systems needing expert service.' },
    { title: 'Wine Cooler Repairs', description: 'High-end wine storage systems in Ross estates require precise temperature control service.' },
    { title: 'Professional Range Service', description: 'Wolf, Viking, and Thermador ranges need specialized burner and igniter repair.' },
    { title: 'Luxury Dishwasher Repairs', description: 'Premium dishwashers from Miele and Bosch require expert diagnostic and repair.' },
    { title: 'Hillside Property Challenges', description: 'Ross\'s hillside locations create water pressure and drainage challenges for appliances.' },
    { title: 'Washer High-Efficiency Models', description: 'Premium front-load washers in Ross homes need specialized service.' },
    { title: 'Convection Oven Systems', description: 'Luxury ovens with advanced features require expert calibration and repair.' }
  ];

  const faqData = [
    { question: 'Do you specialize in luxury appliance brands?', answer: 'Yes! We are experts in premium brands common in Ross: Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, and all major manufacturers.' },
    { question: 'Can you navigate Ross hillside properties?', answer: 'Absolutely. Our technicians are experienced with Ross\'s winding hillside roads and private estates.' },
    { question: 'Do you service built-in appliances?', answer: 'Yes. We regularly service built-in refrigerators, wine coolers, and integrated appliances in luxury Ross homes.' },
    { question: 'What\'s your response time to Ross?', answer: 'We typically arrive within 1-2 hours for scheduled appointments to Ross.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for luxury appliance repair in Ross and throughout Marin County.' },
    { question: 'What warranty do you provide?', answer: 'Every repair includes a 180-day parts and labor warranty covering all premium appliances.' }
  ];

  const serviceDescription = {
    title: 'Ross Appliance Repair - Luxury Home Specialists',
    paragraphs: [
      'Ross represents some of Marin County\'s most exclusive residential real estate, featuring hillside estates with premium appliances. Our technicians specialize in high-end brands like Sub-Zero, Wolf, Thermador, and Miele that are standard in Ross luxury homes. We understand both the sophisticated appliances and the service expectations of Ross homeowners.',
      'We navigate Ross\'s private hillside properties regularly, understanding challenges unique to luxury estates: water pressure variations, complex installations, and integrated kitchen systems. We carry specialized tools for premium appliances and maintain relationships with suppliers for quick access to high-end replacement parts.',
      'Fast scheduling is available in Ross with a $60 diagnostic fee credited toward repairs. We provide detailed assessments for luxury appliances and back every repair with a 180-day warranty. Our licensed technicians are premium appliance specialists experienced with the sophisticated systems found in Ross estates.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Ross | Luxury Brands | FixitBay LLC"
        metaDescription="Premium appliance repair in Ross. Sub-Zero, Wolf, Thermador specialists. Luxury hillside estates. Fast scheduling. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Luxury appliance experts"
        cityName="Ross"
        
        
      />

    </div>
  );
};

export default Ross;

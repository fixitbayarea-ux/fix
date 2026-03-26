import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Greenbrae = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Temperature control problems affect refrigerators in Greenbrae homes and condos.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues in Greenbrae properties, especially near Bon Air and the shopping center.' },
    { title: 'Dryer No Heat', description: 'Heating element failures affect dryers throughout Greenbrae residential areas.' },
    { title: 'Dishwasher Leaks', description: 'Door seal and pump issues cause dishwasher leaks in Greenbrae homes.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat problems in ovens throughout Greenbrae.' },
    { title: 'Ice Maker Failures', description: 'Water line issues prevent ice production in Greenbrae refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout Greenbrae.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Greenbrae homes and condos.' }
  ];

  const faqData = [
    { question: 'Do you serve all Greenbrae neighborhoods?', answer: 'Yes! We serve the Bon Air area, near the shopping center, and all Greenbrae neighborhoods with same-day service.' },
    { question: 'Can you service condos near the Marin Country Mart?', answer: 'Absolutely. We regularly service condos and townhomes throughout Greenbrae including properties near shopping areas.' },
    { question: 'What\'s your response time to Greenbrae?', answer: 'We typically arrive within 1-2 hours for same-day appointments via Highway 101.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in Greenbrae and throughout Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Greenbrae Appliance Repair Services',
    paragraphs: [
      'Greenbrae\'s central Marin location along Highway 101 makes it a convenient shopping and residential hub. Our technicians serve all Greenbrae neighborhoods from Bon Air to properties near the Marin Country Mart. We understand Greenbrae\'s mix of condos, townhomes, and single-family homes.',
      'We navigate Greenbrae efficiently via Highway 101, accessing residential areas and shopping districts quickly. Our vans carry parts for common appliance failures, and we maintain a network for sourcing specialized components.',
      'Same-day service is available in Greenbrae with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Greenbrae | Same-Day Service | FixitBay LLC"
        metaDescription="Professional appliance repair in Greenbrae. Same-day service near Marin Country Mart. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in Greenbrae"
        cityName="Greenbrae"
        
        
      />

    </div>
  );
};

export default Greenbrae;

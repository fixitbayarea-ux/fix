import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const CorteMadera = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Corte Madera\'s moderate climate still challenges refrigerator compressors and temperature controls.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues common in Corte Madera homes, especially near the Town Center and Christmas Tree Hill.' },
    { title: 'Dryer No Heat', description: 'Heating element and thermal fuse failures affect dryers throughout Corte Madera.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water affects dishwasher spray arms and pumps in Corte Madera homes.' },
    { title: 'Oven Temperature Problems', description: 'Thermostat and sensor issues cause temperature inaccuracy in Corte Madera ovens.' },
    { title: 'Ice Maker Failures', description: 'Water line and valve problems prevent ice production in refrigerators.' },
    { title: 'Gas Range Issues', description: 'Igniter and safety valve problems in gas ranges throughout Corte Madera.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Corte Madera homes and condos.' }
  ];

  const faqData = [
    { question: 'Do you serve all Corte Madera neighborhoods?', answer: 'Yes! We serve the Town Center, Christmas Tree Hill, and all Corte Madera neighborhoods with fast scheduling availability.' },
    { question: 'Can you service condos near the shopping center?', answer: 'Absolutely. We regularly service apartments and condos throughout Corte Madera including properties near The Village shopping center.' },
    { question: 'What\'s your response time to Corte Madera?', answer: 'We typically arrive within 1-2 hours for scheduled appointments via Highway 101 and local routes.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, Thermador, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair throughout Corte Madera and Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Corte Madera Appliance Repair Services',
    paragraphs: [
      'Corte Madera\'s central Marin location between Larkspur and Mill Valley makes it a convenient shopping and residential hub. Our technicians serve all Corte Madera neighborhoods from the Town Center to Christmas Tree Hill, understanding the area\'s mix of single-family homes, townhomes, and condos near The Village shopping center.',
      'We navigate Corte Madera efficiently, accessing the area via Highway 101 and Tamalpais Drive. Our vans carry parts for common appliance failures, and we can source specialized components quickly from our Bay Area network. We understand the appliances common in Corte Madera\'s housing stock.',
      'Fast scheduling is available throughout Corte Madera with a $80 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair in Corte Madera | FixitBay"
        metaDescription="Professional appliance repair in Corte Madera. Fast scheduling near The Village. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in Corte Madera"
        cityName="Corte Madera"
        
        
      />

    </div>
  );
};

export default CorteMadera;

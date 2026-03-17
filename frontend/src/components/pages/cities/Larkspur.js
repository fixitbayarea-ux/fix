import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Larkspur = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Temperature control problems affect refrigerators throughout Larkspur homes.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues in Larkspur homes, especially downtown and near the ferry terminal.' },
    { title: 'Dryer No Heat', description: 'Heating element failures common in Larkspur residential areas.' },
    { title: 'Dishwasher Leaks', description: 'Door seal and pump problems cause dishwasher leaks in Larkspur.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat and sensor problems affect ovens throughout Larkspur.' },
    { title: 'Ice Maker Failures', description: 'Water line issues prevent ice production in Larkspur refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout Larkspur.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Larkspur homes and condos.' }
  ];

  const faqData = [
    { question: 'Do you serve all Larkspur neighborhoods?', answer: 'Yes! We serve downtown Larkspur, Greenbrae, and all surrounding areas including properties near the ferry terminal with same-day service.' },
    { question: 'Can you service condos near downtown?', answer: 'Absolutely. We regularly service apartments and condos throughout Larkspur including downtown properties and Greenbrae area.' },
    { question: 'What\'s your response time to Larkspur?', answer: 'We typically arrive within 1-2 hours for same-day appointments via Highway 101.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in Larkspur and throughout Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Larkspur Appliance Repair Services',
    paragraphs: [
      'Larkspur\'s historic downtown and convenient ferry access make it a sought-after Central Marin community. Our technicians serve all Larkspur neighborhoods from downtown\'s charming historic district to residential areas near Greenbrae. We understand Larkspur\'s mix of older homes and modern condos, along with the appliances common in each.',
      'We navigate Larkspur efficiently via Highway 101 and Magnolia Avenue, accessing downtown, residential neighborhoods, and the ferry terminal area quickly. Our vans carry parts for common appliance failures, and we maintain a network for sourcing specialized components.',
      'Same-day service is available throughout Larkspur with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Larkspur | Same-Day Service | FixitBay"
        metaDescription="Professional appliance repair in Larkspur. Same-day service downtown and near ferry. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in Larkspur"
        cityName="Larkspur"
        
        
      />

    </div>
  );
};

export default Larkspur;

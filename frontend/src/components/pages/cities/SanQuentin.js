import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const SanQuentin = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Bay proximity affects refrigerator performance in San Quentin waterfront homes.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues in San Quentin homes require expert diagnosis and repair.' },
    { title: 'Dryer No Heat', description: 'Heating element failures affect dryers in San Quentin residential areas.' },
    { title: 'Dishwasher Leaks', description: 'Door seal and pump issues cause dishwasher leaks throughout San Quentin.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat problems affect ovens in San Quentin homes.' },
    { title: 'Ice Maker Not Working', description: 'Water line issues prevent ice production in San Quentin refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout San Quentin.' },
    { title: 'Cooktop Element Failure', description: 'Electric cooktop elements burn out in San Quentin homes.' }
  ];

  const faqData = [
    { question: 'Do you serve all San Quentin neighborhoods?', answer: 'Yes! We provide fast appliance repair throughout San Quentin residential areas.' },
    { question: 'Can you service waterfront homes?', answer: 'Absolutely. We understand humidity challenges affecting appliances in San Quentin waterfront properties.' },
    { question: 'What\'s your response time to San Quentin?', answer: 'We typically arrive within 1-2 hours for scheduled appointments via Highway 101.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in San Quentin and throughout Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'San Quentin Appliance Repair Services',
    paragraphs: [
      'San Quentin\'s waterfront location along the Richmond-San Rafael Bridge corridor provides bay views and convenient Peninsula access. Our technicians serve San Quentin residential areas, understanding the challenges of waterfront living and the humidity that affects appliance performance.',
      'We navigate San Quentin efficiently via Highway 101 and local routes. Our vans carry parts for common appliance failures, and we understand the specific issues that arise in waterfront homes including humidity-related problems and salt-air exposure.',
      'Fast scheduling is available in San Quentin with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair in San Quentin | FixitBay"
        metaDescription="Professional appliance repair in San Quentin. Waterfront home specialists. Fast scheduling. Licensed technicians. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in San Quentin"
        cityName="San Quentin"
        
        
      />

    </div>
  );
};

export default SanQuentin;

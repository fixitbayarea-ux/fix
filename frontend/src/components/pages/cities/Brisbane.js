import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Brisbane = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Brisbane\'s hillside location and temperature variations affect refrigerator performance.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues common in Brisbane homes, especially in hillside properties with complex plumbing.' },
    { title: 'Dryer Vent Restrictions', description: 'Brisbane\'s compact homes often have long, complex dryer vent runs causing performance issues.' },
    { title: 'Dishwasher Not Cleaning', description: 'Mineral deposits from local water affect dishwasher spray arms and pumps in Brisbane.' },
    { title: 'Oven Temperature Problems', description: 'Thermostat and heating element issues in ovens throughout Brisbane\'s residential areas.' },
    { title: 'Ice Maker Failures', description: 'Water line and valve problems prevent ice production in Brisbane refrigerators.' },
    { title: 'Gas Range Igniter Issues', description: 'Moisture affects gas igniters in Brisbane\'s bayfront climate.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Brisbane homes and condos.' }
  ];

  const faqData = [
    { question: 'Do you service Brisbane hillside homes?', answer: 'Yes! We navigate Brisbane\'s hillside streets regularly and service all Brisbane neighborhoods with fast scheduling.' },
    { question: 'How quickly can you reach Brisbane?', answer: 'We typically arrive within 1-2 hours for scheduled appointments, accessing Brisbane via Highway 101 and Bayshore Boulevard.' },
    { question: 'Do you service Brisbane apartments?', answer: 'Absolutely. We service apartments, condos, and single-family homes throughout Brisbane.' },
    { question: 'What\'s your diagnostic fee?', answer: 'Our diagnostic fee is $60, fully credited toward your repair if you proceed.' },
    { question: 'Are you licensed in San Mateo County?', answer: 'Yes. FixitBay LLC is fully licensed and insured to provide appliance repair in Brisbane and throughout San Mateo County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes our standard 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Brisbane Appliance Repair - Hillside Home Specialists',
    paragraphs: [
      'Brisbane\'s unique hillside location between San Francisco and South San Francisco creates a tight-knit community with specific appliance service needs. Our technicians know Brisbane\'s steep streets and navigate the area regularly, providing fast response to all Brisbane neighborhoods from the bayfront to the hilltop residential areas.',
      'Brisbane\'s housing includes hillside single-family homes, newer developments, and apartments with bay views. We understand the challenges of Brisbane\'s terrain—steep driveways, limited parking, and complex home layouts. Our vans carry parts for common appliance failures in Brisbane\'s housing stock.',
      'Fast scheduling is standard in Brisbane with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians repair all major appliance brands and handle both standard and high-efficiency models.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Brisbane | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in Brisbane. Fast hillside service. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Hillside appliance repair experts"
        cityName="Brisbane"
        
        
      />

    </div>
  );
};

export default Brisbane;

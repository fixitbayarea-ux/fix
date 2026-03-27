import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Fairfax = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Fairfax\'s West Marin location and temperature variations affect refrigerator compressor performance.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues common in Fairfax homes, especially in older properties downtown.' },
    { title: 'Dryer No Heat', description: 'Heating element failures affect dryers throughout Fairfax residential areas.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water affects dishwasher performance in Fairfax homes.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat problems in ovens throughout Fairfax.' },
    { title: 'Ice Maker Failures', description: 'Water line issues prevent ice production in Fairfax refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout Fairfax.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Fairfax homes.' }
  ];

  const faqData = [
    { question: 'Do you serve all Fairfax neighborhoods?', answer: 'Yes! We serve downtown Fairfax, Manor, and all surrounding neighborhoods with fast scheduling.' },
    { question: 'What\'s your response time to Fairfax?', answer: 'We typically arrive within 1-2 hours for scheduled appointments via Sir Francis Drake Boulevard and Highway 101.' },
    { question: 'Can you service older Fairfax homes?', answer: 'Absolutely. We have experience with appliances in Fairfax\'s older housing stock and downtown properties.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in Fairfax and throughout Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Fairfax Appliance Repair Services',
    paragraphs: [
      'Fairfax\'s location as the gateway to West Marin creates a unique community with a mix of downtown living and hillside homes. Our technicians serve all Fairfax neighborhoods, understanding the town\'s character and the appliances common in both older homes downtown and newer properties in the hills.',
      'We navigate Fairfax via Sir Francis Drake Boulevard, accessing the downtown core and surrounding residential areas efficiently. Our vans carry parts for common appliance failures, and we can source specialized components from our Bay Area network.',
      'Fast scheduling is available in Fairfax with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Fairfax | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in Fairfax. Fast, reliable service throughout West Marin gateway. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in Fairfax"
        cityName="Fairfax"
        
        
      />

    </div>
  );
};

export default Fairfax;

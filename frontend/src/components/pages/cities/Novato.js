import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Novato = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Novato\'s inland location with temperature extremes challenges refrigerator compressors and cooling systems.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues in Novato homes, especially in Bel Marin Keys and Hamilton areas.' },
    { title: 'Dryer No Heat', description: 'Heating element failures common in Novato\'s residential neighborhoods.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water affects dishwasher performance throughout Novato.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat problems in ovens across Novato\'s housing stock.' },
    { title: 'Ice Maker Failures', description: 'Water line issues cause ice maker problems in Novato refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout Novato.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Novato homes.' }
  ];

  const faqData = [
    { question: 'Do you serve all Novato neighborhoods?', answer: 'Yes! We serve downtown Novato, Bel Marin Keys, Hamilton, Ignacio, San Marin, and all other Novato areas with fast scheduling.' },
    { question: 'What\'s your response time to Novato?', answer: 'We typically arrive within 1-2 hours for scheduled appointments via Highway 101.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair throughout Novato and Marin County.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands including Whirlpool, GE, Samsung, LG, Bosch, and more.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' },
    { question: 'Can you service commercial appliances?', answer: 'Yes. We provide light commercial appliance repair in addition to residential service.' }
  ];

  const serviceDescription = {
    title: 'Novato Appliance Repair - North Marin\'s Largest City',
    paragraphs: [
      'Novato, as North Marin\'s largest city, offers diverse appliance service needs from downtown to suburban neighborhoods. Our technicians serve all Novato areas including Bel Marin Keys, Hamilton, San Marin, and Ignacio. We navigate Novato\'s geography efficiently, providing fast response throughout this sprawling North Bay community.',
      'We understand Novato\'s housing stock from older homes near downtown to newer developments in the hills. Our vans carry parts for common appliance failures, and we can source specialized components quickly from our Bay Area network.',
      'Fast scheduling is available in Novato with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Novato | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in Novato. Fast, reliable service throughout North Marin. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="North Marin appliance experts"
        cityName="Novato"
        
        
      />

    </div>
  );
};

export default Novato;

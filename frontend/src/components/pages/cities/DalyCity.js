import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const DalyCity = () => {
  const commonProblems = [
    { title: 'Dryer Vent Moisture Issues', description: 'Daly City\'s persistent fog causes excessive moisture in dryer vents, leading to longer dry times and lint buildup.' },
    { title: 'Refrigerator Humidity Problems', description: 'Coastal humidity affects refrigerator door seals and causes condensation issues in Daly City homes.' },
    { title: 'Washer Drum Corrosion', description: 'Marine air accelerates rust and corrosion in washer drums, especially in Westlake and Serramonte areas.' },
    { title: 'Dishwasher Drain Clogs', description: 'Mineral deposits from Daly City\'s water supply frequently clog dishwasher drains and spray arms.' },
    { title: 'Gas Range Igniter Failure', description: 'Moisture from fog affects gas igniters in Daly City\'s coastal neighborhoods, requiring frequent replacement.' },
    { title: 'Freezer Frost Buildup', description: 'Temperature fluctuations from fog-to-sun transitions cause excessive frost in freezers.' },
    { title: 'Oven Door Seal Damage', description: 'Frequent temperature changes in Daly City\'s microclimate damage oven door gaskets faster than inland areas.' },
    { title: 'Wine Cooler Temperature Swings', description: 'External temperature variations in Top of the Hill and St. Francis Heights challenge wine cooler stability.' }
  ];

  const faqData = [
    { question: 'Do you serve all Daly City neighborhoods?', answer: 'Yes! We service Westlake, Serramonte, Top of the Hill, St. Francis Heights, Crocker, Mission Terrace, Bayshore, and all other Daly City neighborhoods with same-day availability.' },
    { question: 'How does coastal fog affect appliances in Daly City?', answer: 'Daly City\'s fog increases humidity, causing moisture-related issues in dryers, refrigerators, and gas igniters. We\'re experienced in diagnosing and preventing these coastal climate problems.' },
    { question: 'Can you service appliances in Daly City condos?', answer: 'Absolutely! We regularly service condos and townhomes throughout Serramonte, Westlake, and other Daly City communities, following HOA guidelines and building protocols.' },
    { question: 'What\'s your response time in Daly City?', answer: 'We typically arrive within 1-2 hours for same-day appointments in Daly City. We\'re familiar with local traffic patterns and routes for fast service.' },
    { question: 'Do you handle water damage from appliance leaks?', answer: 'Yes. We repair the appliance and can recommend water damage specialists if needed. Our fast response helps minimize damage in Daly City homes.' },
    { question: 'Are you licensed in San Mateo County?', answer: 'Yes. FixitBay LLC is fully licensed and insured to provide appliance repair services in Daly City and throughout San Mateo County.' }
  ];

  const serviceDescription = {
    title: 'Daly City Appliance Repair - Coastal Climate Experts',
    paragraphs: [
      'Daly City\'s location on the San Francisco Peninsula creates unique challenges for home appliances. The city\'s famous fog belt brings persistent moisture that affects dryer performance, refrigerator humidity control, and gas appliance igniters. Our technicians understand these local conditions and come prepared with the right parts and solutions for Daly City\'s coastal microclimate.',
      'From Westlake\'s hillside homes to Serramonte\'s shopping district condos, we navigate Daly City\'s diverse neighborhoods daily. We\'re familiar with the area\'s housing stock—from 1960s tract homes to modern townhomes—and the specific appliance issues each style faces. Our vans are stocked with parts that commonly fail in Daly City\'s moisture-rich environment.',
      'We offer same-day service throughout Daly City with a $60 diagnostic fee fully credited toward repairs. Every repair includes a 180-day warranty covering parts and labor. Our licensed technicians service all major appliance brands and are experienced with both standard and high-efficiency models common in Daly City homes.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Daly City | Same-Day | FixitBay"
        metaDescription="Professional appliance repair in Daly City. Same-day service in Westlake, Serramonte & all neighborhoods. $60 diagnostic applied to repair. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair for Daly City homes"
        cityName="Daly City"
        
        
      />

    </div>
  );
};

export default DalyCity;

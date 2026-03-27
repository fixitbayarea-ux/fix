import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const SanBruno = () => {
  const commonProblems = [
    { title: 'Refrigerator Not Cooling', description: 'San Bruno\'s moderate climate still challenges refrigerators with compressor and temperature control issues.' },
    { title: 'Washer Won\'t Drain', description: 'Drainage issues common in San Bruno homes, especially older properties near Tanforan and downtown.' },
    { title: 'Dryer Takes Too Long', description: 'Lint buildup and vent restrictions affect dryers throughout San Bruno\'s residential neighborhoods.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water mineral deposits affect dishwasher performance in San Bruno homes.' },
    { title: 'Oven Not Heating', description: 'Heating element and igniter failures occur in ovens across San Bruno\'s housing stock.' },
    { title: 'Ice Maker Not Working', description: 'Water inlet valve and line issues cause ice maker problems in San Bruno refrigerators.' },
    { title: 'Gas Range Issues', description: 'Igniter and safety valve problems affect gas ranges in San Bruno\'s older neighborhoods.' },
    { title: 'Cooktop Won\'t Heat', description: 'Electric and induction cooktop element failures common in San Bruno apartments and homes.' }
  ];

  const faqData = [
    { question: 'Do you service all San Bruno neighborhoods?', answer: 'Yes! We serve all San Bruno areas including downtown, Tanforan, Mills Park, Portola Highlands, Rollingwood, and neighborhoods near SFO with fast scheduling.' },
    { question: 'How close are you to San Bruno for fast service?', answer: 'We provide rapid response to San Bruno, typically arriving within 1-2 hours for scheduled appointments via Highway 101, 280, and El Camino Real.' },
    { question: 'Do you service apartments near BART and Caltrain?', answer: 'Yes. We regularly service apartments, condos, and townhomes throughout San Bruno including properties near transit stations.' },
    { question: 'What\'s your diagnostic fee in San Bruno?', answer: 'Our diagnostic fee is $60, which is fully credited toward your repair if you proceed. This covers the visit, testing, and written estimate.' },
    { question: 'Are you licensed in San Mateo County?', answer: 'Yes. FixitBay LLC is fully licensed and insured to provide appliance repair services throughout San Bruno and San Mateo County.' },
    { question: 'Do you service businesses in San Bruno?', answer: 'Yes. We provide appliance repair for light commercial equipment in offices and businesses in addition to residential service.' }
  ];

  const serviceDescription = {
    title: 'Professional Appliance Repair in San Bruno, CA',
    paragraphs: [
      'San Bruno\'s central Peninsula location between San Francisco and the South Bay makes it a strategic service area for FixitBay LLC. From the Tanforan shopping district to Portola Highlands\' hilltop homes, we navigate San Bruno\'s neighborhoods daily. Our technicians know the area\'s mix of post-war tract homes, modern condos near BART, and hillside properties, along with the specific appliance challenges each housing type presents.',
      'San Bruno\'s proximity to SFO and major highways means we can respond quickly to appliance emergencies. We serve residential properties throughout San Bruno\'s diverse neighborhoods, from Mills Park\'s family homes to downtown apartments. Our vans carry parts for common appliance failures, and we can source specialized components quickly from our Peninsula network.',
      'Fast scheduling is standard in San Bruno with a $60 diagnostic fee credited toward all repairs. We provide transparent estimates before starting work and back every repair with a 180-day parts and labor warranty. Our licensed technicians service all major appliance brands and handle both traditional and high-efficiency models.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair San Bruno | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in San Bruno. Fast scheduling near SFO, BART, downtown. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Fast repair throughout San Bruno"
        cityName="San Bruno"
        
        
      />

    </div>
  );
};

export default SanBruno;

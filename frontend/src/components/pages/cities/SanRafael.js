import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const SanRafael = () => {
  const commonProblems = [
    { title: 'Refrigerator Not Cooling', description: 'San Rafael\'s varied climate from canal district to hillsides creates temperature control challenges for refrigerators.' },
    { title: 'Washer Won\'t Drain', description: 'Drainage issues common in San Rafael homes, especially in Terra Linda and Marinwood areas.' },
    { title: 'Dryer Takes Too Long', description: 'Complex vent routing in San Rafael\'s multi-level homes causes dryer performance issues.' },
    { title: 'Dishwasher Leaks', description: 'Door seal and pump failures affect dishwashers throughout San Rafael neighborhoods.' },
    { title: 'Oven Not Heating Properly', description: 'Heating element and thermostat issues in ovens across San Rafael\'s housing stock.' },
    { title: 'Ice Maker Problems', description: 'Water pressure variations in San Rafael\'s hillside areas cause ice maker failures.' },
    { title: 'Gas Range Issues', description: 'Igniter and safety valve problems in gas ranges throughout San Rafael.' },
    { title: 'Cooktop Element Failure', description: 'Electric and induction cooktop elements burn out in San Rafael homes.' }
  ];

  const faqData = [
    { question: 'Do you service all San Rafael neighborhoods?', answer: 'Yes! We serve downtown San Rafael, Terra Linda, Marinwood, Sun Valley, Peacock Gap, Dominican, and all other San Rafael areas with same-day service.' },
    { question: 'How quickly can you reach San Rafael?', answer: 'We typically arrive within 1-2 hours for same-day appointments, accessing San Rafael via Highway 101 and local routes.' },
    { question: 'Do you service apartments near downtown?', answer: 'Absolutely. We regularly service apartments, condos, and homes throughout downtown San Rafael and surrounding neighborhoods.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, Thermador, Viking, Sub-Zero, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured to provide appliance repair throughout San Rafael and Marin County.' },
    { question: 'What warranty do you provide?', answer: 'Every completed repair includes our standard 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'San Rafael Appliance Repair Services',
    paragraphs: [
      'San Rafael, as Marin County\'s largest city, presents diverse appliance service needs from downtown apartments to hillside estates. Our technicians navigate San Rafael daily, from Fourth Street\'s commercial district to Terra Linda\'s residential neighborhoods and Marinwood\'s family homes. We understand San Rafael\'s mix of housing styles and the specific appliance challenges each area faces.',
      'We serve San Rafael\'s varied communities: downtown living spaces, mid-century homes in Terra Linda, hillside properties in Dominican, and waterfront residences along the canal. Our team is experienced with both standard residential appliances and the premium brands common in San Rafael\'s upscale neighborhoods. We stock parts for frequent failures and source specialized components quickly.',
      'Same-day service is available throughout San Rafael with a $60 diagnostic fee credited toward repairs. We provide detailed estimates before starting work and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands and handle both traditional and high-efficiency models.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair San Rafael | Same-Day Service | FixitBay"
        metaDescription="Professional appliance repair in San Rafael. Same-day service in Terra Linda, Marinwood, downtown. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in San Rafael"
        cityName="San Rafael"
        
        
      />

    </div>
  );
};

export default SanRafael;

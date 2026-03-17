import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const SanAnselmo = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Temperature control problems affect refrigerators in San Anselmo\'s downtown and residential areas.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues common in San Anselmo homes, especially in older properties near downtown.' },
    { title: 'Dryer No Heat', description: 'Heating element failures affect dryers throughout San Anselmo.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water affects dishwasher spray arms and pumps in San Anselmo homes.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat problems in ovens throughout San Anselmo residential areas.' },
    { title: 'Ice Maker Failures', description: 'Water line issues prevent ice production in San Anselmo refrigerators.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout San Anselmo.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in San Anselmo homes.' }
  ];

  const faqData = [
    { question: 'Do you serve all San Anselmo neighborhoods?', answer: 'Yes! We serve downtown San Anselmo, Sleepy Hollow, and all surrounding neighborhoods with same-day service.' },
    { question: 'Can you service homes near the antique district?', answer: 'Absolutely. We regularly service homes and businesses throughout downtown San Anselmo including the historic antique district.' },
    { question: 'What\'s your response time to San Anselmo?', answer: 'We typically arrive within 1-2 hours for same-day appointments via Highway 101 and Sir Francis Drake Boulevard.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands: Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, and more.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in San Anselmo and throughout Marin County.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'San Anselmo Appliance Repair Services',
    paragraphs: [
      'San Anselmo\'s charming downtown antique district and tree-lined residential streets make it a beloved Central Marin community. Our technicians serve all San Anselmo neighborhoods from the downtown business district to Sleepy Hollow and surrounding residential areas. We understand San Anselmo\'s mix of historic homes and modern properties.',
      'We navigate San Anselmo efficiently via Sir Francis Drake Boulevard and Red Hill Avenue, accessing downtown and residential neighborhoods quickly. Our vans carry parts for common appliance failures in San Anselmo\'s diverse housing stock, and we can source specialized components from our Bay Area network.',
      'Same-day service is available throughout San Anselmo with a $60 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major appliance brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair San Anselmo | Same-Day Service | FixitBay"
        metaDescription="Professional appliance repair in San Anselmo. Same-day service downtown and in Sleepy Hollow. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in San Anselmo"
        cityName="San Anselmo"
        
        
      />

    </div>
  );
};

export default SanAnselmo;

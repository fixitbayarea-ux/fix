import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Millbrae = () => {
  const commonProblems = [
    { title: 'Refrigerator Not Cooling', description: 'Compressor and cooling system issues affect refrigerators in Millbrae\'s bayside homes and hillside properties.' },
    { title: 'Dishwasher Leaks', description: 'Door seal and pump failures cause dishwasher leaks throughout Millbrae neighborhoods.' },
    { title: 'Washer Won\'t Spin', description: 'Motor and transmission issues affect washers in Millbrae\'s older single-family homes and newer condos.' },
    { title: 'Dryer No Heat', description: 'Heating element and thermal fuse failures common in Millbrae dryers.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat and sensor problems cause temperature inaccuracy in Millbrae ovens.' },
    { title: 'Ice Maker Not Making Ice', description: 'Water line and valve issues prevent ice production in Millbrae refrigerators.' },
    { title: 'Gas Range Won\'t Light', description: 'Igniter failures affect gas ranges throughout Millbrae\'s residential areas.' },
    { title: 'Cooktop Element Failure', description: 'Electric cooktop elements burn out in Millbrae homes and apartments.' }
  ];

  const faqData = [
    { question: 'Do you service Millbrae homes near BART and Caltrain?', answer: 'Yes! We provide fast appliance repair throughout Millbrae including neighborhoods near transit stations, downtown, and hillside areas.' },
    { question: 'What\'s your response time in Millbrae?', answer: 'We typically arrive within 1-2 hours for scheduled appointments in Millbrae, accessing the area via Highway 101, El Camino Real, and local routes.' },
    { question: 'Do you service high-rise condos in Millbrae?', answer: 'Yes. We regularly service appliances in Millbrae\'s condo buildings and high-rises, coordinating with building management as needed.' },
    { question: 'What brands do you repair in Millbrae?', answer: 'We service all major brands: Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Thermador, and more.' },
    { question: 'Are you licensed to work in Millbrae?', answer: 'Yes. FixitBay LLC is fully licensed and insured to provide appliance repair services in Millbrae and throughout San Mateo County.' },
    { question: 'Do you offer warranties on repairs in Millbrae?', answer: 'Yes. Every completed repair includes our standard 180-day parts and labor warranty.' }
  ];

  const serviceDescription = {
    title: 'Millbrae Appliance Repair Services',
    paragraphs: [
      'Millbrae\'s unique position on the San Francisco Bay creates a diverse community from bayside flats to hillside homes overlooking the water. Our technicians serve Millbrae daily, navigating from El Camino Real\'s commercial corridor to residential neighborhoods throughout the city. We understand Millbrae\'s mix of mid-century homes, modern condos near transit, and newer developments, along with the appliances common in each.',
      'Millbrae\'s proximity to SFO and excellent transit connections make it a convenient service location. We serve residential properties throughout Millbrae\'s neighborhoods, from downtown apartments to hillside single-family homes. Our vans carry parts for frequent appliance failures, and our Peninsula network allows quick sourcing of specialized components.',
      'Fast scheduling is available in Millbrae with a $60 diagnostic fee credited toward repairs. We provide detailed estimates before beginning work and back every repair with a 180-day warranty. Our licensed technicians repair all major appliance brands and are experienced with both standard and high-efficiency models common in Millbrae homes.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Millbrae | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in Millbrae near BART, Caltrain. Fast scheduling. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert repair in Millbrae"
        cityName="Millbrae"
        
        
      />

    </div>
  );
};

export default Millbrae;

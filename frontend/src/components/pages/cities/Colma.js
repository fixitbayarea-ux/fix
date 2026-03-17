import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Colma = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Colma\'s compact residential areas experience frequent refrigerator compressor and cooling system failures.' },
    { title: 'Dishwasher Not Draining', description: 'Mineral buildup from local water supply causes drainage problems in Colma dishwashers.' },
    { title: 'Washer Not Spinning', description: 'Overloading and motor issues common in Colma\'s high-density housing near BART.' },
    { title: 'Dryer No Heat', description: 'Heating element failures and thermal fuse issues affect dryers in Colma apartments and condos.' },
    { title: 'Oven Temperature Inaccurate', description: 'Calibration issues and thermostat failures in ovens throughout Hillside Blvd and Lawndale areas.' },
    { title: 'Ice Maker Leaking', description: 'Water line connections and valve failures cause ice maker leaks in Colma homes.' },
    { title: 'Range Burner Won\'t Light', description: 'Gas igniters fail frequently in Colma\'s mixed residential/retail corridors.' },
    { title: 'Cooktop Element Failure', description: 'Electric and induction cooktop elements burn out in Colma\'s older condo buildings.' }
  ];

  const faqData = [
    { question: 'Do you service apartments near Colma BART?', answer: 'Yes! We provide fast appliance repair service throughout Colma including all apartments and condos near BART and along the retail corridors.' },
    { question: 'What\'s your typical response time in Colma?', answer: 'We typically arrive within 1 hour for same-day appointments in Colma. Our proximity allows for fast response to this compact service area.' },
    { question: 'Can you service appliances in mixed-use buildings?', answer: 'Absolutely. We regularly service appliances in Colma\'s mixed residential/retail buildings following building management guidelines.' },
    { question: 'Do you work with Colma HOAs?', answer: 'Yes. We\'re experienced working with Colma homeowner associations and follow their protocols for appliance service and installation.' },
    { question: 'What areas near Colma do you cover?', answer: 'We serve Colma and nearby Daly City, South San Francisco, San Bruno, Brisbane, and Pacifica with same-day availability.' },
    { question: 'Are you licensed in San Mateo County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair throughout Colma and San Mateo County.' }
  ];

  const serviceDescription = {
    title: 'Fast Appliance Repair in Colma, CA',
    paragraphs: [
      'Colma\'s unique position as one of the smallest incorporated towns in California creates a tight-knit community with specific appliance service needs. Our technicians know Colma\'s layout intimately—from Hillside Boulevard to Lawndale Boulevard, and the residential areas surrounding Colma BART. We navigate the town\'s compact geography quickly, ensuring fast response times for all appliance emergencies.',
      'Colma\'s housing stock includes apartments, condos, and single-family homes, many in mixed-use buildings near the retail corridors. We service all housing types and are familiar with building access procedures, parking protocols, and HOA requirements specific to Colma properties. Our vans carry parts for common failures in Colma\'s appliance population.',
      'Same-day service is standard in Colma with our $60 diagnostic fee credited toward all repairs. We provide transparent upfront estimates and back every repair with a 180-day parts and labor warranty. Our licensed technicians repair all major appliance brands and understand the unique challenges of Colma\'s compact urban environment.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Colma | Fast Same/Next-Day | FixitBay"
        metaDescription="Professional appliance repair in Colma near BART and retail corridors. Same/next-day options. $60 diagnostic applied to repair. 6-month warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Expert appliance repair for Colma residents"
        cityName="Colma"
        
        
      />

    </div>
  );
};

export default Colma;

import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Sausalito = () => {
  const commonProblems = [
    { title: 'Hillside Home Appliance Stress', description: 'Sausalito\'s dramatic hillside locations create unique challenges with water pressure, drainage, and appliance leveling.' },
    { title: 'Premium Appliance Repairs', description: 'Sausalito homes feature high-end brands like Sub-Zero, Wolf, and Miele requiring specialized service.' },
    { title: 'Coastal Moisture Issues', description: 'Bay proximity causes humidity-related problems in refrigerators, dryers, and gas appliances.' },
    { title: 'Washer Balance Problems', description: 'Uneven floors on Sausalito\'s hillsides cause washer vibration and balance issues.' },
    { title: 'Dryer Vent Complexity', description: 'Multi-level homes require complex dryer vent routing, leading to airflow restrictions.' },
    { title: 'Dishwasher Drainage Issues', description: 'Hillside plumbing challenges affect dishwasher drainage in Sausalito properties.' },
    { title: 'Refrigerator Water Lines', description: 'Water pressure variations on hillsides stress ice maker and water dispenser lines.' },
    { title: 'Built-In Appliance Service', description: 'Sausalito\'s luxury homes feature many built-in appliances requiring specialized installation and repair.' }
  ];

  const faqData = [
    { question: 'Do you service high-end appliance brands?', answer: 'Yes! We specialize in premium brands common in Sausalito: Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, and all major manufacturers.' },
    { question: 'Can you navigate Sausalito\'s hillside streets?', answer: 'Absolutely. Our technicians are experienced with Sausalito\'s steep, winding roads and challenging parking situations.' },
    { question: 'Do you service houseboats and waterfront homes?', answer: 'Yes. We service appliances in all Sausalito properties including houseboats, waterfront homes, and hillside estates.' },
    { question: 'What\'s your response time to Sausalito?', answer: 'We typically arrive within 1-2 hours for scheduled appointments, accessing Sausalito via Highway 101 and local routes.' },
    { question: 'Do you handle built-in appliance repairs?', answer: 'Yes. We regularly service built-in refrigerators, wine coolers, and other integrated appliances common in Sausalito homes.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair throughout Sausalito and Marin County.' }
  ];

  const serviceDescription = {
    title: 'Sausalito Appliance Repair - Premium & Hillside Specialists',
    paragraphs: [
      'Sausalito\'s stunning hillside location overlooking San Francisco Bay creates both beauty and complexity for appliance service. From waterfront houseboats to hillside estates with panoramic views, we navigate Sausalito\'s unique geography daily. Our technicians understand the challenges of steep terrain, limited access, and the premium appliances common in this affluent Marin community.',
      'Sausalito homes feature high-end appliances from Sub-Zero, Wolf, Thermador, and Miele alongside standard brands. We specialize in servicing both luxury and traditional appliances, understanding the specific needs of built-in units, wine storage systems, and integrated kitchen designs. We also handle challenges unique to Sausalito: water pressure variations, coastal humidity, and complex installations in multi-level hillside homes.',
      'Fast scheduling is available throughout Sausalito with a $60 diagnostic fee credited toward repairs. We carry specialized tools for premium appliances and can source high-end parts quickly. Every repair includes a 180-day warranty, and our licensed technicians are experienced with luxury appliances and challenging hillside installations.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Sausalito | Premium Brands | FixitBay LLC"
        metaDescription="Professional appliance repair in Sausalito. Hillside homes and premium brands. Sub-Zero, Wolf, Miele specialists. Fast scheduling. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Luxury appliance experts"
        cityName="Sausalito"
        
        
      />

    </div>
  );
};

export default Sausalito;

import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const MillValley = () => {
  const commonProblems = [
    { title: 'Fridge Not Cooling in Hillside Homes', description: 'Mill Valley\'s steep hillside locations and redwood-shaded areas create temperature variations affecting refrigerator performance.' },
    { title: 'Ice Maker Leaking', description: 'Water pressure variations in Mill Valley\'s hillside plumbing cause ice maker line stress and leaks.' },
    { title: 'Washer Off-Balance on Uneven Floors', description: 'Many Mill Valley homes on slopes have uneven floors, causing washer balance and vibration issues.' },
    { title: 'Dryer No Heat / Long Dry Times', description: 'Complex vent routing in Mill Valley\'s multi-level homes creates airflow restrictions and dryer performance problems.' },
    { title: 'Dishwasher Not Draining', description: 'Mill Valley\'s well water and municipal water variations cause mineral buildup in dishwasher pumps and drains.' },
    { title: 'Freezer Icing Up', description: 'Temperature fluctuations from redwood shade to full sun exposure affect freezer defrost cycles in Mill Valley.' },
    { title: 'Range Burner Won\'t Ignite', description: 'Moisture from Mill Valley\'s redwood microclimate affects gas igniters, especially in homes near Muir Woods.' },
    { title: 'Built-In Fridge Issues', description: 'Mill Valley\'s upscale homes feature many Sub-Zero and built-in refrigerators requiring specialized service.' }
  ];

  const faqData = [
    { question: 'Do you offer fast scheduling in Mill Valley?', answer: 'Yes. We provide same/next-day appointments across Mill Valley, including Tamalpais Valley, Almonte, Strawberry, Boyle Park, and Scott Valley, navigating hillside streets easily.' },
    { question: 'How does the $80 diagnostic work?', answer: 'If you proceed with the repair, the $80 diagnostic is fully credited toward your repair total. If no repair is performed, the diagnostic covers the visit and troubleshooting.' },
    { question: 'Which brands do you stock parts for in Mill Valley?', answer: 'We carry common parts for LG, Samsung, Whirlpool, GE, Maytag, KitchenAid, Bosch, and more. For premium brands common in Mill Valley (Sub-Zero, Thermador), we source fast from local suppliers.' },
    { question: 'Do you service built-in and panel-ready fridges?', answer: 'Yes. We regularly work on built-in and panel-ready refrigerators (Sub-Zero, Thermador, KitchenAid, Bosch) in Mill Valley\'s hillside homes and condos.' },
    { question: 'What areas near Mill Valley do you cover?', answer: 'We serve Marin City, Sausalito, Tiburon, Corte Madera, Larkspur, Strawberry, Tamalpais Valley, San Rafael, and the wider Marin County area.' },
    { question: 'Can you navigate steep driveways and narrow roads?', answer: 'Yes. Our technicians are experienced with Mill Valley\'s challenging hillside access, steep driveways, and winding roads throughout the area.' }
  ];

  const serviceDescription = {
    title: 'Mill Valley Appliance Repair - Hillside & Redwood Specialists',
    paragraphs: [
      'Mill Valley\'s dramatic hillside setting beneath Mount Tamalpais creates unique challenges for home appliances. Steep terrain, redwood microclimates, and elevation changes affect everything from refrigerator cooling to dryer venting. Our technicians navigate Mill Valley\'s winding roads daily, from downtown\'s commercial district to Tam Valley\'s hillside homes, understanding both the geography and the upscale appliances common in this affluent Marin community.',
      'We service Mill Valley\'s mix of mid-century modern homes, contemporary hillside properties, and downtown condos. Many Mill Valley homes feature premium appliances like Sub-Zero refrigerators, Wolf ranges, and Bosch dishwashers, which we specialize in servicing. We also handle challenges specific to hillside homes: water pressure variations, complex dryer vent routing, and appliances stressed by uneven floors and temperature gradients.',
      'Fast scheduling is available throughout Mill Valley with a $80 diagnostic fee credited toward repairs. We stock parts for common failures and can source premium brand components quickly. Every repair includes a 180-day warranty, and our licensed technicians are experienced with both standard and luxury appliances found in Mill Valley homes.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Mill Valley | Same/Next-Day | FixitBay LLC"
        metaDescription="Same/next-day appliance repair in Mill Valley, Tamalpais Valley, and Strawberry. $80 diagnostic applied to repair. 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Hillside home appliance experts"
        cityName="Mill Valley"
        
        
      />

    </div>
  );
};

export default MillValley;

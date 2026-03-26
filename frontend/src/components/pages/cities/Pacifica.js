import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import cityLocalData from '../../../data/cityLocalData';

const Pacifica = () => {
  const commonProblems = [
    { title: 'Dryer Vent Moisture / Long Dry Times', description: 'Pacifica\'s marine layer and coastal humidity create chronic moisture in dryer vents, requiring frequent cleaning and maintenance.' },
    { title: 'Gas Range Won\'t Ignite', description: 'Salt air and moisture corrode gas igniters in Pacifica homes from Linda Mar to Pedro Point, causing ignition failures.' },
    { title: 'Refrigerator Runs Warm in Garage', description: 'Many Pacifica garages face ocean exposure, challenging refrigerators and freezers with humidity and temperature extremes.' },
    { title: 'Dishwasher Leaks / Not Draining', description: 'Coastal moisture affects dishwasher door seals and pumps throughout Pacifica neighborhoods.' },
    { title: 'Washer Basket Rust / Off-Balance', description: 'Marine air accelerates rust in washer drums and corrodes components in Pacifica\'s coastal climate.' },
    { title: 'Freezer Frost Build-Up', description: 'Humidity from Pacifica\'s fog creates excessive frost in freezers, especially in Sharp Park and Rockaway areas.' },
    { title: 'Oven Temperature Issues', description: 'Temperature sensors and thermostats fail more frequently in Pacifica\'s humid coastal environment.' },
    { title: 'Corrosion on Terminals/Igniters', description: 'Salt air throughout Pacifica corrodes electrical connections and gas components faster than inland areas.' }
  ];

  const faqData = [
    { question: 'Do you work around coastal humidity/salt-air issues?', answer: 'Yes. We consider marine layer moisture and salt-air when inspecting igniters, burners, terminals, vents, and coils to prevent recurring failures specific to Pacifica\'s coastal climate.' },
    { question: 'Can you clean/repair dryer vents in Pacifica homes?', answer: 'Yes. We address moisture-laden vent runs, improve airflow, and recommend periodic vent maintenance to reduce dry times and heat strain in Pacifica\'s humid conditions.' },
    { question: 'Do you offer same-day availability in Pacifica?', answer: 'Yes! We offer same/next-day appointments across Pacifica: Linda Mar, Sharp Park, Rockaway, Vallemar, Pacific Manor, Fairmont, and Pedro Point.' },
    { question: 'Do you service garage fridges/freezers in coastal areas?', answer: 'Yes. We test ambient conditions and advise on performance adjustments when appliances are placed in humid/coastal garages common in Pacifica.' },
    { question: 'What brands do you handle in Pacifica?', answer: 'We service all major brands: LG, Samsung, Whirlpool, GE, Kenmore, Frigidaire, Maytag, Bosch, Thermador, Viking, KitchenAid, Sub-Zero, Wolf, Miele, and more.' },
    { question: 'What warranty is included?', answer: 'Every completed repair includes a 180-day parts and labor warranty, covering both the repair and parts against coastal environment factors.' }
  ];

  const serviceDescription = {
    title: 'Coastal Appliance Repair Experts Serving Pacifica',
    paragraphs: [
      'Pacifica\'s dramatic Pacific coastline creates one of the Bay Area\'s most challenging environments for home appliances. From Linda Mar\'s surf-side homes to Pedro Point\'s clifftop properties, marine layer fog, salt air, and coastal humidity take a toll on refrigerators, dryers, and gas appliances. Our technicians specialize in diagnosing and preventing the corrosion, moisture, and airflow issues unique to Pacifica\'s oceanfront location.',
      'We serve all Pacifica neighborhoods daily: Sharp Park, Rockaway Beach, Vallemar, Pacific Manor, Fairmont, and the coastal Highway 1 corridor. Our vans carry parts that resist corrosion and moisture damage, and we stock components that commonly fail in Pacifica\'s salty marine environment. We understand challenges like moisture-laden dryer vents, corroded gas igniters, and humidity-stressed refrigerators.',
      'Same-day service is available throughout Pacifica with a $60 diagnostic fee credited toward repairs. We provide transparent estimates, use corrosion-resistant parts when beneficial, and back every repair with a 180-day warranty. Our licensed technicians are coastal climate specialists familiar with preventing recurring issues in Pacifica homes.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Pacifica | Coastal Same/Next-Day | FixitBay LLC"
        metaDescription="Coastal appliance repair in Pacifica—Linda Mar, Sharp Park, Rockaway. Salt-air aware repairs. $60 diagnostic credited. 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="Coastal climate repair experts"
        cityName="Pacifica"
        
        
      />

    </div>
  );
};

export default Pacifica;

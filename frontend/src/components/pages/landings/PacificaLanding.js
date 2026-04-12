import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const PacificaLanding = () => (
  <CityLandingPage
    city="Pacifica"
    citySlug="pacifica"
    pageTitle="Appliance Repair Pacifica | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Pacifica. $80 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Linda Mar', 'Rockaway Beach', 'Vallemar', 'Pedro Point', 'Fairway Park', 'Sharp Park', 'Edgemar', 'Pacific Manor', 'West Sharp Park', 'Pacifica Highlands']}
    localExpertise="Pacifica's coastal location means constant exposure to salt air, fog, and moisture. This marine environment is hard on appliances — refrigerator door hinges corrode, dryer drums develop surface rust, and dishwasher components degrade faster than in inland cities. Our technicians are experienced with these Pacifica-specific challenges and carry corrosion-resistant replacement parts."
    homeTypes="Pacifica homes range from 1950s-era ranch houses in Linda Mar to hillside homes with ocean views in Vallemar and Pedro Point. Many are exposed to direct sea spray. We service single-family homes, condos near Rockaway Beach, and apartments throughout the city."
    commonProblems={[
      { title: 'Refrigerator Hinge Corrosion', description: 'Salt air corrodes refrigerator door hinges and handles in Pacifica homes. Stiff or broken hinges cause poor door sealing. We replace corroded hardware and inspect gaskets.' },
      { title: 'Dryer Drum Rust', description: 'Moisture from Pacifica\'s fog and sea air causes interior drum rust on older dryers. Rust stains clothes and degrades components. We assess whether drum replacement or a new dryer makes more sense.' },
      { title: 'Washer Mold from Marine Humidity', description: 'Front-load washers in coastal Pacifica homes are especially prone to mold growth in the door boot and detergent drawer. We clean, replace seals, and advise on prevention.' },
      { title: 'Dishwasher Spray Arm Corrosion', description: 'Metal spray arms in Pacifica dishwashers corrode and clog faster due to mineral-heavy coastal water. We descale or replace spray arms for full cleaning performance.' },
      { title: 'Oven Igniter Failures', description: 'Humid air causes gas oven igniters to absorb moisture and crack. We replace igniters and ensure reliable ignition in Pacifica\'s damp climate.' },
      { title: 'Wine Cooler Condensation', description: 'Pacifica\'s humidity causes excessive condensation inside wine coolers, affecting temperature stability. We fix drainage, fans, and thermostat issues.' },
    ]}
    recentRepairs={[
      { appliance: 'Whirlpool Refrigerator — Corroded Hinges', description: 'Door not sealing due to rusted hinges. Replaced both hinges and gasket. Door closes tight, sealing perfectly.', location: 'Linda Mar' },
      { appliance: 'Samsung Front-Load Washer — Mold', description: 'Severe mold in door boot. Replaced gasket, cleaned drum and detergent tray. Fresh smell restored.', location: 'Rockaway Beach' },
      { appliance: 'Maytag Dryer — Drum Rust', description: 'Surface rust staining towels. Determined drum replacement at $180 was cost-effective vs. new unit. Installed and tested.', location: 'Vallemar' },
      { appliance: 'KitchenAid Dishwasher — Spray Arms', description: 'Top rack not cleaning. Found corroded upper spray arm clogged with mineral buildup. Replaced and descaled.', location: 'Pedro Point' },
    ]}
    faqData={[
      { question: 'Do you offer same-day appliance repair in Pacifica?', answer: 'Yes. Pacifica is in our core service area. We provide same- or next-day appointments Monday through Saturday.' },
      { question: 'Does living near the ocean really damage appliances?', answer: 'Yes. Salt air, fog, and humidity accelerate corrosion on metal parts, degrade rubber seals faster, and promote mold growth. Regular maintenance can extend appliance life significantly in Pacifica.' },
      { question: 'How much does appliance repair cost in Pacifica?', answer: 'Diagnostic is $80, applied toward repair. Most Pacifica repairs cost $250–$450. We provide a firm quote before starting any work.' },
      { question: 'Which Pacifica neighborhoods do you serve?', answer: 'All of them — Linda Mar, Rockaway Beach, Vallemar, Pedro Point, Fairway Park, Sharp Park, Edgemar, Pacific Manor, and Pacifica Highlands.' },
      { question: 'Are you licensed for Pacifica?', answer: 'Yes. FixitBay LLC is fully licensed (CA #51001) and insured for residential appliance repair in Pacifica and San Mateo County.' },
    ]}
    nearbyCities={[
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'San Bruno', slug: 'san-bruno' },
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'Colma', slug: 'colma' },
      { name: 'Montara', slug: 'montara' },
    ]}
  />
);

export default PacificaLanding;

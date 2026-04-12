import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const MillbraeLanding = () => (
  <CityLandingPage
    city="Millbrae"
    citySlug="millbrae"
    pageTitle="Appliance Repair Millbrae | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Millbrae. $80 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Meadows', 'Highlands', 'Mossdale', 'Mills Estate', 'Lomita Heights', 'Taylor Boulevard', 'Downtown Millbrae', 'Green Hills', 'Millbrae Meadows', 'Millbrae Highlands']}
    localExpertise="Millbrae is home to upscale single-family residences and premium condos — and the kitchens match. Thermador ranges, Bosch dishwashers, and Sub-Zero-style refrigerators are standard in Millbrae's higher-end homes. Our technicians are factory-trained on these premium brands and carry specialized diagnostic equipment."
    homeTypes="Millbrae's housing includes executive single-family homes in the Highlands and Meadows, luxury condos near the Caltrain/BART station, and established mid-century residences along Taylor Boulevard. We service every home type, from compact condo appliances to full-size built-in units."
    commonProblems={[
      { title: 'Thermador Range Error Codes', description: 'Thermador ranges in Millbrae homes display E-codes for igniter faults, sensor failures, and oven lockouts. We diagnose and resolve all Thermador error codes same day.' },
      { title: 'Bosch Dishwasher Performance', description: 'Bosch is the most popular dishwasher brand in Millbrae. Drain pump failures, water inlet issues, and detergent dispenser jams are the most common service calls.' },
      { title: 'Built-In Refrigerator Cooling', description: 'Premium built-in fridges (Sub-Zero, Thermador, Bosch) in Millbrae homes require precise temperature control. We repair compressors, fans, and sealed systems.' },
      { title: 'Washer Noise in Multi-Level Homes', description: 'Millbrae\'s hillside homes amplify washer vibration on upper floors. We balance drums, replace shock absorbers, and ensure proper leveling.' },
      { title: 'Dryer Vent Restrictions', description: 'Multi-story Millbrae homes often have long, vertical dryer vent runs that collect lint faster. We clean and inspect full vent systems for safety and efficiency.' },
      { title: 'Wine Cooler Thermostat Failures', description: 'Many Millbrae homes have dedicated wine storage. Thermostat and compressor issues cause temperature swings. We repair all wine cooler brands.' },
    ]}
    recentRepairs={[
      { appliance: 'Thermador Range — Igniter', description: 'Oven not reaching temperature. Replaced faulty hot-surface igniter, calibrated thermostat. Preheats to 400°F in 8 minutes.', location: 'Millbrae Highlands' },
      { appliance: 'Bosch 800 Series Dishwasher — E24', description: 'Drain error on a 3-year-old unit. Cleared check valve blockage, replaced drain pump. Full cycle test passed.', location: 'Meadows' },
      { appliance: 'Sub-Zero Refrigerator — Compressor', description: 'Running warm at 48°F. Recharged sealed system and replaced start relay. Holding steady at 37°F.', location: 'Mills Estate' },
      { appliance: 'Samsung Washer — Door Boot Seal', description: 'Water leaking from front-load washer door. Replaced torn door boot gasket, no more leaks.', location: 'Taylor Boulevard' },
    ]}
    faqData={[
      { question: 'Do you service Thermador and Sub-Zero in Millbrae?', answer: 'Yes. Our technicians are experienced with all premium brands including Thermador, Sub-Zero, Bosch, Miele, and Wolf. We carry specialized tools and order exact OEM parts.' },
      { question: 'How fast can you get to Millbrae?', answer: 'We offer same- or next-day appointments in Millbrae. Most morning bookings are confirmed for the same day. We\'re typically on-site within 1–2 hours of the appointment window.' },
      { question: 'What does appliance repair cost in Millbrae?', answer: 'Diagnostic is $80, applied toward the repair. Standard repairs range $250–$450. Premium brand repairs (Thermador, Sub-Zero) may run $350–$650 depending on parts.' },
      { question: 'Which Millbrae neighborhoods do you serve?', answer: 'All Millbrae neighborhoods: Meadows, Highlands, Mills Estate, Mossdale, Lomita Heights, Taylor Boulevard, Downtown Millbrae, and Green Hills.' },
      { question: 'Are you licensed for Millbrae and San Mateo County?', answer: 'Yes. FixitBay LLC holds CA License #51001 and is fully insured throughout San Mateo County.' },
    ]}
    nearbyCities={[
      { name: 'San Bruno', slug: 'san-bruno' },
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Daly City', slug: 'daly-city' },
    ]}
    brands={['Thermador', 'Bosch', 'Sub-Zero', 'Wolf', 'Miele', 'Samsung', 'LG', 'KitchenAid', 'Whirlpool', 'GE', 'Maytag', 'Frigidaire', 'Viking']}
  />
);

export default MillbraeLanding;

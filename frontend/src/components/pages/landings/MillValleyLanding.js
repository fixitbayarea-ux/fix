import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const MillValleyLanding = () => (
  <CityLandingPage
    city="Mill Valley"
    citySlug="mill-valley"
    pageTitle="Appliance Repair Mill Valley | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Mill Valley. $60 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Downtown Mill Valley', 'Blithedale Canyon', 'Cascade Canyon', 'Alto', 'Tamalpais Valley', 'Strawberry', 'Homestead Valley', 'Scott Valley', 'Enchanted Knolls', 'Country Club']}
    localExpertise="Mill Valley is Marin County's most affluent community, and the kitchens reflect it. Sub-Zero refrigerators, Wolf ranges, Miele dishwashers, and Thermador cooktops are standard in Mill Valley homes. Our technicians are factory-trained on these luxury brands and understand the precision required for high-end appliance repair."
    homeTypes="Mill Valley's housing ranges from historic redwood cabins in the canyons to contemporary hillside estates with panoramic views. Kitchens in newer Mill Valley homes feature professional-grade built-in appliances that demand specialized service. We also maintain appliances in Strawberry's condos and Alto's townhomes."
    commonProblems={[
      { title: 'Sub-Zero Refrigerator Sealed System', description: 'Sub-Zero refrigerators in Mill Valley homes require expert service for compressor and sealed system repairs. We diagnose cooling failures, replace components, and recharge systems to factory specifications.' },
      { title: 'Wolf Range Burner Issues', description: 'Wolf dual-fuel ranges are a Mill Valley staple. Igniter failures, gas valve problems, and oven sensor errors are common service calls. We repair all Wolf range models.' },
      { title: 'Miele Dishwasher Diagnostics', description: 'Miele dishwashers are engineered differently than mass-market brands. Our technicians know Miele\'s diagnostic codes, pump systems, and control boards. We fix them right the first time.' },
      { title: 'Thermador Cooktop Induction Faults', description: 'Induction cooktops in Mill Valley kitchens fail when control boards or coils degrade. We test each zone and replace failed induction components.' },
      { title: 'Dryer Venting Through Canyon Homes', description: 'Mill Valley\'s canyon homes have complex vent runs through walls and crawl spaces. Lint accumulation is a fire hazard. We clean and inspect full vent systems.' },
      { title: 'Wine Cooler Temperature Precision', description: 'Serious wine collectors in Mill Valley need exact temperature control. We repair Sub-Zero, Thermador, and standalone wine coolers to maintain optimal storage conditions.' },
    ]}
    recentRepairs={[
      { appliance: 'Sub-Zero 48" Refrigerator — Compressor', description: 'Warm side reaching 45°F. Diagnosed failed compressor, replaced with OEM unit, recharged. Running at 37°F.', location: 'Blithedale Canyon' },
      { appliance: 'Wolf 48" Dual-Fuel Range — Igniter', description: 'Two burners not lighting. Replaced hot-surface igniters, tested all six burners and oven. Full function restored.', location: 'Country Club area' },
      { appliance: 'Miele G7000 Dishwasher — Drain Pump', description: 'F70 error code, water standing in tub. Replaced drain pump assembly, cleared error. Three test cycles perfect.', location: 'Downtown Mill Valley' },
      { appliance: 'Thermador Induction Cooktop — Zone Failure', description: 'Front-left zone not heating. Replaced induction coil and tested all zones. Full cooking power restored.', location: 'Tamalpais Valley' },
    ]}
    faqData={[
      { question: 'Do you repair Sub-Zero and Wolf in Mill Valley?', answer: 'Yes. We are experienced with all luxury brands including Sub-Zero, Wolf, Miele, Thermador, Viking, and Bosch. Our technicians carry specialized diagnostic tools for these brands.' },
      { question: 'How fast can you get to Mill Valley?', answer: 'We offer same- or next-day appointments in Mill Valley. Most morning bookings are confirmed for the same day. We access all Mill Valley neighborhoods including the canyons.' },
      { question: 'What does luxury appliance repair cost in Mill Valley?', answer: 'Diagnostic is $60, applied toward repair. Standard repairs range $250–$450. Luxury brand repairs (Sub-Zero, Wolf, Miele) typically run $350–$650 depending on parts needed.' },
      { question: 'Do you service Mill Valley canyon homes?', answer: 'Absolutely. We regularly service homes in Blithedale Canyon, Cascade Canyon, and Homestead Valley. Our technicians know the narrow roads and are equipped for hillside access.' },
      { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC holds CA License #51001 and is fully insured for appliance repair throughout Marin County, including Mill Valley.' },
    ]}
    nearbyCities={[
      { name: 'Sausalito', slug: 'sausalito' },
      { name: 'Corte Madera', slug: 'corte-madera' },
      { name: 'Tiburon', slug: 'tiburon' },
      { name: 'San Rafael', slug: 'san-rafael' },
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Larkspur', slug: 'larkspur' },
    ]}
    brands={['Sub-Zero', 'Wolf', 'Miele', 'Thermador', 'Viking', 'Bosch', 'KitchenAid', 'Samsung', 'LG', 'GE', 'Whirlpool', 'Maytag', 'Gaggenau']}
  />
);

export default MillValleyLanding;

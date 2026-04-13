import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const MillValleyLanding = () => (
  <CityLandingPage
    city="Mill Valley"
    citySlug="mill-valley"
    pageTitle="Appliance Repair Mill Valley | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Mill Valley. $80 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Downtown Mill Valley', 'Blithedale Canyon', 'Cascade Canyon', 'Alto', 'Tamalpais Valley', 'Strawberry', 'Homestead Valley', 'Scott Valley', 'Enchanted Knolls', 'Country Club', 'Muir Woods Road', 'Panoramic Highway']}
    localExpertise="Mill Valley is Marin County's most affluent community, and the kitchens reflect it. Sub-Zero refrigerators, Wolf ranges, Miele dishwashers, and Thermador cooktops are standard in Mill Valley homes. Our technicians are factory-trained on these luxury brands and understand the precision required for high-end appliance repair. We carry OEM diagnostic tools and genuine replacement parts — not generic substitutes — because luxury appliances demand exact-spec components to maintain performance and warranty compliance."
    homeTypes="Mill Valley's housing ranges from historic redwood cabins in the canyons to contemporary hillside estates with panoramic views. Kitchens in newer Mill Valley homes feature professional-grade built-in appliances that demand specialized service. We also maintain appliances in Strawberry's condos and Alto's townhomes. Downtown Mill Valley condominiums and the older Craftsman homes along Throckmorton Avenue present their own challenges — tight kitchen layouts, vintage wiring, and limited ventilation that affect appliance performance and installation options."
    additionalLocalContent="Mill Valley's canyon microclimates create unique appliance challenges. Redwood Canyon humidity accelerates condenser coil corrosion in refrigerators and shortens compressor life faster than SF proper. Canyon homes also have restricted dryer vent runs — we regularly diagnose overheating dryers caused by kinked or undersized ducts hidden inside historic redwood walls. Newer hillside estates above Tamalpais Valley often run Sub-Zero column refrigerators and Wolf steam ovens in open-plan kitchens — appliances that require factory-trained diagnosis, not guesswork. Andrei holds factory certification for Sub-Zero/Wolf service and carries genuine OEM parts on every Mill Valley call. If you're in escrow or doing a pre-sale inspection: we provide written repair estimates for disclosure documents. Many Mill Valley real estate transactions include appliance inspection and repair as a contingency item. We also service vacation rentals and second homes in Mill Valley — landlords and property managers can schedule recurring maintenance visits to prevent costly emergency repairs during tenant occupancy."
    commonProblems={[
      { title: 'Sub-Zero Refrigerator Sealed System', description: 'Sub-Zero refrigerators in Mill Valley homes require expert service for compressor and sealed system repairs. We diagnose cooling failures, replace compressors, evaporator fans, and thermistors, and recharge sealed systems to factory specifications. Canyon humidity accelerates condenser coil fouling — we recommend biannual coil cleaning for Mill Valley Sub-Zero units.' },
      { title: 'Wolf Range Burner & Oven Issues', description: 'Wolf dual-fuel ranges are a Mill Valley staple. Common calls include igniter failures on gas burners, gas valve malfunctions, oven temperature sensor drift, and convection fan failures. We repair all Wolf range models including the 36", 48", and 60" pro ranges, and carry common Wolf igniters and sensors in our service vehicle.' },
      { title: 'Miele Dishwasher Diagnostics', description: 'Miele dishwashers are engineered differently than mass-market brands. Our technicians understand Miele\'s proprietary diagnostic codes (F11, F70, F78), pump systems, circulation motors, and control boards. Mill Valley\'s hard water causes mineral buildup in Miele spray arms and filters — we clean and restore flow during every Miele service call.' },
      { title: 'Thermador Cooktop Induction Faults', description: 'Induction cooktops in Mill Valley kitchens fail when control boards overheat or induction coils degrade. We test each zone independently, diagnose control board failures vs. coil failures, and replace components with Thermador OEM parts. Induction repairs require specialized diagnostic equipment that general technicians don\'t carry.' },
      { title: 'Dryer Venting Through Canyon Homes', description: 'Mill Valley\'s canyon homes have complex vent runs through walls, crawl spaces, and attics. Lint accumulation in these long runs is a documented fire hazard — Cal Fire identifies it as a leading cause of residential fires in wooded Marin communities. We clean, inspect, and re-seal full vent systems, and can recommend vent rerouting for homes with code-violation installations.' },
      { title: 'Wine Cooler Temperature Precision', description: 'Serious wine collectors in Mill Valley need exact temperature and humidity control. We repair Sub-Zero wine preservation units, Thermador wine columns, and standalone wine coolers. Common issues include compressor cycling, thermostat calibration drift, door seal degradation, and fan motor failures. We calibrate temperature zones to within 1°F of target.' },
    ]}
    recentRepairs={[
      { appliance: 'Sub-Zero 48" Refrigerator — Compressor', description: 'Warm side reaching 45°F. Diagnosed failed compressor, replaced with OEM unit, recharged. Running at 37°F.', location: 'Blithedale Canyon' },
      { appliance: 'Wolf 48" Dual-Fuel Range — Igniter', description: 'Two burners not lighting. Replaced hot-surface igniters, tested all six burners and oven. Full function restored.', location: 'Country Club area' },
      { appliance: 'Miele G7000 Dishwasher — Drain Pump', description: 'F70 error code, water standing in tub. Replaced drain pump assembly, cleared error. Three test cycles perfect.', location: 'Downtown Mill Valley' },
      { appliance: 'Thermador Induction Cooktop — Zone Failure', description: 'Front-left zone not heating. Replaced induction coil and tested all zones. Full cooking power restored.', location: 'Tamalpais Valley' },
      { appliance: 'Bosch 800 Series Dishwasher — E24 Drain Error', description: 'Persistent E24 error after every cycle. Diagnosed blocked drain pump impeller with broken glass fragment. Cleaned and tested — five consecutive cycles with no error code.', location: 'Strawberry' },
    ]}
    maintenanceTips={[
      { title: 'Refrigerator Coils — Clean Every 6 Months', description: 'Marin\'s salt air and canyon moisture deposit on condenser coils faster than inland areas. Clean every 6 months (vs. 12 months for inland homes). A clogged coil raises compressor temperature and cuts 3-5 years off compressor life.' },
      { title: 'Dryer Vents — Annual Cleaning Essential', description: 'Canyon homes with long vent runs are a fire risk. CalFire data shows dryer fires are among the top causes of home fires in wooded Marin communities. Annual vent cleaning is essential — we offer a standalone vent cleaning service.' },
      { title: 'Dishwasher Filters — Monthly Citric Acid Cycle', description: 'Marin water has high mineral content. Run a citric acid cycle monthly and clean the spray arms every 3 months to prevent clogging in Bosch and Miele units.' },
      { title: 'Wine Cooler Compressors — Monitor for Continuous Running', description: 'Canyon temperature swings (cold nights, warm afternoons) stress wine cooler compressors. If your unit runs continuously or struggles to hold temperature, schedule a check before the compressor fails.' },
    ]}
    faqData={[
      { question: 'Do you repair Sub-Zero and Wolf in Mill Valley?', answer: 'Yes. We are experienced with all luxury brands including Sub-Zero, Wolf, Miele, Thermador, Viking, and Bosch. Our technicians carry specialized diagnostic tools for these brands.' },
      { question: 'How fast can you get to Mill Valley?', answer: 'We offer same- or next-day appointments in Mill Valley. Most morning bookings are confirmed for the same day. We access all Mill Valley neighborhoods including the canyons.' },
      { question: 'What does luxury appliance repair cost in Mill Valley?', answer: 'Diagnostic is $80, applied toward repair. Standard repairs range $250-$450. Luxury brand repairs (Sub-Zero, Wolf, Miele) typically run $350-$650 depending on parts needed.' },
      { question: 'Do you service Mill Valley canyon homes?', answer: 'Absolutely. We regularly service homes in Blithedale Canyon, Cascade Canyon, and Homestead Valley. Our technicians know the narrow roads and are equipped for hillside access.' },
      { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC holds CA License #51001 and is fully insured for appliance repair throughout Marin County, including Mill Valley.' },
      { question: 'Do you do pre-sale appliance inspections in Mill Valley?', answer: 'Yes. We provide written inspection reports and repair estimates for real estate transactions in Mill Valley and throughout Marin County. Many buyers and sellers request appliance condition reports as part of the disclosure process. We can inspect and repair in a single visit. Call (760) 543-5733 to schedule.' },
      { question: 'My Sub-Zero refrigerator is under manufacturer warranty — can you still service it?', answer: 'If your Sub-Zero is under warranty, repairs must go through Sub-Zero\'s authorized service network to preserve coverage. Once out of warranty, we service all Sub-Zero models including column refrigerators, French doors, and undercounter units. Our technician is Sub-Zero/Wolf certified.' },
      { question: 'Do you clean dryer vents in Mill Valley canyon homes?', answer: 'Yes, and it\'s especially important in canyon homes where vent runs are long and often route through walls or crawlspaces. We inspect, clean, and re-seal dryer vents on all home types. Annual cleaning is recommended for Marin homes — Cal Fire identifies dryer vent buildup as a leading fire risk in wooded communities.' },
      { question: 'What neighborhoods in Mill Valley do you cover?', answer: 'We serve all Mill Valley neighborhoods: Downtown Mill Valley, Blithedale Canyon, Cascade Canyon, Alto, Tamalpais Valley, Strawberry, Homestead Valley, Scott Valley, Enchanted Knolls, and Country Club. We also cover Muir Woods Road and Panoramic Highway residences. Our technician knows the canyon roads.' },
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

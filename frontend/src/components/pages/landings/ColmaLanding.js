import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const ColmaLanding = () => (
  <CityLandingPage
    city="Colma"
    citySlug="colma"
    pageTitle="Appliance Repair Colma | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Colma. $60 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Colma Town Center', 'Sterling Park', 'Junipero Serra Corridor', 'Holy Cross Area', 'El Camino Real', 'Mission Road', 'Hillside Colma', 'Colma Creek', 'Serra Center', 'Serramonte Adjacent']}
    localExpertise="Colma's compact residential pockets sit between its famous cemeteries and shopping centers. The town's proximity to the coast brings higher humidity levels that accelerate appliance wear — door gaskets deteriorate faster, metal components develop surface rust, and dryer vents collect more moisture. Our technicians understand these Colma-specific conditions."
    homeTypes="Colma's housing is a mix of modest single-family homes, townhomes near Sterling Park, and apartment units along El Camino Real. Most Colma kitchens run standard brands — GE, Whirlpool, Frigidaire, and Samsung — the workhorses we service every day."
    commonProblems={[
      { title: 'Refrigerator Door Gasket Wear', description: 'Colma\'s coastal humidity causes rubber gaskets to break down faster. Weak seals let warm air in, forcing the compressor to work harder. We replace gaskets on all fridge brands.' },
      { title: 'Dryer Moisture in Vent Lines', description: 'Higher humidity means more condensation inside dryer vents. This traps lint, restricts airflow, and creates fire risk. We clean and inspect the entire vent system.' },
      { title: 'Washer Mildew and Odors', description: 'Front-load washers in Colma homes develop mildew faster due to ambient moisture. We deep-clean tubs, replace gaskets, and advise on prevention.' },
      { title: 'Dishwasher Hard Water Deposits', description: 'Mineral buildup from Colma\'s water supply clogs spray arms and reduces cleaning performance. We descale components and clear water lines.' },
      { title: 'Range Igniter Corrosion', description: 'Surface corrosion on gas range igniters causes slow or failed ignition. We replace corroded igniters and test all burner circuits.' },
      { title: 'Freezer Ice Buildup', description: 'Humidity-related frost accumulates faster in Colma freezers. We fix defrost system failures — heaters, thermostats, and timers.' },
    ]}
    recentRepairs={[
      { appliance: 'Whirlpool Refrigerator — Door Gasket', description: 'Fridge running constantly, warm spots inside. Replaced deteriorated gasket, temp stabilized at 37°F.', location: 'Sterling Park' },
      { appliance: 'LG Front-Load Washer — Mildew', description: 'Persistent odor from washer drum. Deep cleaned tub, replaced door boot seal, cleared drain.', location: 'Colma Town Center' },
      { appliance: 'GE Gas Range — Igniter', description: 'Two burners not lighting reliably. Replaced corroded igniters, all four burners firing cleanly.', location: 'El Camino Real area' },
      { appliance: 'Samsung Dryer — Vent Cleaning', description: 'Dryer taking 90+ minutes per load. Cleaned 8 feet of lint-packed vent duct, restored normal dry times.', location: 'Junipero Serra Corridor' },
    ]}
    faqData={[
      { question: 'Do you offer same-day appliance repair in Colma?', answer: 'Yes. Colma is in our core service area. Same- or next-day appointments are available Monday through Saturday.' },
      { question: 'How much does appliance repair cost in Colma?', answer: 'Diagnostic is $60, credited toward the repair. Most Colma repairs range $250–$450. No hidden fees — you approve the price before we start.' },
      { question: 'Does Colma\'s humidity really affect appliances?', answer: 'Yes. Colma\'s coastal proximity means higher moisture levels that accelerate gasket wear, vent condensation, and surface corrosion. Regular maintenance can prevent many of these issues.' },
      { question: 'Which brands do you repair in Colma?', answer: 'All major brands: GE, Whirlpool, Frigidaire, Samsung, LG, Maytag, KitchenAid, Bosch, and more. We carry parts for the most common models in Colma homes.' },
      { question: 'Are you licensed for Colma?', answer: 'Yes. FixitBay LLC is licensed (CA #51001) and insured for appliance repair in Colma and San Mateo County.' },
    ]}
    nearbyCities={[
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'San Bruno', slug: 'san-bruno' },
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Pacifica', slug: 'pacifica' },
    ]}
  />
);

export default ColmaLanding;

import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const SanBrunoLanding = () => (
  <CityLandingPage
    city="San Bruno"
    citySlug="san-bruno"
    pageTitle="Appliance Repair San Bruno | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in San Bruno. $60 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Crestmoor', 'Bayhill', 'Portola Highlands', 'Mills Park', 'Rollingwood', 'San Bruno Mountain', 'Tanforan', 'Downtown San Bruno', 'Lomita Park', 'El Crystal']}
    localExpertise="San Bruno's suburban ranch homes and growing condo developments near SFO create steady demand for appliance repair. Samsung refrigerators and Bosch dishwashers are especially popular in newer San Bruno homes — and our technicians carry the diagnostic tools and parts these brands require."
    homeTypes="From 1950s ranch-style homes in Crestmoor to modern condos near Tanforan, San Bruno's housing stock spans decades. We service all home types: single-family houses with full-size appliances, compact condo kitchens, and apartment units with stacked washer-dryers."
    commonProblems={[
      { title: 'Samsung Refrigerator Ice Buildup', description: 'Samsung fridges in San Bruno homes frequently develop ice behind the back panel, causing poor cooling. We defrost and fix the root cause — usually a failed defrost heater or thermostat.' },
      { title: 'Bosch Dishwasher Not Draining', description: 'Bosch dishwashers are popular in San Bruno\'s newer condos. Drain pump clogs and check valve failures are the most common calls. We fix these same day.' },
      { title: 'Dryer Taking Too Long', description: 'San Bruno\'s proximity to SFO means some homes have longer vent runs. Restricted vents increase drying time and fire risk. We clean vents and replace damaged duct sections.' },
      { title: 'Washer Vibration on Raised Floors', description: 'Older San Bruno ranch homes have raised foundations that amplify washer vibration. We level machines, replace worn shock absorbers, and check drum bearings.' },
      { title: 'Gas Range Igniter Problems', description: 'Many San Bruno homes use gas ranges. After years of use, igniters weaken and fail to light consistently. We replace igniters and test all burners for safe operation.' },
      { title: 'Wine Cooler Temperature Fluctuations', description: 'Newer San Bruno homes often include built-in wine coolers. Thermostat and fan failures cause temperature swings that damage wine. We diagnose and fix cooling issues.' },
    ]}
    recentRepairs={[
      { appliance: 'Samsung French Door Fridge — Cooling', description: 'Ice buildup behind rear panel causing warm temps. Replaced defrost heater and thermostat. Running at 37°F.', location: 'Crestmoor' },
      { appliance: 'Bosch Dishwasher — Drain Pump', description: 'E24 error code, standing water in tub. Replaced clogged drain pump and cleaned filters.', location: 'Mills Park' },
      { appliance: 'Whirlpool Dryer — Vent Cleaning', description: 'Dryer taking 2+ cycles to dry. Found 12 feet of lint-packed vent. Cleaned entire run, restored airflow.', location: 'Portola Highlands' },
      { appliance: 'LG Washer — Shock Absorbers', description: 'Excessive vibration during spin cycle. Replaced all four shock absorbers, balanced drum.', location: 'Tanforan area' },
    ]}
    faqData={[
      { question: 'Do you offer same-day appliance repair in San Bruno?', answer: 'Yes. We provide same- or next-day appointments throughout San Bruno. Bookings made before noon are typically confirmed for the same day.' },
      { question: 'How much does appliance repair cost in San Bruno?', answer: 'Our diagnostic is $60, credited toward repair. Most San Bruno repairs range $250–$450. We give you an exact quote before starting any work.' },
      { question: 'Which San Bruno neighborhoods do you cover?', answer: 'All of them — Crestmoor, Bayhill, Portola Highlands, Mills Park, Rollingwood, Tanforan, Downtown San Bruno, Lomita Park, and surrounding areas.' },
      { question: 'Do you repair Samsung and Bosch appliances?', answer: 'Absolutely. Samsung and Bosch are among the most common brands we service in San Bruno. We carry diagnostic tools and parts specific to these brands.' },
      { question: 'Are you licensed in San Mateo County?', answer: 'Yes. FixitBay LLC holds CA License #51001 and is fully insured for appliance repair throughout San Mateo County, including San Bruno.' },
    ]}
    nearbyCities={[
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'Millbrae', slug: 'millbrae' },
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'Pacifica', slug: 'pacifica' },
    ]}
  />
);

export default SanBrunoLanding;

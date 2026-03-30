import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const SouthSanFranciscoLanding = () => (
  <CityLandingPage
    city="South San Francisco"
    citySlug="south-san-francisco"
    pageTitle="Appliance Repair South San Francisco | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in South San Francisco. $60 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Sign Hill', 'Buri Buri', 'Avalon Park', 'Winston Manor', 'Sunshine Gardens', 'Westborough', 'El Camino Real Corridor', 'Grand Avenue', 'Oyster Point', 'Lindenville']}
    localExpertise="South San Francisco's mid-century homes and apartment complexes near the biotech corridor present unique appliance challenges. Many SSF homes still run older GE and Whirlpool units — reliable machines, but ones that eventually need belt replacements, pump repairs, and thermostat fixes. Our technicians know these models inside and out."
    homeTypes="We service SSF's mix of post-war single-family homes in Buri Buri, apartments near Grand Avenue, and newer townhomes around Oyster Point. Whether your 1960s ranch home needs a dryer belt or your modern condo has a Samsung error code, we bring the right parts on the first visit."
    commonProblems={[
      { title: 'Washer Drain Pump Failures', description: 'SSF\'s hard water accelerates pump wear in older Whirlpool and GE washers. We replace drain pumps with OEM parts and test flow before we leave.' },
      { title: 'Refrigerator Compressor Issues', description: 'Temperature swings between Sign Hill elevations and bayfront housing stress compressors. We diagnose and repair cooling system failures across all brands.' },
      { title: 'Dryer Belt Wear', description: 'Heavy daily use in SSF\'s multi-generational homes causes premature belt and roller failures. We carry replacement belts for GE, Whirlpool, Maytag, and Samsung.' },
      { title: 'Dishwasher Error Codes', description: 'Bosch and Samsung dishwashers in SSF condos frequently throw E15 (leak sensor) and 5E (drain) errors. We clear faults and fix root causes same day.' },
      { title: 'Gas Range Igniter Failure', description: 'Older gas ranges in SSF homes develop weak igniters over time. We test ignition circuits and replace faulty igniters with safety-rated parts.' },
      { title: 'Oven Temperature Drift', description: 'Elevation changes from hilltop to bay level cause calibration drift. We recalibrate ovens and test with a precision thermometer.' },
    ]}
    recentRepairs={[
      { appliance: 'Whirlpool Washer — Drain Pump', description: 'Replaced clogged drain pump in a Buri Buri ranch home. Washer draining normally, no leaks.', location: 'Buri Buri neighborhood' },
      { appliance: 'Samsung Refrigerator — Ice Maker', description: 'Ice maker frozen solid in an Avalon Park condo. Defrosted, replaced water inlet valve.', location: 'Avalon Park' },
      { appliance: 'GE Gas Range — Igniter', description: 'Igniter clicking but not lighting on a 15-year-old GE range. Replaced igniter, all burners working.', location: 'Grand Avenue area' },
      { appliance: 'Bosch Dishwasher — E15 Error', description: 'Leak sensor triggered in a Westborough townhome. Cleared water from base pan, replaced door gasket.', location: 'Westborough' },
    ]}
    faqData={[
      { question: 'Do you offer same-day appliance repair in South San Francisco?', answer: 'Yes. We offer same- or next-day appointments throughout South San Francisco. Most SSF bookings made before noon are confirmed for the same day.' },
      { question: 'How much does appliance repair cost in South San Francisco?', answer: 'Our diagnostic visit is $60, applied toward your repair. Most SSF repairs range $250–$450 depending on the appliance and parts needed. We provide an exact quote before starting work.' },
      { question: 'Which South San Francisco neighborhoods do you serve?', answer: 'We serve all SSF neighborhoods including Sign Hill, Buri Buri, Avalon Park, Winston Manor, Sunshine Gardens, Westborough, and areas near Grand Avenue and Oyster Point.' },
      { question: 'Are you licensed to work in South San Francisco?', answer: 'Yes. FixitBay LLC is fully licensed and insured for appliance repair in South San Francisco and San Mateo County. CA License #51001.' },
      { question: 'Do you repair commercial appliances in SSF?', answer: 'We focus on residential appliances but also service light commercial equipment (break room refrigerators, dishwashers) in SSF offices and biotech campuses.' },
    ]}
    nearbyCities={[
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'San Bruno', slug: 'san-bruno' },
      { name: 'Colma', slug: 'colma' },
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Pacifica', slug: 'pacifica' },
    ]}
  />
);

export default SouthSanFranciscoLanding;

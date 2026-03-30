import React from 'react';
import CityLandingPage from '../../templates/CityLandingPage';

const BrisbaneLanding = () => (
  <CityLandingPage
    city="Brisbane"
    citySlug="brisbane"
    pageTitle="Appliance Repair Brisbane CA | Same-Day | FixitBay LLC"
    metaDescription="Fast, licensed appliance repair in Brisbane, CA. $60 diagnostic, 180-day warranty. Refrigerators, washers, dryers, ovens, dishwashers — same or next day. Call FixitBay."
    neighborhoods={['Central Brisbane', 'Brisbane Acres', 'Crocker Industrial Park', 'Baylands', 'Visitacion Valley Border', 'Sierra Point', 'Lipman School Area', 'Brisbane Village', 'Old County Road', 'San Bruno Mountain State Park area']}
    localExpertise="Brisbane's hillside homes sit on steep terrain with narrow driveways and tight access — conditions that require technicians who know the area. Many Brisbane homes are built on slopes, which means appliance installation and removal is trickier than in flat neighborhoods. Our team is experienced with Brisbane's unique logistics and carries equipment for difficult-access situations."
    homeTypes="Brisbane features a mix of mid-century hillside cottages, modern infill homes, and newer townhomes near Sierra Point. LG and Samsung are the dominant appliance brands in Brisbane's updated kitchens, while older homes often run reliable Whirlpool and GE units."
    commonProblems={[
      { title: 'Washer Leveling on Slopes', description: 'Brisbane\'s hillside homes cause washers to sit unevenly, leading to excessive vibration, walking, and premature bearing wear. We level machines precisely and adjust legs for slope compensation.' },
      { title: 'LG Refrigerator Compressor Issues', description: 'LG refrigerators are common in Brisbane. Linear compressor failures cause intermittent cooling. We diagnose LG-specific issues and replace compressors when needed.' },
      { title: 'Samsung Washer Error Codes', description: 'Samsung washers in Brisbane homes throw UE (unbalanced), LE (motor), and 4E (water supply) errors. We clear codes and fix root causes — not just reset the machine.' },
      { title: 'Dryer Overheating on Long Vent Runs', description: 'Multi-level Brisbane homes often have extended dryer vent routes through walls and up to roof exits. These collect lint faster and restrict airflow. We clean entire vent systems.' },
      { title: 'Dishwasher Leaks in Tight Kitchens', description: 'Compact Brisbane kitchens mean dishwashers are wedged tight. Door seal failures and connection leaks can damage cabinetry fast. We fix leaks and check all water connections.' },
      { title: 'Oven Door Seal Failures', description: 'Temperature fluctuations from Brisbane\'s microclimate stress oven door gaskets. Failed seals cause heat loss and uneven baking. We replace oven gaskets on all brands.' },
    ]}
    recentRepairs={[
      { appliance: 'LG Refrigerator — Compressor', description: 'Intermittent cooling, clicking sounds. Replaced linear compressor and start relay. Running steadily at 36°F.', location: 'Brisbane Acres' },
      { appliance: 'Samsung Washer — UE Error', description: 'Constant unbalanced errors during spin. Replaced worn shock absorbers, rebalanced drum. Spins cleanly now.', location: 'Central Brisbane' },
      { appliance: 'Whirlpool Dryer — Vent Cleaning', description: 'Vent running 15 feet through crawl space. Removed heavy lint buildup, replaced crushed flex section. Dryer heats normally.', location: 'Brisbane Village' },
      { appliance: 'GE Dishwasher — Door Seal Leak', description: 'Water pooling under dishwasher in a tight galley kitchen. Replaced worn door gasket, tested three full cycles — no leaks.', location: 'Sierra Point' },
    ]}
    faqData={[
      { question: 'Can your technicians access hillside homes in Brisbane?', answer: 'Yes. We regularly service Brisbane\'s hillside neighborhoods including Brisbane Acres and the areas around San Bruno Mountain. Our technicians are experienced with narrow driveways and steep-access homes.' },
      { question: 'Do you offer same-day service in Brisbane?', answer: 'Yes. Brisbane is in our core service area. Same- or next-day appointments available Monday through Saturday.' },
      { question: 'How much does appliance repair cost in Brisbane?', answer: 'Diagnostic is $60, applied toward repair. Most Brisbane repairs cost $250–$450. Exact quote provided before we start.' },
      { question: 'Do you service LG and Samsung appliances?', answer: 'Absolutely. LG and Samsung are among the most common brands in Brisbane. We carry brand-specific diagnostic tools and parts.' },
      { question: 'Are you licensed to work in Brisbane?', answer: 'Yes. FixitBay LLC is licensed (CA #51001) and insured for residential appliance repair in Brisbane and San Mateo County.' },
    ]}
    nearbyCities={[
      { name: 'San Francisco', slug: 'san-francisco' },
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'Colma', slug: 'colma' },
      { name: 'San Bruno', slug: 'san-bruno' },
    ]}
  />
);

export default BrisbaneLanding;

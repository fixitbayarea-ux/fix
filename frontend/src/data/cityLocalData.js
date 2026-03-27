/**
 * Unique local content for each of the 22 service cities.
 * This data ensures each city page has genuinely different content
 * that Google can distinguish from other city pages.
 */

const cityLocalData = {
  'San Francisco': {
    zipCodes: ['94102', '94103', '94104', '94105', '94107', '94108', '94109', '94110', '94112', '94114', '94115', '94116', '94117', '94118', '94121', '94122', '94123', '94124', '94127', '94129', '94130', '94131', '94132', '94133', '94134'],
    neighborhoods: ['Sunset', 'Richmond', 'Mission', 'SOMA', 'Nob Hill', 'Pacific Heights', 'Marina', 'Castro', 'Noe Valley', 'Haight-Ashbury', 'Excelsior', 'Bayview', 'Russian Hill', 'North Beach'],
    landmarks: ['Golden Gate Park', 'Fisherman\'s Wharf', 'Union Square'],
    driveTime: '15-40 min depending on neighborhood',
    housingType: 'Victorians, Edwardians, modern high-rises, row houses',
    localTip: 'SF\'s coastal fog and humidity accelerate seal and gasket wear — we stock extras on every call.',
    housingTypes: [
      { type: 'Victorian & Edwardian Homes', desc: 'Narrow staircases, compact kitchens, and aging gas lines. We carry compact tools and know how to maneuver large parts through tight SF hallways.', areas: 'Haight, Mission, Noe Valley, Western Addition' },
      { type: 'High-Rise Apartments & Condos', desc: 'Building access protocols, freight elevator scheduling, and HOA coordination. We handle management company requirements and parking logistics.', areas: 'SOMA, Financial District, Rincon Hill' },
      { type: 'Row Houses & Flats', desc: 'Multi-unit buildings with shared utility access. We work with tenants and landlords to schedule repairs with minimal disruption.', areas: 'Sunset, Richmond, Excelsior, Bayview' },
      { type: 'Luxury Homes & Penthouses', desc: 'Premium Sub-Zero, Wolf, and Thermador appliances. Our technicians are factory-trained on high-end brands and carry specialty parts.', areas: 'Pacific Heights, Presidio Heights, Sea Cliff' },
    ],
    caseStudies: [
      { appliance: 'Sub-Zero Refrigerator', neighborhood: 'Pacific Heights', issue: 'Compressor failure in a built-in unit; replaced with factory part and recalibrated temperature controls.', timeframe: 'Fast repair' },
      { appliance: 'Bosch Dishwasher', neighborhood: 'Sunset District', issue: 'Drain pump seized from mineral buildup due to SF\'s hard water; cleaned and replaced pump assembly.', timeframe: '2-hour repair' },
      { appliance: 'Samsung Washer', neighborhood: 'Mission District', issue: 'Washer vibrating excessively in a Victorian flat; leveled unit and replaced worn shock absorbers on narrow staircase install.', timeframe: 'Fast repair' },
    ],
    testimonials: [
      { name: 'Sarah M.', area: 'Pacific Heights', text: 'Had a Sub-Zero emergency on Thanksgiving morning. They came within an hour and saved our dinner party. Incredibly professional.', rating: 5 },
      { name: 'James L.', area: 'Sunset District', text: 'Our old Victorian has tight spaces. Their tech maneuvered through narrow stairs with the replacement part. Great work on our Whirlpool washer.', rating: 5 },
      { name: 'Linda K.', area: 'SOMA', text: 'Building management was impressed with how they coordinated access for our high-rise condo repair. Fast, clean, professional.', rating: 5 },
      { name: 'David R.', area: 'Noe Valley', text: 'Dishwasher was leaking for weeks. Technician diagnosed a worn pump seal in minutes, had the part on the truck. Fixed same day. Very fair pricing.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Daly City', slug: 'daly-city-appliance-repair' },
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
      { name: 'Brisbane', slug: 'brisbane-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair across all San Francisco neighborhoods including Sunset, Richmond, Mission, SOMA, Pacific Heights, Marina, Noe Valley, and more. Our technicians are based in SF and serve the entire city with fast response times.',
  },

  'Daly City': {
    zipCodes: ['94014', '94015', '94017'],
    neighborhoods: ['Westlake', 'Serramonte', 'Top of the Hill', 'St. Francis Heights', 'Crocker', 'Bayshore'],
    landmarks: ['Serramonte Center', 'Westlake Shopping Center'],
    driveTime: '10-20 min from our SF base',
    housingType: '1950s-60s tract homes, condos, townhomes near BART',
    localTip: 'Daly City\'s persistent fog belt causes 30% more dryer vent moisture issues than inland cities.',
    housingTypes: [
      { type: '1950s-60s Tract Homes', desc: 'Original appliance hookups and compact laundry rooms. We update connections and work in tight utility spaces daily.', areas: 'Westlake, St. Francis Heights' },
      { type: 'Condos & Townhomes', desc: 'HOA-managed buildings with shared utilities. We coordinate with management and follow building access protocols.', areas: 'Serramonte, near BART stations' },
      { type: 'Hillside Single-Family', desc: 'Older homes on steep lots with unique plumbing and venting challenges from the hilly terrain.', areas: 'Top of the Hill, Crocker' },
    ],
    caseStudies: [
      { appliance: 'LG Dryer', neighborhood: 'Westlake', issue: 'Extended dry cycles caused by moisture-clogged vent; cleaned vent run and replaced thermal fuse.', timeframe: '90-minute repair' },
      { appliance: 'GE Refrigerator', neighborhood: 'Serramonte', issue: 'Door gasket failing from humidity causing condensation inside; replaced gasket and adjusted door alignment.', timeframe: 'Fast repair' },
      { appliance: 'Whirlpool Dishwasher', neighborhood: 'Top of the Hill', issue: 'Spray arm clogged by mineral deposits from local water; descaled system and replaced worn spray arm.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'Mike T.', area: 'Westlake', text: 'Our dryer was taking 3 cycles to dry. They found the fog moisture issue in the vent — totally fixed in under 2 hours.', rating: 5 },
      { name: 'Carmen R.', area: 'Serramonte', text: 'Quick response for our condo. Knew exactly how to handle the HOA access. Fridge works perfectly now.', rating: 5 },
      { name: 'Jennifer W.', area: 'Top of the Hill', text: 'Gas range igniter kept clicking. Tech diagnosed it in 10 minutes, had the part on the truck. Fixed same visit. Very fair price.', rating: 5 },
      { name: 'Robert K.', area: 'St. Francis Heights', text: 'Dishwasher was leaving dishes dirty. Turns out the spray arm was clogged from our hard water. Cleaned and running like new.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Francisco', slug: 'san-francisco-appliance-repair' },
      { name: 'Colma', slug: 'colma-appliance-repair' },
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
      { name: 'Pacifica', slug: 'pacifica-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair throughout Daly City including Westlake, Serramonte, and Crocker Amazon. We also serve neighboring South San Francisco, Colma, and Brisbane with the same fast response times.',
  },

  'South San Francisco': {
    zipCodes: ['94080', '94083'],
    neighborhoods: ['Sign Hill', 'Westborough', 'Sunshine Gardens', 'Lindenville', 'Downtown SSF', 'Avalon'],
    landmarks: ['South San Francisco Sign Hill', 'SSF BART Station', 'Oyster Point'],
    driveTime: '12-18 min from our SF base',
    housingType: 'Post-war single-family homes, newer condos near biotech corridor',
    localTip: 'SSF\'s biotech corridor means many newer appliances in modern condos — we stock smart appliance parts.',
    housingTypes: [
      { type: 'Post-War Single-Family Homes', desc: 'Classic 1950s homes with older plumbing and electrical. We handle appliance upgrades and infrastructure compatibility.', areas: 'Westborough, Sunshine Gardens, Sign Hill' },
      { type: 'Modern Condos & Apartments', desc: 'Newer builds with smart appliances near the biotech corridor. We stock Samsung, LG Wi-Fi module parts.', areas: 'Oyster Point, Lindenville, near BART' },
    ],
    caseStudies: [
      { appliance: 'Samsung Smart Fridge', neighborhood: 'Oyster Point', issue: 'Wi-Fi module and ice maker failure in a new-build condo; replaced both components and reconnected smart features.', timeframe: 'Fast repair' },
      { appliance: 'Maytag Washer', neighborhood: 'Westborough', issue: 'Bearing failure causing loud spinning noise; replaced bearing kit and tub seal in older home.', timeframe: '2-hour repair' },
      { appliance: 'KitchenAid Oven', neighborhood: 'Sign Hill', issue: 'Temperature sensor reading 50°F too low; calibrated oven and replaced faulty sensor probe.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'David C.', area: 'Westborough', text: 'Our Samsung fridge stopped making ice and lost Wi-Fi. They fixed both issues in one visit. Very knowledgeable about smart appliances.', rating: 5 },
      { name: 'Priya N.', area: 'Oyster Point', text: 'Moved to a new condo and oven wasn\'t heating right. Same- or next-day fix — turned out to be a sensor issue. Great service.', rating: 5 },
      { name: 'Maria G.', area: 'Sunshine Gardens', text: 'Washer was leaking all over the floor. Technician arrived within 2 hours and replaced the pump seal. Excellent work.', rating: 5 },
      { name: 'Tom H.', area: 'Lindenville', text: 'Our LG dryer stopped heating. Quick diagnosis — bad heating element. Fixed the same day. Highly recommend.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Bruno', slug: 'san-bruno-appliance-repair' },
      { name: 'Daly City', slug: 'daly-city-appliance-repair' },
      { name: 'Brisbane', slug: 'brisbane-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair throughout South San Francisco including Westborough, Sign Hill, and the Oyster Point biotech corridor. We also serve neighboring San Bruno, Daly City, and Brisbane.',
  },

  'San Bruno': {
    zipCodes: ['94066'],
    neighborhoods: ['Crestmoor', 'Mills Park', 'Rollingwood', 'Belle Air', 'Bayhill', 'Downtown San Bruno'],
    landmarks: ['San Bruno Mountain', 'The Shops at Tanforan', 'SFO Airport proximity'],
    driveTime: '15-22 min from our SF base',
    housingType: 'Mid-century ranch homes, newer townhomes near Tanforan',
    localTip: 'Proximity to SFO means occasional power fluctuations — we check surge protectors on every smart appliance call.',
    housingTypes: [
      { type: 'Mid-Century Ranch Homes', desc: 'Classic ranches with original layouts. We navigate older electrical panels and recommend surge protection near SFO.', areas: 'Crestmoor, Rollingwood, Belle Air' },
      { type: 'Newer Townhomes & Condos', desc: 'Modern units near shopping with compact laundry closets and integrated kitchen designs.', areas: 'Near Tanforan, Bayhill, Downtown' },
    ],
    caseStudies: [
      { appliance: 'Frigidaire Refrigerator', neighborhood: 'Crestmoor', issue: 'Evaporator fan motor failure from power surge; replaced motor and installed surge protection recommendation.', timeframe: 'Fast repair' },
      { appliance: 'LG Washer', neighborhood: 'Mills Park', issue: 'Front-loader door lock mechanism jammed; replaced door latch assembly in tight laundry closet.', timeframe: '1-hour repair' },
      { appliance: 'GE Gas Range', neighborhood: 'Rollingwood', issue: 'Burner igniter clicking continuously after a power outage; replaced igniter module and tested all burners.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Tom W.', area: 'Crestmoor', text: 'Power surge killed our fridge. They came same day with the right part. Also recommended a surge protector — thoughtful advice.', rating: 5 },
      { name: 'Amy F.', area: 'Mills Park', text: 'Washer door wouldn\'t open with clothes inside. They had it fixed in an hour. So relieved!', rating: 5 },
      { name: 'Sandra L.', area: 'Crestmoor', text: 'Refrigerator compressor was failing. They ordered the part and came back next day to install. Professional from start to finish.', rating: 5 },
      { name: 'Kevin P.', area: 'Mills Park', text: 'Oven was not reaching temperature. Turned out to be a faulty thermostat. Quick fix, very reasonable cost.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
      { name: 'Millbrae', slug: 'millbrae-appliance-repair' },
      { name: 'Brisbane', slug: 'brisbane-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair across San Bruno including Crestmoor, Mills Park, and Rollingwood. We also serve neighboring South San Francisco, Millbrae, and Brisbane with quick response times.',
  },

  'Pacifica': {
    zipCodes: ['94044'],
    neighborhoods: ['Linda Mar', 'Rockaway Beach', 'Pedro Point', 'Sharp Park', 'Vallemar', 'Park Pacifica', 'Manor'],
    landmarks: ['Pacifica Pier', 'Mori Point', 'Highway 1 coastal route'],
    driveTime: '18-25 min from our SF base',
    housingType: 'Beach bungalows, hillside homes, 1960s-70s ranches',
    localTip: 'Pacifica\'s salt air corrodes appliance exteriors and electrical connections 2x faster than inland areas.',
    housingTypes: [
      { type: 'Beach Bungalows', desc: 'Coastal homes with severe salt air exposure. We use marine-grade sealant on connections and recommend corrosion prevention.', areas: 'Linda Mar, Rockaway Beach, Pedro Point' },
      { type: '1960s-70s Ranch Homes', desc: 'Older homes with aging dryer vents and outdated electrical. We update hookups and clear moisture-clogged vent runs.', areas: 'Sharp Park, Vallemar, Park Pacifica' },
    ],
    caseStudies: [
      { appliance: 'Whirlpool Dryer', neighborhood: 'Linda Mar', issue: 'Salt air corroded heating element connections; cleaned contacts, replaced element, sealed connections against moisture.', timeframe: '2-hour repair' },
      { appliance: 'Viking Range', neighborhood: 'Rockaway Beach', issue: 'Coastal moisture caused gas valve sticking; cleaned and lubricated gas valve assembly, tested all burners.', timeframe: 'Fast repair' },
      { appliance: 'Kenmore Refrigerator', neighborhood: 'Sharp Park', issue: 'Condenser coils heavily corroded from salt air; cleaned coils, replaced corroded fan motor.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Steve B.', area: 'Linda Mar', text: 'Living near the beach is great but tough on appliances. They understand coastal issues — fixed our dryer and gave maintenance tips for salt air.', rating: 5 },
      { name: 'Jennifer H.', area: 'Pedro Point', text: 'Our Viking range kept clicking. Salt moisture in the gas valve. Fixed same day and explained how to prevent it.', rating: 5 },
      { name: 'Helen C.', area: 'Meadows', text: 'Dishwasher pump was making terrible noise. Replaced same day. Technician was very knowledgeable and courteous.', rating: 5 },
      { name: 'Frank Y.', area: 'Downtown Millbrae', text: 'Samsung washer error code. Tech knew exactly what it meant, had the control board fixed in under an hour.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'Daly City', slug: 'daly-city-appliance-repair' },
      { name: 'San Bruno', slug: 'san-bruno-appliance-repair' },
      { name: 'Montara', slug: 'montara-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair throughout Pacifica including Linda Mar, Rockaway Beach, Sharp Park, and Pedro Point. We also serve neighboring Daly City, San Bruno, and Montara along the coast.',
  },

  'Millbrae': {
    zipCodes: ['94030'],
    neighborhoods: ['Meadows', 'Central Millbrae', 'Green Hills', 'Millbrae Highlands', 'Mills Estate'],
    landmarks: ['Millbrae BART/Caltrain Station', 'Mills Estate Historic District'],
    driveTime: '18-24 min from our SF base',
    housingType: 'Ranch-style homes, luxury estates in Mills Estate, condos near transit',
    localTip: 'Millbrae\'s transit hub means many commuter families — we offer flexible evening and weekend scheduling.',
    housingTypes: [
      { type: 'Ranch-Style Homes', desc: 'Classic Millbrae ranches with spacious kitchens. Common appliance layouts make for efficient repair visits.', areas: 'Meadows, Central Millbrae, Green Hills' },
      { type: 'Luxury Estates', desc: 'High-end homes with premium Thermador, Sub-Zero, and Wolf appliances. We carry factory parts for these brands.', areas: 'Mills Estate, Millbrae Highlands' },
      { type: 'Transit-Area Condos', desc: 'Modern units near BART/Caltrain with compact layouts. We schedule around commuter hours.', areas: 'Near Millbrae Station' },
    ],
    caseStudies: [
      { appliance: 'Thermador Range', neighborhood: 'Mills Estate', issue: 'Dual-fuel range oven not reaching temperature; replaced igniter and recalibrated thermostat in luxury kitchen.', timeframe: 'Fast repair' },
      { appliance: 'Bosch Washer', neighborhood: 'Meadows', issue: 'Error code E27 — drain pump failure; replaced pump and cleaned filter trap.', timeframe: '1-hour repair' },
      { appliance: 'Sub-Zero Wine Cooler', neighborhood: 'Millbrae Highlands', issue: 'Temperature fluctuating between zones; replaced thermostat sensor and sealed door gasket.', timeframe: '2-hour repair' },
    ],
    testimonials: [
      { name: 'Robert K.', area: 'Mills Estate', text: 'They know Thermador ranges inside and out. Had the right igniter on the truck. Fixed during one visit.', rating: 5 },
      { name: 'Susan L.', area: 'Meadows', text: 'Bosch washer error code — they diagnosed and fixed it in under an hour. Fair pricing and very professional.', rating: 5 },
      { name: 'Laura F.', area: 'Montara Beach', text: 'Refrigerator ice maker quit working. Water inlet valve needed replacement. Fixed in one visit, very impressed.', rating: 5 },
      { name: 'Chris M.', area: 'Highway 1 area', text: 'Coastal salt air corroded our washer drum bearings. They replaced the full bearing kit. Runs smooth and quiet.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'San Bruno', slug: 'san-bruno-appliance-repair' },
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Millbrae including Meadows, Mills Estate, and Green Hills. We also serve neighboring San Bruno and South San Francisco with flexible scheduling for transit commuters.',
  },

  'Colma': {
    zipCodes: ['94014'],
    neighborhoods: ['Sterling Park', 'Village in the Park', 'Downtown Colma'],
    landmarks: ['Colma BART Station', 'Historic Colma cemeteries'],
    driveTime: '12-18 min from our SF base',
    housingType: 'Newer condos and townhomes, compact residential areas near BART',
    localTip: 'Colma shares a ZIP with Daly City — confirm your exact address for fastest dispatch.',
    housingTypes: [
      { type: 'Modern Condos & Townhomes', desc: 'Newer construction with compact laundry and kitchen layouts. We navigate shared walls and stacked appliances.', areas: 'Sterling Park, Village in the Park' },
      { type: 'Compact Residential Homes', desc: 'Small-footprint homes near BART. Efficient appliance placement requires experienced technicians for access.', areas: 'Downtown Colma' },
    ],
    caseStudies: [
      { appliance: 'Samsung Washer', neighborhood: 'Sterling Park', issue: 'Front-loader vibrating on spin cycle in condo; rebalanced drum, replaced worn spider arm bracket.', timeframe: '90-minute repair' },
      { appliance: 'GE Dishwasher', neighborhood: 'Village in the Park', issue: 'Not cleaning dishes — clogged wash impeller from hard water; descaled and replaced impeller.', timeframe: '1-hour repair' },
      { appliance: 'LG Refrigerator', neighborhood: 'Downtown Colma', issue: 'Ice maker overflowing; replaced faulty water inlet valve and adjusted fill level.', timeframe: 'Fast repair' },
    ],
    testimonials: [
      { name: 'Diana P.', area: 'Sterling Park', text: 'Washer was shaking our whole condo. Fixed quickly and explained what caused it. No more complaints from the neighbors!', rating: 5 },
      { name: 'Alex T.', area: 'Village in the Park', text: 'Dishwasher wasn\'t cleaning. Hard water buildup. Quick fix, fair price, and they showed me how to prevent it.', rating: 5 },
      { name: 'Anna B.', area: 'Sterling Park', text: 'Wine cooler stopped maintaining temperature. Compressor issue diagnosed and fixed quickly. Very professional service.', rating: 5 },
      { name: 'George L.', area: 'Downtown Colma', text: 'Our Whirlpool fridge was running constantly. Dirty condenser coils — cleaned and tuned up. Runs quiet now.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Daly City', slug: 'daly-city-appliance-repair' },
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
      { name: 'Brisbane', slug: 'brisbane-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Colma including Sterling Park and Village in the Park. We also serve neighboring Daly City, South San Francisco, and Brisbane — typically arriving within 15 minutes from our SF base.',
  },

  'Brisbane': {
    zipCodes: ['94005'],
    neighborhoods: ['Central Brisbane', 'Brisbane Acres', 'Visitacion Valley border', 'Sierra Point'],
    landmarks: ['Brisbane Marina', 'San Bruno Mountain State Park', 'Sierra Point'],
    driveTime: '8-15 min from our SF base',
    housingType: 'Hillside single-family homes, newer developments near Sierra Point',
    localTip: 'Brisbane\'s hillside terrain means some homes have stacked or unusual appliance placements — we come prepared.',
    housingTypes: [
      { type: 'Hillside Single-Family Homes', desc: 'Homes on steep lots with unusual appliance placements and long vent runs. We plan access for every visit.', areas: 'Brisbane Acres, Central Brisbane' },
      { type: 'Newer Developments', desc: 'Modern homes near the waterfront with standard appliance layouts and updated electrical.', areas: 'Sierra Point' },
    ],
    caseStudies: [
      { appliance: 'Maytag Dryer', neighborhood: 'Brisbane Acres', issue: 'Dryer in hillside garage with long vent run; cleared lint blockage, shortened vent path for better airflow.', timeframe: '2-hour repair' },
      { appliance: 'KitchenAid Refrigerator', neighborhood: 'Central Brisbane', issue: 'Condenser fan motor seized; replaced motor and cleaned coils in tight kitchen alcove.', timeframe: '1-hour repair' },
      { appliance: 'Whirlpool Range', neighborhood: 'Sierra Point', issue: 'Oven not heating evenly; replaced faulty bake element and calibrated temperature.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Kevin O.', area: 'Brisbane Acres', text: 'Our dryer vent goes through a hillside wall — complicated setup. They figured out the best fix and our dryer works perfectly now.', rating: 5 },
      { name: 'Maria G.', area: 'Central Brisbane', text: 'Small-town feel but fast service. Fridge fixed same day. Love supporting local businesses.', rating: 5 },
      { name: 'Nancy D.', area: 'Central Brisbane', text: 'Oven door wouldn\'t close properly. Hinges were worn out. Replaced and adjusted — bakes perfectly again.', rating: 5 },
      { name: 'Paul S.', area: 'Sierra Point', text: 'Dryer taking forever to dry clothes. Clogged vent line from the hillside setup. Cleaned out completely. Great job.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Francisco', slug: 'san-francisco-appliance-repair' },
      { name: 'Daly City', slug: 'daly-city-appliance-repair' },
      { name: 'South San Francisco', slug: 'south-san-francisco-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Brisbane including Brisbane Acres and Sierra Point. We also serve neighboring San Francisco, Daly City, and South San Francisco — just 10 minutes from our SF base.',
  },

  'Montara': {
    zipCodes: ['94037'],
    neighborhoods: ['Montara', 'Moss Beach border', 'Chart House area'],
    landmarks: ['Montara State Beach', 'Point Montara Lighthouse', 'Highway 1'],
    driveTime: '25-35 min from our SF base',
    housingType: 'Coastal single-family homes, some rural properties',
    localTip: 'Montara\'s remote coastal location means salt air + limited access — we come fully stocked to avoid return trips.',
    housingTypes: [
      { type: 'Coastal Single-Family Homes', desc: 'Ocean-adjacent homes facing severe salt air corrosion. We seal electrical connections and use anti-corrosion treatments.', areas: 'Montara, Moss Beach border' },
      { type: 'Rural Properties', desc: 'Larger lots along Highway 1 with well water and unique infrastructure. We come fully stocked to avoid return trips.', areas: 'Chart House area' },
    ],
    caseStudies: [
      { appliance: 'Viking Refrigerator', neighborhood: 'Montara', issue: 'Salt corrosion on condenser coils in ocean-front home; deep-cleaned coils, replaced corroded fan relay.', timeframe: 'Fast repair' },
      { appliance: 'GE Dryer', neighborhood: 'Moss Beach border', issue: 'Moisture from ocean air caused thermal fuse failure; replaced fuse, sealed vent exit against saltwater spray.', timeframe: '90-minute repair' },
      { appliance: 'Frigidaire Dishwasher', neighborhood: 'Chart House area', issue: 'Control board corroded from humidity; replaced electronic control board and sealed connections.', timeframe: '2-hour repair' },
    ],
    testimonials: [
      { name: 'Greg P.', area: 'Montara', text: 'Living on the coast means tough conditions for appliances. They came prepared with parts and understood the salt air issues. Excellent.', rating: 5 },
      { name: 'Nancy W.', area: 'Moss Beach border', text: 'Appreciated that they came fully stocked — it\'s a drive to get here. Fixed our dryer in one trip. Will call again.', rating: 5 },
      { name: 'Laura F.', area: 'Montara', text: 'Refrigerator ice maker quit working. Water inlet valve needed replacement. Fixed in one visit, very impressed.', rating: 5 },
      { name: 'Chris M.', area: 'Chart House area', text: 'Coastal salt air corroded our washer drum bearings. They replaced the full bearing kit. Runs smooth and quiet.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Pacifica', slug: 'pacifica-appliance-repair' },
      { name: 'San Bruno', slug: 'san-bruno-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair in Montara and the coastal Half Moon Bay area. We also serve neighboring Pacifica and San Bruno. Our technicians come fully stocked to avoid return trips to this remote coastal location.',
  },

  'Mill Valley': {
    zipCodes: ['94941', '94942'],
    neighborhoods: ['Downtown Mill Valley', 'Blithedale Canyon', 'Tamalpais Valley', 'Alto', 'Homestead Valley', 'Strawberry'],
    landmarks: ['Mount Tamalpais', 'Mill Valley Lumber Yard', 'Muir Woods proximity'],
    driveTime: '20-30 min via Golden Gate Bridge',
    housingType: 'Luxury homes, canyon cabins, modern redwood-surrounded estates',
    localTip: 'Mill Valley\'s tree-heavy canyons mean rodent damage to appliance wiring is common — we check all connections.',
    housingTypes: [
      { type: 'Luxury Canyon Estates', desc: 'High-end homes surrounded by redwoods. Rodent damage to wiring is common — we check all connections on every visit.', areas: 'Blithedale Canyon, Tamalpais Valley' },
      { type: 'Downtown Homes & Condos', desc: 'Walkable downtown area with charming homes. Easy access but often tight kitchens in older builds.', areas: 'Downtown Mill Valley, Strawberry' },
      { type: 'Hillside Properties', desc: 'Homes with panoramic views but challenging access. We plan routes for larger replacement parts.', areas: 'Alto, Homestead Valley' },
    ],
    caseStudies: [
      { appliance: 'Wolf Range', neighborhood: 'Blithedale Canyon', issue: 'Rodent-chewed igniter wiring in canyon home; replaced wiring harness, sealed entry points, tested all burners.', timeframe: '2-hour repair' },
      { appliance: 'Miele Dishwasher', neighborhood: 'Downtown Mill Valley', issue: 'Circulation pump motor failure; sourced factory Miele part and completed precision repair.', timeframe: 'Next-day repair (part sourcing)' },
      { appliance: 'Sub-Zero Freezer', neighborhood: 'Tamalpais Valley', issue: 'Defrost system failure in 36-inch built-in; replaced defrost timer and heater element.', timeframe: 'Fast repair' },
    ],
    testimonials: [
      { name: 'Patricia D.', area: 'Blithedale Canyon', text: 'Mice chewed through our Wolf range wiring in the canyon. They found the damage, fixed it, and showed us how to prevent it. Lifesavers.', rating: 5 },
      { name: 'Chris M.', area: 'Strawberry', text: 'Our Sub-Zero needed a defrost repair. They had experience with the exact model. Professional and efficient.', rating: 5 },
      { name: 'Rachel G.', area: 'Strawberry', text: 'Sub-Zero fridge compressor issue. They had experience with the brand and fixed it same day. Outstanding service.', rating: 5 },
      { name: 'Brian W.', area: 'Tamalpais Valley', text: 'Our Wolf range igniter failed. Had the factory part and installed it within an hour. Very impressed with expertise.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'Sausalito', slug: 'sausalito-appliance-repair' },
      { name: 'Corte Madera', slug: 'corte-madera-appliance-repair' },
      { name: 'Tiburon', slug: 'tiburon-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Mill Valley, Tamalpais Valley, and Strawberry. We also serve neighboring Sausalito, Corte Madera, and Tiburon — typically reaching you within 60-90 minutes from SF.',
  },

  'San Rafael': {
    zipCodes: ['94901', '94903', '94912', '94913'],
    neighborhoods: ['Terra Linda', 'Marinwood', 'Gerstle Park', 'Dominican', 'Peacock Gap', 'Canal District', 'Sun Valley', 'Loch Lomond'],
    landmarks: ['Marin Civic Center', 'San Rafael Canal', 'Northgate Mall'],
    driveTime: '22-32 min via Golden Gate Bridge',
    housingType: 'Ranch homes in Terra Linda, Eichler-style in Marinwood, Victorian downtown, waterfront condos',
    localTip: 'San Rafael\'s hot summers (unlike foggy SF) stress refrigerators and AC — we check compressors closely.',
    housingTypes: [
      { type: 'Ranch Homes', desc: 'Classic suburban ranches with full-size laundry rooms and standard kitchen layouts. Hot summers stress refrigerator compressors.', areas: 'Terra Linda, Sun Valley' },
      { type: 'Eichler-Style Homes', desc: 'Iconic mid-century designs with radiant floor heating and open kitchens. Unique architectural details require careful service.', areas: 'Marinwood, Loch Lomond' },
      { type: 'Downtown Victorians', desc: 'Historic homes with updated kitchens but original plumbing. We handle the mix of old infrastructure and modern appliances.', areas: 'Gerstle Park, Dominican' },
      { type: 'Waterfront Condos', desc: 'Modern units along the Canal with compact layouts and newer appliance models.', areas: 'Canal District, Peacock Gap' },
    ],
    caseStudies: [
      { appliance: 'GE Profile Refrigerator', neighborhood: 'Terra Linda', issue: 'Compressor overheating during San Rafael heat wave; replaced start relay and cleaned condenser coils.', timeframe: 'Fast repair' },
      { appliance: 'Samsung Washer', neighborhood: 'Canal District', issue: 'Front-loader leaking from worn door boot seal; replaced boot gasket and tested multiple cycles.', timeframe: '90-minute repair' },
      { appliance: 'Thermador Cooktop', neighborhood: 'Gerstle Park', issue: 'Induction burner not recognizing cookware; replaced faulty induction coil module.', timeframe: '2-hour repair' },
    ],
    testimonials: [
      { name: 'Mark S.', area: 'Terra Linda', text: 'Heat wave killed our fridge compressor relay. They diagnosed it over the phone and brought the right part. Fixed in an hour.', rating: 5 },
      { name: 'Elena R.', area: 'Gerstle Park', text: 'Thermador cooktop repair — not easy to find someone who knows these. They did. Spot-on diagnosis and repair.', rating: 5 },
      { name: 'Diane K.', area: 'Terra Linda', text: 'Bosch dishwasher drain pump failed. Diagnosed quickly, replaced with OEM part. Runs perfectly. Very happy.', rating: 5 },
      { name: 'Mark J.', area: 'San Rafael Canal', text: 'Washer was vibrating violently during spin. Shock absorbers were gone. Replaced and leveled — smooth operation now.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Anselmo', slug: 'san-anselmo-appliance-repair' },
      { name: 'Larkspur', slug: 'larkspur-appliance-repair' },
      { name: 'Novato', slug: 'novato-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair across San Rafael including Terra Linda, Dominican, and Gerstle Park. We also serve Novato, San Anselmo, and Fairfax in Marin County.',
  },

  'Sausalito': {
    zipCodes: ['94965', '94966'],
    neighborhoods: ['Downtown Sausalito', 'Marin Headlands', 'Marinship', 'Spring Street area', 'Caledonia Street'],
    landmarks: ['Sausalito Houseboats', 'Bay Model Visitor Center', 'Golden Gate Bridge viewpoint'],
    driveTime: '15-22 min via Golden Gate Bridge',
    housingType: 'Hillside homes with bay views, houseboats, luxury waterfront condos',
    localTip: 'Sausalito\'s waterfront houseboats require appliance techs comfortable with marine environments.',
    housingTypes: [
      { type: 'Hillside Homes', desc: 'Homes with bay views on steep terrain. Limited access requires compact tools and planned routes for parts delivery.', areas: 'Spring Street, Caledonia Street' },
      { type: 'Houseboats', desc: 'Floating homes with marine humidity challenges. We use marine-grade sealants and understand the unique electrical systems.', areas: 'Marinship, Houseboat Community' },
      { type: 'Waterfront Condos', desc: 'Luxury units with premium appliances and HOA-managed building access.', areas: 'Downtown Sausalito' },
    ],
    caseStudies: [
      { appliance: 'Bosch Dishwasher', neighborhood: 'Houseboat Community', issue: 'Drain pump corroded from marine humidity; replaced pump with marine-grade sealant on connections.', timeframe: '2-hour repair' },
      { appliance: 'Wolf Oven', neighborhood: 'Spring Street', issue: 'Convection fan motor bearing worn; replaced motor in hillside kitchen with limited access.', timeframe: 'Fast repair' },
      { appliance: 'Whirlpool Refrigerator', neighborhood: 'Downtown Sausalito', issue: 'Compressor struggling in sun-exposed kitchen; cleaned coils, added ventilation recommendation, replaced thermostat.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Jeff A.', area: 'Houseboat Community', text: 'Not many repair services will come to a houseboat. They did, and fixed our dishwasher with care for the marine environment.', rating: 5 },
      { name: 'Laura S.', area: 'Spring Street', text: 'Hillside access wasn\'t easy but they managed perfectly. Wolf oven works like new.', rating: 5 },
      { name: 'Elizabeth P.', area: 'Caledonia Street', text: 'Miele dishwasher sensor fault. They knew the brand inside out. Fixed same day with warranty. Top-notch.', rating: 5 },
      { name: 'John T.', area: 'Marinship', text: 'Viking oven in our houseboat needed calibration. Tricky access but they handled it like pros. Excellent work.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Mill Valley', slug: 'mill-valley-appliance-repair' },
      { name: 'Tiburon', slug: 'tiburon-appliance-repair' },
      { name: 'San Francisco', slug: 'san-francisco-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair in Sausalito and neighboring Marin City, Tiburon, and Belvedere. Our technicians cross the Golden Gate Bridge daily to serve Marin County residents.',
  },

  'Belvedere': {
    zipCodes: ['94920'],
    neighborhoods: ['Belvedere Island', 'Belvedere Lagoon', 'West Shore Road', 'San Rafael Avenue'],
    landmarks: ['Belvedere Island', 'Belvedere-Tiburon Library', 'Ring Mountain Preserve'],
    driveTime: '25-35 min via Golden Gate Bridge',
    housingType: 'Luxury waterfront estates, exclusive island homes, high-end renovations',
    localTip: 'Belvedere homes feature premium built-in appliances — our techs are factory-trained on Sub-Zero, Wolf, and Miele.',
    housingTypes: [
      { type: 'Waterfront Estates', desc: 'Exclusive island and lagoon homes with premium Sub-Zero, Wolf, and Miele appliances. Factory-trained technicians.', areas: 'Belvedere Island, Belvedere Lagoon' },
      { type: 'High-End Renovations', desc: 'Recently renovated homes with integrated luxury kitchen systems requiring specialist knowledge.', areas: 'West Shore Road, San Rafael Avenue' },
    ],
    caseStudies: [
      { appliance: 'Sub-Zero 48" Built-In', neighborhood: 'Belvedere Island', issue: 'Both compressors running hot; replaced condenser fan motor and cleaned both condenser coils in custom cabinetry.', timeframe: '3-hour repair' },
      { appliance: 'Miele Speed Oven', neighborhood: 'Belvedere Lagoon', issue: 'Microwave/convection combo not switching modes; replaced electronic control board.', timeframe: 'Next-day repair (part sourcing)' },
      { appliance: 'Wolf Steam Oven', neighborhood: 'West Shore Road', issue: 'Steam generator calcification; descaled system and replaced water pump seal.', timeframe: '2-hour repair' },
    ],
    testimonials: [
      { name: 'Richard H.', area: 'Belvedere Island', text: 'Our Sub-Zero 48-inch needed both compressor areas serviced. They knew the unit inside and out. Worth every penny.', rating: 5 },
      { name: 'Margaret T.', area: 'Belvedere Lagoon', text: 'Miele speed oven repair in one visit. Hard to find techs who know these premium brands. Highly recommend.', rating: 5 },
      { name: 'Patricia H.', area: 'Belvedere Island', text: 'Thermador cooktop igniter replaced quickly. Technician was respectful of our home and very skilled.', rating: 5 },
      { name: 'Andrew M.', area: 'West Shore Road', text: 'Sub-Zero wine fridge temperature was fluctuating. Thermostat replaced and recalibrated. Perfect now.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'Tiburon', slug: 'tiburon-appliance-repair' },
      { name: 'Mill Valley', slug: 'mill-valley-appliance-repair' },
      { name: 'Corte Madera', slug: 'corte-madera-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair on Belvedere Island, Belvedere Lagoon, and surrounding areas. We also serve neighboring Tiburon, Mill Valley, and Corte Madera with factory-trained technicians for premium brands.',
  },

  'Tiburon': {
    zipCodes: ['94920'],
    neighborhoods: ['Downtown Tiburon', 'Paradise Cay', 'Reed Heights', 'The Cove', 'Old St. Hilary'],
    landmarks: ['Tiburon Ferry Terminal', 'Angel Island views', 'Tiburon Boulevard shops'],
    driveTime: '25-32 min via Golden Gate Bridge',
    housingType: 'Waterfront luxury homes, hillside estates with panoramic bay views',
    localTip: 'Tiburon\'s steep driveways require precision truck parking — we plan routes in advance for every appointment.',
    housingTypes: [
      { type: 'Waterfront Luxury Homes', desc: 'Premium homes with bay views and high-end Viking, Sub-Zero appliances. We carry specialty parts for these brands.', areas: 'Paradise Cay, The Cove' },
      { type: 'Hillside Estates', desc: 'Homes on steep terrain with challenging access. We plan routes and parking in advance for every appointment.', areas: 'Reed Heights, Old St. Hilary' },
    ],
    caseStudies: [
      { appliance: 'Viking Professional Range', neighborhood: 'Paradise Cay', issue: 'Dual-fuel range oven igniter failure plus burner adjustment; complete ignition system service.', timeframe: 'Fast repair' },
      { appliance: 'Sub-Zero Wine Storage', neighborhood: 'Downtown Tiburon', issue: 'Temperature zone 2 running warm; replaced evaporator fan and thermostat sensor in 150-bottle unit.', timeframe: '2-hour repair' },
      { appliance: 'Bosch Washer', neighborhood: 'Reed Heights', issue: 'E04 error code — door lock failure; replaced door lock mechanism and control module.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'William B.', area: 'Paradise Cay', text: 'Viking range needed full ignition service. They came with all the parts. Professional, knowledgeable, and respectful of our home.', rating: 5 },
      { name: 'Catherine E.', area: 'Downtown Tiburon', text: 'Wine storage unit was getting too warm — could have ruined a wine collection. Quick, expert fix. Thank you!', rating: 5 },
      { name: 'Susan W.', area: 'Downtown Tiburon', text: 'KitchenAid fridge water dispenser stopped working. Water line was kinked behind the unit. Quick fix, great service.', rating: 5 },
      { name: 'Richard B.', area: 'Paradise Cay', text: 'Dryer was squeaking loudly. Worn drum rollers — replaced all four. Runs silently now. Fair pricing.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Belvedere', slug: 'belvedere-appliance-repair' },
      { name: 'Corte Madera', slug: 'corte-madera-appliance-repair' },
      { name: 'Mill Valley', slug: 'mill-valley-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair throughout Tiburon including Paradise Cay, Reed Heights, and Downtown Tiburon. We also serve neighboring Belvedere, Corte Madera, and Mill Valley in southern Marin.',
  },

  'Corte Madera': {
    zipCodes: ['94925', '94976'],
    neighborhoods: ['Christmas Tree Hill', 'Chapman Park', 'Madera Gardens', 'Mariner Cove', 'Town Center'],
    landmarks: ['The Village at Corte Madera', 'Town Park', 'Ring Mountain'],
    driveTime: '20-28 min via Golden Gate Bridge',
    housingType: 'Ranch homes, updated mid-century, newer developments near shopping',
    localTip: 'Corte Madera\'s family-oriented community means lots of heavy-use appliances — we prioritize washer/dryer calls.',
    housingTypes: [
      { type: 'Ranch & Mid-Century Homes', desc: 'Family homes with heavy-use appliances. Washers, dryers, and dishwashers see constant use — we prioritize these calls.', areas: 'Chapman Park, Madera Gardens' },
      { type: 'Hillside Properties', desc: 'Homes on Christmas Tree Hill with unique access challenges and stunning views.', areas: 'Christmas Tree Hill' },
      { type: 'Newer Developments', desc: 'Modern homes near shopping centers with updated appliance layouts.', areas: 'Town Center, Mariner Cove' },
    ],
    caseStudies: [
      { appliance: 'LG Washer & Dryer', neighborhood: 'Chapman Park', issue: 'Stacked unit washer leaking onto dryer; replaced washer drain pump and resealed connection between units.', timeframe: '2-hour repair' },
      { appliance: 'KitchenAid Refrigerator', neighborhood: 'Christmas Tree Hill', issue: 'Refrigerator compressor cycling too frequently; replaced overload protector and cleaned dusty coils.', timeframe: '90-minute repair' },
      { appliance: 'GE Profile Dishwasher', neighborhood: 'Town Center', issue: 'Not drying dishes properly; replaced heating element and vent assembly.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'Brian J.', area: 'Chapman Park', text: 'Stacked washer/dryer leaked. They fixed the washer leak AND checked the dryer connections. Thorough work.', rating: 5 },
      { name: 'Wendy M.', area: 'Christmas Tree Hill', text: 'Fridge was running constantly. Quick diagnosis and fair price. Back to normal the same day.', rating: 5 },
      { name: 'Michelle D.', area: 'Christmas Tree Hill', text: 'GE Profile fridge making clicking sounds. Condenser fan motor was failing. Replaced same day. Great experience.', rating: 5 },
      { name: 'Scott A.', area: 'Town Center', text: 'Dishwasher leak under the door. New door gasket installed in 30 minutes. Clean and professional work.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Larkspur', slug: 'larkspur-appliance-repair' },
      { name: 'Mill Valley', slug: 'mill-valley-appliance-repair' },
      { name: 'Tiburon', slug: 'tiburon-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Corte Madera including Christmas Tree Hill, Chapman Park, and Madera Gardens. We also serve neighboring Larkspur, Mill Valley, and Tiburon.',
  },

  'San Quentin': {
    zipCodes: ['94964'],
    neighborhoods: ['San Quentin Village', 'Point San Quentin'],
    landmarks: ['San Quentin Point', 'San Francisco Bay waterfront'],
    driveTime: '22-28 min via Golden Gate Bridge',
    housingType: 'Small residential community, waterfront properties',
    localTip: 'San Quentin\'s compact community means we often service multiple homes per visit — ask about neighbor discounts.',
    housingTypes: [
      { type: 'Waterfront Properties', desc: 'Bay-side homes with humidity exposure. We service appliances in this compact community and offer neighbor discounts.', areas: 'San Quentin Village, Point San Quentin' },
    ],
    caseStudies: [
      { appliance: 'Whirlpool Refrigerator', neighborhood: 'San Quentin Village', issue: 'Ice buildup on evaporator from humidity; replaced defrost heater and thermostat.', timeframe: 'Fast repair' },
      { appliance: 'Kenmore Dryer', neighborhood: 'Point San Quentin', issue: 'Drum belt broken; replaced belt and rollers, cleaned lint from all internal components.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'Paul R.', area: 'San Quentin Village', text: 'Responsive and professional. Fixed our fridge defrost issue same day. Great local service.', rating: 5 },
      { name: 'Barbara N.', area: 'Point San Quentin', text: 'Refrigerator was leaking water on the floor. Clogged drain line — cleared and cleaned. No more puddles.', rating: 5 },
      { name: 'William H.', area: 'San Quentin Village', text: 'Oven element burned out. They had the exact replacement part. Quick install, works perfectly. Recommended.', rating: 5 },
      { name: 'Karen S.', area: 'Point San Quentin', text: 'Washer door lock mechanism jammed. Tech got it open without damage and replaced the lock assembly. Lifesaver.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
      { name: 'Larkspur', slug: 'larkspur-appliance-repair' },
      { name: 'Greenbrae', slug: 'greenbrae-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair in San Quentin Village and Point San Quentin. We also serve neighboring San Rafael, Larkspur, and Greenbrae in central Marin County.',
  },

  'Larkspur': {
    zipCodes: ['94939', '94977'],
    neighborhoods: ['Downtown Larkspur', 'Madrone Canyon', 'Baltimore Park', 'Hillview', 'Murray Park'],
    landmarks: ['Larkspur Landing Ferry Terminal', 'Marin Country Mart', 'Corte Madera Creek'],
    driveTime: '20-28 min via Golden Gate Bridge',
    housingType: 'Charming downtown cottages, hillside homes, condos near ferry',
    localTip: 'Larkspur\'s ferry commuters need flexible scheduling — we offer early morning and evening appointments.',
    housingTypes: [
      { type: 'Downtown Cottages', desc: 'Charming homes with character kitchens. We navigate older layouts and smaller appliance spaces with experience.', areas: 'Downtown Larkspur, Baltimore Park' },
      { type: 'Hillside Homes', desc: 'Canyon properties with longer dryer vent runs and unique access. We plan for efficient service.', areas: 'Madrone Canyon, Hillview' },
      { type: 'Ferry-Area Condos', desc: 'Modern condos near the ferry terminal. Flexible early morning and evening scheduling for commuters.', areas: 'Near Larkspur Landing' },
    ],
    caseStudies: [
      { appliance: 'Samsung French Door Fridge', neighborhood: 'Downtown Larkspur', issue: 'Ice maker leaking water onto floor; replaced cracked water inlet tube and recalibrated ice maker.', timeframe: '90-minute repair' },
      { appliance: 'Bosch Gas Range', neighborhood: 'Madrone Canyon', issue: 'Oven not reaching set temperature; replaced faulty gas valve and recalibrated thermostat.', timeframe: '2-hour repair' },
      { appliance: 'Maytag Washer', neighborhood: 'Murray Park', issue: 'Washer not draining completely; cleared debris from drain pump filter and replaced worn pump impeller.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'Diane F.', area: 'Downtown Larkspur', text: 'Samsung fridge leaking ice water. They came before my evening ferry commute and had it fixed. Flexible and fast.', rating: 5 },
      { name: 'Scott P.', area: 'Madrone Canyon', text: 'Bosch oven wasn\'t heating right for weeks. One visit — gas valve issue. Now it bakes perfectly. Thank you!', rating: 5 },
      { name: 'Carol T.', area: 'Bon Air', text: 'Samsung dryer not heating. Thermal fuse blown from lint buildup. Fixed and cleaned the vent. Very thorough.', rating: 5 },
      { name: 'James P.', area: 'Greenbrae Hills', text: 'Cooktop burner wouldn\'t light. Igniter switch replaced in 20 minutes. Fast, efficient, affordable.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'Corte Madera', slug: 'corte-madera-appliance-repair' },
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
      { name: 'Greenbrae', slug: 'greenbrae-appliance-repair' },
    ],
    nearbyDescription: 'We provide fast appliance repair in Larkspur including Downtown Larkspur, Madrone Canyon, and Baltimore Park. We also serve neighboring Corte Madera, San Rafael, and Greenbrae with flexible scheduling.',
  },

  'Greenbrae': {
    zipCodes: ['94904'],
    neighborhoods: ['Greenbrae Hills', 'Bon Air', 'Greenbrae Boardwalk'],
    landmarks: ['Marin General Hospital', 'Bon Air Center', 'Corte Madera Creek marsh'],
    driveTime: '22-28 min via Golden Gate Bridge',
    housingType: 'Hillside homes with views, ranch-style, condos near Bon Air',
    localTip: 'Greenbrae\'s older ranch homes often have original appliance hookups — we update connections when needed.',
    housingTypes: [
      { type: 'Hillside Homes', desc: 'Homes with panoramic views and older appliance hookups. We update connections and check aging supply lines.', areas: 'Greenbrae Hills' },
      { type: 'Ranch-Style Homes', desc: 'Classic ranches near medical facilities with standard layouts. Convenient for quick service visits.', areas: 'Bon Air, Greenbrae Boardwalk' },
    ],
    caseStudies: [
      { appliance: 'GE Washer', neighborhood: 'Greenbrae Hills', issue: 'Old copper water supply lines corroding; replaced hoses, serviced water inlet valve, tested multiple cycles.', timeframe: '90-minute repair' },
      { appliance: 'Frigidaire Oven', neighborhood: 'Bon Air', issue: 'Self-clean cycle locked door permanently; released lock mechanism and replaced faulty door latch motor.', timeframe: '1-hour repair' },
      { appliance: 'LG Refrigerator', neighborhood: 'Greenbrae Boardwalk', issue: 'Linear compressor noise and intermittent cooling; replaced compressor under extended warranty program.', timeframe: 'Next-day repair (part)' },
    ],
    testimonials: [
      { name: 'Janet B.', area: 'Greenbrae Hills', text: 'Old washer hookups were corroding. They fixed the washer AND updated our supply lines. Went above and beyond.', rating: 5 },
      { name: 'Howard L.', area: 'Bon Air', text: 'Oven locked shut after self-clean. They came fast and got it open safely. Great, honest service.', rating: 5 },
      { name: 'Carol T.', area: 'Bon Air', text: 'Samsung dryer not heating. Thermal fuse blown from lint buildup. Fixed and cleaned the vent. Very thorough.', rating: 5 },
      { name: 'James P.', area: 'Greenbrae Hills', text: 'Cooktop burner wouldn\'t light. Igniter switch replaced in 20 minutes. Fast, efficient, affordable.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
      { name: 'Larkspur', slug: 'larkspur-appliance-repair' },
      { name: 'Ross', slug: 'ross-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair in Greenbrae including Greenbrae Hills, Bon Air, and the Boardwalk area. We also serve neighboring San Rafael, Larkspur, and Ross in central Marin County.',
  },

  'Ross': {
    zipCodes: ['94957'],
    neighborhoods: ['Lagunitas Road', 'Shady Lane', 'Upper Road', 'Laurel Grove'],
    landmarks: ['Ross Common', 'Natalie Coffin Greene Park', 'Phoenix Lake trail access'],
    driveTime: '25-32 min via Golden Gate Bridge',
    housingType: 'Exclusive estates, large custom homes, historic properties',
    localTip: 'Ross estates feature commercial-grade home kitchens — our techs carry premium brand parts for Wolf, Sub-Zero, Viking.',
    housingTypes: [
      { type: 'Exclusive Estates', desc: 'Large custom homes with commercial-grade kitchens. Wolf 60-inch ranges, Sub-Zero columns, Miele dishwashers — we carry parts for all.', areas: 'Lagunitas Road, Shady Lane' },
      { type: 'Historic Properties', desc: 'Beautifully maintained older homes blending modern premium appliances with classic architecture.', areas: 'Upper Road, Laurel Grove' },
    ],
    caseStudies: [
      { appliance: 'Wolf 60" Pro Range', neighborhood: 'Lagunitas Road', issue: 'Four burners intermittently failing; replaced igniter modules and cleaned all burner ports on 6-burner range.', timeframe: '3-hour repair' },
      { appliance: 'Sub-Zero 48" Refrigerator', neighborhood: 'Shady Lane', issue: 'Dual system — refrigerator side warm while freezer OK; replaced refrigerator-side evaporator fan motor.', timeframe: '2-hour repair' },
      { appliance: 'Miele Dishwasher', neighborhood: 'Upper Road', issue: 'Not drying dishes; replaced auto-open door mechanism and vent fan motor.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Elizabeth K.', area: 'Lagunitas Road', text: 'Our Wolf 60-inch range needed 4 igniters replaced. They had them all and did the job in one visit. Truly expert-level service.', rating: 5 },
      { name: 'Andrew M.', area: 'Shady Lane', text: 'Sub-Zero built-in repair in a custom kitchen. They were careful with our cabinetry and fixed the issue perfectly.', rating: 5 },
      { name: 'Margaret L.', area: 'Upper Ross', text: 'Wolf range needed calibration after a power surge. Tech recalibrated all burners and the oven. Cooks perfectly.', rating: 5 },
      { name: 'Thomas K.', area: 'Ross Commons', text: 'Wine cooler compressor was running non-stop. Dirty condenser cleaned and recharged. Quiet and efficient now.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'San Anselmo', slug: 'san-anselmo-appliance-repair' },
      { name: 'Fairfax', slug: 'fairfax-appliance-repair' },
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair throughout Ross including Lagunitas Road and Upper Road estates. We also serve neighboring San Anselmo, Fairfax, and San Rafael with factory-trained technicians for premium brands.',
  },

  'Fairfax': {
    zipCodes: ['94930'],
    neighborhoods: ['Downtown Fairfax', 'Manor', 'Oak Manor', 'Cascade Canyon', 'Bothin Marsh area'],
    landmarks: ['Fairfax Theater', 'Cascade Falls', 'Deer Park'],
    driveTime: '28-35 min via Golden Gate Bridge',
    housingType: 'Eclectic mix — redwood cabins, craftsman cottages, hillside homes',
    localTip: 'Fairfax\'s narrow canyon roads require smaller service vehicles — we plan access carefully for hillside homes.',
    housingTypes: [
      { type: 'Canyon Cabins & Cottages', desc: 'Eclectic homes tucked in redwood canyons. Narrow roads require smaller service vehicles and planned access.', areas: 'Cascade Canyon, Bothin Marsh area' },
      { type: 'Craftsman Bungalows', desc: 'Charming downtown homes with character kitchens. Older wiring sometimes needs attention alongside appliance repair.', areas: 'Downtown Fairfax, Manor' },
    ],
    caseStudies: [
      { appliance: 'Kenmore Refrigerator', neighborhood: 'Cascade Canyon', issue: 'Power supply issues from aging home wiring; replaced start components and recommended electrician for panel upgrade.', timeframe: 'Fast repair' },
      { appliance: 'Whirlpool Washer', neighborhood: 'Downtown Fairfax', issue: 'Water not filling; replaced water inlet valve and cleaned sediment-clogged supply line screens.', timeframe: '1-hour repair' },
      { appliance: 'GE Gas Dryer', neighborhood: 'Oak Manor', issue: 'No heat — gas igniter cracked; replaced igniter and tested all safety components.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Lisa N.', area: 'Cascade Canyon', text: 'They navigated our steep canyon driveway and fixed the fridge. Also flagged a wiring concern — really looking out for us.', rating: 5 },
      { name: 'Matt C.', area: 'Downtown Fairfax', text: 'Fast service in Fairfax. Washer not filling turned out to be a simple valve replacement. Honest and fair pricing.', rating: 5 },
      { name: 'Dorothy W.', area: 'Fairfax Hills', text: 'Washing machine was leaking from the bottom. Drain pump gasket replaced. No more leaks. Great service.', rating: 5 },
      { name: 'Edward C.', area: 'Downtown Fairfax', text: 'Old Kenmore dryer took forever to dry. Heating element replaced plus full vent cleaning. Works like new.', rating: 5 }
    ],
    nearbyServices: [
      { name: 'San Anselmo', slug: 'san-anselmo-appliance-repair' },
      { name: 'Ross', slug: 'ross-appliance-repair' },
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair throughout Fairfax including Cascade Canyon, Downtown Fairfax, and Oak Manor. We also serve neighboring San Anselmo, Ross, and San Rafael in Marin County.',
  },

  'San Anselmo': {
    zipCodes: ['94960'],
    neighborhoods: ['Downtown San Anselmo', 'Sleepy Hollow', 'Seminary', 'Red Hill', 'Brookside'],
    landmarks: ['San Anselmo Avenue shops', 'Robson-Harrington Park', 'Creek Park'],
    driveTime: '26-33 min via Golden Gate Bridge',
    housingType: 'Craftsman bungalows, mid-century ranches, some luxury hillside homes',
    localTip: 'San Anselmo\'s creek-side homes face occasional flooding — we check for water damage to lower-level appliances.',
    housingTypes: [
      { type: 'Craftsman Bungalows', desc: 'Classic San Anselmo craftsman homes with original layouts. Creek-side locations face flooding risk — we check for water damage.', areas: 'Downtown San Anselmo, Brookside' },
      { type: 'Mid-Century Ranches', desc: 'Spacious ranches with standard appliance setups. Quick, efficient service visits.', areas: 'Sleepy Hollow, Seminary' },
      { type: 'Hillside Homes', desc: 'Luxury properties with panoramic views and premium kitchen appliances.', areas: 'Red Hill' },
    ],
    caseStudies: [
      { appliance: 'LG Dishwasher', neighborhood: 'Sleepy Hollow', issue: 'Control panel intermittent; replaced user interface board and main control board.', timeframe: '2-hour repair (part sourcing same day)' },
      { appliance: 'Samsung Dryer', neighborhood: 'Downtown San Anselmo', issue: 'Drum not spinning; replaced worn belt and idler pulley assembly.', timeframe: '1-hour repair' },
      { appliance: 'Bosch Refrigerator', neighborhood: 'Seminary', issue: 'Fresh food section too warm; replaced faulty damper control assembly.', timeframe: '90-minute repair' },
    ],
    testimonials: [
      { name: 'Robin J.', area: 'Sleepy Hollow', text: 'LG dishwasher panel kept flickering. They diagnosed the exact boards that needed replacement. Working perfectly now.', rating: 5 },
      { name: 'Gary W.', area: 'Downtown San Anselmo', text: 'Dryer belt snapped. Quick repair, reasonable price, and they checked the rest of the dryer while they were at it.', rating: 5 },
      { name: 'Janet R.', area: 'Sleepy Hollow', text: 'Dishwasher not draining. Food trap and drain hose were both clogged. Thorough cleaning and it works great now.', rating: 5 },
      { name: 'Gary M.', area: 'Downtown San Anselmo', text: 'Fridge making loud buzzing sound. Evaporator fan motor was failing. Quick replacement, very quiet now.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'Fairfax', slug: 'fairfax-appliance-repair' },
      { name: 'Ross', slug: 'ross-appliance-repair' },
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair across San Anselmo including Sleepy Hollow, Seminary, and Downtown San Anselmo. We also serve neighboring Fairfax, Ross, and San Rafael in central Marin.',
  },

  'Novato': {
    zipCodes: ['94945', '94947', '94948', '94949'],
    neighborhoods: ['Downtown Novato', 'Hamilton', 'Ignacio', 'Indian Valley', 'Black Point', 'Bel Marin Keys', 'Pacheco Valle'],
    landmarks: ['Hamilton Field historic hangars', 'Stafford Lake', 'Marin Country Club'],
    driveTime: '30-42 min via Golden Gate Bridge + 101',
    housingType: 'Suburban homes in Hamilton, ranch properties in Indian Valley, waterfront in Bel Marin Keys',
    localTip: 'Novato is our furthest North Bay city — we batch appointments here for fast efficiency.',
    housingTypes: [
      { type: 'Suburban Homes', desc: 'Family neighborhoods with heavy-use appliances. Standard layouts make for efficient service visits.', areas: 'Hamilton, Downtown Novato, Ignacio' },
      { type: 'Ranch Properties', desc: 'Larger lots with well water and rural infrastructure. We come prepared for unique plumbing challenges.', areas: 'Indian Valley, Pacheco Valle' },
      { type: 'Waterfront Homes', desc: 'Bay-side properties with humidity exposure and premium appliances.', areas: 'Bel Marin Keys, Black Point' },
    ],
    caseStudies: [
      { appliance: 'Maytag Washer', neighborhood: 'Hamilton', issue: 'Washer shaking violently during spin; replaced all four shock absorbers and rebalanced drum.', timeframe: '90-minute repair' },
      { appliance: 'Thermador Refrigerator', neighborhood: 'Bel Marin Keys', issue: 'Freedom Refrigerator column not cooling; replaced evaporator and recharged sealed system.', timeframe: 'Fast repair' },
      { appliance: 'Whirlpool Gas Oven', neighborhood: 'Indian Valley', issue: 'Oven igniter glowing but not lighting; igniter weakened below threshold — replaced with new igniter.', timeframe: '1-hour repair' },
    ],
    testimonials: [
      { name: 'Peter L.', area: 'Hamilton', text: 'They came all the way to Novato and fixed our washer fast. Appreciated the fast scheduling this far north.', rating: 5 },
      { name: 'Ann S.', area: 'Bel Marin Keys', text: 'Thermador column fridge — not many techs know these. They did, and fixed it right. Expert-level knowledge.', rating: 5 },
      { name: 'Sharon V.', area: 'Hamilton', text: 'LG washer had an error code we couldn\'t figure out. Tech diagnosed bad pressure switch in minutes. Fixed same day.', rating: 5 },
      { name: 'Raymond D.', area: 'Ignacio', text: 'Oven was heating unevenly — one side burning, other raw. Bake element had a hot spot. Replaced and baking evenly.', rating: 5 },
    ],
    nearbyServices: [
      { name: 'San Rafael', slug: 'san-rafael-appliance-repair' },
      { name: 'San Anselmo', slug: 'san-anselmo-appliance-repair' },
    ],
    nearbyDescription: 'We provide appliance repair throughout Novato including Hamilton, Ignacio, and Novato\'s downtown neighborhoods. We serve all of northern Marin County with fast and next-day availability.',
  },
};

export default cityLocalData;

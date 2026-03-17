// SEO content templates for static HTML generation

export const getSEOContent = (route) => {
  const routeHandlers = {
    '/': getHomeContent(),
    '/refrigerator-repair': getServiceContent('Refrigerator'),
    '/washer-repair': getServiceContent('Washer'),
    '/dryer-repair': getServiceContent('Dryer'),
    '/dishwasher-repair': getServiceContent('Dishwasher'),
    '/oven-repair': getServiceContent('Oven'),
    '/ice-maker-repair': getServiceContent('Ice Maker'),
    '/wine-cooler-repair': getServiceContent('Wine Cooler'),
    '/cooktop-repair': getServiceContent('Cooktop'),
    '/range-repair': getServiceContent('Range'),
    '/freezer-repair': getServiceContent('Freezer'),
    '/garbage-disposal-repair': getServiceContent('Garbage Disposal'),
    '/stove-repair': getServiceContent('Stove'),
    '/contact': getContactContent(),
    '/about': getAboutContent(),
    '/service-areas': getServiceAreasContent(),
    '/local-appliance-repair': getLocalRepairContent()
  };

  // Check if it's a city page (new canonical pattern: /{city}-appliance-repair)
  if (route.endsWith('-appliance-repair')) {
    const citySlug = route.replace('-appliance-repair', '').replace(/^\//, '');
    return getCityContent(citySlug);
  }
  // Also handle old pattern for backward compat
  if (route.startsWith('/appliance-repair-')) {
    const citySlug = route.replace('/appliance-repair-', '');
    return getCityContent(citySlug);
  }

  return routeHandlers[route] || getDefaultContent(route);
};

function getHomeContent() {
  return {
    title: 'Appliance Repair San Francisco & Bay Area | FixitBay',
    description: 'Professional appliance repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty. Licensed & insured. Same-day service.',
    h1: 'Appliance Repair in San Francisco & Bay Area',
    content: `
      <p>FixitBay provides professional in-home appliance repair across San Francisco, the Peninsula, and North Bay. Our licensed and insured technicians fix refrigerators, washers, dryers, dishwashers, ovens, and more—bringing expertise and quality parts directly to your door.</p>
      <p>We charge a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed. Every repair is backed by our comprehensive 180-day warranty on parts and labor.</p>
      <h2>Common Appliance Issues We Fix</h2>
      <ul>
        <li>Refrigerator not cooling or leaking</li>
        <li>Washer won't spin or drain</li>
        <li>Dryer not heating</li>
        <li>Dishwasher won't clean or drain</li>
        <li>Oven temperature issues</li>
        <li>Ice maker not making ice</li>
      </ul>
      <h2>Top Brands We Service</h2>
      <p>Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Miele, and more.</p>
      <p><strong>Same-day and next-day appointments available.</strong> Call <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a>.</p>
    `,
    internalLinks: [
      '/refrigerator-repair',
      '/washer-repair',
      '/dryer-repair',
      '/dishwasher-repair',
      '/oven-repair',
      '/ice-maker-repair',
      '/service-areas',
      '/contact',
      '/san-francisco-appliance-repair',
      '/daly-city-appliance-repair'
    ]
  };
}

function getServiceContent(service) {
  const serviceData = {
    'Refrigerator': {
      problems: ['Not cooling', 'Water leaks', 'Ice maker issues', 'Strange noises', 'Temperature problems'],
      brands: ['Whirlpool', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Sub-Zero']
    },
    'Washer': {
      problems: ['Won\'t spin', 'Won\'t drain', 'Leaking water', 'Won\'t fill', 'Loud noises'],
      brands: ['Whirlpool', 'Maytag', 'GE', 'Samsung', 'LG', 'Bosch']
    },
    'Dryer': {
      problems: ['Not heating', 'Won\'t start', 'Not tumbling', 'Takes too long', 'Overheating'],
      brands: ['Whirlpool', 'Maytag', 'GE', 'Samsung', 'LG', 'Bosch']
    },
    'Dishwasher': {
      problems: ['Won\'t drain', 'Not cleaning dishes', 'Leaking', 'Won\'t start', 'Not drying'],
      brands: ['Bosch', 'KitchenAid', 'Whirlpool', 'GE', 'Samsung', 'Miele']
    },
    'Oven': {
      problems: ['Not heating', 'Temperature issues', 'Burners not working', 'Door won\'t close', 'Igniter problems'],
      brands: ['GE', 'Whirlpool', 'Frigidaire', 'Bosch', 'Thermador', 'Viking']
    },
    'Ice Maker': {
      problems: ['Not making ice', 'Water leaking', 'Ice tastes bad', 'Jammed', 'Dispenser not working'],
      brands: ['GE', 'Whirlpool', 'Samsung', 'LG', 'Sub-Zero', 'Scotsman']
    },
    'Wine Cooler': {
      problems: ['Not cooling', 'Temperature too warm', 'Loud compressor', 'Leaking water', 'Won\'t start', 'Thermoelectric failure'],
      brands: ['Sub-Zero', 'Eurocave', 'Vinotemp', 'Whynter', 'EdgeStar', 'Frigidaire']
    },
    'Garbage Disposal': {
      problems: ['Won\'t turn on', 'Jammed or humming', 'Leaking', 'Loud grinding noise', 'Bad smell'],
      brands: ['InSinkErator', 'Moen', 'Waste King', 'KitchenAid', 'GE', 'Whirlpool']
    }
  };

  const data = serviceData[service] || serviceData['Refrigerator'];
  
  return {
    title: `${service} Repair San Francisco & Bay Area | Same-Day | FixitBay`,
    description: `Professional ${service.toLowerCase()} repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty. Same-day service.`,
    h1: `${service} Repair in San Francisco & Bay Area`,
    content: `
      <p>When your ${service.toLowerCase()} breaks down, FixitBay delivers professional repair service throughout San Francisco, the Peninsula, and North Bay. Our licensed and insured technicians diagnose and fix most issues on the same visit, carrying an extensive inventory of common replacement parts in our service vehicles. We charge a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed—honest pricing from start to finish.</p>
      
      <p>Our ${service.toLowerCase()} repair process includes a thorough inspection of all major components and systems. We test functionality, check for underlying issues, and identify the root cause of problems. Whether you're dealing with mechanical failures, electrical issues, or component malfunctions, we have the expertise and parts to restore your ${service.toLowerCase()} quickly and professionally.</p>
      
      <h2>Common ${service} Problems We Fix</h2>
      <ul>
        ${data.problems.map(p => `<li>${p}</li>`).join('\n        ')}
        <li>Component failures and malfunctions</li>
        <li>Electrical and control board issues</li>
        <li>Mechanical wear and tear</li>
      </ul>
      
      <h2>Brands We Service</h2>
      <p>Our technicians are factory-trained and certified to service all major ${service.toLowerCase()} brands. We work on ${data.brands.join(', ')}, and many more. Whether you have a basic model or a high-end appliance, we have the knowledge and parts to repair it correctly.</p>
      
      <h2>Our Service Process</h2>
      <ol>
        <li><strong>Book Online or Call:</strong> Schedule same-day or next-day service at your convenience. Call (760) 543-5733 or book online.</li>
        <li><strong>Diagnostic Visit:</strong> Our licensed technician arrives on time, inspects your ${service.toLowerCase()}, and identifies the problem. $60 diagnostic fee applies.</li>
        <li><strong>Upfront Quote:</strong> You receive a clear, written estimate before any work begins. The $60 diagnostic is fully credited toward your repair.</li>
        <li><strong>Professional Repair:</strong> We fix the issue using quality parts and proven techniques. Most repairs are completed the same day. 180-day warranty included.</li>
      </ol>
      
      <h2>Why Choose FixitBay?</h2>
      <p><strong>Licensed & Insured</strong> • <strong>180-Day Warranty</strong> • <strong>Same/Next Day Service</strong> • <strong>Transparent Pricing</strong></p>
      
      <p>We service all neighborhoods across San Francisco, the Peninsula, and North Bay including apartments, condos, and single-family homes. Our technicians are background-checked, professional, and respectful of your home. We clean up after ourselves and ensure your ${service.toLowerCase()} is working perfectly before we leave.</p>
      
      <p>Call <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a> for fast, professional ${service.toLowerCase()} repair service.</p>
    `,
    internalLinks: [
      '/',
      '/service-areas',
      '/contact',
      '/refrigerator-repair',
      '/washer-repair',
      '/dryer-repair',
      '/dishwasher-repair',
      '/san-francisco-appliance-repair',
      '/mill-valley-appliance-repair',
      '/about'
    ]
  };
}

function getCityContent(citySlug) {
  const cityName = citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    title: `Appliance Repair ${cityName} | Same-Day Service | FixitBay`,
    description: `Licensed & insured appliance repair in ${cityName} and nearby areas. $60 diagnostic applied to repair. Same/next-day available. 180-day warranty.`,
    h1: `Appliance Repair in ${cityName}, CA`,
    content: `
      <p>FixitBay provides professional appliance repair service in ${cityName} and throughout the Bay Area. Our licensed and insured technicians service refrigerators, washers, dryers, dishwashers, ovens, ice makers, and more. We understand how disruptive a broken appliance can be to your daily routine, which is why we offer same-day and next-day appointments throughout ${cityName} and surrounding areas.</p>
      <p>Our transparent pricing starts with a $60 diagnostic fee that is fully credited toward your repair when you proceed. No hidden charges, no surprises—just honest, upfront pricing. Every repair is backed by our comprehensive 180-day warranty on parts and labor, giving you long-term peace of mind.</p>
      <h2>Appliances We Repair in ${cityName}</h2>
      <ul>
        <li><strong>Refrigerator Repair:</strong> Not cooling, water leaks, ice maker issues, strange noises, temperature problems</li>
        <li><strong>Washer & Dryer Repair:</strong> Won't spin, won't drain, not heating, loud noises, won't start</li>
        <li><strong>Dishwasher Repair:</strong> Not cleaning, won't drain, leaking, not drying, error codes</li>
        <li><strong>Oven & Range Repair:</strong> Not heating, temperature issues, burners not working, igniter problems</li>
        <li><strong>Ice Maker Repair:</strong> Not making ice, water leaking, jammed, dispenser not working</li>
        <li><strong>Freezer Repair:</strong> Not freezing, frost buildup, temperature control issues</li>
      </ul>
      <h2>Why Choose FixitBay in ${cityName}?</h2>
      <p><strong>Licensed & Insured:</strong> FixitBay LLC is fully licensed and insured. Our technicians follow safety best practices in every home, giving you confidence that the job will be done right.</p>
      <p><strong>180-Day Warranty:</strong> We stand behind our work with a comprehensive 180-day warranty on parts and labor. If the same issue reoccurs, we'll return at no additional charge.</p>
      <p><strong>Same/Next Day Service:</strong> Most ${cityName} residents can get same-day or next-day appointments. We respect your time and arrive within scheduled windows.</p>
      <p><strong>Upfront Pricing:</strong> Know exactly what you'll pay before we start work. No hidden fees, no surprises.</p>
      <h2>Brands We Service</h2>
      <p>We repair all major appliance brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Miele, JennAir, Electrolux, and many more. Whether you have a basic model or a high-end European appliance, our technicians have the expertise to diagnose and repair it.</p>
      <h2>How to Schedule Service</h2>
      <p>Getting your appliances repaired in ${cityName} is simple. Call us at <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a> to schedule your repair visit today. We'll work around your schedule to find a convenient time.</p>
    `,
    internalLinks: [
      '/',
      '/service-areas',
      '/refrigerator-repair',
      '/washer-repair',
      '/dryer-repair',
      '/dishwasher-repair',
      '/oven-repair',
      '/ice-maker-repair',
      '/contact',
      '/about'
    ]
  };
}

function getContactContent() {
  return {
    title: 'Contact Us | Appliance Repair San Francisco | FixitBay',
    description: 'Contact FixitBay for appliance repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty. Book online.',
    h1: 'Contact FixitBay',
    content: `
      <p>Get fast, reliable appliance repair service across San Francisco, Peninsula, and North Bay. Our licensed and insured technicians are ready to help restore your refrigerator, washer, dryer, dishwasher, oven, or other appliances. We offer same-day and next-day appointments throughout the Bay Area with transparent pricing and a comprehensive 180-day warranty.</p>
      
      <h2>Get In Touch</h2>
      <p><strong>Phone:</strong> <a href="tel:+17605435733">(760) 543-5733</a></p>
      <p><strong>Service Hours:</strong> Monday-Saturday, 8AM-6PM</p>
      <p><strong>Online Booking:</strong> <a href="/book">Schedule Service Now</a></p>
      
      <h2>What We Repair</h2>
      <p>We service all major home appliances including refrigerators, freezers, ice makers, washers, dryers, dishwashers, ovens, ranges, cooktops, and garbage disposals. Our technicians carry common replacement parts and specialized tools, enabling same-day repairs in most cases.</p>
      
      <h2>Service Areas</h2>
      <p>We proudly serve 22 cities across San Francisco, the Peninsula, and North Bay including San Francisco, Daly City, Mill Valley, San Rafael, Pacifica, and surrounding communities. Call us to confirm coverage in your area.</p>
      
      <h2>Why Choose FixitBay?</h2>
      <ul>
        <li><strong>Licensed & Insured:</strong> Full credentials and liability coverage for your peace of mind</li>
        <li><strong>180-Day Warranty:</strong> Comprehensive warranty on all parts and labor</li>
        <li><strong>Transparent Pricing:</strong> $60 diagnostic fee fully applied to repair cost</li>
        <li><strong>Same/Next Day Service:</strong> Fast response times to minimize disruption</li>
        <li><strong>All Major Brands:</strong> Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, and more</li>
      </ul>
      
      <p>Don't let a broken appliance disrupt your daily routine. Contact FixitBay today and let our experienced technicians get your appliances back to perfect working condition.</p>
    `,
    internalLinks: ['/', '/service-areas', '/refrigerator-repair', '/washer-repair', '/about']
  };
}

function getAboutContent() {
  return {
    title: 'About FixitBay | Appliance Repair San Francisco',
    description: 'FixitBay provides professional appliance repair in San Francisco. Licensed, insured technicians. 180-day warranty. Over 3 years serving the community.',
    h1: 'About FixitBay',
    content: `
      <p>FixitBay is a licensed and insured appliance repair company serving San Francisco, the Peninsula, and North Bay. With over 3 years of experience, we've helped thousands of homeowners and renters restore their appliances quickly, affordably, and professionally.</p>
      
      <h2>Our Story</h2>
      <p>Founded by experienced appliance technicians who saw a need for honest, reliable, and transparent appliance repair service in the Bay Area, FixitBay has grown from a small local operation to a trusted name across 22 cities. We built our reputation on quality workmanship, fair pricing, and exceptional customer service.</p>
      
      <h2>What Sets Us Apart</h2>
      <p>Our technicians are factory-trained and certified to service all major appliance brands and models. We carry an extensive inventory of common replacement parts in our service vehicles, which allows us to complete most repairs during the first visit. Unlike some competitors, we never charge extra for evenings or weekends, and we always provide upfront pricing before starting any work.</p>
      
      <h2>Our Commitment</h2>
      <p><strong>Licensed & Insured:</strong> FixitBay LLC holds all required state and local licenses and maintains comprehensive liability insurance. Our technicians follow strict safety protocols in every home.</p>
      <p><strong>180-Day Warranty:</strong> We stand behind our work with a comprehensive 180-day warranty on all parts and labor. If the same issue reoccurs, we'll return at no additional charge.</p>
      <p><strong>Transparent Pricing:</strong> Our $60 diagnostic fee is fully credited toward your repair when you proceed. No hidden charges, no surprises—just honest, upfront pricing.</p>
      <p><strong>Community Focused:</strong> We live and work in the communities we serve. Your satisfaction is our reputation, and we treat every repair as if it were in our own home.</p>
      
      <h2>Brands We Service</h2>
      <p>Our technicians are trained to repair all major appliance brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Miele, JennAir, Electrolux, and many more. From budget models to luxury European appliances, we have the expertise to diagnose and repair them all.</p>
      
      <p>Thank you for considering FixitBay for your appliance repair needs. Call <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a> to schedule service today.</p>
    `,
    internalLinks: ['/', '/service-areas', '/contact', '/refrigerator-repair', '/washer-repair']
  };
}

function getServiceAreasContent() {
  return {
    title: 'Appliance Repair Service Areas | San Francisco | FixitBay',
    description: 'Professional in-home appliance repair across San Francisco, Peninsula & North Bay. Same/next-day service, $60 diagnostic applied to repair, 180-day warranty.',
    h1: 'Appliance Repair Service Areas',
    content: `
      <p>FixitBay provides professional in-home appliance repair across San Francisco, the Peninsula, and North Bay communities. Our licensed and insured technicians service refrigerators, washers, dryers, dishwashers, ovens, ranges, and more—bringing expertise and quality parts directly to your home, condo, or apartment.</p>
      
      <p>We offer same-day and next-day appointments throughout the Bay Area, with a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed. Every repair is backed by our comprehensive 180-day warranty on parts and labor.</p>
      
      <h2>Cities We Serve</h2>
      <p><strong>San Francisco:</strong> San Francisco (all neighborhoods including Mission, SOMA, Richmond, Sunset, Noe Valley, Pacific Heights, and more)</p>
      
      <p><strong>Peninsula:</strong> Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara</p>
      
      <p><strong>North Bay / Marin County:</strong> San Rafael, Novato, Mill Valley, Sausalito, Belvedere, Tiburon, Corte Madera, San Quentin, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo</p>
      
      <h2>What We Repair</h2>
      <p>Our technicians are experts in diagnosing and repairing all major home appliances:</p>
      <ul>
        <li><strong>Refrigerator Repair:</strong> Not cooling, water leaks, ice maker issues, temperature problems</li>
        <li><strong>Washer Repair:</strong> Won't spin, won't drain, leaking, not filling with water</li>
        <li><strong>Dryer Repair:</strong> Not heating, won't start, takes too long to dry, loud noises</li>
        <li><strong>Dishwasher Repair:</strong> Not cleaning dishes, won't drain, leaking, not drying</li>
        <li><strong>Oven & Range Repair:</strong> Not heating, temperature issues, burners not working</li>
        <li><strong>Ice Maker Repair:</strong> Not making ice, water leaking, jammed, dispenser problems</li>
        <li><strong>Freezer Repair:</strong> Not freezing, frost buildup, temperature control issues</li>
      </ul>
      
      <h2>Why Choose FixitBay?</h2>
      <p>Licensed & insured with over 3 years serving Bay Area communities. Our technicians carry common parts for same-day repairs. Transparent $60 diagnostic (applied to repair). Comprehensive 180-day warranty on all work. We service all major brands including Whirlpool, GE, Samsung, LG, Bosch, Frigidaire, Maytag, KitchenAid, Sub-Zero, Viking, and more.</p>
      
      <p>Don't see your city listed? Call us at <a href="tel:+17605435733">(760) 543-5733</a> to confirm coverage. We're continuously expanding our service area and may be able to accommodate your location.</p>
    `,
    internalLinks: [
      '/',
      '/refrigerator-repair',
      '/washer-repair',
      '/dryer-repair',
      '/dishwasher-repair',
      '/oven-repair',
      '/ice-maker-repair',
      '/san-francisco-appliance-repair',
      '/mill-valley-appliance-repair',
      '/san-rafael-appliance-repair',
      '/contact'
    ]
  };
}

function getLocalRepairContent() {
  return {
    title: 'Local Appliance Repair | San Francisco | FixitBay',
    description: 'Find local appliance repair near you in San Francisco. Licensed technicians, 180-day warranty, same/next-day service.',
    h1: 'Local Appliance Repair in San Francisco & Bay Area',
    content: `
      <p>Looking for local appliance repair near you? FixitBay serves San Francisco, the Peninsula, and North Bay with professional, licensed technicians who live and work in the communities they serve. We understand the urgency of appliance breakdowns and offer same-day and next-day service throughout the Bay Area.</p>
      
      <h2>Why Choose Local Appliance Repair?</h2>
      <p>When you choose a local appliance repair company like FixitBay, you're supporting your community while getting faster, more personalized service. Our technicians are familiar with the unique challenges of Bay Area homes—from high-rise apartments in San Francisco to hillside homes in Mill Valley. We stock our service vehicles with parts commonly needed in your area for faster repairs.</p>
      
      <h2>Services We Provide</h2>
      <p>We fix refrigerators, washers, dryers, dishwashers, ovens, ranges, ice makers, freezers, and more. Our $60 diagnostic fee is fully applied to your repair cost when you proceed. Every repair comes with a comprehensive 180-day warranty on parts and labor.</p>
      
      <h2>Same-Day Service Available</h2>
      <p>We know that a broken refrigerator or non-working washer can disrupt your entire household. That's why we prioritize same-day service when available. Call us in the morning, and we'll often have your appliance repaired by afternoon.</p>
      
      <h2>All Major Brands</h2>
      <p>Our technicians are trained and certified to service all major appliance brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Miele, and more. Whether you have a basic model or a luxury European appliance, we have the expertise to repair it.</p>
      
      <h2>Serving Your Neighborhood</h2>
      <p>We serve 22 cities across San Francisco, the Peninsula, and North Bay. From downtown San Francisco to coastal Pacifica, from Mill Valley to Novato, FixitBay is your local appliance repair expert.</p>
      
      <p>Call <a href="tel:+17605435733">(760) 543-5733</a> or <a href="/book">book online</a> for fast, professional local appliance repair.</p>
    `,
    internalLinks: ['/', '/service-areas', '/refrigerator-repair', '/washer-repair', '/dryer-repair', '/dishwasher-repair', '/contact', '/about']
  };
}

function getDefaultContent(route) {
  return {
    title: 'Appliance Repair | FixitBay',
    description: 'Professional appliance repair in San Francisco.',
    h1: 'Appliance Repair Services',
    content: '<p>Professional appliance repair services across the Bay Area.</p>',
    internalLinks: ['/', '/service-areas', '/contact']
  };
}

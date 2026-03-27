/**
 * Central brand data for FixitBay LLC.
 * All brand logos, links, specialties in one place.
 */

export const BRAND_LOGOS = {
  'Amana':          '/images/brands/amana.svg',
  'Bosch':          '/images/brands/bosch.svg',
  'Dacor':          '/images/brands/dacor.svg',
  'DCS':            '/images/brands/dcs.png',
  'Electrolux':     '/images/brands/electrolux.svg',
  'Fisher & Paykel':'/images/brands/fisher-paykel.svg',
  'Frigidaire':     '/images/brands/frigidaire.svg',
  'GE':             '/images/brands/ge.svg',
  'Haier':          '/images/brands/haier.svg',
  'Jenn-Air':       '/images/brands/jenn-air.svg',
  'Kenmore':        '/images/brands/kenmore.svg',
  'KitchenAid':     '/images/brands/kitchenaid.svg',
  'LG':             '/images/brands/lg.svg',
  'Marvel':         '/images/brands/marvel.png',
  'Maytag':         '/images/brands/maytag.svg',
  'Miele':          '/images/brands/miele.svg',
  'Samsung':        '/images/brands/samsung.svg',
  'Speed Queen':    '/images/brands/speed-queen.svg',
  'Sub-Zero':       '/images/brands/sub-zero.svg',
  'Thermador':      '/images/brands/thermador.svg',
  'True':           '/images/brands/true.png',
  'U-Line':         '/images/brands/u-line.jpg',
  'Viking':         '/images/brands/viking.svg',
  'Whirlpool':      '/images/brands/whirlpool.svg',
  'Wolf':           '/images/brands/wolf.svg',
};

export const BRAND_LINKS = {
  Whirlpool:        '/whirlpool-appliance-repair',
  LG:               '/lg-appliance-repair',
  Samsung:          '/samsung-appliance-repair',
  GE:               '/ge-appliance-repair',
  Bosch:            '/bosch-appliance-repair',
  KitchenAid:       '/kitchenaid-appliance-repair',
  Maytag:           '/maytag-appliance-repair',
  Frigidaire:       '/frigidaire-appliance-repair',
  Kenmore:          '/kenmore-appliance-repair',
  Thermador:        '/thermador-appliance-repair',
  Viking:           '/viking-appliance-repair',
  Miele:            '/miele-appliance-repair',
  'Sub-Zero':       '/sub-zero-appliance-repair',
  Wolf:             '/wolf-appliance-repair',
  Amana:            '/brands',
  Dacor:            '/brands',
  DCS:              '/brands',
  Electrolux:       '/brands',
  'Fisher & Paykel':'/brands',
  Haier:            '/brands',
  'Jenn-Air':       '/brands',
  Marvel:           '/brands',
  'Speed Queen':    '/brands',
  True:             '/brands',
  'U-Line':         '/brands',
};

export const BRAND_CATEGORIES = {
  premium: {
    title: 'Premium & Luxury Brands',
    description: 'High-end appliances requiring specialized expertise',
    brands: [
      { name: 'Sub-Zero', specialty: 'Built-in Refrigeration' },
      { name: 'Wolf', specialty: 'Professional Ranges' },
      { name: 'Thermador', specialty: 'Luxury Cooking' },
      { name: 'Miele', specialty: 'German Engineering' },
      { name: 'Viking', specialty: 'Professional Style' },
      { name: 'Jenn-Air', specialty: 'Premium Kitchen' },
      { name: 'Dacor', specialty: 'Luxury Appliances' },
      { name: 'Fisher & Paykel', specialty: 'Innovation' },
    ]
  },
  standard: {
    title: 'Popular Home Brands',
    description: 'Reliable everyday appliances for every home',
    brands: [
      { name: 'Whirlpool', specialty: 'American Classic' },
      { name: 'GE', specialty: 'Profile & Cafe' },
      { name: 'Samsung', specialty: 'Smart Appliances' },
      { name: 'LG', specialty: 'Innovation' },
      { name: 'Maytag', specialty: 'Dependability' },
      { name: 'KitchenAid', specialty: 'Premium Quality' },
      { name: 'Bosch', specialty: 'German Quality' },
      { name: 'Frigidaire', specialty: 'Value & Quality' },
      { name: 'Kenmore', specialty: 'Trusted Brand' },
      { name: 'Electrolux', specialty: 'European Design' },
      { name: 'Amana', specialty: 'Value' },
      { name: 'Haier', specialty: 'Compact' },
    ]
  },
  commercial: {
    title: 'Commercial & Specialty',
    description: 'Heavy-duty and specialized equipment',
    brands: [
      { name: 'Speed Queen', specialty: 'Commercial Laundry' },
      { name: 'True', specialty: 'Commercial Refrigeration' },
      { name: 'U-Line', specialty: 'Under-counter' },
      { name: 'Marvel', specialty: 'Specialty Cooling' },
      { name: 'DCS', specialty: 'Outdoor Cooking' },
    ]
  }
};

/** Flat list of all brand names */
export const ALL_BRANDS = Object.values(BRAND_CATEGORIES).flatMap(cat => cat.brands.map(b => b.name));

/** Top brands shown in navbar */
export const NAVBAR_BRANDS = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch',
  'Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','Jenn-Air','Electrolux','Fisher & Paykel'
];

/** Brands shown in service page template (most common residential) */
export const COMMON_BRANDS = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch',
  'Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','Jenn-Air','Electrolux','Fisher & Paykel'
];

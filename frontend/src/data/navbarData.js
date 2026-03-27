// Navbar dropdown data - lazy loaded for performance

export const servicesItems = [
  { name: 'Refrigerator Repair', path: '/refrigerator-repair' },
  { name: 'Freezer Repair', path: '/freezer-repair' },
  { name: 'Ice Maker Repair', path: '/ice-maker-repair' },
  { name: 'Washer Repair', path: '/washer-repair' },
  { name: 'Dryer Repair', path: '/dryer-repair' },
  { name: 'Dishwasher Repair', path: '/dishwasher-repair' },
  { name: 'Oven Repair', path: '/oven-repair' },
  { name: 'Range Repair', path: '/range-repair' },
  { name: 'Stove Repair', path: '/stove-repair' },
  { name: 'Cooktop Repair', path: '/cooktop-repair' },
  { name: 'Wine Cooler Repair', path: '/wine-cooler-repair' },
  { name: 'Garbage Disposal Repair', path: '/garbage-disposal-repair' },
  { name: 'Commercial Appliance Repair', path: '/commercial-appliance-repair' },
  { name: 'Residential Appliance Repair', path: '/residential-appliance-repair' },
];

export const maintenanceItems = [
  { name: 'Refrigerator Maintenance', path: '/maintenance/refrigerator' },
  { name: 'Washer Maintenance', path: '/maintenance/washer' },
  { name: 'Dryer Maintenance', path: '/maintenance/dryer' },
  { name: 'Dishwasher Maintenance', path: '/maintenance/dishwasher' },
  { name: 'Oven Maintenance', path: '/maintenance/oven-range' },
  { name: 'Cooktop Maintenance', path: '/maintenance/cooktop' },
  { name: 'Wine Cooler Maintenance', path: '/maintenance/wine-cooler' },
  { name: 'All Maintenance', path: '/maintenance', separator: true },
];

export const citiesItems = [
  'san-francisco',
  'daly-city',
  'south-san-francisco',
  'san-bruno',
  'pacifica',
  'millbrae',
  'colma',
  'brisbane',
  'montara',
  'mill-valley',
  'san-rafael',
  'sausalito',
  'belvedere',
  'tiburon',
  'corte-madera',
  'san-quentin',
  'larkspur',
  'greenbrae',
  'ross',
  'fairfax',
  'san-anselmo',
  'novato'
];

// Grouped areas for structured dropdown/accordion
export const areasGrouped = [
  {
    region: 'San Francisco',
    cities: [
      { name: 'SF \u2014 All Areas', path: '/san-francisco-appliance-repair' },
      { name: 'Sunset District', path: '/san-francisco/sunset-district-appliance-repair' },
      { name: 'Mission District', path: '/san-francisco/mission-district-appliance-repair' },
      { name: 'Pacific Heights', path: '/san-francisco/pacific-heights-appliance-repair' },
      { name: 'Richmond District', path: '/san-francisco/richmond-district-appliance-repair' },
      { name: 'SOMA', path: '/san-francisco/soma-appliance-repair' },
      { name: 'Castro', path: '/san-francisco/castro-appliance-repair' },
      { name: 'Noe Valley', path: '/san-francisco/noe-valley-appliance-repair' },
      { name: 'Marina', path: '/san-francisco/marina-appliance-repair' },
      { name: 'Nob Hill', path: '/san-francisco/nob-hill-appliance-repair' },
      { name: 'North Beach', path: '/san-francisco/north-beach-appliance-repair' },
      { name: 'Bernal Heights', path: '/san-francisco/bernal-heights-appliance-repair' },
      { name: 'Potrero Hill', path: '/san-francisco/potrero-hill-appliance-repair' },
    ]
  },
  {
    region: 'Peninsula',
    cities: [
      { name: 'Daly City', path: '/daly-city-appliance-repair' },
      { name: 'South San Francisco', path: '/south-san-francisco-appliance-repair' },
      { name: 'San Bruno', path: '/san-bruno-appliance-repair' },
      { name: 'Millbrae', path: '/millbrae-appliance-repair' },
      { name: 'Pacifica', path: '/pacifica-appliance-repair' },
      { name: 'Colma', path: '/colma-appliance-repair' },
      { name: 'Brisbane', path: '/brisbane-appliance-repair' },
      { name: 'Montara', path: '/montara-appliance-repair' },
    ]
  },
  {
    region: 'Marin County',
    cities: [
      { name: 'San Rafael', path: '/san-rafael-appliance-repair' },
      { name: 'Novato', path: '/novato-appliance-repair' },
      { name: 'Mill Valley', path: '/mill-valley-appliance-repair' },
      { name: 'Sausalito', path: '/sausalito-appliance-repair' },
      { name: 'Tiburon', path: '/tiburon-appliance-repair' },
      { name: 'Corte Madera', path: '/corte-madera-appliance-repair' },
      { name: 'Larkspur', path: '/larkspur-appliance-repair' },
      { name: 'Fairfax', path: '/fairfax-appliance-repair' },
      { name: 'San Anselmo', path: '/san-anselmo-appliance-repair' },
      { name: 'Ross', path: '/ross-appliance-repair' },
      { name: 'Greenbrae', path: '/greenbrae-appliance-repair' },
    ]
  }
];

export const brandsItems = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch','Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','Jenn-Air','Electrolux','Fisher & Paykel'
];

export const topBrandLinks = {
  Whirlpool: '/whirlpool-appliance-repair',
  LG: '/lg-appliance-repair',
  Samsung: '/samsung-appliance-repair',
  GE: '/ge-appliance-repair',
  Bosch: '/bosch-appliance-repair',
  KitchenAid: '/kitchenaid-appliance-repair',
  Maytag: '/maytag-appliance-repair',
  Frigidaire: '/frigidaire-appliance-repair',
  Kenmore: '/kenmore-appliance-repair',
  Thermador: '/thermador-appliance-repair',
  Viking: '/viking-appliance-repair',
  Miele: '/miele-appliance-repair',
  'Sub-Zero': '/sub-zero-appliance-repair',
  Wolf: '/wolf-appliance-repair',
  'Jenn-Air': '/brands',
  Amana: '/brands',
  Electrolux: '/brands',
  'Fisher & Paykel': '/brands',
};

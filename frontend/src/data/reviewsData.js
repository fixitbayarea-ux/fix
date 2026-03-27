/**
 * Static reviews data — verified reviews from Google, Thumbtack & Yelp.
 * Used as default data source for /reviews page.
 * source field must match FILTER_TABS: 'Google' | 'Thumbtack' | 'Yelp'
 */
const reviewsData = [
  // ═══ Google Reviews (5) ═══
  {
    id: 'g1',
    source: 'Google',
    author: 'Maria S.',
    rating: 5,
    date: '2025-11-15',
    text: 'Andrei fixed our LG refrigerator that stopped cooling. He diagnosed the issue in 15 minutes \u2014 a faulty compressor relay. Had the part on his truck and finished the repair in under an hour. Very knowledgeable and explained everything clearly. Highly recommend!',
    verified: true,
  },
  {
    id: 'g2',
    source: 'Google',
    author: 'James L.',
    rating: 5,
    date: '2025-10-22',
    text: 'Our old Victorian in the Sunset has incredibly tight spaces. Their technician maneuvered through narrow stairs with the replacement part for our Whirlpool washer. Professional, on time, and reasonably priced. The 180-day warranty is a great bonus.',
    verified: true,
  },
  {
    id: 'g3',
    source: 'Google',
    author: 'Sarah K.',
    rating: 5,
    date: '2025-09-08',
    text: 'Had a Sub-Zero emergency on Thanksgiving morning. Andrei came within a couple of hours and saved our dinner party. The compressor was failing and he had the exact part needed. Incredibly professional and fair pricing. Will definitely use again.',
    verified: true,
  },
  {
    id: 'g4',
    source: 'Google',
    author: 'David R.',
    rating: 5,
    date: '2025-12-03',
    text: 'Dishwasher was leaking for weeks. Technician diagnosed a worn pump seal in minutes, had the part on the truck. Repaired quickly and the price was exactly what was quoted. No surprises. Very fair pricing.',
    verified: true,
  },
  {
    id: 'g5',
    source: 'Google',
    author: 'Emily W.',
    rating: 5,
    date: '2026-01-12',
    text: 'Called about our Samsung dryer not heating. They scheduled us for the next morning and the tech arrived right on time. Turned out to be a thermal fuse \u2014 fixed in about 30 minutes. Transparent pricing, no upselling. Exactly the kind of service you want.',
    verified: true,
  },
  // ═══ Thumbtack Reviews (3) ═══
  {
    id: 't1',
    source: 'Thumbtack',
    author: 'Linda K.',
    rating: 5,
    date: '2025-08-19',
    text: 'Building management was impressed with how they coordinated access for our high-rise condo repair in SOMA. The technician handled the freight elevator scheduling and HOA requirements without any hassle. Fast, clean, professional work on our Bosch dishwasher.',
    verified: true,
  },
  {
    id: 't2',
    source: 'Thumbtack',
    author: 'Michael T.',
    rating: 5,
    date: '2025-10-05',
    text: 'Hired them through Thumbtack to fix our KitchenAid oven that wasn\u2019t maintaining temperature. Andrei recalibrated the thermostat and replaced a faulty igniter. He was thorough, showed me exactly what was wrong, and cleaned up after himself. Great experience.',
    verified: true,
  },
  {
    id: 't3',
    source: 'Thumbtack',
    author: 'Rachel P.',
    rating: 5,
    date: '2026-01-28',
    text: 'Our Maytag washer was vibrating so badly it was walking across the laundry room. The tech leveled it, replaced worn shock absorbers, and ran a test cycle. Perfect now. Appreciated the honest diagnosis \u2014 no unnecessary parts replaced.',
    verified: true,
  },
  // ═══ Yelp Reviews (1) ═══
  {
    id: 'y1',
    source: 'Yelp',
    author: 'Chris N.',
    rating: 5,
    date: '2025-07-14',
    text: 'Five stars all around. Our GE refrigerator ice maker stopped working and FixitBay had it repaired within 24 hours of our call. The technician was punctual, explained the issue clearly, and the price was very reasonable. Will use them for any future appliance issues.',
    verified: true,
  },
];

export default reviewsData;

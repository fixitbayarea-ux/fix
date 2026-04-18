/**
 * Shared static blog posts data.
 * Single source of truth for blog listing + fallback rendering.
 */

export const STATIC_POSTS = [
  { slug: 'sub-zero-refrigerator-not-cooling', title: "Sub-Zero Refrigerator Not Cooling: Causes & Repair Costs in SF", excerpt: 'Sub-Zero not cooling? Common causes from sealed system failure to fan motors. SF Bay Area repair costs and when to call a certified technician.', publish_date: '2026-04-13', categories: ['Refrigerator', 'Luxury Brands'], readTime: '8 min' },
  { slug: 'lg-washer-ue-error', title: "LG Washer UE Error: 7 Fixes That Actually Work", excerpt: 'LG washer showing UE or UB error code? 7 fixes ranked from quick DIY to professional repair, with SF Bay Area pricing.', publish_date: '2026-04-13', categories: ['Washer', 'Error Codes'], readTime: '7 min' },
  { slug: 'bosch-dishwasher-error-codes', title: "Bosch Dishwasher Error Codes: E24, E25, E15 & What They Mean", excerpt: 'Complete guide to Bosch dishwasher error codes. What E24, E25, E15, E09, and E23 mean, DIY fixes, and when you need a pro.', publish_date: '2026-04-13', categories: ['Dishwasher', 'Error Codes'], readTime: '7 min' },
  { slug: 'refrigerator-not-cooling', title: "Refrigerator Not Cooling? 8 Causes & What to Do", excerpt: 'A warm refrigerator puts your food at risk. 8 common causes ranked from DIY fix to pro repair, with SF Bay Area pricing and a real technician case study.', publish_date: '2026-03-23', categories: ['Refrigerator'], readTime: '8 min' },
  { slug: 'dishwasher-maintenance', title: 'How to Maintain Your Dishwasher for Longer Life', excerpt: 'Simple maintenance tips to prevent clogs, leaks, and odors. Learn how to clean filters, check spray arms, and maintain door seals.', publish_date: '2026-01-18', categories: ['Dishwasher'], readTime: '7 min' },
  { slug: 'when-to-repair-vs-replace', title: 'Repair vs Replace: When to Fix Your Appliance', excerpt: "Not sure if it's worth repairing your old appliance? Use our expert guide based on the 50% rule, age considerations, and repair costs.", publish_date: '2026-01-15', categories: ['Expert Advice'], readTime: '6 min' },
  { slug: 'dryer-taking-too-long', title: 'Why Is My Dryer Taking So Long to Dry?', excerpt: 'Long drying times waste energy and money. Discover the 7 most common causes including clogged vents, heating element issues, and moisture sensor problems.', publish_date: '2026-01-12', categories: ['Dryer'], readTime: '6 min' },
  { slug: 'washer-error-codes', title: 'Common Washer Error Codes & What They Mean', excerpt: 'Decode OE, UE, LE, and other error codes from Samsung, LG, Whirlpool, and GE washers. Learn what each code means and simple troubleshooting steps.', publish_date: '2026-02-10', categories: ['Washer', 'Error Codes'], readTime: '8 min' },
  { slug: 'oven-temperature-calibration', title: 'How to Calibrate Your Oven Temperature', excerpt: 'Is your oven cooking unevenly or burning food? Learn how to test oven temperature accuracy with a thermometer and calibrate for perfect results.', publish_date: '2026-01-08', categories: ['Oven'], readTime: '5 min' },
  { slug: 'ice-maker-troubleshooting', title: 'Ice Maker Not Working? Top 10 Fixes', excerpt: 'No ice, slow ice production, or small/hollow cubes? Troubleshoot water supply, ice maker module, and water filter issues.', publish_date: '2026-01-05', categories: ['Refrigerator'], readTime: '7 min' },
  { slug: 'appliance-lifespan', title: 'How Long Should Your Appliances Last?', excerpt: 'Expected lifespans for refrigerators, washers, dryers, dishwashers, and ovens. Learn when to start planning for replacement.', publish_date: '2026-01-03', categories: ['Expert Advice'], readTime: '6 min' },
  { slug: 'energy-efficient-appliances', title: 'How to Make Your Appliances More Energy Efficient', excerpt: 'Save money on electricity with these proven tips. Small changes can reduce energy bills by 10-25% annually.', publish_date: '2026-01-01', categories: ['Expert Advice', 'Maintenance Tips'], readTime: '7 min' },
  { slug: 'gas-smell-from-stove', title: 'Smell Gas From Your Stove? Do This Immediately', excerpt: "Gas leaks are dangerous. Learn the immediate safety steps to take if you smell gas, when to call emergency services, and how to prevent gas leaks.", publish_date: '2026-03-01', categories: ['Safety'], readTime: '4 min' },
  { slug: 'refrigerator-water-filter', title: 'When to Change Your Refrigerator Water Filter', excerpt: 'Old filters reduce water flow, ice production, and water quality. Learn how often to change filters by brand and signs for replacement.', publish_date: '2026-01-01', categories: ['Refrigerator', 'Maintenance Tips'], readTime: '5 min' },
  { slug: 'dishwasher-not-draining', title: 'Dishwasher Not Draining? 7 Quick Fixes', excerpt: 'Standing water after a cycle? Check these 7 common causes: clogged filter, blocked drain hose, garbage disposal connection, and air gap.', publish_date: '2026-02-20', categories: ['Dishwasher'], readTime: '6 min' },
  { slug: 'dryer-not-heating', title: 'Dryer Not Heating? 7 Causes for Gas & Electric Dryers', excerpt: 'A dryer that tumbles but won\'t heat is one of the most common problems. 7 causes ranked by complexity with SF Bay Area pricing and a real technician case study.', publish_date: '2026-03-23', categories: ['Dryer'], readTime: '8 min' },
  { slug: 'appliance-repair-cost-san-francisco', title: 'Appliance Repair Cost SF 2026 — Price Guide', excerpt: 'How much does appliance repair cost in San Francisco? 3 pricing tables, luxury brand rates, a repair-vs-replace guide, and real numbers from a licensed technician.', publish_date: '2026-03-23', categories: ['Expert Advice', 'San Francisco'], readTime: '10 min' },
  { slug: 'same-day-appliance-repair-bay-area', title: 'Same-Day Appliance Repair in the Bay Area — How It Works', excerpt: 'Need your appliance fixed today? Learn how FixitBay LLC delivers fast repair across SF, Peninsula & Marin. $80 diagnostic, 180-day warranty.', publish_date: '2026-02-15', categories: ['Expert Advice', 'San Francisco'], readTime: '5 min' },
  { slug: 'appliance-repair-marin-county', title: 'Appliance Repair in Marin County — Complete Guide', excerpt: 'Everything you need to know about appliance repair in Marin County. Coverage areas, pricing, common issues in Marin homes, and how to book.', publish_date: '2026-02-01', categories: ['Expert Advice', 'Marin County'], readTime: '6 min' },
];

/**
 * Find a static post by slug.
 * @param {string} slug
 * @returns {Object|null}
 */
export function getStaticPostBySlug(slug) {
  return STATIC_POSTS.find(p => p.slug === slug) || null;
}

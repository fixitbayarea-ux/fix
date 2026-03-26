/* Blog post images — slug → { src, alt }
   ALL images replaced with new category-relevant photos */

const BLOG_IMAGES = {
  /* ─── CMS posts ─── */
  'refrigerator-repair-cost-san-francisco-2026': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/3152105bfd6c731034d36f547866683d4776f38a4e40b13b65646e9ce8055d41.png',
    alt: 'Technician writing repair estimate on clipboard next to stainless steel refrigerator'
  },
  'samsung-washer-error-codes-guide': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/280923fd978bf819c73c41927bead1f9fcd8cc3a60ae599dbe7d3cf6b77d4c85.png',
    alt: 'Technician using digital multimeter diagnostic tool on washing machine'
  },
  'dishwasher-maintenance-tips': {
    src: 'https://images.unsplash.com/photo-1736390755053-f57997f7931b?w=800&h=450&fit=crop&auto=format',
    alt: 'Open dishwasher with clean dishes neatly arranged in bright kitchen'
  },
  'lg-washer-dryer-error-codes': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/280923fd978bf819c73c41927bead1f9fcd8cc3a60ae599dbe7d3cf6b77d4c85.png',
    alt: 'Appliance technician diagnosing washer dryer with digital multimeter'
  },
  'washer-dryer-repair-cost-bay-area': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/3152105bfd6c731034d36f547866683d4776f38a4e40b13b65646e9ce8055d41.png',
    alt: 'Professional technician writing repair cost estimate next to appliance'
  },

  /* ─── Static posts ─── */
  'refrigerator-not-cooling': {
    src: 'https://images.unsplash.com/photo-1737363625921-dd9e02b4c067?w=800&h=450&fit=crop&auto=format',
    alt: 'Inside of open modern stainless steel refrigerator with organized fresh food'
  },
  'dishwasher-maintenance': {
    src: 'https://images.unsplash.com/photo-1736390755053-f57997f7931b?w=800&h=450&fit=crop&auto=format',
    alt: 'Open dishwasher with clean dishes and glasses in bright kitchen'
  },
  'when-to-repair-vs-replace': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/cfd07d696200a0210033bf464fb8b9caa2996cf876c5e30d1c9ab772cd82706c.png',
    alt: 'Side-by-side comparison of old outdated kitchen versus new modern renovated kitchen'
  },
  'dryer-taking-too-long': {
    src: 'https://images.unsplash.com/photo-1758279745240-b75977c88fa8?w=800&h=450&fit=crop&auto=format',
    alt: 'White front-load washer dryer in bright modern laundry room'
  },
  'washer-error-codes': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/280923fd978bf819c73c41927bead1f9fcd8cc3a60ae599dbe7d3cf6b77d4c85.png',
    alt: 'Technician hands using digital diagnostic tool on washer control panel'
  },
  'oven-temperature-calibration': {
    src: 'https://images.unsplash.com/photo-1662454380951-0d4e9beb97db?w=800&h=450&fit=crop&auto=format',
    alt: 'Modern gas range oven in clean bright kitchen interior'
  },
  'ice-maker-troubleshooting': {
    src: 'https://images.unsplash.com/photo-1737363625082-8bbbb821286e?w=800&h=450&fit=crop&auto=format',
    alt: 'Open refrigerator filled with organized fresh food and beverages'
  },
  'appliance-lifespan': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/cfd07d696200a0210033bf464fb8b9caa2996cf876c5e30d1c9ab772cd82706c.png',
    alt: 'Before and after kitchen renovation showing old versus new modern appliances'
  },
  'energy-efficient-appliances': {
    src: 'https://images.unsplash.com/photo-1582913130063-8318329a94a3?w=800&h=450&fit=crop&auto=format',
    alt: 'Clean well-maintained modern white kitchen with energy-efficient appliances'
  },
  'gas-smell-from-stove': {
    src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/cea5a77592515835e6fb111bd1ec6fda0017abfc7bd50dcf857a02fc394e2142.png',
    alt: 'Professional technician in safety gear inspecting gas stove connection'
  },
  'refrigerator-water-filter': {
    src: 'https://images.unsplash.com/photo-1722859178634-ccc8ea5680d2?w=800&h=450&fit=crop&auto=format',
    alt: 'Stainless steel refrigerator in modern bright kitchen with white cabinets'
  },
  'dishwasher-not-draining': {
    src: 'https://images.unsplash.com/photo-1736390755053-f57997f7931b?w=800&h=450&fit=crop&auto=format',
    alt: 'Open dishwasher with dishes in bright kitchen — drainage troubleshooting'
  },
};

/* Category fallback images */
const CATEGORY_IMAGES = {
  'Refrigerator':      { src: 'https://images.unsplash.com/photo-1737363625921-dd9e02b4c067?w=800&h=450&fit=crop&auto=format', alt: 'Inside of open modern stainless steel refrigerator with fresh food' },
  'Washer':            { src: 'https://images.unsplash.com/photo-1758279745240-b75977c88fa8?w=800&h=450&fit=crop&auto=format', alt: 'White front-load washing machine in bright modern laundry room' },
  'Dryer':             { src: 'https://images.unsplash.com/photo-1758279745240-b75977c88fa8?w=800&h=450&fit=crop&auto=format', alt: 'White front-load dryer in bright modern laundry room' },
  'Dishwasher':        { src: 'https://images.unsplash.com/photo-1736390755053-f57997f7931b?w=800&h=450&fit=crop&auto=format', alt: 'Open dishwasher with clean dishes neatly arranged' },
  'Oven':              { src: 'https://images.unsplash.com/photo-1662454380951-0d4e9beb97db?w=800&h=450&fit=crop&auto=format', alt: 'Modern gas range oven in clean kitchen' },
  'Expert Advice':     { src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/cfd07d696200a0210033bf464fb8b9caa2996cf876c5e30d1c9ab772cd82706c.png', alt: 'Side-by-side old versus new modern kitchen appliances' },
  'Safety':            { src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/cea5a77592515835e6fb111bd1ec6fda0017abfc7bd50dcf857a02fc394e2142.png', alt: 'Professional technician in safety gear working on gas appliance' },
  'Repair Costs':      { src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/3152105bfd6c731034d36f547866683d4776f38a4e40b13b65646e9ce8055d41.png', alt: 'Technician writing repair estimate on clipboard next to appliance' },
  'Error Codes':       { src: 'https://static.prod-images.emergentagent.com/jobs/16bc870e-8b93-4e41-bc85-7bc8fe546574/images/280923fd978bf819c73c41927bead1f9fcd8cc3a60ae599dbe7d3cf6b77d4c85.png', alt: 'Technician using digital diagnostic tool on appliance' },
  'Maintenance Tips':  { src: 'https://images.unsplash.com/photo-1582913130063-8318329a94a3?w=800&h=450&fit=crop&auto=format', alt: 'Clean modern white kitchen with well-maintained appliances' },
};

const DEFAULT_IMAGE = {
  src: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?w=800&h=450&fit=crop&auto=format',
  alt: 'Modern kitchen with stainless steel appliances — FixitBay LLC blog'
};

export function getBlogImage(slug, categories) {
  if (BLOG_IMAGES[slug]) return BLOG_IMAGES[slug];
  if (categories && categories.length > 0) {
    for (const cat of categories) {
      if (CATEGORY_IMAGES[cat]) return CATEGORY_IMAGES[cat];
    }
  }
  return DEFAULT_IMAGE;
}

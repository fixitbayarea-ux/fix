#!/usr/bin/env node

/**
 * Post-build cleanup script:
 * Remove HTML files for cities we DON'T serve (to prevent indexing)
 * Run after react-snap to clean up prerendered pages
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');

// Cities we NO LONGER serve (NOT in our 21-city list)
const REMOVED_CITY_SLUGS = [
  // From user's removal list (cities we don't serve)
  'alameda',
  'berkeley',
  'burlingame',
  'castro-valley',
  'concord',
  'cupertino',
  'foster-city',
  'fremont',
  'hayward',
  'livermore',
  'milpitas',
  'mountain-view',
  'near-you',
  'oakland',
  'palo-alto',
  'pleasanton',
  'redwood-city',
  'richmond',
  'san-jose',
  'san-leandro',
  'san-mateo',
  'santa-clara',
  'sunnyvale',
  'union-city',
  'vallejo',
  'walnut-creek'
];

console.log('🧹 Cleaning up removed city pages from build...');

let removedCount = 0;

REMOVED_CITY_SLUGS.forEach(slug => {
  const dirPath = path.join(BUILD_DIR, `appliance-repair-${slug}`);
  
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`  ✓ Removed: appliance-repair-${slug}/`);
      removedCount++;
    } catch (error) {
      console.warn(`  ⚠ Failed to remove appliance-repair-${slug}/:`, error.message);
    }
  }
});

if (removedCount === 0) {
  console.log('  ℹ No removed city pages found in build (already clean)');
} else {
  console.log(`\n✅ Cleanup complete! Removed ${removedCount} city directories.`);
}

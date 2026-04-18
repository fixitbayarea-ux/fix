/**
 * Validates blog post slugs at build/dev time.
 * Ensures all slugs are URL-safe: lowercase, hyphen-separated, no spaces/special chars.
 *
 * Run: node scripts/validate-slugs.cjs
 * Also imported by generate-seo-snapshots.cjs for build-time enforcement.
 */

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validateSlug(slug, source) {
  if (!SLUG_PATTERN.test(slug)) {
    return { valid: false, slug, source, reason: `Slug "${slug}" contains invalid characters. Must match: ${SLUG_PATTERN}` };
  }
  return { valid: true, slug, source };
}

function validateSlugs(slugs, source) {
  const results = slugs.map(s => validateSlug(s, source));
  const invalid = results.filter(r => !r.valid);
  return { all: results, invalid, hasErrors: invalid.length > 0 };
}

// If run directly, validate BlogListPage STATIC_POSTS
if (require.main === module) {
  const fs = require('fs');
  const path = require('path');

  // Read BlogListPage.js and extract slugs
  const blogListPath = path.join(__dirname, '../src/components/pages/BlogListPage.js');
  const content = fs.readFileSync(blogListPath, 'utf-8');
  const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

  console.log(`\nValidating ${slugMatches.length} blog slugs from BlogListPage.js...\n`);

  const { invalid, hasErrors } = validateSlugs(slugMatches, 'BlogListPage.js');

  if (hasErrors) {
    console.error('❌ INVALID SLUGS FOUND:\n');
    invalid.forEach(r => console.error(`  ${r.reason}`));
    console.error('\nFix these slugs before deploying.\n');
    process.exit(1);
  } else {
    console.log('✅ All blog slugs are valid URL-safe strings.\n');
    process.exit(0);
  }
}

module.exports = { validateSlug, validateSlugs, SLUG_PATTERN };

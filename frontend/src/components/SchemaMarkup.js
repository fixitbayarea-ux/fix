import { useEffect } from 'react';

/**
 * SchemaMarkup — SSG prerender dedup only.
 *
 * CANONICAL LocalBusiness lives in public/index.html (#global-localbusiness-schema).
 * This component does NOT inject LocalBusiness. It only cleans up SSG-prerender
 * artifacts: no-id duplicates of BreadcrumbList, Service, and VideoObject that
 * appear when React hydrates over prerendered HTML.
 *
 * Business facts (hours, sameAs, address, areaServed, rating, reviews) are
 * updated ONLY in public/index.html → #global-localbusiness-schema.
 */
const SchemaMarkup = () => {
  useEffect(() => {
    // Clean up SSG prerender artifacts: no-id duplicates of types that React
    // components re-inject with proper IDs via useSchema/useSchemas hooks.
    const seenTypes = new Set();
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
      try {
        const d = JSON.parse(el.textContent);

        // BreadcrumbList/Service: keep first no-id instance, remove subsequent no-id dupes
        if (!el.id && (d['@type'] === 'BreadcrumbList' || d['@type'] === 'Service')) {
          if (seenTypes.has(d['@type'])) {
            el.remove();
          } else {
            seenTypes.add(d['@type']);
          }
        }

        // VideoObject: remove ALL no-id instances (React injects proper ones with IDs)
        if (!el.id && d['@type'] === 'VideoObject') {
          el.remove();
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'development') console.error('SchemaMarkup dedup error:', e);
      }
    });
  }, []);

  return null;
};

export default SchemaMarkup;

import { useMemo } from 'react';
import { useSchemas } from './useSchema';

/**
 * Injects BreadcrumbList + (optional) FAQPage JSON-LD for a city page.
 * Shared between CityRepairPage and CityLandingPage templates.
 *
 * @param {Object} opts
 * @param {string} opts.city        Display name, e.g. "Mill Valley"
 * @param {string} [opts.slug]      URL slug; defaults to lowercased/hyphenated city
 * @param {Array}  [opts.faqData]   Array of { question, answer }
 * @param {string} [opts.keyPrefix] Unique prefix to avoid schema id collisions when
 *                                  both templates could coexist. Defaults to 'city'.
 */
export function useCitySchemas({ city, slug, faqData, keyPrefix = 'city' }) {
  const citySlug = slug || (city || '').toLowerCase().replace(/\s+/g, '-');

  const schemas = useMemo(() => {
    const out = [
      {
        id: `${keyPrefix}-breadcrumb-${citySlug}`,
        data: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fixitbay.net/' },
            { '@type': 'ListItem', position: 2, name: 'Cities We Serve', item: 'https://fixitbay.net/service-areas' },
            { '@type': 'ListItem', position: 3, name: `${city} Appliance Repair`, item: `https://fixitbay.net/${citySlug}-appliance-repair` },
          ],
        },
      },
    ];

    const validFaqs = (faqData || []).filter(f => f.question?.trim() && f.answer?.trim());
    if (validFaqs.length > 0) {
      out.push({
        id: `${keyPrefix}-faq-${citySlug}`,
        data: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: validFaqs.map(f => ({
            '@type': 'Question',
            name: f.question.trim(),
            acceptedAnswer: { '@type': 'Answer', text: f.answer.trim() },
          })),
        },
      });
    }

    return out;
  }, [city, citySlug, faqData, keyPrefix]);

  useSchemas(schemas);
}

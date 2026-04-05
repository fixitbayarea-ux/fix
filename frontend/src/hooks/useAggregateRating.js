import { useEffect } from 'react';

/**
 * Hook to dynamically add aggregateRating to LocalBusiness schema
 * Use only on pages with real displayed reviews
 */
const useAggregateRating = (ratingValue, reviewCount) => {
  useEffect(() => {
    if (!ratingValue || !reviewCount) return;

    // Find the LocalBusiness script tag
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    const localBusinessScript = scripts.find(script => {
      try {
        const data = JSON.parse(script.textContent);
        return data['@type'] === 'LocalBusiness' && data['@id'] === 'https://fixitbay.net/#organization';
      } catch {
        // Non-critical: malformed JSON-LD script, skip
        return false;
      }
    });

    if (!localBusinessScript) return;

    try {
      const schema = JSON.parse(localBusinessScript.textContent);
      
      // Add aggregateRating
      schema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": String(ratingValue),
        "reviewCount": String(reviewCount),
        "bestRating": "5",
        "worstRating": "1"
      };

      // Update the script content
      localBusinessScript.textContent = JSON.stringify(schema);
      
      // aggregateRating added successfully
    } catch (error) {
      console.error('[SEO] Failed to add aggregateRating:', error);
    }

    // Cleanup on unmount
    return () => {
      if (localBusinessScript) {
        try {
          const schema = JSON.parse(localBusinessScript.textContent);
          delete schema.aggregateRating;
          localBusinessScript.textContent = JSON.stringify(schema);
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [ratingValue, reviewCount]);
};

export default useAggregateRating;

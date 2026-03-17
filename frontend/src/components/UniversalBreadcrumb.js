import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * UniversalBreadcrumb — auto-injects BreadcrumbList JSON-LD on every page.
 * Reads H1 from the DOM, builds "Home > [Page Title]" breadcrumb.
 * Skips homepage and /privacy-policy.
 */
const SKIP_PATHS = ['/', '/privacy-policy'];
const SCRIPT_ID = 'universal-breadcrumb-schema';

const UniversalBreadcrumb = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, '') || '/';

    // Remove old breadcrumb script first
    const old = document.getElementById(SCRIPT_ID);
    if (old) old.remove();

    // Skip excluded paths
    if (SKIP_PATHS.includes(path)) return;

    // Small delay to let the page render its H1
    const timer = setTimeout(() => {
      const h1 = document.querySelector('h1');
      const pageName = h1 ? h1.textContent.trim() : prettifyPath(path);

      // Don't add if a page-specific BreadcrumbList already exists
      const existing = document.querySelectorAll('script[type="application/ld+json"]');
      for (const s of existing) {
        if (s.id === SCRIPT_ID) continue;
        try {
          const d = JSON.parse(s.textContent);
          if (d['@type'] === 'BreadcrumbList') return; // page has its own
        } catch {}
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net/" },
          { "@type": "ListItem", "position": 2, "name": pageName, "item": `https://fixitbay.net${path}` }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCRIPT_ID;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }, 600);

    return () => {
      clearTimeout(timer);
      const el = document.getElementById(SCRIPT_ID);
      if (el) el.remove();
    };
  }, [location.pathname]);

  return null;
};

function prettifyPath(path) {
  const last = path.split('/').filter(Boolean).pop() || '';
  return last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

export default UniversalBreadcrumb;

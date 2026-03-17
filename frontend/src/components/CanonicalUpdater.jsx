import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CANONICAL_HOST = 'https://fixitbay.net'; // absolute, non-www, https

function normalizePath(pathname) {
  if (!pathname) return '/';
  // remove trailing slash (except root)
  const p = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return p || '/';
}

function stripTracking(search) {
  if (!search) return '';
  const params = new URLSearchParams(search);
  // preserve utm params in URL for analytics but exclude from canonical
  ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'].forEach(k => params.delete(k));
  const s = params.toString();
  return s ? `?${s}` : '';
}

export default function CanonicalUpdater() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      const cleanPath = normalizePath(pathname.toLowerCase());
      const canonicalUrl = `${CANONICAL_HOST}${cleanPath}`;

      // Update or insert canonical link
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);

      // Also update og:url for consistency
      let og = document.querySelector("meta[property='og:url']");
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', 'og:url');
        document.head.appendChild(og);
      }
      og.setAttribute('content', canonicalUrl);

      // Replace URL in address bar without tracking params
      const cleaned = `${cleanPath}`;
      const current = window.location.pathname + window.location.search;
      if (current !== cleaned) {
        window.history.replaceState({}, '', cleaned);
      }
    } catch (e) {
      // no-op
    }
  }, [pathname, search]);

  return null;
}

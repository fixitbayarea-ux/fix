import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CANONICAL_HOST = 'https://fixitbay.net'; // absolute, non-www, https

const TRACKING_PARAMS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'];

function normalizePath(pathname) {
  if (!pathname) return '/';
  // remove trailing slash (except root) — all routes are defined without trailing slash
  const p = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return p || '/';
}

/**
 * Strip only tracking/attribution params from query string.
 * Preserves all non-tracking params (e.g. ?go=1, ?page=2, ?appliance=refrigerator).
 */
function stripTracking(search) {
  if (!search) return '';
  const params = new URLSearchParams(search);
  TRACKING_PARAMS.forEach(k => params.delete(k));
  const s = params.toString();
  return s ? `?${s}` : '';
}

/**
 * Returns true if the query string contains at least one tracking param.
 */
function hasTrackingParams(search) {
  if (!search) return false;
  const params = new URLSearchParams(search);
  return TRACKING_PARAMS.some(k => params.has(k));
}

export default function CanonicalUpdater() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      // --- SEO: canonical link and og:url ---
      // Canonical URL uses normalized path (no trailing slash) + non-tracking query params.
      // All FixitBay routes are lowercase by convention, so lowercase is safe here.
      const cleanPath = normalizePath(pathname.toLowerCase());
      const cleanQuery = stripTracking(search);
      const canonicalUrl = `${CANONICAL_HOST}${cleanPath}${cleanQuery}`;

      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);

      let og = document.querySelector("meta[property='og:url']");
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', 'og:url');
        document.head.appendChild(og);
      }
      og.setAttribute('content', canonicalUrl);

      // --- UX: address bar cleanup ---
      // Only mutate the address bar if tracking params are present.
      // This strips utm_*, gclid, fbclid from the visible URL while preserving
      // non-tracking params (e.g. ?go=1) and page state.
      if (hasTrackingParams(search)) {
        const visibleUrl = `${cleanPath}${cleanQuery}`;
        window.history.replaceState({}, '', visibleUrl);
      }
    } catch (e) {
      // no-op — canonical is non-critical; never break rendering
    }
  }, [pathname, search]);

  return null;
}

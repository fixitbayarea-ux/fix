/**
 * Shared CTA handlers for city pages with GA4 tracking.
 * Extracted from CityRepairPage + CityLandingPage templates.
 */

const PHONE = '7605435733';

function track(action, label) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      page_path: window.location.pathname,
      page_title: typeof document !== 'undefined' ? document.title : undefined,
      category: 'CTA',
      action,
      label,
    });
  }
}

export function bookOnline(label = 'Book Online Now') {
  track('book_online', label);
  if (typeof window !== 'undefined') window.location.href = '/book?go=1';
}

export function callNow(label = 'Call (760) 543-5733') {
  track('call_now', label);
  if (typeof window !== 'undefined') window.location.href = `tel:${PHONE}`;
}

/**
 * Hook returning memo-stable CTA handlers. Use this inside templates.
 */
export function useCityCtaHandlers() {
  return { handleBookNow: () => bookOnline(), handleCallNow: () => callNow() };
}

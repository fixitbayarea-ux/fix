// Lazy script loading utilities for performance optimization

let posthogLoaded = false;
let gaLoaded = false;

/**
 * Load PostHog analytics after user interaction or idle
 * Only loads recorder/surveys when explicitly needed
 */
export const loadPostHog = (options = {}) => {
  if (posthogLoaded || typeof window === 'undefined') return;
  
  const {
    enableRecording = false, // Don't record by default
    enableSurveys = false,    // Don't load surveys by default
  } = options;

  posthogLoaded = true;

  // Load PostHog SDK
  !(function (t, e) {
    var o, n, p, r;
    e.__SV ||
      ((window.posthog = e),
      (e._i = []),
      (e.init = function (i, s, a) {
        function g(t, e) {
          var o = e.split(".");
          2 == o.length && ((t = t[o[0]]), (e = o[1])),
            (t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            });
        }
        ((p = t.createElement("script")).type = "text/javascript"),
          (p.crossOrigin = "anonymous"),
          (p.async = !0),
          (p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js"),
          (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
        var u = e;
        for (void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
          u.people = u.people || [],
          u.toString = function (t) { var e = "posthog"; return ("posthog" !== a && (e += "." + a), t || (e += " (stub)"), e); },
          u.people.toString = function () { return u.toString(1) + ".people (stub)"; },
          o = "init capture identify alias people group reset".split(" "),
          n = 0; n < o.length; n++) g(u, o[n]);
        e._i.push([i, s, a]);
      }),
      (e.__SV = 1));
  })(document, window.posthog || []);

  // Initialize PostHog with minimal config
  window.posthog.init("phc_yJW1VjHGGwmCbbrtczfqqNxgBDbhlhOWcdzcIJEOTFE", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "identified_only",
    // Disable heavy features by default
    disable_session_recording: !enableRecording,
    disable_surveys: !enableSurveys,
    autocapture: false, // Reduce noise
    capture_pageview: true,
    capture_pageleave: false, // Reduce events
  });

  console.log('[PostHog] Loaded (recording:', enableRecording, 'surveys:', enableSurveys, ')');
};

/**
 * Load Google Analytics after initial render
 */
export const loadGA = () => {
  if (gaLoaded || typeof window === 'undefined') return;
  
  gaLoaded = true;

  // Load gtag.js
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QCJEEKQJ1X';
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-QCJEEKQJ1X');

  // Event helpers
  window.fxbTrack = {
    click_to_call: function (label) { gtag('event', 'click_to_call', { event_category: 'engagement', event_label: label || 'tel' }); },
    click_to_text: function (label) { gtag('event', 'click_to_text', { event_category: 'engagement', event_label: label || 'sms' }); },
    form_submit: function (label) { gtag('event', 'form_submit', { event_category: 'engagement', event_label: label || 'form' }); },
    click_get_quote: function (label) { gtag('event', 'click_get_quote', { event_category: 'cta', event_label: label || 'get_quote' }); },
    click_schedule: function (label) { gtag('event', 'click_schedule', { event_category: 'cta', event_label: label || 'schedule' }); }
  };

  // Auto bind tel/sms clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) window.fxbTrack.click_to_call(href);
    if (href.startsWith('sms:')) window.fxbTrack.click_to_text(href);
  });

  console.log('[GA4] Loaded after interaction');
};

/**
 * Initialize analytics after user interaction or after timeout
 */
export const initAnalytics = () => {
  // Load GA4 first (lighter, more important)
  loadGA();

  // Load PostHog after a longer delay (heavier, less critical)
  // Increased from 2s to 5s for better initial page performance
  setTimeout(() => {
    loadPostHog({
      enableRecording: false, // Only enable on admin pages if needed
      enableSurveys: false,   // Only enable on specific pages if needed
    });
  }, 5000);
};

/**
 * Start session recording (admin/debug only)
 */
export const enablePostHogRecording = () => {
  if (!window.posthog) {
    loadPostHog({ enableRecording: true });
  } else if (window.posthog.sessionRecordingStarted && !window.posthog.sessionRecordingStarted()) {
    window.posthog.startSessionRecording();
    console.log('[PostHog] Recording enabled');
  }
};

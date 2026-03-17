import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { onCLS, onFCP, onLCP } from 'web-vitals';
import "./index.css";
import App from "./App";
import { initAnalytics } from './utils/lazyScripts';

// Web Vitals Diagnostics
onCLS((metric) => {
  console.log('🔍 CLS (Cumulative Layout Shift):', metric.value, metric.value < 0.1 ? '✅ GOOD' : '❌ NEEDS IMPROVEMENT');
  console.log('   Target: < 0.1 | Current:', metric.value.toFixed(4));
});

onLCP((metric) => {
  console.log('⚡ LCP (Largest Contentful Paint):', metric.value, 'ms');
});

onFCP((metric) => {
  console.log('🎨 FCP (First Contentful Paint):', metric.value, 'ms');
});

const rootElement = document.getElementById("root");

// Use hydrateRoot for prerendered HTML (react-snap), createRoot for client-side
if (rootElement.hasChildNodes()) {
  // Prerendered HTML exists - hydrate
  hydrateRoot(
    rootElement,
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    {
      onRecoverableError: (error) => {
        // Suppress known hydration mismatches from react-snap prerendering
        const msg = error?.message || '';
        if (msg.includes('Hydration') || msg.includes('hydrat')) return;
        if (msg.includes('#418') || msg.includes('#423') || msg.includes('#422')) return;
        if (msg.includes('Text content') || msg.includes('did not match')) return;
        console.error(error);
      },
    }
  );
} else {
  // No prerendered HTML - render client-side
  const root = createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

// Load analytics after user interaction or after 5s idle (increased delay for performance)
const loadAnalyticsOnInteraction = () => {
  initAnalytics();
  // Remove listeners after first load
  document.removeEventListener('scroll', loadAnalyticsOnInteraction);
  document.removeEventListener('mousemove', loadAnalyticsOnInteraction);
  document.removeEventListener('touchstart', loadAnalyticsOnInteraction);
  document.removeEventListener('click', loadAnalyticsOnInteraction);
};

// Wait for first user interaction
document.addEventListener('scroll', loadAnalyticsOnInteraction, { once: true, passive: true });
document.addEventListener('mousemove', loadAnalyticsOnInteraction, { once: true, passive: true });
document.addEventListener('touchstart', loadAnalyticsOnInteraction, { once: true, passive: true });
document.addEventListener('click', loadAnalyticsOnInteraction, { once: true, passive: true });

// Fallback: load after 5s if no interaction (increased from 3s)
setTimeout(initAnalytics, 5000);

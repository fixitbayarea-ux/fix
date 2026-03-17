import { useEffect } from 'react';

/**
 * SEOMetaTags — sets title, description, canonical, OG, Twitter, robots
 * via direct DOM manipulation instead of react-helmet-async (broken with React 19).
 * Drop-in replacement: same props interface as the old Helmet-based version.
 */
const SEOMetaTags = ({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage,
  keywords,
  noindex = false,
  ogType,
  twitterTitle,
  twitterDescription,
  twitterSite
}) => {
  useEffect(() => {
    const defaultImage = 'https://fixitbay.net/images/og-cover.png';
    const finalTitle = title || 'FixitBay LLC - Professional Appliance Repair San Francisco Bay Area';
    const finalDesc = description || 'Expert appliance repair services in San Francisco Bay Area. Licensed technicians, 180-day warranty, same-day service. Call (760) 543-5733.';
    const finalCanonical = canonical || 'https://fixitbay.net';
    const finalImage = ogImage || defaultImage;
    const finalOgTitle = ogTitle || finalTitle;
    const finalOgDesc = ogDescription || finalDesc;
    const finalTwitterTitle = twitterTitle || finalOgTitle;
    const finalTwitterDesc = twitterDescription || finalOgDesc;
    const robotsContent = noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    // Title
    document.title = finalTitle;

    // Helper: find-or-create meta by name
    const setMetaName = (name, content) => {
      let el = document.head.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: find-or-create meta by property
    const setMetaProperty = (prop, content) => {
      let el = document.head.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: find-or-create link by rel
    const setLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Apply all meta
    setMetaName('description', finalDesc);
    setMetaName('robots', robotsContent);
    if (keywords) setMetaName('keywords', keywords);
    setLink('canonical', finalCanonical);

    // Geo meta tags (all pages)
    setMetaName('geo.region', 'US-CA');
    setMetaName('geo.placename', 'San Francisco, California');
    setMetaName('geo.position', '37.7749;-122.4194');
    setMetaName('ICBM', '37.7749, -122.4194');

    // Preconnect links for performance
    const addPreconnect = (href) => {
      if (!document.head.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const el = document.createElement('link');
        el.setAttribute('rel', 'preconnect');
        el.setAttribute('href', href);
        document.head.appendChild(el);
      }
    };
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com');

    // Open Graph
    setMetaProperty('og:title', finalOgTitle);
    setMetaProperty('og:description', finalOgDesc);
    setMetaProperty('og:image', finalImage);
    setMetaProperty('og:image:width', '1200');
    setMetaProperty('og:image:height', '630');
    setMetaProperty('og:image:type', 'image/png');
    setMetaProperty('og:url', finalCanonical);
    setMetaProperty('og:type', ogType || 'website');
    setMetaProperty('og:site_name', 'FixitBay LLC');

    // Twitter
    setMetaName('twitter:card', 'summary_large_image');
    if (twitterSite) setMetaName('twitter:site', twitterSite);
    setMetaName('twitter:title', finalTwitterTitle);
    setMetaName('twitter:description', finalTwitterDesc);
    setMetaName('twitter:image', finalImage);
    setMetaName('twitter:image:alt', finalTitle || 'FixitBay Appliance Repair San Francisco');

  }, [title, description, canonical, ogTitle, ogDescription, ogImage, keywords, noindex, ogType, twitterTitle, twitterDescription, twitterSite]);

  return null;
};

export default SEOMetaTags;

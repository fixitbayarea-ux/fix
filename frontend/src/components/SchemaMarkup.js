import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    // Remove any pre-existing page-level LocalBusiness duplicates
    // so only the global one (injected here) survives
    const seenTypes = new Set();
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
      try {
        const d = JSON.parse(el.textContent);
        // Remove duplicate LocalBusiness (keep only the one we inject)
        if (d['@type'] === 'LocalBusiness' && el.id !== 'local-business-schema') {
          el.remove();
          return;
        }
        // Remove prerendered no-id duplicates of BreadcrumbList and Service
        if (!el.id && (d['@type'] === 'BreadcrumbList' || d['@type'] === 'Service')) {
          if (seenTypes.has(d['@type'])) {
            el.remove();
          } else {
            seenTypes.add(d['@type']);
          }
        }
      } catch(e) {}
    });

    const id = 'local-business-schema';
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://fixitbay.net/#organization",
      "name": "FixitBay LLC",
      "alternateName": "FixitBay Appliance Repair",
      "description": "Professional appliance repair in San Francisco Bay Area. Licensed technician Andrei provides same-day service for refrigerators, washers, dryers, dishwashers, ovens, cooktops, wine coolers, ice makers, and garbage disposals. $60 diagnostic applied to repair. 180-day warranty on all parts and labor.",
      "url": "https://fixitbay.net",
      "telephone": "+17605435733",
      "email": "info@fixitbay.net",
      "priceRange": "$$",
      "image": "https://fixitbay.net/images/og-cover.png",
      "logo": "https://fixitbay.net/images/og-cover.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1549 Franklin Street Unit A",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94109",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.7937,
        "longitude": -122.4232
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "15:00"
        }
      ],
      "areaServed": [
        {"@type":"City","name":"San Francisco","containedInPlace":{"@type":"State","name":"California"}},
        {"@type":"City","name":"Daly City"},
        {"@type":"City","name":"South San Francisco"},
        {"@type":"City","name":"Pacifica"},
        {"@type":"City","name":"Millbrae"},
        {"@type":"City","name":"San Mateo"},
        {"@type":"City","name":"Marin County"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Appliance Repair Services",
        "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Refrigerator Repair","url":"https://fixitbay.net/refrigerator-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Washer Repair","url":"https://fixitbay.net/washer-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dryer Repair","url":"https://fixitbay.net/dryer-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dishwasher Repair","url":"https://fixitbay.net/dishwasher-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Oven Repair","url":"https://fixitbay.net/oven-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ice Maker Repair","url":"https://fixitbay.net/ice-maker-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Wine Cooler Repair","url":"https://fixitbay.net/wine-cooler-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Garbage Disposal Repair","url":"https://fixitbay.net/garbage-disposal-repair"}}
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/fixitbay",
        "https://share.google/Q48c6OXAIB7u60fNv",
        "https://www.yelp.com/biz/fixitbay-san-francisco-5",
        "https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644"
      ]
    });
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, []);
  return null;
};

export default SchemaMarkup;

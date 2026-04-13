import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    // Dedup function: remove any LocalBusiness schema that isn't the global one
    const dedupLocalBusiness = () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
        try {
          const d = JSON.parse(el.textContent);
          if (d['@type'] === 'LocalBusiness' && el.id !== 'local-business-schema' && el.id !== 'reviews-localbusiness') {
            el.remove();
          }
        } catch(e) {
          if (process.env.NODE_ENV === 'development') console.error('SchemaMarkup dedup error:', e);
        }
      });
    };

    // Remove any pre-existing duplicates
    dedupLocalBusiness();

    // Remove prerendered no-id duplicates of BreadcrumbList and Service
    const seenTypes = new Set();
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
      try {
        const d = JSON.parse(el.textContent);
        if (!el.id && (d['@type'] === 'BreadcrumbList' || d['@type'] === 'Service')) {
          if (seenTypes.has(d['@type'])) {
            el.remove();
          } else {
            seenTypes.add(d['@type']);
          }
        }
        // Remove all prerendered no-id VideoObject schemas (React components inject proper ones with IDs)
        if (!el.id && d['@type'] === 'VideoObject') {
          el.remove();
        }
      } catch(e) {
        if (process.env.NODE_ENV === 'development') console.error('SchemaMarkup dedup error:', e);
      }
    });

    const id = 'local-business-schema';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://fixitbay.net/#organization",
      "name": "FixitBay LLC",
      "alternateName": "FixitBay LLC Appliance Repair",
      "description": "Professional appliance repair in San Francisco Bay Area. Licensed technician Andrei provides same- or next-day appointments for refrigerators, washers, dryers, dishwashers, ovens, cooktops, wine coolers, ice makers. $80 diagnostic applied to repair. 180-day warranty on all parts and labor.",
      "url": "https://fixitbay.net",
      "telephone": "+17605435733",
      "email": "info@fixitbay.net",
      "priceRange": "$$",
      "image": "https://fixitbay.net/images/og-cover.png",
      "logo": "https://fixitbay.net/images/og-cover.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1549 Franklin Street Unit A",
        "addressLocality": "San Francisco",
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
        {"@type":"City","name":"San Francisco"},
        {"@type":"City","name":"Daly City"},
        {"@type":"City","name":"South San Francisco"},
        {"@type":"City","name":"San Bruno"},
        {"@type":"City","name":"Pacifica"},
        {"@type":"City","name":"Millbrae"},
        {"@type":"City","name":"Colma"},
        {"@type":"City","name":"Brisbane"},
        {"@type":"City","name":"Montara"},
        {"@type":"City","name":"Mill Valley"},
        {"@type":"City","name":"San Rafael"},
        {"@type":"City","name":"Sausalito"},
        {"@type":"City","name":"Novato"},
        {"@type":"City","name":"Corte Madera"},
        {"@type":"City","name":"Larkspur"},
        {"@type":"City","name":"Greenbrae"},
        {"@type":"City","name":"Ross"},
        {"@type":"City","name":"Fairfax"},
        {"@type":"City","name":"San Anselmo"},
        {"@type":"City","name":"Tiburon"},
        {"@type":"City","name":"Belvedere"},
        {"@type":"City","name":"San Quentin"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Appliance Repair Services",
        "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Refrigerator Repair","url":"https://fixitbay.net/refrigerator-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Washer Repair","url":"https://fixitbay.net/washer-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dryer Repair","url":"https://fixitbay.net/dryer-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dishwasher Repair","url":"https://fixitbay.net/dishwasher-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Oven Repair","url":"https://fixitbay.net/oven-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ice Maker Repair","url":"https://fixitbay.net/ice-maker-repair"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Wine Cooler Repair","url":"https://fixitbay.net/wine-cooler-repair"}},
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "106",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/fixitbay",
        "https://share.google/Q48c6OXAIB7u60fNv",
        "https://www.yelp.com/biz/fixitbay-san-francisco-5",
        "https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644",
        "https://www.bbb.org/us/ca/san-francisco/profile/appliance-repair/fixitbay-llc"
      ],
      "foundingDate": "2023",
      "award": "Nextdoor Neighborhood Fave 2025 — Bay Area Appliance Repair",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 3
      },
      "employee": {
        "@type": "Person",
        "name": "Andrei Suprunov",
        "jobTitle": "Lead Appliance Repair Technician"
      }
    });
      document.head.appendChild(script);
    }

    // MutationObserver: catch LocalBusiness schemas injected after mount by page components
    const observer = new MutationObserver(() => dedupLocalBusiness());
    observer.observe(document.head, { childList: true });

    return () => {
      observer.disconnect();
      document.getElementById(id)?.remove();
    };
  }, []);
  return null;
};

export default SchemaMarkup;

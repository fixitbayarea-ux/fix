import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ includeRating = false, ratingValue = null, reviewCount = null }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fixitbay.net/#organization",
    "name": "FixitBay LLC",
    "alternateName": "FixitBay Appliance Repair",
    "description": "Professional appliance repair services in San Francisco Bay Area. Licensed & insured technicians providing same-day service. Service-area business - we come to you.",
    "url": "https://fixitbay.net",
    "telephone": "+17605435733",
    "priceRange": "$$",
    "image": "https://fixitbay.net/logo.png",
    "logo": "https://fixitbay.net/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1549 Franklin Street, Unit A",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Refrigerator Repair", "url": "https://fixitbay.net/refrigerator-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washer Repair", "url": "https://fixitbay.net/washer-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dryer Repair", "url": "https://fixitbay.net/dryer-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwasher Repair", "url": "https://fixitbay.net/dishwasher-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oven & Range Repair", "url": "https://fixitbay.net/oven-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cooktop Repair", "url": "https://fixitbay.net/cooktop-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ice Maker Repair", "url": "https://fixitbay.net/ice-maker-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wine Cooler Repair", "url": "https://fixitbay.net/wine-cooler-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garbage Disposal Repair", "url": "https://fixitbay.net/garbage-disposal-repair" } }
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7937,
      "longitude": -122.4232
    },
    "areaServed": [
      { "@type": "City", "name": "San Francisco", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Daly City", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "South San Francisco", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "San Bruno", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Pacifica", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Millbrae", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Colma", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Brisbane", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Montara", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Mill Valley", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "San Rafael", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Novato", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Sausalito", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Belvedere", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Tiburon", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Corte Madera", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Larkspur", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Greenbrae", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Ross", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "San Anselmo", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "Place", "name": "San Francisco Bay Area" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
    "sameAs": [
      "https://www.facebook.com/fixitbay",
      "https://www.yelp.com/biz/fixitbay-san-francisco-5",
      "https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644"
    ]
  };

  // Always include aggregateRating for Rich Snippets in Google
  baseSchema.aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": ratingValue ? String(ratingValue) : "5.0",
    "reviewCount": reviewCount ? String(reviewCount) : "10",
    "bestRating": "5",
    "worstRating": "1"
  };

  // Include sample reviews for Rich Snippets
  baseSchema.review = [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Gayle Rabbitt" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Andrei was excellent. He explained and checked everything. I highly recommend him and FixitBay!",
      "publisher": { "@type": "Organization", "name": "Google" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Emily Chen" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "One of the smoothest repair experiences I've had. Super easy to book online. Would highly recommend!",
      "publisher": { "@type": "Organization", "name": "Google" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michael Kagan" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Andrei from FixItBay is great. He's knowledgeable, professional, fast, and answered any questions I had.",
      "publisher": { "@type": "Organization", "name": "Google" }
    }
  ];

  const siteNavSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://fixitbay.net",
    "hasPart": [
      { "@type": "SiteNavigationElement", "name": "Services", "url": "https://fixitbay.net/#services" },
      { "@type": "SiteNavigationElement", "name": "Service Areas", "url": "https://fixitbay.net/service-areas" },
      { "@type": "SiteNavigationElement", "name": "Reviews", "url": "https://fixitbay.net/reviews" },
      { "@type": "SiteNavigationElement", "name": "About", "url": "https://fixitbay.net/about" },
      { "@type": "SiteNavigationElement", "name": "Contact", "url": "https://fixitbay.net/contact" },
      { "@type": "SiteNavigationElement", "name": "Pricing", "url": "https://fixitbay.net/#pricing" }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(siteNavSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

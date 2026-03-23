export const getLocalBusinessSchema = (city = "San Francisco") => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "image": "https://customer-assets.emergentagent.com/job_emergency-repair-1/artifacts/3s7loh5z_IMG_9175.PNG",
    "description": `Professional appliance repair services in ${city} and the San Francisco Bay Area. Licensed technicians providing expert repair for refrigerators, washers, dryers, dishwashers, ovens, and all major appliances.`,
    "telephone": "+1-760-543-5733",
    "email": "info@fixitbay.net",
    "url": "https://fixitbay.net",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Francisco",
        "addressRegion": "CA"
      },
      {
        "@type": "City", 
        "name": "Oakland",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "San Jose",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Berkeley",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Palo Alto",
        "addressRegion": "CA"
      }
    ],
    "serviceType": "Appliance Repair Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Repair",
            "description": "Professional refrigerator repair services for all brands and models"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washer and Dryer Repair", 
            "description": "Expert washer and dryer repair services with same-day availability"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dishwasher Repair",
            "description": "Professional dishwasher repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oven and Stove Repair",
            "description": "Expert oven, stove, and cooktop repair services"
          }
        }
      ]
    },
    "priceRange": "$150-$400",
    "paymentAccepted": "Cash, Check, Credit Card",
    "openingHours": "Mo-Su 08:00-20:00",
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Andrei was professional, punctual, and fixed our refrigerator perfectly. Highly recommend FixitBay!"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "94"
    },
    "founder": {
      "@type": "Person",
      "name": "Andrei",
      "jobTitle": "Lead Appliance Technician"
    },
    "sameAs": [
      "https://www.yelp.com/biz/fixitbay-san-francisco-5",
      "https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644",
      "https://tr.co/andrei-s--35"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Service Call",
        "description": "Service call FREE with repair (otherwise $60)",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer", 
        "name": "180-Day Warranty",
        "description": "180-day warranty on all repairs and labor",
        "warranty": {
          "@type": "WarrantyPromise",
          "durationOfWarranty": "P180D"
        }
      }
    ]
  };
};

export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const getServiceSchema = (serviceName, city = "San Francisco") => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} in ${city}`,
    "description": `Professional ${serviceName.toLowerCase()} services in ${city} and the Bay Area by licensed technicians.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "+1-760-543-5733",
      "url": "https://fixitbay.net"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [{
        "@type": "Offer",
        "price": "150-400",
        "priceCurrency": "USD",
        "warranty": {
          "@type": "WarrantyPromise", 
          "durationOfWarranty": "P180D"
        }
      }]
    }
  };
};
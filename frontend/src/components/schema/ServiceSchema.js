import { useEffect } from 'react';

const ServiceSchema = ({ serviceType, city, serviceName }) => {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType || "Appliance Repair",
      "name": serviceName || `${serviceType} in ${city}`,
      "provider": {
        "@id": "https://fixitbay.net/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      "url": `https://fixitbay.net/${city.toLowerCase().replace(/\s+/g, '-')}-appliance-repair`,
      "description": `Professional ${serviceType.toLowerCase()} services in ${city}, California. Licensed technicians, same/next-day service, 180-day warranty.`
    };

    // Create and inject the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    console.log('[SEO] Added Service schema for:', { serviceType, city });

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('service-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [serviceType, city, serviceName]);

  return null;
};

export default ServiceSchema;

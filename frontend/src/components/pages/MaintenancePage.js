import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, AlertTriangle, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';

const MaintenancePage = ({ appliance, content }) => {
  const { title, slug, description, monthly, quarterly, annually, safety, whenToCall } = content;

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <>
      <Helmet>
        <title>{title} Tips & Schedule | FixitBay LLC</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://fixitbay.net/maintenance/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": { "@type": "Organization", "name": "FixitBay LLC" },
            "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/images/logo.png" } },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net/" },
              { "@type": "ListItem", "position": 2, "name": "Maintenance", "item": "https://fixitbay.net/maintenance" },
              { "@type": "ListItem", "position": 3, "name": title, "item": `https://fixitbay.net/maintenance/${slug}` }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": `${appliance} Repair`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "FixitBay LLC",
              "telephone": "+1-760-543-5733",
              "address": { "@type": "PostalAddress", "addressLocality": "San Francisco", "addressRegion": "CA" }
            },
            "areaServed": "San Francisco Bay Area",
            "offers": { "@type": "Offer", "description": "$60 diagnostic fee (applied to repair)", "price": "60", "priceCurrency": "USD" }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4FA 0%, #F0F8FC 100%)', paddingTop: '64px' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Improved Back button */}
            <button
              onClick={handleBackClick}
              className="group flex items-center gap-2 mb-6 px-5 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl border-2 transition-all duration-300 hover:scale-105"
              style={{ color: '#1A3B5D', borderColor: '#C0E8F9' }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300" style={{background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)'}}>
                <ArrowLeft size={20} style={{color: '#fff'}} />
              </div>
              <span className="font-bold text-base">Back</span>
            </button>

            <div className="text-center">
              {/* Breadcrumbs */}
              <div className="mb-4">
                <a href="/" className="hover:underline text-sm" style={{color: '#4A5568'}}>Home</a>
                <span className="mx-2" style={{color: '#6B7280'}}>›</span>
                <a href="/maintenance" className="hover:underline text-sm" style={{color: '#4A5568'}}>Maintenance</a>
                <span className="mx-2" style={{color: '#6B7280'}}>›</span>
                <span className="font-semibold text-sm" style={{color: '#1A3B5D'}}>{title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A3B5D' }}>
                {title}
              </h1>
              <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#4A5568' }}>
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Monthly Maintenance */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1A3B5D' }}>
                <Calendar className="w-8 h-8" style={{ color: '#C0362C' }} />
                Monthly Maintenance
              </h2>
              <ul className="space-y-3">
                {monthly.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span className="text-base" style={{color: '#2B3A4A'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quarterly Maintenance */}
            {quarterly && quarterly.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1A3B5D' }}>
                  Quarterly Maintenance
                </h2>
                <ul className="space-y-3">
                  {quarterly.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span className="text-base" style={{color: '#2B3A4A'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Annual Maintenance */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1A3B5D' }}>
                Annual Maintenance
              </h2>
              <ul className="space-y-3">
                {annually.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span className="text-base" style={{color: '#2B3A4A'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Warnings */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1A3B5D' }}>
                <AlertTriangle className="w-8 h-8" style={{ color: '#F59E0B' }} />
                Safety Warnings
              </h2>
              <ul className="space-y-3">
                {safety.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-0.5">⚠</span>
                    <span className="text-base" style={{color: '#2B3A4A'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Call FixitBay */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1A3B5D' }}>
                <Phone className="w-8 h-8" style={{ color: '#C0362C' }} />
                When to Call FixitBay
              </h2>
              <ul className="space-y-3">
                {whenToCall.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-0.5">🔧</span>
                    <span className="text-base" style={{color: '#2B3A4A'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need Expert {appliance} Service?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              FixitBay LLC provides professional {appliance.toLowerCase()} repair and maintenance throughout San Francisco, Peninsula, and Marin County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+17605435733" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                style={{ color: '#C0362C' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (760) 543-5733
              </a>
              <a 
                href="/book?go=1" 
                target="_blank" rel="noopener noreferrer" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105" 
                style={{ background: 'linear-gradient(135deg, #C0362C 0%, #A02820 100%)' }}
              >
                Book Online
              <span className="sr-only"> (opens in new tab)</span></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MaintenancePage;

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Home, Star, Wrench, ArrowRight } from 'lucide-react';

/**
 * CityUniqueContent - Renders unique, Google-differentiating content
 * for each city page. Includes: service area details, local case studies,
 * testimonials, and cross-links to nearby cities.
 */
const CityUniqueContent = ({ cityName, data }) => {
  if (!data) return null;

  return (
    <div data-testid={`${cityName.toLowerCase().replace(/\s+/g, '-')}-unique-content`}>
      {/* === SECTION 1: Service Area Details === */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A3B5D' }}>
            Servicing {cityName} &amp; Surrounding Areas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* ZIP Codes & Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#1A3B5D' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A3B5D' }}>Areas We Cover</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">ZIP Codes:</span> {data.zipCodes.join(', ')}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Neighborhoods:</span> {data.neighborhoods.join(', ')}
              </p>
            </div>

            {/* Drive Time & Housing */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}>
                  <Clock className="w-5 h-5" style={{ color: '#1A3B5D' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A3B5D' }}>Response Time</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Drive time:</span> {data.driveTime}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Housing types:</span> {data.housingType}
              </p>
            </div>

            {/* Local Tip */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ borderLeft: '4px solid #1A3B5D' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FFF3E0' }}>
                  <Home className="w-5 h-5" style={{ color: '#E65100' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A3B5D' }}>Local Insight</h3>
              </div>
              <p className="text-sm text-gray-700 italic">
                {data.localTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: Recent Repairs in {City} === */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1A3B5D' }}>
              Recent Repairs in {cityName}
            </h2>
            <p className="text-gray-600 mb-8">Real service cases from {cityName} homes</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {data.caseStudies.map((cs, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4" style={{ color: '#1A3B5D' }} />
                    <span className="font-bold text-sm" style={{ color: '#1A3B5D' }}>{cs.appliance}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 font-medium">{cs.neighborhood}</p>
                  <p className="text-sm text-gray-700 mb-3">{cs.issue}</p>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#E8F4FA', color: '#1A3B5D' }}>
                    {cs.timeframe}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 3: Testimonials from {City} === */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-12" style={{ background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              What {cityName} Customers Say
            </h2>
            <p className="text-blue-200 mb-8">Verified reviews from your neighbors</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.testimonials.map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'rgba(255,255,255,0.2)' }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-blue-200 text-xs">{t.area}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 4: Nearby Service Areas (Cross-linking) === */}
      {data.nearbyServices && data.nearbyServices.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              Also Serving Near {cityName}
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.nearbyServices.map((ns, i) => (
                <Link
                  key={i}
                  to={`/${ns.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all text-sm font-medium"
                  style={{ color: '#1A3B5D' }}
                >
                  {ns.name} Appliance Repair
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all text-sm font-medium"
                style={{ color: '#1A3B5D' }}
              >
                All Service Areas
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CityUniqueContent;

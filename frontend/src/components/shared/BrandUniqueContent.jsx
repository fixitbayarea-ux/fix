import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Package, Shield, ArrowRight, Cpu, Wrench } from 'lucide-react';

/**
 * BrandUniqueContent - Renders brand-specific unique content:
 * models/series, common issues, parts availability, warranty info, and cross-links.
 */
const BrandUniqueContent = ({ brandName, data }) => {
  if (!data) return null;

  return (
    <div data-testid={`${brandName.toLowerCase().replace(/\s+/g, '-')}-unique-content`}>
      {/* === SECTION 1: Brand Overview + Models === */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1A3B5D' }}>
            {brandName} Models We Service
          </h2>
          <p className="text-gray-600 mb-8">
            <span className="font-medium">Founded:</span> {data.founded} | <span className="font-medium">Known for:</span> {data.specialty}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.popularModels.map((group, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4" style={{ color: '#1A3B5D' }} />
                  <h3 className="font-bold text-sm" style={{ color: '#1A3B5D' }}>{group.type}</h3>
                </div>
                <ul className="space-y-1">
                  {group.models.map((model, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-300 mt-1.5 block w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></span>
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 2: Known Issues We Fix === */}
      {data.commonIssues && data.commonIssues.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1A3B5D' }}>
              Known {brandName} Issues We Fix
            </h2>
            <p className="text-gray-600 mb-8">Common problems specific to {brandName} appliances</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {data.commonIssues.map((issue, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#FFF3E0' }}>
                    <Wrench className="w-4 h-4" style={{ color: '#E65100' }} />
                  </div>
                  <p className="text-sm text-gray-700">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 3: Parts & Warranty === */}
      <section className="py-12" style={{ background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Parts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">{brandName} Parts Availability</h3>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{data.partsAvailability}</p>
            </div>

            {/* Warranty */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">{brandName} Warranty Info</h3>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{data.warrantyNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: Related Brands (Cross-linking) === */}
      {data.relatedBrands && data.relatedBrands.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              Other Brands We Service
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.relatedBrands.map((rb, i) => (
                <Link
                  key={i}
                  to={`/${rb.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all text-sm font-medium"
                  style={{ color: '#1A3B5D' }}
                >
                  {rb.name} Repair
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                to="/brands"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all text-sm font-medium"
                style={{ color: '#1A3B5D' }}
              >
                All Brands
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BrandUniqueContent;

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

// Service cities data - URLs are placeholders for easy replacement
const serviceCities = [
  // San Francisco
  { key: 'san-francisco', name: 'San Francisco', region: 'San Francisco', href: 'SAN_FRANCISCO_URL_PLACEHOLDER' },
  
  // Peninsula
  { key: 'daly-city', name: 'Daly City', region: 'Peninsula', href: 'DALY_CITY_URL_PLACEHOLDER' },
  { key: 'south-san-francisco', name: 'South San Francisco', region: 'Peninsula', href: 'SOUTH_SF_URL_PLACEHOLDER' },
  { key: 'san-bruno', name: 'San Bruno', region: 'Peninsula', href: 'SAN_BRUNO_URL_PLACEHOLDER' },
  { key: 'brisbane', name: 'Brisbane', region: 'Peninsula', href: 'BRISBANE_URL_PLACEHOLDER' },
  { key: 'colma', name: 'Colma', region: 'Peninsula', href: 'COLMA_URL_PLACEHOLDER' },
  { key: 'millbrae', name: 'Millbrae', region: 'Peninsula', href: 'MILLBRAE_URL_PLACEHOLDER' },
  { key: 'pacifica', name: 'Pacifica', region: 'Peninsula', href: 'PACIFICA_URL_PLACEHOLDER' },
  { key: 'montara', name: 'Montara', region: 'Peninsula', href: 'MONTARA_URL_PLACEHOLDER' },
  
  // North Bay
  { key: 'san-rafael', name: 'San Rafael', region: 'North Bay', href: 'SAN_RAFAEL_URL_PLACEHOLDER' },
  { key: 'sausalito', name: 'Sausalito', region: 'North Bay', href: 'SAUSALITO_URL_PLACEHOLDER' },
  { key: 'tiburon', name: 'Tiburon', region: 'North Bay', href: 'TIBURON_URL_PLACEHOLDER' },
  { key: 'larkspur', name: 'Larkspur', region: 'North Bay', href: 'LARKSPUR_URL_PLACEHOLDER' },
];

const ServiceAreaMap = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const handleAreaClick = (href) => {
    if (href && !href.includes('PLACEHOLDER')) {
      window.location.href = href;
    }
  };

  const getCityByKey = (key) => serviceCities.find(c => c.key === key);

  // Group cities by region
  const cityGroups = {
    'San Francisco': serviceCities.filter(c => c.region === 'San Francisco'),
    'Peninsula': serviceCities.filter(c => c.region === 'Peninsula'),
    'North Bay': serviceCities.filter(c => c.region === 'North Bay'),
  };

  return (
    <section id="service-area" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{color:'#1A3B5D'}}>
            Where We Serve
          </h2>
          <p className="text-base md:text-lg" style={{color:'#4A5568'}}>
            San Francisco, Peninsula, and North Bay (up to San Rafael)
          </p>
        </div>

        {/* Two-column layout: Map + City List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Interactive SVG Map */}
          <div className="order-1 lg:order-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                style={{ maxHeight: '600px' }}
                role="img"
                aria-label="Service area map"
              >
                {/* Background */}
                <rect width="400" height="500" fill="#F0F8FF" />

                {/* San Francisco (top area) */}
                <path
                  d="M 120 80 L 180 60 L 240 80 L 260 120 L 240 160 L 200 180 L 160 180 L 120 160 L 100 120 Z"
                  fill={hoveredArea === 'san-francisco' ? '#C0362C' : '#4285F4'}
                  stroke="#1A3B5D"
                  strokeWidth="2"
                  className="transition-all duration-200 cursor-pointer"
                  style={{
                    filter: hoveredArea === 'san-francisco' ? 'drop-shadow(0 0 8px rgba(192, 54, 44, 0.6))' : 'none'
                  }}
                  data-key="san-francisco"
                  onMouseEnter={() => setHoveredArea('san-francisco')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('san-francisco')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="San Francisco - Click to view details"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAreaClick(getCityByKey('san-francisco')?.href);
                  }}
                />

                {/* Peninsula (middle elongated area) */}
                <path
                  d="M 140 180 L 220 180 L 230 220 L 240 280 L 230 340 L 220 380 L 200 420 L 180 450 L 160 450 L 140 420 L 130 380 L 120 340 L 130 280 L 140 220 Z"
                  fill={hoveredArea && serviceCities.find(c => c.key === hoveredArea)?.region === 'Peninsula' ? '#C0362C' : '#34A853'}
                  stroke="#1A3B5D"
                  strokeWidth="2"
                  className="transition-all duration-200 cursor-pointer"
                  style={{
                    filter: hoveredArea && serviceCities.find(c => c.key === hoveredArea)?.region === 'Peninsula' ? 'drop-shadow(0 0 8px rgba(192, 54, 44, 0.6))' : 'none'
                  }}
                  data-key="peninsula"
                  onMouseEnter={() => setHoveredArea('daly-city')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('daly-city')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="Peninsula cities - Click to view details"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAreaClick(getCityByKey('daly-city')?.href);
                  }}
                />

                {/* North Bay (San Rafael area - top right) */}
                <path
                  d="M 260 120 L 320 100 L 360 120 L 380 160 L 370 200 L 340 220 L 300 220 L 270 200 L 260 160 Z"
                  fill={hoveredArea === 'san-rafael' ? '#C0362C' : '#FBBC05'}
                  stroke="#1A3B5D"
                  strokeWidth="2"
                  className="transition-all duration-200 cursor-pointer"
                  style={{
                    filter: hoveredArea === 'san-rafael' ? 'drop-shadow(0 0 8px rgba(192, 54, 44, 0.6))' : 'none'
                  }}
                  data-key="san-rafael"
                  onMouseEnter={() => setHoveredArea('san-rafael')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('san-rafael')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="San Rafael - Click to view details"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAreaClick(getCityByKey('san-rafael')?.href);
                  }}
                />

                {/* City pins/labels */}
                {/* San Francisco Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('san-francisco')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('san-francisco')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="San Francisco"
                >
                  <circle cx="180" cy="120" r="8" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="180" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1A3B5D">
                    San Francisco
                  </text>
                </g>

                {/* Daly City Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('daly-city')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('daly-city')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="Daly City"
                >
                  <circle cx="160" cy="220" r="6" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="160" y="240" textAnchor="middle" fontSize="11" fill="#1A3B5D">
                    Daly City
                  </text>
                </g>

                {/* San Bruno Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('san-bruno')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('san-bruno')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="San Bruno"
                >
                  <circle cx="180" cy="300" r="6" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="180" y="320" textAnchor="middle" fontSize="11" fill="#1A3B5D">
                    San Bruno
                  </text>
                </g>

                {/* Millbrae Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('millbrae')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('millbrae')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="Millbrae"
                >
                  <circle cx="170" cy="370" r="6" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="170" y="390" textAnchor="middle" fontSize="11" fill="#1A3B5D">
                    Millbrae
                  </text>
                </g>

                {/* Montara Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('montara')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('montara')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="Montara"
                >
                  <circle cx="180" cy="420" r="6" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="180" y="440" textAnchor="middle" fontSize="11" fill="#1A3B5D">
                    Montara
                  </text>
                </g>

                {/* San Rafael Pin */}
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredArea('san-rafael')}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(getCityByKey('san-rafael')?.href)}
                  tabIndex={0}
                  role="link"
                  aria-label="San Rafael"
                >
                  <circle cx="320" cy="160" r="6" fill="#C0362C" stroke="white" strokeWidth="2" />
                  <text x="320" y="180" textAnchor="middle" fontSize="11" fill="#1A3B5D">
                    San Rafael
                  </text>
                </g>
              </svg>

              {/* Tooltip */}
              {hoveredArea && (
                <div className="text-center mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold" style={{color:'#1A3B5D'}}>
                    {getCityByKey(hoveredArea)?.name}
                  </p>
                  <p className="text-xs" style={{color:'#4A5568'}}>
                    Click to view service details
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: City List */}
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6" style={{color:'#1A3B5D'}}>
                Cities We Serve
              </h3>

              <div className="space-y-6">
                {Object.entries(cityGroups).map(([region, cities]) => (
                  <div key={region}>
                    <h4 className="text-sm font-bold mb-3 flex items-center gap-2" style={{color:'#C0362C'}}>
                      <MapPin className="w-4 h-4" />
                      {region}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cities.map((city) => (
                        <a
                          key={city.key}
                          href={city.href}
                          className="text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"
                          style={{color:'#1A3B5D'}}
                          onMouseEnter={() => setHoveredArea(city.key)}
                          onMouseLeave={() => setHoveredArea(null)}
                        >
                          {city.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-center" style={{color:'#4A5568'}}>
                  <strong>Don't see your city?</strong><br />
                  We may still serve your area. Call us to confirm!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Collapsible city list */}
        <div className="lg:hidden mt-8">
          <details className="bg-white rounded-xl shadow-lg border border-gray-200">
            <summary className="px-6 py-4 cursor-pointer font-bold text-lg" style={{color:'#1A3B5D'}}>
              View All Cities (Tap to Expand)
            </summary>
            <div className="px-6 pb-6 space-y-4">
              {Object.entries(cityGroups).map(([region, cities]) => (
                <div key={region}>
                  <h4 className="text-sm font-bold mb-2 flex items-center gap-2" style={{color:'#C0362C'}}>
                    <MapPin className="w-4 h-4" />
                    {region}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.map((city) => (
                      <a
                        key={city.key}
                        href={city.href}
                        className="text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                        style={{color:'#1A3B5D'}}
                      >
                        {city.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* CSS for reduced motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceAreaMap;

import React from 'react';

const GLASS_DROPDOWN = {
  background: '#1A2F45',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
};

const REGION_LABEL = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  fontSize: 10,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#FF5722',
  padding: '6px 12px 4px',
  display: 'block',
};

const AreasDropdownPanel = ({ areasGrouped, onClose, onTrackClick, scrollToAnchor }) => {
  return (
    <div 
      className="absolute left-0 mt-2 rounded py-3 z-50"
      style={{ top: '100%', width: 680, maxWidth: '90vw', ...GLASS_DROPDOWN }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
        {(areasGrouped || []).map((group, gi) => (
          <div key={group.region} style={{ borderLeft: gi > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', padding: '0 4px' }}>
            <span style={REGION_LABEL}>{group.region}</span>
            {group.cities.map((city) => (
              <a
                key={city.path}
                href={city.path}
                className="block px-3 py-1.5 text-sm rounded transition-colors hover:bg-white/10"
                style={{ color: 'rgba(255,255,255,0.80)', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13 }}
                onClick={() => {
                  onTrackClick(city.name, 'areas');
                  onClose();
                }}
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 mt-2 pt-2 px-3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          href="/service-areas"
          className="text-sm font-medium hover:underline"
          style={{ color: '#FF5722', fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => {
            onTrackClick('all_service_areas', 'areas');
            onClose();
          }}
        >
          All Service Areas &rarr;
        </a>
        <button 
          onClick={() => {
            scrollToAnchor('service-area');
            onClose();
          }}
          className="text-sm font-medium hover:underline" 
          style={{ color: 'rgba(255,255,255,0.50)', fontFamily: 'Montserrat, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          View map &rarr;
        </button>
      </div>
    </div>
  );
};

export default AreasDropdownPanel;

import React from 'react';

const GLASS_DROPDOWN = {
  background: '#1A2F45',
  
  
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
};

const AreasDropdownPanel = ({ citiesItems, onClose, onTrackClick, scrollToAnchor }) => {
  return (
    <div 
      className="absolute left-0 mt-2 w-[600px] max-w-[90vw] rounded py-3 z-50"
      style={{ top: '100%', ...GLASS_DROPDOWN }}
    >
      <div className="grid grid-cols-4 gap-1 px-2">
        {citiesItems.map((slug) => {
          const cityName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          return (
            <a
              key={slug}
              href={`/${slug}-appliance-repair`}
              className="px-3 py-2 text-sm rounded-lg transition-colors hover:bg-white/10"
              style={{ color: '#FFFFFF' }}
              onClick={() => {
                onTrackClick(cityName, 'areas');
                onClose();
              }}
            >
              {cityName}
            </a>
          );
        })}
      </div>
      <div className="border-t border-white/30 mt-2 pt-2 px-3 text-right">
        <button 
          onClick={() => {
            scrollToAnchor('service-area');
            onClose();
          }}
          className="text-sm font-medium hover:underline" 
          style={{ color: '#FF5722' }}
        >
          View service area map →
        </button>
      </div>
    </div>
  );
};

export default AreasDropdownPanel;

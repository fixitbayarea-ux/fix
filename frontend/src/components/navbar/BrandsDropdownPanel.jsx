import React from 'react';

const GLASS_DROPDOWN = {
  background: '#1A2F45',
  
  
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
};

const BrandsDropdownPanel = ({ brandsItems, topBrandLinks, onClose, onTrackClick }) => {
  return (
    <div 
      className="absolute left-0 mt-2 w-[480px] max-w-[90vw] rounded py-3 z-50"
      style={{ top: '100%', ...GLASS_DROPDOWN }}
    >
      <div className="grid grid-cols-3 gap-1 px-2">
        {brandsItems.map((brand) => {
          const href = topBrandLinks[brand] || `/brands`;
          return (
            <a
              key={brand}
              href={href}
              className="block px-3 py-2 text-sm rounded-lg transition-colors hover:bg-white/10"
              style={{ color: '#FFFFFF' }}
              onClick={() => {
                onTrackClick(brand, 'brands');
                onClose();
              }}
            >
              {brand}
            </a>
          );
        })}
      </div>
      <div className="border-t border-white/30 mt-2 pt-2 px-3 text-right">
        <a 
          href="/brands" 
          className="text-sm font-medium hover:underline"
          style={{ color: '#FF5722' }}
          onClick={() => onClose()}
        >
          View all brands →
        </a>
      </div>
    </div>
  );
};

export default BrandsDropdownPanel;

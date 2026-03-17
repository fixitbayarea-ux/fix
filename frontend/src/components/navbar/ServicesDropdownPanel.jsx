import React from 'react';

const GLASS_DROPDOWN = {
  background: '#1A2F45',
  
  
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
};

const ServicesDropdownPanel = ({ servicesItems, maintenanceItems, onClose, onTrackClick }) => {
  return (
    <div 
      className="absolute left-0 mt-2 w-[560px] max-w-[90vw] rounded py-3 z-50"
      style={{ top: '100%', ...GLASS_DROPDOWN }}
    >
      <div className="grid grid-cols-2 gap-x-4 px-3">
        {/* Services column */}
        <div>
          <div className="text-xs uppercase font-semibold mb-2 px-2" style={{ color: '#94A3B8' }}>Services</div>
          {servicesItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="block px-2 py-1.5 text-sm rounded-lg transition-colors hover:bg-white/10"
              style={{ color: '#FFFFFF' }}
              onClick={() => {
                onTrackClick(item.name, 'services');
                onClose();
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Maintenance column */}
        <div>
          <div className="text-xs uppercase font-semibold mb-2 px-2" style={{ color: '#94A3B8' }}>Maintenance</div>
          {maintenanceItems.map((item) => (
            <React.Fragment key={item.path}>
              {item.separator && <div className="border-t border-white/30 my-2" />}
              <a
                href={item.path}
                className="block px-2 py-1.5 text-sm rounded-lg transition-colors hover:bg-white/10"
                style={{ color: '#FFFFFF' }}
                onClick={() => {
                  onTrackClick(item.name, 'maintenance');
                  onClose();
                }}
              >
                {item.name}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdownPanel;

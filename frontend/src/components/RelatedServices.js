import React from 'react';
import { Link } from 'react-router-dom';

const serviceGroups = {
  appliances: [
    { name: 'Refrigerator Repair', path: '/refrigerator-repair' },
    { name: 'Washer Repair', path: '/washer-repair' },
    { name: 'Dryer Repair', path: '/dryer-repair' },
    { name: 'Dishwasher Repair', path: '/dishwasher-repair' },
    { name: 'Oven Repair', path: '/oven-repair' },
    { name: 'Freezer Repair', path: '/freezer-repair' },
    { name: 'Wine Cooler Repair', path: '/wine-cooler-repair' },
    { name: 'Wine Refrigerator Repair', path: '/wine-refrigerator-repair' },
    { name: 'Ice Maker Repair', path: '/ice-maker-repair' },
    { name: 'Cooktop Repair', path: '/cooktop-repair' },
    { name: 'Stove Repair', path: '/stove-repair' },
    { name: 'Range Repair', path: '/range-repair' },
    { name: 'Maintenance Plans', path: '/maintenance' },
  ],
  areas: [
    { name: 'San Francisco', path: '/san-francisco-appliance-repair' },
    { name: 'Daly City', path: '/daly-city-appliance-repair' },
    { name: 'South San Francisco', path: '/south-san-francisco-appliance-repair' },
    { name: 'San Bruno', path: '/san-bruno-appliance-repair' },
    { name: 'Pacifica', path: '/pacifica-appliance-repair' },
    { name: 'Millbrae', path: '/millbrae-appliance-repair' },
    { name: 'San Rafael', path: '/san-rafael-appliance-repair' },
    { name: 'Mill Valley', path: '/mill-valley-appliance-repair' },
    { name: 'Sausalito', path: '/sausalito-appliance-repair' },
    { name: 'Novato', path: '/novato-appliance-repair' },
    { name: 'Corte Madera', path: '/corte-madera-appliance-repair' },
    { name: 'Tiburon', path: '/tiburon-appliance-repair' },
    { name: 'All Service Areas', path: '/service-areas' },
  ],
  brands: [
    { name: 'Samsung Repair', path: '/samsung-appliance-repair' },
    { name: 'LG Repair', path: '/lg-appliance-repair' },
    { name: 'Bosch Repair', path: '/bosch-appliance-repair' },
    { name: 'Sub-Zero Repair', path: '/sub-zero-appliance-repair' },
    { name: 'Viking Repair', path: '/viking-appliance-repair' },
    { name: 'GE Repair', path: '/ge-appliance-repair' },
    { name: 'KitchenAid Repair', path: '/kitchenaid-appliance-repair' },
    { name: 'Whirlpool Repair', path: '/whirlpool-appliance-repair' },
    { name: 'Thermador Repair', path: '/thermador-appliance-repair' },
    { name: 'Miele Repair', path: '/miele-appliance-repair' },
    { name: 'All Brands', path: '/brands' },
  ],
};

const RelatedServices = ({ type = 'appliances', exclude = '' }) => {
  const links = (serviceGroups[type] || serviceGroups.appliances)
    .filter(s => s.path !== exclude);

  const title = type === 'areas' ? 'Nearby Service Areas' : type === 'brands' ? 'Brands We Repair' : 'Related Services';

  return (
    <section data-testid="related-services-section" style={{
      backgroundColor: '#FFF8F5',
      padding: '32px 20px',
      marginTop: '40px',
      borderRadius: '10px',
      border: '1px solid rgba(255,87,34,0.12)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: '#1A3B5D' }}>
          {title}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`related-link-${link.path.slice(1)}`}
              style={{
                padding: '7px 15px',
                background: '#fff',
                borderRadius: 6,
                border: '1px solid #FFE0D3',
                color: '#C0362C',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 500,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C0362C'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#C0362C'; }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;

import React from 'react';

const COMMON_BRANDS = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch',
  'Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','Jenn-Air','Electrolux','Fisher & Paykel'
];

const brandLinkMap = {
  Whirlpool: '/whirlpool-appliance-repair', LG: '/lg-appliance-repair', Samsung: '/samsung-appliance-repair',
  GE: '/ge-appliance-repair', Bosch: '/bosch-appliance-repair', KitchenAid: '/kitchenaid-appliance-repair',
  Maytag: '/maytag-appliance-repair', Frigidaire: '/frigidaire-appliance-repair', Kenmore: '/kenmore-appliance-repair',
  Thermador: '/thermador-appliance-repair', Viking: '/viking-appliance-repair', Miele: '/miele-appliance-repair',
  'Sub-Zero': '/sub-zero-appliance-repair', Wolf: '/wolf-appliance-repair',
  'Jenn-Air': '/brands', Amana: '/brands', Electrolux: '/brands', 'Fisher & Paykel': '/brands',
};

const BRAND_LOGOS = {
  'Amana':'/images/brands/amana.svg','Bosch':'/images/brands/bosch.svg',
  'Electrolux':'/images/brands/electrolux.svg','Fisher & Paykel':'/images/brands/fisher-paykel.svg',
  'Frigidaire':'/images/brands/frigidaire.png','GE':'/images/brands/ge.svg',
  'Jenn-Air':'/images/brands/jenn-air.svg','Kenmore':'/images/brands/kenmore.png',
  'KitchenAid':'/images/brands/kitchenaid.svg','LG':'/images/brands/lg.svg',
  'Maytag':'/images/brands/maytag.svg','Miele':'/images/brands/miele.svg',
  'Samsung':'/images/brands/samsung.svg','Sub-Zero':'/images/brands/sub-zero.svg',
  'Thermador':'/images/brands/thermador.png','Viking':'/images/brands/viking.svg',
  'Whirlpool':'/images/brands/whirlpool.jpg','Wolf':'/images/brands/wolf.svg',
};

const BRAND_LOGO_H = 54;
const BRAND_LOGO_OVERRIDE = { 'Kenmore': 70, 'LG': 70 };

const S_FONT = 'Montserrat, sans-serif';

const BrandsGrid = ({ cityName, testId = 'brands-section' }) => (
  <section data-testid={testId} style={{ background: '#F8F5F0', padding: '60px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>BRANDS WE SERVICE</div>
      <h2 style={{ fontFamily: S_FONT, fontWeight: 800, fontSize: 30, lineHeight: 1.15, color: '#0D1B2A', marginBottom: 28 }}>All Major Brands</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6" style={{ gap: 12 }}>
        {COMMON_BRANDS.map(brand => {
          const link = brandLinkMap[brand];
          const logo = BRAND_LOGOS[brand];
          const cell = (
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 96, transition: 'border-color 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#FF5722'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
              {logo && <img src={logo} alt={`${brand} logo`} style={{ maxHeight: BRAND_LOGO_OVERRIDE[brand] || BRAND_LOGO_H, width: '100%', objectFit: 'contain' }} loading="lazy" />}
            </div>
          );
          return link
            ? <a key={brand} href={link} title={cityName ? `${brand} repair in ${cityName}` : brand} style={{ textDecoration: 'none' }}>{cell}</a>
            : <div key={brand}>{cell}</div>;
        })}
      </div>
    </div>
  </section>
);

export { COMMON_BRANDS, brandLinkMap, BRAND_LOGOS, BRAND_LOGO_H, BRAND_LOGO_OVERRIDE };
export default BrandsGrid;

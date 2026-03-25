import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 6 };

const COMPANY = [
  ['Home', '/'], ['About Us', '/about'], ['Contact', '/contact'], ['Reviews', '/reviews'],
  ['Services', '/services'], ['Service Areas', '/service-areas'], ['All Brands', '/brands'],
  ['Local Appliance Repair', '/local-appliance-repair'], ['Residential Repair', '/residential-appliance-repair'],
  ['Book Online', '/book'], ['Privacy Policy', '/privacy-policy'],
];
const SERVICES = [
  ['Refrigerator Repair', '/refrigerator-repair'], ['Washer Repair', '/washer-repair'],
  ['Dryer Repair', '/dryer-repair'], ['Dishwasher Repair', '/dishwasher-repair'],
  ['Oven Repair', '/oven-repair'], ['Stove Repair', '/stove-repair'],
  ['Range Repair', '/range-repair'], ['Cooktop Repair', '/cooktop-repair'],
  ['Ice Maker Repair', '/ice-maker-repair'], ['Wine Cooler Repair', '/wine-cooler-repair'],
  ['Freezer Repair', '/freezer-repair'], ['Garbage Disposal Repair', '/garbage-disposal-repair'],
];
const COMMERCIAL_FEATURED = ['Commercial Appliance Repair', '/commercial-appliance-repair'];
const COMMERCIAL = [
  ['Commercial Refrigerator', '/commercial-refrigerator-repair'], ['Commercial Dishwasher', '/commercial-dishwasher-repair'],
  ['Commercial Washer', '/commercial-washer-repair'], ['Commercial Dryer', '/commercial-dryer-repair'],
  ['Commercial Oven', '/commercial-oven-repair'],
];
const MAINT_FEATURED = ['Maintenance Home', '/maintenance'];
const MAINTENANCE = [
  ['Refrigerator Maintenance', '/maintenance/refrigerator'], ['Washer Maintenance', '/maintenance/washer'],
  ['Dryer Maintenance', '/maintenance/dryer'], ['Dishwasher Maintenance', '/maintenance/dishwasher'],
  ['Oven & Range Maintenance', '/maintenance/oven-range'], ['Cooktop Maintenance', '/maintenance/cooktop'],
  ['Wine Cooler Maintenance', '/maintenance/wine-cooler'],
];
const BRANDS_FEATURED = ['Browse All Brands', '/brands'];
const BRANDS = [
  ['Whirlpool Repair', '/whirlpool-appliance-repair'], ['LG Repair', '/lg-appliance-repair'],
  ['Samsung Repair', '/samsung-appliance-repair'], ['GE Repair', '/ge-appliance-repair'],
  ['Bosch Repair', '/bosch-appliance-repair'], ['KitchenAid Repair', '/kitchenaid-appliance-repair'],
  ['Maytag Repair', '/maytag-appliance-repair'], ['Frigidaire Repair', '/frigidaire-appliance-repair'],
  ['Kenmore Repair', '/kenmore-appliance-repair'], ['Thermador Repair', '/thermador-appliance-repair'],
  ['Viking Repair', '/viking-appliance-repair'], ['Miele Repair', '/miele-appliance-repair'],
  ['Sub-Zero Repair', '/sub-zero-appliance-repair'], ['Wolf Repair', '/wolf-appliance-repair'],
];
const SF_PEN = [
  ['San Francisco', '/san-francisco-appliance-repair'], ['Daly City', '/daly-city-appliance-repair'],
  ['South San Francisco', '/south-san-francisco-appliance-repair'], ['San Bruno', '/san-bruno-appliance-repair'],
  ['Pacifica', '/pacifica-appliance-repair'], ['Millbrae', '/millbrae-appliance-repair'],
  ['Colma', '/colma-appliance-repair'], ['Brisbane', '/brisbane-appliance-repair'],
  ['Montara', '/montara-appliance-repair'],
];
const MARIN = [
  ['San Rafael', '/san-rafael-appliance-repair'], ['Novato', '/novato-appliance-repair'],
  ['Mill Valley', '/mill-valley-appliance-repair'], ['Sausalito', '/sausalito-appliance-repair'],
  ['Belvedere', '/belvedere-appliance-repair'], ['Tiburon', '/tiburon-appliance-repair'],
  ['Corte Madera', '/corte-madera-appliance-repair'], ['San Quentin', '/san-quentin-appliance-repair'],
  ['Larkspur', '/larkspur-appliance-repair'], ['Greenbrae', '/greenbrae-appliance-repair'],
  ['Ross', '/ross-appliance-repair'], ['Fairfax', '/fairfax-appliance-repair'],
  ['San Anselmo', '/san-anselmo-appliance-repair'],
];
const SF_HOODS = [
  ['Sunset District', '/san-francisco/sunset-district-appliance-repair'],
  ['Richmond District', '/san-francisco/richmond-district-appliance-repair'],
  ['Mission District', '/san-francisco/mission-district-appliance-repair'],
  ['Noe Valley', '/san-francisco/noe-valley-appliance-repair'],
  ['Castro', '/san-francisco/castro-appliance-repair'],
  ['Marina', '/san-francisco/marina-appliance-repair'],
  ['Pacific Heights', '/san-francisco/pacific-heights-appliance-repair'],
  ['Nob Hill', '/san-francisco/nob-hill-appliance-repair'],
  ['North Beach', '/san-francisco/north-beach-appliance-repair'],
  ['SOMA', '/san-francisco/soma-appliance-repair'],
  ['Bernal Heights', '/san-francisco/bernal-heights-appliance-repair'],
  ['Potrero Hill', '/san-francisco/potrero-hill-appliance-repair'],
];
const BLOG_FEATURED = ['Blog Home', '/blog'];
const BLOG = [
  ['Refrigerator Not Cooling', '/blog/refrigerator-not-cooling'],
  ['Dishwasher Maintenance Guide', '/blog/dishwasher-maintenance'],
  ['Repair vs Replace Guide', '/blog/when-to-repair-vs-replace'],
  ['Dryer Taking Too Long', '/blog/dryer-taking-too-long'],
  ['Washer Error Codes', '/blog/washer-error-codes'],
  ['Oven Temperature Calibration', '/blog/oven-temperature-calibration'],
  ['Ice Maker Troubleshooting', '/blog/ice-maker-troubleshooting'],
  ['Appliance Lifespan Guide', '/blog/appliance-lifespan'],
  ['Energy Efficient Appliances', '/blog/energy-efficient-appliances'],
  ['Gas Smell from Stove', '/blog/gas-smell-from-stove'],
  ['Refrigerator Water Filter', '/blog/refrigerator-water-filter'],
  ['Dishwasher Not Draining', '/blog/dishwasher-not-draining'],
];

const LinkCard = ({ text, href }) => (
  <Link to={href} style={{ background: '#fff', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', transition: 'box-shadow 0.2s, background 0.2s' }} className="sm-link" >
    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>&rarr;</span>
    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A' }}>{text}</span>
  </Link>
);

const DarkCard = ({ text, href }) => (
  <Link to={href} style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', borderRadius: 4, padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>&rarr;</span>
    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>{text}</span>
  </Link>
);

const SecHead = ({ icon, eyebrow, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid rgba(255,87,34,0.2)' }}>
    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#FF5722', color: '#fff', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
    <div>
      <div style={EYE}>{eyebrow}</div>
      <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A' }}>{title}</h2>
    </div>
  </div>
);

const Grid = ({ items }) => (
  <div className="sm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
    {items.map(([text, href]) => <LinkCard key={href} text={text} href={href} />)}
  </div>
);

const CityGroup = ({ title, cities }) => (
  <div style={{ background: '#fff', borderRadius: 4, padding: '20px 24px', border: '1px solid rgba(255,87,34,0.15)', borderTop: '3px solid #FF5722' }}>
    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.12em', paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: 12 }}>{title}</p>
    {cities.map(([name, href]) => (
      <Link key={href} to={href} className="city-link" style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.04)', textDecoration: 'none', transition: 'color 0.15s' }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#FF5722', flexShrink: 0 }} />
        <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568' }}>{name}</span>
      </Link>
    ))}
  </div>
);

export default function SiteMapPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Site Map", "item": "https://fixitbay.net/site-map" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Site Map | FixitBay LLC — All Pages"
        description="Complete site map for FixitBay LLC. 100+ pages including appliance repair services, brand pages, Bay Area cities, SF neighborhoods, and blog articles."
        canonical="https://fixitbay.net/site-map"
        noindex={false}
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          @media(max-width:767px){
            .sm-grid{grid-template-columns:1fr 1fr !important}
            .city-grid{grid-template-columns:1fr !important}
          }
          .sm-link:hover{box-shadow:0 2px 8px rgba(0,0,0,0.06) !important;background:rgba(255,87,34,0.02) !important}
          .city-link:hover span{color:#FF5722 !important}
          .phone-cta:hover{background:#FF7043 !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="sitemap-hero" style={{ background: '#0D1B2A', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px', color: '#fff', borderBottom: '3px solid #FF5722', textAlign: 'center' }}>
          <div>
            <div style={EYE}>NAVIGATE THE SITE</div>
            <h1 data-testid="sitemap-title" style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: '#fff', marginBottom: 8 }}>Site Map</h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>Complete directory of all pages on FixitBay.net</p>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
              {[['14', 'Brand Pages'], ['22', 'City Pages'], ['12', 'SF Neighborhoods'], ['12', 'Blog Articles']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#FF5722' }}>{val}</div>
                  <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 2. MAIN CONTENT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>

            {/* A: Company */}
            <div data-testid="section-company">
              <SecHead icon={'\uD83C\uDFE2'} eyebrow="MAIN PAGES" title="Company Pages" />
              <Grid items={COMPANY} />
            </div>

            {/* B: Services */}
            <div data-testid="section-services">
              <SecHead icon={'\uD83D\uDD27'} eyebrow="SERVICES" title="Appliance Repair Services" />
              <Grid items={SERVICES} />
            </div>

            {/* C: Commercial */}
            <div data-testid="section-commercial">
              <SecHead icon={'\uD83C\uDFED'} eyebrow="COMMERCIAL" title="Commercial Appliance Repair" />
              <DarkCard text={COMMERCIAL_FEATURED[0]} href={COMMERCIAL_FEATURED[1]} />
              <Grid items={COMMERCIAL} />
            </div>

            {/* D: Maintenance */}
            <div data-testid="section-maintenance">
              <SecHead icon={'\uD83D\uDEE0\uFE0F'} eyebrow="MAINTENANCE" title="Appliance Maintenance Plans" />
              <DarkCard text={MAINT_FEATURED[0]} href={MAINT_FEATURED[1]} />
              <Grid items={MAINTENANCE} />
            </div>

            {/* E: Brands */}
            <div data-testid="section-brands">
              <SecHead icon={'\u2B50'} eyebrow="BRANDS" title="Repair by Brand" />
              <DarkCard text={BRANDS_FEATURED[0]} href={BRANDS_FEATURED[1]} />
              <Grid items={BRANDS} />
            </div>

            {/* F: Cities */}
            <div data-testid="section-cities">
              <SecHead icon={'\uD83D\uDCCD'} eyebrow="SERVICE AREAS" title="Cities We Serve" />
              <div className="city-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
                <CityGroup title="San Francisco & Peninsula" cities={SF_PEN} />
                <CityGroup title="Marin County" cities={MARIN} />
                <CityGroup title="SF Neighborhoods" cities={SF_HOODS} />
              </div>
            </div>

            {/* G: Blog */}
            <div data-testid="section-blog">
              <SecHead icon={'\uD83D\uDCDD'} eyebrow="BLOG" title="Repair Guides & Resources" />
              <DarkCard text={BLOG_FEATURED[0]} href={BLOG_FEATURED[1]} />
              <Grid items={BLOG} />
            </div>
          </div>
        </section>

        {/* ━━━ 3. BOTTOM CTA ━━━ */}
        <section data-testid="bottom-cta" style={{ background: '#0D1B2A', padding: '48px 24px', textAlign: 'center', borderTop: '3px solid #FF5722' }}>
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Can't Find What You're Looking For?</h2>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>Call us directly or book online.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>(760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">Book Online</a>
          </div>
        </section>

        {/* ━━━ 4. FOOTER ━━━ */}
        <footer data-testid="sitemap-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

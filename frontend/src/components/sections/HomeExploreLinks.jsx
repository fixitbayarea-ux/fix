import React from 'react';

const HomeExploreLinks = () => (
  <nav aria-label="Explore services and areas" style={{ background: 'radial-gradient(ellipse at 20% 50%, #F8F5F0 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #EEF7FC 0%, transparent 50%), #F8F5F0', paddingTop: 36, paddingBottom: 36, borderTop: '1px solid #E5E0DA' }} data-testid="homepage-explore-links">
    <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 24px' }}>
      <div className="text-center" style={{ marginBottom: 20 }}>
        <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>SITEMAP</div>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>Explore Services &amp; Areas</h2>
        <p style={{ fontSize: 15, color: '#4A5568', fontWeight: 500 }}>Browse popular repair services and local service area pages across the Bay Area.</p>
      </div>
      <div className="grid lg:grid-cols-2" style={{ gap: 18 }}>
        {/* Services panel */}
        <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid #E5E2DD' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0D1B2A', marginBottom: 14 }}>Popular Services</h3>
          <div className="flex flex-wrap" style={{ gap: 10 }}>
            {[
              { href: '/refrigerator-repair', label: 'Refrigerator Repair' }, { href: '/washer-repair', label: 'Washer Repair' }, { href: '/dryer-repair', label: 'Dryer Repair' }, { href: '/dishwasher-repair', label: 'Dishwasher Repair San Francisco' }, { href: '/oven-repair', label: 'Oven Repair' }, { href: '/cooktop-repair', label: 'Cooktop Repair' }, { href: '/ice-maker-repair', label: 'Ice Maker Repair' }, { href: '/freezer-repair', label: 'Freezer Repair' }, { href: '/wine-cooler-repair', label: 'Wine Cooler Repair' }, { href: '/garbage-disposal-repair', label: 'Garbage Disposal Repair' }, { href: '/commercial-appliance-repair', label: 'Commercial Repair' }, { href: '/maintenance', label: 'Maintenance' },
            ].map(l => (
              <a key={l.href} href={l.href} className="r2-chip" style={{ fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 4, background: '#fff', border: '1px solid #E5E2DD', color: '#0D1B2A', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{l.label}</a>
            ))}
          </div>
          <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 18, fontSize: 15, fontWeight: 700, color: '#FF5722', textDecoration: 'none', minHeight: 44 }}>View all services &rarr;</a>
        </div>
        {/* Areas panel */}
        <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid #E5E2DD' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0D1B2A', marginBottom: 14 }}>Popular Service Areas</h3>
          <div className="flex flex-wrap" style={{ gap: 10 }}>
            {[
              { href: '/san-francisco-appliance-repair', label: 'San Francisco' }, { href: '/daly-city-appliance-repair', label: 'Daly City' }, { href: '/south-san-francisco-appliance-repair', label: 'South San Francisco' }, { href: '/san-bruno-appliance-repair', label: 'San Bruno' }, { href: '/pacifica-appliance-repair', label: 'Pacifica' }, { href: '/millbrae-appliance-repair', label: 'Millbrae' }, { href: '/san-rafael-appliance-repair', label: 'San Rafael' }, { href: '/mill-valley-appliance-repair', label: 'Mill Valley' }, { href: '/sausalito-appliance-repair', label: 'Sausalito' }, { href: '/novato-appliance-repair', label: 'Novato' },
            ].map(l => (
              <a key={l.href} href={l.href} className="r2-chip" style={{ fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 4, background: '#fff', border: '1px solid #E5E2DD', color: '#0D1B2A', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{l.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 18 }}>
            <a href="/service-areas" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 15, fontWeight: 700, color: '#FF5722', textDecoration: 'none', minHeight: 44 }}>View all service areas &rarr;</a>
            <a href="/marin-county-appliance-repair" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none', minHeight: 44 }}>Marin County Appliance Repair &rarr;</a>
          </div>
          <div style={{ marginTop: 18, borderTop: '1px solid #E5E2DD', paddingTop: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(0,0,0,0.35)', textTransform: 'uppercase' }}>From the Blog</span>
            <div className="flex flex-col" style={{ gap: 6, marginTop: 8 }}>
              <a href="/blog/same-day-appliance-repair-bay-area" style={{ fontSize: 14, fontWeight: 600, color: '#0D1B2A', textDecoration: 'none' }}>Same-Day Appliance Repair Guide &rarr;</a>
              <a href="/blog/appliance-repair-marin-county" style={{ fontSize: 14, fontWeight: 600, color: '#0D1B2A', textDecoration: 'none' }}>Appliance Repair in Marin County &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default HomeExploreLinks;

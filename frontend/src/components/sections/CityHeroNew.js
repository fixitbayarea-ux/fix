import React from 'react';

const S = { font: 'Montserrat, sans-serif' };

const CityHeroNew = ({ bgImage, cityName }) => {
  return (
    <section data-testid="city-hero" style={{ minHeight: 620, position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'center', borderBottom: '1px solid rgba(255,87,34,0.20)' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={bgImage} alt={`${cityName} skyline`} width="1536" height="1024" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
      </div>
      {/* Overlay — dramatic left-to-right fade */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(13,27,42,0.97) 0%, rgba(13,27,42,0.97) 45%, rgba(13,27,42,0.60) 70%, rgba(13,27,42,0.20) 100%)' }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '100%', padding: '80px 40px 80px max(280px, 22vw)', width: '100%' }} className="city-hero-content">
        <div style={{ maxWidth: 580 }}>
          {/* Breadcrumb */}
          <p style={{ fontFamily: S.font, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a> &rarr; <a href="/service-areas" style={{ color: 'inherit', textDecoration: 'none' }}>Service Areas</a> &rarr; {cityName}
          </p>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 36, height: 2, background: '#FF5722', display: 'block', flexShrink: 0 }} />
            <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 11, color: '#FF5722', letterSpacing: '0.22em', textTransform: 'uppercase' }}>APPLIANCE REPAIR &middot; {cityName.toUpperCase()}, CA</span>
          </div>
          {/* H1 */}
          <h1 style={{ fontFamily: S.font, fontWeight: 800, fontSize: 58, color: '#FFFFFF', lineHeight: 1.08, marginTop: 14 }}>Appliance Repair in&nbsp;{cityName}</h1>
          {/* Subtext */}
          <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>Same-day &amp; next-day service &middot; $60 diagnostic &middot; 180-day warranty on all repairs</p>
          {/* Trust row */}
          <div data-testid="city-trust-badges" style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 18, fontFamily: S.font, fontWeight: 500, fontSize: 12 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span> <span style={{ color: 'rgba(255,255,255,0.80)' }}>Licensed CA Technician</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span> <span style={{ color: 'rgba(255,255,255,0.80)' }}>4.9 Google</span></span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span> <span style={{ color: 'rgba(255,255,255,0.80)' }}>License #51001</span></span>
          </div>
          {/* CTAs — side by side */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', marginTop: 28 }}>
            <a href="/book?go=1" data-testid="city-cta-book" style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', background: '#FF5722', color: '#FFFFFF', padding: '16px 32px', borderRadius: 3, textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>Book Repair Online</a>
            <a href="tel:+17605435733" data-testid="city-cta-call" style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', background: 'transparent', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.30)', padding: '16px 28px', borderRadius: 3, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; e.currentTarget.style.color = '#FFFFFF'; }}>Call (760) 543-5733</a>
          </div>
          {/* Stats row — inline with top border */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
            {[{ value: '10+', label: 'Years' }, { value: '180-Day', label: 'Warranty' }, { value: 'Same-Day', label: 'Service' }].map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: S.font, fontWeight: 800, fontSize: 20, color: '#FFFFFF' }}>{stat.value}</span>
                <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 767px) {
          .city-hero-content { padding: 50px 20px !important; }
          .city-hero-content h1 { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
};

export default CityHeroNew;

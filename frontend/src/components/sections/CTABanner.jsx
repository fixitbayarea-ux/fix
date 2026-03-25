import React from 'react';

const S_FONT = 'Montserrat, sans-serif';

const CTABanner = ({ heading, subtext = 'Same-day & next-day appointments available', testId = 'cta-banner' }) => (
  <section data-testid={testId} style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', borderBottom: '3px solid #FF5722', padding: '60px 0', textAlign: 'center' }}>
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontFamily: S_FONT, fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: '#FFFFFF', marginBottom: 12 }}>{heading}</h2>
      <p style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginBottom: 28 }}>{subtext}</p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/book?go=1" data-testid={`${testId}-book`} style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 32px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S_FONT, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR ONLINE</a>
        <a href="tel:+17605435733" data-testid={`${testId}-call`} style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 28px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: '#FFFFFF', fontFamily: S_FONT, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}>CALL (760) 543-5733</a>
      </div>
    </div>
  </section>
);

export default CTABanner;

import React from 'react';

const F = 'Montserrat, sans-serif';

const PricingCards = ({ testId = 'pricing' }) => (
  <section data-testid={testId} className="bg-navy-mid section-pad">
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 10 }}>TRANSPARENT PRICING</div>
      <h2 style={{ fontFamily: F, fontWeight: 800, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>No Surprises. Ever.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 20 }}>
        <div style={{ border: '2px solid #FF5722', background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '32px 24px', position: 'relative' }}>
          <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#FF5722', color: '#FFF', fontFamily: F, fontWeight: 700, fontSize: 10, textTransform: 'uppercase', borderRadius: 2, padding: '3px 10px', whiteSpace: 'nowrap' }}>MOST ASKED</span>
          <div style={{ fontFamily: F, fontWeight: 800, fontSize: 52, color: '#FF5722', marginBottom: 8 }}>$60</div>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#FFF', marginBottom: 8 }}>Diagnostic Fee</div>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Applied toward repair if you proceed</p>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
          <div style={{ fontFamily: F, fontWeight: 800, fontSize: 52, color: '#FFF', marginBottom: 8 }}>180<span style={{ color: '#FF5722' }}>-Day</span></div>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#FFF', marginBottom: 8 }}>Warranty</div>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>On parts &amp; labor. Same issue returns — we fix it at no charge</p>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
          <div style={{ fontFamily: F, fontWeight: 800, fontSize: 52, color: '#FFF', marginBottom: 8 }}>$0</div>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#FFF', marginBottom: 8 }}>Hidden Fees</div>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>No trip charges. No after-hours surcharges</p>
        </div>
      </div>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.30)', fontStyle: 'italic', marginTop: 24 }}>Typical repairs range $250–$650 after diagnosis</p>
    </div>
  </section>
);

export default PricingCards;

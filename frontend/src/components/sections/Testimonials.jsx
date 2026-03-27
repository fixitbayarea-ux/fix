import React from 'react';
import { Star } from 'lucide-react';

const F = 'Montserrat, sans-serif';

const Testimonials = ({ testimonials, testId = 'testimonials' }) => {
  if (!testimonials?.length) return null;
  return (
    <section data-testid={testId} className="bg-navy section-pad">
      <div className="section-container">
        <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 10 }}>WHAT CLIENTS SAY</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>Real People. Real Repairs.</h2>
        <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: 24 }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} style={{ fill: '#FFB800', color: '#FFB800' }} />
                ))}
              </div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.80)', lineHeight: 1.70, marginBottom: 14 }}>"{t.text}"</p>
              <div>
                <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FFF' }}>{t.name}</div>
                <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#FF5722' }}>{t.area}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
          <a href="https://www.google.com/maps/place/FixitBay LLC+Appliance+Repair" target="_blank" rel="noopener noreferrer" data-testid="reviews-google" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F, fontWeight: 600, fontSize: 13, color: '#FFF', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 20px' }} aria-label="Read Google Reviews (opens in new tab)">
            <Star size={14} style={{ fill: '#FFB800', color: '#FFB800' }} /> Read Google Reviews
          </a>
          <a href="https://www.thumbtack.com/ca/san-francisco/appliance-repair/fixitbay" target="_blank" rel="noopener noreferrer" data-testid="reviews-thumbtack" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F, fontWeight: 600, fontSize: 13, color: '#FFF', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 20px' }} aria-label="Read Thumbtack Reviews (opens in new tab)">
            <Star size={14} style={{ fill: '#FFB800', color: '#FFB800' }} /> Read Thumbtack Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

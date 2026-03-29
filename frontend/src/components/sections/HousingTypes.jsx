import React from 'react';

const F = 'Montserrat, sans-serif';

const HousingTypes = ({ cityName, housingTypes, testId = 'housing' }) => {
  if (!housingTypes?.length) return null;
  return (
    <section data-testid={testId} className="bg-navy section-pad">
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div className="eyebrow">LOCAL EXPERTISE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, color: '#FFFFFF', marginTop: 10, marginBottom: 28 }}>We Know {cityName} Homes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {housingTypes.map((h, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: 24, transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,87,34,0.40)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#FFF', marginBottom: 8 }}>{h.type}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.60)', lineHeight: 1.70, marginBottom: 10 }}>{h.desc}</p>
              <div style={{ fontFamily: F, fontWeight: 500, fontSize: 11, color: '#FF5722', letterSpacing: '0.06em' }}>{h.areas}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousingTypes;

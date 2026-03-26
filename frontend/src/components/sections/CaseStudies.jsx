import React from 'react';

const F = 'Montserrat, sans-serif';

const CaseStudies = ({ cityName, caseStudies, testId = 'case-studies' }) => {
  if (!caseStudies?.length) return null;
  return (
    <section data-testid={testId} className="bg-cream section-pad">
      <div className="section-container">
        <div className="eyebrow">RECENT WORK</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, color: '#0D1B2A', marginTop: 10, marginBottom: 28 }}>Recent Repairs in {cityName}</h2>
        <div className="grid md:grid-cols-3" style={{ gap: 16 }}>
          {caseStudies.map((cs, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: 24 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,87,34,0.08)', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 11, textTransform: 'uppercase', padding: '3px 10px', borderRadius: 2, marginBottom: 12 }}>{cs.appliance}</span>
              <div style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: '#FF5722', marginBottom: 6 }}>{cs.neighborhood}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginBottom: 0 }}>{cs.issue}</p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 12, marginTop: 12 }}>
                <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: '#4A5568' }}>{cs.timeframe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

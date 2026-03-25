import React, { useState } from 'react';

const S_FONT = 'Montserrat, sans-serif';

const FAQAccordion = ({ faqs, background = '#F8F5F0', testIdPrefix = 'faq' }) => {
  const [openIdx, setOpenIdx] = useState(null);
  if (!faqs?.length) return null;

  return (
    <section data-testid={`${testIdPrefix}-section`} style={{ background, padding: '70px 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>FAQ</div>
        <h2 style={{ fontFamily: S_FONT, fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: '#0D1B2A', marginBottom: 32 }}>Quick Answers</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.09)', padding: '22px 0' }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              data-testid={`${testIdPrefix}-q-${i}`}
              style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: S_FONT, fontSize: 15, fontWeight: 600, color: '#0D1B2A', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, minHeight: 48 }}
              aria-expanded={openIdx === i}
              aria-controls={`${testIdPrefix}-panel-${i}`}
            >
              <span style={{ paddingRight: 16 }}>{faq.question}</span>
              <span style={{ fontFamily: S_FONT, fontSize: 22, color: '#FF5722', flexShrink: 0 }}>{openIdx === i ? '\u00D7' : '+'}</span>
            </button>
            <div id={`${testIdPrefix}-panel-${i}`} role="region" style={{ maxHeight: openIdx === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
              <div style={{ fontFamily: S_FONT, fontSize: 14, lineHeight: 1.7, color: '#4A5568', paddingTop: 14, borderLeft: '2px solid #FF5722', paddingLeft: 16 }}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;

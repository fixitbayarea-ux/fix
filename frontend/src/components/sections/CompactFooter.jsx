import React from 'react';

const S_FONT = 'Montserrat, sans-serif';

const CompactFooter = ({ testId = 'compact-footer' }) => (
  <footer data-testid={testId} style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '24px 40px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="/navbar-logo-new.png" alt="FixitBay" style={{ height: 36, width: 36, borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <span style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 14, color: '#FFFFFF', display: 'block' }}>FixitBay LLC</span>
          <span style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>Appliance Repair &amp; Maintenance</span>
        </div>
      </div>
      <a href="tel:+17605435733" style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 18, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
      <span style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.30)' }}>&copy; 2026 FixitBay LLC</span>
    </div>
  </footer>
);

export default CompactFooter;

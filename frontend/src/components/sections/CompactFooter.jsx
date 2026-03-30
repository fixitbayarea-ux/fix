import React from 'react';
import { Phone } from 'lucide-react';

const F = 'Montserrat, sans-serif';

const CompactFooter = ({ testId = 'compact-footer' }) => (
  <footer data-testid={testId} className="compact-footer">
    <div className="compact-ftr-inner">
      <div className="compact-ftr-brand">
        <img src="/navbar-logo-new.png" alt="FixitBay" width="36" height="36" loading="lazy" style={{ borderRadius: 4 }} />
        <div>
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FFFFFF', display: 'block', lineHeight: 1.2 }}>FixitBay LLC</span>
          <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>Appliance Repair &amp; Maintenance</span>
        </div>
      </div>
      <a href="tel:+17605435733" className="compact-ftr-phone" data-testid="compact-footer-phone">
        <Phone size={16} color="#FF5722" />
        <span>(760) 543-5733</span>
      </a>
      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>&copy; 2026 FixitBay LLC</span>
    </div>
    <style>{`
      .compact-footer {
        background: #0D1B2A;
        border-top: 2px solid #FF5722;
        padding: 24px;
      }
      .compact-ftr-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
      }
      .compact-ftr-brand {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .compact-ftr-phone {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: ${F};
        font-weight: 600;
        font-size: 15px;
        color: #FFFFFF;
        text-decoration: none;
      }
      @media (max-width: 599px) {
        .compact-ftr-inner {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center;
        }
      }
    `}</style>
  </footer>
);

export default CompactFooter;

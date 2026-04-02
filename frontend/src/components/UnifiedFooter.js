import React, { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import navbarLogo from '../assets/navbar-logo-new-112.webp';
import googleIcon from '../assets/icons/google.svg';
import nextdoorIcon from '../assets/icons/nextdoor.svg';
import facebookIcon from '../assets/icons/facebook.svg';

const F = 'Montserrat, sans-serif';
const PHONE = '(760) 543-5733';
const PHONE_TEL = '+17605435733';

const servicesLinks = [
  { href: '/refrigerator-repair', label: 'Refrigerator Repair' },
  { href: '/washer-repair', label: 'Washer Repair' },
  { href: '/dryer-repair', label: 'Dryer Repair' },
  { href: '/dishwasher-repair', label: 'Dishwasher Repair' },
  { href: '/oven-repair', label: 'Oven Repair' },
  { href: '/cooktop-repair', label: 'Cooktop Repair' },
];

const areasLinks = [
  { href: '/san-francisco-appliance-repair', label: 'San Francisco' },
  { href: '/daly-city-appliance-repair', label: 'Daly City' },
  { href: '/south-san-francisco-appliance-repair', label: 'South SF' },
  { href: '/san-bruno-appliance-repair', label: 'San Bruno' },
  { href: '/mill-valley-appliance-repair', label: 'Mill Valley' },
  { href: '/san-rafael-appliance-repair', label: 'San Rafael' },
];

const maintenanceLinks = [
  { href: '/maintenance/refrigerator', label: 'Refrigerator' },
  { href: '/maintenance/washer', label: 'Washer' },
  { href: '/maintenance/dryer', label: 'Dryer' },
  { href: '/maintenance/oven-range', label: 'Oven & Range' },
  { href: '/maintenance/wine-cooler', label: 'Wine Cooler' },
];

const socials = [
  { icon: googleIcon, label: 'Google', href: 'https://share.google/Q48c6OXAIB7u60fNv' },
  { icon: nextdoorIcon, label: 'Nextdoor', href: 'https://nextdoor.com/page/fixitbay-san-francisco-ca/' },
  { icon: facebookIcon, label: 'Facebook', href: 'https://www.facebook.com/fixitbay' },
];

const FooterAccordion = ({ title, links, moreHref, moreLabel }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer-col-nav">
      {/* Desktop */}
      <div className="ftr-desk">
        <h4 className="ftr-col-title">{title}</h4>
        <ul className="ftr-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="ftr-link">{l.label}</a></li>
          ))}
          {moreHref && (
            <li><a href={moreHref} className="ftr-link ftr-link-more">{moreLabel}</a></li>
          )}
        </ul>
      </div>
      {/* Mobile */}
      <div className="ftr-mob">
        <button
          onClick={() => setOpen(!open)}
          data-testid={`footer-accordion-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="ftr-acc-btn"
        >
          {title}
          <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
        </button>
        <div className="ftr-acc-body" style={{ maxHeight: open ? 500 : 0 }}>
          <ul className="ftr-links" style={{ paddingTop: 8 }}>
            {links.map(l => (
              <li key={l.href}><a href={l.href} className="ftr-link">{l.label}</a></li>
            ))}
            {moreHref && (
              <li><a href={moreHref} className="ftr-link ftr-link-more">{moreLabel}</a></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const UnifiedFooter = () => (
  <footer data-testid="unified-footer" className="unified-footer">
    <div className="ftr-top-line" />
    <div className="ftr-inner">
      <div className="ftr-grid">
        {/* Col 1 — Brand */}
        <div className="ftr-brand" data-testid="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src={navbarLogo} alt="FixitBay LLC" width="44" height="44" loading="lazy" style={{ borderRadius: 4 }} />
            <div>
              <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>FixitBay LLC</p>
              <p style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>Appliance Repair &amp; Maintenance</p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 220, marginBottom: 16 }}>
            Bay Area's trusted appliance repair service.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF5722" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginLeft: 4 }}>4.9 &middot; 95 Reviews</span>
          </div>
          <div className="ftr-license-badge" data-testid="footer-license">
            Licensed &amp; Insured &middot; #51001
          </div>
        </div>

        {/* Col 2 — Services */}
        <FooterAccordion title="Services" links={servicesLinks} moreHref="/services" moreLabel="+ more &rarr;" />

        {/* Col 3 — Maintenance */}
        <FooterAccordion title="Maintenance" links={maintenanceLinks} moreHref="/maintenance" moreLabel="All maintenance &rarr;" />

        {/* Col 4 — Service Areas */}
        <FooterAccordion title="Service Areas" links={areasLinks} moreHref="/service-areas" moreLabel="+ more &rarr;" />

        {/* Col 4 — Contact */}
        <div className="ftr-contact" data-testid="footer-contact">
          <div className="ftr-desk">
            <h4 className="ftr-col-title">Contact</h4>
          </div>
          <div className="ftr-mob ftr-mob-contact-title" style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>Contact</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
            <a href={`tel:${PHONE_TEL}`} data-testid="footer-phone" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <Phone size={16} color="#FF5722" />
              <span style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF' }}>{PHONE}</span>
            </a>
            <a href="mailto:info@fixitbay.net" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <Mail size={16} color="#FF5722" />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>info@fixitbay.net</span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in new tab)`} className="ftr-social-icon" data-testid={`footer-social-${s.label.toLowerCase()}`}>
                <img src={s.icon} alt="" width="16" height="16" style={{ opacity: 0.6 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="ftr-bottom" data-testid="footer-bottom">
      <div className="ftr-bottom-inner">
        <p>&copy; 2026 FixitBay LLC &middot; All rights reserved</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <a href="/privacy-policy" className="ftr-legal-link">Privacy Policy</a>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>&middot;</span>
          <a href="/terms" className="ftr-legal-link">Terms of Service</a>
        </div>
      </div>
    </div>

    <style>{`
      .unified-footer { background: #0D1B2A; font-family: ${F}; }
      .ftr-top-line { height: 1px; background: rgba(255,87,34,0.3); }
      .ftr-inner { max-width: 1200px; margin: 0 auto; padding: 64px 24px 48px; }
      .ftr-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 40px; }
      .ftr-col-title { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FF5722; margin-bottom: 20px; }
      .ftr-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
      .ftr-link { color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 500; text-decoration: none; line-height: 2.2; transition: color 0.2s; display: block; }
      .ftr-link-more { color: #FF5722; font-weight: 600; }
      .ftr-license-badge { display: inline-flex; background: rgba(255,87,34,0.12); border: 1px solid rgba(255,87,34,0.3); border-radius: 6px; padding: 6px 12px; font-size: 12px; color: #FF5722; font-weight: 600; }
      .ftr-social-icon { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; transition: background 0.2s, border-color 0.2s; }
      .ftr-bottom { border-top: 1px solid rgba(255,255,255,0.08); }
      .ftr-bottom-inner { max-width: 1200px; margin: 0 auto; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: rgba(255,255,255,0.4); flex-wrap: wrap; gap: 8px; }
      .ftr-legal-link { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; font-size: 13px; min-height: 44px; display: inline-flex; align-items: center; }
      .ftr-acc-btn { font-family: ${F}; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.5); padding: 14px 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
      .ftr-acc-body { overflow: hidden; transition: max-height 0.3s ease; }

      /* Desktop */
      .ftr-desk { display: block; }
      .ftr-mob { display: none; }

      @media (hover: hover) and (pointer: fine) {
        .ftr-link:hover { color: #FFFFFF !important; }
        .ftr-link-more:hover { color: #FF7043 !important; }
        .ftr-social-icon:hover { background: #FF5722 !important; border-color: #FF5722 !important; }
        .ftr-social-icon:hover img { opacity: 1 !important; filter: brightness(10); }
        .ftr-legal-link:hover { color: rgba(255,255,255,0.7) !important; }
      }

      @media (max-width: 1023px) {
        .ftr-grid { grid-template-columns: 1fr 1fr; gap: 32px 40px; }
        .ftr-desk { display: none !important; }
        .ftr-mob { display: block !important; }
        .ftr-contact .ftr-mob-contact-title { display: block !important; }
      }

      @media (max-width: 599px) {
        .ftr-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        .ftr-brand { padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ftr-contact { padding-top: 8px; }
        .ftr-bottom-inner { justify-content: center !important; text-align: center; flex-direction: column; align-items: center; }
      }
    `}</style>
  </footer>
);

export default UnifiedFooter;

import React, { useState } from 'react';
import { Phone, Clock, MapPin, ShieldCheck, ChevronDown } from 'lucide-react';
import navbarLogo from '../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const PHONE = '(760) 543-5733';

const servicesLinks = [
  { href: '/refrigerator-repair', label: 'Refrigerator Repair' },
  { href: '/washer-repair', label: 'Washer Repair' },
  { href: '/dryer-repair', label: 'Dryer Repair' },
  { href: '/dishwasher-repair', label: 'Dishwasher Repair' },
  { href: '/oven-repair', label: 'Oven Repair' },
  { href: '/cooktop-repair', label: 'Cooktop Repair' },
  { href: '/ice-maker-repair', label: 'Ice Maker Repair' },
  { href: '/wine-cooler-repair', label: 'Wine Cooler Repair' },
  { href: '/commercial-appliance-repair', label: 'Commercial Repair' },
];

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/brands', label: 'Brands We Repair' },
  { href: '/book?go=1', label: 'Book Online' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog & Tips' },
];

const FooterAccordion = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer-accordion-section">
      {/* Desktop: always visible */}
      <div className="hidden md:block">
        <h4 style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 18 }}>{title}</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="ftr-link" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center' }}>{l.label}</a></li>
          ))}
        </ul>
      </div>
      {/* Mobile: accordion */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          data-testid={`footer-accordion-${title.toLowerCase()}`}
          style={{
            fontFamily: F, fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.5)', padding: '14px 0',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            cursor: 'pointer', width: '100%', background: 'transparent', border: 'none',
            borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: 'rgba(255,255,255,0.08)',
          }}
        >
          {title}
          <ChevronDown
            size={16}
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              color: 'rgba(255,255,255,0.5)',
              flexShrink: 0,
            }}
          />
        </button>
        <div style={{
          maxHeight: open ? 500 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}>
          <ul style={{ listStyle: 'none', padding: '8px 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="ftr-link" style={{
                  color: 'rgba(255,255,255,0.65)', fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', padding: '8px 0', minHeight: 44,
                  display: 'flex', alignItems: 'center',
                }}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const UnifiedFooter = () => (
  <footer style={{ background: '#0D1B2A', fontFamily: F }}>
    <div style={{ height: 1, background: 'rgba(255,87,34,0.2)' }} />
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '76px 32px 56px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 44 }}>

        {/* Col 1 — Brand (always visible) */}
        <div>
          <div className="flex items-center" style={{ gap: 14, marginBottom: 18 }}>
            <img src={navbarLogo} alt="FixitBay" width="56" height="56" loading="lazy" style={{ borderRadius: 4 }} />
            <div>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>FixitBay LLC</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}>Appliance Repair &amp; Maintenance</p>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: 22, fontWeight: 500 }}>
            Licensed in-home appliance repair for San Francisco, the Peninsula, and Marin County.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+17605435733" className="flex items-center" style={{ gap: 10, color: '#FF5722', fontSize: 20, fontWeight: 700, textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} data-testid="footer-phone">
              <Phone size={20} style={{ color: '#FF5722' }} /> {PHONE}
            </a>
            <div className="flex items-start" style={{ gap: 10 }}>
              <Clock size={16} style={{ color: '#FF5722', flexShrink: 0, marginTop: 3 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500 }}>Mon&ndash;Fri: 8 AM &ndash; 6 PM</span>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500 }}>Sat: 8 AM &ndash; 3 PM</span>
              </div>
            </div>
            <div className="flex items-start" style={{ gap: 10 }}>
              <MapPin size={16} style={{ color: '#FF5722', flexShrink: 0, marginTop: 3 }} />
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500 }}>1549 Franklin St, Unit A, San Francisco, CA 94109</span>
            </div>
          </div>
        </div>

        {/* Col 2 — Services (accordion on mobile) */}
        <FooterAccordion title="Services" links={servicesLinks} />

        {/* Col 3 — Company (accordion on mobile) */}
        <FooterAccordion title="Company" links={companyLinks} />

        {/* Col 4 — Trust + CTA (always visible) */}
        <div>
          <div style={{ background: '#1A2F45', borderRadius: 4, padding: 32, border: '1px solid rgba(255,87,34,0.25)', marginBottom: 22 }}>
            <h4 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}><ShieldCheck size={18} style={{ color: '#FF5722' }} /> Licensed &amp; Trusted</h4>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginBottom: 6 }}>California Major Appliance Technician</p>
            <p style={{ fontFamily: F, fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>License #51001</p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontWeight: 500 }}>Licensed by the Bureau of Household Goods and Services</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="/book?go=1" data-testid="footer-book-cta" className="ftr-cta-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 52, borderRadius: 4, background: '#FF5722', color: '#fff', fontSize: 16, fontWeight: 800, textDecoration: 'none' }}>Book Service</a>
            <div className="flex" style={{ gap: 10 }}>
              <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" className="ftr-cta-outline" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 44, borderRadius: 4, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Google</a>
              <a href="https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644" target="_blank" rel="noopener noreferrer" className="ftr-cta-outline" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 44, borderRadius: 4, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Thumbtack</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Legal bar */}
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <p style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.30)', fontWeight: 400 }}>&copy; 2026 FixitBay LLC. All rights reserved.</p>
        <a href="/privacy-policy" style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.30)', fontWeight: 400, textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Privacy Policy</a>
      </div>
    </div>

    <style>{`
      @media (hover: hover) and (pointer: fine) {
        .ftr-link:hover { color: #FF5722 !important; }
        .ftr-cta-primary:hover { background: #FF7043 !important; }
        .ftr-cta-outline:hover { border-color: rgba(255,255,255,0.45) !important; color: #fff !important; }
      }
      @media (max-width: 767px) {
        footer [data-testid="footer-phone"] { font-size: 22px !important; justify-content: center; }
        footer .ftr-cta-primary { width: 100% !important; }
        footer > div:last-child { padding-bottom: 90px !important; }
        footer > div:last-child > div { justify-content: center !important; text-align: center; flex-direction: column; align-items: center; }
      }
    `}</style>
  </footer>
);

export default UnifiedFooter;

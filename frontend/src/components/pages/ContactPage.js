import React, { useState, useEffect, useMemo } from 'react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import googleIcon from '../../assets/icons/google.svg';
import thumbtackIcon from '../../assets/icons/thumbtack.svg';
import nextdoorIcon from '../../assets/icons/nextdoor.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

const SOCIAL_LINKS = [
  { icon: googleIcon, label: 'Google Reviews', href: 'https://share.google/Q48c6OXAIB7u60fNv' },
  { icon: facebookIcon, label: 'Facebook', href: 'https://www.facebook.com/fixitbay' },
  { icon: thumbtackIcon, label: 'Thumbtack', href: 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644' },
  { icon: nextdoorIcon, label: 'Nextdoor', href: 'https://nextdoor.com/page/fixitbay-san-francisco-ca/' },
];

const STEPS = [
  { num: '1', title: 'You Call or Book', body: 'Call (760) 543-5733 or book online. Tell us your appliance and the issue.' },
  { num: '2', title: 'We Confirm Same Day', body: 'We confirm your appointment window — usually same-day or next morning.' },
  { num: '3', title: 'Tech Arrives On Time', body: 'Licensed technician arrives with parts for most common repairs.' },
  { num: '4', title: 'Fixed with Warranty', body: 'Repair completed with a 180-day warranty on parts and labor.' },
];

const APPLIANCE_TYPES = ['Refrigerator', 'Washer', 'Dryer', 'Dishwasher', 'Oven', 'Other'];

const INPUT_STYLE = {
  fontFamily: F,
  fontSize: 16,
  minHeight: 44,
  borderRadius: 4,
  border: '1px solid rgba(255,87,34,0.2)',
  padding: '10px 14px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  color: '#1A1A1A',
  background: '#fff',
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', appliance: 'Refrigerator', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const contactSchemas = useMemo(() => [
    {
      id: 'contact-local-business',
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FixitBay LLC",
        "telephone": "+17605435733",
        "email": "info@fixitbay.net",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1549 Franklin Street, Unit A",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94109",
          "addressCountry": "US"
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "15:00" }
        ],
        "areaServed": ["San Francisco", "Marin County", "San Francisco Peninsula"]
      }
    },
    {
      id: 'contact-breadcrumb',
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://fixitbay.net/contact" }
        ]
      }
    }
  ], []);

  useSchemas(contactSchemas);

  return (
    <>
      <SEOMetaTags
        title="Contact FixitBay LLC | Appliance Repair San Francisco"
        description="Contact FixitBay LLC for same-day appliance repair in San Francisco Bay Area. Call (760) 543-5733 or book online. Licensed technicians, $60 diagnostic, 180-day warranty."
        canonical="https://fixitbay.net/contact"
      />

      <div style={{ fontFamily: F }}>
        <style>{`
          .contact-h1{font-size:48px !important}
          @media(max-width:767px){
            .contact-h1{font-size:30px !important}
            .qbar-row{flex-direction:column !important}
            .qbar-item{border-right:none !important;padding:12px 0 !important;border-bottom:1px solid rgba(255,255,255,0.2)}
            .qbar-item:last-child{border-bottom:none}
            .contact-main-grid{grid-template-columns:1fr !important}
            .info-cards-grid{grid-template-columns:1fr !important}
            .steps-row{grid-template-columns:1fr 1fr !important}
            .step-connector{display:none !important}
          }
          @media(max-width:480px){
            .steps-row{grid-template-columns:1fr !important}
          }
          .hero-cta:hover{opacity:0.92}
          .social-circle:hover{background:#FF5722 !important;border-color:#FF5722 !important}
          .social-sq:hover{background:#FF5722 !important;border-color:#FF5722 !important}
          .social-sq:hover img{filter:brightness(10) !important}
          .social-circle:hover img{filter:brightness(10) !important}
          .info-card:hover{box-shadow:0 4px 20px rgba(255,87,34,0.1) !important}
          .sms-btn:hover{background:#FF5722 !important}
          .final-primary:hover{background:#FF7043 !important}
          .final-secondary:hover{background:rgba(255,255,255,0.08) !important}
          .phone-link:hover{color:#FF5722 !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="contact-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 440, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 60px', color: '#fff' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Contact Us</span>
            </nav>
            <div style={EYE}>GET IN TOUCH &mdash; BAY AREA</div>
            <h1 className="contact-h1" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 600, margin: '0 auto 16px' }}>
              Contact FixitBay LLC
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.78)', maxWidth: 500, margin: '0 auto 32px' }}>
              Need fast, reliable appliance repair? Same-day or next-day service available in San Francisco, Marin County &amp; Peninsula.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:+17605435733" data-testid="hero-call-btn" className="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
                Call (760) 543-5733
              </a>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="hero-book-btn" className="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', border: '2px solid #fff', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                Book Online Now
              </a>
            </div>
            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 28 }}>
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="social-circle" data-testid={`hero-social-${s.label.toLowerCase().replace(/\s+/g,'-')}`} style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} aria-label="opens in new tab">
                  <img src={s.icon} alt={s.label} style={{ width: 16, height: 16, filter: 'brightness(10)' }} />
                </a>
              ))}
            </div>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>Follow us &amp; read our reviews</p>
          </div>
        </section>

        {/* ━━━ 2. QUICK CONTACT BAR ━━━ */}
        <section data-testid="contact-quick-bar" style={{ background: '#FF5722', padding: '20px 24px' }}>
          <div className="qbar-row" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 0 }}>
            <div className="qbar-item" style={{ padding: '0 40px', borderRight: '1px solid rgba(255,255,255,0.25)', textAlign: 'center' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>CALL US</div>
              <a href="tel:+17605435733" data-testid="qbar-phone" style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', textDecoration: 'none' }}>(760) 543-5733</a>
            </div>
            <div className="qbar-item" style={{ padding: '0 40px', borderRight: '1px solid rgba(255,255,255,0.25)', textAlign: 'center' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>EMAIL US</div>
              <a href="mailto:info@fixitbay.net" data-testid="qbar-email" style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', textDecoration: 'none' }}>info@fixitbay.net</a>
            </div>
            <div className="qbar-item" style={{ padding: '0 40px', textAlign: 'center' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>HOURS</div>
              <span style={{ fontFamily: F, fontWeight: 600, fontSize: 15, color: '#fff' }}>Mon&ndash;Fri 8AM&ndash;6PM &middot; Sat 8AM&ndash;3PM</span>
            </div>
          </div>
        </section>

        {/* ━━━ 3. MAIN CONTACT SECTION ━━━ */}
        <section data-testid="contact-main" style={{ background: '#F8F5F0', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>HOW TO REACH US</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 6 }}>We're Ready to Help</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 40 }}>Contact us by phone, email, or book online — we respond same day.</p>

            <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: 24 }}>
              {/* LEFT — Info Cards */}
              <div className="info-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Phone */}
                <div className="info-card" data-testid="card-phone" style={{ background: '#fff', borderRadius: 4, padding: '24px 20px', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', transition: 'box-shadow 0.2s' }}>
                  <div style={EYE}>PHONE</div>
                  <a href="tel:+17605435733" className="phone-link" style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', textDecoration: 'none', display: 'block', marginBottom: 6, transition: 'color 0.2s' }}>(760) 543-5733</a>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Call for same-day appointments</p>
                </div>
                {/* Email */}
                <div className="info-card" data-testid="card-email" style={{ background: '#fff', borderRadius: 4, padding: '24px 20px', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', transition: 'box-shadow 0.2s' }}>
                  <div style={EYE}>EMAIL</div>
                  <a href="mailto:info@fixitbay.net" style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722', textDecoration: 'none', display: 'block', marginBottom: 6 }}>info@fixitbay.net</a>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>We reply within 2 hours</p>
                </div>
                {/* Address */}
                <div className="info-card" data-testid="card-address" style={{ background: '#fff', borderRadius: 4, padding: '24px 20px', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', transition: 'box-shadow 0.2s' }}>
                  <div style={EYE}>MAILING ADDRESS</div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>1549 Franklin Street, Unit A</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 8 }}>San Francisco, CA 94109</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#FF5722', fontStyle: 'italic' }}>Field service only — we come to you. This address is for mail only.</p>
                </div>
                {/* Hours */}
                <div className="info-card" data-testid="card-hours" style={{ background: '#fff', borderRadius: 4, padding: '24px 20px', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', transition: 'box-shadow 0.2s' }}>
                  <div style={EYE}>HOURS</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>Monday &ndash; Friday</span>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>8:00 AM &ndash; 6:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>Saturday</span>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>8:00 AM &ndash; 3:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>Sunday</span>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#4A5568' }}>Closed</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Service Area + Social */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 32, border: '1px solid rgba(255,87,34,0.15)' }}>
                <div style={EYE}>SERVICE AREA</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', marginBottom: 12 }}>We Come to You</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7, marginBottom: 0 }}>
                  Contact FixitBay LLC today for same-day or next-day service. Our licensed and insured technicians are ready to fix your refrigerator, washer, dryer, dishwasher, oven, and other appliances with a comprehensive 180-day warranty on all repairs.
                </p>
                <div style={{ height: 1, background: 'rgba(255,87,34,0.15)', margin: '20px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['San Francisco', 'Peninsula (Daly City to Millbrae)', 'Marin County (San Rafael, Novato, Mill Valley, Sausalito, and more)'].map(area => (
                    <div key={area} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{area}</span>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'rgba(255,87,34,0.15)', margin: '20px 0' }} />
                <div style={EYE}>SERVICE MAP</div>
                <div data-testid="service-area-map" style={{ borderRadius: 4, overflow: 'hidden', marginBottom: 16, border: '1px solid rgba(255,87,34,0.15)' }}>
                  <iframe
                    title="FixitBay LLC Service Area — San Francisco Bay Area"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d201879.72384241942!2d-122.47858865!3d37.7577627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="200"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div style={{ height: 1, background: 'rgba(255,87,34,0.15)', margin: '20px 0' }} />
                <div style={EYE}>FIND US ONLINE</div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                  {SOCIAL_LINKS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="social-sq" data-testid={`social-${s.label.toLowerCase().replace(/\s+/g,'-')}`} style={{ width: 44, height: 44, borderRadius: 4, background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} aria-label="opens in new tab">
                      <img src={s.icon} alt={s.label} style={{ width: 18, height: 18, transition: 'filter 0.2s' }} />
                    </a>
                  ))}
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', marginTop: 8 }}>Read our reviews and follow us</p>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 4. WHY CALL US — STEPS ━━━ */}
        <section data-testid="contact-steps" style={{ background: '#0D1B2A', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>BEFORE YOU CALL</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', marginBottom: 40 }}>What to Expect When You Contact Us</h2>
            <div className="steps-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
              {/* Connector line (desktop) */}
              <div className="step-connector" style={{ position: 'absolute', top: 24, left: 'calc(12.5% + 24px)', right: 'calc(12.5% + 24px)', height: 0, borderTop: '1px dashed rgba(255,87,34,0.3)', zIndex: 0 }} />
              {STEPS.map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: 24, position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', border: '2px solid #FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#FF5722' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 5. TEXT US ━━━ */}
        <section data-testid="contact-text" style={{ background: '#F8F5F0', padding: '48px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={EYE}>QUICK OPTION</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8 }}>Prefer to Text?</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 24 }}>Send us a message and we'll respond within minutes.</p>
            <a href="sms:7605435733?body=Hello%20FixitBay!%20I%20need%20appliance%20repair." data-testid="text-us-btn" className="sms-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 15, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>
              Text Us: (760) 543-5733
            </a>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(0,0,0,0.4)', marginTop: 12 }}>Standard message rates may apply.</p>
          </div>
        </section>

        {/* ━━━ 5b. CONTACT FORM ━━━ */}
        <section data-testid="contact-form-section" style={{ background: '#fff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div style={EYE}>SEND A MESSAGE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Contact Form</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 32 }}>Fill out the form and we'll get back to you within 2 hours.</p>

            <form
              data-testid="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Repair Request: ${formData.appliance} — ${formData.name}`);
                const body = encodeURIComponent(
                  `Name: ${formData.name}\nPhone: ${formData.phone}\nAppliance: ${formData.appliance}\n\n${formData.message || '(No additional details)'}`
                );
                window.location.href = `mailto:info@fixitbay.net?subject=${subject}&body=${body}`;
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>
                  Name <span style={{ color: '#FF5722' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-form-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={INPUT_STYLE}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>
                  Phone <span style={{ color: '#FF5722' }}>*</span>
                </label>
                <input
                  id="contact-phone"
                  data-testid="contact-form-phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={INPUT_STYLE}
                />
              </div>

              {/* Appliance Type */}
              <div>
                <label htmlFor="contact-appliance" style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>
                  Appliance Type
                </label>
                <select
                  id="contact-appliance"
                  data-testid="contact-form-appliance"
                  value={formData.appliance}
                  onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                  style={{ ...INPUT_STYLE, appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FF5722' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40 }}
                >
                  {APPLIANCE_TYPES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>
                  Message <span style={{ color: '#4A5568', fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-form-message"
                  rows={4}
                  placeholder="Describe the issue with your appliance..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...INPUT_STYLE, minHeight: 100, resize: 'vertical' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-testid="contact-form-submit"
                style={{
                  background: '#FF5722',
                  color: '#FFFFFF',
                  fontFamily: F,
                  fontWeight: 700,
                  fontSize: 16,
                  minHeight: 52,
                  width: '100%',
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#FF7043'}
                onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* ━━━ 6. FINAL CTA ━━━ */}
        <section data-testid="contact-final-cta" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ ...EYE, color: '#FF5722' }}>READY TO BOOK?</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 40, color: '#fff', marginBottom: 12 }}>Schedule Your Repair Today</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>$60 diagnostic credited toward repair &middot; 180-day warranty &middot; Same-day available</p>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, padding: '14px 32px', marginBottom: 32 }}>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>Mon&ndash;Fri 8AM&ndash;6PM &middot; Sat 8AM&ndash;3PM &middot; Sun Closed</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="final-book-btn" className="final-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} aria-label="opens in new tab">
                Book Online
              </a>
              <a href="tel:+17605435733" data-testid="final-call-btn" className="final-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.6)', transition: 'background 0.2s' }}>
                (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ 7. MINIMAL FOOTER ━━━ */}
        <footer data-testid="contact-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

      </div>
    </>
  );
};

export default ContactPage;

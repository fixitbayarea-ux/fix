import React from 'react';
import { Star, CheckCircle, Shield, Award } from 'lucide-react';
import googleIcon from '../../assets/icons/google.svg';
import thumbtackIcon from '../../assets/icons/thumbtack.svg';
import nextdoorIcon from '../../assets/icons/nextdoor.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

const BOOKING_URL = '/book?go=1';
const PHONE_DISPLAY = '(760) 543-5733';
const PHONE_TEL = '+17605435733';

const HomeHero = () => {
  const socialButtons = [
    { icon: googleIcon, aria: 'Read reviews on Google Business Profile', href: 'https://share.google/Q48c6OXAIB7u60fNv' },
    { icon: thumbtackIcon, aria: 'Read reviews on Thumbtack', href: 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644' },
    { icon: nextdoorIcon, aria: 'Find us on Nextdoor', href: 'https://nextdoor.com/page/fixitbay-san-francisco-ca/' },
    { icon: facebookIcon, aria: 'Follow us on Facebook', href: 'https://www.facebook.com/fixitbay' },
  ];

  return (
    <section data-testid="hero-section" className="hero-section-root" style={{
      marginTop: '-72px',
      background: `linear-gradient(rgba(13,27,42,0.96), rgba(13,27,42,0.96)), url('/background_new2.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 60%',
      backgroundRepeat: 'no-repeat',
    }}>

      <div className="hero-layout" data-testid="hero-desktop">
        {/* TEXT COLUMN */}
        <div className="hero-text-col" data-testid="hero-left" style={{ background: 'transparent', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 480, width: '100%' }}>
            {/* Eyebrow — desktop only */}
            <div className="hero-d-flex" style={{ alignItems: 'center', gap: 12 }}>
              <span style={{ width: 36, height: 2, background: '#FF5722', display: 'block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                SAN FRANCISCO &amp; BAY AREA
              </span>
            </div>

            {/* ━━━ SINGLE H1 — always in DOM ━━━ */}
            <h1 className="hero-main-h1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Appliance Repair San Francisco — Licensed & Trusted
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: 1.5 }}>
              Same- or next-day appointments across SF, Peninsula &amp; Marin.<br />$60 diagnostic applied to repair cost.
            </p>

            {/* Desktop urgency */}
            <p className="hero-d" data-testid="hero-urgency-desktop" style={{ color: '#FF5722', fontSize: 13, fontWeight: 700, marginTop: 16, letterSpacing: '0.05em' }}>
              &#9889; SLOTS AVAILABLE TODAY — BOOK NOW
            </p>

            {/* Desktop trust row */}
            <div className="hero-d-flex trust-strip" data-testid="hero-trust-desktop" style={{ alignItems: 'center', gap: 20, marginTop: 24, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '8px 20px', color: 'rgba(255,255,255,0.9)' }}>
              <span style={{ minHeight: 44, display:'flex', alignItems:'center' }}><a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }} data-testid="hero-trust-google" aria-label="opens in new tab">&#11088; 4.9 Google</a></span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
              <span style={{ minHeight: 44, display:'flex', alignItems:'center' }}><a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }} data-testid="hero-trust-reviews" aria-label="opens in new tab">&#10003; 95 Reviews</a></span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
              <span style={{ color: '#FF5722', fontWeight: 600 }}>&#128737; License #51001</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
              <span className="nowrap" style={{ color: '#4CAF50', fontWeight: 600 }}>&#127942; Nextdoor Fave 2025</span>
            </div>

            {/* Desktop CTAs */}
            <div className="hero-d-flex" style={{ gap: 14, marginTop: 36 }}>
              <a
                href={BOOKING_URL}
                data-testid="hero-book-btn"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.10em', padding: '15px 30px', borderRadius: 3, textDecoration: 'none', border: 'none' }}
              >
                Book Repair Online
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="hero-call-btn"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.30)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.10em', padding: '15px 26px', borderRadius: 3, textDecoration: 'none' }}
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>

            {/* Desktop microcopy block */}
            <div className="hero-d" data-testid="hero-microcopy-desktop" style={{ textAlign: 'center', marginTop: 14 }}>
              <p data-testid="hero-urgency-slots-desktop" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>
                ⚡ Most slots filled by noon — book now to secure today
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.38)', margin: '4px 0 0 0', lineHeight: 1.6 }}>
                Same- or next-day &middot; Mon–Sat
              </p>
            </div>

            {/* ━━━ MOBILE-ONLY ELEMENTS ━━━ */}
            <div className="hero-m" data-testid="hero-mobile">
              {/* Mobile trust strip — above CTAs */}
              <div className="trust-strip" data-testid="hero-trust-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'nowrap', overflowX: 'auto', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '8px 16px', marginBottom: 16, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>
                <span>&#11088; 4.9 Google</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
                <span>&#10003; 95 Reviews</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
                <span>&#128737; License #51001</span>
              </div>
              {/* Mobile urgency */}
              <p data-testid="hero-urgency-mobile" style={{ color: '#FF5722', fontSize: 13, fontWeight: 700, textAlign: 'center', marginBottom: 16, letterSpacing: '0.05em' }}>
                &#9889; SLOTS AVAILABLE TODAY — BOOK NOW
              </p>
              {/* Mobile CTAs — stacked full width */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 10 }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-mobile-book-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 56, borderRadius: 4, background: '#FF5722', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none' }} aria-label="opens in new tab">
                  BOOK REPAIR ONLINE
                </a>
                <a href="tel:+17605435733" data-testid="hero-mobile-call-btn" className="hero-m-call" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 56, borderRadius: 4, background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                  CALL (760) 543-5733
                </a>
              </div>
              {/* Mobile reassurance micro-copy */}
              <p data-testid="hero-reassurance-mobile" style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 8 }}>
                Fast scheduling &middot; Licensed &amp; insured &middot; No fix, no fee
              </p>
              {/* Mobile urgency micro-copy */}
              <p data-testid="hero-urgency-slots-mobile" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: 2, marginBottom: 12 }}>
                ⚡ Most slots filled by noon — book now to secure today
              </p>
              {/* Mobile schedule note */}
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 12 }}>Same- or next-day &middot; Mon–Sat</p>
            </div>
          </div>
        </div>

        {/* TRUST CARD — desktop only */}
        <div
          className="hero-logo-col"
          data-testid="hero-right"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}
        >
          <div className="hero-trust-card" data-testid="hero-trust-card">
            {/* Animated Logo */}
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <picture>
                <source srcSet="/images/hero-logo-new.webp" type="image/webp" />
                <img
                  src="/hero-logo-new.png"
                  alt="FixitBay Appliance Repair Logo"
                  width="140"
                  height="140"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  data-testid="hero-logo-desktop"
                  className="logo-sway"
                  style={{ width: 140, height: 'auto', display: 'inline-block' }}
                />
              </picture>
            </div>

            {/* 2x2 Trust Grid */}
            <div className="hero-trust-grid" data-testid="hero-trust-grid">
              <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" className="trust-grid-item" data-testid="trust-grid-google" aria-label="4.9 Google Rating (opens in new tab)">
                <Star size={22} color="#FF5722" strokeWidth={2.5} />
                <span className="trust-grid-value">4.9</span>
                <span className="trust-grid-label">Google Rating</span>
              </a>
              <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" className="trust-grid-item" data-testid="trust-grid-reviews" aria-label="95+ Verified Reviews (opens in new tab)">
                <CheckCircle size={22} color="#4CAF50" strokeWidth={2.5} />
                <span className="trust-grid-value">95+</span>
                <span className="trust-grid-label">Verified Reviews</span>
              </a>
              <div className="trust-grid-item" data-testid="trust-grid-license">
                <Shield size={22} color="#42A5F5" strokeWidth={2.5} />
                <span className="trust-grid-value">#51001</span>
                <span className="trust-grid-label">CA License</span>
              </div>
              <a href="https://nextdoor.com/page/fixitbay-san-francisco-ca/" target="_blank" rel="noopener noreferrer" className="trust-grid-item" data-testid="trust-grid-award" aria-label="Nextdoor Fave 2025 (opens in new tab)">
                <Award size={22} color="#FFB300" strokeWidth={2.5} />
                <span className="trust-grid-value">2025</span>
                <span className="trust-grid-label">Nextdoor Fave</span>
              </a>
            </div>

            {/* Social icons row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
              {socialButtons.map((s) => (
                <a key={s.aria} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.aria} (opens in new tab)`} className="trust-social-icon">
                  <img src={s.icon} alt="" width="20" height="20" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Hero Unified Layout ── */
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: auto;
          width: 100%;
          max-width: 1060px;
          margin: 0 auto;
        }
        .hero-text-col {
          padding: 80px 20px 60px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .hero-logo-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-main-h1 {
          font-size: 46px;
          line-height: 1.12;
          margin: 18px 0 0 0;
          max-width: 520px;
        }
        .hero-subtext {
          color: rgba(255,255,255,0.60);
          margin-top: 18px;
        }

        /* Desktop: show desktop, hide mobile */
        .hero-d { display: block; }
        .hero-d-flex { display: flex; }
        .hero-m { display: none !important; }

        /* ── Glassmorphism Trust Card ── */
        .hero-trust-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 36px 32px 28px;
          width: 100%;
          max-width: 340px;
        }

        /* ── Sway Animation ── */
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2.5deg); }
          75% { transform: rotate(-2.5deg); }
        }
        .logo-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: center center;
        }

        /* ── 2x2 Trust Grid ── */
        .hero-trust-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .trust-grid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 14px 8px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: background 0.25s, border-color 0.25s;
          text-decoration: none;
          cursor: pointer;
        }
        .trust-grid-item:hover {
          background: rgba(255, 255, 255, 0.10);
          border-color: rgba(255, 255, 255, 0.18);
        }
        .trust-grid-value {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #FFFFFF;
          line-height: 1;
        }
        .trust-grid-label {
          font-family: Montserrat, sans-serif;
          font-weight: 500;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── Social Icons ── */
        .trust-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.10);
          transition: background 0.2s, border-color 0.2s;
        }
        .trust-social-icon:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.22);
        }
        .trust-social-icon:hover img {
          opacity: 1 !important;
        }

        /* Mobile (<1024px) */
        @media (max-width: 1023px) {
          .hero-layout {
            display: block;
          }
          .hero-logo-col {
            display: none !important;
          }
          .hero-text-col {
            padding: 90px 20px 50px;
            align-items: flex-start;
          }
          .hero-main-h1 {
            font-size: 30px;
            line-height: 1.15;
            margin: 0 0 14px 0;
            max-width: none;
          }
          .hero-subtext {
            color: rgba(255,255,255,0.55);
            margin: 0 0 20px 0;
          }
          .hero-d { display: none !important; }
          .hero-d-flex { display: none !important; }
          .hero-m { display: block !important; }
          .hero-m-call:active { background: rgba(255,255,255,0.1) !important; }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;

import React from 'react';
import logoWebP from '../../assets/logo.webp';
import logo768 from '../../assets/logo-768.webp';
import logo768Avif from '../../assets/logo-768.avif';
import logo512 from '../../assets/logo-512.webp';
import logo512Avif from '../../assets/logo-512.avif';
import heroBgWebP from '../../assets/hero-bg.webp';
import heroBg640 from '../../assets/hero-bg-640.webp';
import heroBg640Avif from '../../assets/hero-bg-640.avif';
import heroBg960 from '../../assets/hero-bg-960.webp';
import heroBg960Avif from '../../assets/hero-bg-960.avif';
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
              Appliance Repair in San Francisco — Fixed Same Day
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: 1.5 }}>
              Same-day service across SF, Peninsula &amp; Marin.<br />$60 diagnostic applied to repair cost.
            </p>

            {/* Desktop urgency */}
            <p className="hero-d" data-testid="hero-urgency-desktop" style={{ color: '#FF5722', fontSize: 13, fontWeight: 700, marginTop: 16, letterSpacing: '0.05em' }}>
              &#9889; SAME-DAY SLOTS AVAILABLE TODAY
            </p>

            {/* Desktop trust row */}
            <div className="hero-d-flex" style={{ alignItems: 'center', gap: 20, marginTop: 24, fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13 }}>
              <span style={{ minHeight: 44, display:'flex', alignItems:'center' }}><a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }} data-testid="hero-trust-google">&#11088; 4.9 Google</a></span>
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>&middot;</span>
              <span style={{ minHeight: 44, display:'flex', alignItems:'center' }}><a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }} data-testid="hero-trust-reviews">&#10003; 94 Reviews</a></span>
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>&middot;</span>
              <span style={{ color: '#FF5722', fontWeight: 600 }}>&#128737; License #51001</span>
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
                Same-day &amp; next-day &middot; Mon–Sat
              </p>
            </div>

            {/* ━━━ MOBILE-ONLY ELEMENTS ━━━ */}
            <div className="hero-m" data-testid="hero-mobile">
              {/* Mobile urgency */}
              <p data-testid="hero-urgency-mobile" style={{ color: '#FF5722', fontSize: 13, fontWeight: 700, textAlign: 'center', marginBottom: 16, letterSpacing: '0.05em' }}>
                &#9889; SAME-DAY SLOTS AVAILABLE TODAY
              </p>
              {/* Mobile CTAs — stacked full width */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 10 }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-mobile-book-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 56, borderRadius: 4, background: '#FF5722', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none' }}>
                  BOOK REPAIR ONLINE
                </a>
                <a href="tel:+17605435733" data-testid="hero-mobile-call-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 52, borderRadius: 4, background: 'transparent', border: '2px solid rgba(255,255,255,0.35)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                  CALL (760) 543-5733
                </a>
              </div>
              {/* Mobile urgency micro-copy */}
              <p data-testid="hero-urgency-slots-mobile" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: 2, marginBottom: 12 }}>
                ⚡ Most slots filled by noon — book now to secure today
              </p>
              {/* Mobile trust badges */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 16, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                <span>&#11088; 4.9 Google</span>
                <span>&middot;</span>
                <span>94 Reviews</span>
                <span>&middot;</span>
                <span>License #51001</span>
              </div>
              {/* Mobile schedule note */}
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 12 }}>Same-day & next-day &middot; Mon–Sat</p>
            </div>
          </div>
        </div>

        {/* LOGO COLUMN — desktop only */}
        <div
          className="hero-logo-col"
          data-testid="hero-right"
          style={{
            background: 'transparent',
            position: 'relative',
            overflow: 'hidden',
            padding: '24px',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,87,34,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <picture style={{ position: 'relative', zIndex: 1 }}>
            <img
              src="/hero-logo-new.png"
              alt="FixitBay Appliance Repair Logo"
              width="160"
              height="56"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              data-testid="hero-logo-desktop"
              style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block' }}
            />
          </picture>
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
        }
      `}</style>
    </section>
  );
};

export default HomeHero;

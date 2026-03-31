import React from 'react';
import { Phone } from 'lucide-react';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const BOOKING_URL = '/book?go=1';
const PHONE_DISPLAY = '(760) 543-5733';
const PHONE_TEL = '+17605435733';

const HomeHero = () => {
  return (
    <section data-testid="hero-section" className="hero-section-root" style={{
      marginTop: '-72px',
      background: `linear-gradient(rgba(13,27,42,0.96), rgba(13,27,42,0.96)), url('/background_new2.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 60%',
      backgroundRepeat: 'no-repeat',
    }}>

      <div className="hero-layout" data-testid="hero-desktop">
        {/* LEFT — main content */}
        <div className="hero-text-col" data-testid="hero-left">
          {/* Logo block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <img
              src={navbarLogo}
              alt="FixitBay LLC"
              width="52"
              height="52"
              fetchPriority="high"
              loading="eager"
              data-testid="hero-logo"
              style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.15)', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.02em' }}>FixitBay LLC</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>Appliance Repair &middot; Bay Area</div>
            </div>
          </div>

          {/* H1 */}
          <h1 className="hero-main-h1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.08, letterSpacing: '-0.025em', margin: '0 0 18px 0' }}>
            Appliance Repair{' '}
            <span style={{ color: '#FF5722' }}>Bay Area</span>
            {' '}&mdash; Licensed &amp; Trusted
            <span style={{ display: 'block', fontSize: 'clamp(16px, 1.6vw, 22px)', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0em', marginTop: 10 }}>
              San Francisco &middot; Peninsula &middot; Marin County
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtext" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 430, marginBottom: 36, fontWeight: 400 }}>
            Same- or next-day appointments. $60 diagnostic applied to repair cost. Licensed, insured, and backed by a 180-day warranty.
          </p>

          {/* Desktop CTAs */}
          <div className="hero-d-flex" style={{ gap: 12, alignItems: 'center' }}>
            <a
              href={BOOKING_URL}
              data-testid="hero-book-btn"
              style={{ background: '#FF5722', color: '#FFFFFF', padding: '15px 32px', borderRadius: 7, fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Book Repair Online
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="hero-call-btn"
              style={{ color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.2)', padding: '14px 24px', borderRadius: 7, fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}
            >
              <Phone size={15} />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Desktop microcopy */}
          <div className="hero-d" style={{ marginTop: 14 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.38)', margin: 0, lineHeight: 1.6 }}>
              Same- or next-day &middot; Mon&ndash;Sat
            </p>
          </div>

          {/* ━━━ MOBILE-ONLY ELEMENTS ━━━ */}
          <div className="hero-m" data-testid="hero-mobile">
            {/* Mobile trust strip */}
            <div className="trust-strip" data-testid="hero-trust-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'nowrap', overflowX: 'auto', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '8px 16px', marginBottom: 16, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>
              <span>&#11088; 4.9 Google</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
              <span>&#10003; 95 Reviews</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
              <span>&#128737; License #51001</span>
            </div>
            {/* Mobile CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 10 }}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-mobile-book-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 56, borderRadius: 4, background: '#FF5722', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none' }} aria-label="opens in new tab">
                BOOK REPAIR ONLINE
              </a>
              <a href={`tel:${PHONE_TEL}`} data-testid="hero-mobile-call-btn" className="hero-m-call" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 56, borderRadius: 4, background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                CALL {PHONE_DISPLAY}
              </a>
            </div>
            <p data-testid="hero-reassurance-mobile" style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 8 }}>
              Fast scheduling &middot; Licensed &amp; insured &middot; No fix, no fee
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 12 }}>Same- or next-day &middot; Mon&ndash;Sat</p>
          </div>
        </div>

        {/* RIGHT — trust panel (desktop only) */}
        <div className="hero-trust-panel" data-testid="hero-right">
          {/* Google Rating */}
          <div style={{ padding: '0 0 22px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="tp-label">Google Rating</div>
            <div className="tp-value">
              4.9<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.3)' }}> /5</span>
            </div>
            <div className="tp-desc">95+ verified reviews</div>
          </div>

          {/* Service Area */}
          <div style={{ padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="tp-label">Service Area</div>
            <div className="tp-value">
              22<span style={{ color: '#FF5722' }}> cities</span>
            </div>
            <div className="tp-desc">SF &middot; Peninsula &middot; Marin County</div>
          </div>

          {/* Warranty */}
          <div style={{ padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="tp-label">Warranty</div>
            <div className="tp-value">
              180<span style={{ color: '#FF5722' }}> days</span>
            </div>
            <div className="tp-desc">Parts &amp; labor on every repair</div>
          </div>

          {/* License */}
          <div style={{ padding: '22px 0 0 0' }}>
            <div className="tp-label">License</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.01em', marginBottom: 4 }}>
              <span style={{ color: '#FF5722' }}>#</span>S1001
            </div>
            <div className="tp-desc">CA Licensed &amp; Insured &middot; Nextdoor Fave 2025</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 72px;
          align-items: center;
          padding: 64px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-text-col {
          padding-top: 72px;
        }
        .hero-main-h1 {
          font-size: clamp(38px, 3.5vw, 52px);
        }
        .hero-d { display: block; }
        .hero-d-flex { display: flex; }
        .hero-m { display: none !important; }

        .hero-trust-panel {
          display: flex;
          flex-direction: column;
        }
        .tp-label {
          font-family: Montserrat, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #FF5722;
          margin-bottom: 6px;
        }
        .tp-value {
          font-family: Montserrat, sans-serif;
          font-size: 32px;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }
        .tp-desc {
          font-family: Montserrat, sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }

        @media (max-width: 1023px) {
          .hero-layout {
            display: block;
            padding: 0;
          }
          .hero-trust-panel {
            display: none !important;
          }
          .hero-text-col {
            padding: 90px 20px 50px;
          }
          .hero-main-h1 {
            font-size: 30px !important;
            line-height: 1.15 !important;
            margin: 0 0 14px 0 !important;
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

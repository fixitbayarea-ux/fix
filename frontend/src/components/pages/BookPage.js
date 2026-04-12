import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';

const BOOKING_URL = 'https://book.housecallpro.com/book/FixitBay-LLC/336ac28909f0491299d659eae174f93e?v2=true';

/* ───────────────────── DATA ───────────────────── */
const STEPS = [
  { num: '1', title: 'Pick a Time', body: 'Choose same- or next-day. Slots fill fast \u2014 book early.' },
  { num: '2', title: 'We Confirm', body: 'You get a confirmation with your technician\u2019s name and ETA.' },
  { num: '3', title: '$80 Diagnostic', body: 'Tech arrives, inspects, identifies the problem. Fee credited to repair.' },
  { num: '4', title: 'Repaired On-Site', body: 'Most repairs done in one visit. 180-day warranty included.' },
];

const WHY_CARDS = [
  { num: '01', title: 'No Surprise Fees', body: '$80 diagnostic is the only upfront cost. Written estimate before we touch anything. $0 hidden charges.' },
  { num: '02', title: 'Licensed Technician', body: 'CA License #51001. Not a subcontractor. Andrei personally handles every repair.' },
  { num: '03', title: '180-Day Warranty', body: 'If the same issue comes back within 180 days, we return at no charge. No questions asked.' },
  { num: '04', title: 'Fast Scheduling', body: 'Book before 2 PM for next-available slots. Next-day always available across 22 Bay Area cities.' },
];

const REVIEWS = [
  { quote: 'Had a Sub-Zero emergency on Thanksgiving morning. They came within an hour and saved our dinner party. Incredibly professional.', name: 'Sarah M.', loc: 'Pacific Heights', initial: 'S' },
  { quote: 'Fixed my LG washer same day. Andrei knew exactly what was wrong, explained everything clearly, and the price was fair. No upselling.', name: 'James L.', loc: 'Sunset District', initial: 'J' },
  { quote: 'Building management was impressed with how they coordinated access for our high-rise condo repair. Fast, clean, professional.', name: 'Linda K.', loc: 'SOMA', initial: 'L' },
];

const FAQ_DATA = [
  { q: 'What happens after I book online?', a: 'You receive a confirmation with your appointment window. Our technician will call 30 minutes before arrival.' },
  { q: 'Can I get a fast appointment?', a: 'Yes. Book before 2 PM and we can usually schedule a same- or next-day visit. Call (760) 543-5733 for urgent scheduling requests.' },
  { q: 'Is the $80 diagnostic fee required?', a: 'Yes, it covers the technician visit and full inspection. If you approve the repair, the $80 is fully credited \u2014 so it costs you nothing extra.' },
  { q: 'What if I need to reschedule?', a: 'Call or text (760) 543-5733 at least 2 hours before your appointment. We are flexible and will find a new time that works for you.' },
  { q: 'Do you service my area?', a: 'We cover San Francisco, Peninsula (Daly City, San Bruno, Millbrae, Pacifica), and Marin County (Mill Valley, San Rafael, Sausalito, Tiburon, Novato and more).' },
  { q: 'What if the repair takes more than one visit?', a: 'Most repairs are completed on the first visit. If we need to order a part, we return at no additional diagnostic charge. All work is covered by our 180-day warranty.' },
];

/* ───────────────────── COMPONENT ───────────────────── */
const BookPage = () => {
  const [searchParams] = useSearchParams();
  const [isAutoRedirect, setIsAutoRedirect] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* Defer searchParams read to avoid hydration mismatch with react-snap */
  useEffect(() => {
    const go = searchParams.get('go');
    if (go === '1') setIsAutoRedirect(true);
  }, [searchParams]);

  /* Auto-redirect logic preserved */
  useEffect(() => {
    if (!isAutoRedirect) return;
    const timer = setTimeout(() => {
      try { window.location.assign(BOOKING_URL); } catch { setFallback(true); }
    }, 20);
    const safety = setTimeout(() => setFallback(true), 2000);
    return () => { clearTimeout(timer); clearTimeout(safety); };
  }, [isAutoRedirect]);

  /* Floating button scroll listener */
  useEffect(() => {
    if (isAutoRedirect) return;
    const onScroll = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAutoRedirect]);

  /* JSON-LD schema */
  useSchemas([
    {
      id: 'book-service-schema',
      data: isAutoRedirect ? null : {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Appliance Repair Booking',
        provider: { '@type': 'LocalBusiness', name: 'FixitBay LLC', telephone: '+17605435733' },
        areaServed: 'San Francisco Bay Area',
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: 'https://fixitbay.net/book', servicePhone: '+17605435733' },
        offers: { '@type': 'Offer', price: '60', priceCurrency: 'USD', description: 'Diagnostic fee, credited toward repair' },
      },
    },
  ]);

  /* ── Auto-redirect screen ── */
  if (isAutoRedirect) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
          .bk-redirect *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
          .bk-redirect{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0D1B2A;color:#fff;text-align:center;padding:24px}
          .bk-redirect-icon{font-size:48px;margin-bottom:16px}
          .bk-redirect-text{font-weight:700;font-size:18px;margin-bottom:8px}
          .bk-redirect-sub{color:rgba(255,255,255,0.5);font-size:14px}
          .bk-redirect-btn{display:inline-flex;align-items:center;gap:8px;margin-top:20px;background:#FF5722;color:#fff;font-weight:800;font-size:16px;padding:16px 40px;border-radius:4px;border:none;cursor:pointer;text-decoration:none}
          .bk-redirect-btn:hover{background:#FF7043}
        `}</style>
        <div className="bk-redirect">
          <div className="bk-redirect-icon" style={{ fontSize: 36, fontWeight: 800, color: '#FF5722' }}>...</div>
          {!fallback ? (
            <>
              <div className="bk-redirect-text" data-testid="redirecting-text">Redirecting to booking...</div>
              <div className="bk-redirect-sub">You will be taken to our scheduling calendar</div>
            </>
          ) : (
            <>
              <div className="bk-redirect-text" data-testid="fallback-text">Redirect was blocked</div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bk-redirect-btn" data-testid="fallback-open-btn" aria-label="opens in new tab">Open Booking</a>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <SEOMetaTags
        title="Book Appliance Repair Online | Fast Scheduling | FixitBay LLC"
        description="Book appliance repair online in San Francisco & Bay Area. Same- or next-day appointments available. $80 diagnostic, 180-day warranty. Licensed technician. Click to schedule."
        canonical="https://fixitbay.net/book"
        ogTitle="Book Appliance Repair Online | Fast Scheduling | FixitBay LLC"
        ogDescription="Book appliance repair online. Same- or next-day appointments available. $80 diagnostic, 180-day warranty."
        noindex={false}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        :root{--navy:#0D1B2A;--navy-mid:#1A2F45;--accent:#FF5722;--cream:#F8F5F0;--accent-hover:#FF7043}
        .bk-page *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
        .bk-page a{text-decoration:none}
        .bk-eyebrow{font-weight:700;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:0.22em}

        /* HERO */
        .bk-hero{background:url('/background_new2.webp') center 60%/cover no-repeat;position:relative;min-height:480px;display:flex;align-items:center;justify-content:center;text-align:center}
        .bk-hero::before{content:'';position:absolute;inset:0;background:rgba(13,27,42,0.94)}
        .bk-hero-inner{position:relative;z-index:2;padding:80px 24px 48px;width:100%;max-width:800px;margin:0 auto}
        .bk-breadcrumb{color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:16px}
        .bk-breadcrumb a{color:rgba(255,255,255,0.5)}
        .bk-breadcrumb a:hover{color:rgba(255,255,255,0.8)}
        .bk-breadcrumb .bk-bc-arrow{color:var(--accent);margin:0 6px}
        .bk-hero h1{font-weight:800;font-size:52px !important;color:#fff;max-width:700px;margin:0 auto 12px;line-height:1.15}
        .bk-hero-sub{color:rgba(255,255,255,0.75);font-size:17px;max-width:540px;margin:0 auto 32px;line-height:1.6}
        .bk-main-cta{display:inline-block;background:var(--accent);color:#fff;font-weight:800;font-size:18px;padding:18px 48px;border-radius:4px;box-shadow:0 4px 24px rgba(255,87,34,0.4);transition:background 0.2s,box-shadow 0.2s}
        .bk-main-cta:hover{background:var(--accent-hover);box-shadow:0 6px 32px rgba(255,87,34,0.5)}
        .bk-or{color:rgba(255,255,255,0.45);font-size:13px;margin-top:16px}
        .bk-phone-hero{color:#fff;font-weight:700;font-size:20px;margin-top:10px;display:inline-block;transition:color 0.2s}
        .bk-phone-hero:hover{color:var(--accent)}
        .bk-trust{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:28px}
        .bk-trust-item{font-size:13px;color:rgba(255,255,255,0.8)}
        .bk-trust-check{color:var(--accent);font-weight:700;margin-right:4px}

        /* HOW IT WORKS */
        .bk-how{background:#fff;padding:64px 24px;text-align:center}
        .bk-steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:960px;margin:0 auto}
        @media(max-width:700px){.bk-steps-grid{grid-template-columns:repeat(2,1fr)}}
        .bk-step{background:var(--cream);border-radius:4px;padding:28px 20px;text-align:center;border-top:3px solid var(--accent);position:relative;overflow:hidden}
        .bk-step-ghost{font-weight:800;font-size:72px;color:rgba(255,87,34,0.07);position:absolute;top:8px;right:12px;line-height:1;pointer-events:none}
        .bk-step-num{width:36px;height:36px;background:var(--accent);color:#fff;font-weight:800;font-size:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;position:relative;z-index:1}
        .bk-step-title{font-weight:800;font-size:16px;color:#1A1A1A;margin-bottom:6px}
        .bk-step-body{font-weight:400;font-size:13px;color:#4A5568;line-height:1.6}

        /* BOOKING WIDGET */
        .bk-widget{background:var(--cream);padding:72px 24px;text-align:center}
        .bk-card{max-width:640px;margin:0 auto;background:#fff;border-radius:4px;padding:40px;border:1px solid rgba(255,87,34,0.2);border-top:4px solid var(--accent);box-shadow:0 8px 32px rgba(0,0,0,0.06);text-align:center}
        .bk-card-title{font-weight:800;font-size:22px;color:#1A1A1A;margin-bottom:4px}
        .bk-card-sub{color:#4A5568;font-size:14px;margin-bottom:24px}
        .bk-mini-trust{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:28px}
        .bk-mini-trust span{background:rgba(255,87,34,0.06);border:1px solid rgba(255,87,34,0.15);border-radius:3px;padding:6px 14px;font-weight:600;font-size:12px;color:var(--accent)}
        .bk-book-full{display:block;width:100%;background:var(--accent);color:#fff;font-weight:800;font-size:16px;padding:18px 32px;border-radius:4px;text-align:center;box-shadow:0 4px 16px rgba(255,87,34,0.35);transition:background 0.2s;border:none;cursor:pointer}
        .bk-book-full:hover{background:var(--accent-hover)}
        .bk-divider{margin:20px 0;border-top:1px solid rgba(0,0,0,0.07);position:relative}
        .bk-divider-text{position:relative;top:-12px;background:#fff;padding:0 16px;color:#4A5568;font-size:12px;display:inline-block}
        .bk-call-full{display:block;width:100%;border:2px solid var(--accent);color:var(--accent);background:transparent;font-weight:700;font-size:15px;padding:14px 32px;border-radius:4px;text-align:center;transition:background 0.2s;cursor:pointer}
        .bk-call-full:hover{background:rgba(255,87,34,0.04)}
        .bk-hours-note{color:#4A5568;font-size:12px;margin-top:12px}

        /* WHY BOOK */
        .bk-why{background:var(--navy);padding:72px 24px;text-align:center}
        .bk-why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;max-width:800px;margin:0 auto}
        @media(max-width:600px){.bk-why-grid{grid-template-columns:1fr}}
        .bk-why-card{background:var(--navy-mid);border-radius:4px;padding:28px;border-top:3px solid var(--accent);display:flex;gap:16px;text-align:left}
        .bk-why-ghost{font-weight:800;font-size:48px;color:rgba(255,87,34,0.12);line-height:1;flex-shrink:0;min-width:52px}
        .bk-why-title{color:#fff;font-weight:700;font-size:16px;margin-bottom:6px}
        .bk-why-body{color:rgba(255,255,255,0.65);font-size:13px;line-height:1.6}

        /* REVIEWS */
        .bk-reviews{background:var(--cream);padding:64px 24px;text-align:center}
        .bk-reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1000px;margin:0 auto}
        @media(max-width:700px){.bk-reviews-grid{grid-template-columns:1fr}}
        .bk-review-card{background:#fff;border-radius:4px;padding:24px;border-top:3px solid var(--accent);border:1px solid rgba(0,0,0,0.06);text-align:left}
        .bk-stars{color:var(--accent);font-size:16px;margin-bottom:10px}
        .bk-quote{font-weight:400;font-size:14px;color:#4A5568;line-height:1.7;margin-bottom:16px;font-style:italic}
        .bk-reviewer{display:flex;gap:10px;align-items:center}
        .bk-initial{width:36px;height:36px;background:var(--accent);color:#fff;font-weight:800;font-size:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .bk-reviewer-name{font-weight:700;font-size:13px;color:#1A1A1A}
        .bk-reviewer-loc{font-weight:400;font-size:12px;color:#4A5568}

        /* FAQ */
        .bk-faq{background:#fff;padding:64px 24px;text-align:center}
        .bk-faq-wrap{max-width:720px;margin:0 auto;text-align:left}
        .bk-faq-item{border:1px solid rgba(0,0,0,0.07);border-radius:4px;margin-bottom:8px;overflow:hidden;transition:all 0.2s}
        .bk-faq-item.closed{background:var(--cream)}
        .bk-faq-item.open{background:#fff;border-left:3px solid var(--accent)}
        .bk-faq-q{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;min-height:44px;cursor:pointer;background:none;border:none;width:100%;text-align:left;font-weight:600;font-size:14px;color:#1A1A1A}
        .bk-faq-chevron{color:var(--accent);transition:transform 0.3s;flex-shrink:0;margin-left:12px;font-size:16px}
        .bk-faq-chevron.open{transform:rotate(180deg)}
        .bk-faq-a{padding:0 20px 16px;font-weight:400;font-size:13px;color:#4A5568;line-height:1.7}

        /* FINAL CTA */
        .bk-final{background:var(--accent);padding:64px 24px;text-align:center}
        .bk-final-title{color:#fff;font-weight:800;font-size:36px;margin-bottom:8px}
        .bk-final-sub{color:rgba(255,255,255,0.85);font-size:16px;margin-bottom:32px}
        .bk-final-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .bk-btn-white{background:#fff;color:var(--accent);font-weight:800;font-size:16px;padding:16px 40px;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,0.15);transition:background 0.2s;border:none;cursor:pointer}
        .bk-btn-white:hover{background:rgba(255,255,255,0.92)}
        .bk-btn-outline{border:2px solid rgba(255,255,255,0.6);color:#fff;background:transparent;font-weight:700;font-size:16px;padding:16px 40px;border-radius:4px;transition:border-color 0.2s;cursor:pointer}
        .bk-btn-outline:hover{border-color:rgba(255,255,255,0.9)}

        /* FOOTER */
        .bk-footer{background:var(--navy);border-top:1px solid rgba(255,87,34,0.2);padding:24px;text-align:center}
        .bk-footer-links{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
        .bk-footer-links a{font-weight:500;font-size:12px;color:rgba(255,255,255,0.5);transition:color 0.2s}
        .bk-footer-links a:hover{color:rgba(255,255,255,0.8)}
        .bk-footer-row{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,0.5)}
        .bk-footer-row a{color:rgba(255,255,255,0.5)}
        .bk-footer-row a:hover{color:rgba(255,255,255,0.8)}

        /* FLOATING */
        .bk-float{position:fixed;bottom:24px;right:24px;z-index:999;background:var(--accent);color:#fff;font-weight:700;border-radius:4px;padding:14px 20px;font-size:14px;box-shadow:0 4px 20px rgba(0,0,0,0.25);transition:opacity 0.3s,transform 0.3s,background 0.2s;display:flex;align-items:center;gap:6px}
        .bk-float:hover{background:var(--accent-hover)}
        .bk-float.hidden{opacity:0;transform:translateY(20px);pointer-events:none}
        @media(max-width:767px){.bk-float{bottom:72px}}

        /* MOBILE STICKY */
        .bk-mobile-bar{display:none}
        @media(max-width:767px){
          .bk-mobile-bar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:1000;background:var(--navy);border-top:1px solid rgba(255,87,34,0.3)}
          .bk-mobile-bar a{flex:1;display:flex;align-items:center;justify-content:center;gap:4px;padding:12px 8px;color:#fff;font-weight:700;font-size:12px;text-align:center}
          .bk-mobile-bar a:not(:last-child){border-right:1px solid rgba(255,87,34,0.2)}
        }

        @media(max-width:767px){
          .bk-hero h1{font-size:30px !important}
          .bk-final-title{font-size:28px}
        }
      `}</style>

      <div className="bk-page">

        {/* ─── 1. HERO ─── */}
        <section className="bk-hero" data-testid="book-hero">
          <div className="bk-hero-inner">
            <div className="bk-breadcrumb" data-testid="book-breadcrumb">
              <a href="/">Home</a>
              <span className="bk-bc-arrow">&rarr;</span>
              <span>Book Online</span>
            </div>
            <div className="bk-eyebrow" style={{ marginBottom: 12 }}>SAME- &amp; NEXT-DAY AVAILABLE</div>
            <h1 data-testid="book-h1">Book Your Appliance Repair</h1>
            <p className="bk-hero-sub">Schedule a licensed technician online. Pick the time that works for you.</p>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bk-main-cta" data-testid="book-hero-cta" aria-label="Open booking calendar (opens in new tab)">Open Booking Calendar</a>

            <div className="bk-or">&mdash; or call for immediate scheduling &mdash;</div>
            <a href="tel:7605435733" className="bk-phone-hero" data-testid="book-hero-phone">(760) 543-5733</a>

            <div className="bk-trust" data-testid="book-trust-badges">
              {[
                '\u2713 Licensed & Insured \u00B7 CA #51001',
                '\u2713 $80 Diagnostic \u00B7 Applied to Repair',
                '\u2713 180-Day Warranty',
                '\u2713 4.9 / 5 \u00B7 94 Google Reviews',
              ].map((t, i) => (
                <span key={i} className="bk-trust-item"><span className="bk-trust-check">{t.charAt(0)}</span>{t.slice(2)}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. HOW BOOKING WORKS ─── */}
        <section className="bk-how" data-testid="book-how-it-works">
          <div className="bk-eyebrow" style={{ marginBottom: 8 }}>SIMPLE PROCESS</div>
          <h2 style={{ fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 48 }}>How It Works</h2>
          <div className="bk-steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="bk-step" data-testid={`book-step-${s.num}`}>
                <div className="bk-step-ghost">{s.num}</div>
                <div className="bk-step-num">{s.num}</div>
                <div className="bk-step-title">{s.title}</div>
                <div className="bk-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. BOOKING WIDGET ─── */}
        <section className="bk-widget" data-testid="book-widget-section">
          <div className="bk-eyebrow" style={{ marginBottom: 8 }}>ONLINE BOOKING</div>
          <h2 style={{ fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Choose Your Time Slot</h2>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 40 }}>Book before 2 PM for same- or next-day appointments</p>

          <div className="bk-card" data-testid="book-widget-card">
            <div className="bk-card-title">FixitBay LLC</div>
            <div className="bk-card-sub">Licensed Appliance Repair</div>

            <div className="bk-mini-trust">
              <span>{'\u2713'} $80 Diagnostic</span>
              <span>{'\u2713'} Fast</span>
              <span>{'\u2713'} 180-Day Warranty</span>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bk-book-full" data-testid="book-widget-book-btn" aria-label="opens in new tab">Open Booking Calendar</a>

            <div className="bk-divider"><span className="bk-divider-text">&mdash; prefer to call? &mdash;</span></div>

            <a href="tel:7605435733" className="bk-call-full" data-testid="book-widget-call-btn">Call (760) 543-5733</a>

            <div className="bk-hours-note">Mon&ndash;Fri 8AM&ndash;6PM &middot; Sat 8AM&ndash;3PM</div>
          </div>
        </section>

        {/* ─── 4. WHY BOOK WITH FIXITBAY ─── */}
        <section className="bk-why" data-testid="book-why-section">
          <div className="bk-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>WHY CHOOSE US</div>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 32, marginBottom: 48 }}>Why Homeowners Book FixitBay LLC</h2>
          <div className="bk-why-grid">
            {WHY_CARDS.map((c, i) => (
              <div key={i} className="bk-why-card" data-testid={`book-why-card-${i}`}>
                <div className="bk-why-ghost">{c.num}</div>
                <div>
                  <div className="bk-why-title">{c.title}</div>
                  <div className="bk-why-body">{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. WHAT CUSTOMERS SAY ─── */}
        <section className="bk-reviews" data-testid="book-reviews-section">
          <div className="bk-eyebrow" style={{ marginBottom: 8 }}>REVIEWS</div>
          <h2 style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8 }}>What Customers Say</h2>
          <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 36 }}>Verified reviews from Bay Area homeowners</p>
          <div className="bk-reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bk-review-card" data-testid={`book-review-${i}`}>
                <div className="bk-stars">{'\u2605\u2605\u2605\u2605\u2605'}</div>
                <div className="bk-quote">&ldquo;{r.quote}&rdquo;</div>
                <div className="bk-reviewer">
                  <div className="bk-initial">{r.initial}</div>
                  <div>
                    <div className="bk-reviewer-name">{r.name}</div>
                    <div className="bk-reviewer-loc">{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 6. FAQ ─── */}
        <section className="bk-faq" data-testid="book-faq-section">
          <div className="bk-eyebrow" style={{ marginBottom: 8 }}>FAQ</div>
          <h2 style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 40 }}>Before You Book</h2>
          <div className="bk-faq-wrap">
            {FAQ_DATA.map((f, i) => (
              <div key={i} className={`bk-faq-item ${openFaq === i ? 'open' : 'closed'}`} data-testid={`book-faq-item-${i}`}>
                <button className="bk-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} data-testid={`book-faq-toggle-${i}`}>
                  <span>{f.q}</span>
                  <span className={`bk-faq-chevron${openFaq === i ? ' open' : ''}`}>{'\u25BC'}</span>
                </button>
                {openFaq === i && <div className="bk-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FINAL CTA ─── */}
        <section className="bk-final" data-testid="book-final-cta">
          <div className="bk-final-title">Ready to Book?</div>
          <div className="bk-final-sub">Same- and next-day appointments available across the Bay Area.</div>
          <div className="bk-final-btns">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bk-btn-white" data-testid="book-final-book-btn" aria-label="opens in new tab">Book Online Now</a>
            <a href="tel:7605435733" className="bk-btn-outline" data-testid="book-final-call-btn">(760) 543-5733</a>
          </div>
        </section>

        {/* ─── 8. FOOTER ─── */}
        <footer className="bk-footer" data-testid="book-footer">
          <div className="bk-footer-links">
            <a href="/services">All Services</a>
            <a href="/brands">Brands</a>
            <a href="/service-areas">Service Areas</a>
            <a href="/reviews">Reviews</a>
          </div>
          <div className="bk-footer-row">
            <a href="/" style={{ fontWeight: 700 }}>FixitBay LLC</a>
            <a href="tel:7605435733">(760) 543-5733</a>
            <span>&copy; 2026 FixitBay LLC</span>
          </div>
        </footer>

        {/* ─── 9. FLOATING BUTTON ─── */}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`bk-float${showFloat ? '' : ' hidden'}`} data-testid="book-floating-btn" aria-label="opens in new tab">BOOK REPAIR</a>

        {/* ─── MOBILE STICKY BAR ─── */}
        <div className="bk-mobile-bar" data-testid="book-mobile-bar">
          <a href="tel:7605435733">CALL</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="opens in new tab">BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!">TEXT US</a>
        </div>
      </div>
    </>
  );
};

export default BookPage;

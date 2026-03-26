import React, { useEffect } from 'react';
import SEOMetaTags from '../SEOMetaTags';

const ThankYouBooking = () => {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* ── Preserve GA4 + Google Ads tracking ── */
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'booking_confirmed', {
        page_path: window.location.pathname,
        page_title: 'Booking Confirmed - Thank You',
        source: 'housecallpro_redirect',
      });
    }
    const awConversionId = process.env.REACT_APP_AW_CONVERSION_ID;
    const awConversionLabel = process.env.REACT_APP_AW_CONVERSION_LABEL;
    if (window.gtag && awConversionId && awConversionLabel) {
      window.gtag('event', 'conversion', { send_to: `${awConversionId}/${awConversionLabel}` });
    }
  }, []);

  const trackClick = (label) => {
    if (window.gtag) window.gtag('event', `thankyou_${label}_click`, { page_path: window.location.pathname });
  };

  return (
    <>
      <SEOMetaTags
        title="Booking Confirmed \u2014 Thank You | FixitBay LLC"
        description="Your FixitBay appliance repair appointment is confirmed. Here is what to expect and how to prepare for your technician visit."
        canonical="https://fixitbay.net/thank-you-booking"
        ogTitle="Booking Confirmed \u2014 Thank You | FixitBay LLC"
        ogDescription="Your FixitBay appliance repair appointment is confirmed."
        noindex={true}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        :root{--navy:#0D1B2A;--navy-mid:#1A2F45;--accent:#FF5722;--cream:#F8F5F0;--accent-hover:#FF7043}
        .ty-page *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
        .ty-page a{text-decoration:none}
        .ty-eyebrow{font-weight:700;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:0.22em}

        /* HERO */
        .ty-hero{background:var(--navy);min-height:420px;display:flex;align-items:center;justify-content:center;text-align:center;border-bottom:4px solid var(--accent);padding:80px 24px 48px}
        .ty-check{width:80px;height:80px;background:rgba(255,87,34,0.15);border:2px solid var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px}
        .ty-check span{color:var(--accent);font-size:36px;font-weight:800}
        .ty-hero h1{font-weight:800;font-size:44px;color:#fff;margin-bottom:12px}
        .ty-hero-sub{color:rgba(255,255,255,0.75);font-size:17px;max-width:520px;margin:0 auto 28px;line-height:1.6}
        .ty-hero-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .ty-btn-primary{background:var(--accent);color:#fff;font-weight:700;padding:13px 28px;border-radius:4px;font-size:14px;transition:background 0.2s}
        .ty-btn-primary:hover{background:var(--accent-hover)}
        .ty-btn-secondary{border:1px solid rgba(255,255,255,0.3);color:#fff;background:transparent;font-weight:700;padding:13px 28px;border-radius:4px;font-size:14px;transition:border-color 0.2s}
        .ty-btn-secondary:hover{border-color:rgba(255,255,255,0.6)}

        /* WHAT HAPPENS NEXT */
        .ty-next{background:var(--cream);padding:72px 24px;text-align:center}
        .ty-steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:960px;margin:0 auto}
        @media(max-width:700px){.ty-steps-grid{grid-template-columns:repeat(2,1fr)}}
        .ty-step{background:#fff;border-radius:4px;padding:28px 20px;text-align:center;border-top:3px solid var(--accent);border:1px solid rgba(255,87,34,0.12);position:relative;overflow:hidden}
        .ty-step-ghost{font-weight:800;font-size:72px;color:rgba(255,87,34,0.07);position:absolute;top:8px;right:12px;line-height:1;pointer-events:none}
        .ty-step-num{width:36px;height:36px;background:var(--accent);color:#fff;font-weight:800;font-size:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;position:relative;z-index:1}
        .ty-step-title{font-weight:800;font-size:15px;color:#1A1A1A;margin-bottom:6px}
        .ty-step-body{font-weight:400;font-size:13px;color:#4A5568;line-height:1.6}

        /* RESCHEDULE */
        .ty-reschedule{background:var(--navy);padding:56px 24px}
        .ty-reschedule-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:820px;margin:0 auto}
        @media(max-width:600px){.ty-reschedule-grid{grid-template-columns:1fr}}
        .ty-contact-card{background:var(--navy-mid);border-radius:4px;padding:24px;border-top:3px solid var(--accent);text-align:center}
        .ty-contact-icon{font-size:28px;margin-bottom:10px;color:var(--accent);font-weight:800}
        .ty-contact-title{color:#fff;font-weight:700;font-size:14px;margin-bottom:6px}
        .ty-contact-body{color:rgba(255,255,255,0.6);font-size:12px;line-height:1.6;margin-bottom:14px}
        .ty-contact-btn{display:inline-block;background:var(--accent);color:#fff;font-weight:600;font-size:12px;padding:8px 18px;border-radius:4px;transition:background 0.2s}
        .ty-contact-btn:hover{background:var(--accent-hover)}

        /* PREPARE */
        .ty-prepare{background:var(--cream);padding:64px 24px;text-align:center}
        .ty-checklist{max-width:680px;margin:0 auto;text-align:left}
        .ty-checklist-item{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(0,0,0,0.06)}
        .ty-checklist-circle{width:22px;height:22px;background:rgba(255,87,34,0.1);border:1px solid rgba(255,87,34,0.3);border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .ty-checklist-circle span{color:var(--accent);font-size:11px;font-weight:800}
        .ty-checklist-text{font-weight:500;font-size:14px;color:#4A5568;line-height:1.5}

        /* REVIEW */
        .ty-review{background:#fff;padding:56px 24px;text-align:center}
        .ty-review-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;max-width:600px;margin:0 auto}
        .ty-review-btn{display:flex;align-items:center;gap:8px;padding:12px 24px;border-radius:4px;font-weight:700;font-size:13px;color:#fff;transition:opacity 0.2s}
        .ty-review-btn:hover{opacity:0.9}

        /* RELATED */
        .ty-related{background:var(--cream);padding:40px 24px;text-align:center}
        .ty-related-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:900px;margin:0 auto}
        .ty-related-pill{background:#fff;border:1px solid rgba(255,87,34,0.18);border-radius:3px;padding:7px 14px;font-weight:500;font-size:12px;color:#4A5568;white-space:nowrap;transition:border-color 0.2s,color 0.2s}
        .ty-related-pill:hover{border-color:var(--accent);color:var(--accent)}

        /* FOOTER */
        .ty-footer{background:var(--navy);border-top:1px solid rgba(255,87,34,0.2);padding:24px;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,0.5)}
        .ty-footer a{color:rgba(255,255,255,0.5);text-decoration:none}
        .ty-footer a:hover{color:rgba(255,255,255,0.8)}

        @media(max-width:767px){.ty-hero h1{font-size:30px}}
        .ty-page{padding-bottom:56px}
      `}</style>

      <div className="ty-page">

        {/* ─── 1. HERO ─── */}
        <section className="ty-hero" data-testid="ty-hero">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="ty-check"><span>{'\u2713'}</span></div>
            <div className="ty-eyebrow" style={{ marginBottom: 12 }}>BOOKING CONFIRMED</div>
            <h1 data-testid="ty-h1">You&rsquo;re All Set!</h1>
            <p className="ty-hero-sub">Thank you for choosing FixitBay. Your appointment is confirmed. We will call you 30 minutes before our technician arrives.</p>
            <div className="ty-hero-btns">
              <a href="tel:7605435733" className="ty-btn-primary" data-testid="ty-hero-call" onClick={() => trackClick('call')}>Call Us: (760) 543-5733</a>
              <a href="mailto:info@fixitbay.net" className="ty-btn-secondary" data-testid="ty-hero-email">info@fixitbay.net</a>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT HAPPENS NEXT ─── */}
        <section className="ty-next" data-testid="ty-next-steps">
          <div className="ty-eyebrow" style={{ marginBottom: 8 }}>NEXT STEPS</div>
          <div style={{ fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 48 }}>What Happens Next</div>
          <div className="ty-steps-grid">
            {[
              { num: '1', title: 'Confirmation Sent', body: 'Check your email or texts for your appointment details.' },
              { num: '2', title: 'We Call Ahead', body: 'Our technician calls 30 minutes before arrival. Save our number: (760) 543-5733.' },
              { num: '3', title: '$60 Diagnostic', body: 'Tech arrives, inspects, identifies the problem. Fee credited to repair if you proceed.' },
              { num: '4', title: 'Fixed & Warranted', body: 'Most repairs done same visit. 180-day warranty on all parts and labor.' },
            ].map(s => (
              <div key={s.num} className="ty-step" data-testid={`ty-step-${s.num}`}>
                <div className="ty-step-ghost">{s.num}</div>
                <div className="ty-step-num">{s.num}</div>
                <div className="ty-step-title">{s.title}</div>
                <div className="ty-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. NEED TO CHANGE? ─── */}
        <section className="ty-reschedule" data-testid="ty-reschedule">
          <div style={{ fontWeight: 800, fontSize: 26, color: '#fff', textAlign: 'center', maxWidth: 820, margin: '0 auto 32px' }}>Need to Reschedule or Have Questions?</div>
          <div className="ty-reschedule-grid">
            <div className="ty-contact-card" data-testid="ty-contact-call">
              <div className="ty-contact-icon">C</div>
              <div className="ty-contact-title">Call or Text</div>
              <div className="ty-contact-body">Available Mon&ndash;Fri 8AM&ndash;6PM, Sat 8AM&ndash;3PM. For urgent changes call directly.</div>
              <a href="tel:7605435733" className="ty-contact-btn" onClick={() => trackClick('call')}>(760) 543-5733</a>
            </div>
            <div className="ty-contact-card" data-testid="ty-contact-text">
              <div className="ty-contact-icon">T</div>
              <div className="ty-contact-title">Send a Text</div>
              <div className="ty-contact-body">Text us your name and appointment time and we will confirm any changes right away.</div>
              <a href="sms:7605435733?body=Hi%20FixitBay%2C%20I%20need%20to%20reschedule" className="ty-contact-btn" onClick={() => trackClick('sms')}>Text Now</a>
            </div>
            <div className="ty-contact-card" data-testid="ty-contact-email">
              <div className="ty-contact-icon">E</div>
              <div className="ty-contact-title">Email Us</div>
              <div className="ty-contact-body">For non-urgent questions or to send photos of your appliance before the visit.</div>
              <a href="mailto:info@fixitbay.net" className="ty-contact-btn">Send Email</a>
            </div>
          </div>
        </section>

        {/* ─── 4. PREPARE FOR VISIT ─── */}
        <section className="ty-prepare" data-testid="ty-prepare">
          <div className="ty-eyebrow" style={{ marginBottom: 8 }}>HELPFUL TIPS</div>
          <div style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 40 }}>How to Prepare for Your Repair Visit</div>
          <div className="ty-checklist">
            {[
              'Clear a path to the appliance \u2014 move any items stored in front of or on top of it.',
              'Note any error codes showing on the display panel \u2014 take a photo if you can.',
              'Be home or have someone present during the appointment window.',
              'Have your building access code or buzzer info ready if needed.',
              'Write down when the problem started and what you\u2019ve already tried \u2014 this helps the tech diagnose faster.',
            ].map((item, i) => (
              <div key={i} className="ty-checklist-item" data-testid={`ty-checklist-${i}`}>
                <div className="ty-checklist-circle"><span>{'\u2713'}</span></div>
                <div className="ty-checklist-text">{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. LEAVE A REVIEW ─── */}
        <section className="ty-review" data-testid="ty-review">
          <div className="ty-eyebrow" style={{ marginBottom: 8 }}>AFTER YOUR REPAIR</div>
          <div style={{ fontWeight: 800, fontSize: 26, color: '#1A1A1A', marginBottom: 8 }}>Happy with the Service?</div>
          <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 32 }}>A quick review helps other Bay Area homeowners find honest local repair.</p>
          <div className="ty-review-btns">
            <a href="https://www.google.com/maps/place/FixitBay" target="_blank" rel="noopener noreferrer" className="ty-review-btn" style={{ background: '#4285F4' }} data-testid="ty-review-google" aria-label="opens in new tab">Review on Google</a>
            <a href="https://www.yelp.com/biz/fixitbay" target="_blank" rel="noopener noreferrer" className="ty-review-btn" style={{ background: '#D32323' }} data-testid="ty-review-yelp" aria-label="opens in new tab">Review on Yelp</a>
            <a href="https://www.thumbtack.com/fixitbay" target="_blank" rel="noopener noreferrer" className="ty-review-btn" style={{ background: '#009fd9' }} data-testid="ty-review-thumbtack" aria-label="opens in new tab">Review on Thumbtack</a>
          </div>
          <p style={{ color: '#4A5568', fontSize: 12, marginTop: 16 }}>Takes less than 2 minutes. Your feedback means everything to a small local business.</p>
        </section>

        {/* ─── 6. RELATED LINKS ─── */}
        <section className="ty-related" data-testid="ty-related">
          <div style={{ fontWeight: 700, fontSize: 16, color: '#1A1A1A', marginBottom: 20 }}>While You Wait &mdash; Helpful Resources</div>
          <div className="ty-related-pills">
            <a href="/" className="ty-related-pill">Home</a>
            <a href="/services" className="ty-related-pill">All Services</a>
            <a href="/brands" className="ty-related-pill">Brands We Repair</a>
            <a href="/service-areas" className="ty-related-pill">Service Areas</a>
            <a href="/reviews" className="ty-related-pill">Customer Reviews</a>
            <a href="/blog" className="ty-related-pill">Tips & Guides</a>
            <a href="/about" className="ty-related-pill">About FixitBay LLC</a>
            <a href="/san-francisco-appliance-repair" className="ty-related-pill">San Francisco</a>
          </div>
        </section>

        {/* ─── 7. FOOTER ─── */}
        <footer className="ty-footer" data-testid="ty-footer">
          <a href="/" style={{ fontWeight: 700 }}>FixitBay</a>
          <a href="tel:7605435733">(760) 543-5733</a>
          <span>&copy; 2026 FixitBay LLC</span>
        </footer>
      </div>
    </>
  );
};

export default ThankYouBooking;

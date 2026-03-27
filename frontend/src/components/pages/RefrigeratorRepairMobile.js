import React, { useEffect, useState, useRef } from 'react';
import { Phone, MessageSquare, Calendar, ChevronDown, ChevronUp, Shield, Award, Clock, Star, MapPin, ArrowLeft, Thermometer, Droplets, Snowflake, Volume2, Power, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';

const BOOKING_URL = '/book?go=1';
const PHONE = '+17605435733';
const PHONE_DISPLAY = '(760) 543-5733';

const trackEvent = (eventName, params = {}) => {
  try { if (window.gtag) window.gtag('event', eventName, params); } catch (e) { /* silent */ }
};
const handleCall = (loc) => { trackEvent('call_click', { page: 'refrigerator_repair', location: loc }); window.location.href = `tel:${PHONE}`; };
const handleBook = (loc) => { trackEvent('book_click', { page: 'refrigerator_repair', location: loc }); window.open(BOOKING_URL, '_blank'); };
const handleText = () => { trackEvent('sms_click', { page: 'refrigerator_repair' }); window.location.href = `sms:${PHONE}`; };

/* ─── Sticky Bottom Bar ─── */
const StickyBar = () => (
  <div data-testid="sticky-bottom-bar" style={{
    position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
    background: '#fff', borderTop: '1px solid #e2e8f0',
    padding: '8px 12px', paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
    display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '8px',
    boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
  }}>
    <a href={`tel:${PHONE}`} onClick={() => handleCall('sticky')} data-testid="sticky-call-btn" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
      background: '#C0362C', color: '#fff', borderRadius: '12px', padding: '14px 4px',
      fontWeight: 700, fontSize: '14px', textDecoration: 'none', border: 'none',
    }}><Phone size={17} /> Call</a>
    <button onClick={() => handleBook('sticky')} data-testid="sticky-book-btn" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
      background: '#1A3B5D', color: '#fff', borderRadius: '12px', padding: '14px 4px',
      fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer',
    }}><Calendar size={17} /> Book Now</button>
    <a href={`sms:${PHONE}`} onClick={handleText} data-testid="sticky-text-btn" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
      background: '#F7FAFC', color: '#1A3B5D', borderRadius: '12px', padding: '14px 4px',
      fontWeight: 700, fontSize: '14px', textDecoration: 'none', border: '2px solid #CBD5E0',
    }}><MessageSquare size={17} /> Text</a>
  </div>
);

/* ─── FAQ Item ─── */
const FAQItem = ({ q, a, open, toggle }) => (
  <div style={{ borderBottom: '1px solid #E2E8F0' }}>
    <button onClick={toggle} style={{
      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
    }}>
      <span style={{ fontWeight: 600, color: '#1A3B5D', fontSize: '15px', lineHeight: 1.4, paddingRight: 12 }}>{q}</span>
      {open ? <ChevronUp size={20} color="#94A3B8" /> : <ChevronDown size={20} color="#94A3B8" />}
    </button>
    {open && <div style={{ paddingBottom: 18, color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>{a}</div>}
  </div>
);

/* ═══════════════════════════════════════════
   MAIN MOBILE LANDING
   ═══════════════════════════════════════════ */
const RefrigeratorRepairMobile = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('mobile-landing-active');
    return () => document.body.classList.remove('mobile-landing-active');
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    let tracked = false;
    const onScroll = () => {
      if (tracked) return;
      if ((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 >= 50) {
        tracked = true;
        trackEvent('scroll_depth_50', { page: 'refrigerator_repair' });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const faqs = [
    { q: 'How much does it cost?', a: '$60 diagnostic visit, fully applied to repair cost. Most repairs: $150–$400. Upfront quote before any work — no surprises.' },
    { q: 'How fast can you come?', a: 'Same- or next-day and next-day service across San Francisco, Peninsula, and Marin. Most urgent cooling issues handled the same day.' },
    { q: 'Do you offer a warranty?', a: '180-day warranty on all parts and labor. If the same issue returns, we fix it free.' },
    { q: 'What brands do you fix?', a: 'All major brands: Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool, GE, Bosch, Miele, KitchenAid, Frigidaire, and more.' },
    { q: 'Do you repair built-in fridges?', a: 'Yes — French door, side-by-side, built-in, counter-depth, under-counter, and commercial units.' },
  ];

  const reviews = [
    { name: 'Gayle R.', text: 'Andrei was excellent. He explained everything clearly and fixed our Sub-Zero the same day.', src: 'Google' },
    { name: 'Michael K.', text: 'Knowledgeable, professional, fast. Answered all my questions. Highly recommend!', src: 'Google' },
    { name: 'Emily C.', text: 'Smoothest repair experience ever. Super easy to book online. Would 100% recommend!', src: 'Google' },
  ];

  return (
    <div data-testid="mobile-landing-refrigerator" style={{ fontFamily: "'Montserrat', sans-serif", background: '#fff', paddingBottom: 82 }}>

      <SEOMetaTags title="Refrigerator Repair San Francisco | Fast Scheduling | FixitBay LLC" description="Fast refrigerator repair in San Francisco & Bay Area. $60 diagnostic applied to repair. Licensed & insured. 180-day warranty. Call (760) 543-5733." canonical="https://fixitbay.net/refrigerator-repair" />

      {/* ── HEADER ── */}
      <header data-testid="mobile-header" style={{
        position: 'sticky', top: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 16px', background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/fixitbay-logo-round.png" alt="FixitBay" width={36} height={36} style={{ borderRadius: '50%' }} />
          <span style={{ fontWeight: 800, fontSize: 16, color: '#1A3B5D', letterSpacing: '-0.3px' }}>FixitBay LLC</span>
        </a>
        <a href={`tel:${PHONE}`} onClick={() => handleCall('header')} data-testid="header-call-btn" style={{
          display: 'flex', alignItems: 'center', gap: 6, background: '#C0362C', color: '#fff', borderRadius: 10,
          padding: '9px 16px', fontWeight: 700, fontSize: 13, textDecoration: 'none', boxShadow: '0 2px 8px rgba(192,54,44,0.3)',
        }}><Phone size={15} /> Call Now</a>
      </header>

      {/* ── HERO ── */}
      <section data-testid="mobile-hero" style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #032D55 0%, #0F2A47 50%, #1A3B5D 100%)',
        padding: '24px 20px 20px',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(192,54,44,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

        {/* Urgency badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(192,54,44,0.9)', borderRadius: 20, padding: '5px 14px',
          marginBottom: 14,
        }}>
          <Clock size={13} color="#fff" />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '0.3px' }}>FAST SCHEDULING AVAILABLE</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, color: '#fff', margin: '0 0 8px' }}>
          Refrigerator<br />Repair
        </h1>
        <p style={{ fontSize: 17, fontWeight: 500, color: 'rgba(255,255,255,0.85)', margin: '0 0 16px', lineHeight: 1.3 }}>
          in San Francisco & Bay Area
        </p>

        {/* Trust row */}
        <div data-testid="trust-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {[
            { icon: <Star size={13} color="#FBBF24" fill="#FBBF24" />, label: 'Highly Rated' },
            { icon: <Shield size={13} color="#34D399" />, label: 'Licensed #51001' },
            { icon: <Award size={13} color="#60A5FA" />, label: '180-Day Warranty' },
          ].map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: '6px 10px',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              {t.icon}
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{t.label}</span>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 18px' }}>
          <img
            src="/refrig-hero.png"
            alt="FixitBay refrigerator repair technician"
            width={260}
            height={195}
            style={{ maxWidth: '72%', height: 'auto', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}
          />
        </div>

        {/* Price callout */}
        <div style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 10, padding: '10px 14px', marginBottom: 18, textAlign: 'center',
        }}>
          <span style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>
            Diagnostic: <strong style={{ color: '#FBBF24' }}>$60</strong> — applied to repair if you proceed
          </span>
        </div>

        {/* CTAs */}
        <button onClick={() => handleBook('hero')} data-testid="hero-book-btn" style={{
          width: '100%', padding: 16, marginBottom: 10,
          background: '#C0362C', color: '#fff', border: 'none', borderRadius: 14,
          fontSize: 17, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.2px',
          boxShadow: '0 4px 16px rgba(192,54,44,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Book Online Now <ArrowRight size={18} />
        </button>
        <a href={`tel:${PHONE}`} onClick={() => handleCall('hero')} data-testid="hero-call-btn" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', padding: 14,
          background: 'rgba(255,255,255,0.1)', color: '#fff',
          border: '2px solid rgba(255,255,255,0.3)', borderRadius: 14,
          fontSize: 16, fontWeight: 700, textDecoration: 'none',
        }}>
          <Phone size={17} /> Call {PHONE_DISPLAY}
        </a>
        <p onClick={handleText} data-testid="hero-text-link" style={{
          textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
          margin: '10px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <MessageSquare size={13} /> or text us for quick scheduling
        </p>
      </section>

      {/* ── WHAT'S WRONG? ── */}
      <section data-testid="issue-chips" style={{ padding: '24px 20px', background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: '0 0 14px' }}>What's the problem?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { icon: <Thermometer size={18} color="#C0362C" />, label: 'Not Cooling' },
            { icon: <Droplets size={18} color="#3B82F6" />, label: 'Leaking Water' },
            { icon: <Snowflake size={18} color="#06B6D4" />, label: 'Ice Maker Issue' },
            { icon: <Volume2 size={18} color="#F59E0B" />, label: 'Strange Noise' },
            { icon: <Power size={18} color="#8B5CF6" />, label: "Won't Start" },
            { icon: <Thermometer size={18} color="#10B981" />, label: 'Freezer Problem' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '14px 14px',
              background: '#fff', borderRadius: 12, border: '1px solid #E2E8F0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#F1F5F9', flexShrink: 0,
              }}>{item.icon}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>{item.label}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#64748B', marginTop: 10, textAlign: 'center' }}>
          We service: <strong>Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool</strong> + all brands
        </p>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section data-testid="how-it-works" style={{ padding: '28px 20px', background: '#fff' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: '0 0 20px' }}>How it works</h2>
        {[
          { n: '1', title: 'You call or book online', desc: 'Same/next-day slots across SF & Bay Area. Takes 30 seconds.' },
          { n: '2', title: 'We diagnose on-site', desc: '$60 diagnostic fee — waived with repair. No hidden charges.' },
          { n: '3', title: 'Repair + 180-day warranty', desc: 'Upfront quote. Quality parts. Warranty on parts and labor.' },
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, marginBottom: i < 2 ? 20 : 0, position: 'relative' }}>
            {/* Vertical connector line */}
            {i < 2 && <div style={{ position: 'absolute', left: 18, top: 40, width: 2, height: 'calc(100% - 16px)', background: '#E2E8F0' }} />}
            <div style={{
              flexShrink: 0, width: 38, height: 38, borderRadius: '50%',
              background: i === 0 ? '#C0362C' : '#1A3B5D', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 15, zIndex: 1,
              boxShadow: i === 0 ? '0 2px 8px rgba(192,54,44,0.3)' : '0 2px 8px rgba(26,59,93,0.2)',
            }}>{step.n}</div>
            <div style={{ paddingTop: 2 }}>
              <p style={{ fontWeight: 700, color: '#1A3B5D', fontSize: 15, margin: '0 0 3px' }}>{step.title}</p>
              <p style={{ color: '#64748B', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── WHY FIXITBAY ── */}
      <section data-testid="why-fixitbay" style={{
        padding: '24px 20px',
        background: 'linear-gradient(135deg, #0F2A47 0%, #1A3B5D 100%)',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>Why FixitBay LLC</h2>
        {[
          { icon: <Shield size={20} color="#34D399" />, title: 'Licensed & Insured', desc: 'CA License #51001. Full liability coverage.' },
          { icon: <Award size={20} color="#FBBF24" />, title: '180-Day Warranty', desc: 'On every repair — parts and labor.' },
          { icon: <Clock size={20} color="#60A5FA" />, title: 'Same/Next-Day', desc: 'Mon–Sat. Fast response across Bay Area.' },
          { icon: <CheckCircle2 size={20} color="#A78BFA" />, title: 'Upfront Pricing', desc: '$60 diagnostic applied to repair. No surprises.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
            <div style={{
              flexShrink: 0, width: 40, height: 40, borderRadius: 10,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{item.icon}</div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, margin: '0 0 2px' }}>{item.title}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── REVIEWS ── */}
      <section data-testid="reviews-section" style={{ padding: '28px 20px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: 0 }}>Real reviews</h2>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={16} color="#FBBF24" fill="#FBBF24" />)}
          </div>
        </div>
        <div ref={reviewsRef} style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4, scrollbarWidth: 'none' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              minWidth: '82%', scrollSnapAlign: 'start',
              background: '#F8FAFC', borderRadius: 14, padding: '18px 16px',
              border: '1px solid #E2E8F0',
            }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={12} color="#FBBF24" fill="#FBBF24" />)}
              </div>
              <p style={{ fontSize: 14, color: '#334155', margin: '0 0 12px', lineHeight: 1.6, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                <strong style={{ color: '#1E293B' }}>{r.name}</strong> &middot; {r.src}
              </p>
            </div>
          ))}
        </div>
        <a href="/#reviews" data-testid="read-more-reviews" style={{
          display: 'block', textAlign: 'center', marginTop: 14,
          fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none',
        }}>Read more reviews &rarr;</a>
      </section>

      {/* ── PRICING ── */}
      <section data-testid="pricing-section" style={{ padding: '24px 20px', background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: '0 0 14px' }}>Clear pricing</h2>
        <div style={{
          background: '#fff', borderRadius: 14, padding: '20px 18px',
          border: '2px solid #C0362C', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0,
            background: '#C0362C', color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 12px', borderBottomLeftRadius: 10,
          }}>TRANSPARENT</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#1A3B5D' }}>$60</span>
            <span style={{ fontSize: 14, color: '#64748B' }}>diagnostic visit</span>
          </div>
          <p style={{ fontSize: 14, color: '#475569', margin: '0 0 8px', lineHeight: 1.5 }}>
            Applied to repair if you proceed. Final quote given <strong>before</strong> any work.
          </p>
          <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
            Typical repairs: $150–$400
          </p>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section data-testid="service-area" style={{ padding: '24px 20px', background: '#fff' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <MapPin size={20} color="#C0362C" /> We come to you
        </h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
          {['San Francisco', 'Peninsula', 'Marin County'].map((area) => (
            <span key={area} style={{
              padding: '8px 16px', background: '#F1F5F9', borderRadius: 20,
              fontSize: 13, fontWeight: 600, color: '#1E293B', border: '1px solid #E2E8F0',
            }}>{area}</span>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
          Not sure? <a href={`tel:${PHONE}`} style={{ color: '#C0362C', fontWeight: 600, textDecoration: 'none' }}>Call</a> or <a href={`sms:${PHONE}`} style={{ color: '#C0362C', fontWeight: 600, textDecoration: 'none' }}>text</a> — we'll confirm in seconds.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section data-testid="faq-section" style={{ padding: '28px 20px', background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A3B5D', margin: '0 0 8px' }}>Common questions</h2>
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
        ))}
      </section>

      {/* ── FINAL CTA ── */}
      <section data-testid="final-cta" style={{
        padding: '32px 20px',
        background: 'linear-gradient(170deg, #032D55 0%, #1A3B5D 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#FBBF24', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Don't wait
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px' }}>Your fridge can't fix itself</h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '0 0 22px' }}>Fast scheduling &bull; 180-day warranty</p>
        <button onClick={() => handleBook('final')} data-testid="final-book-btn" style={{
          width: '100%', padding: 16, marginBottom: 10,
          background: '#C0362C', color: '#fff', border: 'none', borderRadius: 14,
          fontSize: 17, fontWeight: 800, cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(192,54,44,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>Book Online Now <ArrowRight size={18} /></button>
        <a href={`tel:${PHONE}`} onClick={() => handleCall('final')} data-testid="final-call-btn" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', padding: 14,
          background: 'rgba(255,255,255,0.1)', color: '#fff',
          border: '2px solid rgba(255,255,255,0.25)', borderRadius: 14,
          fontSize: 16, fontWeight: 700, textDecoration: 'none',
        }}><Phone size={17} /> Call {PHONE_DISPLAY}</a>
      </section>

      {/* Back link */}
      <div style={{ padding: '14px 20px', textAlign: 'center', background: '#fff' }}>
        <a href="/" style={{ fontSize: 13, color: '#94A3B8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <ArrowLeft size={14} /> Back to FixitBay LLC Home
        </a>
      </div>

      <div style={{ height: 16 }} />
      <StickyBar />

      <style>{`
        [data-testid="mobile-landing-refrigerator"] * { box-sizing: border-box; }
        @media (max-width: 768px) {
          body.mobile-landing-active .main-nav { display: none !important; }
          body.mobile-landing-active { padding-top: 0 !important; }
        }
        div[style*="overflowX"]::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default RefrigeratorRepairMobile;

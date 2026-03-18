import React, { useState, useEffect } from 'react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';

/* ───────────────────────── DATA ───────────────────────── */
const RESIDENTIAL_SERVICES = [
  { href: '/refrigerator-repair', label: 'Refrigerator Repair', issues: 'Not cooling, ice buildup, water leaks, compressor noise, warm spots' },
  { href: '/washer-repair', label: 'Washer Repair', issues: 'Not draining, vibration, leaking, error codes, door lock issues' },
  { href: '/dryer-repair', label: 'Dryer Repair', issues: 'Not heating, long cycles, drum not spinning, burning smell' },
  { href: '/dishwasher-repair', label: 'Dishwasher Repair', issues: 'Not draining, poor cleaning, leaking, error codes, door latch' },
  { href: '/oven-repair', label: 'Oven & Range Repair', issues: 'Igniter failure, uneven heat, temperature drift, self-clean lock' },
  { href: '/cooktop-repair', label: 'Cooktop Repair', issues: 'Burner not lighting, cracked glass, induction errors, gas smell' },
  { href: '/freezer-repair', label: 'Freezer Repair', issues: 'Frost buildup, not freezing, loud compressor, door seal gaps' },
  { href: '/ice-maker-repair', label: 'Ice Maker Repair', issues: 'No ice production, small cubes, water line clogs, leaking' },
  { href: '/stove-repair', label: 'Stove Repair', issues: 'Gas valve issues, electric element burnout, control board faults' },
  { href: '/range-repair', label: 'Range Repair', issues: 'Dual-fuel problems, convection fan failure, broiler not working' },
  { href: '/garbage-disposal-repair', label: 'Garbage Disposal', issues: 'Jammed, humming, leaking from bottom, reset issues' },
  { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', issues: 'Temperature fluctuation, compressor cycling, humidity control' },
];

const COMMERCIAL_SERVICES = [
  { href: '/commercial-appliance-repair', label: 'Commercial Appliance Repair', issues: 'Full-service commercial equipment repair for restaurants, hotels, offices' },
  { href: '/commercial-refrigerator-repair', label: 'Commercial Refrigerator', issues: 'Walk-in coolers, reach-in units, undercounters \u2014 all commercial brands' },
  { href: '/commercial-washer-repair', label: 'Commercial Washer', issues: 'High-capacity laundromat and hotel laundry machines' },
  { href: '/commercial-dryer-repair', label: 'Commercial Dryer', issues: 'Industrial gas and electric dryers, stack units' },
  { href: '/commercial-dishwasher-repair', label: 'Commercial Dishwasher', issues: 'High-temp, low-temp, conveyor, and flight type machines' },
  { href: '/commercial-oven-repair', label: 'Commercial Oven', issues: 'Convection, deck, combination ovens \u2014 all restaurant brands' },
];

const MAINTENANCE_SERVICES = [
  { href: '/maintenance/refrigerator', label: 'Refrigerator Maintenance', issues: 'Coil cleaning, gasket inspection, temperature calibration' },
  { href: '/maintenance/washer', label: 'Washer Maintenance', issues: 'Hose inspection, drum cleaning, balance check' },
  { href: '/maintenance/dryer', label: 'Dryer & Vent Cleaning', issues: 'Lint removal, vent inspection, airflow testing \u2014 fire prevention' },
  { href: '/maintenance/dishwasher', label: 'Dishwasher Maintenance', issues: 'Filter cleaning, spray arm cleaning, door seal check' },
  { href: '/maintenance/oven-range', label: 'Oven & Range Maintenance', issues: 'Calibration, igniter testing, burner tube cleaning' },
  { href: '/maintenance/cooktop', label: 'Cooktop Maintenance', issues: 'Burner cleaning, gas line check, glass surface care' },
  { href: '/maintenance/wine-cooler', label: 'Wine Cooler Maintenance', issues: 'Compressor care, humidity calibration, seal inspection' },
];

const STEPS = [
  { num: '1', title: 'Book', body: 'Schedule online or call. Same-day slots available before 2 PM.' },
  { num: '2', title: 'Diagnose', body: '$60 diagnostic visit. Technician inspects and identifies the problem.' },
  { num: '3', title: 'Approve', body: 'Written estimate before any work. $60 credited toward the repair.' },
  { num: '4', title: 'Fixed', body: 'Repair completed with OEM parts. 180-day warranty on everything.' },
];

const FAQ_DATA = [
  { q: 'How much does a diagnostic visit cost?', a: '$60. This covers the technician\u2019s visit and full inspection. If you approve the repair, the $60 is credited toward the total cost \u2014 so the diagnostic is essentially free when you proceed.' },
  { q: 'Can I get same-day service?', a: 'Yes. Requests placed before 2:00 PM typically receive same-day service. Next-day appointments are almost always available regardless of when you call.' },
  { q: 'What warranty do repairs include?', a: 'Every repair includes a 180-day warranty on both parts and labor. If the same problem returns within that window, we come back and fix it at no charge.' },
  { q: 'Do you repair premium brands like Sub-Zero and Wolf?', a: 'Yes. Our technicians are trained on all premium and luxury brands including Sub-Zero, Wolf, Viking, Thermador, Miele, and Bosch Benchmark. We carry specialized tools and diagnostic equipment for these brands.' },
  { q: 'What areas do you serve?', a: 'We serve 22 cities across San Francisco, Northern San Mateo County (Peninsula), and Marin County. Our primary base is in San Francisco with typical response times of 15\u201345 minutes.' },
];

/* ───────────────────────── COMPONENT ───────────────────────── */
const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── SEO schemas ── */
  useSchemas([
    {
      id: 'services-itemlist-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Appliance Repair Services',
        description: 'All appliance repair services offered by FixitBay LLC',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Refrigerator Repair', url: 'https://fixitbay.net/refrigerator-repair' },
          { '@type': 'ListItem', position: 2, name: 'Washer Repair', url: 'https://fixitbay.net/washer-repair' },
          { '@type': 'ListItem', position: 3, name: 'Dryer Repair', url: 'https://fixitbay.net/dryer-repair' },
          { '@type': 'ListItem', position: 4, name: 'Dishwasher Repair', url: 'https://fixitbay.net/dishwasher-repair' },
          { '@type': 'ListItem', position: 5, name: 'Oven & Range Repair', url: 'https://fixitbay.net/oven-repair' },
          { '@type': 'ListItem', position: 6, name: 'Commercial Appliance Repair', url: 'https://fixitbay.net/commercial-appliance-repair' },
        ],
      },
    },
    {
      id: 'services-faq-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does a diagnostic visit cost?', acceptedAnswer: { '@type': 'Answer', text: '$60. This covers the technician visit and full inspection. If you approve the repair, the $60 is credited toward the total cost.' } },
          { '@type': 'Question', name: 'Can I get same-day service?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Same-day slots are available when you contact us before 2 PM.' } },
          { '@type': 'Question', name: 'What warranty do repairs include?', acceptedAnswer: { '@type': 'Answer', text: 'All repairs include a 180-day warranty on parts and labor.' } },
        ],
      },
    },
  ]);

  return (
    <>
      <SEOMetaTags
        title="Appliance Repair Services | San Francisco | FixitBay"
        description="Complete appliance repair services in San Francisco & Bay Area. Refrigerators, washers, dryers, ovens, dishwashers, commercial equipment and more. $60 diagnostic, 180-day warranty, same-day service."
        canonical="https://fixitbay.net/services"
        ogTitle="Appliance Repair Services \u2014 San Francisco & Bay Area | FixitBay LLC"
        ogDescription="Complete appliance repair services in San Francisco & Bay Area. $60 diagnostic, 180-day warranty, same-day service."
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        :root{--navy:#0D1B2A;--navy-mid:#1A2F45;--accent:#FF5722;--cream:#F8F5F0;--accent-hover:#FF7043;--danger:#C0392B}
        .sp-page *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
        .sp-page a{text-decoration:none}
        .sp-eyebrow{font-family:'Montserrat',sans-serif;font-weight:700;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:0.22em}

        /* HERO */
        .sp-hero{background:url('/background_new2.webp') center 60%/cover no-repeat;position:relative;min-height:500px;display:flex;align-items:center;justify-content:center;text-align:center}
        .sp-hero::before{content:'';position:absolute;inset:0;background:rgba(13,27,42,0.94)}
        .sp-hero-inner{position:relative;z-index:2;padding:80px 24px 48px;width:100%;max-width:900px;margin:0 auto}
        .sp-breadcrumb{color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:16px}
        .sp-breadcrumb a{color:rgba(255,255,255,0.5)}
        .sp-breadcrumb a:hover{color:rgba(255,255,255,0.8)}
        .sp-breadcrumb .sp-bc-arrow{color:var(--accent);margin:0 6px}
        .sp-hero h1{font-weight:800;font-size:44px;color:#fff;line-height:1.15;max-width:700px;margin:0 auto 12px}
        .sp-hero-sub{color:rgba(255,255,255,0.75);font-size:16px;max-width:600px;margin:0 auto 28px;line-height:1.7}
        .sp-hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .sp-btn-primary{background:var(--accent);color:#fff;font-weight:700;padding:14px 32px;border-radius:4px;border:none;cursor:pointer;font-size:15px;transition:background 0.2s}
        .sp-btn-primary:hover{background:var(--accent-hover)}
        .sp-btn-secondary{border:2px solid rgba(255,255,255,0.5);color:#fff;background:transparent;font-weight:700;padding:14px 32px;border-radius:4px;cursor:pointer;font-size:15px;transition:border-color 0.2s}
        .sp-btn-secondary:hover{border-color:rgba(255,255,255,0.8)}
        .sp-trust{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-top:28px}
        .sp-trust-item{font-size:13px;color:rgba(255,255,255,0.8)}
        .sp-trust-check{color:var(--accent);font-weight:700;margin-right:4px}

        /* INTRO */
        .sp-intro{background:#fff;padding:48px 24px}
        .sp-intro-inner{max-width:780px;margin:0 auto;text-align:center}
        .sp-intro-inner p{font-weight:400;font-size:16px;color:#4A5568;line-height:1.9}
        .sp-intro-inner a{color:var(--accent);text-decoration:none}
        .sp-intro-inner a:hover{text-decoration:underline}

        /* SECTIONS */
        .sp-section-light{background:var(--cream);padding:72px 24px}
        .sp-section-dark{background:var(--navy);padding:72px 24px}
        .sp-section-header{display:flex;align-items:center;gap:14px;max-width:1100px;margin:0 auto 12px}
        .sp-icon-circle{width:44px;height:44px;background:var(--accent);border-radius:50%;color:#fff;font-size:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .sp-section-title{font-weight:800;font-size:28px;color:#1A1A1A}
        .sp-section-title-white{font-weight:800;font-size:28px;color:#fff}
        .sp-section-sub{max-width:1100px;margin:0 auto 32px;font-weight:400;font-size:15px;color:#4A5568;line-height:1.8}
        .sp-section-sub-white{max-width:1100px;margin:0 auto 32px;font-weight:400;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.8}

        /* CARDS GRID */
        .sp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1100px;margin:0 auto}
        @media(max-width:900px){.sp-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.sp-grid{grid-template-columns:1fr}}

        /* RESIDENTIAL / MAINTENANCE CARD */
        .sp-card{background:#fff;border:1px solid rgba(255,87,34,0.15);border-top:3px solid var(--accent);border-radius:4px;padding:22px 24px;display:flex;gap:14px;align-items:flex-start;text-decoration:none;transition:box-shadow 0.25s,border-top-color 0.25s}
        .sp-card:hover{box-shadow:0 4px 16px rgba(0,0,0,0.08);border-top-color:var(--accent-hover)}
        .sp-card-icon{width:38px;height:38px;background:rgba(255,87,34,0.1);color:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .sp-card-title{font-weight:700;font-size:15px;color:#1A1A1A;margin-bottom:4px}
        .sp-card-issues{font-weight:400;font-size:12px;color:#4A5568;line-height:1.6}
        .sp-card-link{font-weight:600;font-size:11px;color:var(--accent);margin-top:8px;display:block}

        /* COMMERCIAL CARD */
        .sp-card-dark{background:var(--navy-mid);border:1px solid rgba(255,87,34,0.2);border-top:3px solid var(--accent);border-radius:4px;padding:22px 24px;display:flex;gap:14px;align-items:flex-start;text-decoration:none;transition:box-shadow 0.25s}
        .sp-card-dark:hover{box-shadow:0 4px 16px rgba(0,0,0,0.2)}
        .sp-card-dark .sp-card-icon{background:rgba(255,87,34,0.15)}
        .sp-card-dark .sp-card-title{color:#fff}
        .sp-card-dark .sp-card-issues{color:rgba(255,255,255,0.6)}

        /* HOW IT WORKS */
        .sp-steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:900px;margin:0 auto}
        @media(max-width:700px){.sp-steps-grid{grid-template-columns:repeat(2,1fr)}}
        .sp-step{background:var(--navy-mid);border-radius:4px;padding:28px 20px;text-align:center;border-top:3px solid var(--accent);position:relative;overflow:hidden}
        .sp-step-ghost{font-weight:800;font-size:64px;color:rgba(255,87,34,0.08);position:absolute;top:8px;right:12px;line-height:1;pointer-events:none}
        .sp-step-num{width:36px;height:36px;background:var(--accent);color:#fff;font-weight:800;font-size:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;position:relative;z-index:1}
        .sp-step-title{font-weight:800;font-size:17px;color:#fff;margin-bottom:8px}
        .sp-step-body{color:rgba(255,255,255,0.65);font-size:13px;line-height:1.6}

        /* FAQ */
        .sp-faq-wrap{max-width:780px;margin:0 auto}
        .sp-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:4px;margin-bottom:10px;overflow:hidden;transition:border-color 0.2s}
        .sp-faq-item.open{border-left:3px solid var(--accent)}
        .sp-faq-q{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;background:none;border:none;width:100%;text-align:left;font-weight:600;font-size:15px;color:#1A1A1A}
        .sp-faq-q:hover{background:rgba(0,0,0,0.02)}
        .sp-faq-chevron{color:var(--accent);transition:transform 0.3s;flex-shrink:0;margin-left:12px;font-size:18px}
        .sp-faq-chevron.open{transform:rotate(180deg)}
        .sp-faq-a{padding:0 20px 16px;font-weight:400;font-size:14px;color:#4A5568;line-height:1.7}

        /* FINAL CTA */
        .sp-cta{background:var(--navy);padding:72px 24px;text-align:center;border-top:3px solid var(--accent)}
        .sp-cta-title{font-weight:800;font-size:32px;color:#fff;margin-bottom:12px}
        .sp-cta-sub{color:rgba(255,255,255,0.7);font-size:16px;max-width:560px;margin:0 auto 32px;line-height:1.7}
        .sp-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .sp-cta-links{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-top:32px}
        .sp-cta-links a{font-weight:500;font-size:12px;color:rgba(255,255,255,0.5);transition:color 0.2s}
        .sp-cta-links a:hover{color:rgba(255,255,255,0.8)}

        /* FOOTER */
        .sp-footer{background:var(--navy);border-top:1px solid rgba(255,87,34,0.2);padding:24px;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,0.5)}
        .sp-footer a{color:rgba(255,255,255,0.5);text-decoration:none}
        .sp-footer a:hover{color:rgba(255,255,255,0.8)}

        /* FLOATING BUTTON */
        .sp-float{position:fixed;bottom:24px;right:24px;z-index:999;background:var(--accent);color:#fff;font-weight:700;border-radius:4px;padding:14px 20px;border:none;cursor:pointer;font-size:14px;box-shadow:0 4px 20px rgba(0,0,0,0.25);transition:opacity 0.3s,transform 0.3s,background 0.2s;display:flex;align-items:center;gap:6px}
        .sp-float:hover{background:var(--accent-hover)}
        .sp-float.hidden{opacity:0;transform:translateY(20px);pointer-events:none}
        @media(max-width:767px){.sp-float{bottom:72px}}

        /* MOBILE STICKY */
        .sp-mobile-bar{display:none}
        @media(max-width:767px){
          .sp-mobile-bar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:1000;background:var(--navy);border-top:1px solid rgba(255,87,34,0.3)}
          .sp-mobile-bar a{flex:1;display:flex;align-items:center;justify-content:center;gap:4px;padding:12px 8px;color:#fff;font-weight:700;font-size:12px;text-align:center;text-decoration:none}
          .sp-mobile-bar a:not(:last-child){border-right:1px solid rgba(255,87,34,0.2)}
        }

        /* RESPONSIVE */
        @media(max-width:767px){
          .sp-hero h1{font-size:28px}
          .sp-section-title,.sp-section-title-white{font-size:24px}
          .sp-cta-title{font-size:26px}
        }
      `}</style>

      <div className="sp-page">

        {/* ─── 1. HERO ─── */}
        <section className="sp-hero" data-testid="services-hero">
          <div className="sp-hero-inner">
            <div className="sp-breadcrumb" data-testid="services-breadcrumb">
              <a href="/">Home</a>
              <span className="sp-bc-arrow">&rarr;</span>
              <span>Services</span>
            </div>
            <div className="sp-eyebrow" style={{ marginBottom: 12 }}>SAN FRANCISCO &amp; BAY AREA</div>
            <h1 data-testid="services-h1">Appliance Repair Services</h1>
            <p className="sp-hero-sub">$60 diagnostic fee applied to repair. Licensed technicians. 180-day warranty on parts and labor. Same-day and next-day service across 22 cities.</p>
            <div className="sp-hero-ctas">
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="sp-btn-primary" data-testid="services-hero-book-btn">Book Online Now</a>
              <a href="tel:7605435733" className="sp-btn-secondary" data-testid="services-hero-call-btn">(760) 543-5733</a>
            </div>
            <div className="sp-trust" data-testid="services-trust-badges">
              {[
                '\u2713 Licensed & Insured',
                '\u2713 180-Day Warranty',
                '\u2713 Same/Next Day Service',
                '\u2713 4.9 / 5 Google Rating',
              ].map((t, i) => (
                <span key={i} className="sp-trust-item"><span className="sp-trust-check">{t.charAt(0)}</span>{t.slice(2)}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. INTRO PARAGRAPH ─── */}
        <section className="sp-intro" data-testid="services-intro">
          <div className="sp-intro-inner">
            <p>We repair every major residential and commercial appliance across San Francisco, the Peninsula, and Marin County. Each service page below describes the specific problems we fix, common symptoms, and what to expect during the repair. If you are not sure which service you need, <a href="/contact">contact us</a> &mdash; we will point you in the right direction.</p>
          </div>
        </section>

        {/* ─── 3. RESIDENTIAL REPAIR ─── */}
        <section className="sp-section-light" data-testid="services-residential">
          <div className="sp-section-header">
            <div className="sp-icon-circle" style={{ fontWeight: 700, fontSize: 16 }}>R</div>
            <div>
              <div className="sp-eyebrow">RESIDENTIAL</div>
              <div className="sp-section-title">Residential Appliance Repair</div>
            </div>
          </div>
          <p className="sp-section-sub">These are the most common calls we receive. Kitchen and laundry appliances that have stopped working, are leaking, making unusual noises, or failing to heat or cool properly. Most residential repairs are completed in a single visit with parts from our truck.</p>

          {(() => {
            const kitchen = RESIDENTIAL_SERVICES.filter(s => ['Refrigerator Repair','Dishwasher Repair','Oven & Range Repair','Cooktop Repair','Freezer Repair','Stove Repair','Range Repair'].includes(s.label));
            const laundry = RESIDENTIAL_SERVICES.filter(s => ['Washer Repair','Dryer Repair'].includes(s.label));
            const specialty = RESIDENTIAL_SERVICES.filter(s => ['Wine Cooler Repair','Ice Maker Repair','Garbage Disposal'].includes(s.label));
            return (<>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 22, color: '#1A1A1A', margin: '0 auto 16px', maxWidth: 1100 }} data-testid="services-h2-kitchen">Kitchen Appliance Repair</h2>
              <div className="sp-grid" style={{ marginBottom: 32 }}>
                {kitchen.map((s, i) => (
                  <a key={i} href={s.href} className="sp-card" data-testid={`service-card-kitchen-${i}`}>
                    <div className="sp-card-icon"><span style={{ fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{s.label.charAt(0)}</span></div>
                    <div>
                      <div className="sp-card-title">{s.label}</div>
                      <div className="sp-card-issues">{s.issues}</div>
                      <span className="sp-card-link">View Service &rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 22, color: '#1A1A1A', margin: '0 auto 16px', maxWidth: 1100 }} data-testid="services-h2-laundry">Laundry Appliance Repair</h2>
              <div className="sp-grid" style={{ marginBottom: 32 }}>
                {laundry.map((s, i) => (
                  <a key={i} href={s.href} className="sp-card" data-testid={`service-card-laundry-${i}`}>
                    <div className="sp-card-icon"><span style={{ fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{s.label.charAt(0)}</span></div>
                    <div>
                      <div className="sp-card-title">{s.label}</div>
                      <div className="sp-card-issues">{s.issues}</div>
                      <span className="sp-card-link">View Service &rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 22, color: '#1A1A1A', margin: '0 auto 16px', maxWidth: 1100 }} data-testid="services-h2-specialty">Specialty &amp; Commercial Repair</h2>
              <div className="sp-grid">
                {specialty.map((s, i) => (
                  <a key={i} href={s.href} className="sp-card" data-testid={`service-card-specialty-${i}`}>
                    <div className="sp-card-icon"><span style={{ fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{s.label.charAt(0)}</span></div>
                    <div>
                      <div className="sp-card-title">{s.label}</div>
                      <div className="sp-card-issues">{s.issues}</div>
                      <span className="sp-card-link">View Service &rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
            </>);
          })()}
        </section>

        {/* ─── 4. COMMERCIAL REPAIR ─── */}
        <section className="sp-section-dark" data-testid="services-commercial">
          <div className="sp-section-header">
            <div className="sp-icon-circle" style={{ fontWeight: 700, fontSize: 16 }}>C</div>
            <div>
              <div className="sp-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>COMMERCIAL</div>
              <div className="sp-section-title-white">Commercial Appliance Repair</div>
            </div>
          </div>
          <p className="sp-section-sub-white">Restaurants, laundromats, hotels, and offices rely on commercial-grade equipment that runs harder and longer than residential units. Downtime costs money. We offer priority scheduling for businesses and carry common commercial parts on every truck.</p>
          <div className="sp-grid">
            {COMMERCIAL_SERVICES.map((s, i) => (
              <a key={i} href={s.href} className="sp-card-dark" data-testid={`service-card-commercial-${i}`}>
                <div className="sp-card-icon"><span style={{ fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{s.label.charAt(0)}</span></div>
                <div>
                  <div className="sp-card-title">{s.label}</div>
                  <div className="sp-card-issues">{s.issues}</div>
                  <span className="sp-card-link">View Service &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── 5. PREVENTIVE MAINTENANCE ─── */}
        <section className="sp-section-light" data-testid="services-maintenance">
          <div className="sp-section-header">
            <div className="sp-icon-circle" style={{ fontWeight: 700, fontSize: 16 }}>M</div>
            <div>
              <div className="sp-eyebrow">MAINTENANCE</div>
              <div className="sp-section-title">Preventive Maintenance</div>
            </div>
          </div>
          <p className="sp-section-sub">Regular maintenance catches small problems before they become expensive emergency repairs. It also extends appliance lifespan by years. We recommend annual maintenance for refrigerators and dishwashers, and dryer vent cleaning at least once a year to prevent fire hazards.</p>
          <div className="sp-grid">
            {MAINTENANCE_SERVICES.map((s, i) => (
              <a key={i} href={s.href} className="sp-card" data-testid={`service-card-maintenance-${i}`}>
                <div className="sp-card-icon"><span style={{ fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{s.label.charAt(0)}</span></div>
                <div>
                  <div className="sp-card-title">{s.label}</div>
                  <div className="sp-card-issues">{s.issues}</div>
                  <span className="sp-card-link">View Service &rarr;</span>
                </div>
              </a>
            ))}
          </div>
          <a href="/maintenance" className="sp-card-link" style={{ display: 'block', textAlign: 'center', marginTop: 24, fontSize: 13, fontWeight: 600 }} data-testid="services-all-maintenance-link">View all maintenance services &rarr;</a>
        </section>

        {/* ─── 6. HOW EVERY REPAIR WORKS ─── */}
        <section className="sp-section-dark" data-testid="services-how-it-works" style={{ textAlign: 'center' }}>
          <div className="sp-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>THE PROCESS</div>
          <div style={{ fontWeight: 800, fontSize: 32, color: '#fff', marginBottom: 48 }}>How Every Repair Works</div>
          <div className="sp-steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="sp-step" data-testid={`services-step-${s.num}`}>
                <div className="sp-step-ghost">{s.num}</div>
                <div className="sp-step-num">{s.num}</div>
                <div className="sp-step-title">{s.title}</div>
                <div className="sp-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="sp-section-light" data-testid="services-faq" style={{ textAlign: 'center' }}>
          <div className="sp-eyebrow" style={{ marginBottom: 8 }}>FAQ</div>
          <div style={{ fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 40 }}>Frequently Asked Questions</div>
          <div className="sp-faq-wrap">
            {FAQ_DATA.map((f, i) => (
              <div key={i} className={`sp-faq-item${openFaq === i ? ' open' : ''}`} data-testid={`services-faq-item-${i}`}>
                <button className="sp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} data-testid={`services-faq-toggle-${i}`}>
                  <span>{f.q}</span>
                  <span className={`sp-faq-chevron${openFaq === i ? ' open' : ''}`}>{'\u25BC'}</span>
                </button>
                {openFaq === i && <div className="sp-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ─── 8. FINAL CTA ─── */}
        <section className="sp-cta" data-testid="services-final-cta">
          <div className="sp-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>GET STARTED</div>
          <div className="sp-cta-title">Not Sure Which Service You Need?</div>
          <p className="sp-cta-sub">Call us and describe the problem. We will book the right technician for same-day or next-day service &mdash; no guessing required.</p>
          <div className="sp-cta-btns">
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="sp-btn-primary" data-testid="services-cta-book-btn">Book Online</a>
            <a href="tel:7605435733" className="sp-btn-secondary" style={{ borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)' }} data-testid="services-cta-call-btn">(760) 543-5733</a>
          </div>
          <div className="sp-cta-links" data-testid="services-cta-links">
            <a href="/service-areas">Service Areas</a>
            <a href="/brands">Brands We Repair</a>
            <a href="/reviews">Customer Reviews</a>
            <a href="/san-francisco-appliance-repair">San Francisco</a>
            <a href="/blog">Tips &amp; Guides</a>
          </div>
        </section>

        {/* ─── 9. FOOTER ─── */}
        <footer className="sp-footer" data-testid="services-footer">
          <a href="/" style={{ fontWeight: 700 }}>FixitBay</a>
          <a href="tel:7605435733">(760) 543-5733</a>
          <span>&copy; 2026 FixitBay LLC</span>
        </footer>

        {/* ─── 10. FLOATING BUTTON ─── */}
        <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className={`sp-float${showFloat ? '' : ' hidden'}`} data-testid="services-floating-book-btn">BOOK REPAIR</a>

        {/* ─── MOBILE STICKY BAR ─── */}
        <div className="sp-mobile-bar" data-testid="services-mobile-bar">
          <a href="tel:7605435733">CALL</a>
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer">BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!">TEXT US</a>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

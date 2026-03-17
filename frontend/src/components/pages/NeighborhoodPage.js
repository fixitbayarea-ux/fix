import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import neighborhoodData from '../../data/neighborhoodData';

/* ───────────────────── STATIC DATA ───────────────────── */
const ALL_NEIGHBORHOODS = [
  { name: 'Sunset District', slug: 'sunset-district' },
  { name: 'Richmond District', slug: 'richmond-district' },
  { name: 'Mission District', slug: 'mission-district' },
  { name: 'Noe Valley', slug: 'noe-valley' },
  { name: 'Castro', slug: 'castro' },
  { name: 'Marina', slug: 'marina' },
  { name: 'Pacific Heights', slug: 'pacific-heights' },
  { name: 'Nob Hill', slug: 'nob-hill' },
  { name: 'North Beach', slug: 'north-beach' },
  { name: 'SoMa', slug: 'soma' },
  { name: 'Bernal Heights', slug: 'bernal-heights' },
  { name: 'Potrero Hill', slug: 'potrero-hill' },
];

const SERVICES = [
  { href: '/refrigerator-repair', label: 'Refrigerator Repair' },
  { href: '/washer-repair', label: 'Washer Repair' },
  { href: '/dryer-repair', label: 'Dryer Repair' },
  { href: '/dishwasher-repair', label: 'Dishwasher Repair' },
  { href: '/oven-repair', label: 'Oven & Range Repair' },
  { href: '/cooktop-repair', label: 'Cooktop Repair' },
  { href: '/freezer-repair', label: 'Freezer Repair' },
  { href: '/ice-maker-repair', label: 'Ice Maker Repair' },
  { href: '/stove-repair', label: 'Stove Repair' },
  { href: '/garbage-disposal-repair', label: 'Garbage Disposal' },
];

function splitCall(str) {
  const idx = str.indexOf(' \u2014 ');
  if (idx !== -1) return { title: str.slice(0, idx), body: str.slice(idx + 3) };
  const dashIdx = str.indexOf(' — ');
  if (dashIdx !== -1) return { title: str.slice(0, dashIdx), body: str.slice(dashIdx + 3) };
  return { title: str, body: '' };
}

/* ───────────────────── COMPONENT ───────────────────── */
const NeighborhoodPage = () => {
  const { neighborhood: rawNeighborhood } = useParams();
  const neighborhood = rawNeighborhood?.replace(/-appliance-repair$/, '') || rawNeighborhood;
  const data = neighborhoodData[neighborhood];
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, [neighborhood]);

  if (!data) return <div style={{ paddingTop: 100, textAlign: 'center', fontFamily: 'Montserrat,sans-serif' }}>Neighborhood not found.</div>;

  const title = `Appliance Repair in ${data.name} San Francisco | FixitBay LLC`;
  const desc = `Same-day appliance repair in ${data.name}, San Francisco. $60 diagnostic, 180-day warranty. Licensed CA technician #51001. Book online or call (760) 543-5733.`;
  const canonical = `https://fixitbay.net/san-francisco/${data.slug}-appliance-repair`;
  const faqItems = data.quickFaq || data.faq || [];
  const calls = data.topCalls || data.commonProblems || [];
  const otherNeighborhoods = ALL_NEIGHBORHOODS.filter(n => n.slug !== data.slug);

  /* SEO schemas */
  const schemasData = [
    {
      id: `nh-${data.slug}-localbusiness`,
      data: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'FixitBay LLC',
        telephone: '+17605435733',
        areaServed: { '@type': 'Place', name: `${data.name}, San Francisco, CA` },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87' },
      },
    },
    {
      id: `nh-${data.slug}-faq`,
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    },
    {
      id: `nh-${data.slug}-breadcrumb`,
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fixitbay.net/' },
          { '@type': 'ListItem', position: 2, name: 'San Francisco', item: 'https://fixitbay.net/san-francisco-appliance-repair' },
          { '@type': 'ListItem', position: 3, name: `${data.name} Appliance Repair`, item: `https://fixitbay.net/san-francisco/${data.slug}-appliance-repair` },
        ],
      },
    },
  ];

  return <NeighborhoodContent data={data} schemasData={schemasData} title={title} desc={desc} canonical={canonical} faqItems={faqItems} calls={calls} otherNeighborhoods={otherNeighborhoods} openFaq={openFaq} setOpenFaq={setOpenFaq} />;
};

const NeighborhoodContent = ({ data, schemasData, title, desc, canonical, faqItems, calls, otherNeighborhoods, openFaq, setOpenFaq }) => {
  useSchemas(schemasData);

  return (
    <>
      <SEOMetaTags title={title} description={desc} canonical={canonical} ogTitle={title} ogDescription={desc} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        :root{--navy:#0D1B2A;--navy-mid:#1A2F45;--accent:#FF5722;--cream:#F8F5F0;--accent-hover:#FF7043}
        .nh-page *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
        .nh-page a{text-decoration:none}
        .nh-eyebrow{font-weight:700;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:0.22em}

        /* HERO */
        .nh-hero{background:url('/background_new2.webp') center 60%/cover no-repeat;position:relative;min-height:520px;display:flex;align-items:center;justify-content:center;text-align:center}
        .nh-hero::before{content:'';position:absolute;inset:0;background:rgba(13,27,42,0.94)}
        .nh-hero-inner{position:relative;z-index:2;padding:80px 24px 48px;width:100%;max-width:800px;margin:0 auto}
        .nh-breadcrumb{color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:16px}
        .nh-breadcrumb a{color:rgba(255,255,255,0.5);min-height:44px;display:inline-flex;align-items:center;padding:0 4px}
        .nh-breadcrumb a:hover{color:rgba(255,255,255,0.8)}
        .nh-breadcrumb .nh-bc-arrow{color:var(--accent);margin:0 6px}
        .nh-hero h1{font-weight:800;font-size:44px;color:#fff;max-width:700px;margin:0 auto 14px;line-height:1.15}
        .nh-hero-sub{color:rgba(255,255,255,0.75);font-size:16px;max-width:560px;margin:0 auto 28px;line-height:1.6}
        .nh-hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .nh-btn-primary{background:var(--accent);color:#fff;font-weight:700;padding:14px 32px;border-radius:4px;transition:background 0.2s;font-size:15px}
        .nh-btn-primary:hover{background:var(--accent-hover)}
        .nh-btn-secondary{border:2px solid rgba(255,255,255,0.5);color:#fff;background:transparent;font-weight:700;padding:14px 32px;border-radius:4px;font-size:15px;transition:border-color 0.2s}
        .nh-btn-secondary:hover{border-color:rgba(255,255,255,0.8)}
        .nh-trust{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:28px}
        .nh-trust-item{font-size:13px;color:rgba(255,255,255,0.8)}
        .nh-trust-check{color:var(--accent);font-weight:700;margin-right:4px}

        /* LOCAL INTRO */
        .nh-intro{background:#fff;padding:56px 24px}
        .nh-intro-inner{max-width:820px;margin:0 auto;text-align:center}
        .nh-intro-inner p{font-weight:400;font-size:16px;color:#4A5568;line-height:1.9;margin-bottom:16px}

        /* PARKING */
        .nh-parking{background:var(--navy);padding:48px 24px}
        .nh-parking-card{background:var(--navy-mid);border-radius:4px;padding:28px 32px;border-left:4px solid var(--accent);max-width:820px;margin:0 auto;display:flex;gap:20px;align-items:flex-start}
        .nh-parking-icon{font-size:28px;flex-shrink:0}
        .nh-parking-text{color:rgba(255,255,255,0.78);font-size:15px;line-height:1.8}

        /* COMMON CALLS */
        .nh-calls{background:var(--cream);padding:72px 24px;text-align:center}
        .nh-calls-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;max-width:900px;margin:0 auto}
        @media(max-width:700px){.nh-calls-grid{grid-template-columns:1fr}}
        .nh-call-card{background:#fff;border:1px solid rgba(255,87,34,0.15);border-left:4px solid var(--accent);border-radius:4px;padding:20px 24px;display:flex;gap:14px;align-items:flex-start;text-align:left}
        .nh-call-num{width:28px;height:28px;background:var(--accent);color:#fff;font-weight:800;font-size:12px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .nh-call-title{font-weight:700;font-size:15px;color:#1A1A1A;margin-bottom:4px}
        .nh-call-body{font-weight:400;font-size:13px;color:#4A5568;line-height:1.6}

        /* LOCAL NOTES */
        .nh-notes{background:#fff;padding:56px 24px}
        .nh-notes-box{background:var(--cream);border-radius:4px;padding:28px 32px;border-top:3px solid var(--accent);max-width:820px;margin:0 auto}
        .nh-notes-box p{font-weight:400;font-size:15px;color:#4A5568;line-height:1.9}

        /* WHAT WE REPAIR */
        .nh-repair{background:var(--cream);padding:64px 24px;text-align:center}
        .nh-pills{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:820px;margin:0 auto}
        .nh-pill{background:#fff;border:1px solid rgba(255,87,34,0.2);border-radius:4px;padding:10px 20px;font-weight:600;font-size:13px;color:#1A1A1A;white-space:nowrap;transition:border-color 0.2s,color 0.2s}
        .nh-pill:hover{border-color:var(--accent);color:var(--accent)}
        .nh-pill-arrow{color:var(--accent);margin-right:6px}

        /* PRICING */
        .nh-pricing{background:var(--navy);padding:64px 24px;text-align:center}
        .nh-pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:780px;margin:0 auto}
        @media(max-width:600px){.nh-pricing-grid{grid-template-columns:1fr}}
        .nh-pricing-card{background:var(--navy-mid);border-radius:4px;padding:24px;border-top:3px solid var(--accent);text-align:center}
        .nh-pricing-val{font-weight:800;font-size:40px;color:var(--accent)}
        .nh-pricing-title{color:#fff;font-weight:700;font-size:15px;margin:8px 0 6px}
        .nh-pricing-body{color:rgba(255,255,255,0.6);font-size:13px;line-height:1.6}
        .nh-pricing-extra{color:rgba(255,255,255,0.6);font-size:13px;max-width:720px;margin:24px auto 0;line-height:1.8;text-align:center}

        /* FAQ */
        .nh-faq{background:var(--cream);padding:64px 24px;text-align:center}
        .nh-faq-wrap{max-width:720px;margin:0 auto;text-align:left}
        .nh-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:4px;margin-bottom:8px;overflow:hidden;transition:all 0.2s}
        .nh-faq-item.open{border-left:3px solid var(--accent)}
        .nh-faq-q{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;min-height:48px;cursor:pointer;background:none;border:none;width:100%;text-align:left;font-weight:600;font-size:14px;color:#1A1A1A}
        .nh-faq-chevron{color:var(--accent);transition:transform 0.3s;flex-shrink:0;margin-left:12px;font-size:16px}
        .nh-faq-chevron.open{transform:rotate(180deg)}
        .nh-faq-a{padding:0 20px 16px;font-weight:400;font-size:13px;color:#4A5568;line-height:1.7}

        /* FINAL CTA */
        .nh-cta{background:var(--navy);padding:64px 24px;text-align:center;border-top:3px solid var(--accent)}
        .nh-cta-title{font-weight:800;font-size:32px;color:#fff;margin-bottom:12px}
        .nh-cta-sub{color:rgba(255,255,255,0.7);font-size:15px;max-width:560px;margin:0 auto 28px;line-height:1.7}
        .nh-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .nh-cta-sec{border:1px solid rgba(255,255,255,0.4);color:#fff;background:transparent;font-weight:700;padding:14px 32px;border-radius:4px;font-size:15px;transition:border-color 0.2s}

        /* OTHER NEIGHBORHOODS */
        .nh-other{background:var(--cream);padding:40px 24px;text-align:center}
        .nh-other-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:820px;margin:0 auto}
        .nh-other-pill{background:#fff;border:1px solid rgba(255,87,34,0.2);border-radius:3px;padding:7px 16px;font-weight:500;font-size:12px;color:#4A5568;white-space:nowrap;transition:border-color 0.2s,color 0.2s}
        .nh-other-pill:hover{border-color:var(--accent);color:var(--accent)}
        .nh-other-pill-all{border-color:var(--accent);color:var(--accent);font-weight:600}

        /* FOOTER */
        .nh-footer{background:var(--navy);border-top:1px solid rgba(255,87,34,0.2);padding:24px;text-align:center}
        .nh-footer-links{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
        .nh-footer-links a{font-weight:500;font-size:12px;color:rgba(255,255,255,0.5);transition:color 0.2s}
        .nh-footer-links a:hover{color:rgba(255,255,255,0.8)}
        .nh-footer-row{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,0.5)}
        .nh-footer-row a{color:rgba(255,255,255,0.5)}
        .nh-footer-row a:hover{color:rgba(255,255,255,0.8)}

        /* BODY PADDING for global sticky bar */
        @media(max-width:767px){ body { padding-bottom: 56px; } }
        @media(max-width:767px){ .nh-page { padding-bottom: 0; } }

        @media(max-width:767px){
          .nh-hero h1{font-size:28px}
          .nh-cta-title{font-size:26px}
          .nh-parking-card{flex-direction:column;gap:12px}
        }
      `}</style>

      <div className="nh-page">

        {/* ─── 1. HERO ─── */}
        <section className="nh-hero" data-testid="nh-hero">
          <div className="nh-hero-inner">
            <div className="nh-breadcrumb" data-testid="nh-breadcrumb">
              <a href="/">Home</a>
              <span className="nh-bc-arrow">&rarr;</span>
              <a href="/san-francisco-appliance-repair">San Francisco</a>
              <span className="nh-bc-arrow">&rarr;</span>
              <span>{data.name}</span>
            </div>
            <div className="nh-eyebrow" style={{ marginBottom: 12 }}>SAN FRANCISCO &middot; {data.name.toUpperCase()}</div>
            <h1 data-testid="nh-h1">Appliance Repair in<br />{data.name}</h1>
            <p className="nh-hero-sub">Licensed same-day service for every street in {data.name}. $60 diagnostic, 180-day warranty.</p>
            <div className="nh-hero-ctas">
              <a href="/book" className="nh-btn-primary" data-testid="nh-hero-book-btn">Book Repair Online</a>
              <a href="tel:7605435733" className="nh-btn-secondary" data-testid="nh-hero-call-btn">(760) 543-5733</a>
            </div>
            <div className="nh-trust" data-testid="nh-trust-badges">
              {[
                '\u2713 Licensed CA Technician #51001',
                '\u2713 Same-Day Available',
                '\u2713 $60 Diagnostic \u00B7 Applied to Repair',
                '\u2713 180-Day Warranty',
              ].map((t, i) => (
                <span key={i} className="nh-trust-item"><span className="nh-trust-check">{t.charAt(0)}</span>{t.slice(2)}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. LOCAL INTRO ─── */}
        <section className="nh-intro" data-testid="nh-intro">
          <div className="nh-intro-inner">
            <p>{data.name} is one of San Francisco's most distinctive neighborhoods. FixitBay technicians serve {data.name} residents with same-day appliance repair &mdash; refrigerators, washers, dryers, dishwashers, ovens and more.</p>
            <p>FixitBay LLC provides licensed, same-day appliance repair throughout {data.name}. Our technicians arrive with diagnostic tools and commonly needed parts to resolve most issues in a single visit. We serve every street in {data.name} &mdash; homes, condos, and apartments &mdash; covering all major brands and appliance types.</p>
            <p>{data.localIssue}</p>
          </div>
        </section>

        {/* ─── 3. PARKING & ACCESS ─── */}
        {data.parking && (
          <section className="nh-parking" data-testid="nh-parking">
            <div style={{ maxWidth: 820, margin: '0 auto 20px' }}>
              <div className="nh-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>LOCAL KNOWLEDGE</div>
              <div style={{ fontWeight: 800, fontSize: 24, color: '#fff' }}>Parking &amp; Access in {data.name}</div>
            </div>
            <div className="nh-parking-card">
              <div className="nh-parking-icon" style={{ color: '#FF5722', fontWeight: 800, fontSize: 20 }}>P</div>
              <div className="nh-parking-text">{data.parking}</div>
            </div>
          </section>
        )}

        {/* ─── 4. MOST COMMON CALLS ─── */}
        <section className="nh-calls" data-testid="nh-calls">
          <div className="nh-eyebrow" style={{ marginBottom: 8 }}>WHAT WE SEE MOST</div>
          <div style={{ fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 48 }}>Most Common Repair Calls in {data.name}</div>
          <div className="nh-calls-grid">
            {calls.map((c, i) => {
              const { title: t, body: b } = splitCall(c);
              return (
                <div key={i} className="nh-call-card" data-testid={`nh-call-${i}`}>
                  <div className="nh-call-num">{i + 1}</div>
                  <div>
                    <div className="nh-call-title">{t}</div>
                    {b && <div className="nh-call-body">{b}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 5. LOCAL NOTES ─── */}
        {data.localNotes && (
          <section className="nh-notes" data-testid="nh-local-notes">
            <div style={{ maxWidth: 820, margin: '0 auto 24px' }}>
              <div className="nh-eyebrow" style={{ marginBottom: 8 }}>{data.name.toUpperCase()} HOMES</div>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A' }}>What We Know About {data.name}</div>
            </div>
            <div className="nh-notes-box">
              <p>{data.localNotes}</p>
            </div>
          </section>
        )}

        {/* ─── 6. WHAT WE REPAIR ─── */}
        <section className="nh-repair" data-testid="nh-what-we-repair">
          <div className="nh-eyebrow" style={{ marginBottom: 8 }}>WHAT WE FIX</div>
          <div style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8 }}>What We Repair in {data.name}</div>
          <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 32 }}>Click a service for symptoms, pricing, and what to expect</p>
          <div className="nh-pills">
            {SERVICES.map(s => (
              <a key={s.href} href={s.href} className="nh-pill" data-testid={`nh-service-${s.href.slice(1)}`}>
                <span className="nh-pill-arrow">&rarr;</span>{s.label}
              </a>
            ))}
          </div>
        </section>

        {/* ─── 7. PRICING ─── */}
        <section className="nh-pricing" data-testid="nh-pricing">
          <div className="nh-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>TRANSPARENT PRICING</div>
          <div style={{ fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 40 }}>Pricing &amp; Diagnostic</div>
          <div className="nh-pricing-grid">
            <div className="nh-pricing-card">
              <div className="nh-pricing-val">$60</div>
              <div className="nh-pricing-title">Diagnostic Fee</div>
              <div className="nh-pricing-body">Credited toward repair if you proceed. You only pay it once.</div>
            </div>
            <div className="nh-pricing-card">
              <div className="nh-pricing-val">180</div>
              <div className="nh-pricing-title">Day Warranty</div>
              <div className="nh-pricing-body">Same issue returns within 6 months? We come back at no charge.</div>
            </div>
            <div className="nh-pricing-card">
              <div className="nh-pricing-val">$0</div>
              <div className="nh-pricing-title">Hidden Fees</div>
              <div className="nh-pricing-body">Written estimate before any work. Parts and labor itemized.</div>
            </div>
          </div>
          <div className="nh-pricing-extra">
            <strong>Diagnostic fee: $60.</strong> This covers the technician&rsquo;s visit to {data.name} and a full inspection of your appliance. The technician tests components, checks error codes, and identifies the root cause &mdash; not just the symptom. If you approve the repair, the $60 is credited toward the total cost.
            <br /><br />
            <strong>Written estimate before work begins.</strong> You see the exact price &mdash; parts and labor itemized &mdash; and decide. If you decline, the diagnostic fee is the only charge. No pressure, no hidden fees.
            <br /><br />
            <strong>180-day warranty on all repairs.</strong> Parts and labor. If the same issue returns within 6 months, we come back and fix it at no additional charge. This applies to every repair we perform in {data.name}.
            <br /><br />
            <strong>OEM parts.</strong> We use original equipment manufacturer parts or certified equivalents. Our trucks carry common failure parts for major brands, which means most repairs in {data.name} finish in one visit without waiting for a parts order.
          </div>
        </section>

        {/* ─── 8. FAQ ─── */}
        <section className="nh-faq" data-testid="nh-faq">
          <div className="nh-eyebrow" style={{ marginBottom: 8 }}>FAQ</div>
          <div style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 40 }}>Quick FAQ &mdash; {data.name}</div>
          <div className="nh-faq-wrap">
            {faqItems.map((f, i) => (
              <div key={i} className={`nh-faq-item${openFaq === i ? ' open' : ''}`} data-testid={`nh-faq-item-${i}`}>
                <button className="nh-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} data-testid={`nh-faq-toggle-${i}`}>
                  <span>{f.q}</span>
                  <span className={`nh-faq-chevron${openFaq === i ? ' open' : ''}`}>{'\u25BC'}</span>
                </button>
                {openFaq === i && <div className="nh-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ─── 9. FINAL CTA ─── */}
        <section className="nh-cta" data-testid="nh-final-cta">
          <div className="nh-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>GET STARTED</div>
          <div className="nh-cta-title">Ready to Book in {data.name}?</div>
          <p className="nh-cta-sub">Schedule a licensed technician to your {data.name} home. $60 diagnostic credited toward your repair, 180-day warranty on parts and labor, and same-day appointments available for calls placed before 2 PM.</p>
          <div className="nh-cta-btns">
            <a href="/book" className="nh-btn-primary" data-testid="nh-cta-book-btn">Book Online</a>
            <a href="tel:7605435733" className="nh-cta-sec" data-testid="nh-cta-call-btn">(760) 543-5733</a>
          </div>
        </section>

        {/* ─── 10. OTHER NEIGHBORHOODS ─── */}
        <section className="nh-other" data-testid="nh-other-neighborhoods">
          <div style={{ fontWeight: 700, fontSize: 16, color: '#1A1A1A', marginBottom: 20 }}>Other SF Neighborhoods We Serve</div>
          <div className="nh-other-pills">
            {otherNeighborhoods.map(n => (
              <a key={n.slug} href={`/san-francisco/${n.slug}-appliance-repair`} className="nh-other-pill">{n.name}</a>
            ))}
            <a href="/san-francisco-appliance-repair" className="nh-other-pill nh-other-pill-all">All San Francisco &rarr;</a>
          </div>
        </section>

        {/* ─── 11. FOOTER ─── */}
        <footer className="nh-footer" data-testid="nh-footer">
          <div className="nh-footer-links">
            <a href="/san-francisco-appliance-repair">San Francisco</a>
            <a href="/services">All Services</a>
            <a href="/brands">Brands</a>
            <a href="/service-areas">Service Areas</a>
          </div>
          <div className="nh-footer-row">
            <a href="/" style={{ fontWeight: 700 }}>FixitBay</a>
            <a href="tel:7605435733">(760) 543-5733</a>
            <span>&copy; 2026 FixitBay LLC</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NeighborhoodPage;

import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import navbarLogo from '../../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', paddingBottom: 8, margin: '36px 0 0' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };

const FAQ_ITEMS = [
  { q: 'What does OE mean on my Samsung or LG washer?', a: "OE (or 0E) is a drain error \u2014 the washer couldn't drain water in the expected time. First, unplug the washer for 2 minutes to reset it. If the code returns, clean the drain pump filter (front panel, bottom of machine) and check for kinks in the drain hose. If it persists, the drain pump may need replacement." },
  { q: 'How do I clear a UE error code on my washer?', a: "UE means unbalanced load. Open the door, redistribute the clothes evenly, and restart the spin cycle. If washing a single heavy item (comforter, bath mat), add 1\u20132 towels to balance the load. Also check that the washer is level on the floor \u2014 use a bubble level on top." },
  { q: 'What causes an LE or E6 error on LG washers?', a: "LE is a motor lock error. First, unplug for 2 minutes to reset the control board. Then open the door and try to manually rotate the drum \u2014 if it won't turn, clothing may be jammed between the drum and tub. If the drum turns freely but the code returns, the motor or control board needs professional repair." },
  { q: 'Why does my washer keep showing a door error (dE / DC)?', a: "Door errors mean the washer can't confirm the door is fully closed and locked. Try opening and firmly closing the door until you hear a click. Check for clothing caught in the door seal. If the latch is visibly damaged or the error persists after a reset, the door lock assembly needs replacement \u2014 about a $100\u2013$200 repair." },
  { q: 'How much does washer repair cost in San Francisco Bay Area?', a: "Washer repairs in the Bay Area typically cost $150\u2013$350 depending on the error and part needed. Drain pump replacement: $150\u2013$250. Control board: $200\u2013$350. Motor repair: $200\u2013$300. FixitBay charges $60 for diagnostics, credited toward your repair." },
  { q: 'Can I fix washer error codes myself or do I need a technician?', a: "It depends on the code. DIY-friendly: UE (rebalance load), OE with clogged filter, dE from clothing caught in door, IE with closed water valves. Always call a pro for: LE/motor errors, persistent OE after filter clean, F codes, and any error after multiple failed resets \u2014 these involve electrical components and internal parts." },
];

const TOC = [
  { id: 'drain-error', label: 'OE / 0E / 03 \u2014 Drain Error' },
  { id: 'unbalanced-load', label: 'UE / UB / E4 \u2014 Unbalanced Load' },
  { id: 'motor-lock', label: 'LE / LC / E6 \u2014 Motor Lock Error' },
  { id: 'door-error', label: 'dE / DE / DC \u2014 Door Error' },
  { id: 'water-inlet', label: 'IE / 1E / E1 \u2014 Water Inlet Error' },
  { id: 'brand-resources', label: 'Brand-Specific Resources' },
  { id: 'faq', label: 'FAQ \u2014 Error Codes Explained' },
];

const QUICK_CODES = [
  { code: 'OE / 03', meaning: 'Drain Error' },
  { code: 'UE / E4', meaning: 'Unbalanced Load' },
  { code: 'LE / E6', meaning: 'Motor Lock Error' },
  { code: 'dE / DC', meaning: 'Door Error' },
  { code: 'IE / E1', meaning: 'Water Inlet Error' },
  { code: 'F21', meaning: 'Drain Timeout (Whirlpool)' },
];

const BRANDS = [
  { name: 'LG', text: 'LG Support website or mobile app' },
  { name: 'SAMSUNG', text: 'Samsung Appliance Support' },
  { name: 'WHIRLPOOL', text: 'Whirlpool Product Help' },
  { name: 'GE', text: 'GE Appliances Support Center' },
  { name: 'BOSCH', text: 'Bosch Home Appliances Service' },
];

const DiyBox = ({ label, steps }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label || 'DIY FIX'}</span>
    </div>
    {steps.map((s, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}.</span>
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{s}</span>
      </div>
    ))}
  </div>
);

const CauseList = ({ items }) => items.map((item, i) => (
  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', marginTop: 6, flexShrink: 0 }} />
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
  </div>
));

const ErrorH2 = ({ id, badge, title }) => (
  <>
    <h2 id={id} style={H2S}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '3px 10px', borderRadius: 3, whiteSpace: 'nowrap' }}>{badge}</span>
        <span>{title}</span>
      </div>
    </h2>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.2)', marginBottom: 16, marginTop: 8 }} />
  </>
);

const WasherErrorCodes = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Common Washer Error Codes & What They Mean", "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-02-10", "dateModified": "2026-02-10", "url": "https://fixitbay.net/blog/washer-error-codes" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Washer Error Codes", "item": "https://fixitbay.net/blog/washer-error-codes" } ] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Washer Error Codes: OE, UE, LE, dE, IE Explained | FixitBay"
        description="What does OE, UE, LE or dE mean on your Samsung, LG, Whirlpool or GE washer? Full error code guide with DIY fixes and when to call a pro."
        canonical="https://fixitbay.net/blog/washer-error-codes"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .wec-h1{font-size:40px !important}
          @media(max-width:767px){
            .wec-h1{font-size:28px !important}
            .wec-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .qref-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
          .brand-card:hover{border-color:rgba(255,87,34,0.4) !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="article-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Washer</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Washer</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>January 10, 2026</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>8 min read</span>
            </div>
            <h1 className="wec-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 760, margin: '0 auto 16px' }}>
              Common Washer Error Codes &amp; What They Mean — Samsung, LG, Whirlpool, GE, Bosch Guide
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 640, margin: '0 auto' }}>
              Decode OE, UE, LE, and other error codes from Samsung, LG, Whirlpool, and GE washers. Learn what each code means and simple troubleshooting steps you can try before calling for service.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="wec-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* Quick Reference */}
              <div data-testid="quick-ref" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 14 }}>Quick Error Code Reference</p>
                <div className="qref-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {QUICK_CODES.map(c => (
                    <div key={c.code} style={{ background: 'rgba(255,87,34,0.15)', border: '1px solid rgba(255,87,34,0.3)', borderRadius: 4, padding: '8px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', whiteSpace: 'nowrap' }}>{c.code}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>{c.meaning}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: 12 }}>Click any section below for full details and DIY fixes</p>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>Modern washing machines are equipped with sophisticated diagnostic systems that display error codes when something goes wrong. While these cryptic combinations of letters and numbers can be confusing, they're actually helpful—they tell you (and your technician) exactly what's wrong.</p>

              {/* Pro Tip */}
              <div style={{ background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '16px 20px', marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{'\uD83D\uDCA1'}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722' }}>Pro Tip:</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>Before calling for service, try this universal fix: <strong style={{ color: '#1A1A1A' }}>Unplug the washer for 2 minutes</strong> to reset the control board. This resolves many error codes caused by temporary glitches.</p>
              </div>

              {/* ── OE ── */}
              <ErrorH2 id="drain-error" badge="OE / 0E / 03" title="Drain Error" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common brands:</strong> LG, GE, Samsung</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What it means:</strong> The washer is unable to drain water within the allotted time (usually 8-10 minutes).</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common causes:</strong></p>
              <CauseList items={['Clogged drain pump filter (most common)', 'Kinked or clogged drain hose', 'Faulty drain pump', 'Clogged household drain pipe']} />
              <DiyBox steps={['Unplug the washer', 'Locate and clean the drain pump filter (usually behind a small panel at the front bottom)', 'Check the drain hose for kinks or clogs', 'Plug back in and test with a drain/spin cycle']} />

              {/* ── UE ── */}
              <ErrorH2 id="unbalanced-load" badge="UE / UB / E4" title="Unbalanced Load" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common brands:</strong> LG, Samsung, Bosch</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What it means:</strong> The washer detected an unbalanced load and stopped the spin cycle to prevent damage.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common causes:</strong></p>
              <CauseList items={['Washing a single heavy item (like a comforter or bath mat)', 'Overloading the washer', 'Washer not level on the floor', 'Shipping bolts not removed (new washers)']} />
              <DiyBox steps={['Open the washer and redistribute the load evenly', 'Add a few towels if washing a single heavy item', 'Check that the washer is level (use a bubble level on top)', 'Restart the spin cycle']} />

              {/* ── LE ── */}
              <ErrorH2 id="motor-lock" badge="LE / LC / E6" title="Motor Lock Error" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common brands:</strong> LG, Samsung</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What it means:</strong> The motor is unable to turn the drum, or the control board is not receiving proper feedback from the motor.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common causes:</strong></p>
              <CauseList items={['Clothing stuck between the drum and tub', 'Seized motor bearings', 'Faulty motor or wiring', 'Control board glitch']} />
              <DiyBox label="DIY TROUBLESHOOTING" steps={['Unplug for 2 minutes to reset the control board', 'Open the door and manually rotate the drum\u2014does it turn freely? If not, something may be jammed', 'If the drum turns freely but error persists, it\u2019s likely a motor or control board issue (call a pro)']} />

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need appliance repair in San Francisco?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Same-day service · $60 diagnostic · 180-day warranty</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none' }}>Call (760) 543-5733</a>
                    <a href="/book" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>Book online →</a>
                  </div>
                </div>
              </div>

              {/* ── dE ── */}
              <ErrorH2 id="door-error" badge="dE / DE / DC" title="Door Error" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common brands:</strong> Samsung, LG, Bosch</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What it means:</strong> The door is not closing properly or the door lock mechanism has failed.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common causes:</strong></p>
              <CauseList items={['Clothing caught in the door seal', 'Worn or damaged door gasket', 'Faulty door latch or lock assembly', 'Misaligned door']} />
              <DiyBox steps={['Open and firmly close the door until you hear a click', 'Inspect the door seal for damage or obstructions', 'Check for clothing caught in the latch', 'If the error persists, the door lock may need replacement']} />

              {/* ── IE ── */}
              <ErrorH2 id="water-inlet" badge="IE / 1E / E1" title="Water Inlet Error" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common brands:</strong> LG, Samsung, GE</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What it means:</strong> The washer is not filling with water within the expected time frame.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Common causes:</strong></p>
              <CauseList items={['Water supply valves turned off or partially closed', 'Clogged inlet hose screens/filters', 'Low water pressure', 'Faulty water inlet valve']} />
              <DiyBox steps={['Check that both hot and cold water valves behind the washer are fully open', 'Turn off water, disconnect hoses, and inspect the inlet screens for debris', 'Clean screens with a small brush, reconnect, and test']} />

              {/* ── Brand Resources ── */}
              <h2 id="brand-resources" style={{ ...H2S, borderBottom: '2px solid rgba(255,87,34,0.2)', paddingBottom: 8, marginBottom: 16 }}>Brand-Specific Resources</h2>
              <p style={{ ...P, marginBottom: 16 }}>Error codes vary by brand. For a complete list, consult your owner's manual or visit your manufacturer's website:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {BRANDS.map(b => (
                  <div key={b.name} className="brand-card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, transition: 'border-color 0.2s' }}>
                    <span style={{ background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '4px 12px', borderRadius: 3, minWidth: 80, textAlign: 'center', flexShrink: 0 }}>{b.name}</span>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722' }}>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Washer Error Codes — Answered</h2>
                {FAQ_ITEMS.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="faq-q" data-testid={`faq-${i}`} style={{ background: '#fff', border: isOpen ? 'none' : '1px solid rgba(0,0,0,0.08)', borderLeft: isOpen ? '3px solid #FF5722' : '1px solid rgba(0,0,0,0.08)', borderRadius: 4, marginBottom: 8, overflow: 'hidden' }} onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', cursor: 'pointer' }}>
                        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A', flex: 1, paddingRight: 12 }}>{faq.q}</span>
                        <ChevronDown size={18} style={{ color: '#FF5722', flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </div>
                      {isOpen && <div style={{ padding: '0 16px 16px' }}><p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{faq.a}</p></div>}
                    </div>
                  );
                })}
              </div>

              {/* ── Bottom CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={{ ...EYE, marginBottom: 8 }}>WASHER REPAIR EXPERTS</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Can't Resolve Your Washer Error Code?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians diagnose and repair all washer brands. We speak the language of error codes!</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Repair</a>
                </div>
              </div>

              {/* ── Author ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; 10+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1 */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>SAME-DAY WASHER REPAIR</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Error Code Won't Clear?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty on all work.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Brands: LG, Samsung, Whirlpool, GE', 'Same-Day Available', 'Licensed CA Technician'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Repair Online</a>
              </div>

              {/* Widget 2: Cheatsheet */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Error Code Cheatsheet</p>
                {QUICK_CODES.map(c => (
                  <div key={c.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '3px 8px', borderRadius: 3 }}>{c.code}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{c.meaning}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', marginTop: 10, textAlign: 'center' }}>Try unplugging 2 min before calling</p>
              </div>

              {/* Widget 3 */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: '5 Reasons Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'How Much Does Washer Repair Cost?', href: '/blog' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>{link.text}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ━━━ RELATED ARTICLES ━━━ */}
        <section data-testid="related-articles" style={{ background: '#fff', padding: '40px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#0D1B2A', marginBottom: 20 }}>Related articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { title: 'Dryer Not Heating? Common Causes & Repair Cost', href: '/blog/dryer-not-heating' },
                { title: 'Why Is My Dryer Taking So Long to Dry?', href: '/blog/dryer-taking-too-long' },
                { title: 'Dishwasher Not Draining? 7 Fixes to Try First', href: '/blog/dishwasher-not-draining' },
              ].map((a, i) => (
                <Link key={i} to={a.href} data-testid={`related-article-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 5. RELATED SERVICES ━━━ */}
        <section data-testid="related-services" style={{ background: '#0D1B2A', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>EXPLORE MORE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 28 }}>Related Services &amp; Articles</h2>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { tag: 'SERVICE', title: 'Washer Repair in Bay Area', body: 'Same-day washer repair for all brands. $60 diagnostic applied to repair.', link: 'View Service', href: '/washer-repair' },
                { tag: 'ARTICLE', title: 'Why Is My Dryer Taking So Long to Dry?', body: '7 causes with DIY fixes and when to call a Bay Area technician.', link: 'Read Article', href: '/blog/dryer-taking-too-long' },
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service repair across all SF neighborhoods. Same-day available.', link: 'View Service', href: '/san-francisco-appliance-repair' },
              ].map((card, i) => (
                <Link key={i} to={card.href} className="related-card" style={{ background: '#1A2F45', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 24, textDecoration: 'none', transition: 'border-color 0.2s', display: 'block' }}>
                  <span style={{ display: 'inline-block', background: card.tag === 'SERVICE' ? '#FF5722' : 'rgba(255,255,255,0.1)', color: card.tag === 'SERVICE' ? '#fff' : 'rgba(255,255,255,0.7)', fontFamily: F, fontWeight: 700, fontSize: 9, padding: '3px 8px', borderRadius: 3, letterSpacing: '0.08em', marginBottom: 12 }}>{card.tag}</span>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 12 }}>{card.body}</p>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>{card.link} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 6. FOOTER ━━━ */}
        <footer data-testid="article-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING + MOBILE ━━━ */}
        {showFloat && <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR</a>}
        {showFloat && <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.3)', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
          <a href="tel:+17605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
        </div>}
      </div>
    </>
  );
};

export default WasherErrorCodes;

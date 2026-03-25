import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import navbarLogo from '../../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', borderBottom: '2px solid rgba(255,87,34,0.2)', paddingBottom: 8, margin: '36px 0 16px' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };

const FAQ_ITEMS = [
  { q: 'What is the 50% rule for appliance repair?', a: "The 50% rule states: if the repair cost exceeds 50% of the appliance's replacement cost, and the appliance is past 50% of its expected lifespan, replacement is usually smarter. For a $1,200 refrigerator, that means don't spend more than $600 on repairs." },
  { q: 'How do I know if my appliance is worth repairing in the Bay Area?', a: "Three key factors: age (under 10 years is generally repairable), repair cost vs replacement cost (50% rule), and repair history (2+ repairs in a year is a red flag). FixitBay technicians give honest assessments \u2014 we'll tell you if replacement makes more financial sense." },
  { q: 'Is it ever worth repairing a 15-year-old appliance?', a: "Rarely for standard brands. However, premium appliances like Sub-Zero, Wolf, and Thermador are built to last 20\u201325 years and are almost always worth repairing \u2014 replacement parts are available, and new models cost $5,000\u2013$15,000+." },
  { q: 'What appliances are most worth repairing?', a: "Refrigerators and washing machines have the best repair-to-replace value if under 10 years old. Dishwashers and dryers are borderline at 8+ years. Microwaves are almost never worth professional repair \u2014 replacement is usually cheaper." },
  { q: 'Does FixitBay give honest repair vs replace advice?', a: "Always. Our $60 diagnostic includes an honest assessment of whether the repair makes financial sense. If we think replacement is smarter, we'll tell you \u2014 even if that means we don't do the repair. Our reputation is built on trust, not unnecessary repairs." },
];

const TOC = [
  { id: 'fifty-percent-rule', label: 'The 50% Rule: Your Primary Decision Tool' },
  { id: 'appliance-age', label: 'Factor #2: Appliance Age & Expected Lifespan' },
  { id: 'energy-efficiency', label: 'Factor #3: Energy Efficiency Gains' },
  { id: 'repair-frequency', label: 'Factor #4: Repair Frequency' },
  { id: 'warranty', label: 'Factor #5: Warranty Coverage' },
  { id: 'decision-matrix', label: 'Quick Decision Matrix' },
  { id: 'real-examples', label: 'Real-World Examples' },
  { id: 'faq', label: 'FAQ' },
];

const LIFESPAN = [
  { name: 'Refrigerators', years: '10\u201313 years' },
  { name: 'Washers', years: '10\u201312 years' },
  { name: 'Dryers', years: '10\u201313 years' },
  { name: 'Dishwashers', years: '9\u201310 years' },
  { name: 'Ovens & Ranges', years: '13\u201315 years' },
  { name: 'Microwaves', years: '8\u20139 years' },
];

const REPAIR_IF = [
  'Appliance is less than 5 years old',
  'Repair cost is under 50% of replacement cost',
  'Still under warranty',
  "It's a simple, inexpensive fix ($200 or less)",
  'You love the appliance and it fits your space perfectly',
];

const REPLACE_IF = [
  'Appliance is past 50% of expected lifespan + repair cost exceeds 50% of replacement',
  "You've had multiple repairs in the past year",
  'Major component failure (compressor, motor, control board)',
  'Energy efficiency gains would offset replacement cost',
  'Appliance is so old that parts are hard to find',
];

const RepairVsReplace = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    {
      id: 'blogposting-schema',
      data: {
        "@context": "https://schema.org", "@type": "BlogPosting",
        "headline": "Repair vs Replace: When to Fix Your Appliance",
        "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
        "publisher": { "@type": "Organization", "name": "FixitBay LLC" },
        "datePublished": "2026-01-01",
        "dateModified": "2026-01-01",
        "url": "https://fixitbay.net/blog/when-to-repair-vs-replace"
      }
    },
    {
      id: 'faq-schema',
      data: {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }
    },
    {
      id: 'breadcrumb-schema',
      data: {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" },
          { "@type": "ListItem", "position": 3, "name": "Repair vs Replace", "item": "https://fixitbay.net/blog/when-to-repair-vs-replace" }
        ]
      }
    }
  ], []);

  useSchemas(schemas);

  const VerdictItem = ({ text, bold }) => (
    <div style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
        <span style={{ color: '#FF5722', fontSize: 11, fontWeight: 700 }}>{'\u2713'}</span>
      </div>
      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{text} {bold && <strong style={{ color: '#1A1A1A' }}>{bold}</strong>}</span>
    </div>
  );

  return (
    <>
      <SEOMetaTags
        title="When to Repair vs Replace Your Appliance | FixitBay"
        description="Should you repair or replace your appliance? Use the 50% rule with our expert guide — age, costs, energy efficiency, and real examples."
        canonical="https://fixitbay.net/blog/when-to-repair-vs-replace"
        ogType="article"
      />


      <div style={{ fontFamily: F }}>
        <style>{`
          .rvr-h1{font-size:40px !important}
          @media(max-width:767px){
            .rvr-h1{font-size:26px !important}
            .rvr-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .matrix-grid{grid-template-columns:1fr !important}
            .lifespan-grid{grid-template-columns:1fr 1fr !important}
          }
          .toc-link{transition:all 0.15s}
          .toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}
          .faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="article-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Expert Advice</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Expert Advice</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>January 15, 2026</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>6 min read</span>
            </div>
            <h1 className="rvr-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Repair vs Replace: When to Fix Your Appliance — Bay Area Expert Guide
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Not sure if it's worth repairing your old appliance? Use our expert guide based on the 50% rule, age considerations, and repair costs. Make the right financial decision for your home.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="rvr-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE CONTENT ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    {i + 1}. {t.label}
                  </a>
                ))}
              </div>

              {/* Intro */}
              <p style={P}>When your refrigerator stops cooling, your washer won't drain, or your oven won't heat, you face a critical decision: <strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>Should I repair this appliance, or is it time to replace it?</strong></p>
              <p style={P}>The answer isn't always obvious. A $200 repair might seem expensive until you realize a new appliance costs $1,500. On the flip side, repairing a 15-year-old unit that's near the end of its lifespan may just delay the inevitable.</p>
              <p style={{ ...P, marginBottom: 24 }}>Here's a professional framework to help you make the smartest financial decision:</p>

              {/* ── The 50% Rule ── */}
              <h2 id="fifty-percent-rule" style={H2S}>The 50% Rule: Your Primary Decision Tool</h2>
              <p style={P}>The appliance repair industry uses a simple formula called the <strong style={{ color: '#1A1A1A' }}>50% Rule</strong>:</p>
              <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '24px 28px', margin: '16px 0', borderLeft: '3px solid #FF5722' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 10 }}>The 50% Rule Formula:</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                  <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>If repair cost &gt; 50% of replacement cost</strong> AND <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>appliance is past 50% of its expected lifespan</strong>, consider replacement.
                </p>
              </div>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Example:</strong> Your 7-year-old refrigerator (expected lifespan: 13 years) needs a $700 repair. A comparable new refrigerator costs $1,400.</p>
              <VerdictItem text="Repair cost: $700 (50% of $1,400 replacement cost)" />
              <VerdictItem text="Age: 7 years (54% through expected 13-year lifespan)" />
              <VerdictItem text="" bold="Verdict: Consider replacement. The appliance is past its midpoint, and the repair is costly." />

              {/* ── Appliance Age ── */}
              <h2 id="appliance-age" style={H2S}>Factor #2: Appliance Age &amp; Expected Lifespan</h2>
              <p style={P}>Average appliance lifespans:</p>
              <div className="lifespan-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
                {LIFESPAN.map(item => (
                  <div key={item.name} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '16px 20px', textAlign: 'center' }}>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 4 }}>{item.name}</p>
                    <p style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#FF5722' }}>{item.years}</p>
                  </div>
                ))}
              </div>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Rule of thumb:</strong> If your appliance is within the last 3 years of its expected lifespan, replacement usually makes more financial sense than major repairs.</p>

              {/* ── Energy Efficiency ── */}
              <h2 id="energy-efficiency" style={H2S}>Factor #3: Energy Efficiency Gains</h2>
              <p style={P}>Appliances manufactured today are 10-50% more energy-efficient than models from 10+ years ago. This is especially true for refrigerators, dishwashers, and washers.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Financial impact:</strong> A new Energy Star refrigerator can save $50-$100+ per year on electricity compared to a 10-year-old model. Over 10 years, that's $500-$1,000 in savings.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to factor this in:</strong> If your appliance is old, inefficient, and requires a costly repair, the energy savings from a new model can justify replacement even if the 50% rule is borderline.</p>

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

              {/* ── Repair Frequency ── */}
              <h2 id="repair-frequency" style={H2S}>Factor #4: Repair Frequency</h2>
              <p style={P}>If you've had to repair the same appliance 2-3 times in the past year, that's a red flag.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why?</strong> Multiple repairs signal cascading failures. Once one component fails, others often follow shortly after—especially in older units.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Decision guideline:</strong> After the second major repair in 12 months, strongly consider replacement.</p>

              {/* ── Warranty ── */}
              <h2 id="warranty" style={H2S}>Factor #5: Warranty Coverage</h2>
              <p style={P}>Most appliances come with a 1-year manufacturer warranty. Many premium brands offer extended warranties on key components (e.g., compressors, motors) for 5-10 years.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Check your warranty first!</strong> If your appliance is still under warranty, repairs may be free or heavily discounted. This makes repair the obvious choice.</p>

              {/* ── Decision Matrix ── */}
              <h2 id="decision-matrix" style={H2S}>Quick Decision Matrix</h2>
              <div className="matrix-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 24px' }}>
                {/* REPAIR IF */}
                <div style={{ background: 'rgba(255,87,34,0.06)', border: '1px solid rgba(255,87,34,0.25)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'\u2713'}</div>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 15, color: '#FF5722' }}>REPAIR IF:</span>
                  </div>
                  {REPAIR_IF.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                    </div>
                  ))}
                </div>
                {/* REPLACE IF */}
                <div style={{ background: 'rgba(26,47,69,0.06)', border: '1px solid rgba(26,47,69,0.2)', borderLeft: '3px solid #0D1B2A', borderRadius: 4, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'\u2715'}</div>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 15, color: '#0D1B2A' }}>REPLACE IF:</span>
                  </div>
                  {REPLACE_IF.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0D1B2A', flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Real-World Examples ── */}
              <h2 id="real-examples" style={H2S}>Real-World Examples</h2>
              {/* Scenario 1: Repair */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.2)', borderLeft: '3px solid #FF5722', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>{'\u2713'} REPAIR</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>Scenario 1: Samsung Washer</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>
                  A 3-year-old Samsung washer won't spin. Diagnosis: faulty lid switch ($120 repair). Replacement cost: $800. <strong style={{ color: '#FF5722', fontWeight: 700 }}>Decision: Repair.</strong> The appliance is young, the repair is inexpensive, and you'll get 7+ more years of use.
                </p>
              </div>
              {/* Scenario 2: Replace */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(26,47,69,0.2)', borderLeft: '3px solid #0D1B2A', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ background: 'rgba(26,47,69,0.08)', color: '#0D1B2A', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>{'\u2715'} REPLACE</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>Scenario 2: GE Refrigerator</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>
                  A 12-year-old GE refrigerator needs a new compressor ($650 repair). Replacement cost: $1,200. <strong style={{ color: '#0D1B2A', fontWeight: 700 }}>Decision: Replace.</strong> The appliance is at the end of its lifespan (13 years expected), repair is 54% of replacement cost, and a new fridge will be more energy-efficient.
                </p>
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Repair vs Replace — Common Questions</h2>
                {FAQ_ITEMS.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="faq-q" data-testid={`faq-${i}`} style={{ background: '#fff', border: isOpen ? 'none' : '1px solid rgba(0,0,0,0.08)', borderLeft: isOpen ? '3px solid #FF5722' : '1px solid rgba(0,0,0,0.08)', borderRadius: 4, marginBottom: 8, overflow: 'hidden' }} onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', cursor: 'pointer' }}>
                        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A', flex: 1, paddingRight: 12 }}>{faq.q}</span>
                        <ChevronDown size={18} style={{ color: '#FF5722', flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </div>
                      {isOpen && (
                        <div style={{ padding: '0 16px 16px' }}>
                          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ── Bottom CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={{ ...EYE, marginBottom: 8 }}>FREE EXPERT ADVICE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Need Expert Advice on Your Appliance?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians provide honest diagnostic assessments and fair repair quotes. We'll help you decide whether repair or replacement makes sense.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call for Free Estimate</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book $60 Diagnostic</a>
                </div>
              </div>

              {/* ── Author Box ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; 10+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Get Diagnosis */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>HONEST ASSESSMENT</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Not Sure What to Do?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Book a $60 diagnostic — we'll tell you honestly if repair makes sense.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Honest Repair vs Replace Advice', '$60 Applied to Repair Cost', '180-Day Warranty if We Fix It'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }}>Book $60 Diagnostic</a>
              </div>

              {/* Widget 2: Quick Decision Guide */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Quick Decision Guide</p>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: '#FF5722', marginBottom: 6 }}>REPAIR if:</p>
                {['Under 8 years old', 'Repair < 50% of new price', 'First major repair', 'Premium brand'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 6, padding: '3px 0' }}>
                    <span style={{ color: '#FF5722', fontSize: 10 }}>&bull;</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: '#0D1B2A', marginBottom: 6, marginTop: 14 }}>REPLACE if:</p>
                {['Over 12 years old', 'Repair > 50% of new price', '2nd+ major repair this year', 'Parts hard to find'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 6, padding: '3px 0' }}>
                    <span style={{ color: '#0D1B2A', fontSize: 10 }}>&bull;</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: '5 Reasons Your Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'Refrigerator Repair Costs in SF Bay Area', href: '/blog/refrigerator-repair-cost-san-francisco-2026' },
                  { text: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>
                    {link.text}
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
                { title: 'How Long Do Appliances Last? Average Lifespan Guide', href: '/blog/appliance-lifespan' },
                { title: 'Energy-Efficient Appliances: Worth the Cost?', href: '/blog/energy-efficient-appliances' },
                { title: 'Appliance Repair Cost in San Francisco 2026', href: '/blog/appliance-repair-cost-san-francisco' },
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
                { tag: 'SERVICE', title: 'Appliance Repair in Bay Area', body: 'Same-day repair for all major brands. $60 diagnostic, 180-day warranty.', link: 'View Services', href: '/services' },
                { tag: 'ARTICLE', title: '5 Reasons Your Refrigerator Isn\'t Cooling', body: 'DIY fixes and when to call a professional in the Bay Area.', link: 'Read Article', href: '/blog/refrigerator-not-cooling' },
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service appliance repair across all SF neighborhoods.', link: 'View Service', href: '/san-francisco-appliance-repair' },
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

        {/* ━━━ 6. MINIMAL FOOTER ━━━ */}
        <footer data-testid="article-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING (desktop) ━━━ */}
        {showFloat && (
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
            BOOK REPAIR
          </a>
        )}
        {showFloat && (
          <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.3)', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
            <a href="tel:+17605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>BOOK ONLINE</a>
            <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
          </div>
        )}
      </div>
    </>
  );
};

export default RepairVsReplace;

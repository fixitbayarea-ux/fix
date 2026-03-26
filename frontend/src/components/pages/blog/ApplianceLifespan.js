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
  { q: 'How long do refrigerators last on average?', a: "Most refrigerators last 10\u201313 years, with top-freezer models often reaching 15+ years. French-door and side-by-side models average 10\u201312 years due to more complex ice/water systems. Regular maintenance \u2014 cleaning condenser coils every 6 months and replacing water filters \u2014 can extend lifespan by 3\u20135 years." },
  { q: 'What makes appliances wear out faster in the Bay Area?', a: "San Francisco\u2019s coastal humidity accelerates corrosion on metal components, particularly in refrigerators and dryers. Mineral-rich Bay Area water causes buildup in dishwashers and washing machines. Homes with hard water should clean appliance filters more frequently \u2014 every 3 months instead of every 6." },
  { q: 'Is it better to repair or replace an appliance that\u2019s 10 years old?', a: "Use the 50% rule: if repair cost exceeds 50% of replacement cost AND the appliance is past 50% of its expected lifespan, replacement usually makes more sense. However, premium brands (Sub-Zero, Wolf, Thermador) are built to 20\u201325 year lifespans and are almost always worth repairing. Our technicians give honest advice after the $60 diagnostic." },
  { q: 'How can I extend my appliance\u2019s lifespan?', a: "Five proven ways: (1) Clean condenser coils on refrigerators every 6 months, (2) clean dryer vent duct annually, (3) run dishwasher cleaning cycles monthly, (4) don\u2019t overload washers or dryers \u2014 fill max 3/4 full, (5) schedule professional maintenance every 2\u20133 years for high-use appliances. Proper maintenance adds 3\u20135 years on average." },
  { q: 'What appliance brands last the longest?', a: "For longevity, Sub-Zero and Wolf are in a class of their own \u2014 built for 20\u201325+ year lifespans with available parts for decades. Among standard brands, Whirlpool, Maytag, and LG consistently score well for reliability at 12\u201315 years with proper maintenance. Samsung and French-door models from any brand tend to have shorter lifespans due to complex electronics and ice systems." },
];

const TOC = [
  { id: 'refrigerators', label: 'Refrigerators: 10\u201313 Years' },
  { id: 'washers', label: 'Washers: 10\u201312 Years' },
  { id: 'dryers', label: 'Dryers: 10\u201313 Years' },
  { id: 'dishwashers', label: 'Dishwashers: 9\u201310 Years' },
  { id: 'ovens-ranges', label: 'Ovens & Ranges: 13\u201315 Years' },
  { id: 'quick-reference', label: 'Quick Reference: All Lifespans' },
  { id: 'when-to-plan', label: 'When to Start Planning for Replacement' },
  { id: 'faq', label: 'FAQ' },
];

const BARS = [
  { label: 'Refrigerators', pct: 87, years: '10\u201313 yrs' },
  { label: 'Washers', pct: 73, years: '10\u201312 yrs' },
  { label: 'Dryers', pct: 87, years: '10\u201313 yrs' },
  { label: 'Dishwashers', pct: 63, years: '9\u201310 yrs' },
  { label: 'Ovens & Ranges', pct: 100, years: '13\u201315 yrs' },
];

const TABLE_ROWS = [
  { name: 'Refrigerators', years: '10\u201313 years' },
  { name: 'Washers', years: '10\u201312 years' },
  { name: 'Dryers', years: '10\u201313 years' },
  { name: 'Dishwashers', years: '9\u201310 years' },
  { name: 'Ovens & Ranges', years: '13\u201315 years' },
  { name: 'Microwaves', years: '8\u20139 years' },
];

const PLANNING = [
  { icon: '\uD83E\uDDCA', title: 'Refrigerator (13 years)', advice: 'Start planning at year 10' },
  { icon: '\uD83E\uDEE7', title: 'Washer/Dryer (11\u201313 years)', advice: 'Start planning at year 8\u20139' },
  { icon: '\uD83C\uDF7D\uFE0F', title: 'Dishwasher (9 years)', advice: 'Start planning at year 7' },
  { icon: '\uD83D\uDD25', title: 'Oven (15 years)', advice: 'Start planning at year 11' },
];

const FactorList = ({ items }) => items.map((item, i) => (
  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', marginTop: 6, flexShrink: 0 }} />
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
  </div>
));

const TipBox = ({ tips }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MAINTENANCE TIPS</span>
    </div>
    {tips.map((t, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < tips.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF5722', marginTop: 7, flexShrink: 0 }} />
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{t}</span>
      </div>
    ))}
  </div>
);

const SectionH2 = ({ id, badge, title }) => (
  <>
    <div id={id} style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '36px 0 16px' }}>
      <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '4px 12px', borderRadius: 3, flexShrink: 0, whiteSpace: 'nowrap' }}>{badge}</span>
      <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.2)', marginBottom: 16 }} />
  </>
);

const ApplianceLifespan = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "How Long Should Your Appliances Last?", "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/appliance-lifespan" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Appliance Lifespan", "item": "https://fixitbay.net/blog/appliance-lifespan" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="How Long Do Appliances Last? Lifespan Guide | FixitBay"
        description="How long do refrigerators, washers, dryers, dishwashers, and ovens last? Expert lifespan guide with maintenance tips to extend appliance life."
        canonical="https://fixitbay.net/blog/appliance-lifespan"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .life-h1{font-size:40px !important}
          @media(max-width:767px){
            .life-h1{font-size:28px !important}
            .life-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .plan-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="article-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Expert Advice</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Expert Advice</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>January 3, 2026</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>6 min read</span>
            </div>
            <h1 className="life-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 760, margin: '0 auto 16px' }}>
              How Long Should Your Appliances Last? — Expected Lifespan Guide for Bay Area Homes
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 640, margin: '0 auto' }}>
              Expected lifespans for refrigerators, washers, dryers, dishwashers, and ovens. Learn when to start planning for replacement and how proper maintenance extends appliance life by years.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="life-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* Lifespan Visual Overview */}
              <div data-testid="lifespan-bars" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>Average Appliance Lifespans</p>
                {BARS.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#fff', minWidth: 120 }}>{b.label}</span>
                    <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${b.pct}%`, height: '100%', background: '#FF5722', borderRadius: 4 }} />
                    </div>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', minWidth: 60, textAlign: 'right' }}>{b.years}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginTop: 8 }}>Proper maintenance can add 3&ndash;5 years to any appliance</p>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>Appliances are major investments, and knowing their expected lifespans helps you budget for replacements and make informed repair-vs-replace decisions. Here's what you can realistically expect from each major appliance&mdash;and how to maximize their longevity.</p>

              {/* ── Refrigerators ── */}
              <SectionH2 id="refrigerators" badge="10&ndash;13 YRS" title="Refrigerators" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Average lifespan:</strong> 13 years</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Factors that affect lifespan:</strong></p>
              <FactorList items={[
                <><strong style={{ color: '#1A1A1A' }}>Type:</strong> Top-freezer models last longest (15+ years). French-door and side-by-side models average 10-12 years due to more complex ice/water systems.</>,
                <><strong style={{ color: '#1A1A1A' }}>Usage:</strong> Refrigerators opened frequently (large families) wear out compressors faster.</>,
                <><strong style={{ color: '#1A1A1A' }}>Maintenance:</strong> Clean condenser coils every 6 months to extend lifespan by 3-5 years.</>,
              ]} />
              <TipBox tips={['Clean coils every 6 months', 'Replace water filter every 6 months', 'Check and clean door gaskets monthly', 'Keep temperature at 37-40\u00b0F (fridge) and 0-5\u00b0F (freezer)']} />

              {/* ── Washers ── */}
              <SectionH2 id="washers" badge="10&ndash;12 YRS" title="Washers" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Average lifespan:</strong> 10-11 years</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Factors that affect lifespan:</strong></p>
              <FactorList items={[
                <><strong style={{ color: '#1A1A1A' }}>Type:</strong> Top-load washers (especially older agitator models) last 12-14 years. Front-load washers average 10-11 years due to more complex door seals and pumps.</>,
                <><strong style={{ color: '#1A1A1A' }}>Load frequency:</strong> Heavy daily use (multiple loads per day) shortens lifespan.</>,
                <><strong style={{ color: '#1A1A1A' }}>Overloading:</strong> Consistently overloading the drum strains the motor and transmission.</>,
              ]} />
              <TipBox tips={['Leave door open after cycles to prevent mold', 'Clean detergent dispenser monthly', 'Run a cleaning cycle with washer cleaner monthly', 'Don\u2019t overload the drum (fill max 3/4 full)']} />

              {/* ── Dryers ── */}
              <SectionH2 id="dryers" badge="10&ndash;13 YRS" title="Dryers" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Average lifespan:</strong> 13 years</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Factors that affect lifespan:</strong></p>
              <FactorList items={[
                <><strong style={{ color: '#1A1A1A' }}>Fuel type:</strong> Gas dryers last slightly longer than electric dryers (13 vs. 11 years) due to simpler heating systems.</>,
                <><strong style={{ color: '#1A1A1A' }}>Vent maintenance:</strong> Clogged vents force the dryer to work harder, causing premature motor and heating element failure.</>,
                <><strong style={{ color: '#1A1A1A' }}>Usage intensity:</strong> Multiple heavy loads per day (towels, jeans) wear out drum rollers and belts faster.</>,
              ]} />
              <TipBox tips={['Clean lint trap after EVERY load', 'Deep-clean vent duct annually (professional cleaning recommended)', 'Avoid overloading (fill max 3/4 full)', 'Inspect and replace worn drum seals']} />

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

              {/* ── Dishwashers ── */}
              <SectionH2 id="dishwashers" badge="9&ndash;10 YRS" title="Dishwashers" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Average lifespan:</strong> 9 years (shortest of major appliances)</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Factors that affect lifespan:</strong></p>
              <FactorList items={[
                <><strong style={{ color: '#1A1A1A' }}>Water quality:</strong> Hard water causes mineral buildup on heating elements and pumps, leading to earlier failure.</>,
                <><strong style={{ color: '#1A1A1A' }}>Detergent type:</strong> Using too much detergent or non-dishwasher-safe soap damages pumps and seals.</>,
                <><strong style={{ color: '#1A1A1A' }}>Filter maintenance:</strong> Clogged filters reduce performance and strain the pump.</>,
              ]} />
              <TipBox tips={['Clean filter monthly', 'Run vinegar deep-clean cycle monthly', 'Check and clean spray arms every 3-6 months', 'Leave door ajar after cycles to air-dry interior']} />

              {/* ── Ovens & Ranges ── */}
              <SectionH2 id="ovens-ranges" badge="13&ndash;15 YRS" title="Ovens & Ranges" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Average lifespan:</strong> 13-15 years (longest-lasting appliance)</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Factors that affect lifespan:</strong></p>
              <FactorList items={[
                <><strong style={{ color: '#1A1A1A' }}>Fuel type:</strong> Gas ranges often outlast electric ranges due to simpler burner mechanisms (vs. heating elements that can burn out).</>,
                <><strong style={{ color: '#1A1A1A' }}>Self-cleaning:</strong> Frequent use of the self-cleaning cycle (2-3 times per month) can shorten lifespan by stressing heating elements.</>,
                <><strong style={{ color: '#1A1A1A' }}>Heavy use:</strong> Professional cooking or daily baking accelerates wear.</>,
              ]} />
              <TipBox tips={['Clean spills immediately to prevent baked-on residue', 'Use self-cleaning cycle sparingly (max 4-6 times per year)', 'Check and replace worn door gaskets', 'Test oven temperature accuracy annually']} />

              {/* ── Quick Reference Table ── */}
              <h2 id="quick-reference" style={H2S}>Quick Reference: Average Appliance Lifespans</h2>
              <div data-testid="reference-table" style={{ background: '#F8F5F0', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', overflow: 'hidden' }}>
                <div style={{ background: '#0D1B2A', padding: '12px 20px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>Appliance</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>Expected Lifespan</span>
                </div>
                {TABLE_ROWS.map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(248,245,240,0.8)' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>{row.name}</span>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 14, color: '#FF5722' }}>{row.years}</span>
                  </div>
                ))}
              </div>

              {/* ── When to Start Planning ── */}
              <h2 id="when-to-plan" style={H2S}>When to Start Planning for Replacement</h2>
              <p style={P}>As your appliances approach 75% of their expected lifespan, start budgeting for eventual replacement:</p>
              <div className="plan-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                {PLANNING.map((card, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', borderRadius: 4 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 2 }}>{card.title}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5 }}>{card.advice}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ ...P, marginTop: 16 }}>This gives you time to research models, watch for sales, and avoid emergency purchases when an appliance fails unexpectedly.</p>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Appliance Lifespan &mdash; Common Questions</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>ADD YEARS TO YOUR APPLIANCES</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Extend Your Appliance Lifespan with Expert Maintenance</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Regular professional maintenance can add years to your appliances. Schedule a tune-up with our certified technicians!</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Maintenance</a>
                </div>
              </div>

              {/* ── Author ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei &mdash; Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; 10+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Service */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>EXTEND YOUR APPLIANCE LIFE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Professional Maintenance</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Regular tune-ups add 3&ndash;5 years. $60 diagnostic, 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Major Appliance Brands', 'Same-Day Available', 'Licensed CA Technician'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Maintenance</a>
              </div>

              {/* Widget 2: Lifespan Cheatsheet */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Lifespan at a Glance</p>
                {[
                  { name: 'Refrigerators', years: '10\u201313 yrs' },
                  { name: 'Washers', years: '10\u201312 yrs' },
                  { name: 'Dryers', years: '10\u201313 yrs' },
                  { name: 'Dishwashers', years: '9\u201310 yrs' },
                  { name: 'Ovens & Ranges', years: '13\u201315 yrs' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A' }}>{row.name}</span>
                    <span style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '3px 8px', borderRadius: 3 }}>{row.years}</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '10px 12px', marginTop: 12 }}>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', lineHeight: 1.5 }}>Maintenance adds 3&ndash;5 years to any appliance</p>
                </div>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: '5 Reasons Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'How to Calibrate Your Oven Temperature', href: '/blog/oven-temperature-calibration' },
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
                { title: 'Repair vs. Replace: When to Fix Your Appliance', href: '/blog/when-to-repair-vs-replace' },
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
                { tag: 'SERVICE', title: 'All Appliance Repair in Bay Area', body: 'Same-day repair for all major appliance brands. $60 diagnostic applied to repair.', link: 'View Services', href: '/services' },
                { tag: 'ARTICLE', title: 'Repair vs Replace: When to Fix Your Appliance', body: 'Use the 50% rule to make the smartest financial decision.', link: 'Read Article', href: '/blog/when-to-repair-vs-replace' },
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

export default ApplianceLifespan;

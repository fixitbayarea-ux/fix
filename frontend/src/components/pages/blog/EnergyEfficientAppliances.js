import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import navbarLogo from '../../../assets/navbar-logo-new-112.webp';
import BlogByline from './BlogByline';
import BlogCTA from './BlogCTA';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', borderBottom: '2px solid rgba(255,87,34,0.2)', paddingBottom: 8, margin: '36px 0 16px' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };

const FAQ_ITEMS = [
  { q: 'Which appliance uses the most electricity in my home?', a: "Refrigerators and dryers are the top two energy consumers among appliances. Refrigerators run 24/7, accounting for about 8% of home energy use. Dryers use intense heat and can cost $100\u2013$200/year to run. Water heaters, dishwashers, and washers follow. Improving efficiency on all four can save $230\u2013$440/year." },
  { q: 'Does washing clothes in cold water really save money?', a: "Yes \u2014 significantly. Up to 90% of washer energy goes to heating water. Modern detergents clean just as effectively in cold water for most loads. Switching to cold water for regular loads saves $60\u2013$100/year. Use hot water only for heavily soiled items or sanitizing loads like baby clothes or towels." },
  { q: 'How often should I clean my dryer vent to save energy?', a: "Clean the lint trap after every single load \u2014 a clogged lint trap increases drying time by 30%. The vent duct (the hose running from your dryer to outside) should be professionally cleaned once a year. A clogged duct can double drying time and waste $100\u2013$200/year in electricity, and creates a serious fire risk." },
  { q: 'Does a dirty refrigerator use more electricity?', a: "Yes. Condenser coils covered in dust force the compressor to work 5\u201310% harder, increasing energy use and shortening the compressor\u2019s life. Clean coils every 6 months \u2014 it takes 10 minutes and saves $50\u2013$100/year. Also check door seals: worn gaskets let cold air escape, forcing the fridge to run constantly." },
  { q: 'Can a professional tune-up reduce my appliance energy bills?', a: "Absolutely. A professional maintenance visit includes cleaning condenser coils, checking door seals, inspecting the drain pump, and verifying the heating element efficiency. Appliances running at peak efficiency use 10\u201320% less energy than poorly maintained ones. FixitBay LLC\u2019s $60 diagnostic includes an efficiency check for all major appliances." },
];

const TOC = [
  { id: 'refrigerator-tips', label: 'Refrigerator Energy-Saving Tips' },
  { id: 'washer-tips', label: 'Washer Energy-Saving Tips' },
  { id: 'dryer-tips', label: 'Dryer Energy-Saving Tips' },
  { id: 'dishwasher-tips', label: 'Dishwasher Energy-Saving Tips' },
  { id: 'estimated-savings', label: 'Estimated Annual Savings' },
  { id: 'faq', label: 'FAQ' },
];

const SAVINGS_TABLE = [
  { action: 'Refrigerator coil cleaning', saving: '$50\u2013$100/year' },
  { action: 'Washing with cold water', saving: '$60\u2013$100/year' },
  { action: 'Proper dryer vent cleaning', saving: '$100\u2013$200/year' },
  { action: 'Dishwasher air-dry mode', saving: '$20\u2013$40/year' },
];

const TIPS = {
  fridge: [
    { title: 'Clean Condenser Coils Every 6 Months', body: 'Dusty coils force the compressor to work harder, increasing energy use by 5-10%. Cleaning takes 10 minutes and can save $50-$100 annually.' },
    { title: 'Set the Right Temperature', body: 'Optimal: 37-40\u00b0F (refrigerator), 0-5\u00b0F (freezer). Every degree colder than needed increases energy use by 5%.' },
    { title: 'Check Door Seals', body: 'Worn gaskets let cold air escape. Test with the dollar bill trick: close the door on a bill\u2014if it slides out easily, replace the seal.' },
    { title: 'Keep It Full (But Not Overpacked)', body: 'A full fridge retains cold better than an empty one. If it\u2019s mostly empty, fill space with water bottles.' },
    { title: 'Cover Liquids and Wrap Foods', body: 'Uncovered foods release moisture, making the compressor work harder to remove humidity.' },
  ],
  washer: [
    { title: 'Wash with Cold Water', body: 'Up to 90% of washer energy goes to heating water. Cold water cleaning works for most loads and saves $60-$100/year. Use hot water only for heavily soiled or sanitizing loads.' },
    { title: 'Run Full Loads Only', body: 'Washers use nearly the same energy and water for small or large loads. Maximize efficiency by waiting for full loads (but don\u2019t overload!).' },
    { title: 'Use High-Speed Spin Cycles', body: 'A faster final spin extracts more water, reducing dryer time significantly.' },
    { title: 'Skip the Extra Rinse (Unless Needed)', body: 'Extra rinse cycles add water and energy use. Only use for heavily soiled loads or sensitive skin.' },
  ],
  dryer: [
    { title: 'Clean the Lint Trap After EVERY Load', body: 'A clogged lint trap increases drying time by 30%. This simple habit saves energy and prevents fires.' },
    { title: 'Clean the Vent Duct Annually', body: 'Clogged vents double drying time and waste hundreds of dollars in energy annually. Professional cleaning is recommended.' },
    { title: 'Use Moisture Sensor Auto-Dry', body: 'Auto-dry cycles stop when clothes are dry, preventing over-drying. Avoid timed cycles unless necessary.' },
    { title: 'Dry Similar Fabrics Together', body: 'Mixing heavy towels with lightweight t-shirts extends drying time. Separate heavy and light loads.' },
    { title: 'Air-Dry When Possible', body: 'Line-dry or use a drying rack for delicates and non-bulky items. This saves 100% of dryer energy for those loads.' },
  ],
  dishwasher: [
    { title: 'Run Full Loads Only', body: 'Dishwashers use the same energy whether full or half-empty. Wait for a full load.' },
    { title: 'Skip the Heated Dry Cycle', body: 'Use "air dry" or "energy saver" mode and crack the door open after the wash cycle. Saves 15-20% energy per load.' },
    { title: 'Scrape, Don\u2019t Rinse', body: 'Modern dishwashers don\u2019t need pre-rinsed dishes. Scrape off food and load directly\u2014saves water and energy.' },
    { title: 'Use Eco/Energy-Saving Modes', body: 'These modes use lower water temperatures and less water, reducing energy by 10-20%.' },
    { title: 'Clean the Filter Monthly', body: 'A clogged filter forces the pump to work harder, increasing energy use.' },
  ],
};

const TipCards = ({ tips }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    {tips.map((tip, i) => (
      <div key={i} className="tip-card" style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, borderLeft: '3px solid transparent', transition: 'border-left-color 0.2s' }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
        <div>
          <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{tip.title}</p>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginTop: 4 }}>{tip.body}</p>
        </div>
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

const EnergyEfficientAppliances = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "How to Make Your Appliances More Energy Efficient", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/energy-efficient-appliances" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Energy Efficient Appliances", "item": "https://fixitbay.net/blog/energy-efficient-appliances" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Make Your Appliances More Energy Efficient | FixitBay LLC"
        description="Proven tips to reduce appliance energy bills by 10-25%. Refrigerator, washer, dryer, and dishwasher efficiency guide. Save $230-$440/year."
        canonical="https://fixitbay.net/blog/energy-efficient-appliances"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .energy-h1{font-size:40px !important}
          @media(max-width:767px){
            .energy-h1{font-size:28px !important}
            .energy-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .savings-cards{grid-template-columns:repeat(2,1fr) !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
          .tip-card:hover{border-left-color:#FF5722 !important}
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
            </div>
            <BlogByline dateISO="2024-12-28" dateFormatted="December 28, 2024" readTime="7 min" />
            <h1 className="energy-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              How to Make Your Appliances More Energy Efficient &mdash; Save $230&ndash;$440/Year
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Save money on electricity with these proven tips for refrigerators, washers, dryers, and dishwashers. Small changes can reduce energy bills by 10&ndash;25% annually.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="energy-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* Savings Impact Banner */}
              <div data-testid="savings-banner" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>Your Potential Annual Savings</p>
                <div className="savings-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                  {[
                    { icon: '\uD83E\uDDCA', saving: '$50\u2013$100', label: 'Refrigerator' },
                    { icon: '\uD83E\uDEE7', saving: '$60\u2013$100', label: 'Washer' },
                    { icon: '\uD83D\uDCA8', saving: '$100\u2013$200', label: 'Dryer' },
                    { icon: '\uD83C\uDF7D\uFE0F', saving: '$20\u2013$40', label: 'Dishwasher' },
                  ].map((c, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                      <div style={{ fontSize: 24, marginBottom: 6 }}>{c.icon}</div>
                      <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#FF5722' }}>{c.saving}</div>
                      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{c.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 14, paddingTop: 12, textAlign: 'center' }}>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Total Potential Savings:</span>
                  <span style={{ display: 'block', fontFamily: F, fontWeight: 800, fontSize: 22, color: '#FF5722', marginTop: 4 }}>$230&ndash;$440/year</span>
                </div>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>Home appliances account for nearly 30% of household energy consumption. The good news? Simple changes to how you use and maintain your appliances can significantly reduce energy usage&mdash;saving you hundreds of dollars per year while reducing your environmental footprint.</p>

              {/* ── Refrigerator Tips ── */}
              <SectionH2 id="refrigerator-tips" badge="SAVE $50&ndash;$100/YR" title="Refrigerator Energy-Saving Tips" />
              <p style={{ ...P, marginBottom: 20 }}><a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Refrigerators</a> run 24/7, making them one of the largest energy consumers in your home. Here's how to optimize efficiency:</p>
              <TipCards tips={TIPS.fridge} />

              {/* ── Washer Tips ── */}
              <SectionH2 id="washer-tips" badge="SAVE $60&ndash;$100/YR" title="Washer Energy-Saving Tips" />
              <p style={{ ...P, marginBottom: 20 }}>Washing machines use energy to heat water and power motors. Here's how to reduce consumption:</p>
              <TipCards tips={TIPS.washer} />

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need appliance repair in San Francisco?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Fast scheduling · $60 diagnostic · 180-day warranty</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none' }}>Call (760) 543-5733</a>
                    <a href="/book" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>Book online →</a>
                  </div>
                </div>
              </div>

              {/* ── Dryer Tips ── */}
              <SectionH2 id="dryer-tips" badge="SAVE $100&ndash;$200/YR" title="Dryer Energy-Saving Tips" />
              <p style={{ ...P, marginBottom: 20 }}><a href="/dryer-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Dryers</a> are energy-intensive. These tips can cut drying costs by 20-30%:</p>
              <TipCards tips={TIPS.dryer} />

              {/* ── Dishwasher Tips ── */}
              <SectionH2 id="dishwasher-tips" badge="SAVE $20&ndash;$40/YR" title="Dishwasher Energy-Saving Tips" />
              <p style={{ ...P, marginBottom: 20 }}><a href="/dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Dishwashers</a> are more energy-efficient than hand washing&mdash;when used correctly:</p>
              <TipCards tips={TIPS.dishwasher} />

              {/* ── Estimated Annual Savings ── */}
              <h2 id="estimated-savings" style={H2S}>Estimated Annual Savings</h2>
              <div data-testid="savings-table" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', overflow: 'hidden' }}>
                <div style={{ background: '#0D1B2A', padding: '12px 20px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>Energy-Saving Action</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>Annual Savings</span>
                </div>
                {SAVINGS_TABLE.map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(248,245,240,0.8)' }}>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 14, color: '#4A5568' }}>{row.action}</span>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722' }}>{row.saving}</span>
                  </div>
                ))}
                <div style={{ background: '#0D1B2A', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff' }}>Total Potential Savings:</span>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: '#FF5722' }}>$230&ndash;$440/year</span>
                </div>
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Energy Efficiency &mdash; Common Questions</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>PEAK PERFORMANCE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Professional Maintenance for Maximum Efficiency</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our technicians can tune up your appliances for peak efficiency. Schedule a maintenance visit today!</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Service</a>
                </div>
              </div>

              {/* ── Author ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei &mdash; Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Licensed CA Technician &middot; License #51001 &middot; 3+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Tune-Up */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>SAVE MONEY ON ENERGY BILLS</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Book an Efficiency Tune-Up</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Professional maintenance restores peak efficiency. $60 diagnostic, 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Major Appliance Brands', 'Fast Scheduling', 'Licensed CA Technician'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Tune-Up</a>
              </div>

              {/* Widget 2: Quick Savings Summary */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Quick Savings Summary</p>
                {[
                  { action: 'Coil cleaning', saving: '$50\u2013$100' },
                  { action: 'Cold water wash', saving: '$60\u2013$100' },
                  { action: 'Clean dryer vent', saving: '$100\u2013$200' },
                  { action: 'Air-dry dishes', saving: '$20\u2013$40' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568' }}>{row.action}</span>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>{row.saving}</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '10px 12px', marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>Total/year</span>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: '#FF5722' }}>$230&ndash;$440</span>
                </div>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'How Long Should Your Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
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

        <BlogCTA />
        {/* ━━━ RELATED ARTICLES ━━━ */}
        <section data-testid="related-articles" style={{ background: '#fff', padding: '40px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#0D1B2A', marginBottom: 20 }}>Related articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { title: 'How Long Do Appliances Last? Average Lifespan Guide', href: '/blog/appliance-lifespan' },
                { title: 'Repair vs. Replace: When to Fix Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                { title: 'Appliance Repair Cost in San Francisco 2026', href: '/blog/appliance-repair-cost-san-francisco' },
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
                { tag: 'SERVICE', title: 'Appliance Tune-Up & Maintenance', body: 'Professional maintenance adds 3\u20135 years and restores peak efficiency. All major brands.', link: 'View Services', href: '/services' },
                { tag: 'ARTICLE', title: 'How Long Should Your Appliances Last?', body: 'Lifespan guide for all major appliances with maintenance tips.', link: 'Read Article', href: '/blog/appliance-lifespan' },
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service repair across all SF neighborhoods. Fast scheduling.', link: 'View Service', href: '/san-francisco-appliance-repair' },
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
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING + MOBILE ━━━ */}
        {showFloat && <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR</a>}
      </div>
    </>
  );
};

export default EnergyEfficientAppliances;

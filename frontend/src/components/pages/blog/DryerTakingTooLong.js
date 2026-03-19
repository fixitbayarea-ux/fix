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
  { q: 'Why is my dryer taking 2 cycles to dry clothes?', a: "The most common cause is a clogged dryer vent or lint trap. Restricted airflow means moisture can't escape the drum, so clothes stay damp. Clean the lint trap and have the vent duct professionally cleaned if it hasn't been done in over a year." },
  { q: 'How much does dryer repair cost in San Francisco Bay Area?', a: "Dryer repairs in the Bay Area typically cost $150\u2013$350. A heating element replacement runs $150\u2013$250. Gas valve solenoids cost $100\u2013$200. FixitBay charges a $60 diagnostic fee, credited toward your repair." },
  { q: 'Is it safe to run a dryer that takes too long to dry?', a: "No \u2014 a dryer that runs multiple cycles is a serious fire hazard. Clogged vents are the #1 cause of dryer fires in the US. The NFPA reports nearly 17,000 dryer fires per year, mostly from lint buildup. Address the issue immediately." },
  { q: 'Can I clean my dryer vent myself?', a: "You can clean the lint trap yourself \u2014 do it after every load. For the vent duct, a DIY kit works for short straight runs. However, longer or flexible duct systems, rooftop vents, and high-rise apartment vents should be professionally cleaned annually." },
  { q: 'How do I know if my dryer vent is clogged?', a: "Four warning signs: (1) clothes are hot but still damp after a full cycle, (2) the dryer exterior feels very hot, (3) you smell burning during operation, (4) the laundry room is unusually humid after a cycle. Any of these means your vent needs immediate attention." },
];

const TOC = [
  { id: 'clogged-vent', label: 'Clogged Dryer Vent (Most Common!)' },
  { id: 'lint-trap', label: 'Clogged Lint Trap or Lint Trap Housing' },
  { id: 'heating-element', label: 'Faulty Heating Element (Electric Dryers)' },
  { id: 'gas-valve', label: 'Gas Valve Solenoids (Gas Dryers)' },
  { id: 'moisture-sensor', label: 'Malfunctioning Moisture Sensor' },
  { id: 'overloading', label: 'Overloading the Dryer' },
  { id: 'drum-seals', label: 'Worn Drum Seals or Blower Wheel' },
  { id: 'checklist', label: 'Quick Troubleshooting Checklist' },
  { id: 'when-to-call', label: 'When to Call a Professional' },
];

const CHECKLIST = [
  'Clean lint trap after every load',
  'Check and clean dryer vent duct annually',
  'Avoid overloading (fill drum max 3/4 full)',
  'Clean moisture sensors every 3 months',
  'Schedule professional vent cleaning yearly',
];

const WHEN_TO_CALL = [
  'Faulty heating element (electrical work, requires disassembly)',
  'Gas valve solenoid failure (fire and carbon monoxide risk \u2014 never DIY)',
  'Worn blower wheel or drum seals (partial disassembly required)',
  'Electrical control board failure',
  'Dryer still slow after all DIY checks',
];

const DiyBox = ({ steps }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>DIY FIX</span>
    </div>
    {steps.map((s, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}.</span>
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{s}</span>
      </div>
    ))}
  </div>
);

const DryerTakingTooLong = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Why Is My Dryer Taking So Long to Dry?", "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/dryer-taking-too-long" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Dryer Taking Too Long", "item": "https://fixitbay.net/blog/dryer-taking-too-long" } ] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Why Is My Dryer Taking Too Long? 7 Causes | FixitBay"
        description="Dryer taking 2-3 cycles to dry clothes? Learn 7 causes — clogged vents, bad heating element, moisture sensor — with DIY fixes."
        canonical="https://fixitbay.net/blog/dryer-taking-too-long"
        ogType="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[0].data) }} />
      <div style={{ fontFamily: F }}>
        <style>{`
          .dry-h1{font-size:40px !important}
          @media(max-width:767px){
            .dry-h1{font-size:26px !important}
            .dry-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
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
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Dryer</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Dryer</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>January 12, 2026</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>6 min read</span>
            </div>
            <h1 className="dry-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Why Is My Dryer Taking So Long to Dry? 7 Causes + DIY Fixes — Bay Area Guide
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Long drying times waste energy and money. Discover the 7 most common causes including clogged vents, heating element issues, and moisture sensor problems. Learn DIY fixes and when to call a pro.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="dry-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Fire Warning */}
              <div style={{ background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '16px 20px', marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{'\uD83D\uDD25'}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722' }}>Fire Hazard Warning!</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>Clogged dryer vents are a leading cause of house fires. If your dryer takes multiple cycles to dry clothes, address the issue immediately.</p>
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>If your dryer is taking 2-3 cycles to dry a normal load, something is wrong. Not only does this waste time and energy (costing you $10-20+ per month extra), but it's also a serious fire hazard in many cases.</p>

              {/* ── Section 1: Clogged Vent ── */}
              <h2 id="clogged-vent" style={H2S}><span style={{ color: '#FF5722' }}>1.</span> Clogged Dryer Vent (Most Common!)</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> The dryer vent exhausts hot, moist air outside. When it's clogged with lint, airflow is restricted, and moisture can't escape. This dramatically increases drying time and creates a fire risk.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs of a clogged vent:</strong></p>
              {['Clothes are hot but damp after a full cycle', 'Dryer exterior is unusually hot to the touch', 'Burning smell during operation', 'Laundry room feels excessively humid'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', marginTop: 6, flexShrink: 0 }} />
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                </div>
              ))}
              <DiyBox steps={['Unplug or turn off the dryer', 'Disconnect the vent hose from the back of the dryer', 'Use a dryer vent cleaning brush or shop vacuum to remove lint from the hose and exterior vent opening', 'Reconnect and test']} />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Pro recommendation:</strong> Have your dryer vent professionally cleaned annually, especially if you have a long vent run or multiple bends.</p>

              {/* ── Section 2: Lint Trap ── */}
              <h2 id="lint-trap" style={H2S}><span style={{ color: '#FF5722' }}>2.</span> Clogged Lint Trap or Lint Trap Housing</h2>
              <p style={P}>Even if you clean the lint trap after every load (which you should!), residue from dryer sheets and fabric softener can clog the mesh over time.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Remove the lint trap and wash it with hot soapy water and a soft brush. Hold it up to the light—if you can't see through it, it's clogged. Also vacuum out the lint trap housing with a crevice tool.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Frequency:</strong> Deep-clean the lint trap every 3 months.</p>

              {/* ── Section 3: Heating Element ── */}
              <h2 id="heating-element" style={H2S}><span style={{ color: '#FF5722' }}>3.</span> Faulty Heating Element (Electric Dryers)</h2>
              <p style={P}>Electric dryers use a heating element to warm the air. If it's partially failed, the dryer will produce some heat but not enough to dry efficiently.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>How to test:</strong> Run the dryer. If it's warm but not hot, the heating element may be the issue. You'll need a multimeter to test continuity.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Heating element replacement requires disassembling the dryer and handling electrical components. Most homeowners should hire a technician.</p>

              {/* ── Section 4: Gas Valve ── */}
              <h2 id="gas-valve" style={H2S}><span style={{ color: '#FF5722' }}>4.</span> Gas Valve Solenoids (Gas Dryers)</h2>
              <p style={P}>Gas dryers use solenoid valves to control gas flow to the burner. If one fails, the gas flow is interrupted, causing weak or intermittent heat.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs:</strong> Dryer cycles for a long time, or you hear the igniter clicking repeatedly but little heat is produced.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Gas dryer repairs should always be performed by a licensed technician due to fire and carbon monoxide risks.</p>

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

              {/* ── Section 5: Moisture Sensor ── */}
              <h2 id="moisture-sensor" style={H2S}><span style={{ color: '#FF5722' }}>5.</span> Malfunctioning Moisture Sensor</h2>
              <p style={P}>Modern dryers use moisture sensors to detect when clothes are dry and automatically shut off. If the sensor is dirty or faulty, the dryer may shut off prematurely or run too long without proper heat cycling.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Locate the moisture sensor bars (usually two metal strips inside the drum near the lint trap). Clean them with rubbing alcohol and a soft cloth to remove residue from fabric softener and dryer sheets.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Test it:</strong> Run an auto-dry cycle with a damp towel. If the dryer shuts off when the towel is still damp, the sensor may need replacement.</p>

              {/* ── Section 6: Overloading ── */}
              <h2 id="overloading" style={H2S}><span style={{ color: '#FF5722' }}>6.</span> Overloading the Dryer</h2>
              <p style={P}>Stuffing the dryer drum prevents proper airflow. Clothes need space to tumble and allow hot air to circulate.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Rule of thumb:</strong> Fill the dryer drum no more than 3/4 full. For heavy items like jeans or towels, reduce the load size even further.</p>

              {/* ── Section 7: Drum Seals ── */}
              <h2 id="drum-seals" style={H2S}><span style={{ color: '#FF5722' }}>7.</span> Worn Drum Seals or Blower Wheel</h2>
              <p style={P}>The blower wheel pulls air through the drum and pushes it out the vent. If it's damaged or clogged with lint, airflow is severely reduced. Similarly, worn drum seals can allow hot air to escape.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> These repairs require partial disassembly of the dryer and are best handled by a professional.</p>

              {/* ── Checklist ── */}
              <h2 id="checklist" style={H2S}>Quick Troubleshooting Checklist</h2>
              <div data-testid="checklist" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '24px 28px' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 16 }}>Before calling a technician, try these steps:</p>
                {CHECKLIST.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < CHECKLIST.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', border: '2px solid #FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: '#FF5722', fontSize: 11, fontWeight: 700 }}>{'\u2713'}</span>
                    </div>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* ── When to Call ── */}
              <h2 id="when-to-call" style={H2S}>When to Call a Professional</h2>
              <p style={P}>While clogged vents and lint traps are DIY-friendly, these issues require a licensed technician:</p>
              {WHEN_TO_CALL.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, flexShrink: 0 }}>&mdash;</span>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                </div>
              ))}

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Dryer Taking Too Long — Common Questions</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>SAME-DAY SERVICE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Dryer Still Not Working? We Can Help!</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified dryer repair technicians service all brands in the SF Bay Area. Same-day appointments available!</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call Now (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Repair Online</a>
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
              {/* Widget 1: Book Repair */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>SAME-DAY DRYER REPAIR</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Dryer Not Drying Fast Enough?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty on all work.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Licensed CA Technician', 'Electric & Gas Dryers', 'Same-Day Available'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }}>Book Repair Online</a>
              </div>

              {/* Widget 2: Fire Safety */}
              <div style={{ background: 'rgba(255,87,34,0.06)', border: '1px solid rgba(255,87,34,0.25)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: 20, marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722', marginBottom: 12 }}>Dryer Fire Safety</p>
                {['Clogged vents cause 34% of dryer fires', 'Clean lint trap after EVERY load', 'Professional vent cleaning: once a year'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, padding: '7px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>!</div>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#FF5722', marginTop: 10, textAlign: 'center' }}>If you smell burning — stop the dryer now</p>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(0,0,0,0.07)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: '5 Reasons Your Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'How Much Does Dryer Repair Cost in SF?', href: '/blog' },
                  { text: 'Washer Not Draining? 6 Causes Explained', href: '/blog' },
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
                { title: 'Washer Error Codes Explained — What They Mean & How to Fix', href: '/blog/washer-error-codes' },
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
                { tag: 'SERVICE', title: 'Dryer Repair in Bay Area', body: 'Same-day dryer repair for all brands. $60 diagnostic applied to your repair.', link: 'View Service', href: '/dryer-repair' },
                { tag: 'ARTICLE', title: 'Repair vs Replace: When to Fix Your Appliance', body: 'Use the 50% rule to decide if repair makes financial sense.', link: 'Read Article', href: '/blog/when-to-repair-vs-replace' },
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

        {/* ━━━ 7. FLOATING + MOBILE ━━━ */}
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

export default DryerTakingTooLong;

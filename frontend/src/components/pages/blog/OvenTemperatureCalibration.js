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
  { q: 'How do I know if my oven temperature is accurate?', a: "Use a standalone oven thermometer ($5\u201315 at any kitchen store). Place it on the center rack, set your oven to 350\u00b0F, wait 20 minutes, then read it through the window without opening the door. Most ovens should be within \u00b110\u00b0F. If you\u2019re off by more than 15\u00b0F consistently, calibrate your oven." },
  { q: 'Why is my oven burning food on the recommended temperature?', a: "Most likely your oven is running hot \u2014 common in ovens 5+ years old as the temperature sensor drifts. Test with an oven thermometer. If it\u2019s 25\u201335\u00b0F over set temp, you can calibrate it yourself using the control panel. If it\u2019s 50\u00b0F+ off, the temperature sensor or control board may need replacement." },
  { q: 'Can I calibrate any oven brand myself?', a: "Yes \u2014 most modern ovens (GE, Whirlpool, Samsung, LG, Bosch, KitchenAid) allow \u00b135\u00b0F offset adjustment through the control panel. Older dial/knob ovens have a calibration screw behind the temperature knob. Always check your owner\u2019s manual for brand-specific steps \u2014 incorrect adjustment can void warranties." },
  { q: 'How often should I calibrate my oven?', a: "Test your oven temperature once a year using an oven thermometer. Most ovens drift gradually over time \u2014 especially after power surges, heavy use, or cleaning cycles. If you notice consistent burning or undercooking, test it immediately rather than waiting for your annual check." },
  { q: 'How much does oven temperature sensor replacement cost in Bay Area?', a: "Oven temperature sensor replacement in the SF Bay Area typically costs $150\u2013$250 including parts and labor. Control board replacement runs $200\u2013$400 depending on the brand. FixitBay LLC charges $60 diagnostic (credited to repair) and provides a written estimate before any work begins." },
];

const TOC = [
  { id: 'test-accuracy', label: 'Step 1: Test Your Oven\u2019s Accuracy' },
  { id: 'decide-calibration', label: 'Step 2: Decide if Calibration is Needed' },
  { id: 'calibrate-diy', label: 'Step 3: Calibrate Your Oven (DIY)' },
  { id: 'brand-reference', label: 'Quick Brand Reference' },
  { id: 'retest', label: 'Step 4: Retest After Calibration' },
  { id: 'when-not-enough', label: 'When Calibration Isn\u2019t Enough' },
  { id: 'faq', label: 'FAQ' },
];

const BRANDS = [
  { name: 'GE', text: 'Hold "Bake" for 5 seconds until display shows offset' },
  { name: 'WHIRLPOOL', text: 'Press "Settings" \u2192 "Oven Calibration" or hold "Start" for 5 seconds (also KitchenAid/Maytag)' },
  { name: 'SAMSUNG', text: 'Settings menu \u2192 "Oven Temp Adjustment"' },
  { name: 'LG', text: 'Press and hold "Bake" + "Broil" for 3 seconds' },
  { name: 'BOSCH', text: 'Settings \u2192 "Basic Settings" \u2192 "Temperature Offset"' },
];

const DarkBox = ({ label, steps }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </div>
    {steps.map((s, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}.</span>
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{s}</span>
      </div>
    ))}
  </div>
);

const StepH2 = ({ id, num, title }) => (
  <>
    <div id={id} style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '36px 0 16px' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{num}</div>
      <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.2)', marginBottom: 16 }} />
  </>
);

const OvenTemperatureCalibration = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "How to Calibrate Oven Temperature", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/oven-temperature-calibration" } },
    { id: 'howto-schema', data: { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Calibrate Your Oven Temperature", "description": "Step-by-step guide to test and calibrate oven temperature accuracy for all major oven brands.", "step": [{ "@type": "HowToStep", "name": "Test Your Oven's Accuracy", "text": "Place oven thermometer on center rack, set to 350\u00b0F, wait 20 minutes, read without opening door." }, { "@type": "HowToStep", "name": "Decide if Calibration is Needed", "text": "If off by 15\u00b0F or more, calibrate. If off by 50\u00b0F+, call a professional." }, { "@type": "HowToStep", "name": "Calibrate Your Oven", "text": "Use control panel offset for digital ovens, or calibration screw for older dial/knob models." }, { "@type": "HowToStep", "name": "Retest After Calibration", "text": "Repeat thermometer test at 350\u00b0F to confirm accuracy." }], "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician" } } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Oven Temperature Calibration", "item": "https://fixitbay.net/blog/oven-temperature-calibration" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="How to Calibrate Your Oven Temperature | FixitBay LLC"
        description="Oven burning or undercooking food? Learn to test and calibrate oven temperature in 4 steps — works for GE, Samsung, LG, Bosch, Whirlpool."
        canonical="https://fixitbay.net/blog/oven-temperature-calibration"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .oven-h1{font-size:40px !important}
          @media(max-width:767px){
            .oven-h1{font-size:28px !important}
            .oven-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .quick-guide-grid{grid-template-columns:1fr !important}
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
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Oven</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Oven</span>
            </div>
            <BlogByline dateISO="2026-01-08" dateFormatted="January 8, 2026" readTime="5 min" />
            <h1 className="oven-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              How to Calibrate Your Oven Temperature — Step-by-Step Guide for All Brands
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Is your oven cooking unevenly or burning food? Learn how to test oven temperature accuracy with a thermometer and calibrate for perfect cooking results. Works for all oven brands.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="oven-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* Temperature Offset Quick Guide */}
              <div data-testid="quick-guide" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 14 }}>Is Your Oven Off? Check This First</p>
                <div className="quick-guide-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                    <div style={{ color: '#4CAF50', fontSize: 20, marginBottom: 4 }}>{'\u2713'}</div>
                    <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff' }}>&plusmn;10&deg;F</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Normal Range</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>No action needed</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                    <div style={{ color: '#FF5722', fontSize: 20, marginBottom: 4 }}>{'\u26A0'}</div>
                    <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#FF5722' }}>&plusmn;15-25&deg;F</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Calibrate Now</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>DIY fix &mdash; 10 minutes</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                    <div style={{ color: '#FF5722', fontSize: 20, marginBottom: 4 }}>{'\uD83D\uDD27'}</div>
                    <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#FF5722' }}>50&deg;F+</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Call a Technician</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>Sensor or board issue</div>
                  </div>
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
              <p style={{ ...P, marginBottom: 24 }}>Ever followed a recipe perfectly, only to end up with burnt cookies or undercooked chicken? The culprit might not be your cooking skills&mdash;it could be an inaccurate oven temperature.</p>
              <p style={{ ...P, marginBottom: 24 }}>Most ovens drift out of calibration over time, running 10-25&deg;F too hot or too cold. The good news? Testing and calibrating your oven takes less than 30 minutes and requires only a simple oven thermometer.</p>

              {/* ── Step 1 ── */}
              <StepH2 id="test-accuracy" num="1" title="Test Your Oven's Accuracy" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>What you'll need:</strong> An oven thermometer (available at any kitchen supply store for $5-15). Avoid digital probe thermometers&mdash;get a dial or hanging oven thermometer designed to sit inside the oven.</p>

              <DarkBox label="TESTING PROCEDURE" steps={[
                'Place the oven thermometer on the center rack of your oven',
                'Set the oven to 350\u00b0F (a common baking temperature)',
                'Wait 20 minutes for the oven to fully preheat and stabilize',
                'Without opening the door, check the thermometer reading through the oven window (use a flashlight if needed)',
                'Note the difference between the set temperature (350\u00b0F) and the thermometer reading',
              ]} />

              <p style={P}><strong style={{ color: '#1A1A1A' }}>Repeat the test:</strong> Test at two more temperatures (250&deg;F and 425&deg;F) to see if the error is consistent across the temperature range.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Example:</strong> If you set the oven to 350&deg;F but the thermometer reads 375&deg;F, your oven is running <strong>25&deg;F too hot</strong>.</p>

              {/* ── Step 2 ── */}
              <StepH2 id="decide-calibration" num="2" title="Decide if Calibration is Needed" />

              {/* Decision rows */}
              <div style={{ marginBottom: 16 }}>
                {[
                  { icon: '\u2713', bg: 'rgba(100,200,100,0.15)', color: '#4CAF50', label: 'Acceptable Range', value: '\u00b110\u00b0F \u2014 functioning normally, no action needed' },
                  { icon: '\u26A0', bg: 'rgba(255,87,34,0.12)', color: '#FF5722', label: 'Calibrate if:', value: 'Consistently off by more than 15\u00b0F \u2014 DIY fix below' },
                  { icon: '\uD83D\uDD27', bg: 'rgba(255,87,34,0.12)', color: '#FF5722', label: 'Call a Professional:', value: 'Off by more than 50\u00b0F \u2014 faulty sensor or control board' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14 }}>{row.icon}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 2 }}>{row.label}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Step 3 ── */}
              <StepH2 id="calibrate-diy" num="3" title="Calibrate Your Oven (DIY)" />
              <p style={P}>Most <a href="/oven-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>ovens</a> allow you to adjust the temperature calibration by +/- 35&deg;F through the control panel. The exact process varies by brand, but here's the general approach:</p>

              <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: '#1A1A1A', margin: '20px 0 12px' }}>Method 1: Digital Control Panels (Most Modern Ovens)</h3>
              <DarkBox label="DIGITAL METHOD" steps={[
                'Press and hold the "Bake" button for 5-8 seconds until the display changes (some models require holding "Bake" + "Broil" simultaneously)',
                'The display will show a calibration offset value (e.g., "0" or "00")',
                'Use the "+" or "-" buttons to adjust the offset. If your oven runs 20\u00b0F hot, set the offset to "-20"',
                'Press "Start" or "Save" to confirm the new setting',
              ]} />

              <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: '#1A1A1A', margin: '20px 0 12px' }}>Method 2: Manual Dial/Knob Ovens (Older Models)</h3>
              <p style={P}>Some older ovens have a calibration screw behind the temperature knob:</p>
              <DarkBox label="MANUAL METHOD" steps={[
                'Pull the temperature knob straight off (it should slide off)',
                'Look for a screw or disc on the back of the knob or on the shaft',
                'Use a screwdriver to turn the screw clockwise (to lower temperature) or counterclockwise (to raise temperature)',
                'Each notch typically adjusts by 10\u00b0F\u2014consult your manual for specifics',
                'Replace the knob and retest',
              ]} />

              {/* Important Warning */}
              <div style={{ background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '16px 20px', margin: '20px 0' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{'\u26A0\uFE0F'}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722' }}>Important:</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>Always consult your oven's user manual for brand-specific calibration instructions. Incorrect adjustments can void warranties or cause further issues.</p>
              </div>

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

              {/* ── Brand Reference ── */}
              <h2 id="brand-reference" style={H2S}>Quick Brand Reference</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {BRANDS.map(b => (
                  <div key={b.name} className="brand-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '14px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, transition: 'border-color 0.2s' }}>
                    <span style={{ background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '4px 12px', borderRadius: 3, minWidth: 90, textAlign: 'center', flexShrink: 0, alignSelf: 'flex-start', marginTop: 2 }}>{b.name}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}><strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>{b.name}:</strong> {b.text}</span>
                  </div>
                ))}
              </div>

              {/* ── Step 4 ── */}
              <StepH2 id="retest" num="4" title="Retest After Calibration" />
              <p style={P}>After adjusting the calibration, repeat the oven thermometer test at 350&deg;F to confirm accuracy. Fine-tune the offset if needed.</p>

              {/* ── When Calibration Isn't Enough ── */}
              <h2 id="when-not-enough" style={H2S}>When Calibration Isn't Enough</h2>
              <p style={P}>If your oven is still inaccurate after calibration, or if it's off by more than 50&deg;F, you may need:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '\uD83C\uDF21\uFE0F', title: 'Temperature sensor replacement', body: 'The temperature probe may be faulty or corroded \u2014 causes consistent over/under-heating.' },
                  { icon: '\uD83D\uDCBB', title: 'Control board replacement', body: 'The electronic brain of the oven may be malfunctioning \u2014 shows incorrect readings.' },
                  { icon: '\uD83D\uDD25', title: 'Heating element inspection', body: 'Weak or failing heating elements cause uneven temperatures \u2014 common in older gas/electric ovens.' },
                ].map((card, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', borderRadius: 4 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 2 }}>{card.title}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ ...P, marginTop: 16 }}>These repairs require professional diagnosis and parts replacement.</p>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Oven Temperature &mdash; Common Questions</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>EXPERT OVEN REPAIR</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Oven Still Not Accurate? We Can Help!</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified oven repair technicians diagnose and fix temperature issues for all major brands. Fast scheduling in SF Bay Area.</p>
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
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei &mdash; Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Licensed CA Technician &middot; License #51001 &middot; 3+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Repair */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>EXPERT OVEN REPAIR</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Oven Not Heating Right?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>If calibration doesn't fix it, we will. $60 diagnostic, 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Brands: GE, Samsung, LG, Bosch', 'Fast Scheduling', 'Licensed CA Technician'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Repair Online</a>
              </div>

              {/* Widget 2: Temp Offset Guide */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Temperature Offset Guide</p>
                {[
                  { range: '\u00b110\u00b0F', badge: 'Normal \u2713', badgeBg: 'rgba(100,200,100,0.1)', badgeColor: '#4CAF50' },
                  { range: '\u00b115\u201335\u00b0F', badge: 'Calibrate', badgeBg: 'rgba(255,87,34,0.1)', badgeColor: '#FF5722' },
                  { range: '50\u00b0F+', badge: 'Call Pro', badgeBg: '#0D1B2A', badgeColor: '#fff' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>{row.range}</span>
                    <span style={{ background: row.badgeBg, color: row.badgeColor, fontFamily: F, fontWeight: 700, fontSize: 11, padding: '3px 8px', borderRadius: 3 }}>{row.badge}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', marginTop: 10 }}>You need a $5&ndash;$15 oven thermometer to test</p>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
                  { text: '5 Reasons Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
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
                { title: 'Gas Smell from Stove? Safety Steps & When to Call', href: '/blog/gas-smell-from-stove' },
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
                { tag: 'SERVICE', title: 'Oven Repair in Bay Area', body: 'Expert oven repair for all brands. Temperature issues, elements, control boards.', link: 'View Service', href: '/oven-repair' },
                { tag: 'ARTICLE', title: 'Repair vs Replace: When to Fix Your Appliance', body: 'Use the 50% rule to decide if oven repair makes financial sense.', link: 'Read Article', href: '/blog/when-to-repair-vs-replace' },
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
        {showFloat && <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.3)', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
          <a href="tel:+17605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
        </div>}
      </div>
    </>
  );
};

export default OvenTemperatureCalibration;

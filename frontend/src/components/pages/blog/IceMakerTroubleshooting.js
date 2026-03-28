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
  { q: 'Why is my ice maker not making ice even though the water works?', a: "The most common hidden causes are: (1) shutoff arm stuck in \u2018up\u2019 position \u2014 check and lower it manually, (2) water filter clogged \u2014 replace if older than 6 months, (3) freezer above 10\u00b0F \u2014 ice makers need 0\u20135\u00b0F to work properly. Try resetting the ice maker by holding the reset button for 3\u20135 seconds." },
  { q: 'How do I reset my ice maker?', a: "Most ice makers have a reset button \u2014 usually a small button on the side or front of the ice maker unit. Press and hold for 3\u20135 seconds until you hear the motor cycle. Wait 3\u20134 hours for ice to form. If there\u2019s no reset button, turn the ice maker off for 30 seconds, then back on. For Samsung and LG, check the control panel for an ice maker on/off toggle." },
  { q: 'Why is my ice maker making small or hollow ice cubes?', a: "Small or hollow cubes almost always indicate low water pressure or a clogged water filter. The ice mold isn\u2019t filling completely. Replace the water filter first (should be every 6 months or 300 gallons). If the filter is new, check water pressure \u2014 it should be at least 20 PSI. Low home water pressure needs a plumber, not an appliance tech." },
  { q: 'How much does ice maker repair cost in San Francisco Bay Area?', a: "Ice maker repairs in the Bay Area typically cost $150\u2013$300. Water inlet valve replacement: $100\u2013$200. Ice maker module replacement: $150\u2013$250. Full unit replacement: $200\u2013$350 installed. DIY unit replacement costs $80\u2013$200 in parts. FixitBay LLC charges $60 diagnostic, applied to your repair." },
  { q: 'Is it worth repairing an ice maker or should I replace the fridge?', a: "Ice maker repair is almost always worth it if the refrigerator itself is under 10 years old. The ice maker is a replaceable component \u2014 even a full unit replacement ($80\u2013$200 in parts) is far cheaper than a new fridge. Only consider fridge replacement if the compressor or sealed system is failing alongside the ice maker." },
];

const TOC = [
  { id: 'water-supply-valve', label: 'Check the Water Supply Valve' },
  { id: 'water-filter', label: 'Replace the Water Filter' },
  { id: 'freezer-temperature', label: 'Verify the Freezer Temperature' },
  { id: 'ice-maker-arm', label: 'Check the Ice Maker Arm or Sensor' },
  { id: 'water-inlet-valve', label: 'Inspect the Water Inlet Valve' },
  { id: 'frozen-fill-tube', label: 'Thaw a Frozen Fill Tube' },
  { id: 'reset-module', label: 'Reset the Ice Maker Module' },
  { id: 'clean-ice-maker', label: 'Clean the Ice Maker and Ice Bin' },
  { id: 'motor-failure', label: 'Check for Ice Maker Motor Failure' },
  { id: 'replace-unit', label: 'Replace the Entire Ice Maker Unit' },
  { id: 'checklist', label: 'Quick Diagnostic Checklist' },
  { id: 'faq', label: 'FAQ' },
];

const CHECKLIST = [
  'Water supply valve fully open?',
  'Water filter replaced in last 6 months?',
  'Freezer temperature at 0-5\u00b0F?',
  'Ice maker shutoff arm in "down" position?',
  'Ice maker reset performed?',
];

const DarkBox = ({ label, children, steps }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </div>
    {steps ? steps.map((s, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}.</span>
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{s}</span>
      </div>
    )) : (
      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>{children}</div>
    )}
  </div>
);

const FixH2 = ({ id, num, title }) => (
  <>
    <div id={id} style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '36px 0 16px' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{num}</div>
      <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.2)', marginBottom: 16 }} />
  </>
);

const CauseList = ({ items }) => items.map((item, i) => (
  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', marginTop: 6, flexShrink: 0 }} />
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
  </div>
));

const IceMakerTroubleshooting = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Ice Maker Not Working? Top 10 Fixes", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/ice-maker-troubleshooting" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Ice Maker Troubleshooting", "item": "https://fixitbay.net/blog/ice-maker-troubleshooting" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Ice Maker Not Working? Top 10 Fixes | FixitBay LLC"
        description="Ice maker not making ice? Try these 10 fixes first — water filter, supply valve, frozen fill tube, reset, and more. DIY troubleshooting guide."
        canonical="https://fixitbay.net/blog/ice-maker-troubleshooting"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .ice-h1{font-size:40px !important}
          @media(max-width:767px){
            .ice-h1{font-size:28px !important}
            .ice-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .symptom-grid{grid-template-columns:1fr !important}
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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Refrigerator</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Refrigerator</span>
            </div>
            <BlogByline dateISO="2026-01-05" dateFormatted="January 5, 2026" readTime="7 min" />
            <h1 className="ice-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Ice Maker Not Working? Top 10 Fixes — Bay Area Troubleshooting Guide
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 640, margin: '0 auto' }}>
              No ice, slow ice production, or small/hollow cubes? Troubleshoot water supply, ice maker module, and water filter issues. Most ice maker problems have simple solutions you can fix yourself.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="ice-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* Symptom Quick Picker */}
              <div data-testid="symptom-picker" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 14 }}>What's Your Ice Maker Doing?</p>
                <div className="symptom-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                  {[
                    { icon: '\u274C', symptom: 'No Ice at All', hint: '\u2192 Fixes 1, 2, 3, 7' },
                    { icon: '\uD83D\uDC0C', symptom: 'Slow Production', hint: '\u2192 Fixes 2, 3, 5, 8' },
                    { icon: '\uD83D\uDD32', symptom: 'Small or Hollow Cubes', hint: '\u2192 Fixes 2, 5, 6' },
                  ].map((card, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '12px 14px', textAlign: 'center', cursor: 'pointer' }}>
                      <div style={{ fontSize: 28, marginBottom: 6 }}>{card.icon}</div>
                      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: '#fff' }}>{card.symptom}</div>
                      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{card.hint}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>10 Fixes to Try</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>A broken ice maker is frustrating, but before you call for service, try these 10 troubleshooting steps. Most ice maker issues are caused by simple problems you can fix in minutes.</p>

              {/* ── Fix 1: Water Supply Valve ── */}
              <FixH2 id="water-supply-valve" num="1" title="Check the Water Supply Valve" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> If the water supply valve behind the <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>refrigerator</a> is turned off or only partially open, the ice maker can't get water.</p>
              <DarkBox label="QUICK FIX">Pull the fridge out and locate the small valve on the wall or floor (usually a blue or red handle). Make sure it's fully turned to the "open" position. If it's been partially closed, this alone can restore ice production.</DarkBox>

              {/* ── Fix 2: Water Filter ── */}
              <FixH2 id="water-filter" num="2" title="Replace the Water Filter" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> A clogged water filter is the #1 cause of slow or no <a href="/ice-maker-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>ice production</a>. Filters should be changed every 6 months (or 300 gallons).</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs your filter needs replacement:</strong></p>
              <CauseList items={['Slow or no ice production', 'Small, hollow, or misshapen ice cubes', 'Reduced water dispenser flow', 'Filter indicator light is on']} />
              <p style={{ ...P, marginTop: 12 }}><strong style={{ color: '#1A1A1A' }}>Solution:</strong> Replace the filter with a genuine OEM filter for your refrigerator model. Aftermarket filters often don't provide proper flow.</p>

              {/* ── Fix 3: Freezer Temperature ── */}
              <FixH2 id="freezer-temperature" num="3" title="Verify the Freezer Temperature" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> Ice makers require freezer temperatures between 0-5&deg;F to function properly. If your freezer is too warm, ice won't form.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Quick check:</strong> Use a freezer thermometer to verify the temperature. If it's above 10&deg;F, adjust your temperature control. Wait 24 hours and recheck ice production.</p>

              {/* ── Fix 4: Ice Maker Arm ── */}
              <FixH2 id="ice-maker-arm" num="4" title="Check the Ice Maker Arm or Sensor" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> Most ice makers have a shutoff arm (a wire or plastic arm) or an optical sensor that stops ice production when the bin is full. If this arm is stuck in the "up" (off) position, the ice maker won't make ice.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Solution:</strong> Gently lower the shutoff arm. It should move freely and spring back. If it's stuck or feels stiff, it may need lubrication or replacement. For sensor-based models, ensure the sensor lens is clean (wipe with a soft cloth).</p>

              {/* ── Fix 5: Water Inlet Valve ── */}
              <FixH2 id="water-inlet-valve" num="5" title="Inspect the Water Inlet Valve" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> The water inlet valve controls the flow of water to the ice maker. If it's clogged, frozen, or electrically failed, no water reaches the ice maker.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>How to test:</strong> Listen for a faint humming or buzzing sound from the back of the fridge during an ice-making cycle. If you hear nothing, the valve may be faulty. Testing with a multimeter can confirm (requires basic electrical knowledge).</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Inlet valve replacement requires shutting off water, removing panels, and handling electrical connections&mdash;most homeowners prefer to hire a technician.</p>

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

              {/* ── Fix 6: Frozen Fill Tube ── */}
              <FixH2 id="frozen-fill-tube" num="6" title="Thaw a Frozen Fill Tube" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> The fill tube (a small tube that delivers water to the ice mold) can freeze, especially if the freezer is set too cold or the door is opened frequently.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Use a hairdryer on low heat to gently warm the fill tube (located behind or beneath the ice maker). Do NOT use high heat or get too close to plastic parts. Once thawed, test the ice maker.</p>

              {/* ── Fix 7: Reset Module ── */}
              <FixH2 id="reset-module" num="7" title="Reset the Ice Maker Module" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> Sometimes the ice maker module (the mechanical/electrical unit) gets stuck mid-cycle or experiences a control glitch.</p>
              <DarkBox label="HOW TO RESET" steps={[
                'Locate the reset button on the ice maker (usually a small button on the side or front)',
                'Press and hold for 3-5 seconds (some models: press once briefly)',
                'Listen for the ice maker to cycle (you should hear a motor or see the ejector arms move)',
                'Wait 3-4 hours for new ice to form',
              ]} />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>No reset button?</strong> Turn the ice maker off for 30 seconds, then turn it back on.</p>

              {/* ── Fix 8: Clean Ice Maker ── */}
              <FixH2 id="clean-ice-maker" num="8" title="Clean the Ice Maker and Ice Bin" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> Mineral buildup, mold, or ice clumping can interfere with the ice maker's ability to eject cubes and fill the bin properly.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Solution:</strong> Remove the ice bin, wash it with warm soapy water, and dry thoroughly. Wipe down the ice maker itself with a damp cloth. This can resolve issues with cubes sticking together or partial ejection.</p>

              {/* ── Fix 9: Motor Failure ── */}
              <FixH2 id="motor-failure" num="9" title="Check for Ice Maker Motor Failure" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>The Problem:</strong> The ice maker motor is responsible for rotating the ice mold and ejecting cubes. If it's failed, you'll have water in the mold but no ice ejection.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>How to test:</strong> Manually press the reset button to trigger a cycle. If the motor doesn't turn or you hear clicking but no movement, the motor may be dead.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Motor replacement requires disassembling the ice maker unit&mdash;best left to a technician.</p>

              {/* ── Fix 10: Replace Unit ── */}
              <FixH2 id="replace-unit" num="10" title="Replace the Entire Ice Maker Unit" />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When all else fails:</strong> If you've tried everything above and the ice maker still doesn't work, the entire module may need replacement. This is common in ice makers that are 8-10 years old.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Cost:</strong> Replacement ice maker units cost $80-$200 depending on the model. Installation is straightforward for many homeowners (requires basic tools), but you can also hire a technician for guaranteed proper installation.</p>

              {/* ── Checklist ── */}
              <h2 id="checklist" style={H2S}>Quick Diagnostic Checklist</h2>
              <div data-testid="checklist" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '24px 28px' }}>
                {CHECKLIST.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < CHECKLIST.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', border: '2px solid #FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: '#FF5722', fontSize: 11, fontWeight: 700 }}>{'\u2713'}</span>
                    </div>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Ice Maker Problems &mdash; Answered</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>ICE MAKER REPAIR EXPERTS</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Ice Maker Still Not Working?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians repair and replace ice makers for all refrigerator brands. Fast scheduling in SF Bay Area!</p>
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
                <div style={EYE}>EXPERT ICE MAKER REPAIR</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Ice Maker Still Dead?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty on all work.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Brands: Samsung, LG, Whirlpool, GE', 'Fast Scheduling', 'Licensed CA Technician'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Repair Online</a>
              </div>

              {/* Widget 2: Quick Diagnosis */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Quick Self-Diagnosis</p>
                {[
                  { symptom: 'No ice at all', fix: 'Check fixes 1, 2, 3, 7' },
                  { symptom: 'Slow / less ice', fix: 'Check fixes 2, 3, 5, 8' },
                  { symptom: 'Small or hollow cubes', fix: 'Check fixes 2, 5, 6' },
                ].map((row, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <p style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A', marginBottom: 2 }}>{row.symptom}</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#FF5722' }}>{'\u2192'} {row.fix}</p>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#FF5722', marginTop: 12, textAlign: 'center', borderTop: '1px solid rgba(255,87,34,0.15)', paddingTop: 10 }}>Tried all 10? Time to call us.</p>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: '5 Reasons Refrigerator Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
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
                { title: 'Refrigerator Not Cooling? 8 Causes & Fixes', href: '/blog/refrigerator-not-cooling' },
                { title: 'When to Replace Your Refrigerator Water Filter', href: '/blog/refrigerator-water-filter' },
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
                { tag: 'SERVICE', title: 'Ice Maker Repair in Bay Area', body: 'Expert ice maker repair for all refrigerator brands. $60 diagnostic applied.', link: 'View Service', href: '/ice-maker-repair' },
                { tag: 'ARTICLE', title: '5 Reasons Your Refrigerator Isn\'t Cooling', body: 'DIY fixes and when to call a technician in the Bay Area.', link: 'Read Article', href: '/blog/refrigerator-not-cooling' },
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

export default IceMakerTroubleshooting;

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
  { q: "Why is my dryer not heating but still spinning?", a: "The most common cause is a blown thermal fuse \u2014 a safety device that trips when the dryer overheats, usually from a clogged vent. The dryer will tumble normally but produce no heat. For electric dryers, also check your breaker panel \u2014 a tripped 240V breaker will allow tumbling but not heating." },
  { q: "How much does dryer repair cost in San Francisco?", a: "Most dryer repairs cost $250\u2013$400 after the diagnostic fee. FixitBay LLC charges a $60 diagnostic applied toward repair. Thermal fuse replacement starts from $250. Heating element replacement ranges from $265\u2013$350. Gas valve solenoid repair is typically $295\u2013$350." },
  { q: "Should I repair or replace a dryer that's not heating?", a: "If your dryer is under 8 years old, repair is almost always worth it \u2014 most heating issues cost $150\u2013$280 to fix. For dryers over 12 years old where the motor or control board has failed ($350+ repair), replacement often makes more sense." },
  { q: "Is a gas dryer not heating dangerous?", a: "A gas dryer that isn\u2019t heating is not immediately dangerous \u2014 if the igniter isn\u2019t lighting, gas typically doesn\u2019t flow. However, if you smell gas near the dryer at any time, turn off the gas valve, open windows, and call your gas company immediately. Don\u2019t use the dryer until it\u2019s been inspected." },
  { q: "How long does dryer repair take?", a: "Most dryer repairs take 45 minutes to 1.5 hours. Thermal fuses, heating elements, and igniters are common parts that our technician carries on the truck. Gas valve solenoids and control boards may occasionally require ordering. FixitBay LLC offers same- or next-day and next-day appointments Monday through Saturday." },
];

const TOC = [
  { id: 'lint-vent', label: 'Clogged Lint Screen or Dryer Vent' },
  { id: 'thermal-fuse', label: 'Blown Thermal Fuse' },
  { id: 'heating-element', label: 'Faulty Heating Element (Electric)' },
  { id: 'gas-igniter', label: 'Igniter or Gas Valve Solenoid (Gas)' },
  { id: 'thermostat', label: 'Cycling or Hi-Limit Thermostat' },
  { id: 'timer-board', label: 'Broken Timer or Control Board' },
  { id: 'moisture-sensor', label: 'Faulty Moisture Sensor or Wiring' },
  { id: 'gas-vs-electric', label: 'Gas vs Electric Diagnostic Guide' },
  { id: 'checklist', label: 'DIY Checklist' },
  { id: 'pricing', label: 'Repair Pricing \u2014 SF Bay Area' },
  { id: 'field-note', label: "Andrei\u2019s Field Note" },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'related', label: 'Related Articles' },
];

const CHECKLIST = [
  'Clean lint screen \u2014 check for fabric softener residue buildup',
  'Inspect dryer vent hose \u2014 disconnect and look for lint clogs',
  'Check outside vent flap \u2014 should open when dryer runs',
  'Electric dryers: check BOTH breakers in your panel (240V = 2 breakers)',
  'Clean moisture sensor bars inside drum with rubbing alcohol',
  'Run dryer on high heat with no clothes \u2014 feel for warm air at the vent',
];

const PRICING = [
  { problem: 'Vent cleaning + inspection', cost: 'from $80' },
  { problem: 'Thermal fuse replacement', cost: 'from $250' },
  { problem: 'Heating element (electric)', cost: 'from $180' },
  { problem: 'Igniter replacement (gas)', cost: 'from $180' },
  { problem: 'Gas valve solenoid', cost: 'from $200' },
  { problem: 'Cycling/hi-limit thermostat', cost: 'from $250' },
  { problem: 'Timer or control board', cost: 'from $180' },
  { problem: 'Moisture sensor', cost: 'from $120' },
];

const DryerNotHeating = () => {
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
      id: 'article-schema',
      data: {
        "@context": "https://schema.org", "@type": "BlogPosting",
        "headline": "Dryer Not Heating? 7 Causes & Fixes | FixitBay LLC SF",
        "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
        "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } },
        "datePublished": "2026-03-23",
        "dateModified": "2026-03-23",
        "mainEntityOfPage": "https://fixitbay.net/blog/dryer-not-heating"
      }
    },
    {
      id: 'faq-schema',
      data: {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(f => ({
          "@type": "Question", "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    },
    {
      id: 'breadcrumb-schema',
      data: {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" },
          { "@type": "ListItem", "position": 3, "name": "Dryer Not Heating", "item": "https://fixitbay.net/blog/dryer-not-heating" }
        ]
      }
    }
  ], []);

  useSchemas(schemas);

  const SFTip = ({ text }) => (
    <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '14px 18px', margin: '16px 0' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</span>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SF Bay Area Note</span>
      </div>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{text}</p>
    </div>
  );

  return (
    <>
      <SEOMetaTags
        title="Dryer Not Heating? 7 Causes & Fixes | FixitBay LLC SF"
        description="Dryer not heating? 7 common causes for gas & electric dryers. SF Bay Area guide with DIY checks + when to call a pro. From $235 at FixitBay LLC."
        canonical="https://fixitbay.net/blog/dryer-not-heating"
        ogType="article"
      />

      <div style={{ fontFamily: F }}>
        <style>{`
          .art-h1{font-size:40px !important}
          @media(max-width:767px){
            .art-h1{font-size:28px !important}
            .art-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .diag-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}
          .toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-pill:hover{background:#FF5722 !important;color:#fff !important;border-color:#FF5722 !important}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}
          .faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
        `}</style>

        {/* ━━━ HERO ━━━ */}
        <section data-testid="article-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Dryer Not Heating</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Dryer</span>
            </div>
            <BlogByline dateISO="2026-03-23" dateFormatted="March 23, 2026" readTime="8 min" />
            <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Dryer Not Heating? 7 Common Causes for Gas & Electric Dryers
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              7 causes ranked by complexity for both gas and electric dryers. SF Bay Area pricing, a real case study, and a DIY checklist before you call.
            </p>
          </div>
        </section>

        {/* ━━━ ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="art-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ LEFT — ARTICLE ━━━ */}
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
              <p style={{ ...P, marginBottom: 16 }}>
                <span style={{ fontWeight: 600, color: '#1A1A1A' }}>A dryer that tumbles but won't heat is one of the most common appliance problems I see</span> — especially in San Francisco's older homes where gas dryers sit in cramped laundry closets with long vent runs. Before calling for service, check a few things yourself. Below are the 7 most common causes, from the simplest $0 fix to issues that need a licensed technician. I cover both gas and electric dryers.
              </p>
              <p style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A3B5D', fontStyle: 'italic', marginBottom: 28 }}>
                — Andrei, Licensed Appliance Technician, FixitBay LLC
              </p>

              {/* ── Section 1 ── */}
              <h2 id="lint-vent" style={H2S}><span style={{ color: '#FF5722' }}>1.</span> Clogged Lint Screen or Dryer Vent — Most Common</h2>
              <p style={P}>The #1 reason <a href="/dryer-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>dryers stop heating</a> is restricted airflow. A clogged lint screen or blocked vent hose forces the dryer to overheat and trip its safety thermostat.</p>
              <SFTip text="Victorian and Edwardian homes in the Mission, Castro, and Haight have some of the longest dryer vent runs I've seen — 20-30 feet with multiple bends through old walls. Lint buildup in these runs is a serious fire hazard. The San Francisco Fire Department recommends professional vent cleaning annually." />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY fix:</strong> Clean the lint screen before every load. Pull the dryer out, disconnect the vent hose, and vacuum it thoroughly. Check the outside vent flap — if it doesn't open when the dryer runs, the vent is blocked.</p>

              {/* ── Section 2 ── */}
              <h2 id="thermal-fuse" style={H2S}><span style={{ color: '#FF5722' }}>2.</span> Blown Thermal Fuse — The Safety Switch</h2>
              <p style={P}>The thermal fuse is a one-time safety device that blows when the dryer overheats. Once blown, the <a href="/dryer-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>dryer</a> tumbles but produces zero heat. This is the #1 professional repair we do on dryers.</p>
              <p style={P}>This almost always means the vent was clogged first — if you just replace the fuse without clearing the vent, it will blow again within weeks.</p>
              <p style={P}>Both gas and electric dryers have thermal fuses.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $250–$295 (fuse + vent inspection)</p>

              {/* ── Section 3 ── */}
              <h2 id="heating-element" style={H2S}><span style={{ color: '#FF5722' }}>3.</span> Faulty Heating Element (Electric Dryers)</h2>
              <p style={P}>Electric dryers use a coiled heating element that glows red-hot. Over time, the coil breaks or develops open spots. Symptom: dryer runs but air is room temperature — no warmth at all.</p>
              <p style={P}>You can sometimes confirm this by looking through the back panel — a working element glows orange. If it's dark while running, the element is broken.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $265–$350</p>

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need <a href="/dryer-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>dryer repair</a> in San Francisco & Bay Area?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Fast scheduling &middot; $60 diagnostic applied to repair &middot; 180-day warranty</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                    <a href="/book" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online</a>
                  </div>
                </div>
              </div>

              {/* ── Section 4 ── */}
              <h2 id="gas-igniter" style={H2S}><span style={{ color: '#FF5722' }}>4.</span> Igniter or Gas Valve Solenoid Failure (Gas Dryers)</h2>
              <p style={P}>Gas dryers use an igniter to light the gas burner. If the igniter cracks or the gas valve solenoids fail, the burner won't light and the dryer tumbles cold.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Symptom with solenoid failure:</strong> dryer heats for the first 10 minutes, then goes cold. The igniter glows but gas never flows. This intermittent pattern is the classic solenoid signature.</p>
              <SFTip text="Many SF apartments and older homes have gas dryers in original laundry closets. Proper gas line connections and ventilation are critical — we always check for gas leaks during repair." />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $180–$260</p>

              {/* ── Section 5 ── */}
              <h2 id="thermostat" style={H2S}><span style={{ color: '#FF5722' }}>5.</span> Cycling Thermostat or Hi-Limit Thermostat</h2>
              <p style={P}>The cycling thermostat regulates temperature by turning the heating element or gas burner on and off. When it fails, the dryer may not heat at all or may overheat.</p>
              <p style={P}>The hi-limit thermostat is a backup safety device. If it trips, the dryer won't heat until it's replaced.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $250–$295</p>

              {/* ── Section 6 ── */}
              <h2 id="timer-board" style={H2S}><span style={{ color: '#FF5722' }}>6.</span> Broken Timer or Control Board</h2>
              <p style={P}>On older dryers, a mechanical timer controls the heat cycle. If the timer motor fails or contacts burn out, the dryer may tumble without activating the heater.</p>
              <p style={P}>On newer electronic dryers, the control board serves the same function. Error codes on the display panel can help identify the issue.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $180–$300</p>

              {/* ── Section 7 ── */}
              <h2 id="moisture-sensor" style={H2S}><span style={{ color: '#FF5722' }}>7.</span> Faulty Moisture Sensor or Wiring Issue</h2>
              <p style={P}>Modern dryers have moisture sensors inside the drum that detect when clothes are dry. If these sensors are dirty or broken, the dryer may stop heating prematurely, leaving clothes damp.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY check:</strong> Clean the sensor bars inside the drum with rubbing alcohol and a cotton cloth. They look like two metal strips near the lint trap.</p>
              <p style={P}>If cleaning doesn't help, the wiring harness or sensor itself may need replacement.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $120–$200</p>

              {/* ── Gas vs Electric Diagnostic ── */}
              <h2 id="gas-vs-electric" style={H2S}>Gas vs Electric: Quick Diagnostic Guide</h2>
              <div className="diag-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div data-testid="diag-gas" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', borderTop: '3px solid #FF5722' }}>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gas Dryer Not Heating</p>
                  {[
                    'Is pilot/igniter glowing? \u2192 If no glow, igniter failed',
                    'Igniter glows but no flame? \u2192 Gas valve solenoid failed',
                    'Heats then stops after 10 min? \u2192 Solenoid cycling issue',
                    'Error code on display? \u2192 Control board issue',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0, fontSize: 13 }}>{'\u2713'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8, marginTop: 8 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Always check: Vent airflow + thermal fuse first</span>
                  </div>
                </div>
                <div data-testid="diag-electric" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', borderTop: '3px solid #42A5F5' }}>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#42A5F5', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Electric Dryer Not Heating</p>
                  {[
                    'Breaker panel \u2014 electric dryers need TWO breakers (240V). One tripped = tumble but no heat',
                    'Is the element glowing? \u2192 If dark, element is broken',
                    'Outlet voltage with multimeter \u2192 Should read 240V',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#42A5F5', fontWeight: 700, flexShrink: 0, fontSize: 13 }}>{'\u2713'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8, marginTop: 8 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Always check: Vent airflow + thermal fuse first</span>
                  </div>
                </div>
              </div>

              {/* ── DIY Checklist ── */}
              <h2 id="checklist" style={H2S}>DIY Checklist Before Calling a Technician</h2>
              <div data-testid="checklist" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '24px 28px' }}>
                {CHECKLIST.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < CHECKLIST.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', border: '2px solid #FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: '#FF5722', fontSize: 11, fontWeight: 700 }}>{'\u2713'}</span>
                    </div>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                  </div>
                ))}
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A', marginTop: 16 }}>
                  If none of these solve it &rarr; call FixitBay LLC: <a href="tel:7605435733" style={{ color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
                </p>
              </div>

              {/* ── Pricing Table ── */}
              <h2 id="pricing" style={H2S}>Dryer Repair Pricing — San Francisco Bay Area</h2>
              <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                <table data-testid="pricing-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: '#1A3B5D' }}>
                      <th style={{ color: '#fff', fontWeight: 700, padding: '12px 16px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Problem</th>
                      <th style={{ color: '#fff', fontWeight: 700, padding: '12px 16px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#F8F5F0' : '#fff' }}>
                        <td style={{ padding: '10px 16px', color: '#4A5568', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>{row.problem}</td>
                        <td style={{ padding: '10px 16px', color: '#1A1A1A', fontWeight: 600, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={P}>FixitBay LLC <a href="/dryer-repair" style={{ color: '#C0362C', fontWeight: 600 }}>dryer repair</a> starts from $235 after $60 diagnostic. The $60 diagnostic fee is fully applied toward your repair cost.</p>

              {/* ── Andrei's Field Note ── */}
              <h2 id="field-note" style={H2S}>Andrei's Field Note</h2>
              <blockquote data-testid="field-note" style={{ borderLeft: '4px solid #FF5722', padding: '20px 24px', margin: '0 0 24px', background: '#FAFAF7', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>
                  "A customer in the Castro called about a gas dryer that heated for about 10 minutes then went cold. Classic gas valve solenoid failure — the igniter glowed every cycle but the gas never came through after the first heat-up. What made this job tricky was the dryer was wedged into a narrow closet in a 1920s Victorian with a 25-foot vent run through the wall. I replaced both solenoids ($210 total) and cleaned out the entire vent run — pulled out nearly a full grocery bag of lint. That lint was the original cause — it overheated the dryer and weakened the solenoids over time."
                </p>
                <footer style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: '#1A3B5D' }}>— Andrei, Lead Appliance Technician, FixitBay LLC</footer>
              </blockquote>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Frequently Asked Questions</h2>
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

              {/* ── Related Articles ── */}
              <h2 id="related" style={H2S}>Related Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {[
                  { title: 'Dryer Taking Too Long to Dry', href: '/blog/dryer-taking-too-long' },
                  { title: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                  { title: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
                  { title: 'Energy Efficient Appliance Tips', href: '/blog/energy-efficient-appliances' },
                ].map((a, i) => (
                  <Link key={i} to={a.href} data-testid={`related-inline-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>Read &rarr;</span>
                  </Link>
                ))}
              </div>

              {/* ── Bottom CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={{ ...EYE, marginBottom: 8 }}>PROFESSIONAL HELP</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Need Expert <a href="/dryer-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>Dryer Repair</a> in the Bay Area?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians diagnose and repair all dryer brands — <a href="/blog/same- or next-day-appliance-repair-bay-area" style={{ color: '#FF5722', textDecoration: 'none' }}>fast scheduling</a> available across <a href="/san-francisco-appliance-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>San Francisco</a> and the Bay Area.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online Now</a>
                </div>
              </div>

              {/* ── Author Box ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei — Lead Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Licensed CA technician &middot; License #51001 &middot; 3+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ RIGHT — SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>FAST SCHEDULING</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Dryer Not Heating?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Licensed CA Technician', 'Gas & Electric Dryers', 'Fast Scheduling'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }}>Book Online</a>
              </div>

              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(0,0,0,0.07)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Dryer Taking Too Long to Dry', href: '/blog/dryer-taking-too-long' },
                  { text: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Energy Efficient Appliance Tips', href: '/blog/energy-efficient-appliances' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>
                    {link.text}
                  </Link>
                ))}
              </div>

              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <div style={{ ...EYE, marginBottom: 12 }}>OUR REPAIR SERVICES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { label: 'Dryer Repair', href: '/dryer-repair' },
                    { label: 'Washer Repair', href: '/washer-repair' },
                    { label: 'Refrigerator Repair', href: '/refrigerator-repair' },
                    { label: 'Dishwasher Repair', href: '/dishwasher-repair' },
                    { label: 'Oven Repair', href: '/oven-repair' },
                  ].map(s => (
                    <Link key={s.label} to={s.href} className="sidebar-pill" style={{ background: '#fff', border: '1px solid rgba(255,87,34,0.25)', color: '#FF5722', fontFamily: F, fontWeight: 600, fontSize: 12, padding: '6px 14px', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{s.label}</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <BlogCTA />
        {/* ━━━ RELATED SERVICES ━━━ */}
        <section data-testid="related-services" style={{ background: '#0D1B2A', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>EXPLORE MORE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 28 }}>Related Services & Articles</h2>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { tag: 'SERVICE', title: 'Dryer Repair in Bay Area', body: 'Fast dryer repair for gas & electric. All brands. $60 diagnostic applied.', link: 'View Service', href: '/dryer-repair' },
                { tag: 'ARTICLE', title: 'Dryer Taking Too Long to Dry', body: 'Still damp after a full cycle? Common causes and fixes for slow dryers.', link: 'Read Article', href: '/blog/dryer-taking-too-long' },
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service appliance repair across all SF neighborhoods. Fast scheduling.', link: 'View Service', href: '/san-francisco-appliance-repair' },
              ].map((card, i) => (
                <Link key={i} to={card.href} className="related-card" style={{ background: '#1A2F45', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 24, textDecoration: 'none', transition: 'border-color 0.2s', display: 'block' }}>
                  <span style={{ display: 'inline-block', background: card.tag === 'SERVICE' ? '#FF5722' : 'rgba(255,255,255,0.1)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 9, padding: '3px 8px', borderRadius: 3, letterSpacing: '0.08em', marginBottom: 12 }}>{card.tag}</span>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 12 }}>{card.body}</p>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>{card.link} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ FOOTER ━━━ */}
        <footer data-testid="article-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ FLOATING (desktop) ━━━ */}
        {showFloat && (
          <a href="/book" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
            BOOK REPAIR
          </a>
        )}
        {showFloat && (
          <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.3)', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
            <a href="tel:+17605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
            <a href="/book" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>BOOK ONLINE</a>
            <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
          </div>
        )}
      </div>
    </>
  );
};

export default DryerNotHeating;

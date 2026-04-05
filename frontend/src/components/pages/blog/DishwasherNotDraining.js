import React, { useState, useEffect, useMemo } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import navbarLogo from '../../../assets/navbar-logo-new-112.webp';
import BlogByline from './BlogByline';
import BlogCTA from './BlogCTA';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };
const BOLD = { fontFamily: F, fontWeight: 700, color: '#1A1A1A' };

const TOC = [
  { id: 'cause-1', label: 'Cause 1: Clogged Filter' },
  { id: 'cause-2', label: 'Cause 2: Blocked Drain Hose' },
  { id: 'cause-3', label: 'Cause 3: Faulty Drain Pump' },
  { id: 'cause-4', label: 'Cause 4: Garbage Disposal Connection' },
  { id: 'cause-5', label: 'Cause 5: Kinked or Improperly Installed Hose' },
  { id: 'cause-6', label: 'Cause 6: Check Valve Issue' },
  { id: 'cause-7', label: 'Cause 7: Control Board Failure' },
  { id: 'quick-checklist', label: 'Quick Troubleshooting Checklist' },
  { id: 'faq', label: 'FAQ' },
];

const CHECKLIST = [
  'Clean the filter (solves 60% of cases)',
  'Inspect drain hose for kinks or clogs',
  'Listen for drain pump during cycle',
  'Check garbage disposal knockout plug (new installs)',
  'Verify high-loop on drain hose under counter',
  'Test for check valve failure (partial draining)',
];

const FAQ_ITEMS = [
  { q: 'Why is there standing water at the bottom of my dishwasher after a cycle?', a: 'The most common cause is a clogged filter\u2014the cylindrical filter at the bottom of the tub traps food particles and should be cleaned monthly. If the filter is clean, check the drain hose for kinks or clogs, then verify your garbage disposal connection. In our experience, 80% of drainage problems are fixed by cleaning the filter or clearing a blocked drain hose\u2014both easy DIY repairs under 10 minutes.' },
  { q: 'How do I know if my dishwasher drain pump is bad?', a: 'During the drain cycle (typically near the end of the wash cycle), listen for a humming or whirring sound\u2014that\u2019s the pump working. Silence during the drain cycle often means the pump isn\u2019t running. A loud grinding or buzzing sound suggests the pump is running but obstructed. If the pump sounds fine but water still won\u2019t drain, the pump may have an electrical failure and needs professional diagnosis.' },
  { q: 'My dishwasher was just installed \u2014 why won\u2019t it drain?', a: 'If your dishwasher was just installed and has never drained properly, the garbage disposal knockout plug is almost certainly the issue. When a dishwasher drains into a garbage disposal, the installer must remove a small plastic plug from the disposal\u2019s inlet port. If it\u2019s still in place, water has nowhere to go.' },
  { q: 'Can I use my dishwasher if it\u2019s not draining properly?', a: 'We recommend fixing the drainage issue before running more cycles. Standing water can become a breeding ground for bacteria and mold. More importantly, if the drain pump is running against a stubborn clog, continued use can burn out the motor\u2014turning an easy $60 repair into a $200+ pump replacement.' },
  { q: 'How much does dishwasher drain repair cost in the Bay Area?', a: 'If the fix is cleaning the filter or clearing a hose kink, it\u2019s a free DIY repair. If the issue requires professional service\u2014like replacing a drain pump, check valve, or control board\u2014FixitBay charges a $60 diagnostic fee applied toward the repair cost. Most drain pump replacements run $250\u2013$350 total, parts and labor included, with a 180-day warranty.' },
];

const DarkBox = ({ label, steps }) => (
  <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', margin: '16px 0' }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ width: 22, height: 22, background: '#FF5722', borderRadius: '50%', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&rarr;</div>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </div>
    {steps.map((step, i) => (
      <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,87,34,0.2)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(step) }} />
      </div>
    ))}
  </div>
);

const Callout = ({ icon, label, text }) => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 12, padding: '10px 14px', background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4 }}>
    <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5 }}>
      <strong style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>{label}</strong> {text}
    </p>
  </div>
);

const CauseH2 = ({ num, title, id }) => (
  <div id={id} style={{ margin: '36px 0 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '4px 12px', borderRadius: 3, flexShrink: 0, whiteSpace: 'nowrap' }}>CAUSE {num}</span>
      <h2 style={H2S}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.2)', marginBottom: 16, marginTop: 8 }} />
  </div>
);

const DishwasherNotDraining = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Dishwasher Not Draining? 7 Causes & How to Fix It", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-02-20", "dateModified": "2026-03-29", "url": "https://fixitbay.net/blog/dishwasher-not-draining" } },
    { id: 'howto-schema', data: { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Fix a Dishwasher That Won't Drain", "description": "Step-by-step instructions for the 3 most common causes of a dishwasher not draining: clogged filter, blocked drain hose, and faulty drain pump.", "totalTime": "PT15M", "step": [
      { "@type": "HowToStep", "position": 1, "name": "Clean the dishwasher filter", "text": "Remove the bottom dish rack. Locate the cylindrical filter at the bottom center of the tub. Twist and lift to remove. Rinse under hot water with a soft brush. Clean the filter housing of debris. Reinstall by twisting back into place. Run a rinse cycle to test." },
      { "@type": "HowToStep", "position": 2, "name": "Check the drain hose for blockages", "text": "Pull the dishwasher out slightly or remove the kickplate. Inspect the drain hose for kinks, bends, or visible damage. Disconnect at the sink drain or disposal (bucket underneath). Run water through the hose to check for clogs. Verify the hose has a high loop secured under the counter. Reconnect and test." },
      { "@type": "HowToStep", "position": 3, "name": "Diagnose the drain pump", "text": "During the drain cycle, listen for a humming or whirring sound. No sound means the pump is not running. A loud grinding or buzzing suggests the pump is obstructed. Access the pump beneath the filter and check for broken glass, food debris, or small objects. If the pump is clear but still not working, it needs professional replacement." }
    ] } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Why is there standing water at the bottom of my dishwasher?", "acceptedAnswer": { "@type": "Answer", "text": "Most commonly a clogged filter. Clean the cylindrical filter at the bottom of the tub. If clean, check the drain hose for kinks. These two fixes solve 80% of drainage problems." } },
      { "@type": "Question", "name": "How do I know if my dishwasher drain pump is bad?", "acceptedAnswer": { "@type": "Answer", "text": "Listen during the drain cycle. You should hear a humming or whirring sound. Silence means the pump is not running. Grinding or buzzing means it's obstructed. If clear but not working, it needs replacement." } },
      { "@type": "Question", "name": "How much does dishwasher drain repair cost?", "acceptedAnswer": { "@type": "Answer", "text": "Filter cleaning and hose clearing are free DIY fixes. Professional drain pump replacement runs $250-$350 total with FixitBay's $60 diagnostic applied to the repair. 180-day warranty included." } }
    ] } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Dishwasher Not Draining", "item": "https://fixitbay.net/blog/dishwasher-not-draining" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Dishwasher Not Draining? 7 Causes & Fixes | FixitBay"
        description="Dishwasher won't drain? 7 common causes: clogged filter, blocked hose, faulty pump, disposal connection. Step-by-step fixes. Most take under 15 minutes."
        canonical="https://fixitbay.net/blog/dishwasher-not-draining"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .dnd-h1{font-size:40px !important}
          @media(max-width:767px){
            .dnd-h1{font-size:28px !important}
            .dnd-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .diag-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
          .mid-primary:hover{opacity:0.92}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="article-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Dishwasher</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Dishwasher</span>
            </div>
            <BlogByline dateISO="2024-12-20" dateFormatted="December 20, 2024" readTime="7 min" />
            <h1 className="dnd-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Dishwasher Not Draining? 7 Causes &amp; How to Fix It
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Standing water after a cycle? Here are 7 common causes and step-by-step fixes — most take under 15 minutes.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="dnd-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE CONTENT ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* ★ FEATURED SNIPPET PARAGRAPH ★ */}
              <p data-testid="snippet-answer" style={{ fontFamily: F, fontWeight: 500, fontSize: 16, color: '#1A1A1A', lineHeight: 1.8, marginBottom: 28, padding: '20px 24px', background: '#F8F5F0', borderLeft: '4px solid #FF5722', borderRadius: 4 }}>
                A dishwasher that won't drain is usually caused by a clogged filter, blocked drain hose, faulty drain pump, or garbage disposal connection issue. Most cases can be fixed in under 15 minutes without tools. Here are the 7 most common causes and step-by-step instructions to fix each one.
              </p>

              {/* QUICK DIAGNOSIS BANNER */}
              <div data-testid="diagnosis-banner" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 14 }}>Most Likely Cause First</p>
                <div className="diag-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                  {[
                    { label: 'DIY \u2014 EASY', fixes: ['#1 Clogged Filter', '#2 Blocked Drain Hose', '#4 Disposal Connection'] },
                    { label: 'DIY \u2014 MODERATE', fixes: ['#5 Kinked Hose', '#6 Check Valve'] },
                    { label: 'CALL A PRO', fixes: ['#3 Faulty Drain Pump', '#7 Control Board'] },
                  ].map((col, ci) => (
                    <div key={ci} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{col.label}</p>
                      {col.fixes.map((f, fi) => (
                        <p key={fi} style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#fff', lineHeight: 1.7 }}>{f}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginTop: 10 }}>Check in order — Cause #1 solves 60% of all cases</p>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    {i < 7 ? t.label : `+ ${t.label}`}
                  </a>
                ))}
              </div>

              {/* ── CAUSE #1: Clogged Filter ── */}
              <CauseH2 num={1} id="cause-1" title="Clogged Filter (How to Clean It)" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> The filter at the bottom of the <a href="/dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>dishwasher</a> traps food particles to prevent them from recirculating onto your dishes. When the filter clogs with debris, water can't drain through it. This is the #1 cause of standing water — and the easiest to fix.
              </p>
              <DarkBox label="HOW TO FIX (5 MINUTES)" steps={[
                'Remove the bottom dish rack to access the filter',
                'Locate the cylindrical filter at the bottom center of the tub',
                'Twist counterclockwise and lift the filter assembly out',
                'Rinse under hot running water, scrubbing with a soft brush to remove all debris',
                'Check the filter well for large debris and wipe clean',
                'Reinstall the filter by twisting clockwise until it locks',
                'Run a rinse cycle to test drainage',
              ]} />
              <Callout icon={'\uD83D\uDCA1'} label="Prevention:" text="Clean your dishwasher filter once a month to prevent future clogs. This single habit prevents 60% of drainage issues." />

              {/* ── CAUSE #2: Blocked Drain Hose ── */}
              <CauseH2 num={2} id="cause-2" title="Blocked Drain Hose" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> The drain hose connects your dishwasher to the garbage disposal or sink drain pipe. Food particles, grease, and debris can accumulate inside the hose over time, creating a blockage. A kinked hose also restricts water flow.
              </p>
              <DarkBox label="HOW TO FIX (10 MINUTES)" steps={[
                'Pull the dishwasher out slightly or remove the kickplate to access the hose',
                'Inspect the full length of the drain hose for kinks, bends, or visible damage',
                'Disconnect the hose at the sink drain or disposal (place a bucket underneath first)',
                'Run water through the hose or use a plumber\u2019s snake to clear any clogs',
                'Reconnect the hose securely and test with a rinse cycle',
              ]} />
              <Callout icon={'\u26A1'} label="Pro tip:" text='The drain hose must form a "high loop" secured to the underside of the countertop. Without this loop, dirty water can siphon back into the dishwasher.' />

              {/* ── CAUSE #3: Faulty Drain Pump ── */}
              <CauseH2 num={3} id="cause-3" title="Faulty Drain Pump" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> The drain pump actively pushes water out of the dishwasher through the drain hose. If the pump motor fails, gets jammed by debris, or has an electrical fault, water simply stays in the tub.
              </p>
              <p style={P}>
                <strong style={BOLD}>How to diagnose:</strong> During the drain cycle (near the end of the wash), listen carefully. A healthy pump makes a humming or whirring sound. Complete silence means the pump isn't running. A loud grinding or buzzing suggests the impeller is jammed.
              </p>
              <p style={P}>
                <strong style={BOLD}>DIY check:</strong> Access the pump beneath the filter and check for obstructions — broken glass, food debris, or small objects caught in the impeller. Carefully remove any debris you find.
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(13,27,42,0.04)', borderLeft: '3px solid #0D1B2A', borderRadius: 4 }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
                  <strong style={BOLD}>When to call a pro:</strong> If the pump is clear of debris but still not running, it needs replacement. Drain pump replacement typically costs $250–$350 including parts and labor. <a href="/san-francisco-dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Schedule a repair in San Francisco</a>.
                </p>
              </div>

              {/* ── CAUSE #4: Garbage Disposal Connection ── */}
              <CauseH2 num={4} id="cause-4" title="Garbage Disposal Connection" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> If your dishwasher drains into a garbage disposal, the installer must remove a small plastic knockout plug from the disposal's dishwasher inlet port. If this plug wasn't removed during installation, water has nowhere to go. This is the most common cause on newly installed dishwashers.
              </p>
              <DarkBox label="HOW TO FIX (5 MINUTES)" steps={[
                'Look under the sink and locate the garbage disposal',
                'Find the small dishwasher inlet port on the side of the disposal',
                'If the dishwasher was recently installed and has never drained, the knockout plug is likely still in place',
                'Insert a screwdriver into the inlet and tap with a hammer to knock out the plastic plug',
                'Retrieve the plug from inside the disposal before using it',
              ]} />
              <p style={P}>
                <strong style={BOLD}>Also check:</strong> Even on older installations, the disposal itself can be clogged. Run the disposal for 15 seconds with hot water to clear any buildup before testing the dishwasher again.
              </p>

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Not sure what's causing it?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Our SF technicians diagnose and fix it same day. $60 diagnostic · 180-day warranty.</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none' }}>Call (760) 543-5733</a>
                    <a href="/book" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>Book a Repair &rarr;</a>
                  </div>
                </div>
              </div>

              {/* ── CAUSE #5: Kinked or Improperly Installed Hose ── */}
              <CauseH2 num={5} id="cause-5" title="Kinked or Improperly Installed Hose" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> Even if the hose isn't clogged internally, it can be kinked where it bends behind the dishwasher, or crushed where it passes through the cabinet wall. Improper installation — like routing the hose without a high loop — also causes drainage failures and backflow.
              </p>
              <DarkBox label="HOW TO CHECK" steps={[
                'Pull the dishwasher forward a few inches to inspect the hose routing',
                'Look for sharp bends, kinks, or spots where the hose is pinched by the dishwasher body or cabinet',
                'Verify the hose makes a high loop (secured to the underside of the counter) before connecting to the drain',
                'If the hose is damaged or flattened, replace it — new drain hoses cost $15–$25 at hardware stores',
              ]} />

              {/* ── CAUSE #6: Check Valve Issue ── */}
              <CauseH2 num={6} id="cause-6" title="Check Valve Issue" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> Many dishwashers have a check valve (also called a flapper valve) that prevents dirty water from flowing back into the tub after draining. If the valve is stuck closed, cracked, or clogged with debris, water can't exit — or drains only partially.
              </p>
              <p style={P}>
                <strong style={BOLD}>How to suspect this:</strong> You've cleaned the filter, checked the hose, the pump runs normally, but water still drains very slowly or only partially empties.
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(13,27,42,0.04)', borderLeft: '3px solid #0D1B2A', borderRadius: 4 }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
                  <strong style={BOLD}>When to call a pro:</strong> Diagnosing and replacing a check valve requires disassembly of the pump housing. This is a job for a trained technician. Our <a href="/dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>dishwasher repair service</a> covers all valve and pump issues.
                </p>
              </div>

              {/* ── CAUSE #7: Control Board Failure ── */}
              <CauseH2 num={7} id="cause-7" title="Control Board Failure" />
              <p style={P}>
                <strong style={BOLD}>Why it happens:</strong> The electronic control board sends the signal to the drain pump to turn on at the right time in the cycle. If the board has a faulty relay, burned circuit, or software glitch, it may never send that signal — even though the pump itself is fine.
              </p>
              <p style={P}>
                <strong style={BOLD}>How to suspect this:</strong> You've ruled out all other causes. The pump works when tested directly but doesn't activate during a normal cycle. Other cycle functions may also be erratic — skipping rinse, stopping mid-cycle, or displaying error codes.
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(13,27,42,0.04)', borderLeft: '3px solid #0D1B2A', borderRadius: 4 }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
                  <strong style={BOLD}>When to call a pro:</strong> Control board diagnosis requires specialized testing equipment. Replacement boards cost $250–$400 depending on the brand. A technician can confirm whether it's the board or a wiring issue.
                </p>
              </div>

              {/* ── CHECKLIST ── */}
              <div id="quick-checklist" data-testid="checklist" style={{ background: '#0D1B2A', borderRadius: 4, padding: '24px 28px', margin: '24px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 16 }}>{'\u2713'} Quick Troubleshooting Checklist</p>
                {CHECKLIST.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: 18, height: 18, border: '2px solid #FF5722', borderRadius: 3, flexShrink: 0, background: 'rgba(255,87,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#FF5722', fontSize: 11 }}>{'\u2713'}</span>
                    </div>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.82)' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0', background: '#F8F5F0' }}>
                <div style={EYE}>FAQ</div>
                <p style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Dishwasher Drainage — Common Questions</p>
                {FAQ_ITEMS.map((faq, i) => (
                  <div key={i} className="faq-q" data-testid={`faq-item-${i}`} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, marginBottom: 8, borderLeft: openFaq === i ? '3px solid #FF5722' : '3px solid transparent', overflow: 'hidden' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', textAlign: 'left' }}
                    >
                      <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}>{faq.q}</span>
                      <ChevronDown size={18} style={{ color: '#FF5722', flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 16px 16px', fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* ── BOTTOM CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={EYE}>PROFESSIONAL DISHWASHER REPAIR</div>
                <p style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Not Sure What's Causing the Issue?</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20, maxWidth: 540, margin: '0 auto 20px' }}>
                  Our San Francisco technicians can diagnose and fix it same day. $60 diagnostic applied to your repair. All brands, all models. <a href="/dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Dishwasher repair</a> &middot; <a href="/san-francisco-dishwasher-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>SF dishwasher repair</a>.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">Book a Repair &rarr;</a>
                </div>
              </div>

              {/* ── AUTHOR BOX ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Licensed CA Technician &middot; License #51001 &middot; 3+ years dishwasher repair in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Repair */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>DISHWASHER NOT DRAINING?</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Same-Day Repair Available</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>All brands and models. $60 diagnostic applied to repair. 180-day warranty.</p>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Dishwasher Brands', 'Same-Day Scheduling', '180-Day Warranty on Parts & Labor'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginBottom: 20 }} />
                <a href="tel:7605435733" className="phone-cta" data-testid="sidebar-phone" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Dishwasher Repair</a>
              </div>

              {/* Widget 2: Quick Diagnosis */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Diagnose by Symptom</p>
                {[
                  { symptom: 'Standing water, new dishwasher', fix: 'Disposal knockout plug (Cause #4)' },
                  { symptom: 'Water pools, older unit', fix: 'Clean filter first (Cause #1)' },
                  { symptom: 'Pump hums but water stays', fix: 'Clogged hose or pump (Cause #2, #3)' },
                  { symptom: 'No pump sound at all', fix: 'Faulty pump or control board (#3, #7)' },
                  { symptom: 'Drains slow, sink also slow', fix: 'Disposal / household drain (#4)' },
                ].map((r, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#1A1A1A', display: 'block', marginBottom: 4 }}>{r.symptom}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#FF5722' }}>{'\u2192'} {r.fix}</span>
                  </div>
                ))}
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'How to Maintain Your Dishwasher', href: '/blog/dishwasher-maintenance' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
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
                { title: 'How to Maintain Your Dishwasher for Longer Life', href: '/blog/dishwasher-maintenance' },
                { title: 'Washer Error Codes Explained — What They Mean & How to Fix', href: '/blog/washer-error-codes' },
              ].map((a, i) => (
                <Link key={i} to={a.href} data-testid={`related-article-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>Read article &rarr;</span>
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
                { tag: 'SERVICE', title: 'Dishwasher Repair', body: 'All brands and models. Drainage, door latch, heating element, control board. Same-day scheduling.', link: 'View Service', href: '/dishwasher-repair' },
                { tag: 'SERVICE', title: 'SF Dishwasher Repair', body: 'Fast dishwasher repair across all San Francisco neighborhoods.', link: 'View Service', href: '/san-francisco-dishwasher-repair' },
                { tag: 'ARTICLE', title: 'Dishwasher Maintenance Guide', body: 'How to keep your dishwasher running efficiently and prevent future drainage issues.', link: 'Read Article', href: '/blog/dishwasher-maintenance' },
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
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING + MOBILE ━━━ */}
        {showFloat && <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR</a>}
      </div>
    </>
  );
};

export default DishwasherNotDraining;

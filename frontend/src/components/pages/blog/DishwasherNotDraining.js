import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import navbarLogo from '../../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };
const BOLD = { fontFamily: F, fontWeight: 700, color: '#1A1A1A' };

const TOC = [
  { id: 'fix-1-clogged-filter', label: 'Clogged Filter (Most Common)' },
  { id: 'fix-2-drain-hose', label: 'Kinked or Clogged Drain Hose' },
  { id: 'fix-3-disposal-plug', label: 'Garbage Disposal Knockout Plug' },
  { id: 'fix-4-air-gap', label: 'Clogged Air Gap' },
  { id: 'fix-5-household-drain', label: 'Clogged Household Drain' },
  { id: 'fix-6-drain-pump', label: 'Faulty Drain Pump' },
  { id: 'fix-7-check-valve', label: 'Faulty Check Valve or Drain Solenoid' },
  { id: 'quick-checklist', label: 'Quick Troubleshooting Checklist' },
  { id: 'faq', label: 'FAQ' },
];

const CHECKLIST = [
  'Clean the filter (most common fix)',
  'Check drain hose for kinks',
  'Verify garbage disposal knockout plug was removed (new installations)',
  'Clean air gap (if equipped)',
  'Run garbage disposal and check sink drainage',
  'Listen for drain pump operation during cycle',
];

const FAQ_ITEMS = [
  { q: 'Why is there standing water at the bottom of my dishwasher after a cycle?', a: 'The most common cause is a clogged filter\u2014the cylindrical filter at the bottom of the tub traps food particles and should be cleaned monthly. If the filter is clean, check the drain hose for kinks or clogs, then verify your garbage disposal connection. In our experience, 80% of drainage problems are fixed by cleaning the filter or clearing a blocked drain hose\u2014both easy DIY repairs under 10 minutes.' },
  { q: 'How do I know if my dishwasher drain pump is bad?', a: 'During the drain cycle (typically near the end of the wash cycle), listen for a humming or whirring sound\u2014that\u2019s the pump working. Silence during the drain cycle often means the pump isn\u2019t running. A loud grinding or buzzing sound suggests the pump is running but obstructed. If the pump sounds fine but water still won\u2019t drain, the pump may have an electrical failure and needs professional diagnosis.' },
  { q: 'My dishwasher just installed \u2014 why won\u2019t it drain?', a: 'If your dishwasher was just installed and has never drained properly, the garbage disposal knockout plug is almost certainly the issue. When a dishwasher drains into a garbage disposal, the installer must remove a small plastic plug from the disposal\u2019s inlet port. If it\u2019s still in place, water has nowhere to go. Look under the sink, find the disposal\u2019s dishwasher inlet, and check if the plug is still inserted.' },
  { q: 'Can I use my dishwasher if it\u2019s not draining properly?', a: 'We recommend fixing the drainage issue before running more cycles. Standing water can become a breeding ground for bacteria and mold, leading to unpleasant odors. More importantly, if the drain pump is running against a stubborn clog, continued use can burn out the motor\u2014turning an easy $60 repair into a $200+ pump replacement.' },
  { q: 'How much does dishwasher drain repair cost in the Bay Area?', a: 'If the fix is cleaning the filter or clearing a hose kink, it\u2019s a free DIY repair. If the issue requires professional service\u2014like replacing a drain pump, check valve, or drain solenoid\u2014FixitBay charges a $60 diagnostic fee that\u2019s applied toward the repair cost. Most drain pump replacements run $150\u2013$250 total, parts and labor included, with a 180-day warranty.' },
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
        <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
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

const FixH2 = ({ num, title, id }) => (
  <div id={id} style={{ margin: '36px 0 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, padding: '4px 12px', borderRadius: 3, flexShrink: 0, whiteSpace: 'nowrap' }}>FIX #{num}</span>
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
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Dishwasher Not Draining? 7 Quick Fixes", "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2024-06-01", "dateModified": "2025-01-01", "url": "https://fixitbay.net/blog/dishwasher-not-draining" } },
    { id: 'howto-schema', data: { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Fix a Dishwasher That Won't Drain", "description": "7 fixes for dishwasher drainage problems, ordered by likelihood", "totalTime": "PT10M", "step": [
      { "@type": "HowToStep", "position": 1, "name": "Clean the dishwasher filter", "text": "Remove and rinse the cylindrical filter at the bottom of the tub under hot water with a soft brush." },
      { "@type": "HowToStep", "position": 2, "name": "Check the drain hose for kinks", "text": "Inspect the drain hose for bends, kinks, or visible damage. Ensure it forms a high loop secured to the underside of the counter." },
      { "@type": "HowToStep", "position": 3, "name": "Check garbage disposal knockout plug", "text": "If newly installed, verify the knockout plug was removed from the disposal's dishwasher inlet port." },
      { "@type": "HowToStep", "position": 4, "name": "Clean the air gap", "text": "Remove the chrome cap and clean debris from inside the air gap cylinder with a small brush." },
      { "@type": "HowToStep", "position": 5, "name": "Check household drain", "text": "Run the garbage disposal and test the sink drain. If the sink drains slowly, the household drain may be clogged." },
      { "@type": "HowToStep", "position": 6, "name": "Diagnose the drain pump", "text": "Listen during the drain cycle for a humming sound. No sound means the pump is not running. Call a pro if the pump needs replacement." },
      { "@type": "HowToStep", "position": 7, "name": "Check the check valve or drain solenoid", "text": "If all else checks out and water still won't drain, the check valve or solenoid may be faulty. This requires professional diagnosis." }
    ] } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Why is there standing water at the bottom of my dishwasher?", "acceptedAnswer": { "@type": "Answer", "text": "Most commonly a clogged filter. Clean the cylindrical filter at the bottom of the tub. If clean, check the drain hose for kinks. These two fixes solve 80% of drainage problems." } },
      { "@type": "Question", "name": "My dishwasher just installed \u2014 why won't it drain?", "acceptedAnswer": { "@type": "Answer", "text": "Almost certainly the garbage disposal knockout plug. The installer must remove this plastic plug from the disposal's dishwasher inlet port. Check under the sink." } },
      { "@type": "Question", "name": "How much does dishwasher drain repair cost?", "acceptedAnswer": { "@type": "Answer", "text": "Filter cleaning and hose clearing are free DIY fixes. Professional drain pump replacement runs $150-$250 total with FixitBay's $60 diagnostic applied to the repair. 180-day warranty included." } }
    ] } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Dishwasher Not Draining", "item": "https://fixitbay.net/blog/dishwasher-not-draining" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Dishwasher Not Draining? 7 Quick Fixes (Most Are DIY) | FixitBay Bay Area"
        description="Dishwasher won't drain? Check these 7 causes: clogged filter, kinked hose, disposal plug, air gap, faulty pump. Most fixes take under 10 minutes."
        canonical="https://fixitbay.net/blog/dishwasher-not-draining"
        ogType="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[0].data) }} />
      <div style={{ fontFamily: F }}>
        <style>{`
          .dnd-h1{font-size:40px !important}
          @media(max-width:767px){
            .dnd-h1{font-size:26px !important}
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
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>December 20, 2024</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>6 min read</span>
            </div>
            <h1 className="dnd-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Dishwasher Not Draining? 7 Quick Fixes You Can Try Right Now
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Standing water after a cycle? Check these 7 common causes: clogged filter, blocked drain hose, garbage disposal connection, and air gap. Most are easy DIY fixes.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="dnd-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE CONTENT ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* QUICK DIAGNOSIS BANNER */}
              <div data-testid="diagnosis-banner" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 14 }}>Most Likely Cause First</p>
                <div className="diag-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                  {[
                    { label: 'DIY \u2014 EASY', fixes: ['Fix #1 Clogged Filter', 'Fix #2 Drain Hose', 'Fix #4 Air Gap'] },
                    { label: 'DIY \u2014 MODERATE', fixes: ['Fix #3 Disposal Plug', 'Fix #5 Household Drain'] },
                    { label: 'CALL A PRO', fixes: ['Fix #6 Drain Pump', 'Fix #7 Check Valve'] },
                  ].map((col, ci) => (
                    <div key={ci} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: 14, textAlign: 'center' }}>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{col.label}</p>
                      {col.fixes.map((f, fi) => (
                        <p key={fi} style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#fff', lineHeight: 1.7 }}>{f}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginTop: 10 }}>Check in order — #1 solves 60% of all cases</p>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>7 Fixes to Check</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    {i < 7 ? `${i + 1}. ${t.label}` : `+ ${t.label}`}
                  </a>
                ))}
              </div>

              {/* INTRO */}
              <p style={{ ...P, marginBottom: 24 }}>
                Opening your dishwasher to find a pool of dirty water at the bottom is never fun. The good news? Most dishwasher drainage problems are caused by simple clogs that you can fix yourself in under 10 minutes. Here's what to check, in order of likelihood:
              </p>

              {/* ── FIX #1 ── */}
              <FixH2 num={1} id="fix-1-clogged-filter" title="Clogged Filter (Most Common!)" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> The filter at the bottom of the dishwasher traps food particles. When it's clogged with debris, water can't drain properly. This is the #1 cause of standing water—and the easiest to fix.
              </p>
              <DarkBox label="HOW TO FIX (5 MINUTES):" steps={[
                'Remove the bottom dish rack',
                'Locate the cylindrical filter at the bottom center of the tub',
                'Twist and lift the filter assembly to remove it',
                'Rinse the filter under hot running water, scrubbing with a soft brush to remove all debris',
                'Check the filter housing (the well where the filter sits) for large debris and wipe clean',
                'Reinstall the filter by twisting it back into place',
                'Run a rinse cycle to test',
              ]} />
              <Callout icon={'\uD83D\uDCA1'} label="Prevention:" text="Clean the filter monthly to prevent future clogs." />

              {/* ── FIX #2 ── */}
              <FixH2 num={2} id="fix-2-drain-hose" title="Kinked or Clogged Drain Hose" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> The drain hose connects your dishwasher to the garbage disposal or sink drain. If it's kinked, clogged, or improperly installed, water can't flow out.
              </p>
              <DarkBox label="HOW TO CHECK:" steps={[
                'Pull the dishwasher out slightly to access the back (you may need to remove the kickplate)',
                'Inspect the drain hose for kinks, bends, or visible damage',
                'Disconnect the hose from the sink drain or disposal (place a bucket underneath first!)',
                'Check for clogs by running water through the hose or using a plumber\u2019s snake',
                'Reconnect securely and test',
              ]} />
              <Callout icon={'\u26A1'} label="Pro tip:" text='The drain hose should form a "high loop" (secured to the underside of the counter) to prevent backflow. If yours doesn&apos;t, this could be the issue.' />

              {/* ── FIX #3 ── */}
              <FixH2 num={3} id="fix-3-disposal-plug" title="Garbage Disposal Knockout Plug Not Removed" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> If your dishwasher drains into a garbage disposal, the installer must remove a small knockout plug from the disposal's dishwasher inlet. If this plug wasn't removed during installation, water can't drain.
              </p>
              <DarkBox label="HOW TO CHECK:" steps={[
                'Look under the sink at the garbage disposal',
                'Find the small dishwasher inlet port on the side of the disposal',
                'If the dishwasher was recently installed and has never drained properly, the knockout plug is likely still in place',
                'To remove: Insert a screwdriver into the inlet and use a hammer to knock out the plastic plug',
                'Retrieve the plug from inside the disposal (it will fall inside)',
              ]} />
              <Callout icon={'\uD83D\uDCA1'} label="Note:" text="This is a one-time fix. If your dishwasher drained fine before and just stopped, skip this step." />

              {/* ── FIX #4 ── */}
              <FixH2 num={4} id="fix-4-air-gap" title="Clogged Air Gap" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> Some dishwashers use an air gap—a small chrome or plastic cylinder on the sink or countertop near the faucet. It prevents dirty sink water from flowing back into the dishwasher. If the air gap is clogged, water can't drain.
              </p>
              <DarkBox label="HOW TO CLEAN (3 MINUTES):" steps={[
                'Remove the chrome cap on top of the air gap (it usually twists or pulls off)',
                'Check inside for debris or buildup',
                'Use a small bottle brush or toothbrush to scrub the inside clean',
                'Rinse with water and replace the cap',
                'Run a cycle to test drainage',
              ]} />

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div className="mid-cta-inner" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff' }}>Tried the first 4 fixes and still have standing water?</span>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>The remaining causes require professional diagnosis. $60 fee, same-day service available.</span>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="tel:7605435733" className="mid-primary" style={{ background: '#fff', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', textAlign: 'center', transition: 'opacity 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.6)', textDecoration: 'none', textAlign: 'center' }}>Book Repair</a>
                </div>
              </div>

              {/* ── FIX #5 ── */}
              <FixH2 num={5} id="fix-5-household-drain" title="Clogged Household Drain or Garbage Disposal" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> Your dishwasher drains into your home's plumbing. If the sink drain or garbage disposal is clogged, water has nowhere to go and backs up into the dishwasher.
              </p>
              <DarkBox label="HOW TO TEST & FIX:" steps={[
                '<strong style="font-family:Montserrat,sans-serif;font-weight:700;color:rgba(255,255,255,0.95)">Garbage disposal:</strong> Run the disposal for 15 seconds with hot water to clear any clogs',
                '<strong style="font-family:Montserrat,sans-serif;font-weight:700;color:rgba(255,255,255,0.95)">Sink drain:</strong> Fill the sink with water and see if it drains slowly. If yes, the drain is partially clogged. Use a plunger or drain snake.',
                'Once the sink drains freely, test the dishwasher again',
              ]} />

              {/* ── FIX #6 ── */}
              <FixH2 num={6} id="fix-6-drain-pump" title="Faulty Drain Pump" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> The drain pump actively pushes water out of the dishwasher. If it's clogged, jammed, or electrically failed, water won't drain.
              </p>
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>How to diagnose:</strong> During the drain cycle, listen for the pump. You should hear a humming or whirring sound. If you hear nothing, or hear a loud grinding/buzzing, the pump may be faulty.
              </p>
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>DIY check:</strong> Access the pump (usually beneath the filter) and check for obstructions like broken glass, food, or small objects. Carefully remove any debris.
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(13,27,42,0.04)', borderLeft: '3px solid #0D1B2A', borderRadius: 4 }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
                  <strong style={BOLD}>When to call a pro:</strong> If the pump is clear but still not working, it likely needs replacement. This requires electrical and plumbing work—best handled by a technician.
                </p>
              </div>

              {/* ── FIX #7 ── */}
              <FixH2 num={7} id="fix-7-check-valve" title="Faulty Check Valve or Drain Solenoid" />
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={BOLD}>The Problem:</strong> Some dishwashers use a check valve (prevents backflow) or drain solenoid (controls drain flow). If these components fail, drainage is impaired.
              </p>
              <p style={{ ...P, marginBottom: 12 }}>
                <strong style={BOLD}>When to suspect this:</strong> You've checked everything else, the pump runs but water doesn't drain, or water drains partially but slowly.
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(13,27,42,0.04)', borderLeft: '3px solid #0D1B2A', borderRadius: 4 }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
                  <strong style={BOLD}>When to call a pro:</strong> Diagnosing and replacing these components requires disassembly and technical knowledge. Call a professional.
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
                <div style={EYE}>CERTIFIED DISHWASHER REPAIR</div>
                <p style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Still Having Drainage Issues?</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified dishwasher technicians diagnose and repair all drainage problems. We service all major brands in SF Bay Area—same day appointments available!</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none' }}>Book Repair Online</a>
                </div>
              </div>

              {/* ── AUTHOR BOX ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; 10+ years dishwasher repair in Bay Area</p>
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
                {['All Dishwasher Brands', 'Same-Day Available', '180-Day Warranty on Parts & Labor'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginBottom: 20 }} />
                <a href="tel:7605435733" className="phone-cta" data-testid="sidebar-phone" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 8, transition: 'background 0.2s' }}>Book Dishwasher Repair</a>
              </div>

              {/* Widget 2: Quick Diagnosis */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Diagnose by Symptom</p>
                {[
                  { symptom: 'Standing water, new dishwasher', fix: 'Check disposal knockout plug (#3)' },
                  { symptom: 'Water pools, old dishwasher', fix: 'Clean filter first (#1)' },
                  { symptom: 'Pump hums, water stays', fix: 'Clogged filter or hose (#1, #2)' },
                  { symptom: 'No pump sound at all', fix: 'Faulty drain pump (#6)' },
                  { symptom: 'Drains slow, sink also slow', fix: 'Household drain clog (#5)' },
                ].map((r, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#1A1A1A', display: 'block', marginBottom: 4 }}>{r.symptom}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#FF5722' }}>{'\u2192'} {r.fix}</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '10px 12px', marginTop: 10 }}>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', lineHeight: 1.5 }}>Fix #1 (filter cleaning) solves 60% of all cases — try it first</p>
                </div>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'How Long Should Appliances Last?', href: '/blog/appliance-lifespan' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>{link.text}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ━━━ 5. RELATED SERVICES ━━━ */}
        <section data-testid="related-services" style={{ background: '#0D1B2A', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>EXPLORE MORE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 28 }}>Related Services &amp; Articles</h2>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { tag: 'SERVICE', title: 'Dishwasher Repair', body: 'All brands and models. Drainage, door latch, heating element, control board. Same-day service.', link: 'View Service', href: '/dishwasher-repair' },
                { tag: 'ARTICLE', title: 'Common Washer Error Codes Explained', body: 'Decode your washing machine\u2019s error codes and learn what to fix.', link: 'Read Article', href: '/blog/washer-error-codes' },
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
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING + MOBILE ━━━ */}
        {showFloat && <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR</a>}
        {showFloat && <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.3)', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
          <a href="tel:7605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
        </div>}
      </div>
    </>
  );
};

export default DishwasherNotDraining;

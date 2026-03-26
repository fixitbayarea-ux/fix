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

const TOC = [
  { id: 'universal-rule', label: 'The Universal Rule: Every 6 Months' },
  { id: 'signs-filter-needs-replacement', label: 'Signs Your Filter Needs Replacement' },
  { id: 'brand-specific-guidelines', label: 'Brand-Specific Guidelines' },
  { id: 'how-to-replace', label: 'How to Replace Your Water Filter' },
  { id: 'oem-vs-aftermarket', label: 'OEM vs. Aftermarket Filters' },
  { id: 'checklist', label: 'Water Filter Replacement Checklist' },
  { id: 'faq', label: 'FAQ' },
];

const SIGNS = [
  { title: 'Slow Water Flow', body: 'The water dispenser trickles instead of flowing steadily. Clogged filters restrict water pressure.' },
  { title: 'Reduced Ice Production', body: 'The ice maker produces fewer or smaller cubes. Clogged filters limit water supply to the ice maker.' },
  { title: 'Bad Taste or Odor', body: 'Water or ice tastes chlorinated, metallic, or "off." The filter is saturated and can no longer remove contaminants.' },
  { title: 'Filter Indicator Light is On', body: 'Most modern refrigerators have a filter status light that changes color (red, orange) or blinks when it\'s time to replace.' },
  { title: 'Cloudy or Discolored Water', body: 'Water appears hazy or has visible particles. The filter is no longer capturing sediment effectively.' },
];

const BRANDS = [
  { name: 'LG', freq: 'Every 6 months or when indicator turns red', models: 'LT700P, LT800P, LT1000P' },
  { name: 'Samsung', freq: 'Every 6 months or 300 gallons', models: 'HAF-CIN, DA29-00020B, DA97-17376B' },
  { name: 'GE', freq: 'Every 6 months or when indicator changes', models: 'RPWF, RPWFE, MWF' },
  { name: 'Whirlpool', freq: 'Every 6 months or 200 gallons', models: 'EveryDrop Filter 1, 2, 3, 4' },
  { name: 'Frigidaire', freq: 'Every 6 months', models: 'ULTRAWF, PAULTRA, WF3CB' },
];

const STEPS = [
  { title: 'Locate the filter', detail: 'Usually in the top-right corner of the fridge interior, bottom grille, or back wall' },
  { title: 'Turn off ice maker', detail: 'Optional but recommended to prevent spills' },
  { title: 'Remove old filter', detail: 'Twist counterclockwise (or push button and pull) to release' },
  { title: 'Remove cap from new filter', detail: 'Most filters come with protective caps\u2014remove before installing' },
  { title: 'Install new filter', detail: 'Insert and twist clockwise until locked (or push until it clicks)' },
  { title: 'Flush the system', detail: 'Dispense 2-3 gallons of water to clear air and carbon dust from the new filter (discard this water)' },
  { title: 'Reset the filter indicator', detail: 'Press and hold the "Filter Reset" button for 3 seconds' },
];

const CHECKLIST = [
  'Replace every 6 months as a baseline',
  'Set a phone reminder when you install a new filter',
  'Watch for reduced water flow or bad taste',
  'Buy genuine OEM filters or NSF-certified aftermarket filters',
  'Flush 2-3 gallons after installing a new filter',
];

const FAQ_ITEMS = [
  { q: 'What happens if I don\'t change my refrigerator water filter?', a: 'An overdue filter becomes a breeding ground for bacteria and stops removing contaminants. You\'ll notice reduced water flow, bad-tasting water, and smaller ice cubes. The filter media saturates and can no longer capture chlorine, lead, or sediment. Beyond water quality, a clogged filter strains the water inlet valve and ice maker motor, potentially causing expensive repairs.' },
  { q: 'Can I run my refrigerator without a water filter?', a: 'Most refrigerators will dispense water and make ice without a filter installed if you insert a bypass plug (usually included with the fridge). However, you\'ll be drinking unfiltered tap water. If your Bay Area tap water has high mineral content or you\'re on older plumbing, we recommend always keeping a working filter installed.' },
  { q: 'Why is my water flow still slow after replacing the filter?', a: 'If slow flow continues after a new filter, the problem is likely elsewhere\u2014most often a failing water inlet valve or kinked water supply line. The water inlet valve is a solenoid valve that opens to allow water flow; they wear out after several years. FixitBay technicians can diagnose and replace water inlet valves same-day. Call (760) 543-5733.' },
  { q: 'Are aftermarket refrigerator filters safe?', a: 'Yes, if they are NSF/ANSI 42 and 53 certified. This certification means the filter meets federal drinking water standards for contaminant reduction. Avoid uncertified cheap filters from unknown brands\u2014they may not filter effectively and can leak. When in doubt, OEM filters guarantee fit and performance.' },
  { q: 'My refrigerator doesn\'t have a filter indicator. How do I know when to change it?', a: 'Set a calendar reminder every 6 months from the day you install each filter\u2014write the date on the filter itself with a permanent marker. Watch for signs: slow dispenser flow, smaller ice cubes, any change in taste or smell. If your household uses more than 1-2 gallons of water per day, consider changing every 4-5 months instead of waiting for 6.' },
];

const RefrigeratorWaterFilter = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "When to Change Your Refrigerator Water Filter", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-01", "dateModified": "2026-01-01", "url": "https://fixitbay.net/blog/refrigerator-water-filter" } },
    { id: 'howto-schema', data: { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Replace a Refrigerator Water Filter", "description": "7-step DIY guide to replace your refrigerator water filter in 5 minutes", "totalTime": "PT5M", "step": STEPS.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.detail })) } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Refrigerator Water Filter", "item": "https://fixitbay.net/blog/refrigerator-water-filter" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="When to Change Your Refrigerator Water Filter | FixitBay"
        description="How often to change your refrigerator water filter by brand: LG, Samsung, GE, Whirlpool, Frigidaire. 5-minute DIY replacement steps."
        canonical="https://fixitbay.net/blog/refrigerator-water-filter"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .rwf-h1{font-size:40px !important}
          @media(max-width:767px){
            .rwf-h1{font-size:28px !important}
            .rwf-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .brand-row{flex-direction:column !important;gap:4px !important}
            .brand-row>*{min-width:unset !important}
            .oem-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
          .sign-card{border-left:3px solid transparent;transition:border-left-color 0.2s}.sign-card:hover{border-left-color:#FF5722 !important}
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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Refrigerator</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Refrigerator</span>
            </div>
            <BlogByline dateISO="2024-12-22" dateFormatted="December 22, 2024" readTime="5 min" />
            <h1 className="rwf-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              When to Change Your Refrigerator Water Filter — Complete Guide by Brand
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Old filters reduce water flow, ice production, and water quality. Learn how often to change filters by brand (LG, Samsung, GE, Whirlpool) and signs it's time for replacement.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="rwf-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE CONTENT ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* QUICK RULE BANNER */}
              <div data-testid="quick-rule-banner" style={{ background: '#0D1B2A', borderRadius: 4, padding: '20px 24px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>THE UNIVERSAL RULE</div>
                  <div style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#fff' }}>Replace Every 6 Months</div>
                  <div style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>or 300 gallons of water — whichever comes first</div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {[
                    { val: '6 mo', label: 'Replacement interval' },
                    { val: '300', label: 'Gallons max' },
                    { val: '5 min', label: 'DIY install time' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,87,34,0.3)', borderRadius: 4, padding: '8px 14px', textAlign: 'center' }}>
                      <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#FF5722' }}>{s.val}</div>
                      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* INTRO */}
              <p style={{ ...P, marginBottom: 24 }}>
                Your <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>refrigerator's</a> water filter is a small component with a big job: removing contaminants like chlorine, lead, mercury, and sediment from your drinking water and ice. But filters don't last forever. Here's everything you need to know about when and how to replace yours.
              </p>

              {/* ── UNIVERSAL RULE SECTION ── */}
              <h2 id="universal-rule" style={H2S}>The Universal Rule: Every 6 Months</h2>
              <p style={{ ...P, marginBottom: 16 }}>
                <strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>Standard recommendation:</strong> Replace your refrigerator water filter every 6 months (or 300 gallons of water) for optimal performance and water quality.
              </p>
              {/* PRO TIP BOX */}
              <div data-testid="pro-tip-box" style={{ background: '#0D1B2A', borderRadius: 4, padding: '18px 22px', margin: '16px 0' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ width: 22, height: 22, background: '#FF5722', borderRadius: '50%', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'\u2605'}</div>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PRO TIP</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                  Set a phone reminder for 6 months from when you install a new filter. Write the installation date on the filter itself with a permanent marker.
                </p>
              </div>

              {/* ── SIGNS SECTION ── */}
              <h2 id="signs-filter-needs-replacement" style={H2S}>Signs Your Filter Needs Replacement (Even Before 6 Months)</h2>
              <p style={{ ...P, marginBottom: 20 }}>Replace your filter sooner if you notice any of these symptoms:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SIGNS.map((s, i) => (
                  <div key={i} className="sign-card" style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{s.title}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginTop: 4 }}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── BRAND-SPECIFIC GUIDELINES ── */}
              <h2 id="brand-specific-guidelines" style={H2S}>Brand-Specific Filter Replacement Guidelines</h2>
              <p style={{ ...P, marginBottom: 20 }}>While the 6-month rule applies to all brands, here are specific recommendations:</p>
              <div data-testid="brand-table" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', overflow: 'hidden' }}>
                <div style={{ background: '#0D1B2A', padding: '12px 20px', display: 'flex', gap: 16 }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', minWidth: 100 }}>Brand</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', flex: 1 }}>Frequency</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', flex: 1 }}>Filter Models</span>
                </div>
                {BRANDS.map((b, i) => (
                  <div key={i} className="brand-row" style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(248,245,240,0.8)' }}>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 14, color: '#FF5722', minWidth: 100 }}>{b.name}</span>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', flex: 1 }}>{b.freq}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', flex: 1 }}>{b.models}</span>
                  </div>
                ))}
              </div>

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

              {/* ── HOW TO REPLACE ── */}
              <h2 id="how-to-replace" style={H2S}>How to Replace Your Water Filter (5 Minutes)</h2>
              <p style={{ ...P, marginBottom: 20 }}>Most refrigerator filters are designed for easy DIY replacement:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {STEPS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{s.title}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5, marginTop: 4 }}>{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── OEM vs AFTERMARKET ── */}
              <h2 id="oem-vs-aftermarket" style={H2S}>OEM vs. Aftermarket Filters: What You Should Know</h2>
              <div className="oem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                {/* OEM Card */}
                <div style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderTop: '3px solid #FF5722', borderRadius: 4, padding: 20 }}>
                  <p style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: '#1A1A1A' }}>OEM Filters</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', marginBottom: 12 }}>(Original Equipment Manufacturer)</p>
                  {[
                    'Guaranteed compatibility',
                    'Tested performance',
                    'Warranty protection',
                  ].map((pro, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 6 }}>
                      <span style={{ fontFamily: F, fontWeight: 700, color: '#FF5722', flexShrink: 0 }}>{'\u2713'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>{pro}</span>
                    </div>
                  ))}
                  {[
                    'More expensive ($30-$60 per filter)',
                  ].map((con, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 6, marginTop: i === 0 ? 8 : 0 }}>
                      <span style={{ fontFamily: F, fontWeight: 700, color: '#4A5568', flexShrink: 0 }}>{'\u2717'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>{con}</span>
                    </div>
                  ))}
                </div>
                {/* Aftermarket Card */}
                <div style={{ background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.1)', borderTop: '3px solid #4A5568', borderRadius: 4, padding: 20 }}>
                  <p style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: '#1A1A1A' }}>Aftermarket Filters</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', marginBottom: 12 }}>(Third-Party Manufacturers)</p>
                  {[
                    'Cheaper ($15-$30 per filter)',
                  ].map((pro, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 6 }}>
                      <span style={{ fontFamily: F, fontWeight: 700, color: '#FF5722', flexShrink: 0 }}>{'\u2713'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>{pro}</span>
                    </div>
                  ))}
                  {[
                    'Variable quality',
                    'May not fit perfectly',
                    'Some don\'t meet NSF/ANSI certification standards',
                  ].map((con, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 6, marginTop: i === 0 ? 8 : 0 }}>
                      <span style={{ fontFamily: F, fontWeight: 700, color: '#4A5568', flexShrink: 0 }}>{'\u2717'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ ...P, lineHeight: 1.8 }}>
                <strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>Our recommendation:</strong> If on a budget, choose aftermarket filters that are <strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>NSF/ANSI 42 and 53 certified</strong>. This ensures they meet water quality standards. For peace of mind, stick with OEM filters.
              </p>

              {/* ── REPLACEMENT CHECKLIST ── */}
              <div id="checklist" data-testid="checklist" style={{ background: '#0D1B2A', borderRadius: 4, padding: '24px 28px', margin: '24px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 16 }}>{'\u2713'} Water Filter Replacement Checklist</p>
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
                <p style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Water Filter — Common Questions</p>
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
                <div style={EYE}>CERTIFIED REFRIGERATOR REPAIR</div>
                <p style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Need Help with Your Refrigerator?</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians can replace water filters, fix water dispensers, and diagnose any refrigerator issues. Same-day service in SF Bay Area!</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">Book Service</a>
                </div>
              </div>

              {/* ── AUTHOR BOX ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; 10+ years refrigerator repair in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Service */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>REFRIGERATOR PROBLEMS?</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Same-Day Repair Available</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Water dispenser, ice maker, cooling issues. $60 diagnostic applied to repair.</p>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['All Refrigerator Brands', 'Same-Day Available', '180-Day Warranty'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginBottom: 20 }} />
                <a href="tel:7605435733" className="phone-cta" data-testid="sidebar-phone" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 8, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Refrigerator Repair</a>
              </div>

              {/* Widget 2: Brand Quick Reference */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Filter Models by Brand</p>
                {[
                  { brand: 'LG', models: 'LT700P, LT800P, LT1000P' },
                  { brand: 'Samsung', models: 'HAF-CIN, DA29-00020B' },
                  { brand: 'GE', models: 'RPWF, RPWFE, MWF' },
                  { brand: 'Whirlpool', models: 'EveryDrop 1, 2, 3, 4' },
                  { brand: 'Frigidaire', models: 'ULTRAWF, PAULTRA, WF3CB' },
                ].map((r, i) => (
                  <div key={i} style={{ padding: '9px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', display: 'block', marginBottom: 3 }}>{r.brand}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568' }}>{r.models}</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '10px 12px', marginTop: 10 }}>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', lineHeight: 1.5 }}>Always buy NSF/ANSI 42 &amp; 53 certified filters</p>
                </div>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: '5 Reasons Your Fridge Isn\'t Cooling', href: '/blog/refrigerator-not-cooling' },
                  { text: 'Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'How Long Should Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
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
                { title: 'Ice Maker Not Working? 9 Causes & Fixes', href: '/blog/ice-maker-troubleshooting' },
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
                { tag: 'SERVICE', title: 'Refrigerator Repair', body: 'All refrigerator brands and models. Water dispenser, ice maker, cooling issues. Same-day service.', link: 'View Service', href: '/refrigerator-repair' },
                { tag: 'ARTICLE', title: '5 Reasons Your Refrigerator Isn\'t Cooling', body: 'Diagnose why your fridge stopped keeping food cold. Common causes and fixes.', link: 'Read Article', href: '/blog/refrigerator-not-cooling' },
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
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="mobile-book" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">BOOK ONLINE</a>
          <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,87,34,0.4)' }}>TEXT US</a>
        </div>}
      </div>
    </>
  );
};

export default RefrigeratorWaterFilter;

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

const EMERGENCY_STEPS = [
  'DO NOT use any electrical switches, phones, or create sparks',
  'Open windows and doors immediately',
  'Evacuate everyone from the building',
  'Call 911 from outside the building',
  "Call your gas company\u2019s emergency line",
  "Do NOT re-enter until authorities say it\u2019s safe",
];

const DONTS = [
  { rule: 'DO NOT turn on/off any lights or electrical devices', why: 'Even a light switch can create a spark that ignites gas.' },
  { rule: 'DO NOT use your phone inside the building', why: 'Cell phones can create a spark. Call from outside.' },
  { rule: 'DO NOT light matches, candles, or use lighters', why: 'Open flames will ignite natural gas.' },
  { rule: 'DO NOT try to locate the source yourself', why: 'Leave this to professionals. Evacuate immediately.' },
  { rule: 'DO NOT re-enter the building until cleared by authorities', why: 'Wait for fire department or gas company clearance.' },
];

const CAUSES = [
  { title: 'Pilot Light Extinguished', body: 'Older gas stoves with pilot lights can go out, releasing small amounts of gas. If you smell gas briefly after the pilot goes out, this may be the cause. However, if the smell persists, evacuate.' },
  { title: 'Loose Gas Line Connection', body: 'The flexible gas line connecting your range to the wall valve can loosen over time, especially if the stove is moved frequently for cleaning.' },
  { title: 'Faulty Gas Valve or Regulator', body: 'The control valves on your stove can wear out, allowing gas to leak even when burners are off.' },
  { title: 'Burner Not Igniting Properly', body: 'If you turn on a burner and it takes several seconds to ignite, you\u2019re releasing unburned gas. This is not normal and requires repair.' },
  { title: 'Damaged Flex Line (from moving the stove)', body: 'Repeatedly pulling the stove away from the wall to clean behind it can kink or damage the gas flex line.' },
];

const PREVENT = [
  { label: 'Annual professional inspection:', text: 'Have a licensed technician inspect your gas stove, oven, and connections annually.' },
  { label: "Don\u2019t move the stove yourself:", text: 'If you need to clean behind the stove, hire a professional to disconnect and reconnect the gas line.' },
  { label: 'Replace old flex lines:', text: 'Gas flex lines should be replaced every 10-15 years or if visibly damaged.' },
  { label: 'Check burner ignition:', text: 'If burners take more than 3-4 seconds to ignite, call for service.' },
  { label: 'Install a gas detector:', text: 'Place a natural gas detector/alarm near your kitchen for early warning.' },
];

const PRO_CHECKLIST = [
  'Inspect all gas connections and lines',
  'Test for leaks using electronic detection equipment',
  'Repair or replace faulty valves, regulators, or igniters',
  'Re-tighten or replace gas flex lines',
  'Provide a safety clearance certificate',
];

const TOC = [
  { id: 'what-not-to-do', label: 'What NOT to Do If You Smell Gas' },
  { id: 'common-causes', label: 'Common Causes of Gas Smells' },
  { id: 'how-to-prevent', label: 'How to Prevent Gas Leaks' },
  { id: 'when-to-call', label: 'When to Call a Professional' },
  { id: 'minor-vs-emergency', label: 'Minor Smell vs. Emergency Leak' },
  { id: 'faq', label: 'FAQ' },
];

const FAQ_ITEMS = [
  { q: 'What does a gas leak smell like?', a: "Natural gas itself is odorless. Gas companies add mercaptan, a chemical that smells like rotten eggs or sulfur, as a safety warning. If you detect this smell\u2014even faintly\u2014take it seriously. A brief whiff when lighting a burner can be normal; a persistent or strong smell is an emergency." },
  { q: 'Can a gas stove leak without the burners being on?', a: "Yes. Gas can leak from the flex line connecting the stove to the wall, from a faulty regulator, or from a worn gas valve even when all burners are off. If you smell gas but no burners are on, this is more serious\u2014evacuate and call your gas company immediately." },
  { q: 'How quickly is a gas leak dangerous?', a: "Very quickly. Natural gas concentrations of 5-15% in air are explosive. In an enclosed kitchen, dangerous levels can build within minutes. Never delay evacuation to investigate. Get everyone out first, then call 911 from outside the building." },
  { q: 'Can I repair a gas line myself to save money?', a: "No\u2014never. Gas line work must be performed by a licensed technician. In California, improper gas line repairs can void your homeowner\u2019s insurance and are illegal without proper licensing. FixitBay LLC technicians are licensed CA technicians (License #51001) trained in gas appliance safety." },
  { q: 'How much does a gas stove safety inspection cost?', a: "FixitBay LLC\u2019s standard diagnostic fee is $60, which is applied toward any repair if you proceed. A gas safety inspection includes checking all connections, testing for leaks with electronic detection equipment, and inspecting valves, regulators, and igniters. Appointments are available Mon\u2013Sat." },
];

const CheckRow = ({ label, text }) => (
  <div style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{'\u2713'}</div>
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.5 }}><strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>{label}</strong> {text}</span>
  </div>
);

const GasSmellFromStove = () => {
const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Smell Gas From Your Stove? Do This Immediately", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-03-01", "dateModified": "2026-03-01", "url": "https://fixitbay.net/blog/gas-smell-from-stove" } },
    { id: 'howto-schema', data: { "@context": "https://schema.org", "@type": "HowTo", "name": "What to Do If You Smell Gas From Your Stove", "description": "Emergency protocol for gas leaks from kitchen appliances", "step": EMERGENCY_STEPS.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.replace(/^DO NOT /, '').substring(0, 40), "text": s })) } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Gas Smell From Stove", "item": "https://fixitbay.net/blog/gas-smell-from-stove" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Smell Gas From Your Stove? Do This Immediately | FixitBay LLC"
        description="Smell gas from your stove or range? Immediate safety steps: evacuate, call 911, what NOT to do. Common gas leak causes and prevention tips."
        canonical="https://fixitbay.net/blog/gas-smell-from-stove"
        ogType="article"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .gas-h1{font-size:40px !important}
          @media(max-width:767px){
            .gas-h1{font-size:28px !important}
            .gas-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
            .minor-vs-grid{flex-direction:column !important}
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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Safety</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#C0392B', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Safety</span>
            </div>
            <BlogByline dateISO="2024-12-25" dateFormatted="December 25, 2024" readTime="4 min" />
            <h1 className="gas-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Smell Gas From Your Stove? Do This Immediately
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Gas leaks are dangerous. Learn the immediate safety steps to take if you smell gas, when to call emergency services, and how to prevent gas leaks from ranges and ovens.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="gas-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE ━━━ */}
            <article data-testid="article-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

              {/* DANGER EMERGENCY BOX */}
              <div data-testid="emergency-box" style={{ background: '#FFF5F5', border: '2px solid #C0392B', borderLeft: '5px solid #C0392B', borderRadius: 4, padding: '24px 28px', marginBottom: 28 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>{'\u26A0\uFE0F'}</span>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DANGER: Gas Leak Emergency Protocol</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#C0392B', marginBottom: 14 }}>If you smell gas (a rotten egg odor), follow these steps IMMEDIATELY:</p>
                {EMERGENCY_STEPS.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(192,57,43,0.1)' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#C0392B', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#C0392B' }}>{step}</span>
                  </div>
                ))}
              </div>

              {/* TOC */}
              <div data-testid="toc" style={{ background: '#F8F5F0', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>In This Article</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', display: 'block', padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{i + 1}. {t.label}</a>
                ))}
              </div>

              {/* Intro */}
              <p style={{ ...P, marginBottom: 24 }}>Natural gas is odorless, so utility companies add a chemical (mercaptan) that smells like rotten eggs or sulfur. This distinctive odor is your warning system. <strong style={{ fontFamily: F, fontWeight: 700, color: '#1A1A1A' }}>Never ignore a gas smell.</strong></p>

              {/* ── What NOT to Do ── */}
              <h2 id="what-not-to-do" style={H2S}>What NOT to Do If You Smell Gas</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {DONTS.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#FFF5F5', border: '1px solid rgba(192,57,43,0.2)', borderLeft: '3px solid #C0392B', borderRadius: 4 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{'\uD83D\uDEAB'}</span>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#C0392B' }}>{d.rule}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5, marginTop: 4 }}>{d.why}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Common Causes ── */}
              <h2 id="common-causes" style={H2S}>Common Causes of Gas Smells from Stoves</h2>
              <p style={{ ...P, marginBottom: 20 }}>Not all gas smells are emergencies, but they all require immediate attention. If your <a href="/oven-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>stove or oven</a> needs repair:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CAUSES.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{c.title}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginTop: 4 }}>{c.body}</p>
                    </div>
                  </div>
                ))}
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

              {/* ── How to Prevent ── */}
              <h2 id="how-to-prevent" style={H2S}>How to Prevent Gas Leaks</h2>
              {PREVENT.map((item, i) => <CheckRow key={i} label={item.label} text={item.text} />)}

              {/* ── When to Call ── */}
              <h2 id="when-to-call" style={H2S}>When to Call a Professional (After the Emergency is Resolved)</h2>
              <p style={P}>After authorities clear your home as safe, you'll need a licensed <a href="/oven-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>appliance technician</a> or gas technician to:</p>
              {PRO_CHECKLIST.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{'\u2713'}</div>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 16, padding: '12px 16px', background: 'rgba(192,57,43,0.06)', borderLeft: '3px solid #C0392B', borderRadius: 4 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{'\u26A0\uFE0F'}</span>
                <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#C0392B' }}>Never attempt DIY gas line repairs. This work must be performed by licensed professionals.</span>
              </div>

              {/* ── Minor vs Emergency ── */}
              <div id="minor-vs-emergency" data-testid="minor-vs-emergency" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden', margin: '24px 0' }}>
                <div style={{ background: '#0D1B2A', padding: '14px 20px' }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff' }}>Minor Smell vs. Emergency Leak</span>
                </div>
                <div className="minor-vs-grid" style={{ display: 'flex', gap: 0 }}>
                  <div style={{ flex: 1, padding: 20, borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#4A5568', marginBottom: 8 }}>Minor smell (brief, faint):</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>If you smell gas for 1-2 seconds after turning on a burner (before ignition), this is relatively normal for older stoves. Open a window and schedule a service call soon.</p>
                  </div>
                  <div style={{ flex: 1, padding: 20, background: 'rgba(192,57,43,0.04)' }}>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#C0392B', marginBottom: 8 }}>Emergency leak (strong, persistent):</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>If the smell is strong, lasts more than a few seconds, or occurs when all burners are off&mdash;<strong style={{ fontFamily: F, fontWeight: 700, color: '#C0392B' }}>evacuate immediately and call 911</strong>.</p>
                  </div>
                </div>
              </div>

              {/* ── FAQ ── */}
              <div id="faq" data-testid="faq-section" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
                <div style={EYE}>FAQ</div>
                <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Gas Smell Safety &mdash; Common Questions</h2>
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
                <div style={{ ...EYE, marginBottom: 8 }}>LICENSED GAS TECHNICIANS</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Schedule a Gas Stove Safety Inspection</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our licensed technicians perform thorough gas leak inspections and repairs. Don't wait for an emergency&mdash;schedule your annual safety check today.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Safety Inspection</a>
                </div>
              </div>

              {/* ── Author ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei &mdash; Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA Technician &middot; License #51001 &middot; Licensed for gas appliance repair in California</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Emergency Quick Ref */}
              <div data-testid="emergency-sidebar" style={{ background: '#FFF5F5', borderRadius: 4, border: '2px solid #C0392B', borderTop: '3px solid #C0392B', padding: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>IF YOU SMELL GAS NOW</p>
                {['Don\u2019t touch any switches', 'Open windows & doors', 'Evacuate everyone', 'Call 911 from OUTSIDE', 'Call your gas company', 'Don\u2019t re-enter until cleared'].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid rgba(192,57,43,0.1)' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#C0392B', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#C0392B' }}>{step}</span>
                  </div>
                ))}
                <div style={{ background: '#C0392B', fontFamily: F, fontWeight: 800, fontSize: 14, padding: 14, borderRadius: 4, color: '#fff', textAlign: 'center', marginTop: 14 }}>CALL 911 &mdash; GAS EMERGENCY</div>
                <a href="tel:+17605435733" className="phone-cta" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: 12, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 8, transition: 'background 0.2s' }}>Call FixitBay LLC: (760) 543-5733</a>
              </div>

              {/* Widget 2: Book Inspection */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 20, marginTop: 20 }}>
                <div style={EYE}>ANNUAL SAFETY CHECK</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 8 }}>Gas Stove Inspection</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Licensed technicians check all gas connections, valves, and igniters. $60 diagnostic &middot; Fast scheduling.</p>
                {['Licensed CA Technician #51001', 'Electronic Leak Detection', 'Safety Clearance Certificate'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="phone-cta" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: 12, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 16, transition: 'background 0.2s' }} aria-label="opens in new tab">Book Safety Inspection</a>
              </div>

              {/* Widget 3: Related Articles */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'Oven Temperature Calibration Guide', href: '/blog/oven-temperature-calibration' },
                  { text: 'How Long Should Your Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Common Washer Error Codes Explained', href: '/blog/washer-error-codes' },
                  { text: 'Why Is My Dryer Taking So Long?', href: '/blog/dryer-taking-too-long' },
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
                { title: 'Oven Temperature Off? How to Calibrate Your Oven', href: '/blog/oven-temperature-calibration' },
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
                { tag: 'SERVICE', title: 'Oven & Range Repair', body: 'Gas and electric oven repair. Licensed technicians, fast scheduling, 180-day warranty.', link: 'View Service', href: '/oven-repair' },
                { tag: 'ARTICLE', title: 'Oven Temperature Calibration Guide', body: 'Is your oven running hot or cold? Step-by-step calibration instructions.', link: 'Read Article', href: '/blog/oven-temperature-calibration' },
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
      </div>
    </>
  );
};

export default GasSmellFromStove;

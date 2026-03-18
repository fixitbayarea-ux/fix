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
  { q: "Why is my refrigerator running but not cooling?", a: "The most common causes are dirty condenser coils, a faulty evaporator fan, or a failed thermostat. Start by cleaning the coils on the back or bottom of the fridge. If it's still not cooling after 24 hours, call a technician." },
  { q: "How much does refrigerator repair cost in San Francisco?", a: "In the Bay Area, refrigerator repairs typically cost $150\u2013$550 depending on the issue. A compressor replacement runs $300\u2013$600+. FixitBay charges a $60 diagnostic fee, which is applied to your repair if you proceed." },
  { q: "Is it worth repairing a refrigerator that's not cooling?", a: "If the fridge is under 10 years old and the repair is under 50% of replacement cost, repair is usually worth it. Premium brands like Sub-Zero are almost always worth repairing. Our technician gives an honest recommendation after the $60 diagnostic." },
  { q: "How long can food stay safe when the fridge stops cooling?", a: "The FDA recommends discarding perishables after 4 hours at temperatures above 40\u00B0F. Keep the doors closed as much as possible to maintain temperature while waiting for a technician." },
  { q: "Can I fix a refrigerator that's not cooling myself?", a: "Some fixes are DIY-friendly: cleaning condenser coils, checking door seals, and clearing blocked vents. However, compressor issues, refrigerant leaks, and control board failures require a licensed technician with specialized tools and EPA certification." },
];

const TOC = [
  { id: 'dirty-coils', label: 'Dirty Condenser Coils' },
  { id: 'thermostat', label: 'Faulty or Incorrectly Set Thermostat' },
  { id: 'door-seals', label: 'Damaged or Worn Door Seals (Gaskets)' },
  { id: 'air-vents', label: 'Blocked Air Vents Inside the Fridge' },
  { id: 'evaporator-fan', label: 'Failed Evaporator Fan Motor' },
  { id: 'start-relay', label: 'Defective Start Relay or Overload' },
  { id: 'compressor', label: 'Failed Compressor or Refrigerant Leak' },
  { id: 'checklist', label: 'Quick Diagnostic Checklist' },
  { id: 'when-to-call', label: 'When to Call a Professional' },
];

const CHECKLIST = [
  'Check temperature settings (37\u201340\u00B0F fridge, 0\u20135\u00B0F freezer)',
  'Clean condenser coils if visibly dirty',
  'Inspect door seals with the dollar bill test',
  'Ensure internal air vents are not blocked',
  'Listen for unusual compressor sounds (clicking, buzzing)',
];

const WHEN_TO_CALL = [
  'Compressor problems or complete cooling failure',
  'Refrigerant leaks (requires EPA-certified technician)',
  'Electrical issues or blown control boards',
  "You've tried basic troubleshooting without success",
  'Your fridge is still under warranty (DIY repairs may void it)',
];

const RefrigeratorNotCooling = () => {
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
        "headline": "Refrigerator Not Cooling? 7 Causes & Fixes [SF Technician Guide]",
        "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
        "publisher": { "@type": "Organization", "name": "FixitBay LLC" },
        "datePublished": "2026-01-15",
        "dateModified": "2026-03-17",
        "url": "https://fixitbay.net/blog/refrigerator-not-cooling"
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" },
          { "@type": "ListItem", "position": 3, "name": "Refrigerator Not Cooling", "item": "https://fixitbay.net/blog/refrigerator-not-cooling" }
        ]
      }
    },
    {
      id: 'howto-schema',
      data: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to diagnose a refrigerator not cooling",
        "step": [
          { "@type": "HowToStep", "name": "Check dirty condenser coils", "text": "Locate coils on back or bottom, clean with brush." },
          { "@type": "HowToStep", "name": "Check thermostat setting", "text": "Set fridge to 37-40\u00b0F, freezer to 0-5\u00b0F." },
          { "@type": "HowToStep", "name": "Test door seals", "text": "Do the dollar bill test on door gaskets." },
          { "@type": "HowToStep", "name": "Check air vents", "text": "Ensure internal vents are not blocked by food." },
          { "@type": "HowToStep", "name": "Call a professional", "text": "Compressor or refrigerant issues need a licensed tech." }
        ]
      }
    }
  ], []);

  useSchemas(schemas);

  /* Tip box component */
  const TipBox = ({ label, text }) => (
    <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '14px 18px', margin: '16px 0' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</span>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
      </div>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{text}</p>
    </div>
  );

  return (
    <>
      <SEOMetaTags
        title="Refrigerator Not Cooling? 7 Causes & Fixes [SF Technician Guide]"
        description="Refrigerator not cooling? 7 common causes from dirty coils to compressor failure. DIY checks + when to call a pro. SF repair cost $150-$550. Same-day service."
        canonical="https://fixitbay.net/blog/refrigerator-not-cooling"
        ogType="article"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[0].data) }} />

      <div style={{ fontFamily: F }}>
        <style>{`
          .art-h1{font-size:40px !important}
          @media(max-width:767px){
            .art-h1{font-size:26px !important}
            .art-grid{grid-template-columns:1fr !important}
            .mid-cta-inner{flex-direction:column !important;text-align:center}
            .related-grid{grid-template-columns:1fr !important}
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
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>January 20, 2026</span>
              <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>5 min read</span>
            </div>
            <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Refrigerator Not Cooling? 7 Causes & Fixes [SF Technician Guide]
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              Is your fridge running but not keeping food cold? Here are 7 causes — from dirty coils to compressor failure — with DIY checks, repair costs, and when to call a San Francisco technician.
            </p>
          </div>
        </section>

        {/* ━━━ 2. ARTICLE LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="art-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — ARTICLE CONTENT ━━━ */}
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
              <p style={{ ...P, marginBottom: 24 }}>
                <span style={{ fontWeight: 600, color: '#1A1A1A' }}>A refrigerator that won't cool is more than an inconvenience—it's a food safety emergency.</span> If you notice your fridge is running but failing to maintain proper temperatures (37–40°F for the refrigerator compartment, 0–5°F for the freezer), it's time to diagnose the problem quickly.
              </p>
              <p style={{ ...P, marginBottom: 24 }}>
                Here are the 5 most common culprits behind a warm refrigerator, listed from easiest to most complex:
              </p>

              {/* Safety Notice */}
              <div style={{ background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '16px 20px', marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{'\u26A0\uFE0F'}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722' }}>Safety First!</span>
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>
                  Before troubleshooting, unplug your refrigerator. Some repairs require professional expertise. If unsure, contact a licensed technician.
                </p>
              </div>

              {/* ── Section 1 ── */}
              <h2 id="dirty-coils" style={H2S}><span style={{ color: '#FF5722' }}>1.</span> Dirty Condenser Coils</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> Condenser coils release heat from inside the refrigerator. When they're covered in dust, pet hair, and debris, they can't efficiently dissipate heat, causing the entire system to work overtime—and eventually fail to cool properly.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Locate the coils (usually on the back or beneath the unit). Unplug the fridge, use a coil brush or vacuum attachment to gently remove buildup, then plug it back in.</p>
              <TipBox label="Prevention Tip" text="Clean condenser coils every 6 months to maintain peak efficiency and extend appliance life." />

              {/* ── Section 2 ── */}
              <h2 id="thermostat" style={H2S}><span style={{ color: '#FF5722' }}>2.</span> Faulty or Incorrectly Set Thermostat</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> The thermostat controls the compressor and cooling cycle. If it's accidentally turned to a warmer setting, malfunctioning, or broken, your fridge won't know when to cool.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Check your temperature dial or digital settings. Set the refrigerator to 37–40°F and the freezer to 0–5°F. Wait 24 hours. If it still doesn't cool, the thermostat itself may need replacement.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Thermostat replacement requires electrical work and access to internal components—best left to a certified technician.</p>

              {/* ── Section 3 ── */}
              <h2 id="door-seals" style={H2S}><span style={{ color: '#FF5722' }}>3.</span> Damaged or Worn Door Seals (Gaskets)</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> Door gaskets create an airtight seal. When they crack, tear, or lose elasticity, warm air seeps in constantly, forcing the compressor to run non-stop—and often unsuccessfully.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Test:</strong> Close the door on a dollar bill. If you can pull it out easily, the seal is compromised.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Clean gaskets with warm soapy water (grime can prevent proper sealing). If they're visibly damaged, order replacement gaskets specific to your model and install them yourself—or call a technician for guaranteed fitment.</p>

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Not sure what's wrong with your fridge?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>Get a $60 diagnostic — applied to repair.</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <a href="tel:+17605435733" style={{ background: '#fff', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none' }}>Call (760) 543-5733</a>
                    <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.6)' }}>Book Online</a>
                  </div>
                </div>
              </div>

              {/* ── Section 4 ── */}
              <h2 id="air-vents" style={H2S}><span style={{ color: '#FF5722' }}>4.</span> Blocked Air Vents Inside the Fridge</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> Cold air circulates from the freezer to the fridge via internal vents. Overpacking the fridge or blocking vents with food items restricts airflow, leading to uneven cooling or complete cooling failure.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Fix:</strong> Rearrange items to ensure vents (usually on the back wall inside the fridge compartment) are clear. Leave at least 1–2 inches of space around vents for proper circulation.</p>

              {/* ── Section 5 ── */}
              <h2 id="evaporator-fan" style={H2S}><span style={{ color: '#FF5722' }}>5.</span> Failed Evaporator Fan Motor</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> The evaporator fan circulates cold air from the freezer coils into both the fridge and freezer compartments. When this fan fails, the freezer may still be cold but the refrigerator section warms up significantly.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs:</strong> You may hear a loud buzzing or squealing noise, or notice the fan isn't spinning when you open the freezer door. In San Francisco's older homes, power fluctuations can accelerate fan motor wear.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY Check:</strong> Open the freezer and listen for the fan. If the freezer is cold but the fridge is warm and you hear no fan noise, the motor likely needs replacement ($80–$200 with labor).</p>

              {/* ── Section 6 ── */}
              <h2 id="start-relay" style={H2S}><span style={{ color: '#FF5722' }}>6.</span> Defective Start Relay or Overload</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> The start relay helps the compressor motor start. When it fails, the compressor tries to start, clicks, and shuts off—cycling repeatedly without ever running long enough to cool. This is one of the most common causes we see in Bay Area service calls.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs:</strong> A repeating click-buzz pattern every 2–5 minutes. The fridge may feel slightly warm. You might smell a faint electrical burning odor from the back of the unit.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> Start relay replacement is one of the most affordable fixes—typically $80–$150 in San Francisco including the $60 diagnostic. Most FixitBay technicians carry these parts on the truck for same-visit repair.</p>

              {/* ── Section 7 ── */}
              <h2 id="compressor" style={H2S}><span style={{ color: '#FF5722' }}>7.</span> Failed Compressor or Refrigerant Leak</h2>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Why it happens:</strong> The compressor is the heart of your refrigerator's cooling system. If it fails, or if refrigerant leaks from the sealed system, the fridge will not cool at all—or will take hours to drop a few degrees.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Signs of compressor failure:</strong> Loud clicking, buzzing, or no noise at all. The compressor may feel unusually hot to the touch.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>When to call a pro:</strong> Compressor and refrigerant issues require specialized tools, EPA certification (for refrigerant handling), and diagnostic equipment. This is NOT a DIY repair.</p>
              <TipBox label="Important" text="A compressor replacement can cost $300–$600+ depending on the model. If your fridge is over 10 years old, replacement may be more cost-effective than repair." />

              {/* ── Checklist ── */}
              <h2 id="checklist" style={H2S}>Quick Diagnostic Checklist</h2>
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

              {/* ── FAQ Section ── */}
              <div data-testid="faq-section" style={{ border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
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

              {/* ── When to Call ── */}
              <h2 id="when-to-call" style={H2S}>When to Call a Professional</h2>
              <p style={P}>While some refrigerator issues are DIY-friendly, others require professional diagnosis and repair:</p>
              {WHEN_TO_CALL.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
                  <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, flexShrink: 0 }}>&mdash;</span>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>{item}</span>
                </div>
              ))}

              {/* ── Bottom CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={{ ...EYE, marginBottom: 8 }}>PROFESSIONAL HELP</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Need Expert Refrigerator Repair in SF Bay Area?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians diagnose and repair all refrigerator brands — same day service available.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online Now</a>
                </div>
              </div>

              {/* ── Author Box ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei — Licensed Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>Certified CA technician &middot; License #51001 &middot; 10+ years experience in Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Repair */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>SAME-DAY SERVICE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Fridge Not Cooling?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Licensed CA Technician', 'Same-Day Available', 'All Major Brands'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }}>Book Online</a>
              </div>

              {/* Widget 2: Related Articles */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(0,0,0,0.07)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'How Much Does Refrigerator Repair Cost?', href: '/blog/refrigerator-repair-cost-san-francisco-2026' },
                  { text: '5 Signs Your Fridge Compressor Is Failing', href: '/blog' },
                  { text: 'Samsung vs LG Refrigerators: Which Lasts?', href: '/blog' },
                  { text: 'When to Replace vs Repair Your Fridge', href: '/blog/when-to-repair-vs-replace' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>
                    {link.text}
                  </Link>
                ))}
              </div>

              {/* Widget 3: Service Links */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <div style={{ ...EYE, marginBottom: 12 }}>OUR REPAIR SERVICES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { label: 'Refrigerator Repair', href: '/refrigerator-repair' },
                    { label: 'Freezer Repair', href: '/freezer-repair' },
                    { label: 'Ice Maker Repair', href: '/ice-maker-repair' },
                    { label: 'Washer Repair', href: '/washer-repair' },
                    { label: 'Dishwasher Repair', href: '/dishwasher-repair' },
                  ].map(s => (
                    <Link key={s.label} to={s.href} className="sidebar-pill" style={{ background: '#fff', border: '1px solid rgba(255,87,34,0.25)', color: '#FF5722', fontFamily: F, fontWeight: 600, fontSize: 12, padding: '6px 14px', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{s.label}</Link>
                  ))}
                </div>
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
                { tag: 'SERVICE', title: 'Refrigerator Repair in Bay Area', body: 'Same-day refrigerator repair for all brands. $60 diagnostic applied.', link: 'View Service', href: '/refrigerator-repair' },
                { tag: 'ARTICLE', title: 'How Much Does Refrigerator Repair Cost in SF?', body: 'Average costs $200\u2013$550 in Bay Area. Full breakdown by problem type.', link: 'Read Article', href: '/blog/refrigerator-repair-cost-san-francisco-2026' },
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service appliance repair across all SF neighborhoods. Same-day available.', link: 'View Service', href: '/san-francisco-appliance-repair' },
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

        {/* ━━━ 6. MINIMAL FOOTER ━━━ */}
        <footer data-testid="article-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 7. FLOATING (desktop) ━━━ */}
        {showFloat && (
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
            BOOK REPAIR
          </a>
        )}
        {/* ━━━ 7. MOBILE STICKY BAR ━━━ */}
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

export default RefrigeratorNotCooling;

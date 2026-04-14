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
  { q: "Why is my refrigerator running but not cooling?", a: "The most common causes are dirty condenser coils or a failed evaporator fan motor. Start by cleaning the coils \u2014 if the freezer is cold but the fridge compartment is warm, the evaporator fan likely needs replacement. In San Francisco, coastal humidity also accelerates gasket wear, causing cold air leaks." },
  { q: "How much does refrigerator repair cost in San Francisco?", a: "Most refrigerator repairs cost $250\u2013$650 after the diagnostic fee. FixitBay LLC charges a $80 diagnostic that is applied toward repair. Common repairs like thermostat replacement start from $295. Compressor replacement on standard fridges ranges from $450\u2013$555. Sub-Zero and Viking repairs start from $555." },
  { q: "Is it worth repairing a 10-year-old refrigerator?", a: "If the repair cost exceeds 50% of a new refrigerator\u2019s price, replacement usually makes more sense. The exception is premium brands \u2014 a Sub-Zero costs $5,000\u2013$15,000 new, so a $800 compressor repair is absolutely worth it even at 15+ years." },
  { q: "Can I fix a refrigerator not cooling myself?", a: "You can check three things yourself: clean the condenser coils, verify the thermostat setting (35\u201338\u00B0F), and test the door seal with a dollar bill. These cover about 40% of cases. If these don\u2019t solve it, the issue likely requires a licensed technician with diagnostic tools." },
  { q: "How long does refrigerator repair take?", a: "Most repairs take 1\u20132 hours once the technician arrives. Parts like fan motors and thermostats are usually in stock on our truck. Compressor replacement may require ordering the part and a return visit. FixitBay LLC offers same- or next-day appointments Monday through Saturday." },
  { q: "Is it worth repairing a refrigerator that is 10 years old?", a: "It depends on the brand and what failed. A 10-year-old Whirlpool with a failed water inlet valve ($150\u2013$200 repair) is worth fixing \u2014 the appliance has 5+ years of life remaining. A 10-year-old Samsung with a compressor failure ($400\u2013$600) is borderline \u2014 compare to replacement cost. Sub-Zero and Viking refrigerators are worth repairing at almost any age because of their $5,000+ replacement cost. Our technician will give you an honest recommendation on site." },
];

const TOC = [
  { id: 'dirty-coils', label: 'Dirty Condenser Coils \u2014 The #1 Cause' },
  { id: 'thermostat', label: 'Thermostat Set Wrong or Malfunctioning' },
  { id: 'door-gasket', label: 'Damaged Door Gasket (Seal)' },
  { id: 'air-vents', label: 'Blocked Air Vents' },
  { id: 'evaporator-fan', label: 'Failed Evaporator Fan Motor' },
  { id: 'start-relay', label: 'Faulty Start Relay or Overload Protector' },
  { id: 'defrost', label: 'Defrost System Failure' },
  { id: 'compressor', label: 'Compressor Failure or Refrigerant Leak' },
  { id: 'checklist', label: 'DIY Checklist Before Calling a Technician' },
  { id: 'when-to-call', label: 'When to Call a Technician vs. DIY' },
  { id: 'pricing', label: 'Repair Pricing \u2014 SF Bay Area' },
  { id: 'field-note', label: "Andrei\u2019s Field Note" },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'related', label: 'Related Articles' },
];

const CHECKLIST = [
  'Check thermostat setting \u2014 fridge 35\u201338\u00B0F, freezer 0\u00B0F',
  'Clean condenser coils \u2014 unplug, pull out, vacuum with brush',
  'Test door gasket \u2014 dollar bill test on all four sides',
  'Clear blocked air vents \u2014 move food away from back wall',
  'Listen for sounds \u2014 clicking (relay), grinding (fan), hissing (leak)',
  'Check if freezer is cold but fridge is warm \u2014 evaporator fan issue',
];

const PRICING = [
  { problem: 'Condenser coil cleaning', cost: 'Included in $80 diagnostic' },
  { problem: 'Thermostat/sensor replacement', cost: 'from $295' },
  { problem: 'Door gasket replacement', cost: 'from $80' },
  { problem: 'Evaporator fan motor', cost: 'from $180' },
  { problem: 'Start relay replacement', cost: 'from $295' },
  { problem: 'Defrost system repair', cost: 'from $180' },
  { problem: 'Refrigerant recharge', cost: 'from $300' },
  { problem: 'Compressor replacement', cost: 'from $400' },
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
        "headline": "Refrigerator Not Cooling? 8 Causes & Fixes | FixitBay LLC SF",
        "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
        "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } },
        "datePublished": "2026-03-23",
        "dateModified": "2026-04-13",
        "mainEntityOfPage": "https://fixitbay.net/blog/refrigerator-not-cooling"
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
          { "@type": "ListItem", "position": 3, "name": "Refrigerator Not Cooling", "item": "https://fixitbay.net/blog/refrigerator-not-cooling" }
        ]
      }
    }
  ], []);

  useSchemas(schemas);

  /* SF Tip box */
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
        title="Refrigerator Not Cooling? 8 Causes & Fixes | FixitBay LLC SF"
        description="Refrigerator not cooling? 8 common causes from dirty coils to compressor failure. SF Bay Area DIY checklist + when to call a pro. From $255 at FixitBay LLC."
        canonical="https://fixitbay.net/blog/refrigerator-not-cooling"
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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Refrigerator Not Cooling</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Refrigerator</span>
            </div>
            <BlogByline dateISO="2026-03-23" dateFormatted="March 23, 2026" readTime="8 min" />
            <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Refrigerator Not Cooling? 8 Common Causes & What to Do
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              8 causes ranked from simplest DIY fix to problems that need a licensed technician. SF Bay Area pricing, a real case study, and a checklist before you call.
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
              <p style={{ ...P, marginBottom: 16 }}>
                <span style={{ fontWeight: 600, color: '#1A1A1A' }}>A warm refrigerator puts your food — and your grocery budget — at risk.</span> Before you call for service, there are things you can check yourself. Below are the 8 most common reasons a refrigerator stops cooling, ranked from simplest DIY fix to problems that need a licensed technician.
              </p>
              <p style={{ ...P, marginBottom: 16 }}>
                As an <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>appliance repair</a> tech in San Francisco for over 3 years, I see every one of these weekly — especially in older Victorian and Edwardian homes across the city.
              </p>
              <p style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A3B5D', fontStyle: 'italic', marginBottom: 28 }}>
                — Andrei, Licensed Appliance Technician, FixitBay LLC
              </p>

              {/* ── Section 1 ── */}
              <h2 id="dirty-coils" style={H2S}><span style={{ color: '#FF5722' }}>1.</span> Dirty Condenser Coils — The #1 Cause</h2>
              <p style={P}>Dust, pet hair, and kitchen grease coat the coils behind or underneath your fridge. When coils are dirty, the compressor works overtime and can't release heat efficiently.</p>
              <SFTip text="Our coastal fog pulls moisture and fine particles from the air that cling to condenser coils. Homes near Ocean Beach, in the Sunset and Richmond districts, and across Pacifica see coils clog up to twice as fast as inland areas. I recommend cleaning coils every 6 months if you live west of Twin Peaks." />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY fix:</strong> Unplug the fridge, pull it out from the wall, and vacuum the coils with a brush attachment. Takes 10 minutes.</p>

              {/* ── Section 2 ── */}
              <h2 id="thermostat" style={H2S}><span style={{ color: '#FF5722' }}>2.</span> Thermostat Set Wrong or Malfunctioning</h2>
              <p style={P}>Sometimes someone bumps the temperature dial — especially in homes with kids. Check that your fridge is set between 35–38°F and your freezer at 0°F.</p>
              <p style={P}>If the setting looks correct but the temperature doesn't match — the thermostat sensor may be faulty. On digital models, check for error codes on the display panel.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY check:</strong> Verify the dial. Place a thermometer inside for 24 hours.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair needed if sensor is bad:</strong> from $295</p>

              {/* ── Section 3 ── */}
              <h2 id="door-gasket" style={H2S}><span style={{ color: '#FF5722' }}>3.</span> Damaged Door Gasket (Seal)</h2>
              <p style={P}>The rubber gasket around your door keeps cold air in. When it cracks, hardens, or warps, cold air leaks constantly.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Dollar bill test:</strong> Close the door on a dollar bill. If it slides out easily, the seal is too weak.</p>
              <SFTip text="Salt air and fog humidity accelerate rubber deterioration. I replace more door gaskets in Pacifica and the Outer Sunset than anywhere else in the Bay Area. If your fridge is near a window that faces the ocean, check gaskets every year." />
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY check:</strong> Run the dollar bill test. Clean gaskets with warm soapy water.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional replacement:</strong> from $80–$150 installed.</p>

              {/* ── Section 4 ── */}
              <h2 id="air-vents" style={H2S}><span style={{ color: '#FF5722' }}>4.</span> Blocked Air Vents</h2>
              <p style={P}>Cold air circulates between the freezer and fridge compartments through internal vents. If food items or <a href="/ice-maker-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>ice buildup</a> block these vents, the fridge stays warm while the freezer works fine.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY fix:</strong> Rearrange food so nothing touches the back wall or vent openings. If you see ice covering the vent, defrost the freezer manually — but if ice keeps returning, you may have a defrost system problem (see #7).</p>

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>refrigerator repair</a> in San Francisco & Bay Area?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Fast scheduling &middot; $80 diagnostic applied to repair &middot; 180-day warranty</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                    <a href="/book" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online</a>
                  </div>
                </div>
              </div>

              {/* ── Section 5 ── */}
              <h2 id="evaporator-fan" style={H2S}><span style={{ color: '#FF5722' }}>5.</span> Failed Evaporator Fan Motor</h2>
              <p style={P}>This fan pushes cold air from the freezer into the fridge. Classic symptom: your freezer is cold but the fridge compartment is warm.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>How to check:</strong> Open the freezer door and listen. You should hear the fan running. If it's silent or making grinding/squealing sounds, the motor is failing.</p>
              <p style={P}>This requires professional repair.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> from $180–$280</p>

              {/* ── Section 6 ── */}
              <h2 id="start-relay" style={H2S}><span style={{ color: '#FF5722' }}>6.</span> Faulty Start Relay or Overload Protector</h2>
              <p style={P}>The start relay helps the compressor kick on. When it fails, you'll hear a repeating click-buzz-click pattern every few minutes — the compressor tries to start but immediately shuts off.</p>
              <p style={P}>This is a common failure on 8–15 year old fridges. The part itself is inexpensive ($30–$60), but diagnosis requires testing with a multimeter.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $295–$350 (part + labor)</p>

              {/* ── Section 7 ── */}
              <h2 id="defrost" style={H2S}><span style={{ color: '#FF5722' }}>7.</span> Defrost System Failure</h2>
              <p style={P}>Modern frost-free refrigerators run automatic defrost cycles. If the defrost timer, heater, or thermostat fails, ice builds up on the evaporator coils and blocks airflow completely.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Symptoms:</strong> frost visible inside the freezer walls, fridge gradually getting warmer over days/weeks, water pooling under the crisper drawers.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Professional repair:</strong> from $180–$300</p>

              {/* ── Section 8 ── */}
              <h2 id="compressor" style={H2S}><span style={{ color: '#FF5722' }}>8.</span> Compressor Failure or Refrigerant Leak</h2>
              <p style={P}>The compressor is the heart of your refrigerator — it circulates refrigerant through the system. When it fails, the fridge runs but never gets cold enough.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Refrigerant leak signs:</strong> hissing sound near the back, fridge runs constantly but stays warm. Refrigerant handling is EPA-regulated — only certified technicians can work with it.</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Compressor replacement:</strong> from $400–$800</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Refrigerant recharge:</strong> from $300–$500</p>
              <p style={P}><strong style={{ color: '#1A1A1A' }}>Worth repairing?</strong> For <a href="/sub-zero-appliance-repair" style={{ color: '#C0362C', fontWeight: 600 }}>Sub-Zero</a> ($5,000–$15,000 new), Viking, or Thermador — absolutely yes. For a standard fridge over 10 years old where repair exceeds 50% of replacement cost — usually better to <a href="/blog/when-to-repair-vs-replace" style={{ color: '#C0362C', fontWeight: 600 }}>replace</a>.</p>

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
              <h2 id="pricing" style={H2S}>Refrigerator Repair Pricing — San Francisco Bay Area</h2>
              <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                <table data-testid="pricing-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: '#1A3B5D' }}>
                      <th style={{ color: '#fff', fontWeight: 700, padding: '12px 16px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Problem</th>
                      <th style={{ color: '#fff', fontWeight: 700, padding: '12px 16px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Typical Repair Cost</th>
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
              <p style={P}>FixitBay LLC <a href="/refrigerator-repair" style={{ color: '#C0362C', fontWeight: 600 }}>refrigerator repair</a> starts from $255 after $80 diagnostic. The $80 diagnostic fee is fully applied toward your repair cost.</p>

              {/* ── Andrei's Field Note ── */}
              <h2 id="field-note" style={H2S}>Andrei's Field Note</h2>
              <blockquote data-testid="field-note" style={{ borderLeft: '4px solid #FF5722', padding: '20px 24px', margin: '0 0 24px', background: '#FAFAF7', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>
                  "Two weeks ago I got a call from a family in the Sunset District — their Samsung fridge was warm but the freezer worked fine. Classic evaporator fan failure, right? But when I pulled the panel, the fan was actually fine. The real problem was a frozen-over evaporator coil caused by a failed defrost thermostat. San Francisco's humidity made it worse — the coil had a solid inch of ice. I replaced the defrost thermostat ($185 total), and the fridge was back to 37°F within four hours. This is why proper diagnosis matters — the wrong guess could mean replacing a $250 fan motor that was never broken."
                </p>
                <footer style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: '#1A3B5D' }}>— Andrei, Lead Appliance Technician, FixitBay LLC</footer>
              </blockquote>

              {/* ── FAQ Section ── */}
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
                  { title: 'When to Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { title: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                  { title: 'Refrigerator Water Filter Guide', href: '/blog/refrigerator-water-filter' },
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
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Need Expert <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>Refrigerator Repair</a> in the Bay Area?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Our certified technicians diagnose and repair all refrigerator brands — <a href="/book" style={{ color: '#FF5722', textDecoration: 'none' }}>fast scheduling</a> available across <a href="/san-francisco-appliance-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>San Francisco</a> and the Bay Area.</p>
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

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: Book Repair */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>FAST SCHEDULING</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Fridge Not Cooling?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$80 diagnostic applied to repair. 180-day warranty.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Licensed CA Technician', 'Fast Scheduling', 'All Major Brands'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
                <a href="tel:+17605435733" className="phone-cta" data-testid="sidebar-call" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 20, transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                <a href="/book" className="book-cta" style={{ display: 'block', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 4, textAlign: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', marginTop: 8, transition: 'background 0.2s' }}>Book Online</a>
              </div>

              {/* Widget 2: Related Articles */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(0,0,0,0.07)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>Related Articles</p>
                {[
                  { text: 'When to Repair vs Replace Your Appliance', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                  { text: 'Refrigerator Water Filter Guide', href: '/blog/refrigerator-water-filter' },
                  { text: 'Energy Efficient Appliance Tips', href: '/blog/energy-efficient-appliances' },
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
                    { label: 'Refrigerator Repair', href: '/refrigerator-repair' },
                    { label: 'Freezer Repair', href: '/freezer-repair' },
                    { label: 'Ice Maker Repair', href: '/ice-maker-repair' },
                    { label: 'Washer Repair', href: '/washer-repair' },
                    { label: 'Dishwasher Repair', href: '/dishwasher-repair' },
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
                { tag: 'SERVICE', title: 'Refrigerator Repair in Bay Area', body: 'Fast refrigerator repair for all brands. $80 diagnostic applied.', link: 'View Service', href: '/refrigerator-repair' },
                { tag: 'ARTICLE', title: 'How Much Does Refrigerator Repair Cost in SF?', body: 'Average costs $200\u2013$550 in Bay Area. Full breakdown by problem type.', link: 'Read Article', href: '/blog/refrigerator-repair-cost-san-francisco-2026' },
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

        {/* ━━━ MINIMAL FOOTER ━━━ */}
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
        {/* ━━━ MOBILE STICKY BAR ━━━ */}
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

export default RefrigeratorNotCooling;

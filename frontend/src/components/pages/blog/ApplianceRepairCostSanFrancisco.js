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
const TH = { color: '#fff', fontWeight: 700, padding: '12px 16px', textAlign: 'left', borderBottom: '2px solid #FF5722', fontFamily: F, fontSize: 13 };
const TD = (i) => ({ padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', fontFamily: F, fontSize: 14, background: i % 2 === 0 ? '#F8F5F0' : '#fff' });

const FAQ_ITEMS = [
  { q: "How much does appliance repair cost in San Francisco?", a: "Most appliance repairs in San Francisco cost between $250\u2013$650 after the diagnostic fee. Simple fixes like a blown thermal fuse or clogged drain start around $250. Complex repairs like compressor replacement can reach $800\u2013$800. FixitBay LLC charges a $80 diagnostic that is fully applied toward the repair cost." },
  { q: "Is the diagnostic fee worth it?", a: "Yes. The $80 diagnostic gives you an exact diagnosis and upfront repair estimate with no obligation. Companies that offer \u2018free diagnostics\u2019 typically build that cost into inflated repair prices. Our diagnostic fee ensures you get honest pricing whether you proceed with the repair or not." },
  { q: "Why is appliance repair more expensive in San Francisco?", a: "SF repair costs are 20\u201340% higher than suburban areas due to parking costs, building access logistics, older housing stock requiring extra labor, higher concentration of European luxury appliances with expensive parts, and the general cost of doing business in the city." },
  { q: "Is it cheaper to repair or replace an appliance?", a: "General rule: if the repair costs less than 50% of a new appliance and the unit is under 8\u201310 years old, repair makes sense. For luxury brands like Sub-Zero ($5,000\u2013$15,000 new), repair is almost always the better choice. For standard brands over 12 years old with major failures, replacement often wins." },
  { q: "Does FixitBay LLC charge extra for weekends or emergency service?", a: "FixitBay LLC offers same- or next-day appointments Monday through Saturday at the same pricing. No emergency surcharges, no weekend premiums. The $80 diagnostic fee and quoted repair prices apply equally regardless of when we come." },
];

const TOC = [
  { id: 'pricing', label: 'Complete Repair Pricing 2026' },
  { id: 'luxury', label: 'Luxury & High-End Brand Pricing' },
  { id: 'why-sf', label: 'Why SF Costs More' },
  { id: 'diagnostic', label: 'How the $80 Diagnostic Works' },
  { id: 'repair-replace', label: 'Repair vs. Replace Guide' },
  { id: 'by-problem', label: 'Costs by Problem' },
  { id: 'advice', label: "Andrei\u2019s Pricing Advice" },
  { id: 'compare', label: 'How FixitBay LLC Compares' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'related', label: 'Related Articles' },
];

const MAIN_PRICING = [
  { appliance: 'Diagnostic / Service Call', fixitbay: '$80 (applied to repair)', market: '$50\u2013$120' },
  { appliance: 'Refrigerator', fixitbay: 'from $250', market: '$200\u2013$800', href: '/refrigerator-repair' },
  { appliance: 'Freezer', fixitbay: 'from $250', market: '$200\u2013$550', href: '/freezer-repair' },
  { appliance: 'Ice Maker', fixitbay: 'from $250', market: '$120\u2013$350', href: '/ice-maker-repair' },
  { appliance: 'Washer', fixitbay: 'from $240', market: '$180\u2013$450', href: '/washer-repair' },
  { appliance: 'Dryer', fixitbay: 'from $235', market: '$170\u2013$400', href: '/dryer-repair' },
  { appliance: 'Dishwasher', fixitbay: 'from $250', market: '$250\u2013$450', href: '/dishwasher-repair' },
  { appliance: 'Oven / Range / Stove', fixitbay: 'from $230', market: '$180\u2013$500', href: '/oven-repair' },
  { appliance: 'Cooktop', fixitbay: 'from $230', market: '$180\u2013$450', href: '/cooktop-repair' },
  { appliance: 'Wine Cooler', fixitbay: 'from $250', market: '$250\u2013$650', href: '/wine-cooler-repair' },
];

const LUXURY_PRICING = [
  { brand: 'Sub-Zero', price: 'from $555', why: 'Factory-certified parts, sealed cooling systems, precision calibration', href: '/sub-zero-appliance-repair' },
  { brand: 'Viking', price: 'from $295', why: 'Heavy-duty commercial-grade components, specialized gas valve parts' },
  { brand: 'Thermador', price: 'from $425', why: 'German-engineered electronics, proprietary control boards' },
  { brand: 'Miele', price: 'from $445', why: 'European parts often shipped from Germany, precision tolerances' },
  { brand: 'Built-In units', price: 'from $445', why: 'Requires cabinet removal, custom access, reinstallation' },
];

const PROBLEM_PRICING = [
  { problem: 'Refrigerator not cooling \u2014 dirty coils', cost: '$80 (diagnostic only)' },
  { problem: 'Refrigerator not cooling \u2014 thermostat', cost: 'from $250' },
  { problem: 'Refrigerator not cooling \u2014 compressor', cost: 'from $400' },
  { problem: 'Dryer not heating \u2014 thermal fuse', cost: 'from $250' },
  { problem: 'Dryer not heating \u2014 heating element', cost: 'from $180' },
  { problem: 'Washer not spinning \u2014 lid switch/belt', cost: 'from $140' },
  { problem: 'Washer leaking \u2014 pump or hose', cost: 'from $160' },
  { problem: 'Dishwasher not draining \u2014 pump', cost: 'from $250' },
  { problem: 'Oven not heating \u2014 igniter', cost: 'from $180' },
  { problem: 'Ice maker not working \u2014 valve or motor', cost: 'from $250' },
  { problem: 'Wine cooler temp fluctuating', cost: 'from $285' },
];

const COMPARE = [
  { feat: 'Diagnostic fee', us: '$80 (applied to repair)', them: '$50\u2013$120 (often NOT applied)' },
  { feat: 'Fast scheduling', us: 'Yes, Mon\u2013Sat', them: 'Often 2\u20133 day wait' },
  { feat: 'Warranty', us: '180 days parts & labor', them: '30\u201390 days typical' },
  { feat: 'Upfront pricing', us: 'Yes, before work starts', them: 'Sometimes quoted after' },
  { feat: 'Licensed CA technician', us: 'Yes, License #51001', them: 'Varies' },
  { feat: 'Cities served', us: '22 Bay Area cities', them: 'Often SF only' },
];

const WHY_SF = [
  { title: 'Parking & Access', text: 'Street parking in SF averages $4\u20136/hour. Many buildings require appointment scheduling with doormen, freight elevator access, and building insurance certificates. These logistics add time to every job.' },
  { title: 'Older Housing Stock', text: "Victorian and Edwardian homes have tight kitchens, non-standard cabinet sizes, and original plumbing. Pulling a built-in dishwasher out of a 1920s kitchen takes 3x longer than in a modern suburban home." },
  { title: 'Parts Availability', text: "San Francisco\u2019s concentration of European appliances (Bosch, Miele, Thermador) means parts often need to be ordered from specialized distributors, adding 1\u20133 days to some repairs." },
  { title: 'Cost of Living', text: "Technician wages, insurance, vehicle costs, and business licensing in SF are 30\u201350% higher than suburban areas. This is reflected in every repair company\u2019s pricing \u2014 not just ours." },
];

const ApplianceRepairCostSanFrancisco = () => {
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
        "headline": "Appliance Repair Cost San Francisco 2026 | FixitBay LLC Guide",
        "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
        "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } },
        "datePublished": "2026-03-23",
        "dateModified": "2026-04-13",
        "mainEntityOfPage": "https://fixitbay.net/blog/appliance-repair-cost-san-francisco"
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
          { "@type": "ListItem", "position": 3, "name": "Appliance Repair Cost San Francisco", "item": "https://fixitbay.net/blog/appliance-repair-cost-san-francisco" }
        ]
      }
    }
  ], []);

  useSchemas(schemas);

  const PricingTable = ({ headers, rows, testId }) => (
    <div style={{ overflowX: 'auto', marginBottom: 16 }}>
      <table data-testid={testId} style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
        <thead><tr style={{ background: '#1A3B5D' }}>{headers.map((h, i) => <th key={i} style={TH}>{h}</th>)}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );

  return (
    <>
      <SEOMetaTags
        title="Appliance Repair Cost San Francisco 2026 | FixitBay LLC Guide"
        description="How much does appliance repair cost in San Francisco? Full 2026 pricing guide for refrigerators, washers, dryers, ovens & more. From $80 diagnostic at FixitBay LLC."
        canonical="https://fixitbay.net/blog/appliance-repair-cost-san-francisco"
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
            .why-grid{grid-template-columns:1fr !important}
            .diag-flow{flex-direction:column !important}
            .rr-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:all 0.15s}.toc-link:hover{color:#FF7043 !important;padding-left:4px}
          .sidebar-pill:hover{background:#FF5722 !important;color:#fff !important;border-color:#FF5722 !important}
          .sidebar-link:hover{color:#FF5722 !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Appliance Repair Cost SF</span>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3 }}>Expert Advice</span>
            </div>
            <BlogByline dateISO="2026-03-23" dateFormatted="March 23, 2026" readTime="10 min" />
            <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
              Appliance Repair Cost in San Francisco — 2026 Pricing Guide
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
              3 pricing tables, luxury brand rates, why SF costs more, and a repair-vs-replace decision guide. Real numbers from a real technician.
            </p>
          </div>
        </section>

        {/* ━━━ ARTICLE ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="art-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '68% 32%', gap: 40, alignItems: 'start' }}>

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
                <span style={{ fontWeight: 600, color: '#1A1A1A' }}>How much should you expect to pay for <a href="/refrigerator-repair" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>appliance repair</a> in San Francisco?</span> As a licensed technician who's done over 2,000 service calls across the Bay Area, I get this question daily. The honest answer: it depends on the appliance, the problem, and whether you need standard or luxury brand parts.
              </p>
              <p style={{ ...P, marginBottom: 16 }}>
                Below is a transparent breakdown of what we charge at FixitBay LLC and what the market looks like in 2026. No hidden fees, no bait-and-switch pricing — just real numbers from a real technician.
              </p>
              <p style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A3B5D', fontStyle: 'italic', marginBottom: 28 }}>
                — Andrei, Licensed Appliance Technician, FixitBay LLC
              </p>

              {/* ── Main Pricing Table ── */}
              <h2 id="pricing" style={H2S}>Complete Appliance Repair Pricing — San Francisco 2026</h2>
              <PricingTable testId="pricing-table" headers={['Appliance', 'FixitBay LLC Starting Price', 'Typical SF Market Range']}
                rows={MAIN_PRICING.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...TD(i), color: '#1A1A1A', fontWeight: 600 }}>
                      {r.href ? <a href={r.href} style={{ color: '#C0362C', textDecoration: 'none', fontWeight: 600 }}>{r.appliance}</a> : r.appliance}
                    </td>
                    <td style={{ ...TD(i), color: '#FF5722', fontWeight: 700 }}>{r.fixitbay}</td>
                    <td style={{ ...TD(i), color: '#4A5568' }}>{r.market}</td>
                  </tr>
                ))}
              />
              <p style={{ ...P, fontStyle: 'italic', fontSize: 13 }}>All prices include labor and standard parts. The $80 diagnostic fee is fully applied toward your repair — if we fix it, you only pay the repair price.</p>

              {/* ── CTA after pricing ── */}
              <div data-testid="mid-cta" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722', borderRadius: 4, padding: '24px 28px', margin: '32px 0' }}>
                <div className="mid-cta-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need an appliance repair estimate?</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>$80 diagnostic applied to repair &middot; <a href="/book" style={{ color: '#FF5722', textDecoration: 'none' }}>fast scheduling</a> &middot; 180-day warranty &middot; 22 Bay Area cities</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                    <a href="/book" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online</a>
                  </div>
                </div>
              </div>

              {/* ── Luxury Pricing ── */}
              <h2 id="luxury" style={H2S}>Luxury & High-End Brand Repair Pricing</h2>
              <PricingTable testId="luxury-table" headers={['Brand', 'FixitBay LLC Starting Price', 'Why It Costs More']}
                rows={LUXURY_PRICING.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...TD(i), color: '#1A1A1A', fontWeight: 600 }}>
                      {r.href ? <a href={r.href} style={{ color: '#C0362C', textDecoration: 'none', fontWeight: 600 }}>{r.brand}</a> : r.brand}
                    </td>
                    <td style={{ ...TD(i), color: '#FF5722', fontWeight: 700 }}>{r.price}</td>
                    <td style={{ ...TD(i), color: '#4A5568', fontSize: 13 }}>{r.why}</td>
                  </tr>
                ))}
              />
              <p style={P}>Luxury brand repairs cost more because parts are expensive and proprietary. But repairing a $5,000–$15,000 <a href="/sub-zero-appliance-repair" style={{ color: '#C0362C', fontWeight: 600 }}>Sub-Zero</a> is almost always cheaper than replacing it.</p>

              {/* ── Why SF Costs More ── */}
              <h2 id="why-sf" style={H2S}>Why Appliance Repair Costs More in San Francisco</h2>
              <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {WHY_SF.map((item, i) => (
                  <div key={i} style={{ background: '#F8F5F0', borderRadius: 4, padding: '20px 24px', borderTop: '3px solid #FF5722' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{item.title}</span>
                    </div>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              {/* ── How Diagnostic Works ── */}
              <h2 id="diagnostic" style={H2S}>How the $80 Diagnostic Fee Works</h2>
              <div data-testid="diagnostic-flow" style={{ background: '#0D1B2A', borderRadius: 4, padding: '28px 24px', marginBottom: 16 }}>
                <div className="diag-flow" style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
                  {[
                    { step: '1', label: 'Book', desc: 'Online or call \u2192 We arrive same- or next-day' },
                    { step: '2', label: 'Diagnose', desc: 'Technician diagnoses the problem \u2192 $80 diagnostic fee' },
                    { step: '3', label: 'Estimate', desc: 'You get an upfront estimate \u2192 No surprises' },
                    { step: '4', label: 'Decide', desc: 'Approve \u2192 $80 credited toward total\nDecline \u2192 You only pay $80' },
                  ].map((s, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center', padding: '0 12px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>{s.step}</div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 4 }}>{s.label}</p>
                      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ ...P, fontStyle: 'italic', fontSize: 13 }}>The diagnostic fee guarantees you get an honest, professional assessment — even if you decide not to repair. Many competitors advertise "free diagnostic" but inflate repair prices to compensate. We prefer transparency.</p>

              {/* ── Repair vs Replace ── */}
              <h2 id="repair-replace" style={H2S}>Repair vs. Replace — When It Makes Sense</h2>
              <div className="rr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div style={{ background: '#E8F5E9', borderRadius: 4, padding: '20px 24px', borderTop: '3px solid #4CAF50' }}>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#2E7D32', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Repair When</p>
                  {[
                    'Appliance is under 8 years old',
                    'Repair cost is less than 50% of replacement',
                    'It\u2019s a simple fix (thermostat, gasket, fuse, relay)',
                    'The appliance is a premium/luxury brand',
                    'The problem is a first-time failure',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>{'\u2713'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#FFF3E0', borderRadius: 4, padding: '20px 24px', borderTop: '3px solid #FF9800' }}>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#E65100', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Replace When</p>
                  {[
                    'Appliance is 12+ years old AND repair exceeds $400',
                    'Multiple components failing (compressor + board + seal)',
                    'Parts are discontinued',
                    'Energy savings offset cost within 2 years',
                    'You\u2019ve repaired it 2+ times in the past year',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: '#FF9800', fontWeight: 700, flexShrink: 0 }}>{'\u2717'}</span>
                      <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ ...P, fontWeight: 600 }}><a href="/blog/when-to-repair-vs-replace" style={{ color: '#C0362C' }}>Rule of thumb</a>: if repair cost &times; remaining years &lt; replacement cost, repair wins.</p>

              {/* ── Costs by Problem ── */}
              <h2 id="by-problem" style={H2S}>Common Repair Costs by Problem</h2>
              <PricingTable testId="problem-table" headers={['Problem', 'Typical Repair Cost']}
                rows={PROBLEM_PRICING.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...TD(i), color: '#4A5568' }}>{r.problem}</td>
                    <td style={{ ...TD(i), color: '#1A1A1A', fontWeight: 600 }}>{r.cost}</td>
                  </tr>
                ))}
              />

              {/* ── Andrei's Advice ── */}
              <h2 id="advice" style={H2S}>Andrei's Pricing Advice</h2>
              <blockquote data-testid="field-note" style={{ borderLeft: '4px solid #FF5722', padding: '20px 24px', margin: '0 0 24px', background: '#FAFAF7', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>
                  "Here's what I tell every customer: get the diagnostic before deciding anything. I've seen people buy a $2,000 refrigerator because they assumed the repair would be expensive — turns out it was a $80 coil cleaning. I've also saved customers from spending $500 on a repair when an $800 new washer made more sense. The $80 diagnostic is the smartest money you'll spend because it gives you the real numbers to make the right decision."
                </p>
                <footer style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: '#1A3B5D' }}>— Andrei, Lead Appliance Technician, FixitBay LLC</footer>
              </blockquote>

              {/* ── How FixitBay LLC Compares ── */}
              <h2 id="compare" style={H2S}>How FixitBay LLC Compares</h2>
              <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                <table data-testid="compare-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
                  <thead><tr style={{ background: '#1A3B5D' }}>
                    <th style={TH}>Feature</th>
                    <th style={{ ...TH, background: '#FF5722' }}>FixitBay LLC</th>
                    <th style={TH}>Typical SF Companies</th>
                  </tr></thead>
                  <tbody>
                    {COMPARE.map((r, i) => (
                      <tr key={i}>
                        <td style={{ ...TD(i), color: '#1A1A1A', fontWeight: 600 }}>{r.feat}</td>
                        <td style={{ ...TD(i), color: '#2E7D32', fontWeight: 600 }}>{r.us}</td>
                        <td style={{ ...TD(i), color: '#4A5568' }}>{r.them}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── 2026 Pricing Update ── */}
              <h2 id="2026-update" style={H2S}>2026 Appliance Repair Cost Update — San Francisco Bay Area</h2>
              <p style={P}>Prices updated April 2026. Parts costs have stabilized after supply chain normalization in 2023–2024. Labor rates in SF reflect local cost of living.</p>
              <div style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '24px 28px', marginBottom: 16 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>Diagnostic Fees (April 2026)</p>
                <p style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 1.7, marginBottom: 4 }}>Residential appliance repair: <strong>$80</strong> (applied toward repair)</p>
                <p style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 1.7, marginBottom: 16 }}>Commercial / HVAC diagnostic: <strong>$100</strong> (applied toward repair)</p>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 12 }}>Typical Repair Ranges (parts + labor, April 2026)</p>
                <div style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 2 }}>
                  Refrigerator — thermostat/sensor: $180 – $280<br/>
                  Refrigerator — compressor (standard): $420 – $650<br/>
                  Refrigerator — compressor (Sub-Zero): $600 – $1,100<br/>
                  Washer — drain pump: $220 – $320<br/>
                  Washer — door seal (front-load): $180 – $280<br/>
                  Dryer — heating element: $120 – $200<br/>
                  Dryer — thermal fuse: $90 – $150<br/>
                  Dishwasher — drain pump: $280 – $380<br/>
                  Dishwasher — control board: $350 – $480<br/>
                  Oven — igniter (gas): $160 – $250<br/>
                  Oven — control board: $300 – $500
                </div>
              </div>
              <p style={P}>All prices include $80 diagnostic credit. 180-day warranty on all parts and labor.</p>

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
                  { title: 'Refrigerator Not Cooling? 8 Causes & Fixes', href: '/blog/refrigerator-not-cooling' },
                  { title: 'Dryer Not Heating? 7 Causes & Fixes', href: '/blog/dryer-not-heating' },
                  { title: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
                  { title: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                ].map((a, i) => (
                  <Link key={i} to={a.href} data-testid={`related-inline-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>Read &rarr;</span>
                  </Link>
                ))}
              </div>

              {/* ── Bottom CTA ── */}
              <div data-testid="bottom-cta" style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '32px 28px', textAlign: 'center', marginTop: 32 }}>
                <div style={{ ...EYE, marginBottom: 8 }}>GET YOUR ESTIMATE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 8 }}>Ready for a <a href="/san-francisco-appliance-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>Professional Diagnosis</a>?</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>$80 diagnostic applied to repair. <a href="/book" style={{ color: '#FF5722', textDecoration: 'none' }}>fast scheduling</a> across San Francisco, <a href="/marin-county-appliance-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>Marin County</a>, and the Peninsula.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:+17605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
                  <a href="/book" className="book-cta" style={{ background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'background 0.2s' }}>Book Online Now</a>
                </div>
              </div>

              {/* ── Author ── */}
              <div data-testid="author-box" style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid rgba(255,87,34,0.15)', display: 'flex', gap: 20, alignItems: 'center', marginTop: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,87,34,0.15)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Written by</p>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>Andrei — Lead Appliance Technician</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568' }}>2,000+ service calls &middot; License #51001 &middot; 3+ years in the Bay Area</p>
                </div>
              </div>
            </article>

            {/* ━━━ SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: 24 }}>
                <div style={EYE}>GET YOUR ESTIMATE</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>$80 Diagnostic</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Applied to repair. 180-day warranty. No hidden fees.</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                {['Licensed CA Technician', 'Fast Scheduling', '22 Bay Area Cities', '180-Day Warranty'].map(item => (
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
                  { text: 'Refrigerator Not Cooling? 8 Causes', href: '/blog/refrigerator-not-cooling' },
                  { text: 'Dryer Not Heating? 7 Causes', href: '/blog/dryer-not-heating' },
                  { text: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
                  { text: 'How Long Do Appliances Last?', href: '/blog/appliance-lifespan' },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="sidebar-link" style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>{link.text}
                  </Link>
                ))}
              </div>
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <div style={{ ...EYE, marginBottom: 12 }}>OUR REPAIR SERVICES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { label: 'Refrigerator', href: '/refrigerator-repair' },
                    { label: 'Washer', href: '/washer-repair' },
                    { label: 'Dryer', href: '/dryer-repair' },
                    { label: 'Dishwasher', href: '/dishwasher-repair' },
                    { label: 'Oven', href: '/oven-repair' },
                    { label: 'Wine Cooler', href: '/wine-cooler-repair' },
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
                { tag: 'SERVICE', title: 'San Francisco Appliance Repair', body: 'Full-service appliance repair across all SF neighborhoods. Fast scheduling.', link: 'View Service', href: '/san-francisco-appliance-repair' },
                { tag: 'ARTICLE', title: 'Refrigerator Not Cooling? 8 Causes', body: '8 causes from dirty coils to compressor failure. DIY checklist + pro costs.', link: 'Read Article', href: '/blog/refrigerator-not-cooling' },
                { tag: 'SERVICE', title: 'Peninsula Appliance Repair', body: 'Fast scheduling in Daly City, South San Francisco, San Bruno & more.', link: 'View Service', href: '/daly-city-appliance-repair' },
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

        {showFloat && (
          <a href="/book" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
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

export default ApplianceRepairCostSanFrancisco;

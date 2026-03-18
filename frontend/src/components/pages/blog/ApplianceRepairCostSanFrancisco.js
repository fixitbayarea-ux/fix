import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ChevronDown, ChevronUp, Calendar, DollarSign, Wrench, CheckCircle } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';

const F = "'Montserrat', sans-serif";
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 26, color: '#0D1B2A', margin: '48px 0 16px', lineHeight: 1.3 };
const H3S = { fontFamily: F, fontWeight: 700, fontSize: 20, color: '#1A3B5D', margin: '28px 0 10px' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.75, margin: '0 0 16px' };

const PRICING_DATA = [
  { appliance: 'Refrigerator', range: '$180–$450', common: 'Thermostat, compressor, fan motor', link: '/refrigerator-repair' },
  { appliance: 'Washer', range: '$150–$350', common: 'Pump, belt, control board, bearings', link: '/washer-repair' },
  { appliance: 'Dryer', range: '$120–$300', common: 'Heating element, thermal fuse, belt', link: '/dryer-repair' },
  { appliance: 'Dishwasher', range: '$140–$320', common: 'Pump, spray arm, control panel', link: '/dishwasher-repair' },
  { appliance: 'Oven / Range', range: '$150–$400', common: 'Igniter, element, thermostat, door', link: '/oven-repair' },
  { appliance: 'Wine Cooler', range: '$150–$350', common: 'Compressor, thermostat, fan', link: '/wine-cooler-repair' },
  { appliance: 'Ice Maker', range: '$150–$280', common: 'Water valve, motor, thermostat', link: '/ice-maker-repair' },
  { appliance: 'Garbage Disposal', range: '$100–$250', common: 'Motor, impeller, reset switch', link: '/garbage-disposal-repair' },
  { appliance: 'Cooktop', range: '$120–$300', common: 'Burner, igniter, switch, element', link: '/cooktop-repair' },
  { appliance: 'Freezer', range: '$150–$400', common: 'Compressor, thermostat, defrost', link: '/freezer-repair' },
];

const FAQS = [
  { q: 'What is the average cost of appliance repair in San Francisco?', a: 'The average appliance repair in San Francisco costs $150–$350 after diagnostic, depending on the appliance type and parts needed. FixitBay charges a $60 diagnostic fee that is fully applied to the repair cost if you proceed. Simple fixes (thermal fuse, belt) run $80–$150, while complex repairs (compressor, control board) can reach $400–$600.' },
  { q: 'Is the $60 diagnostic fee worth it?', a: 'Yes. The $60 diagnostic covers a complete inspection, root-cause diagnosis, and a detailed repair estimate. If you proceed with the repair, the $60 is credited toward your total cost — so you effectively pay nothing extra for the diagnosis. If you decline the repair, you pay only the $60 and get a professional assessment you can use for comparison shopping.' },
  { q: 'Why is appliance repair more expensive in San Francisco?', a: 'SF repair costs are 15–25% higher than the national average due to higher labor rates, commercial rent, insurance requirements, and the cost of maintaining a licensed, insured fleet in a dense urban area. However, FixitBay keeps costs competitive by stocking common parts on trucks (reducing return visits) and operating a lean team of experienced technicians.' },
  { q: 'Should I repair or replace my appliance?', a: 'Use the 50% rule: if the repair costs more than 50% of a new appliance AND the unit is over 8 years old, replacement often makes more sense. For premium brands (Sub-Zero, Viking, Miele), the threshold is higher because replacement costs are significantly more.' },
  { q: 'Does FixitBay offer financing for expensive repairs?', a: 'For repairs over $300, we offer flexible payment options. We also provide detailed estimates before starting any work, so you can make an informed decision. Our 180-day warranty on parts and labor gives you confidence that the repair will last.' },
];

const ApplianceRepairCostSanFrancisco = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = [
    { "@context": "https://schema.org", "@type": "Article",
      "headline": "Appliance Repair Cost in San Francisco 2026 — Complete Price Guide",
      "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
      "publisher": { "@type": "Organization", "name": "FixitBay LLC" },
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-17",
      "mainEntityOfPage": "https://fixitbay.net/blog/appliance-repair-cost-san-francisco"
    },
    { "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question", "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    { "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" },
        { "@type": "ListItem", "position": 3, "name": "Appliance Repair Cost SF", "item": "https://fixitbay.net/blog/appliance-repair-cost-san-francisco" }
      ]
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <SEOMetaTags
        title="Appliance Repair Cost in San Francisco 2026 — Complete Price Guide"
        description="Appliance repair cost in San Francisco 2026. Complete pricing for refrigerators, washers, dryers, dishwashers & more. $60 diagnostic applied. 180-day warranty."
        canonical="https://fixitbay.net/blog/appliance-repair-cost-san-francisco"
      />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <style>{`
        .art-h1{font-size:38px !important}
        @media(max-width:640px){
          .art-h1{font-size:24px !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3B5D 100%)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,87,34,0.15)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
            <Calendar size={14} style={{ color: '#FF5722' }} />
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: '#FF5722' }}>Updated March 2026</span>
          </div>
          <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
            Appliance Repair Cost in San Francisco 2026 — Complete Price Guide
          </h1>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
            What does appliance repair actually cost in the Bay Area? We break down pricing for every major appliance, explain the $60 diagnostic model, and help you decide between repair and replacement.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        <p style={P}>Appliance repair costs in San Francisco run 15–25% higher than the national average. Labor rates, insurance, and the cost of operating in a dense urban environment all contribute. But knowing what to expect before you call can save you time, stress, and money.</p>
        <p style={P}>This guide covers <strong>real pricing from FixitBay service calls in 2026</strong> — not national averages from generic websites. Every price below reflects what San Francisco and Bay Area residents actually pay.</p>

        {/* ── How Pricing Works ── */}
        <h2 id="how-pricing" style={H2S}><DollarSign size={22} style={{ color: '#FF5722', display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />How Appliance Repair Pricing Works</h2>

        <p style={P}>At FixitBay, every service call starts with a <strong>$60 diagnostic fee</strong>. Here's what that includes and how it works:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, margin: '16px 0 24px' }}>
          {[
            { step: '1', title: 'Schedule', desc: 'Book online or call. Same-day available if you call before noon.' },
            { step: '2', title: 'Diagnose', desc: 'Technician inspects the appliance, identifies the problem, and quotes an exact repair price.' },
            { step: '3', title: 'Decide', desc: 'You approve or decline. If you approve, the $60 is applied to your total. If not, you pay only $60.' },
          ].map(item => (
            <div key={item.step} style={{ background: '#F8F5F0', borderRadius: 4, padding: '20px', textAlign: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{item.step}</div>
              <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{item.title}</p>
              <p style={{ fontFamily: F, fontSize: 13, color: '#4A5568', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p style={P}>The $60 diagnostic is the only upfront cost. You'll never be surprised by hidden fees. If the repair isn't worth it, you walk away with a professional diagnosis for just $60.</p>

        {/* ── Complete Pricing Table ── */}
        <h2 id="pricing-table" style={H2S}>Complete Appliance Repair Pricing — San Francisco 2026</h2>
        <p style={P}>These prices include the $60 diagnostic fee (applied to repair cost). Parts and labor are covered by our 180-day warranty.</p>

        <div style={{ overflowX: 'auto', margin: '16px 0 32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
            <thead>
              <tr style={{ background: '#0D1B2A', color: '#fff' }}>
                <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Appliance</th>
                <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Cost Range</th>
                <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Common Repairs</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700 }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_DATA.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#F8F5F0' : '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ padding: '12px 16px', color: '#1A1A1A', fontWeight: 600 }}>{row.appliance}</td>
                  <td style={{ padding: '12px 16px', color: '#FF5722', fontWeight: 700 }}>{row.range}</td>
                  <td style={{ padding: '12px 16px', color: '#4A5568', fontSize: 13 }}>{row.common}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <Link to={row.link} style={{ color: '#FF5722', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>View <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Breakdown by Appliance ── */}
        <h2 id="refrigerator-cost" style={H2S}>Refrigerator Repair Cost in San Francisco</h2>
        <p style={P}>Refrigerator repairs are the most requested service in our Bay Area practice. Costs range from $180 for a simple thermostat swap to $450+ for compressor work. The most common repairs we perform:</p>
        <ul style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 2.2, paddingLeft: 20, marginBottom: 24 }}>
          <li><strong>Thermostat replacement:</strong> $150–$220</li>
          <li><strong>Evaporator fan motor:</strong> $180–$280</li>
          <li><strong>Compressor (with refrigerant):</strong> $350–$550</li>
          <li><strong>Door seal/gasket:</strong> $80–$180</li>
          <li><strong>Start relay:</strong> $80–$150</li>
        </ul>
        <p style={P}>San Francisco's fog-belt climate means refrigerators in Sunset, Richmond, and Daly City work harder to maintain temperature in unconditioned garages. This can shorten compressor life by 2–3 years compared to units in climate-controlled kitchens.</p>

        <h2 id="washer-dryer-cost" style={H2S}>Washer & Dryer Repair Cost</h2>
        <p style={P}>Washer repairs average $150–$350 in San Francisco. Front-load washers tend to cost more due to more complex components (drum bearings, door boots). Dryer repairs are typically less expensive at $120–$300, with thermal fuse and heating element being the most common fixes.</p>
        <p style={P}>In San Francisco's multi-unit buildings, stackable washer-dryer combos require technicians experienced with compact spaces. FixitBay technicians regularly service units in Victorian flats, in-law units, and basement laundry rooms.</p>

        <h2 id="dishwasher-cost" style={H2S}>Dishwasher Repair Cost</h2>
        <p style={P}>Dishwasher repairs in SF run $140–$320. The most common issue we see is a failing drain pump ($120–$200), followed by spray arm problems and control board failures. Built-in dishwashers in San Francisco's older kitchens sometimes have non-standard installations that add 15–30 minutes to service time.</p>

        {/* ── SF Market Context ── */}
        <h2 id="sf-market" style={H2S}>Why Appliance Repair Costs More in San Francisco</h2>
        <p style={P}>If you've gotten quotes from multiple companies, you've probably noticed SF rates are higher than what you see online. Here's why:</p>
        <div style={{ margin: '16px 0 24px' }}>
          {[
            { factor: 'Labor rates', detail: 'Licensed technicians in SF earn $35–$55/hour, reflecting the cost of living and certification requirements.' },
            { factor: 'Insurance & licensing', detail: 'California requires contractors to carry liability insurance, workers comp, and maintain active licenses — adding $2,000–$5,000/year per technician.' },
            { factor: 'Parking & logistics', detail: 'Service trucks pay meter/garage fees of $30–$50 per service call. Multi-unit buildings often require double-parking permits or extended walking with heavy tools.' },
            { factor: 'Parts markup', detail: 'Stocking common parts on the truck for same-visit repairs means carrying $8,000–$15,000 in inventory. This convenience is built into pricing.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <CheckCircle size={18} style={{ color: '#FF5722', flexShrink: 0, marginTop: 2 }} />
              <div><strong style={{ fontFamily: F, fontSize: 14, color: '#1A1A1A' }}>{item.factor}:</strong> <span style={{ fontFamily: F, fontSize: 14, color: '#4A5568' }}>{item.detail}</span></div>
            </div>
          ))}
        </div>

        {/* ── 180-Day Warranty ── */}
        <h2 id="warranty" style={H2S}>FixitBay 180-Day Warranty</h2>
        <p style={P}>Every repair includes our <strong>180-day warranty on parts and labor</strong>. If the same issue recurs within 180 days, we return and fix it at no additional cost. This applies to all appliance types and all service areas including San Francisco, Daly City, South San Francisco, Marin County, and the entire Bay Area.</p>

        {/* ── FAQ ── */}
        <h2 id="faq" style={H2S}>Frequently Asked Questions</h2>
        <div data-testid="faq-section" style={{ margin: '16px 0 32px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <button
                data-testid={`faq-toggle-${i}`}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontFamily: F, fontWeight: 600, fontSize: 15, color: '#1A1A1A', paddingRight: 16 }}>{faq.q}</span>
                {openFAQ === i ? <ChevronUp size={18} style={{ color: '#FF5722', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#999', flexShrink: 0 }} />}
              </button>
              {openFAQ === i && (
                <p style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 1.7, padding: '0 0 16px', margin: 0 }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* ── Internal Links ── */}
        <h2 style={H2S}>Explore Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, margin: '16px 0 32px' }}>
          {[
            { to: '/san-francisco-refrigerator-repair', label: 'SF Refrigerator Repair', desc: 'Same-day, $180–$450' },
            { to: '/san-francisco-washer-repair', label: 'SF Washer Repair', desc: 'Same-day, $150–$350' },
            { to: '/san-francisco-dryer-repair', label: 'SF Dryer Repair', desc: 'Same-day, $120–$300' },
            { to: '/san-francisco-dishwasher-repair', label: 'SF Dishwasher Repair', desc: 'Same-day, $140–$320' },
            { to: '/service-areas', label: 'All Service Areas', desc: '22 cities covered' },
            { to: '/book', label: 'Book a Repair', desc: '$60 diagnostic, same-day' },
          ].map(link => (
            <Link key={link.to} to={link.to} style={{ display: 'block', padding: '16px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; }}>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: 6 }}><ArrowRight size={14} style={{ color: '#FF5722' }} />{link.label}</span>
              <span style={{ fontFamily: F, fontSize: 12, color: '#4A5568', marginTop: 4, display: 'block' }}>{link.desc}</span>
            </Link>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ background: '#0D1B2A', borderRadius: 8, padding: '32px', textAlign: 'center', margin: '32px 0' }}>
          <p style={{ fontFamily: F, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 8 }}>Get an exact repair quote today</p>
          <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty. Same-day service available.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+17605435733" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', padding: '12px 24px', borderRadius: 4, fontFamily: F, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}><Phone size={16} /> (760) 543-5733</a>
            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '12px 24px', borderRadius: 4, fontFamily: F, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}>Book Online <ArrowRight size={16} /></Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ApplianceRepairCostSanFrancisco;

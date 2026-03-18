import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ChevronDown, ChevronUp, Calendar, DollarSign, Wrench, AlertTriangle, Flame, Zap } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';

const F = "'Montserrat', sans-serif";
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 26, color: '#0D1B2A', margin: '48px 0 16px', lineHeight: 1.3 };
const H3S = { fontFamily: F, fontWeight: 700, fontSize: 20, color: '#1A3B5D', margin: '28px 0 10px' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.75, margin: '0 0 16px' };

const FAQS = [
  { q: 'How much does dryer repair cost in San Francisco?', a: 'Most dryer repairs in San Francisco cost $120–$300 after FixitBay\'s $60 diagnostic fee. Gas valve replacement runs $150–$250, heating elements $130–$220, and thermal fuse replacement $80–$150. The $60 diagnostic is applied to your repair cost.' },
  { q: 'Can I fix a dryer that\'s not heating myself?', a: 'Some checks are safe for DIY: cleaning the lint trap, checking the circuit breaker, and inspecting the vent for blockages. However, gas dryers require professional service due to gas leak risks, and electrical repairs should only be done by licensed technicians.' },
  { q: 'Does FixitBay offer same-day dryer repair in San Francisco?', a: 'Yes. Call before noon at (760) 543-5733 for same-day dryer repair in San Francisco and surrounding Bay Area cities. We carry common dryer parts on our trucks for first-visit repairs.' },
  { q: 'Should I repair or replace my dryer if it\'s not heating?', a: 'If your dryer is under 8 years old and the repair costs less than 50% of a new unit, repair is usually the better value. If it\'s 10+ years old with a major component failure (motor, drum), replacement may be more cost-effective.' },
  { q: 'Why is my gas dryer running but not getting hot?', a: 'The most common causes for a gas dryer running without heat are a faulty gas valve solenoid, a blown thermal fuse, or a defective igniter. Gas dryers cycle through multiple solenoid valves — if any fail, the burner won\'t ignite. These repairs require a licensed technician.' },
];

const TipBox = ({ label, text, icon: Icon = AlertTriangle }) => (
  <div style={{ background: '#FFF7ED', border: '1px solid rgba(255,87,34,0.25)', borderRadius: 4, padding: '16px 20px', margin: '20px 0', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
    <Icon size={18} style={{ color: '#FF5722', flexShrink: 0, marginTop: 3 }} />
    <div><strong style={{ fontFamily: F, fontSize: 13, color: '#FF5722' }}>{label}</strong><p style={{ fontFamily: F, fontSize: 14, color: '#4A5568', margin: '4px 0 0', lineHeight: 1.6 }}>{text}</p></div>
  </div>
);

const DryerNotHeating = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = [
    { "@context": "https://schema.org", "@type": "Article",
      "headline": "Dryer Not Heating? Common Causes & Repair Cost in San Francisco",
      "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } },
      "publisher": { "@type": "Organization", "name": "FixitBay LLC" },
      "datePublished": "2026-03-10",
      "dateModified": "2026-03-17",
      "mainEntityOfPage": "https://fixitbay.net/blog/dryer-not-heating"
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
        { "@type": "ListItem", "position": 3, "name": "Dryer Not Heating", "item": "https://fixitbay.net/blog/dryer-not-heating" }
      ]
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <SEOMetaTags
        title="Dryer Not Heating? Common Causes & Repair Cost in San Francisco"
        description="Dryer not heating? Gas vs electric causes, DIY checks, and SF repair costs $120-$300. Thermal fuse, heating element, gas valve fixes. Same-day service."
        canonical="https://fixitbay.net/blog/dryer-not-heating"
      />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <style>{`
        .art-h1{font-size:38px !important}
        @media(max-width:640px){
          .art-h1{font-size:26px !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3B5D 100%)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,87,34,0.15)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
            <Calendar size={14} style={{ color: '#FF5722' }} />
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: '#FF5722' }}>Published March 2026</span>
          </div>
          <h1 className="art-h1" data-testid="article-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 720, margin: '0 auto 16px' }}>
            Dryer Not Heating? Common Causes & Repair Cost in San Francisco
          </h1>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
            Your dryer tumbles but clothes stay wet? Here are the most common reasons — for both gas and electric dryers — plus what repairs cost in the SF Bay Area and when DIY isn't enough.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        <p style={P}>A dryer that runs but doesn't produce heat is one of the most common appliance problems we see in San Francisco — especially during the damp winter months when every household relies on their dryer. The good news: most causes are fixable, and many repairs cost under $200.</p>
        <p style={P}>Below, we break down the causes by dryer type (gas vs. electric), explain what you can safely check yourself, and give you real pricing from our Bay Area service calls.</p>

        {/* ── Electric Dryer Section ── */}
        <h2 id="electric" style={H2S}><Zap size={22} style={{ color: '#FF5722', display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />Electric Dryer Not Heating — Common Causes</h2>

        <h3 style={H3S}>1. Blown Thermal Fuse</h3>
        <p style={P}>The thermal fuse is a safety device that cuts power to the heating element if the dryer overheats. Once blown, it won't reset — it must be replaced. This is the single most common reason electric dryers stop heating.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Common cause:</strong> Clogged lint trap or blocked vent hose. San Francisco's older homes often have longer, more convoluted vent runs that trap lint more easily.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> $80–$150 including the $60 diagnostic. Most technicians carry thermal fuses on the truck.</p>

        <h3 style={H3S}>2. Failed Heating Element</h3>
        <p style={P}>Electric dryers use a coiled wire heating element that glows red-hot. Over time, the coil can break or short out. When this happens, the dryer tumbles normally but produces no heat at all.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY check:</strong> If your dryer has a "heat" indicator light and it doesn't illuminate, the heating element may be the culprit.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> $130–$220 in San Francisco, depending on the brand and element type.</p>

        <h3 style={H3S}>3. Faulty Cycling Thermostat</h3>
        <p style={P}>The cycling thermostat regulates dryer temperature by cycling the heating element on and off. When it fails, the dryer may not heat at all or may overheat intermittently. Symptoms include clothes that are still damp after a full cycle or clothes that come out scorching hot.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> $90–$170 in SF. A multimeter test can confirm the failure.</p>

        <h3 style={H3S}>4. Tripped Circuit Breaker (240V Issue)</h3>
        <p style={P}>Electric dryers require a 240-volt circuit with a double breaker. If one leg of the breaker trips, the dryer motor runs (120V) but the heating element doesn't engage (needs full 240V). This is surprisingly common and costs nothing to fix.</p>
        <TipBox label="DIY Fix" text="Check your electrical panel. The dryer breaker should be a double-width switch. Toggle it fully OFF, then back ON. If it trips again immediately, call an electrician — there may be a wiring issue." icon={Zap} />

        {/* ── Gas Dryer Section ── */}
        <h2 id="gas" style={H2S}><Flame size={22} style={{ color: '#FF5722', display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />Gas Dryer Not Heating — Common Causes</h2>

        <h3 style={H3S}>5. Defective Gas Valve Solenoids</h3>
        <p style={P}>Gas dryers use two or three solenoid-operated gas valves to control fuel flow to the burner. These solenoids can fail intermittently — the dryer heats for part of the cycle, then stops. This is the #1 reason gas dryers stop heating in our Bay Area service experience.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> $150–$250 in San Francisco. Both solenoids are typically replaced together.</p>
        <TipBox label="Safety Warning" text="Never attempt to repair gas dryer components yourself. Gas leaks can cause explosions and carbon monoxide poisoning. Always call a licensed technician for gas dryer repairs." icon={AlertTriangle} />

        <h3 style={H3S}>6. Faulty Igniter</h3>
        <p style={P}>The igniter glows red-hot to ignite the gas. When it weakens or breaks, the gas valve won't open (a safety feature). The dryer tumbles but never heats. You may hear the gas valve click but the burner won't light.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>Repair cost:</strong> $120–$200 in SF. Igniter replacement is a straightforward repair for a licensed technician.</p>

        <h3 style={H3S}>7. Blown Thermal Fuse (Gas Dryers Too)</h3>
        <p style={P}>Gas dryers also have thermal fuses. The same lint buildup and vent restriction issues apply. In San Francisco's Victorian and Edwardian homes, dryer vents often route through walls and floors with multiple bends — increasing the risk of lint buildup and thermal fuse failure.</p>

        {/* ── Both Types ── */}
        <h2 id="both" style={H2S}>Causes That Affect Both Gas & Electric Dryers</h2>

        <h3 style={H3S}>8. Clogged Dryer Vent</h3>
        <p style={P}>A blocked or kinked dryer vent is the hidden cause behind many "no heat" complaints. When airflow is restricted, the dryer overheats, trips the thermal fuse, and stops producing heat. In San Francisco, many dryer vents run 15–25 feet through old construction, making them prone to lint accumulation.</p>
        <p style={P}><strong style={{ color: '#1A1A1A' }}>DIY check:</strong> Disconnect the vent hose from the back of the dryer. Run the dryer for 5 minutes. If it heats up, the vent is the problem — clean it out or call a vent cleaning service.</p>
        <TipBox label="SF Tip" text="San Francisco building codes require dryer vents to terminate outside. If your vent exhausts into a crawl space or attic, it's both a fire hazard and a code violation. We see this in pre-1960 homes regularly." icon={AlertTriangle} />

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

        {/* ── Pricing Table ── */}
        <h2 id="pricing" style={H2S}><DollarSign size={22} style={{ color: '#FF5722', display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />Dryer Repair Cost in San Francisco (2026)</h2>
        <div style={{ overflowX: 'auto', margin: '16px 0 24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 14 }}>
            <thead>
              <tr style={{ background: '#0D1B2A', color: '#fff' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Repair</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Cost Range</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Includes Diagnostic?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Thermal Fuse Replacement', '$80–$150', 'Yes ($60 applied)'],
                ['Heating Element Replacement', '$130–$220', 'Yes ($60 applied)'],
                ['Gas Valve Solenoids', '$150–$250', 'Yes ($60 applied)'],
                ['Igniter Replacement', '$120–$200', 'Yes ($60 applied)'],
                ['Cycling Thermostat', '$90–$170', 'Yes ($60 applied)'],
                ['Dryer Belt Replacement', '$100–$180', 'Yes ($60 applied)'],
                ['Motor Replacement', '$200–$350', 'Yes ($60 applied)'],
              ].map(([repair, cost, diag], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#F8F5F0' : '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ padding: '10px 16px', color: '#1A1A1A', fontWeight: 500 }}>{repair}</td>
                  <td style={{ padding: '10px 16px', color: '#FF5722', fontWeight: 700 }}>{cost}</td>
                  <td style={{ padding: '10px 16px', color: '#4A5568' }}>{diag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── When to Call ── */}
        <h2 id="when-to-call" style={H2S}>When to Call a Professional vs. DIY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 24px' }}>
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 4, padding: '20px' }}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#15803D', marginBottom: 12 }}>Safe for DIY</p>
            <ul style={{ fontFamily: F, fontSize: 13, color: '#4A5568', paddingLeft: 16, lineHeight: 2 }}>
              <li>Clean the lint trap and vent</li>
              <li>Reset the circuit breaker</li>
              <li>Check for kinked vent hose</li>
              <li>Test with no-heat/air-dry cycle</li>
            </ul>
          </div>
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 4, padding: '20px' }}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#DC2626', marginBottom: 12 }}>Call a Technician</p>
            <ul style={{ fontFamily: F, fontSize: 13, color: '#4A5568', paddingLeft: 16, lineHeight: 2 }}>
              <li>Any gas dryer repair</li>
              <li>Heating element replacement</li>
              <li>Thermal fuse keeps blowing</li>
              <li>Electrical burning smell</li>
            </ul>
          </div>
        </div>
        <p style={P}>If you smell gas at any point, turn off the dryer, open windows, leave the house, and call your gas company immediately. Do not flip any electrical switches.</p>

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
        <h2 style={H2S}>Related Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, margin: '16px 0 32px' }}>
          {[
            { to: '/dryer-repair', label: 'Dryer Repair Service', desc: 'All brands, same-day' },
            { to: '/san-francisco-dryer-repair', label: 'SF Dryer Repair', desc: 'San Francisco service' },
            { to: '/daly-city-dryer-repair', label: 'Daly City Dryer Repair', desc: 'Daly City service' },
            { to: '/washer-repair', label: 'Washer Repair', desc: 'Companion appliance' },
          ].map(link => (
            <Link key={link.to} to={link.to} style={{ display: 'block', padding: '16px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; }}>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: 6 }}><ArrowRight size={14} style={{ color: '#FF5722' }} />{link.label}</span>
              <span style={{ fontFamily: F, fontSize: 12, color: '#4A5568', marginTop: 4, display: 'block' }}>{link.desc}</span>
            </Link>
          ))}
        </div>

        {/* ── Related Articles ── */}
        <div data-testid="related-articles" style={{ margin: '32px 0' }}>
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#0D1B2A', marginBottom: 16 }}>Related articles</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { title: 'Why Is My Dryer Taking So Long to Dry?', href: '/blog/dryer-taking-too-long' },
              { title: 'Washer Error Codes Explained — What They Mean & How to Fix', href: '/blog/washer-error-codes' },
            ].map((a, i) => (
              <Link key={i} to={a.href} data-testid={`related-article-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', flexShrink: 0, marginLeft: 16 }}>Read article →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: '#0D1B2A', borderRadius: 8, padding: '32px', textAlign: 'center', margin: '32px 0' }}>
          <p style={{ fontFamily: F, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 8 }}>Need dryer repair in San Francisco?</p>
          <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>$60 diagnostic applied to repair. 180-day warranty. Same-day available.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+17605435733" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', padding: '12px 24px', borderRadius: 4, fontFamily: F, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}><Phone size={16} /> (760) 543-5733</a>
            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '12px 24px', borderRadius: 4, fontFamily: F, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}>Book Online <ArrowRight size={16} /></Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DryerNotHeating;

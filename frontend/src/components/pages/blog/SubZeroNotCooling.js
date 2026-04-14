import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import BlogByline from './BlogByline';
import BlogCTA from './BlogCTA';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2S = { fontFamily: F, fontWeight: 800, fontSize: 22, color: '#1A1A1A', borderBottom: '2px solid rgba(255,87,34,0.2)', paddingBottom: 8, margin: '36px 0 16px' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 };
const BOLD = { fontWeight: 700, color: '#1A1A1A' };

const FAQ_ITEMS = [
  { q: "Does Sub-Zero have authorized repair technicians in SF Bay Area?", a: "Sub-Zero maintains an authorized service network, but availability in San Francisco can be limited with long wait times. Independent technicians with Sub-Zero factory training (like FixitBay LLC) can perform the same repairs using genuine OEM parts. The key qualification is sealed system certification \u2014 ask any technician if they\u2019re certified to work on Sub-Zero\u2019s refrigerant system." },
  { q: "How long does Sub-Zero refrigerator repair take?", a: "Most Sub-Zero repairs take 1.5\u20133 hours depending on the issue. Condenser fan or evaporator fan replacement can be done in a single visit. Sealed system repairs (compressor, refrigerant leak) may require a return visit if parts need to be ordered \u2014 Sub-Zero OEM compressors are specialty items. FixitBay LLC offers same- or next-day initial diagnosis." },
  { q: "Is it worth repairing a 15-year-old Sub-Zero refrigerator?", a: "Almost always yes. Sub-Zero refrigerators are designed to last 20+ years with proper maintenance. A $600\u2013$1,100 sealed system repair on a 15-year-old Sub-Zero is 6\u201311% of the $10,000\u2013$14,000 replacement cost. Even a 20-year-old Sub-Zero with a compressor failure is worth repairing if the cabinet, shelving, and door seals are in good condition." },
  { q: "What does Sub-Zero sealed system repair cost in San Francisco?", a: "Sealed system repair (compressor replacement + refrigerant recharge) costs $600\u2013$1,100 in the SF Bay Area depending on the model and compressor type. Sub-Zero uses specialized compressors that cost more than standard brands. This includes the $80 diagnostic (applied toward repair), parts, labor, and refrigerant. 180-day warranty included." },
  { q: "Will repairing my Sub-Zero void the warranty?", a: "If your Sub-Zero is still under manufacturer warranty (typically 5 years full, 12 years sealed system), use Sub-Zero\u2019s authorized network to preserve coverage. For out-of-warranty units, any qualified technician can perform repairs without warranty implications. FixitBay LLC uses genuine Sub-Zero OEM parts on all repairs." },
];

const SubZeroNotCooling = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'article-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Sub-Zero Refrigerator Not Cooling: Causes & Repair Costs in SF", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } }, "datePublished": "2026-04-13", "dateModified": "2026-04-13", "mainEntityOfPage": "https://fixitbay.net/blog/sub-zero-refrigerator-not-cooling" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Sub-Zero Not Cooling", "item": "https://fixitbay.net/blog/sub-zero-refrigerator-not-cooling" } ] } },
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags title="Sub-Zero Refrigerator Not Cooling: Causes & Repair Costs in SF | FixitBay LLC" description="Sub-Zero refrigerator not cooling? Common causes from sealed system failure to fan motors. SF Bay Area repair costs, DIY checks, and when to call a pro." canonical="https://fixitbay.net/blog/sub-zero-refrigerator-not-cooling" />
      <div style={{ fontFamily: F }}>
        <section style={{ background: '#0D1B2A', padding: '72px 24px 48px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={EYE}>LUXURY APPLIANCE REPAIR</div>
            <h1 data-testid="blog-h1" style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>Sub-Zero Refrigerator Not Cooling: What's Wrong & What It Costs</h1>
            <BlogByline dateISO="2026-04-13" dateFormatted="April 13, 2026" readTime="8 min" />
          </div>
        </section>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <article>
            <p style={P}>Sub-Zero refrigerators are engineered to last 20+ years, so when one stops cooling, it's almost always worth repairing. These are $8,000–$14,000 appliances — even a $1,000 repair is a fraction of replacement cost. But Sub-Zero repairs require specialized knowledge that general appliance technicians don't have.</p>
            <p style={P}>Here's what's likely wrong with your Sub-Zero, what it costs to fix in the San Francisco Bay Area, and how to decide whether to repair or replace.</p>

            <h2 style={H2S}>Sub-Zero Sealed System — The Most Common Cause</h2>
            <p style={P}><strong style={BOLD}>How Sub-Zero's dual compressor system works:</strong> Unlike standard refrigerators that use one compressor for both the freezer and fridge, Sub-Zero uses two independent sealed systems — one for the freezer, one for the refrigerator. This design gives precise temperature control but means either side can fail independently.</p>
            <p style={P}><strong style={BOLD}>Refrigerant leak signs:</strong> Frost pattern changes on the evaporator coil (partial frosting instead of uniform coverage), gradually rising temperatures over days or weeks, and the compressor running continuously without cycling off. In some cases, you'll hear a faint hissing sound near the evaporator.</p>
            <p style={P}><strong style={BOLD}>Why Sub-Zero sealed system repair requires specialized training:</strong> Sub-Zero uses R-134a or R-600a refrigerant depending on the model and year. Recovering, leak-testing, and recharging a sealed system requires EPA Section 608 certification and Sub-Zero-specific knowledge of charge amounts (which vary by model). Overcharging or undercharging by even a few ounces degrades performance.</p>
            <p style={P}><strong style={BOLD}>Cost:</strong> $600–$1,100 depending on model and whether the compressor, evaporator, or condenser needs replacement in addition to the refrigerant recharge.</p>

            <h2 style={H2S}>Condenser Fan Motor Failure</h2>
            <p style={P}><strong style={BOLD}>Location:</strong> Behind the lower grille or in the compressor compartment (varies by model). The condenser fan pulls air across the condenser coils to dissipate heat. When it fails, the compressor overheats and shuts down on the overload protector — cycling on and off repeatedly.</p>
            <p style={P}><strong style={BOLD}>DIY diagnosis:</strong> With the refrigerator plugged in, listen near the compressor compartment. You should hear the fan running whenever the compressor runs. If the compressor hums but no fan sound, the fan motor has likely failed.</p>
            <p style={P}><strong style={BOLD}>Cost:</strong> $280–$420 including the OEM fan motor and labor.</p>

            <h2 style={H2S}>Evaporator Fan Motor Failure</h2>
            <p style={P}><strong style={BOLD}>Signs:</strong> The freezer stays cold (because the compressor and its sealed system are working) but the refrigerator compartment is warm. This is because the evaporator fan circulates cold air from the evaporator into the fridge compartment. When it fails, cold air stays trapped in the freezer.</p>
            <p style={P}>This is one of the most common Sub-Zero service calls and one of the most straightforward to repair.</p>
            <p style={P}><strong style={BOLD}>Cost:</strong> $250–$380 including the OEM fan motor and labor.</p>

            {/* Mid-article CTA */}
            <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '24px 28px', textAlign: 'center', margin: '32px 0' }}>
              <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>Need Sub-Zero repair in the Bay Area?</p>
              <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>$80 diagnostic, same- or next-day. Call <a href="tel:7605435733" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>(760) 543-5733</a> or <a href="/book" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>book online</a>.</p>
            </div>

            <h2 style={H2S}>Control Board (Controller) Issues</h2>
            <p style={P}><strong style={BOLD}>Symptoms:</strong> Erratic temperatures (swinging between 32°F and 45°F), error codes on the display panel, or the compressor not activating at all despite power. Sub-Zero's electronic controller manages both sealed systems, defrost cycles, and fan operation.</p>
            <p style={P}>A failing controller can mimic almost any other symptom — which is why proper diagnosis is critical before ordering parts. A $350 controller replacement won't fix a $600 sealed system leak.</p>
            <p style={P}><strong style={BOLD}>Cost:</strong> $350–$550 for controller replacement including programming and testing.</p>

            <h2 style={H2S}>Why Sub-Zero Repair Is Worth It (Cost Comparison)</h2>
            <div style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '24px 28px', marginBottom: 16 }}>
              <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 16 }}>Sub-Zero Repair vs. Replacement Math</p>
              <div style={{ fontFamily: F, fontSize: 14, color: '#4A5568', lineHeight: 2 }}>
                New Sub-Zero 36" integrated refrigerator: <strong style={BOLD}>$8,000–$14,000</strong><br/>
                Average Sub-Zero repair: <strong style={BOLD}>$450–$850</strong><br/>
                Most expensive repair (sealed system): <strong style={BOLD}>$600–$1,100</strong><br/>
                <br/>
                Even a $1,100 sealed system repair = <strong style={{ color: '#FF5722' }}>8–12% of replacement cost</strong>
              </div>
            </div>
            <p style={P}>For comparison: if your Honda Civic needed a $600 repair vs. buying a new $30,000 car, you'd repair it without hesitation. Sub-Zero repair follows the same logic — the repair-to-replacement ratio makes repair the clear financial choice at almost any age.</p>

            <h2 style={H2S}>Sub-Zero Service in San Francisco & Marin County</h2>
            <p style={P}>Sub-Zero refrigerators are concentrated in San Francisco's Pacific Heights, Noe Valley, Russian Hill, and Marina neighborhoods, as well as Marin County communities including Mill Valley, Tiburon, Belvedere, Sausalito, and Ross. These are neighborhoods where kitchens routinely feature $15,000–$30,000 in built-in appliances.</p>
            <p style={P}>FixitBay LLC's technician Andrei is factory-trained on Sub-Zero and Wolf appliances. He carries OEM diagnostic tools and common Sub-Zero parts including fan motors, thermistors, and door gaskets. For sealed system repairs requiring compressor replacement, parts are ordered directly from Sub-Zero's OEM supply chain — typically 2-3 business days to the Bay Area.</p>
            <p style={P}>$80 diagnostic applied toward repair. 180-day warranty on all Sub-Zero repairs. Same- or next-day appointments available throughout San Francisco and Marin County.</p>

            {/* FAQ */}
            <div id="faq" data-testid="faq-section" style={{ border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28, margin: '32px 0' }}>
              <div style={EYE}>FAQ</div>
              <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A', marginBottom: 20 }}>Frequently Asked Questions</h2>
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className="faq-q" data-testid={`faq-${i}`} style={{ background: '#fff', border: openFaq === i ? 'none' : '1px solid rgba(0,0,0,0.08)', borderLeft: openFaq === i ? '3px solid #FF5722' : '1px solid rgba(0,0,0,0.08)', borderRadius: 4, marginBottom: 8, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px' }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#1A1A1A', flex: 1, paddingRight: 12 }}>{faq.q}</span>
                    <ChevronDown size={18} style={{ color: '#FF5722', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </div>
                  {openFaq === i && <div style={{ padding: '0 16px 16px' }}><p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{faq.a}</p></div>}
                </div>
              ))}
            </div>

            <h2 style={H2S}>Related Articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {[
                { title: 'Refrigerator Not Cooling? 8 Causes & Fixes', href: '/blog/refrigerator-not-cooling' },
                { title: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
                { title: 'Appliance Repair Cost in San Francisco', href: '/blog/appliance-repair-cost-san-francisco' },
              ].map((a, i) => (
                <Link key={i} to={a.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4, textDecoration: 'none' }}>
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#0D1B2A' }}>{a.title}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>Read &rarr;</span>
                </Link>
              ))}
            </div>
          </article>
        </div>

        <BlogCTA />
      </div>
    </>
  );
};

export default SubZeroNotCooling;

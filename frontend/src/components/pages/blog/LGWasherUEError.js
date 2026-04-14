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
  { q: "Does UE mean my LG washer is broken?", a: "Not usually. UE means the load is unbalanced \u2014 most of the time, redistributing the clothes and running rinse+spin fixes it. If UE appears on every load regardless of size, the problem is mechanical: worn shock absorbers or a failing drum bearing. Those require repair but are still cheaper than replacing the washer." },
  { q: "Why does my LG washer keep saying UE even with a small load?", a: "Small loads are actually the most common cause of UE. A single heavy item (jeans, towels) clumps to one side during spin. The fix: always wash heavy items in groups of 2\u20133 similar-weight items. If UE happens with properly balanced loads, check the leveling feet and then suspect worn shock absorbers." },
  { q: "How much does it cost to fix an LG washer UE error in San Francisco?", a: "If the issue is shock absorbers: $180\u2013$280 including parts and labor. If it\u2019s a drum bearing: $350\u2013$550 (expensive but still worth it \u2014 a new LG front-loader costs $800\u2013$1,400). FixitBay LLC charges an $80 diagnostic that\u2019s applied toward the repair cost." },
  { q: "How long does it take to replace LG washer shock absorbers?", a: "About 60\u201390 minutes. The washer needs to be tilted or laid on its side to access the shocks underneath. Our technician carries common LG shock absorbers and can usually complete the repair in a single visit. Drum bearing replacement takes 2\u20133 hours due to the disassembly required." },
];

const LGWasherUEError = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'article-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "LG Washer UE / UB Error Code: How to Fix an Unbalanced Load", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } }, "datePublished": "2026-04-13", "dateModified": "2026-04-13", "mainEntityOfPage": "https://fixitbay.net/blog/lg-washer-ue-error" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "LG Washer UE Error", "item": "https://fixitbay.net/blog/lg-washer-ue-error" } ] } },
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags title="LG Washer UE / UB Error Code: How to Fix an Unbalanced Load | FixitBay LLC" description="LG washer showing UE or UB error? 7 fixes from load redistribution to shock absorber replacement. SF Bay Area repair costs included." canonical="https://fixitbay.net/blog/lg-washer-ue-error" />
      <div style={{ fontFamily: F }}>
        <section style={{ background: '#0D1B2A', padding: '72px 24px 48px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={EYE}>WASHER TROUBLESHOOTING</div>
            <h1 data-testid="blog-h1" style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>LG Washer UE Error (Unbalanced Load): 7 Fixes That Actually Work</h1>
            <BlogByline dateISO="2026-04-13" dateFormatted="April 13, 2026" readTime="7 min" />
          </div>
        </section>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <article>
            <p style={P}>The UE error code on LG washers means the drum load is unbalanced and the washer can't spin safely. On newer LG models, you might see "UB" instead — same meaning, same fixes. This is LG's single most common error code, and in most cases, it's not a sign of a broken washer.</p>
            <p style={P}>Here are 7 fixes ranked from simplest (try first) to most complex (call a technician).</p>

            <h2 style={H2S}>What Causes the UE Error Code</h2>
            <p style={P}>The UE code triggers when LG's load-sensing system detects that weight is unevenly distributed inside the drum during the spin cycle. The washer stops spinning to prevent excessive vibration, drum damage, and potential water leaks from a violently rocking machine.</p>
            <p style={P}>Common causes include:</p>
            <ul style={{ margin: '0 0 16px 20px', fontFamily: F, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
              <li style={{ marginBottom: 8 }}>Small or tangled load bunched to one side</li>
              <li style={{ marginBottom: 8 }}>Mixed item types (one heavy towel + lightweight shirts)</li>
              <li style={{ marginBottom: 8 }}>Washer not sitting level on the floor</li>
              <li style={{ marginBottom: 8 }}>Worn shock absorbers or suspension rods (mechanical wear)</li>
              <li style={{ marginBottom: 8 }}>Drum bearing failure (advanced — usually accompanied by grinding noise)</li>
            </ul>

            <h2 style={H2S}>Quick Fixes to Try Right Now</h2>
            <p style={P}><strong style={BOLD}>1. Redistribute the load:</strong> Open the door, pull apart any tangled items, and spread them evenly around the drum. Close and select Rinse+Spin. This fixes UE about 70% of the time.</p>
            <p style={P}><strong style={BOLD}>2. Wash heavy items in groups:</strong> Never wash a single heavy item (comforter, jeans, bath mat) alone. Add 2-3 similar-weight items to balance the drum. This is the #1 preventive measure.</p>
            <p style={P}><strong style={BOLD}>3. Check and adjust leveling feet:</strong> Place a bubble level on top of the washer front-to-back and side-to-side. All four feet should be firmly on the floor — no rocking. Adjust the front feet by turning them clockwise (lower) or counterclockwise (higher). The rear feet on most LG models are self-adjusting: tilt the washer forward about 4 inches, then set it back down.</p>
            <p style={P}><strong style={BOLD}>4. Don't overload or underload:</strong> LG front-loaders work best at 75% capacity. Too full = items can't move freely. Too empty = items clump to one side.</p>

            <h2 style={H2S}>Why LG Front-Loaders Are UE-Prone</h2>
            <p style={P}>LG front-load washers spin at 1,200-1,400 RPM — significantly faster than top-loaders (600-800 RPM). At these speeds, even a small imbalance creates powerful centrifugal force. LG's TrueBalance anti-vibration system uses stainless steel ball bearings suspended in liquid silicone to counteract vibration, but it has limits.</p>
            <p style={P}>When the TrueBalance system can't compensate — due to extreme imbalance, worn components, or a load that's too small — the washer triggers UE and stops the spin cycle. This is actually a safety feature that protects both your washer and your floor.</p>

            {/* Mid-article CTA */}
            <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '24px 28px', textAlign: 'center', margin: '32px 0' }}>
              <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>Need washer repair in the Bay Area?</p>
              <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>$80 diagnostic, same- or next-day. Call <a href="tel:7605435733" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>(760) 543-5733</a> or <a href="/book" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>book online</a>.</p>
            </div>

            <h2 style={H2S}>When Shock Absorbers Need Replacement</h2>
            <p style={P}><strong style={BOLD}>The test:</strong> Open the washer door and push the drum firmly to one side. Release it. If the drum swings back and forth more than once or moves more than 1 inch, the shock absorbers are worn.</p>
            <p style={P}>LG front-loaders have 2-4 shock absorbers (depending on model) that dampen drum movement during spin. Over time — typically after 5-8 years of regular use — the hydraulic fluid inside the shocks degrades and they lose damping force. The result: excessive vibration, UE errors on normal loads, and sometimes a loud banging noise during spin.</p>
            <p style={P}><strong style={BOLD}>Replacement cost in SF Bay Area:</strong> $180–$280 including parts and labor. Our technician carries common LG shock absorbers and can usually complete the repair in a single visit (60-90 minutes).</p>

            <h2 style={H2S}>Drum Bearing Failure (Advanced)</h2>
            <p style={P}><strong style={BOLD}>Signs:</strong> Grinding or rumbling noise during spin + UE error. The noise gets progressively louder over weeks. You may also notice rust-colored water staining on clothes — this is bearing seal leakage.</p>
            <p style={P}>Drum bearings support the inner tub and allow it to spin freely. When they fail, the drum wobbles and triggers the UE imbalance sensor. This is a more involved repair: the entire outer tub must be split apart to access the bearings.</p>
            <p style={P}><strong style={BOLD}>Cost:</strong> $350–$550 including parts and labor in the SF Bay Area. This is expensive but still significantly less than a new LG front-loader ($800–$1,400). For washers under 8 years old, bearing replacement is almost always worth it.</p>

            <h2 style={H2S}>When to Call a Technician</h2>
            <p style={P}>Call a professional if:</p>
            <ul style={{ margin: '0 0 16px 20px', fontFamily: F, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
              <li style={{ marginBottom: 8 }}>UE appears on every load regardless of size or balance</li>
              <li style={{ marginBottom: 8 }}>You hear grinding, banging, or rumbling during spin</li>
              <li style={{ marginBottom: 8 }}>The drum moves more than 1 inch when pushed side-to-side</li>
              <li style={{ marginBottom: 8 }}>You see rust-colored staining on clothes after washing</li>
              <li style={{ marginBottom: 8 }}>The washer vibrates excessively even when level</li>
            </ul>
            <p style={P}>FixitBay LLC repairs all LG washer models including the WM3600, WM4000, and WM9000 series. $80 diagnostic applied toward repair. 180-day warranty.</p>

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
                { title: 'Washer Error Codes Guide', href: '/blog/washer-error-codes' },
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

export default LGWasherUEError;

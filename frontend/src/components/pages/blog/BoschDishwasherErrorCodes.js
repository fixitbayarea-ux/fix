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
  { q: "How do I reset a Bosch dishwasher after an error code?", a: "Press and hold the Start button for 3\u20135 seconds until the display clears. Then close the door and start a new cycle. For persistent codes, turn off the breaker for 60 seconds, then turn it back on. If the code returns after a full reset, the underlying problem hasn\u2019t been fixed and needs diagnosis." },
  { q: "Does E24 mean my Bosch dishwasher needs a new pump?", a: "Not necessarily. E24 means the dishwasher can\u2019t drain, but the cause is usually a clogged filter or kinked drain hose \u2014 not a failed pump. Clean the filter first, check the drain hose for kinks, and clear the air gap. If the code persists after all that, then the pump may need replacement ($280\u2013$380 with labor)." },
  { q: "How much does it cost to fix a Bosch dishwasher E24 error in SF?", a: "If the fix is a clogged filter or hose, it\u2019s often resolved during the $80 diagnostic visit at no extra cost. If the drain pump needs replacement, expect $280\u2013$380 total (parts + labor). Control board issues causing E24 run $350\u2013$480. FixitBay LLC applies the $80 diagnostic toward any repair." },
  { q: "Can I fix Bosch E15 myself or do I need a technician?", a: "You can try tilting the dishwasher forward about 15 degrees to let water drain from the base pan, then let it dry for 24 hours. If E15 clears, monitor for recurrence. If it comes back, there\u2019s an active leak (door seal, hose, or pump seal) that requires a technician to find and fix. Do not run the dishwasher with E15 active \u2014 it can cause water damage." },
];

const BoschDishwasherErrorCodes = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'article-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Bosch Dishwasher Error Codes: E24, E25, E15 & What They Mean", "author": { "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/navbar-logo-new-112.webp" } }, "datePublished": "2026-04-13", "dateModified": "2026-04-13", "mainEntityOfPage": "https://fixitbay.net/blog/bosch-dishwasher-error-codes" } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }, { "@type": "ListItem", "position": 3, "name": "Bosch Dishwasher Error Codes", "item": "https://fixitbay.net/blog/bosch-dishwasher-error-codes" } ] } },
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags title="Bosch Dishwasher Error Codes: E24, E25, E15 & What They Mean | FixitBay LLC" description="Bosch dishwasher showing E24, E25, or E15? Learn what each error code means, DIY fixes, and when to call a pro. SF Bay Area repair pricing included." canonical="https://fixitbay.net/blog/bosch-dishwasher-error-codes" />
      <div style={{ fontFamily: F }}>
        <section style={{ background: '#0D1B2A', padding: '72px 24px 48px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={EYE}>DISHWASHER TROUBLESHOOTING</div>
            <h1 data-testid="blog-h1" style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>Bosch Dishwasher Error Codes: What Each Code Means & How to Fix It</h1>
            <BlogByline dateISO="2026-04-13" dateFormatted="April 13, 2026" readTime="7 min" />
          </div>
        </section>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <article>
            <p style={P}>Bosch dishwashers are the most popular premium dishwasher brand in the San Francisco Bay Area — and for good reason. They're quiet, efficient, and built to last. But when something goes wrong, Bosch communicates through error codes on the display panel. Understanding what these codes mean can save you time, money, and the frustration of unnecessary service calls.</p>
            <p style={P}>Here's a complete guide to the most common Bosch dishwasher error codes, what causes them, what you can fix yourself, and when to call a licensed technician.</p>

            <h2 style={H2S}>E24 — Dishwasher Not Draining (Most Common)</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> The dishwasher cannot drain water from the tub within the expected time. This is the single most common Bosch error code — our technicians see it on roughly 40% of all Bosch service calls in the Bay Area.</p>
            <p style={P}><strong style={BOLD}>Common causes:</strong></p>
            <ul style={{ margin: '0 0 16px 20px', fontFamily: F, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
              <li style={{ marginBottom: 8 }}>Clogged or dirty filter basket (check and clean first — this fixes 60%+ of E24 cases)</li>
              <li style={{ marginBottom: 8 }}>Kinked or clogged drain hose behind the dishwasher</li>
              <li style={{ marginBottom: 8 }}>Clogged air gap on the countertop (required by SF building code)</li>
              <li style={{ marginBottom: 8 }}>Garbage disposal knockout plug not removed (common in new installations)</li>
              <li style={{ marginBottom: 8 }}>Failed drain pump motor (less common, but requires replacement)</li>
            </ul>
            <p style={P}><strong style={BOLD}>DIY fix:</strong> Remove and clean the filter assembly at the bottom of the tub. Check the drain hose for kinks. Clear the air gap cap. If the code persists after cleaning all three, the drain pump likely needs professional service.</p>

            <h2 style={H2S}>E25 — Drain Pump Cover Blocked</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> Something is physically blocking the drain pump cover — usually broken glass, a piece of food, or a small utensil that slipped through the filter.</p>
            <p style={P}><strong style={BOLD}>How to access and clean:</strong> Remove the bottom rack, then remove the filter assembly. The pump cover is the round cap underneath. Twist it counterclockwise to remove. Clear any debris. Reinstall and run a rinse cycle to test. <strong>Safety:</strong> Unplug the dishwasher or turn off the breaker before reaching into the pump area — broken glass is a common culprit.</p>

            <h2 style={H2S}>E15 — Water in Base Pan (Leak Detection)</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> The float switch in the base pan detected water where it shouldn't be. Bosch's Aquastop system shuts everything down to prevent flooding. This is a safety feature — the dishwasher will not run until the water is removed and the cause is fixed.</p>
            <p style={P}><strong style={BOLD}>Common causes:</strong> door seal degradation, leaking hose connection, cracked pump housing, or a faulty inlet valve. In older Bosch units (10+ years), the door seal is the most common culprit.</p>
            <p style={P}><strong style={BOLD}>Emergency fix:</strong> Tilt the dishwasher forward about 15 degrees to drain water from the base pan through the front. Place towels underneath. Let it dry for 24 hours. If E15 clears, monitor closely. If it returns, there's an active leak that needs professional diagnosis.</p>
            <p style={{ ...P, fontWeight: 600, color: '#C0362C' }}>This error almost always requires a technician to properly diagnose and repair the source of the leak.</p>

            {/* Mid-article CTA */}
            <div style={{ background: '#0D1B2A', borderRadius: 4, borderTop: '3px solid #FF5722', padding: '24px 28px', textAlign: 'center', margin: '32px 0' }}>
              <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>Need Bosch dishwasher repair in the Bay Area?</p>
              <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>$80 diagnostic, same- or next-day. Call <a href="tel:7605435733" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>(760) 543-5733</a> or <a href="/book" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 700 }}>book online</a>.</p>
            </div>

            <h2 style={H2S}>E09 — Heating Element Failure</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> The dishwasher's heating element cannot reach the target temperature. Your dishes come out cold and possibly not sanitized. On Bosch models with a drying cycle, E09 also means no drying heat.</p>
            <p style={P}>This is not a DIY fix — the heating element is integrated into the sump assembly on most Bosch models and requires disassembly. Replacement cost: $300–$450 including labor in the SF Bay Area.</p>

            <h2 style={H2S}>E23 — Drain Pump Failure (Electrical Fault)</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> The control board cannot communicate with the drain pump motor. This is different from E24/E25 — it's an electrical failure, not a blockage. The pump motor may have burned out, or there's a wiring issue between the board and the pump.</p>
            <p style={P}>Replacement cost: $280–$380 for the pump motor, or $350–$480 if the control board is at fault.</p>

            <h2 style={H2S}>E17 — Water Temperature Too High</h2>
            <p style={P}><strong style={BOLD}>What it means:</strong> Water entering the dishwasher is above the safe temperature threshold (typically above 175°F). This can be caused by a malfunctioning home water heater, a failed dishwasher inlet valve that's only allowing hot water through, or a stuck heating element that won't turn off.</p>
            <p style={P}><strong style={BOLD}>First check:</strong> Test your home water heater setting — it should be at 120°F. If the water heater is set correctly, the issue is likely the inlet valve or heating element, which requires a technician.</p>

            <h2 style={H2S}>When Error Codes Require Professional Repair</h2>
            <p style={P}>Some Bosch error codes are safe to troubleshoot yourself — E24 (clean the filter), E25 (clear the pump cover), and E17 (check water heater). But these situations need a licensed technician:</p>
            <ul style={{ margin: '0 0 16px 20px', fontFamily: F, fontSize: 15, color: '#4A5568', lineHeight: 1.8 }}>
              <li style={{ marginBottom: 8 }}><strong>E15:</strong> Active leak detection — water damage risk if not properly diagnosed</li>
              <li style={{ marginBottom: 8 }}><strong>E09:</strong> Heating element integrated into sump — requires disassembly</li>
              <li style={{ marginBottom: 8 }}><strong>E23:</strong> Electrical fault — improper repair can damage the control board</li>
              <li style={{ marginBottom: 8 }}><strong>Recurring E24:</strong> If cleaning doesn't fix it, the drain pump motor needs replacement</li>
              <li style={{ marginBottom: 8 }}><strong>Any code that returns after reset:</strong> The underlying problem hasn't been addressed</li>
            </ul>
            <p style={P}>FixitBay LLC technicians are experienced with all Bosch dishwasher models including the 100, 300, 500, 800, and Benchmark series. $80 diagnostic applied toward repair. 180-day warranty on all parts and labor.</p>

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

            {/* Related */}
            <h2 style={H2S}>Related Articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {[
                { title: 'Dishwasher Not Draining? 7 Causes & Fixes', href: '/blog/dishwasher-not-draining' },
                { title: 'Appliance Repair Cost in San Francisco', href: '/blog/appliance-repair-cost-san-francisco' },
                { title: 'When to Repair vs Replace', href: '/blog/when-to-repair-vs-replace' },
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

export default BoschDishwasherErrorCodes;

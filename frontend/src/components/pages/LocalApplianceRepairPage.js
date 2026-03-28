import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

const PROBLEMS = [
  { icon: '\uD83D\uDD0D', title: 'Finding a Reliable Local Technician', body: 'You need a nearby appliance repair company that actually answers the phone, shows up on time, and stands behind their work.' },
  { icon: '\u23F0', title: 'Delays Waiting for Out-of-Area Companies', body: 'National call centers and far-away providers often have long wait times before they can come to your neighborhood.' },
  { icon: '\uD83C\uDFD8\uFE0F', title: 'Unique Bay Area Home Challenges', body: 'San Francisco and Bay Area housing has unique electrical, plumbing and access challenges that require local experience.' },
  { icon: '\uD83C\uDFE2', title: 'Coordinating Service Across Multiple Cities', body: 'Families, landlords, or property managers with homes in different Bay Area cities need one trusted local partner.' },
  { icon: '\uD83D\uDEA8', title: 'Last-Minute Breakdowns Before Events', body: 'Refrigerators, ovens or washers failing right before visitors arrive or a big gathering at home.' },
];

const APPLIANCES = [
  { icon: '\uD83E\uDDCA', title: 'Refrigerator Repair', issues: 'Not cooling, ice maker issues, water dispenser, compressor failure' },
  { icon: '\uD83E\uDEE7', title: 'Washer Repair', issues: "Won't drain, error codes, vibrating, won't spin, door latch" },
  { icon: '\uD83D\uDCA8', title: 'Dryer Repair', issues: "Not heating, taking too long, squeaking, won't start, vent issues" },
  { icon: '\uD83C\uDF7D\uFE0F', title: 'Dishwasher Repair', issues: 'Not draining, not cleaning, leaking, door latch, heating element' },
  { icon: '\uD83D\uDD25', title: 'Oven & Range Repair', issues: 'Not heating, temperature off, igniter issues, control board' },
  { icon: '\uD83C\uDF73', title: 'Cooktop Repair', issues: 'Burner not lighting, element failure, gas valve, induction issues' },
  { icon: '\uD83E\uDDCA', title: 'Freezer Repair', issues: 'Not freezing, frost buildup, compressor, temperature fluctuation' },
  { icon: '\uD83E\uDDCA', title: 'Ice Maker Repair', issues: 'Not making ice, slow production, small cubes, water inlet valve' },
  { icon: '\u2744\uFE0F', title: 'Wine Cooler Repair', issues: 'Temperature issues, compressor, thermostat, cooling fan' },
  { icon: '\uD83D\uDDD1\uFE0F', title: 'Garbage Disposal Repair', issues: 'Jammed, humming, leaking, reset button issues' },
  { icon: '\uD83C\uDF21\uFE0F', title: 'Sub-Zero Repair', issues: 'Premium refrigeration, compressor, sealed system, control board' },
  { icon: '\uD83D\uDD27', title: 'All Major Brands', issues: 'Whirlpool, LG, Samsung, GE, Bosch, Maytag, Sub-Zero, Wolf, and more' },
];

const FAQ_ITEMS = [
  { q: 'Which Bay Area cities do you serve?', a: 'We serve San Francisco, the Peninsula, and Marin County, including Daly City, Pacifica, Brisbane, Mill Valley, San Rafael, Sausalito, Larkspur, and many more.' },
  { q: 'Is your team actually local to the Bay Area?', a: 'Yes. FixitBay LLC is a local, family-owned business. Our technicians live and work in the Bay Area and understand local homes and neighborhoods.' },
  { q: 'Do you offer same- or next-day local appointments?', a: 'Same- or next-day appointments are available in many neighborhoods, especially when you contact us earlier in the day.' },
  { q: 'Can you support multiple properties or units?', a: 'Yes. We regularly help landlords, property managers, and families who have multiple homes or rental units across different Bay Area cities.' },
  { q: 'What is the diagnostic fee?', a: 'We charge a $60 diagnostic fee which is credited toward your repair if you proceed with the fix.' },
];

const BRANDS = [
  { name: 'Whirlpool', logo: '/images/brands/whirlpool.jpg', href: '/whirlpool-appliance-repair' },
  { name: 'GE', logo: '/images/brands/ge.svg', href: '/ge-appliance-repair' },
  { name: 'Samsung', logo: '/images/brands/samsung.svg', href: '/samsung-appliance-repair' },
  { name: 'LG', logo: '/images/brands/lg.svg', href: '/lg-appliance-repair', h: 70 },
  { name: 'Frigidaire', logo: '/images/brands/frigidaire.png', href: '/frigidaire-appliance-repair' },
  { name: 'Maytag', logo: '/images/brands/maytag.svg', href: '/maytag-appliance-repair' },
  { name: 'KitchenAid', logo: '/images/brands/kitchenaid.svg', href: '/kitchenaid-appliance-repair' },
  { name: 'Bosch', logo: '/images/brands/bosch.svg', href: '/bosch-appliance-repair' },
  { name: 'Kenmore', logo: '/images/brands/kenmore.png', href: '/kenmore-appliance-repair', h: 70 },
  { name: 'Amana', logo: '/images/brands/amana.svg', href: '/brands' },
  { name: 'Thermador', logo: '/images/brands/thermador.svg', href: '/thermador-appliance-repair' },
  { name: 'Viking', logo: '/images/brands/viking.svg', href: '/viking-appliance-repair' },
  { name: 'Sub-Zero', logo: '/images/brands/sub-zero.svg', href: '/sub-zero-appliance-repair' },
  { name: 'Wolf', logo: '/images/brands/wolf.svg', href: '/wolf-appliance-repair' },
  { name: 'Miele', logo: '/images/brands/miele.svg', href: '/miele-appliance-repair' },
  { name: 'Jenn-Air', logo: '/images/brands/jenn-air.svg', href: '/brands' },
  { name: 'Electrolux', logo: '/images/brands/electrolux.svg', href: '/brands' },
  { name: 'Fisher & Paykel', logo: '/images/brands/fisher-paykel.svg', href: '/brands' },
];

const SERVICE_CITIES = [
  { name: 'San Francisco', slug: 'san-francisco' }, { name: 'Daly City', slug: 'daly-city' },
  { name: 'South San Francisco', slug: 'south-san-francisco' }, { name: 'San Bruno', slug: 'san-bruno' },
  { name: 'Pacifica', slug: 'pacifica' }, { name: 'Millbrae', slug: 'millbrae' },
  { name: 'Mill Valley', slug: 'mill-valley' }, { name: 'San Rafael', slug: 'san-rafael' },
  { name: 'Sausalito', slug: 'sausalito' }, { name: 'Novato', slug: 'novato' },
  { name: 'Tiburon', slug: 'tiburon' }, { name: 'Corte Madera', slug: 'corte-madera' },
];

const RELATED = [
  { title: 'Refrigerator Repair', href: '/refrigerator-repair' },
  { title: 'Washer Repair', href: '/washer-repair' },
  { title: 'Dryer Repair', href: '/dryer-repair' },
  { title: 'Dishwasher Repair', href: '/dishwasher-repair' },
  { title: 'Oven & Range Repair', href: '/oven-repair' },
  { title: 'Cooktop Repair', href: '/cooktop-repair' },
  { title: 'Wine Cooler Repair', href: '/wine-cooler-repair' },
  { title: 'Ice Maker Repair', href: '/ice-maker-repair' },
  { title: 'All Service Areas', href: '/service-areas' },
];

const LocalApplianceRepairPage = () => {
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const schemas = useMemo(() => [
    { id: 'local-business-schema', data: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FixitBay LLC", "description": "Local appliance repair service in San Francisco and Bay Area. Fast scheduling, $60 diagnostic, 180-day warranty.", "url": "https://fixitbay.net", "telephone": "+17605435733", "priceRange": "$$", "address": { "@type": "PostalAddress", "addressLocality": "San Francisco", "addressRegion": "CA", "postalCode": "94109" }, "areaServed": SERVICE_CITIES.map(c => c.name), "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }, { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "15:00" }], "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "95", "bestRating": "5", "worstRating": "1" } } },
    { id: 'faq-schema', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Which Bay Area cities do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve San Francisco, the Peninsula, and Marin County, including Daly City, Pacifica, Brisbane, Mill Valley, San Rafael, Sausalito, Larkspur, and many more." } },
      { "@type": "Question", "name": "Do you offer same- or next-day local appointments?", "acceptedAnswer": { "@type": "Answer", "text": "Same- or next-day appointments are available in many neighborhoods, especially when you contact us earlier in the day." } },
      { "@type": "Question", "name": "What is the diagnostic fee?", "acceptedAnswer": { "@type": "Answer", "text": "We charge a $60 diagnostic fee which is credited toward your repair if you proceed with the fix." } }
    ] } },
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fixitbay.net/#services" }, { "@type": "ListItem", "position": 3, "name": "Appliance Repair", "item": "https://fixitbay.net/local-appliance-repair" }] } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Local Appliance Repair | Fast Scheduling | FixitBay LLC"
        description="Local appliance repair in San Francisco & Bay Area. $60 diagnostic, 180-day warranty, fast scheduling. Licensed CA technician. Refrigerators, washers, dryers, dishwashers, ovens and more."
        canonical="https://fixitbay.net/local-appliance-repair"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .lar-h1{font-size:44px !important}
          @media(max-width:767px){
            .lar-h1{font-size:28px !important}
            .prob-grid{grid-template-columns:1fr !important}
            .diff-grid{grid-template-columns:1fr !important}
            .how-grid{grid-template-columns:1fr 1fr !important}
            .app-grid{grid-template-columns:1fr !important}
            .brand-grid{grid-template-columns:repeat(3,1fr) !important}
            .area-pills{justify-content:center !important}
            .related-grid{grid-template-columns:1fr !important}
            .stats-bar{gap:24px !important}
            .stats-bar .stat-div{display:none !important}
            h2{/* handled by global index.css */}
          }
          @media(max-width:480px){.how-grid{grid-template-columns:1fr !important}}
          .phone-cta:hover{background:#FF7043 !important}
          .book-cta:hover{background:rgba(255,255,255,0.08) !important}
          .hero-sec:hover{border-color:white !important}
          .faq-q{cursor:pointer;transition:border-color 0.2s}.faq-q:hover{border-color:rgba(255,87,34,0.3) !important}
          .brand-cell:hover{border-color:rgba(255,87,34,0.3) !important;box-shadow:0 2px 8px rgba(0,0,0,0.06) !important}
          .city-pill:hover{border-color:#FF5722 !important;color:#FF5722 !important;background:rgba(255,87,34,0.04) !important}
          .related-card:hover{border-color:rgba(255,87,34,0.4) !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="hero-section" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 540, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 56px', color: '#fff' }}>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <a href="/#services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Appliance Repair</span>
            </nav>
            <div style={EYE}>SAN FRANCISCO &amp; BAY AREA</div>
            <h1 className="lar-h1" data-testid="hero-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 780, margin: '0 auto 16px' }}>
              Local Appliance Repair — Fast Scheduling Across the Bay Area
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto 32px' }}>
              $60 diagnostic fee applied to repair. Licensed technicians. 180-day warranty. Same- or next-day service across San Francisco, Peninsula, and Marin County.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Online Now</a>
              <a href="tel:7605435733" className="hero-sec" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'border-color 0.2s' }}>(760) 543-5733</a>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
              {['Licensed CA Technician #51001', '4.9 Google \u00B7 95 Reviews', '180-Day Warranty', 'Fast Scheduling'].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 2. STATS BAR ━━━ */}
        <section data-testid="stats-bar" style={{ background: '#FF5722', padding: '20px 24px' }}>
          <div className="stats-bar" style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', maxWidth: 900, margin: '0 auto', alignItems: 'center' }}>
            {[
              { val: '3+', label: 'Years Experience' },
              { val: '500+', label: 'Happy Customers' },
              { val: '$60', label: 'Diagnostic Fee' },
              { val: '180', label: 'Day Warranty' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="stat-div" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.25)' }} />}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff' }}>{s.val}</div>
                  <div style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ━━━ 3. WHY CHOOSE LOCAL ━━━ */}
        <section data-testid="why-local" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>WHY LOCAL MATTERS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>The Problem with Out-of-Area Repair Companies</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 48 }}>Bay Area homeowners deserve better than national call centers.</p>
          </div>
          <div className="prob-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto' }}>
            {PROBLEMS.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 24px', background: '#fff', border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722', borderRadius: 4, gridColumn: i === 4 ? '1 / -1' : 'auto' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>{p.title}</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, marginTop: 4 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#FF5722', textAlign: 'center', marginTop: 24 }}>FixitBay LLC solves all of these.</p>
        </section>

        {/* ━━━ 4. THE FIXITBAY DIFFERENCE ━━━ */}
        <section data-testid="fixitbay-diff" style={{ background: '#0D1B2A', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={EYE}>YOUR LOCAL CHOICE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff' }}>Your Local Bay Area Appliance Repair Team</h2>
          </div>
          <div className="diff-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 900, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 16 }}>
                FixitBay LLC is a local, family-owned appliance repair company serving <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>San Francisco</strong>, the Peninsula, and Marin County. Our technicians live in the Bay Area and understand the unique challenges of local homes. We charge a <strong style={{ fontFamily: F, fontWeight: 700, color: '#FF5722' }}>$60 diagnostic fee</strong> (credited toward your repair).
              </p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 16 }}>
                We repair all major household appliances — refrigerators, washers, dryers, dishwashers, ovens, cooktops, freezers, ice makers, wine coolers, and garbage disposals. Same- or next-day appointments available.
              </p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
                Whether you're in <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>Pacific Heights</strong>, the <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>Sunset</strong>, or <strong style={{ fontFamily: F, fontWeight: 700, color: '#fff' }}>Mill Valley</strong>, we'll get your appliance fixed fast with our <strong style={{ fontFamily: F, fontWeight: 700, color: '#FF5722' }}>180-day warranty</strong> on parts and labor.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { num: '01', title: 'Licensed & Insured', body: 'CA License #51001. Fully insured.' },
                { num: '02', title: 'Honest Pricing', body: '$60 diagnostic credited to repair.' },
                { num: '03', title: '180-Day Warranty', body: 'Same issue returns? We come back free.' },
                { num: '04', title: 'Truly Local', body: 'We live and work in the Bay Area.' },
              ].map((c, i) => (
                <div key={i} style={{ background: '#1A2F45', border: '1px solid rgba(255,87,34,0.2)', borderTop: '2px solid #FF5722', borderRadius: 4, padding: 20, textAlign: 'center' }}>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: 'rgba(255,87,34,0.15)', lineHeight: 1, display: 'block' }}>{c.num}</span>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff', margin: '4px 0' }}>{c.title}</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 5. HOW IT WORKS ━━━ */}
        <section data-testid="how-it-works" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>THE PROCESS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Simple. Fast. Professional.</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 48 }}>From booking to repair, we make the process simple and transparent</p>
          </div>
          <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {[
              { num: '01', title: 'Book Online', body: 'Schedule your repair in seconds \u2014 no calls, no waiting.' },
              { num: '02', title: 'Technician Arrives', body: 'Licensed technician arrives on time with tools ready.' },
              { num: '03', title: 'Quick Diagnosis', body: 'We diagnose and provide an upfront estimate \u2014 no surprises.' },
              { num: '04', title: 'Professional Repair', body: 'Fast repair backed by our 180-day warranty on parts and labor.' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 4, padding: '28px 24px', textAlign: 'center', border: '1px solid rgba(255,87,34,0.15)', borderTop: '3px solid #FF5722', position: 'relative' }}>
                <span style={{ fontFamily: F, fontWeight: 800, fontSize: 64, color: 'rgba(255,87,34,0.08)', lineHeight: 1, position: 'absolute', top: 12, right: 16 }}>{s.num}</span>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 17, color: '#1A1A1A', marginBottom: 8, position: 'relative' }}>{s.title}</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, position: 'relative' }}>{s.body}</p>
              </div>
            ))}
          </div>
          {/* Detailed Steps */}
          <div style={{ background: '#0D1B2A', borderRadius: 4, padding: 32, maxWidth: 720, margin: '32px auto 0' }}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 20, textAlign: 'center' }}>How Your Repair Visit Works</p>
            {[
              { n: 1, t: 'Book Online or Call', d: 'Schedule your repair at a time that works. Same- or next-day available.' },
              { n: 2, t: 'Diagnostic Visit ($60)', d: 'Licensed technician arrives on time, inspects your appliance, identifies the problem. $60 fee applies.' },
              { n: 3, t: 'Upfront Quote', d: 'Clear written estimate before work begins. $60 diagnostic credited if you proceed.' },
              { n: 4, t: 'Professional Repair \u2014 180-day warranty', d: 'Issue fixed with quality parts. Most jobs completed in one visit. 180-day warranty included.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff' }}>{s.t}</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, marginTop: 3 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 6. APPLIANCES WE REPAIR ━━━ */}
        <section data-testid="appliances" style={{ background: '#fff', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>WHAT WE FIX</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Common Appliance Problems We Fix</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 48 }}>Our experienced technicians can diagnose and repair all these issues</p>
          </div>
          <div className="app-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 960, margin: '0 auto' }}>
            {APPLIANCES.map((a, i) => (
              <div key={i} style={{ padding: '20px 22px', background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, borderLeft: '3px solid #FF5722' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', marginBottom: 6 }}>{a.icon} {a.title}</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{a.issues}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 7. MID CTA STRIP ━━━ */}
        <section data-testid="mid-cta" style={{ background: '#FF5722', padding: '48px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 8 }}>Need Appliance Repair Today?</h2>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Call now or book online for same/next day service</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7605435733" style={{ background: '#fff', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }}>Call (760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }} aria-label="opens in new tab">Book Online</a>
          </div>
        </section>

        {/* ━━━ 8. FAQ ━━━ */}
        <section data-testid="faq-section" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={EYE}>FAQ</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="faq-q" data-testid={`faq-item-${i}`} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, marginBottom: 10, padding: '16px 20px', borderLeft: openFaq === i ? '3px solid #FF5722' : '3px solid transparent', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                >
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: 15, color: '#1A1A1A' }}>{faq.q}</span>
                  <ChevronDown size={18} style={{ color: '#FF5722', flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === i && (
                  <div style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7, padding: '12px 0 4px' }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 9. BRANDS ━━━ */}
        <section data-testid="brands-section" style={{ background: '#fff', padding: '56px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>ALL MAJOR BRANDS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8 }}>Brands We Service</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 32 }}>We repair all major appliance brands</p>
          </div>
          <div className="brand-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, maxWidth: 1000, margin: '0 auto' }}>
            {BRANDS.map(b => (
              <a key={b.name} href={b.href} title={b.name} className="brand-cell" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 96, textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                <img src={b.logo} alt={`${b.name} logo`} style={{ maxHeight: b.h || 54, width: '100%', objectFit: 'contain', filter: 'brightness(0)' }} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        {/* ━━━ 10. SERVICE AREAS ━━━ */}
        <section data-testid="service-areas" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>WHERE WE SERVE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8 }}>Service Areas for Appliance Repair</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 40 }}>We provide appliance repair across San Francisco, the Peninsula, and Marin County. Select your city below for local service details and availability.</p>
          </div>
          <div className="area-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 900, margin: '0 auto', justifyContent: 'center' }}>
            {SERVICE_CITIES.map(c => (
              <Link key={c.slug} to={`/${c.slug}-appliance-repair`} className="city-pill" style={{ background: '#fff', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 3, padding: '8px 18px', fontFamily: F, fontWeight: 600, fontSize: 13, color: '#4A5568', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>{c.name}</Link>
            ))}
          </div>
          <a href="/service-areas" style={{ display: 'block', fontFamily: F, fontWeight: 600, fontSize: 13, color: '#FF5722', textAlign: 'center', marginTop: 16, textDecoration: 'none' }}>View all 22 service cities &rarr;</a>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', textAlign: 'center', marginTop: 12 }}>
            We serve all of <Link to="/san-francisco-appliance-repair" style={{ color: '#FF5722', textDecoration: 'none' }}>San Francisco</Link> and the greater Bay Area. <a href="/service-areas" style={{ color: '#FF5722', textDecoration: 'none' }}>View all service areas</a>.
          </p>
        </section>

        {/* ━━━ 11. RELATED SERVICES ━━━ */}
        <section data-testid="related-services" style={{ background: '#0D1B2A', padding: '56px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={EYE}>EXPLORE MORE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#fff' }}>All Appliance Repair Services</h2>
          </div>
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {RELATED.map((r, i) => (
              <Link key={i} to={r.href} className="related-card" style={{ background: '#1A2F45', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: '20px 24px', display: 'flex', gap: 12, textDecoration: 'none', transition: 'border-color 0.2s', alignItems: 'center' }}>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#fff' }}>{r.title}</p>
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#FF5722', marginTop: 8, display: 'block' }}>View Service &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ━━━ 12. FINAL CTA ━━━ */}
        <section data-testid="final-cta" style={{ background: '#0D1B2A', padding: '72px 24px', textAlign: 'center' }}>
          <div style={EYE}>GET STARTED TODAY</div>
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: '#fff', marginBottom: 12 }}>Local Appliance Repair You Can Count On</h2>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Same- or next-day service across San Francisco, Peninsula, and Marin County.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Online</a>
          </div>
        </section>

        {/* ━━━ 13. FOOTER ━━━ */}
        <footer data-testid="page-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

        {/* ━━━ 14. FLOATING + MOBILE ━━━ */}
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

export default LocalApplianceRepairPage;

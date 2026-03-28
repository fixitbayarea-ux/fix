import React from 'react';
import { Link } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import FAQAccordion from '../sections/FAQAccordion';
import BrandsGrid from '../sections/BrandsGrid';
import CTABanner from '../sections/CTABanner';
import ProcessSteps from '../sections/ProcessSteps';
import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import iceMakerImg from '../../assets/services/ice-maker.jpg';
import { CalendarCheck } from 'lucide-react';

const F = 'Montserrat, sans-serif';
const C = { navy: '#0D1B2A', accent: '#FF5722', text: '#4A5568', bg: '#F8F5F0', white: '#FFFFFF' };

const REGIONS = [
  {
    name: 'San Francisco',
    desc: 'All neighborhoods — fast scheduling available citywide.',
    cities: [{ name: 'San Francisco', slug: 'san-francisco' }],
  },
  {
    name: 'Peninsula',
    desc: 'Coastal and suburban communities south of San Francisco.',
    cities: [
      { name: 'Daly City', slug: 'daly-city' },
      { name: 'South San Francisco', slug: 'south-san-francisco' },
      { name: 'San Bruno', slug: 'san-bruno' },
      { name: 'Pacifica', slug: 'pacifica' },
      { name: 'Millbrae', slug: 'millbrae' },
      { name: 'Colma', slug: 'colma' },
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Montara', slug: 'montara' },
    ],
  },
  {
    name: 'North Bay / Marin County',
    desc: 'Marin County towns — from Sausalito to Novato.',
    marinHub: true,
    cities: [
      { name: 'San Rafael', slug: 'san-rafael' },
      { name: 'Novato', slug: 'novato' },
      { name: 'Mill Valley', slug: 'mill-valley' },
      { name: 'Sausalito', slug: 'sausalito' },
      { name: 'Belvedere', slug: 'belvedere' },
      { name: 'Tiburon', slug: 'tiburon' },
      { name: 'Corte Madera', slug: 'corte-madera' },
      { name: 'San Quentin', slug: 'san-quentin' },
      { name: 'Larkspur', slug: 'larkspur' },
      { name: 'Greenbrae', slug: 'greenbrae' },
      { name: 'Ross', slug: 'ross' },
      { name: 'Fairfax', slug: 'fairfax' },
      { name: 'San Anselmo', slug: 'san-anselmo' },
    ],
  },
];

const FAQ_DATA = [
  { question: 'Do you offer fast scheduling in my city?', answer: 'Yes. We serve most Bay Area cities with same or next-day service, subject to availability. Our service area covers San Francisco, the entire Peninsula (from Daly City to San Bruno), and North Bay communities (from San Rafael to Sausalito). Call (760) 543-5733 or book online to see today\'s available time windows for your specific city.' },
  { question: 'Is the $60 diagnostic fee applied to the repair?', answer: 'Yes. If you proceed with the repair, the $60 diagnostic is fully credited toward your final invoice. This means you only pay for the repair itself—the diagnostic visit is essentially free when you move forward with the work.' },
  { question: 'What cities do you serve in the Bay Area?', answer: 'We provide appliance repair service in 22 cities across three regions: San Francisco (including all neighborhoods), Peninsula cities (Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara), and North Bay communities (San Rafael, Novato, Mill Valley, Sausalito, Belvedere, Tiburon, Corte Madera, San Quentin, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo).' },
  { question: 'What warranty do you provide?', answer: 'Every repair includes our comprehensive 180-day warranty on both parts and labor. This warranty is valid across all cities we serve—whether you\'re in San Francisco, Peninsula, or North Bay. If the same issue returns within 180 days, we\'ll come back at no additional charge to make it right.' },
  { question: 'Which brands do you service?', answer: 'We work on all major appliance brands including Whirlpool, GE, KitchenAid, LG, Samsung, Bosch, Frigidaire, Maytag, Thermador, Viking, Sub-Zero, Miele, and more. Our technicians carry common parts for most brands, allowing us to complete repairs during the first visit in any city we serve.' },
  { question: 'Do you repair gas and electric appliances?', answer: 'Yes. Our licensed technicians service both gas and electric appliances including ovens, ranges, cooktops, and dryers. We follow strict safety protocols for gas appliance repairs and perform leak testing to ensure your home\'s safety across all service areas.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. FixitBay LLC is fully licensed and insured. Our technicians follow safety best practices in every home, condo, and apartment we service across San Francisco, Peninsula, and North Bay. We carry liability insurance to protect you and your property.' },
  { question: 'Do you service apartments and condos?', answer: 'Absolutely! We service single-family homes, apartments, condos, townhomes, and multi-family buildings across all our service areas. Our technicians are experienced working in high-rise buildings, gated communities, and managed properties throughout the Bay Area.' },
];

const REPAIRS = [
  { name: 'Refrigerator Repair', path: '/refrigerator-repair', image: refrigeratorImg },
  { name: 'Washer Repair', path: '/washer-repair', image: washerImg },
  { name: 'Dryer Repair', path: '/dryer-repair', image: dryerImg },
  { name: 'Dishwasher Repair', path: '/dishwasher-repair', image: dishwasherImg },
  { name: 'Oven Repair', path: '/oven-repair', image: ovenImg },
  { name: 'Ice Maker Repair', path: '/ice-maker-repair', image: iceMakerImg },
];

const ServiceAreasHub = () => (
  <div className="service-areas-page" style={{ fontFamily: F, background: C.bg }}>
    <SEOMetaTags
      title="Appliance Repair Service Areas | San Francisco Bay Area | FixitBay LLC"
      description="FixitBay LLC serves 22 cities across San Francisco, the Peninsula, and Marin County. Find your service area and book fast appliance repair. Call (760) 543-5733."
      canonical="https://fixitbay.net/service-areas"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Service", "serviceType": "Appliance Repair Service Areas",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": "(760) 543-5733" },
      "areaServed": [{ "@type": "City", "name": "San Francisco" }, { "@type": "City", "name": "Daly City" }, { "@type": "City", "name": "San Rafael" }, { "@type": "City", "name": "Mill Valley" }]
    })}} />

    {/* ═══ HERO ═══ */}
    <section data-testid="sa-hero" style={{ background: C.navy, borderBottom: '1px solid rgba(255,87,34,0.20)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '70px 24px 60px', textAlign: 'center' }}>
        <div className="hidden md:block" aria-label="breadcrumb" style={{ fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px' }}>&rarr;</span>
          <span style={{ color: 'rgba(255,255,255,0.60)' }}>Service Areas</span>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ width: 36, height: 2, background: C.accent, display: 'inline-block' }} />
          <span style={{ fontWeight: 700, fontSize: 11, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.22em' }}>WHERE WE SERVE</span>
          <span style={{ width: 36, height: 2, background: C.accent, display: 'inline-block' }} />
        </div>
        <h1 className="sa-h1" style={{ fontWeight: 800, fontSize: 46, color: C.white, lineHeight: 1.12, maxWidth: 720, margin: '0 auto 16px' }}>
          Appliance Repair Service Areas &mdash; San Francisco Bay Area
        </h1>
        <p style={{ fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', maxWidth: 600, margin: '0 auto 28px' }}>
          22 cities across San Francisco, the Peninsula, and Marin County. Same- or next-day service available.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/book?go=1" data-testid="sa-hero-book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 30px', borderRadius: 3, background: C.accent, color: C.white, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }} aria-label="BOOK REPAIR ONLINE (opens in new tab)">BOOK REPAIR ONLINE</a>
          <a href="tel:+17605435733" data-testid="sa-hero-call" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 3, background: 'transparent', minHeight: 52, border: '2px solid rgba(255,255,255,0.65)', color: C.white, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>CALL (760) 543-5733</a>
        </div>
        <div data-testid="sa-trust-badges" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 24, fontWeight: 500, fontSize: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: C.accent }}>&#10003;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>Licensed CA Technician</span></span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>4.9 Google</span></span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: C.accent }}>&#128737;</span><span style={{ color: 'rgba(255,255,255,0.85)' }}>License #51001</span></span>
        </div>
      </div>
    </section>

    {/* ═══ COVERAGE INTRO ═══ */}
    <section data-testid="sa-coverage" style={{ background: C.white, padding: '70px 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontWeight: 700, fontSize: 11, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>COVERAGE</div>
        <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: C.navy, marginBottom: 20 }}>Areas We Serve</h2>
        <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
          FixitBay LLC provides professional in-home appliance repair across <strong>22 cities</strong> in San Francisco, the Peninsula, and North Bay communities. Our licensed and insured technicians service refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, and more — bringing expertise and quality parts directly to your home, condo, or apartment.
        </p>
        <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
          We offer same- or next-day appointments throughout the Bay Area. Whether you're in a Mission District apartment, a Pacifica coastal home, or a Mill Valley hillside residence, our team responds quickly with fully-stocked service vehicles. Every repair is backed by our comprehensive <strong>180-day warranty</strong> on parts and labor.
        </p>
      </div>
    </section>

    {/* ═══ CITY DIRECTORY ═══ */}
    <section data-testid="sa-cities" style={{ background: C.bg, padding: '70px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontWeight: 700, fontSize: 11, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>FIND YOUR CITY</div>
        <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: C.navy, marginBottom: 32 }}>Cities We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {REGIONS.map(region => (
            <div key={region.name} style={{ background: C.white, borderRadius: 4, padding: 24, border: '1px solid rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontWeight: 800, fontSize: 18, color: C.navy, marginBottom: 4 }}>{region.name}</h3>
              <p style={{ fontSize: 12, color: C.text, marginBottom: 16 }}>{region.desc}</p>
              {region.marinHub && (
                <a href="/marin-county-appliance-repair" data-testid="marin-hub-link" style={{ display: 'block', padding: '10px 16px', marginBottom: 12, background: 'rgba(255,87,34,0.06)', border: '1px solid rgba(255,87,34,0.20)', borderRadius: 3, fontWeight: 700, fontSize: 13, color: C.accent, textDecoration: 'none', textAlign: 'center' }}>
                  All Marin County Repair &rarr;
                </a>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {region.cities.map(city => (
                  <a key={city.slug} href={`/${city.slug}-appliance-repair`} data-testid={`sa-city-${city.slug}`} style={{ display: 'block', padding: '10px 16px', background: C.bg, border: '1px solid rgba(0,0,0,0.06)', borderRadius: 3, fontWeight: 600, fontSize: 13, color: C.navy, textDecoration: 'none', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'}
                  >
                    {city.name}, CA &rarr;
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: '20px 24px', background: C.white, border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: C.navy, lineHeight: 1.6, margin: 0 }}>
            <strong>Don't see your city listed?</strong> Call us at <a href="tel:+17605435733" style={{ color: C.accent, fontWeight: 700 }}>(760) 543-5733</a> — we may be able to accommodate your location.
          </p>
        </div>
      </div>
    </section>

    {/* ═══ HOW IT WORKS ═══ */}
    <ProcessSteps gridClassName="grid grid-cols-2 lg:grid-cols-4 gap-8" testId="sa-process" />

    {/* ═══ MOST REQUESTED REPAIRS ═══ */}
    <section data-testid="sa-repairs" style={{ background: C.white, padding: '70px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontWeight: 700, fontSize: 11, color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>WHAT WE FIX</div>
        <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: C.navy, marginBottom: 8 }}>Most Requested Repairs</h2>
        <p style={{ fontSize: 14, color: C.text, marginBottom: 32 }}>Our technicians are experts in diagnosing and repairing these common appliance issues.</p>
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 16 }}>
          {REPAIRS.map(svc => (
            <a key={svc.path} href={svc.path} data-testid={`sa-repair-${svc.path.replace(/\//g, '')}`} style={{ display: 'block', background: C.bg, border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, overflow: 'hidden', textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
            >
              <div style={{ height: 140, overflow: 'hidden' }}>
                <img src={svc.image} alt={`${svc.name} in San Francisco Bay Area`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" width="400" height="140" />
              </div>
              <div style={{ padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.navy }}>{svc.name} &rarr;</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 13, color: C.text }}>
          <a href="/services" style={{ color: C.accent, fontWeight: 600 }}>All repair services</a>
          {' · '}
          <a href="/brands" style={{ color: C.accent, fontWeight: 600 }}>Brands we repair</a>
          {' · '}
          <a href="/commercial-appliance-repair" style={{ color: C.accent, fontWeight: 600 }}>Commercial repair</a>
          {' · '}
          <a href="/maintenance" style={{ color: C.accent, fontWeight: 600 }}>Maintenance</a>
        </div>
      </div>
    </section>

    {/* ═══ CTA ═══ */}
    <CTABanner heading="Need Appliance Repair Today?" testId="sa-cta-banner" />

    {/* ═══ FAQ ═══ */}
    <FAQAccordion faqs={FAQ_DATA} background={C.white} testIdPrefix="sa-faq" />

    {/* ═══ BRANDS ═══ */}
    <BrandsGrid testId="sa-brands" />

    {/* ═══ MOBILE H2 OVERRIDE ═══ */}
    <style>{`
      @media (max-width: 1023px) { .sa-h1 { font-size: 28px !important; line-height: 1.2 !important; } }
      @media (max-width: 767px) { .service-areas-page h2 { /* handled by global index.css */ } }
    `}</style>
  </div>
);

export default ServiceAreasHub;

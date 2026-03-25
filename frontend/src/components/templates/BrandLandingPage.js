import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_LOGOS } from '../../data/brandsData';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';

const F = 'Montserrat, sans-serif';

const PC = {
  navy:        '#0D1B2A',
  navyMid:     '#1A2F45',
  cream:       '#F8F5F0',
  white:       '#FFFFFF',
  accent:      '#FF5722',
  textDark:    '#1A1A1A',
  textMid:     '#4A5568',
  white85:     'rgba(255,255,255,0.85)',
  white60:     'rgba(255,255,255,0.60)',
  white45:     'rgba(255,255,255,0.45)',
  white15:     'rgba(255,255,255,0.15)',
  white10:     'rgba(255,255,255,0.10)',
  white08:     'rgba(255,255,255,0.08)',
  accentBg:    'rgba(255,87,34,0.10)',
  accentBorder:'rgba(255,87,34,0.25)',
  r:           4,
};

const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

const SERVICE_AREAS = {
  sf: { label: 'SAN FRANCISCO', cities: [
    { href: '/san-francisco-appliance-repair', label: 'San Francisco' },
    { href: '/daly-city-appliance-repair', label: 'Daly City' },
    { href: '/south-san-francisco-appliance-repair', label: 'South San Francisco' },
    { href: '/colma-appliance-repair', label: 'Colma' },
    { href: '/brisbane-appliance-repair', label: 'Brisbane' },
  ]},
  peninsula: { label: 'PENINSULA', cities: [
    { href: '/san-bruno-appliance-repair', label: 'San Bruno' },
    { href: '/millbrae-appliance-repair', label: 'Millbrae' },
    { href: '/pacifica-appliance-repair', label: 'Pacifica' },
    { href: '/san-mateo-appliance-repair', label: 'San Mateo' },
    { href: '/burlingame-appliance-repair', label: 'Burlingame' },
  ]},
  northBay: { label: 'NORTH BAY', cities: [
    { href: '/sausalito-appliance-repair', label: 'Sausalito' },
    { href: '/mill-valley-appliance-repair', label: 'Mill Valley' },
    { href: '/san-rafael-appliance-repair', label: 'San Rafael' },
    { href: '/novato-appliance-repair', label: 'Novato' },
    { href: '/tiburon-appliance-repair', label: 'Tiburon' },
    { href: '/corte-madera-appliance-repair', label: 'Corte Madera' },
  ]},
};

const WHY_CARDS = [
  { num: '01', title: 'Licensed & Insured', body: 'California-licensed appliance repair. Fully insured for your protection.' },
  { num: '02', title: '$60 Diagnostic Applied', body: 'The $60 diagnostic fee is credited toward your repair. If you decline, that is the only charge.' },
  { num: '03', title: 'Same & Next-Day Service', body: null },
  { num: '04', title: '180-Day Warranty', body: 'All parts and labor are warranted for 180 days. If the same issue returns, we come back free.' },
];

const BrandLandingPage = ({ brand }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [brand.name]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cards = brand.appliances || [];
  const visible = isMobile ? 1 : 3;
  const maxIdx = Math.max(0, cards.length - visible);

  const next = useCallback(() => setCarouselIdx(p => p >= maxIdx ? 0 : p + 1), [maxIdx]);
  const prev = useCallback(() => setCarouselIdx(p => p <= 0 ? maxIdx : p - 1), [maxIdx]);

  useEffect(() => {
    if (paused || cards.length === 0) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [paused, next, cards.length]);

  const slug = brand.name.toLowerCase().replace(/[\s&]+/g, '-');
  const canonical = `https://fixitbay.net/${slug}-appliance-repair`;
  const logo = BRAND_LOGOS[brand.name];

  const seoTitle = brand.seoTitle || brand.title;
  const seoDesc = brand.seoDescription || brand.description;

  const boldFirst = (text) => {
    if (!text) return null;
    const dot = text.indexOf('. ');
    if (dot === -1) return <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: PC.textMid, lineHeight: 1.75 }}>{text}</p>;
    return (
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: PC.textMid, lineHeight: 1.75 }}>
        <span style={{ fontWeight: 600, color: PC.textDark }}>{text.slice(0, dot + 1)}</span>{text.slice(dot + 1)}
      </p>
    );
  };

  const whyCard03Body = `Same-day appointments available for ${brand.name} repairs requested before 2 PM. Next-day guaranteed.`;

  const dotCount = maxIdx + 1;

  const brandSchemas = useMemo(() => [
    {
      id: `brand-breadcrumb-${slug}`,
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fixitbay.net/' },
          { '@type': 'ListItem', position: 2, name: 'Brands', item: 'https://fixitbay.net/brands' },
          { '@type': 'ListItem', position: 3, name: `${brand.name} Appliance Repair`, item: `https://fixitbay.net/${slug}-appliance-repair` },
        ],
      },
    },
    {
      id: `brand-service-${slug}`,
      data: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `${brand.name} Appliance Repair`,
        "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC" },
        "areaServed": "San Francisco Bay Area"
      }
    },
    {
      id: `brand-faq-${slug}`,
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": brand.faq.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    }
  ], [slug, brand.name, brand.faq, cards]);

  useSchemas(brandSchemas);

  return (
    <>
      <SEOMetaTags
        title={seoTitle}
        description={seoDesc}
        canonical={canonical}
      />

      <div style={{ fontFamily: F, overflowX: 'hidden' }}>
        <style>{`
          * { box-sizing: border-box; }
          .brand-h1 { font-size: 26px !important; line-height: 1.2 !important; }
          @media (min-width: 768px) { .brand-h1 { font-size: 46px !important; line-height: 1.15 !important; } }
          .brand-section-h2 { font-size: 24px !important; }
          @media (min-width: 768px) { .brand-section-h2 { font-size: 32px !important; } }

          /* Mobile hero fixes */
          @media (max-width: 767px) {
            [data-testid="brand-hero"] { padding: 70px 16px 40px !important; }
            .brand-trust-bar { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
            .brand-stats-bar { gap: 0 !important; }
            .brand-stats-bar > div { padding-left: 12px !important; padding-right: 12px !important; }
            .brand-stats-bar .brand-stat-val { font-size: 22px !important; }
            .brand-cta-row { flex-direction: column !important; width: 100% !important; gap: 12px !important; }
            .brand-cta-row > a { width: 100% !important; justify-content: center !important; padding: 14px 20px !important; min-height: 56px !important; }
          }
          .carousel-track { display: flex; transition: transform 0.5s ease; }
          .carousel-card { flex-shrink: 0; }
          .carousel-arrow { width: 40px; height: 40px; border-radius: 50%; background: #FFFFFF; border: 1px solid rgba(255,87,34,0.30); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
          .carousel-arrow:hover { background: #FF5722; }
          .carousel-arrow:hover svg { color: #fff !important; }
          .faq-chevron { transition: transform 0.2s; }
          .city-pill { transition: border-color 0.15s, color 0.15s !important; }
          .city-pill:hover { border-color: #FF5722 !important; color: #FF5722 !important; }
          .why-card { transition: box-shadow 0.2s; }
          .why-card:hover { box-shadow: 0 4px 20px rgba(255,87,34,0.12) !important; }
          .svc-btn { transition: background 0.2s; }
          .svc-btn:hover { background: #FF5722 !important; color: #fff !important; }
          .brand-grid-2 { display: grid !important; grid-template-columns: 1fr !important; gap: 16px; }
          @media (min-width: 640px) { .brand-grid-2 { grid-template-columns: 1fr 1fr !important; } }
          .brand-grid-3 { display: grid !important; grid-template-columns: 1fr !important; gap: 16px; }
          @media (min-width: 640px) { .brand-grid-3 { grid-template-columns: 1fr 1fr !important; } }
          @media (min-width: 900px) { .brand-grid-3 { grid-template-columns: 1fr 1fr 1fr !important; } }
          @media (max-width: 767px) { body { padding-bottom: 56px; } }
        `}</style>

        {/* 1. HERO */}
        <section data-testid="brand-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.93),rgba(13,27,42,0.93)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px 60px', color: PC.white }}>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <nav className="hidden md:block" aria-label="breadcrumb" style={{ fontFamily: F, fontSize: 12, color: PC.white45, marginBottom: 20 }}>
              <a href="/" style={{ color: PC.white45, textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center', padding: '0 4px' }}>Home</a>
              <span style={{ color: PC.accent, margin: '0 6px' }}>&rarr;</span>
              <a href="/brands" style={{ color: PC.white45, textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center', padding: '0 4px' }}>Brands</a>
              <span style={{ color: PC.accent, margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: PC.white60 }}>{brand.name}</span>
            </nav>

            {logo && (
              <div style={{ display: 'inline-flex', alignItems: 'center', background: PC.white08, border: `1px solid ${PC.white15}`, borderRadius: PC.r, padding: '12px 24px', marginBottom: 20 }}>
                <img src={logo} alt={`${brand.name} brand logo`} style={{ width: 80, height: 80, objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.85)' }} loading="lazy" />
              </div>
            )}

            <div style={{ ...EYE, textAlign: 'center', color: PC.white45 }}>{brand.name.toUpperCase()} APPLIANCE REPAIR &mdash; BAY AREA</div>

            <h1 className="brand-h1" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, color: PC.white, maxWidth: 720, margin: '0 auto 16px' }}>
              {brand.h1} in San Francisco &amp; Bay Area
            </h1>

            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.white60, maxWidth: 540, margin: '0 auto 4px' }}>
              Same-day &amp; next-day service &middot; $60 diagnostic applied toward repair &middot; 180-day warranty on all {brand.name} repairs
            </p>

            <div className="brand-trust-bar" style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24, marginTop: 4 }}>
              {[
                { top: 'Licensed CA', bottom: 'Technician' },
                { top: '4.9 \u2B50', bottom: '94 Reviews' },
                { top: 'License', bottom: '#51001' },
                { top: 'Same-Day', bottom: 'Service' },
              ].map((b, i) => (
                <div key={i} style={{ background: PC.white08, border: `1px solid ${PC.white15}`, borderRadius: PC.r, padding: '7px 14px', textAlign: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: PC.white, display: 'block', fontFamily: F }}>{b.top}</span>
                  <span style={{ fontSize: 10, color: PC.white45, display: 'block', fontFamily: F }}>{b.bottom}</span>
                </div>
              ))}
            </div>

            <div className="brand-cta-row" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="cta-book-top" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: PC.r, textDecoration: 'none', border: 'none' }}>
                BOOK REPAIR ONLINE
              <span className="sr-only"> (opens in new tab)</span></a>
              <a href="tel:+17605435733" data-testid="cta-call-top" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', minHeight: 52, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: PC.r, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.65)' }}>
                (760) 543-5733
              </a>
            </div>

            <div className="brand-stats-bar" style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 40, paddingTop: 32, borderTop: `1px solid ${PC.white10}` }}>
              {[
                { val: '10+', unit: 'Years', label: 'Experience' },
                { val: '180', unit: '-Day', label: 'Warranty' },
                { val: 'Same', unit: '-Day', label: 'Service' },
              ].map((s, i, arr) => (
                <div key={i} style={{ textAlign: 'center', paddingRight: i < arr.length - 1 ? 40 : 0, borderRight: i < arr.length - 1 ? `1px solid ${PC.white15}` : 'none', paddingLeft: i > 0 ? 40 : 0 }}>
                  <div className="brand-stat-val" style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: PC.white }}>{s.val}<span style={{ color: PC.accent }}>{s.unit}</span></div>
                  <div style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: PC.white45 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. INTRO */}
        <section data-testid="brand-intro" style={{ background: PC.cream, padding: '48px 20px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px', fontFamily: F }}>About {brand.name} Repair</p>
            {boldFirst(brand.intro)}
            {brand.intro2 && <div style={{ marginTop: 16 }}><p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.textMid, lineHeight: 1.75 }}>{brand.intro2}</p></div>}
          </div>
        </section>

        {/* 3. APPLIANCES CAROUSEL */}
        <section data-testid="appliances-section" style={{ background: PC.cream, padding: '48px 20px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={EYE}>{brand.name.toUpperCase()} SERVICES</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark, marginBottom: 28 }}>{brand.name} Appliances We Repair</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button className="carousel-arrow" data-testid="carousel-prev" onClick={prev} aria-label="Previous">
                <ChevronLeft size={20} style={{ color: PC.accent }} />
              </button>

              <div style={{ overflow: 'hidden', flex: 1 }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div className="carousel-track" style={{ transform: `translateX(-${carouselIdx * (100 / visible)}%)` }}>
                  {cards.map((card, i) => (
                    <div key={i} className="carousel-card" style={{ width: `${100 / visible}%`, padding: '0 8px', boxSizing: 'border-box' }}>
                      <div style={{ background: PC.white, borderRadius: PC.r, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        {card.image && (
                          <img src={card.image} alt={card.carouselTitle || card.name} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} loading="lazy" />
                        )}
                        <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.textDark, marginBottom: 6 }}>{card.carouselTitle || card.name}</h3>
                          {card.issues && <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.textMid, marginBottom: 12 }}>{card.issues}</p>}
                          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                            <span style={{ background: PC.accentBg, color: PC.accent, padding: '4px 10px', borderRadius: PC.r, fontFamily: F, fontWeight: 600, fontSize: 11 }}>Same/Next-Day</span>
                            <span style={{ background: PC.accentBg, color: PC.accent, padding: '4px 10px', borderRadius: PC.r, fontFamily: F, fontWeight: 600, fontSize: 11 }}>$60 Diagnostic</span>
                          </div>
                          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.textMid, marginBottom: 14 }}>180-Day Warranty</p>
                          <a href={card.href || '#'} className="svc-btn" data-testid={`carousel-card-${i}-btn`} style={{ display: 'block', textAlign: 'center', background: PC.navy, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, padding: 12, borderRadius: PC.r, textDecoration: 'none', marginTop: 'auto' }}>
                            VIEW SERVICE &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-arrow" data-testid="carousel-next" onClick={next} aria-label="Next">
                <ChevronRight size={20} style={{ color: PC.accent }} />
              </button>
            </div>

            {dotCount > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
                {Array.from({ length: dotCount }).map((_, i) => (
                  <button key={i} data-testid={`carousel-dot-${i}`} onClick={() => setCarouselIdx(i)} aria-label={`Go to slide ${i + 1}`} style={{ width: carouselIdx === i ? 8 : 6, height: carouselIdx === i ? 8 : 6, borderRadius: '50%', background: carouselIdx === i ? PC.accent : PC.accentBorder, border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. COMMON PROBLEMS */}
        <section data-testid="problems-section" style={{ background: PC.navy, padding: '48px 20px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ ...EYE, color: PC.white45 }}>Common Issues We Fix</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white, marginBottom: 28 }}>Common {brand.name} Problems We Fix</h2>
            <div className="brand-grid-2">
              {brand.commonProblems.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ width: 32, height: 32, minWidth: 32, borderRadius: '50%', background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.white85, lineHeight: 1.65 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BEFORE YOU CALL */}
        <section data-testid="before-call-section" style={{ background: PC.cream, padding: '48px 20px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ ...EYE, color: PC.accent }}>What to Check Before You Call</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark, marginBottom: 6 }}>What to Check Before You Call</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: PC.textMid, marginBottom: 28 }}>These quick checks can save you a service call</p>
            {brand.beforeYouCall.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ width: 28, height: 28, minWidth: 28, borderRadius: '50%', background: PC.accentBg, color: PC.accent, fontFamily: F, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'\u2713'}</span>
                <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.textMid, lineHeight: 1.65 }}>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SERVICE AREAS */}
        <section data-testid="service-areas-section" style={{ background: PC.navy, padding: '48px 20px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ ...EYE, color: PC.white45 }}>Where We Serve</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white, marginBottom: 6 }}>{brand.name} Repair Across the Bay Area</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: PC.white45, marginBottom: 28 }}>We repair {brand.name} appliances across San Francisco, the Peninsula, and Marin County.</p>
            <div className="brand-grid-3">
              {Object.values(brand.serviceAreas || SERVICE_AREAS).map((region, ri) => (
                <div key={ri} style={{ padding: 20, background: PC.white08, border: `1px solid ${PC.white10}`, borderRadius: PC.r }}>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, color: PC.accent, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>{region.label}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                    {region.cities.map(c => (
                      <a key={c.href} href={c.href} className="city-pill" style={{ display: 'inline-block', border: `1px solid ${PC.white15}`, color: PC.white60, padding: '7px 12px', borderRadius: PC.r, fontFamily: F, fontWeight: 500, fontSize: 13, whiteSpace: 'nowrap', margin: 4, textDecoration: 'none' }}>{c.label}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHY FIXITBAY */}
        <section data-testid="why-section" style={{ background: PC.cream, padding: '48px 20px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ ...EYE, color: PC.accent }}>Why Choose FixitBay</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark, marginBottom: 28 }}>Why Choose FixitBay LLC for {brand.name} Repair</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 880, margin: '0 auto' }}>
              {WHY_CARDS.map((w, i) => (
                <div key={i} className="why-card" style={{ background: PC.white, borderRadius: PC.r, padding: '24px 20px', borderLeft: `3px solid ${PC.accent}`, borderTop: '1px solid rgba(255,87,34,0.15)', borderRight: '1px solid rgba(255,87,34,0.15)', borderBottom: '1px solid rgba(255,87,34,0.15)', display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: 'rgba(255,87,34,0.35)', display: 'block', flexShrink: 0 }}>{w.num}</span>
                  <div>
                    <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: PC.textDark, marginBottom: 4 }}>{w.title}</h3>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.textMid, lineHeight: 1.65 }}>{w.body || whyCard03Body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. REVIEWS */}
        {brand.reviews && brand.reviews.length > 0 && (
          <section data-testid="reviews-section" style={{ background: PC.navy, padding: '48px 20px' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div style={{ ...EYE, color: PC.white45, textAlign: 'center' }}>What Customers Say</div>
                <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white }}>What {brand.name} Owners Say</h2>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.white45, marginTop: 8 }}>Real customers, real {brand.name} repairs across the Bay Area</p>
              </div>
              <div className="brand-grid-3">
                {brand.reviews.map((r, i) => (
                  <div key={i} style={{ background: PC.navyMid, border: `1px solid ${PC.white08}`, borderRadius: PC.r, padding: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', top: 16, right: 16, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 9, textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2 }}>{r.appliance}</span>
                    <div style={{ color: PC.accent, fontSize: 14, marginBottom: 12, letterSpacing: 2 }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white85, lineHeight: 1.65, marginBottom: 16, borderLeft: `2px solid ${PC.accentBorder}`, paddingLeft: 12 }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: PC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F, fontWeight: 700, fontSize: 14, color: PC.accent }}>{r.name[0]}</div>
                      <div>
                        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: PC.white }}>{r.name}</div>
                        <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.white45 }}>{r.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. FAQ */}
        <section data-testid="faq-section" style={{ background: PC.cream, padding: '48px 20px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ ...EYE, color: PC.accent }}>FAQ</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark, marginBottom: 24 }}>{brand.name} Appliance Repair FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {brand.faq.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} data-testid={`faq-${i}`} style={{ background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderRadius: PC.r, overflow: 'hidden', borderLeft: isOpen ? `3px solid ${PC.accent}` : '3px solid transparent' }}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: PC.textDark }}>{faq.q}</span>
                      <span style={{ color: PC.accent, fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform 0.2s', display: 'inline-block', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                    </button>
                    {isOpen && <div style={{ padding: '0 20px 20px' }}><p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.textMid, lineHeight: 1.65 }}>{faq.a}</p></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section data-testid="cta-bottom" style={{ background: PC.navy, borderTop: `3px solid ${PC.accent}`, padding: '56px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ ...EYE, textAlign: 'center', color: PC.white45 }}>GET STARTED TODAY</div>
            <h2 className="brand-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white, marginBottom: 12 }}>Schedule Your {brand.name} Repair</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: PC.white60, marginBottom: 32 }}>$60 diagnostic credited toward repair &middot; 180-day warranty &middot; Same-day appointments available</p>
            <div style={{ display: 'inline-block', background: PC.white08, border: `1px solid ${PC.white10}`, borderRadius: PC.r, padding: '14px 32px', marginBottom: 32 }}>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 14, color: PC.white45 }}>Mon&ndash;Fri 8AM&ndash;6PM &middot; Sat 8AM&ndash;3PM &middot; Sun Closed</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="cta-book-bottom" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: PC.r, textDecoration: 'none', border: 'none' }}>
                BOOK REPAIR ONLINE
              <span className="sr-only"> (opens in new tab)</span></a>
              <a href="tel:+17605435733" data-testid="cta-call-bottom" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', minHeight: 52, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: PC.r, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.65)' }}>
                (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* 11. FOOTER */}
        <footer data-testid="brand-footer" style={{ background: PC.navy, borderTop: `3px solid ${PC.accent}`, padding: '24px 40px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/navbar-logo-new.png" alt="FixitBay" style={{ height: 36, width: 36, borderRadius: '50%', objectFit: 'cover' }} loading="lazy" />
              <div>
                <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: PC.white, display: 'block' }}>FixitBay LLC</span>
                <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: PC.white45 }}>Appliance Repair &amp; Maintenance</span>
              </div>
            </div>
            <a href="tel:+17605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: PC.accent, textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.white45 }}>&copy; 2026 FixitBay LLC</span>
          </div>
        </footer>

        {/* 12. FLOATING BUTTON — removed, global StickyCTA handles mobile */}

      </div>
    </>
  );
};

export default BrandLandingPage;

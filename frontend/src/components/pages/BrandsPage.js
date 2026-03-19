import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Wrench, Shield, Clock, Award } from 'lucide-react';
import { BRAND_LOGOS, BRAND_LINKS, BRAND_CATEGORIES } from '../../data/brandsData';
import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import freezerImg from '../../assets/services/freezer.jpg';
import iceMakerImg from '../../assets/services/ice-maker.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import cooktopImg from '../../assets/services/cooktop.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import wineCoolerImg from '../../assets/services/wine-cooler.jpg';

const F = 'Montserrat, sans-serif';

const PC = {
  navy:        '#0D1B2A',
  navyMid:     '#1A2F45',
  accent:      '#FF5722',
  white:       '#FFFFFF',
  white85:     'rgba(255,255,255,0.85)',
  white70:     'rgba(255,255,255,0.70)',
  white60:     'rgba(255,255,255,0.60)',
  white45:     'rgba(255,255,255,0.45)',
  white15:     'rgba(255,255,255,0.15)',
  white10:     'rgba(255,255,255,0.10)',
  white08:     'rgba(255,255,255,0.08)',
  accentBg:    'rgba(255,87,34,0.10)',
  accentBorder:'rgba(255,87,34,0.25)',
  cream:       '#F8F5F0',
  textDark:    '#1A1A1A',
  textMid:     '#4A5568',
  r:           4,
};

const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: PC.white45, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 };

const POPULAR = ['Bosch', 'Samsung', 'Whirlpool', 'LG'];
const TOP_NAV = [
  { label: 'Bosch', id: 'brand-Bosch' }, { label: 'Samsung', id: 'brand-Samsung' },
  { label: 'LG', id: 'brand-LG' }, { label: 'Whirlpool', id: 'brand-Whirlpool' },
  { label: 'GE', id: 'brand-GE' }, { label: 'Sub-Zero', id: 'brand-Sub-Zero' },
  { label: 'Thermador', id: 'brand-Thermador' }, { label: 'Viking', id: 'brand-Viking' },
  { label: 'Miele', id: 'brand-Miele' }, { label: 'KitchenAid', id: 'brand-KitchenAid' },
  { label: 'Frigidaire', id: 'brand-Frigidaire' }, { label: 'Maytag', id: 'brand-Maytag' },
];

const BRAND_H = {
  'Sub-Zero': 34, 'Samsung': 28, 'Bosch': 34, 'Electrolux': 28,
  'Fisher & Paykel': 26, 'Frigidaire': 32, 'Amana': 32, 'Maytag': 32,
  'KitchenAid': 28, 'Jenn-Air': 40, 'Kenmore': 40, 'Viking': 40,
  'Thermador': 40, 'LG': 44, 'Whirlpool': 44, 'GE': 44, 'Miele': 40,
  'Wolf': 36, 'Speed Queen': 40, 'DCS': 36, 'True': 36, 'U-Line': 36,
  'Marvel': 36, 'Haier': 36, 'Dacor': 32,
};

const FAQ = [
  { q: 'Do you service all major appliance brands?', a: 'Yes! We service all major appliance brands including Whirlpool, GE, Samsung, LG, Bosch, and premium brands like Sub-Zero, Wolf, and Thermador. Our technicians are trained on both standard and luxury appliances.' },
  { q: 'Do you use genuine brand parts?', a: "We always use OEM (Original Equipment Manufacturer) parts or high-quality equivalents. For premium brands, we source genuine parts from authorized distributors to maintain your appliance's quality and warranty." },
  { q: 'Can you repair older appliance models?', a: 'Yes! We service both current and older appliance models. Our technicians have experience with vintage appliances and can often source discontinued parts through our extensive supplier network.' },
  { q: 'What warranty do you provide on brand repairs?', a: "All repairs include our standard 180-day parts and labor warranty, regardless of brand. If the same issue recurs within that period, we'll fix it at no additional charge." },
  { q: 'Which brands do you repair most often in San Francisco?', a: 'Our most common repairs in SF are Bosch dishwashers, Samsung refrigerators, LG washers, Sub-Zero refrigerators in Pacific Heights, and Wolf ranges in luxury homes. We carry parts for all these brands on our vans.' },
  { q: 'Do you repair both old and new appliance models?', a: 'Yes \u2014 we repair appliances from the 1990s through the latest smart models. Older units often need harder-to-find parts; we source them through our supplier network. New smart appliances require diagnostic tools we carry for brands like Samsung, LG, and Bosch.' },
  { q: 'How long does a typical brand-name appliance repair take?', a: 'Most repairs are completed in a single visit: 1\u20132 hours for standard brands like Whirlpool or GE, 2\u20134 hours for premium brands like Sub-Zero or Wolf that require careful disassembly. We always call ahead if additional parts need to be ordered.' },
  { q: 'Is it better to repair or replace my appliance?', a: "A good rule of thumb: if the repair cost is less than 50% of the replacement cost, repair is usually worth it. Premium brands like Sub-Zero, Wolf, and Miele are almost always worth repairing \u2014 they're built to last 20+ years with proper maintenance. Standard brands like Whirlpool or GE are worth repairing if they're under 10 years old. Our technician will give you an honest recommendation after the $60 diagnostic \u2014 no pressure." },
  { q: 'Do you charge more for premium brand repairs?', a: 'Our $60 diagnostic fee is the same for all brands. Repair costs vary based on parts and labor \u2014 premium brands like Sub-Zero and Wolf may cost more due to OEM part prices, but we always provide a written estimate before any work begins.' },
];

const REPAIR_LINKS = [
  { href: '/bosch-appliance-repair', label: 'Bosch Repair' },
  { href: '/miele-appliance-repair', label: 'Miele Repair' },
  { href: '/viking-appliance-repair', label: 'Viking Repair' },
  { href: '/wolf-appliance-repair', label: 'Wolf Repair' },
  { href: '/thermador-appliance-repair', label: 'Thermador Repair' },
  { href: '/sub-zero-appliance-repair', label: 'Sub-Zero Repair' },
  { href: '/ge-appliance-repair', label: 'GE Repair' },
  { href: '/frigidaire-appliance-repair', label: 'Frigidaire Repair' },
  { href: '/kitchenaid-appliance-repair', label: 'KitchenAid Repair' },
  { href: '/maytag-appliance-repair', label: 'Maytag Repair' },
  { href: '/kenmore-appliance-repair', label: 'Kenmore Repair' },
  { href: '/samsung-appliance-repair', label: 'Samsung Repair' },
  { href: '/lg-appliance-repair', label: 'LG Repair' },
  { href: '/whirlpool-appliance-repair', label: 'Whirlpool Repair' },
];

const BrandsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFloat, setShowFloat] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [logoErrors, setLogoErrors] = useState({});
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Meta + Canonical via useEffect DOM injection */
  useEffect(() => {
    document.title = 'Appliance Brand Repair in Bay Area | FixitBay \u2014 Bosch, Samsung, Sub-Zero & More';
    const setMeta = (n, c, prop) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${n}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, n); document.head.appendChild(el); }
      el.setAttribute('content', c);
    };
    setMeta('description', 'FixitBay repairs all major appliance brands in San Francisco Bay Area \u2014 Bosch, Samsung, LG, Sub-Zero, Wolf, Thermador & more. Same-day service, OEM parts, 180-day warranty. Call (760) 543-5733.');
    setMeta('og:title', 'Appliance Brand Repair in Bay Area | FixitBay', true);
    setMeta('og:description', 'We repair every major appliance brand in the Bay Area with OEM parts and 180-day warranty.', true);
    setMeta('og:url', 'https://fixitbay.net/brands', true);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
    canon.href = 'https://fixitbay.net/brands';
  }, []);

  /* Schema scripts via useEffect DOM injection */
  useEffect(() => {
    const schemas = [
      { id: 'brands-breadcrumb', data: {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://fixitbay.net/"},{"@type":"ListItem","position":2,"name":"Brands We Repair","item":"https://fixitbay.net/brands"}]} },
      { id: 'brands-itemlist', data: {"@context":"https://schema.org","@type":"ItemList","name":"Appliance Brands We Repair","itemListElement":[{"@type":"ListItem","position":1,"name":"Sub-Zero","url":"https://fixitbay.net/sub-zero-appliance-repair"},{"@type":"ListItem","position":2,"name":"Wolf","url":"https://fixitbay.net/wolf-appliance-repair"},{"@type":"ListItem","position":3,"name":"Thermador","url":"https://fixitbay.net/thermador-appliance-repair"},{"@type":"ListItem","position":4,"name":"Miele","url":"https://fixitbay.net/miele-appliance-repair"},{"@type":"ListItem","position":5,"name":"Viking","url":"https://fixitbay.net/viking-appliance-repair"},{"@type":"ListItem","position":6,"name":"Whirlpool","url":"https://fixitbay.net/whirlpool-appliance-repair"},{"@type":"ListItem","position":7,"name":"LG","url":"https://fixitbay.net/lg-appliance-repair"},{"@type":"ListItem","position":8,"name":"Samsung","url":"https://fixitbay.net/samsung-appliance-repair"},{"@type":"ListItem","position":9,"name":"GE","url":"https://fixitbay.net/ge-appliance-repair"},{"@type":"ListItem","position":10,"name":"Bosch","url":"https://fixitbay.net/bosch-appliance-repair"},{"@type":"ListItem","position":11,"name":"KitchenAid","url":"https://fixitbay.net/kitchenaid-appliance-repair"},{"@type":"ListItem","position":12,"name":"Maytag","url":"https://fixitbay.net/maytag-appliance-repair"},{"@type":"ListItem","position":13,"name":"Frigidaire","url":"https://fixitbay.net/frigidaire-appliance-repair"},{"@type":"ListItem","position":14,"name":"Kenmore","url":"https://fixitbay.net/kenmore-appliance-repair"}]} },
      { id: 'brands-faq', data: {"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQ.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))} },
      { id: 'brands-localbusiness', data: {"@context":"https://schema.org","@type":"LocalBusiness","name":"FixitBay LLC","description":"Appliance repair service in San Francisco Bay Area specializing in all major brands including Bosch, Samsung, Sub-Zero, Wolf, Whirlpool, LG, GE, Miele, Viking and Thermador.","telephone":"+17605435733","url":"https://fixitbay.com","areaServed":"San Francisco Bay Area","priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"94"}} },
    ];
    schemas.forEach(({ id, data }) => {
      let el = document.getElementById(id);
      if (!el) { el = document.createElement('script'); el.id = id; el.type = 'application/ld+json'; document.head.appendChild(el); }
      el.textContent = JSON.stringify(data);
    });
    return () => schemas.forEach(({ id }) => document.getElementById(id)?.remove());
  }, []);

  const SERVICES = [
    { name:'Refrigerator', img:refrigeratorImg, issues:'Not cooling, water leaks, ice maker issues', link:'/refrigerator-repair' },
    { name:'Freezer', img:freezerImg, issues:'Not freezing, frost buildup, temperature issues', link:'/freezer-repair' },
    { name:'Ice Maker', img:iceMakerImg, issues:'Not making ice, water leaking, jammed', link:'/ice-maker-repair' },
    { name:'Dishwasher', img:dishwasherImg, issues:'Not draining, leaking, won\'t start', link:'/dishwasher-repair' },
    { name:'Oven', img:ovenImg, issues:'Not heating, temperature issues', link:'/oven-repair' },
    { name:'Stove & Cooktop', img:cooktopImg, issues:'Burners not working, igniter problems', link:'/stove-repair' },
    { name:'Washer', img:washerImg, issues:'Not spinning, leaking, error codes', link:'/washer-repair' },
    { name:'Dryer', img:dryerImg, issues:'Not heating, won\'t start, noisy', link:'/dryer-repair' },
    { name:'Wine Cooler', img:wineCoolerImg, issues:'Temperature off, compressor noise, not cooling', link:'/wine-cooler-repair' },
  ];
  const carouselVisible = isMobile ? 1 : 3;
  const maxIdx = Math.max(0, SERVICES.length - carouselVisible);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCarouselIdx(prev => prev >= maxIdx ? 0 : prev + 1);
    }, 3000);
  }, [maxIdx]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    setCarouselIdx(prev => Math.min(prev, maxIdx));
  }, [maxIdx]);

  const allBrands = Object.values(BRAND_CATEGORIES).flatMap(c => c.brands);
  const displayBrands = activeCategory === 'all' ? allBrands : BRAND_CATEGORIES[activeCategory].brands;
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  const cats = [
    { key: 'all', label: `All Brands (${allBrands.length})` },
    { key: 'premium', label: `Premium (${BRAND_CATEGORIES.premium.brands.length})` },
    { key: 'standard', label: `Standard (${BRAND_CATEGORIES.standard.brands.length})` },
    { key: 'commercial', label: `Commercial (${BRAND_CATEGORIES.commercial.brands.length})` },
  ];

  const carouselTransform = isMobile
    ? `translateX(calc(-${carouselIdx} * (100% + 20px)))`
    : `translateX(calc(-${carouselIdx} * (33.333% + 13.333px)))`;

  return (
    <div className="brands-page" style={{ fontFamily: F }}>
      <style>{`
        * { box-sizing: border-box; }
        .brands-page { font-family: ${F}; }
        .brands-hero-h1 { font-size: 28px !important; line-height: 1.15 !important; }
        @media (min-width: 768px) { .brands-hero-h1 { font-size: 44px !important; } }
        .brands-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (min-width: 640px)  { .brands-card-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .brands-card-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .brand-card { transition: border-color 0.2s, box-shadow 0.2s !important; }
        .brand-card:hover { box-shadow: 0 6px 24px rgba(255,87,34,0.18) !important; border-color: #FF5722 !important; }
        .brand-card-guide { opacity: 0; transition: opacity 0.2s; }
        .brand-card:hover .brand-card-guide { opacity: 1; }
        @media (max-width: 767px) { .brand-card-guide { opacity: 1; } }
        .carousel-track-item { min-width: calc(100% - 0px) !important; }
        @media (min-width: 768px) { .carousel-track-item { min-width: calc(33.333% - 13.333px) !important; } }
        @media (max-width: 767px) { body { padding-bottom: 72px; } }
        .brands-filter-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; flex-wrap: nowrap !important; justify-content: flex-start !important; }
        .brands-filter-tabs::-webkit-scrollbar { display: none; }
        .brands-section-h2 { font-size: 24px !important; }
        @media (min-width: 768px) { .brands-section-h2 { font-size: 36px !important; } }
        .top-nav-pill { white-space: nowrap; transition: background 0.15s, border-color 0.15s !important; }
        .top-nav-pill:hover { background: rgba(255,87,34,0.18) !important; border-color: #FF5722 !important; }
        .faq-answer { padding: 0 20px 18px 20px; border-left: 2px solid #FF5722; margin-left: 20px; }
        .faq-chevron { transition: transform 0.2s; }
        .brands-float-btn:hover { background: #FF7043 !important; }
        .svc-btn { transition: background 0.2s; }
        .svc-btn:hover { background: #FF5722 !important; }
        .brands-float-btn { display: none !important; }
        @media (min-width: 768px) { .brands-float-btn { display: inline-flex !important; } }
        .brands-mobile-bar { display: flex !important; }
        @media (min-width: 768px) { .brands-mobile-bar { display: none !important; } }
        @media (max-width: 767px) { .brands-footer { padding: 20px !important; } .brands-footer-inner { flex-direction: column !important; text-align: center !important; align-items: center !important; } }
      `}</style>

      {/* 1. HERO */}
      <section data-testid="brands-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.97),rgba(13,27,42,0.97)), url('/background_new2.png')", backgroundSize: 'cover', backgroundPosition: 'center 60%', padding: '80px 20px 60px', color: PC.white }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={EYE}>APPLIANCE BRAND REPAIR — BAY AREA</div>
          <h1 className="brands-hero-h1" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, margin: '16px 0 0', color: PC.white }}>We Repair Every Major Appliance Brand in the Bay Area</h1>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.white60, marginTop: 14 }}>From everyday Whirlpool to luxury Sub-Zero — our certified technicians service every brand with OEM parts and 180-day warranty.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginTop: 20, marginBottom: 24 }}>
            {[
              { top: 'Licensed', bottom: 'Technicians' },
              { top: 'Same/Next', bottom: 'Day Service' },
              { top: '180-Day', bottom: 'Warranty' },
              { top: 'OEM', bottom: 'Parts' },
            ].map((b, i) => (
              <div key={i} style={{ background: PC.white08, border: `1px solid ${PC.white15}`, borderRadius: PC.r, padding: '7px 14px', textAlign: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: PC.white, display: 'block', fontFamily: F }}>{b.top}</span>
                <span style={{ fontSize: 10, color: PC.white45, display: 'block', fontFamily: F }}>{b.bottom}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 0 }}>
            <a href="tel:+17605435733" data-testid="brands-hero-call" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', padding: '15px 28px', borderRadius: PC.r, textDecoration: 'none', letterSpacing: '0.04em', border: 'none' }}>Call (760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="brands-hero-book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', padding: '15px 28px', borderRadius: PC.r, textDecoration: 'none', border: `2px solid ${PC.white15}`, letterSpacing: '0.04em' }}>Book Online</a>
          </div>
        </div>
      </section>

      {/* 2. TOP BRANDS QUICK NAV */}
      <section data-testid="brands-top-nav" style={{ background: PC.navy, padding: '36px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ ...EYE, textAlign: 'center' }}>MOST SERVICED</div>
          <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 700, fontSize: 28, color: PC.white, marginBottom: 24 }}>Top Brands We Repair</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            {TOP_NAV.map(b => (
              <button key={b.id} className="top-nav-pill" onClick={() => scrollTo(b.id)} style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: PC.white, background: PC.accentBg, border: `1px solid ${PC.accentBorder}`, borderRadius: PC.r, padding: '9px 16px', cursor: 'pointer' }}>{b.label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND FILTER TABS + GRID */}
      <section data-testid="brands-grid-section" style={{ background: PC.cream, padding: '48px 20px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ ...EYE, color: PC.accent }}>25+ BRANDS SERVICED</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark, marginTop: 8 }}>Browse All Appliance Brands</h2>
          </div>
          <div style={{ position: 'sticky', top: 0, zIndex: 100, background: PC.cream, padding: '12px 0 16px' }}>
            <div className="brands-filter-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              {cats.map(c => (
                <button key={c.key} data-testid={`tab-${c.key}`} onClick={() => setActiveCategory(c.key)} style={{ fontFamily: F, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: PC.r, cursor: 'pointer', background: activeCategory === c.key ? PC.accent : PC.white, color: activeCategory === c.key ? PC.white : PC.accent, border: activeCategory === c.key ? `1px solid ${PC.accent}` : '1px solid rgba(255,87,34,0.30)' }}>{c.label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gap: 20, alignItems: 'stretch' }} className="brands-card-grid">
            {displayBrands.map((brand) => {
              const link = BRAND_LINKS[brand.name] || '/brands';
              const logo = BRAND_LOGOS[brand.name];
              const pop = POPULAR.includes(brand.name);
              return (
                <a key={brand.name} id={`brand-${brand.name}`} href={link} data-testid={`brand-card-${brand.name.replace(/\s+/g, '-')}`}
                  className="brand-card"
                  style={{ position: 'relative', display: 'block', background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderRadius: PC.r, padding: 16, textAlign: 'center', textDecoration: 'none' }}>
                  {pop && <span style={{ position: 'absolute', top: 8, right: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 10, textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2 }}>MOST POPULAR</span>}
                  <div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    {logo && !logoErrors[brand.name]
                      ? <img src={logo} alt={`${brand.name} appliance repair`} loading="lazy"
                          onError={() => setLogoErrors(prev => ({ ...prev, [brand.name]: true }))}
                          style={{ maxHeight: BRAND_H[brand.name] || 34, maxWidth: '80%', objectFit: 'contain', filter: 'none' }} />
                      : <span style={{ fontFamily: F, fontWeight: 800, fontSize: 14, color: PC.textDark, textAlign: 'center', letterSpacing: '0.03em' }}>{brand.name}</span>
                    }
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.textDark, marginTop: 12 }}>{brand.name}</div>
                  <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.textMid, marginTop: 4 }}>{brand.specialty}</div>
                  <div className="brand-card-guide" style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: PC.accent, marginTop: 10 }}>View Repair Guide &rarr;</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BRAND TIERS */}
      <section data-testid="brands-tiers" style={{ background: PC.navyMid, padding: '48px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={EYE}>CHOOSING THE RIGHT SERVICE</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white }}>Understanding Appliance Brand Tiers</h2>
          </div>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ background: PC.navy, border: `1px solid ${PC.accentBorder}`, borderLeft: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: 24 }}>
              <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: PC.white, marginBottom: 12 }}>Premium &amp; Luxury Brands</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {['Sub-Zero', 'Wolf', 'Thermador', 'Miele', 'Viking'].map(b => <span key={b} style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: PC.accent, background: PC.accentBg, padding: '3px 10px', borderRadius: 3 }}>{b}</span>)}
              </div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white70, lineHeight: 1.7, marginBottom: 10 }}>
                Brands like <a href="/sub-zero-appliance-repair" style={{ color: PC.accent }}>Sub-Zero</a>, <a href="/wolf-appliance-repair" style={{ color: PC.accent }}>Wolf</a>, <a href="/thermador-appliance-repair" style={{ color: PC.accent }}>Thermador</a>, <a href="/miele-appliance-repair" style={{ color: PC.accent }}>Miele</a>, and <a href="/viking-appliance-repair" style={{ color: PC.accent }}>Viking</a> use proprietary parts and advanced engineering. These appliances require technicians who understand sealed cooling systems, dual compressors, induction technology, and steam-assist features. Repairs typically cost more due to specialized parts, but the appliance lifespan (15-25 years) often justifies it.
              </p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white70, lineHeight: 1.7 }}>
                <strong style={{ color: PC.white }}>When to use a brand-specific page:</strong> If you own a premium appliance, visit the dedicated brand page for model-specific troubleshooting and common failure patterns.
              </p>
            </div>
            <div style={{ background: PC.navy, border: `1px solid ${PC.accentBorder}`, borderLeft: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: 24 }}>
              <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: PC.white, marginBottom: 12 }}>Standard Household Brands</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {['Whirlpool', 'GE', 'Samsung', 'LG', 'Maytag', 'Frigidaire', 'Kenmore'].map(b => <span key={b} style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: PC.accent, background: PC.accentBg, padding: '3px 10px', borderRadius: 3 }}>{b}</span>)}
              </div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white70, lineHeight: 1.7, marginBottom: 10 }}>
                <a href="/whirlpool-appliance-repair" style={{ color: PC.accent }}>Whirlpool</a>, <a href="/ge-appliance-repair" style={{ color: PC.accent }}>GE</a>, <a href="/samsung-appliance-repair" style={{ color: PC.accent }}>Samsung</a>, <a href="/lg-appliance-repair" style={{ color: PC.accent }}>LG</a>, <a href="/maytag-appliance-repair" style={{ color: PC.accent }}>Maytag</a>, <a href="/frigidaire-appliance-repair" style={{ color: PC.accent }}>Frigidaire</a>, and <a href="/kenmore-appliance-repair" style={{ color: PC.accent }}>Kenmore</a> are the workhorses of most Bay Area homes. Parts are widely available, and most repairs are straightforward. These brands typically last 10-15 years with proper maintenance.
              </p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white70, lineHeight: 1.7 }}>
                <strong style={{ color: PC.white }}>When to use a general service page:</strong> If you need a standard <a href="/refrigerator-repair" style={{ color: PC.accent }}>refrigerator</a>, <a href="/washer-repair" style={{ color: PC.accent }}>washer</a>, or <a href="/oven-repair" style={{ color: PC.accent }}>oven</a> repair and your brand is not premium, start with the appliance type page for faster booking.
              </p>
            </div>
            <div style={{ background: PC.navy, border: `1px solid ${PC.accentBorder}`, borderLeft: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: 24 }}>
              <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: PC.white, marginBottom: 12 }}>What Makes Premium Brand Repair Different?</h3>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white70, lineHeight: 1.7 }}>
                Premium appliances use stainless steel interiors, commercial-grade compressors, advanced electronic controls, and custom-fit cabinetry integration. A Sub-Zero refrigerator, for example, uses a dual-compressor system that keeps food fresh longer but requires a technician who understands how to diagnose each compressor independently. Wolf ranges use a sealed dual-stacked burner system rated for 20,000 BTU that differs significantly from a standard GE range. Our technicians carry brand-specific diagnostic tools and have direct access to OEM part suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE FIXITBAY */}
      <section data-testid="brands-why" style={{ background: PC.cream, padding: '48px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ ...EYE, color: PC.accent }}>OUR ADVANTAGE</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark }}>Why Choose FixitBay for Brand-Name Repairs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: <Wrench size={22} />, title: 'Brand-Specific Expertise', text: "Our technicians receive ongoing training on the latest models from all major manufacturers. We understand the unique engineering of each brand, from Samsung's smart features to Sub-Zero's dual refrigeration systems." },
              { icon: <Shield size={22} />, title: 'Genuine OEM Parts', text: 'We use Original Equipment Manufacturer parts or high-quality equivalents. For premium brands like Wolf and Thermador, we source directly from authorized distributors to maintain quality standards.' },
              { icon: <Clock size={22} />, title: 'Fast Same-Day Service', text: 'We offer same-day and next-day appointments throughout San Francisco Bay Area. Our vans are stocked with common parts for faster repairs on major brands.' },
              { icon: <Award size={22} />, title: '180-Day Warranty', text: 'Every repair includes our comprehensive 180-day warranty on parts and labor, regardless of brand. We stand behind our work with confidence.' },
            ].map((f, i) => (
              <div key={i} style={{ background: PC.white, border: '1px solid rgba(255,87,34,0.20)', borderRadius: PC.r, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: PC.accentBg, color: PC.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.textDark, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.textMid, lineHeight: 1.7 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section data-testid="brands-reviews" style={{ background: PC.navy, padding: '48px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={EYE}>VERIFIED REVIEWS</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white }}>What Bay Area Customers Say About Brand Repairs</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: PC.white60, marginTop: 10 }}>Real experiences from customers across San Francisco Bay Area</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { badge: 'BOSCH', text: 'Our Bosch dishwasher stopped draining. FixitBay diagnosed it in 30 minutes and had it running the same day. Genuinely impressive service.', name: 'Michael R.', loc: 'Pacific Heights, SF', init: 'M' },
              { badge: 'SUB-ZERO', text: 'Had our Sub-Zero refrigerator compressor fail. The technician knew exactly what to do \u2014 OEM parts, clean work, and a 180-day warranty. Worth every penny.', name: 'Jennifer L.', loc: 'Marin County', init: 'J' },
              { badge: 'SAMSUNG', text: 'Samsung washer error codes drove us crazy for weeks. FixitBay fixed the control board same day. Cheaper than I expected and fully warranted.', name: 'David K.', loc: 'Palo Alto', init: 'D' },
              { badge: 'WOLF', text: 'Wolf range igniter replacement in a Victorian flat \u2014 tight space, no problem. Technician came prepared with the part. Professional from start to finish.', name: 'Sarah M.', loc: 'Noe Valley, SF', init: 'S' },
            ].map((r, i) => (
              <div key={i} style={{ background: PC.navyMid, border: `1px solid ${PC.white08}`, borderRadius: PC.r, padding: 20, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 12, right: 12, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 9, textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2 }}>{r.badge}</span>
                <div style={{ color: PC.accent, fontSize: 14, marginBottom: 12, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white85, lineHeight: 1.7, marginBottom: 14 }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: PC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F, fontWeight: 700, fontSize: 14, color: PC.accent }}>{r.init}</div>
                  <div>
                    <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: PC.white }}>{r.name}</div>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: PC.accent }}>{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section data-testid="brands-faq" style={{ background: PC.navy, padding: '48px 20px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={EYE}>COMMON QUESTIONS</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQ.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} data-testid={`faq-${i}`} style={{ background: PC.navyMid, border: `1px solid ${PC.white08}`, borderRadius: PC.r, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', minHeight: 52 }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: PC.white }}>{faq.q}</span>
                    <span style={{ color: PC.accent, fontSize: 22, fontWeight: 700, flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
                  </button>
                  {isOpen && <div className="faq-answer">
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.white60, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section data-testid="brands-services-carousel" style={{ background: PC.cream, padding: '48px 20px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ ...EYE, color: PC.accent }}>WHAT WE FIX</div>
            <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.textDark }}>Every Major Appliance. Every Major Brand.</h2>
          </div>
          <div style={{ position: 'relative' }} ref={carouselRef}
            onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
            <button onClick={() => { setCarouselIdx(prev => prev <= 0 ? maxIdx : prev - 1); stopAutoPlay(); startAutoPlay(); }} data-testid="carousel-prev" style={{ position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 40, height: 40, borderRadius: '50%', background: PC.white, border: '1px solid rgba(255,87,34,0.30)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PC.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={() => { setCarouselIdx(prev => prev >= maxIdx ? 0 : prev + 1); stopAutoPlay(); startAutoPlay(); }} data-testid="carousel-next" style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 40, height: 40, borderRadius: '50%', background: PC.white, border: '1px solid rgba(255,87,34,0.30)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PC.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div style={{ overflow: 'hidden', borderRadius: PC.r }}>
              <div style={{ display: 'flex', gap: 20, transition: 'transform 0.5s ease', transform: carouselTransform }}>
                {SERVICES.map((s, i) => (
                  <div key={i} className="carousel-track-item" data-testid={`service-card-${i}`} style={{ background: PC.white, borderRadius: PC.r, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', cursor: 'pointer' }}>
                    <img src={s.img} alt={s.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', borderRadius: `${PC.r}px ${PC.r}px 0 0` }} loading="lazy" />
                    <div style={{ padding: 20 }}>
                      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.accent, marginBottom: 6 }}>&bull; {s.name}</div>
                      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: PC.textMid, marginBottom: 10, lineHeight: 1.5 }}>{s.issues}</div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: PC.accent, background: PC.accentBg, padding: '3px 10px', borderRadius: PC.r }}>Same/Next-Day</span>
                        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: PC.accent, background: PC.accentBg, padding: '3px 10px', borderRadius: PC.r }}>$60 Diagnostic</span>
                      </div>
                      <div style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: PC.textMid, marginBottom: 12, fontStyle: 'italic' }}>180-Day Warranty on parts &amp; labor</div>
                      <a href={s.link} className="svc-btn" style={{ display: 'block', textAlign: 'center', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', background: PC.navy, color: PC.white, padding: 12, borderRadius: PC.r, textDecoration: 'none', letterSpacing: '0.04em' }}>VIEW SERVICE</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCarouselIdx(i)} style={{ width: carouselIdx === i ? 8 : 6, height: carouselIdx === i ? 8 : 6, borderRadius: '50%', background: carouselIdx === i ? PC.accent : PC.accentBorder, border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
              ))}
            </div>
          </div>
          <p style={{ marginTop: 24, fontFamily: F, fontSize: 13 }}>
            <a href="/services" style={{ color: PC.accent }}>All repair services</a>{' \u00b7 '}
            <a href="/san-francisco-appliance-repair" style={{ color: PC.accent }}>San Francisco appliance repair</a>{' \u00b7 '}
            <a href="/commercial-appliance-repair" style={{ color: PC.accent }}>Commercial repair</a>{' \u00b7 '}
            <a href="/service-areas" style={{ color: PC.accent }}>Service areas</a>{' \u00b7 '}
            <a href="/freezer-repair" style={{ color: PC.accent }}>Freezer repair</a>
          </p>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section data-testid="brands-final-cta" style={{ background: PC.navy, borderTop: `3px solid ${PC.accent}`, padding: '56px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="brands-section-h2" style={{ fontFamily: F, fontWeight: 800, color: PC.white, marginBottom: 12 }}>Ready to Fix Your Appliance?</h2>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: PC.white60, marginBottom: 28 }}>Get same-day service from certified technicians who know your brand inside and out.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:+17605435733" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', padding: '16px 32px', borderRadius: PC.r, textDecoration: 'none', letterSpacing: '0.04em', border: 'none' }}>Call (760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', padding: '16px 32px', borderRadius: PC.r, textDecoration: 'none', border: `2px solid ${PC.white15}`, letterSpacing: '0.04em' }}>Book Online</a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer data-testid="brands-footer" className="brands-footer" style={{ background: PC.navy, borderTop: `3px solid ${PC.accent}`, padding: '24px 40px' }}>
        <div className="brands-footer-inner" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
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

      {/* 10. FLOATING BUTTON + MOBILE BAR */}
      {showFloat && <>
        <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="brands-float-btn" className="brands-float-btn" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 24px', borderRadius: PC.r, boxShadow: '0 4px 16px rgba(0,0,0,0.3)', textDecoration: 'none' }}>BOOK REPAIR</a>
        <div className="brands-mobile-bar" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: PC.navyMid, borderTop: `2px solid ${PC.accent}`, padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
          <a href="tel:+17605435733" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: PC.accent, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: PC.r, textDecoration: 'none' }}>CALL</a>
          <button onClick={() => window.open('/book?go=1', '_blank')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: PC.navy, color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '8px 0', borderRadius: PC.r, border: `1px solid ${PC.white15}`, cursor: 'pointer' }}>
            <span style={{ fontSize: 9, color: PC.white45, display: 'block', textAlign: 'center', marginBottom: 1 }}>Same-Day</span>
            BOOK ONLINE
          </button>
          <a href="sms:7605435733?body=Hello%20FixitBay!" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'transparent', color: PC.white, fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: PC.r, textDecoration: 'none', border: `2px solid ${PC.white15}` }}>TEXT US</a>
        </div>
      </>}
    </div>
  );
};

export default BrandsPage;

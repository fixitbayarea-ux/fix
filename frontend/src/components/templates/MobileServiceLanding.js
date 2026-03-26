/**
 * MobileServiceLanding — Precision Craft V2 design system
 * Reusable mobile conversion landing for service + maintenance pages.
 * Used on mobile (<768px), while desktop shows ApplianceRepairPageNew.
 */
import React, { useState, useEffect, useMemo } from 'react';
import { useSchemas } from '../../hooks/useSchema';
import SEOMetaTags from '../SEOMetaTags';
import { SERVICE_PRICING, MAINTENANCE_PRICING } from '../../data/servicePricing';

const BOOKING_URL = '/book?go=1';
const PHONE = '+17605435733';
const PHONE_DISPLAY = '(760) 543-5733';
const HERO_AVIF_640 = '/images/hero/service-hero-640.avif';
const HERO_WEBP_640 = '/images/hero/service-hero-640.webp';
const HERO_AVIF_960 = '/images/hero/service-hero-960.avif';
const HERO_WEBP_960 = '/images/hero/service-hero-960.webp';

const F = "'Montserrat', sans-serif";

const PC = {
  navy:        '#0D1B2A',
  navyMid:     '#1A2F45',
  accent:      '#FF5722',
  white:       '#FFFFFF',
  white70:     'rgba(255,255,255,0.70)',
  white60:     'rgba(255,255,255,0.60)',
  white45:     'rgba(255,255,255,0.45)',
  white15:     'rgba(255,255,255,0.15)',
  white10:     'rgba(255,255,255,0.10)',
  white08:     'rgba(255,255,255,0.08)',
  accentBg:    'rgba(255,87,34,0.12)',
  accentBorder:'rgba(255,87,34,0.30)',
  cream:       '#F8F5F0',
  textDark:    '#1A1A1A',
  textMid:     '#4A5568',
  r:           4,
};

const track = (name, params = {}) => { try { window.gtag?.('event', name, params); } catch(e) {} };
const handleCall = (loc, page) => { track('call_click', { page, location: loc }); window.location.href = `tel:${PHONE}`; };
const handleBook = (loc, page) => { track('book_click', { page, location: loc }); window.open(BOOKING_URL, '_blank'); };

const DEFAULT_BRANDS = [
  { name: 'Sub-Zero', href: '/sub-zero-appliance-repair', logo: '/images/brands/sub-zero.svg', h: 30 },
  { name: 'Viking', href: '/viking-appliance-repair', logo: '/images/brands/viking.svg', h: 38 },
  { name: 'Thermador', href: '/thermador-appliance-repair', logo: '/images/brands/thermador.svg', h: 38 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
];

const DEFAULT_REVIEWS = [
  { name: 'Gayle R.', text: 'Andrei was excellent. He explained everything clearly and fixed our Sub-Zero the same day. Would definitely use again.', src: 'Google', stars: 5 },
  { name: 'Roland S.', text: 'Quickly figured out what was wrong, had the spare parts in no time and repaired it professionally at a reasonable price.', src: 'Google', stars: 5 },
  { name: 'Michael K.', text: 'Knowledgeable, professional, fast. Answered all my questions. Highly recommend FixitBay LLC!', src: 'Google', stars: 5 },
];

const buildMobileFAQSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;
  const valid = faqs.filter(faq => {
    const q = (faq.q || faq.question || '').trim();
    const a = (faq.a || faq.answer || '').trim();
    return q && a;
  });
  if (valid.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": valid.map(faq => ({
      "@type": "Question",
      "name": (faq.q || faq.question).trim(),
      "acceptedAnswer": { "@type": "Answer", "text": (faq.a || faq.answer).trim() }
    }))
  };
};

// Standard Service schema for all service pages
const buildMobileServiceSchema = (serviceName) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${serviceName} Repair San Francisco Bay Area`,
  "serviceType": `${serviceName} Repair`,
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "telephone": "+17605435733",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1549 Franklin St, Unit A",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109"
    },
    "priceRange": "$$"
  },
  "areaServed": [
    "San Francisco", "Daly City", "South San Francisco", "San Bruno",
    "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
    "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
    "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
    "Fairfax", "San Anselmo", "Novato"
  ]
});

const MobileServiceLanding = ({
  appliance = 'Appliance',
  pageSlug = 'appliance-repair',
  pageTitle,
  metaDescription,
  heroTitle,
  heroSubtitle = 'Same-Day/Next-Day Service Guaranteed',
  issues = [],
  faqs = [],
  brands = DEFAULT_BRANDS,
  reviews = DEFAULT_REVIEWS,
  schemaData = null,
  noindex = false,
  techImage = null,
  techImageAlt = '',
  heroImage = null,
  heroImageAlt = '',
  heroImagePosition = 'center center',
  repairVsReplace = null,
  relatedLinks = null,
  heroDescription = null,
}) => {
  const faqSchema = buildMobileFAQSchema(faqs);
  const [faqOpen, setFaqOpen] = useState(null);

  const mobileSchemas = useMemo(() => {
    const schemas = [];
    // Add Service schema - use provided schema or generate default
    const effectiveServiceSchema = schemaData || buildMobileServiceSchema(appliance);
    schemas.push({ id: `mobile-service-schema-${pageSlug}`, data: effectiveServiceSchema });
    if (faqSchema) schemas.push({ id: `mobile-faq-schema-${pageSlug}`, data: faqSchema });
    schemas.push({
      id: `mobile-breadcrumb-schema-${pageSlug}`,
      data: {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net/" },
          { "@type": "ListItem", "position": 2, "name": pageSlug.startsWith('maintenance/') ? 'Maintenance' : 'Services', "item": pageSlug.startsWith('maintenance/') ? 'https://fixitbay.net/maintenance' : 'https://fixitbay.net/services' },
          { "@type": "ListItem", "position": 3, "name": appliance === 'Appliance' ? 'All Services' : `${appliance} ${pageSlug.startsWith('maintenance/') ? 'Maintenance' : 'Repair'}`, "item": `https://fixitbay.net/${pageSlug}` }
        ]
      }
    });
    // Deduplicate: keep only the first of each BreadcrumbList and Service
    const seen = new Set();
    const deduped = schemas.filter(s => {
      const t = s.data?.['@type'];
      if (t === 'BreadcrumbList' || t === 'Service') {
        if (seen.has(t)) return false;
        seen.add(t);
      }
      return true;
    });
    return deduped;
  }, [schemaData, faqSchema, pageSlug, appliance]);
  useSchemas(mobileSchemas);

  useEffect(() => {
    const preloadId = 'hero-preload-link';
    if (document.getElementById(preloadId)) return;
    const link = document.createElement('link');
    link.id = preloadId; link.rel = 'preload'; link.as = 'image'; link.type = 'image/avif';
    link.href = HERO_AVIF_640;
    link.setAttribute('imagesrcset', `${HERO_AVIF_640} 640w, ${HERO_AVIF_960} 960w`);
    link.setAttribute('imagesizes', '100vw'); link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
    return () => { document.getElementById(preloadId)?.remove(); };
  }, []);

  useEffect(() => {
    let tracked = false;
    const onScroll = () => {
      if (tracked) return;
      if ((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 >= 50) {
        tracked = true; track('scroll_depth_50', { page: pageSlug });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pageSlug]);

  const isMaintenance = pageSlug.startsWith('maintenance/');
  const breadcrumbLabel = appliance === 'Appliance' ? 'All Services' : `${appliance} ${isMaintenance ? 'Maintenance' : 'Repair'}`;
  const actionWord = isMaintenance ? 'service' : 'repair';

  return (
    <main
      role="main"
      aria-label={`${appliance} repair service in San Francisco`}
      style={{ fontFamily: F, background: PC.navy, minHeight: '100vh', color: PC.white }}
      data-testid={`${pageSlug}-page`}
    >
      <SEOMetaTags
        title={pageTitle}
        description={metaDescription}
        canonical={`https://fixitbay.net/${pageSlug}`}
        noindex={noindex}
      />

      {/* ═══ 1. HERO ═══ */}
      <section style={{ background: PC.navy, padding: '40px 20px 32px', position: 'relative', overflow: 'hidden' }} data-testid="mobile-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {heroImage ? (
            <img src={heroImage} alt={heroImageAlt || `${appliance} repair technician`} width={640} height={640} loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: heroImagePosition, opacity: 0.15 }} />
          ) : (
          <picture>
            <source srcSet={`${HERO_AVIF_640} 640w, ${HERO_AVIF_960} 960w`} sizes="100vw" type="image/avif" />
            <source srcSet={`${HERO_WEBP_640} 640w, ${HERO_WEBP_960} 960w`} sizes="100vw" type="image/webp" />
            <img src={HERO_WEBP_640} alt={`${appliance || 'Appliance'} repair technician at work in San Francisco`} width={640} height={640} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          </picture>
          )}
        </div>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${PC.navy} 0%, rgba(13,27,42,0.88) 100%)`, zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <nav aria-label="breadcrumb" style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: F, fontSize: 11, color: PC.white45, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              <a href="/" style={{ color: PC.white45, textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 6px' }}>&rsaquo;</span>
              <a href={isMaintenance ? '/maintenance' : '/services'} style={{ color: PC.white45, textDecoration: 'none' }}>{isMaintenance ? 'Maintenance' : 'Services'}</a>
              <span style={{ margin: '0 6px' }}>&rsaquo;</span>
              <span style={{ color: PC.white60, fontWeight: 700 }}>{breadcrumbLabel}</span>
            </div>
          </nav>

          <p style={{ fontSize: 11, fontWeight: 700, color: PC.white45, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 10px', fontFamily: F }}>San Francisco &amp; Bay Area</p>

          <h1 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, lineHeight: 1.2, color: PC.white, margin: '0 0 10px' }}>{heroTitle}</h1>
          <p style={{ fontFamily: F, fontSize: 14, color: PC.white60, margin: '0 0 18px', fontWeight: 500, lineHeight: 1.5 }}>{heroSubtitle}</p>
          {heroDescription && <p style={{ fontFamily: F, fontSize: 13, color: PC.white60, margin: '0 0 18px', fontWeight: 400, lineHeight: 1.6 }}>{heroDescription}</p>}

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { top: '4.9 \u2B50', bottom: '94 Reviews' },
              { top: 'Same-Day', bottom: 'Service' },
              { top: '180-Day', bottom: 'Warranty' },
              { top: 'License', bottom: '#51001' },
            ].map((b, i) => (
              <div key={i} style={{
                background: PC.white08,
                border: `1px solid ${PC.white15}`,
                borderRadius: PC.r,
                padding: '7px 12px',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: PC.white, display: 'block' }}>{b.top}</span>
                <span style={{ fontSize: 10, color: PC.white45, display: 'block' }}>{b.bottom}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: PC.accentBg,
            border: `1px solid ${PC.accentBorder}`,
            borderRadius: PC.r,
            padding: '14px 16px',
            marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div>
              <span style={{ fontSize: 40, fontWeight: 800, color: PC.accent, lineHeight: 1 }}>$60</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: PC.white, display: 'block', marginTop: 2 }}>Diagnostic</span>
            </div>
            <span style={{ fontSize: 12, color: PC.white60, lineHeight: 1.5 }}>
              Applied to any {isMaintenance ? 'service' : 'repair'} if proceeding
            </span>
          </div>

          <button onClick={() => handleBook('hero', pageSlug)} data-testid="hero-book-btn" aria-label="Book appliance repair service online" style={{
            width: '100%', minHeight: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: PC.accent, color: PC.white, border: 'none', borderRadius: PC.r,
            fontSize: 15, fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer', fontFamily: F, marginBottom: 10,
          }}>BOOK REPAIR ONLINE</button>

          <a href={`tel:${PHONE}`} onClick={() => handleCall('hero', pageSlug)} data-testid="hero-call-btn" aria-label={`Call FixitBay LLC at ${PHONE_DISPLAY}`} style={{
            width: '100%', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'transparent', color: PC.white, border: '2px solid rgba(255,255,255,0.65)', borderRadius: PC.r,
            fontSize: 15, fontWeight: 700, textDecoration: 'none', fontFamily: F,
          }}>CALL {PHONE_DISPLAY}</a>

          <p style={{ textAlign: 'center', margin: '8px 0 0', fontSize: 12, fontFamily: F }}>
            <a href={`sms:${PHONE}?body=${encodeURIComponent(`Hi FixitBay LLC, I need ${isMaintenance ? 'maintenance service' : 'a repair'}.`)}`} aria-label="Text FixitBay LLC to schedule service" style={{ color: PC.white45, textDecoration: 'underline' }}>
              Text us for fastest scheduling
            </a>
          </p>
        </div>
      </section>

      {/* ═══ 2. COMMON ISSUES ═══ */}
      {issues.length > 0 && (
        <section style={{ background: PC.cream, padding: '28px 20px' }} aria-label="Common issues we fix" data-testid="common-issues" id="issues">
          <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 14px', fontFamily: F }}>Common Issues We Fix</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {issues.map((issue, i) => (
              <button key={i} onClick={() => handleBook('issue', pageSlug)} data-testid={`issue-pill-${i}`} style={{
                display: 'flex', alignItems: 'center',
                background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderLeft: `3px solid ${PC.accent}`,
                borderRadius: PC.r, padding: '10px 14px', fontSize: 13, fontWeight: 600, color: PC.textDark,
                cursor: 'pointer', fontFamily: F, textAlign: 'left',
                ...(issues.length % 2 !== 0 && i === issues.length - 1 ? { gridColumn: 'span 2' } : {}),
              }}>{issue.label}</button>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 3. WE SERVICE (brands) ═══ */}
      <section style={{ background: PC.navy, padding: '28px 20px' }} aria-label="Brands we service" data-testid="brands-section">
        <p style={{ fontSize: 11, fontWeight: 700, color: PC.white45, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 14px', fontFamily: F }}>Appliances We Service</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {brands.map(b => (
            <a key={b.name} href={b.href} data-testid={`brand-link-${b.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', padding: '10px 4px', background: PC.navyMid, border: `1px solid ${PC.white10}`, borderRadius: PC.r, aspectRatio: '2/1' }}>
              <img src={b.logo} alt={`${b.name} logo`} width={72} height={b.h || 38} loading="lazy" style={{ maxHeight: 28, width: '75%', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.65)' }} />
            </a>
          ))}
        </div>
        <a href="/brands" style={{ color: PC.accent, fontWeight: 700, textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: 10, fontSize: 13, fontFamily: F }}>and more &rarr;</a>
      </section>

      {/* ═══ 4. TECHNICIAN PHOTO ═══ */}
      {techImage && (
        <section style={{ background: PC.navyMid, padding: 0 }} data-testid="tech-photo">
          <div style={{ position: 'relative' }}>
            <img src={techImage} alt={techImageAlt} width={640} height={640} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: `linear-gradient(to bottom, transparent, ${PC.navyMid})` }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: PC.white, margin: '0 0 2px', fontFamily: F }}>Andrei — Lead Technician</p>
              <p style={{ fontSize: 12, color: PC.white60, margin: 0, fontFamily: F }}>Mechanical engineer &middot; BHGS License #51001</p>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 5. HOW IT WORKS ═══ */}
      <section style={{ background: PC.cream, padding: '32px 20px' }} aria-label="How our service works" data-testid="how-it-works">
        <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: F }}>How It Works</p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.textDark, margin: '0 0 18px', fontFamily: F }}>4 Steps to a Fixed Appliance</h2>
        <div>
          {[
            { n: '1', title: 'Book in 30 Seconds', desc: 'Pick a time online or call us. Same-day slots available.' },
            { n: '2', title: 'We Diagnose On-Site', desc: `$60 diagnostic — applied to your ${actionWord}. No hidden fees.` },
            { n: '3', title: 'Professional Repair', desc: 'Quality parts. Upfront pricing before any work begins.' },
            { n: '4', title: '180-Day Warranty', desc: 'If the same issue returns within 180 days, we come back at no charge.' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderLeft: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: 16, marginBottom: 8 }}>
              <div style={{ minWidth: 32, height: 32, background: PC.accent, color: PC.white, borderRadius: '50%', fontSize: 14, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: F }}>{step.n}</div>
              <div>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.textDark, margin: '0 0 4px' }}>{step.title}</p>
                <p style={{ fontFamily: F, fontSize: 13, color: PC.textMid, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. SERVICE AREAS ═══ */}
      <section style={{ background: PC.navy, padding: '32px 20px' }} aria-label="Service areas" data-testid="local-seo">
        <p style={{ fontSize: 11, fontWeight: 700, color: PC.white45, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 6px' }}>Where We Work</p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.white, margin: '0 0 10px' }}>San Francisco &middot; Peninsula &middot; Marin</h2>
        <p style={{ fontSize: 13, color: PC.white60, margin: '0 0 16px', lineHeight: 1.6 }}>Same-day service across the Bay Area — no travel surcharge within SF city limits.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
          <div style={{ background: PC.white08, border: `1px solid ${PC.white10}`, borderTop: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: '12px 10px' }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: PC.white, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>SF</p>
            {['All neighborhoods', 'Same-day', 'No surcharge'].map((t, i) => (
              <p key={i} style={{ fontSize: 11, color: PC.white60, margin: '0 0 3px', lineHeight: 1.4 }}>&middot; {t}</p>
            ))}
          </div>
          <div style={{ background: PC.white08, border: `1px solid ${PC.white10}`, borderTop: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: '12px 10px' }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: PC.white, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Peninsula</p>
            {['Daly City', 'South SF', 'San Mateo', 'Millbrae', 'Pacifica'].map((t, i) => (
              <p key={i} style={{ fontSize: 11, color: PC.white60, margin: '0 0 3px', lineHeight: 1.4 }}>&middot; {t}</p>
            ))}
          </div>
          <div style={{ background: PC.white08, border: `1px solid ${PC.white10}`, borderTop: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: '12px 10px' }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: PC.white, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Marin</p>
            {['San Rafael', 'Novato', 'Mill Valley', 'Sausalito', 'Tiburon'].map((t, i) => (
              <p key={i} style={{ fontSize: 11, color: PC.white60, margin: '0 0 3px', lineHeight: 1.4 }}>&middot; {t}</p>
            ))}
          </div>
        </div>
        <a href="/service-areas" data-testid="view-all-areas" style={{ fontSize: 13, color: PC.accent, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          View all service areas &rarr;
        </a>
      </section>

      {/* ═══ 7. E-E-A-T TECHNICIAN ═══ */}
      <section style={{ background: PC.cream, padding: '28px 20px' }} aria-label="About our technician" data-testid="eeat-technician">
        <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 14px', fontFamily: F }}>Your Technician</p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          {techImage && (
            <img src={techImage} alt="Andrei, FixitBay LLC lead technician" width={72} height={72} loading="lazy" style={{ borderRadius: PC.r, objectFit: 'cover', flexShrink: 0, width: 72, height: 72 }} />
          )}
          <div>
            <p style={{ fontWeight: 700, fontSize: 15, color: PC.textDark, margin: '0 0 6px', fontFamily: F }}>Andrei — Lead Technician</p>
            <p style={{ fontSize: 13, color: PC.textMid, margin: '0 0 10px', lineHeight: 1.5, fontFamily: F }}>Mechanical engineer with 10+ years experience. Diagnoses and fixes what others miss. BHGS License #51001.</p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['Licensed & Insured', '10+ Years Exp.', 'Same-Day'].map((tag, i) => (
                <span key={i} style={{
                  background: PC.accentBg,
                  border: `1px solid ${PC.accentBorder}`,
                  borderRadius: PC.r,
                  padding: '4px 10px',
                  fontSize: 11, fontWeight: 700, color: PC.textDark,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. REVIEWS ═══ */}
      <section style={{ background: PC.navy, padding: '32px 20px' }} aria-label="Customer reviews" data-testid="reviews-section">
        <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.white, margin: '0 0 6px', textAlign: 'center', fontFamily: F }}>What SF Customers Say</h2>
        <p style={{ fontFamily: F, fontSize: 13, color: PC.white60, margin: '0 0 24px', textAlign: 'center' }}>
          <span style={{ color: PC.accent }}>&#9733;</span> 4.9 / 5 &middot; Google: 82 &middot; Thumbtack: 117
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: PC.navyMid, border: `1px solid ${PC.white08}`, borderRadius: PC.r, padding: 18 }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                {Array(r.stars).fill(0).map((_, j) => <span key={j} style={{ color: PC.accent, fontSize: 14 }}>&#9733;</span>)}
              </div>
              <p style={{ fontFamily: F, fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: '0 0 12px', lineHeight: 1.6, fontStyle: 'italic' }}>"{r.text}"</p>
              <p style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: PC.white45, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 9. TRANSPARENT PRICING ═══ */}
      <section style={{ background: PC.cream, padding: '32px 20px' }} aria-label="Pricing information" data-testid="pricing-section">
        <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: F }}>Transparent Pricing</p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.textDark, margin: '0 0 16px', fontFamily: F }}>No Hidden Fees</h2>

        <div style={{ background: PC.white, border: `2px solid ${PC.accent}`, borderRadius: PC.r, padding: '22px 20px', textAlign: 'center', marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
          <span style={{ position: 'absolute', top: 0, right: 0, background: PC.accent, color: PC.white, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderBottomLeftRadius: PC.r, borderTopRightRadius: PC.r, letterSpacing: '0.08em' }}>NO HIDDEN FEES</span>
          <span style={{ fontFamily: F, fontSize: 48, fontWeight: 800, color: PC.accent, display: 'block', lineHeight: 1, marginTop: 8 }}>$60</span>
          <span style={{ fontFamily: F, fontSize: 14, color: PC.textMid, display: 'block', marginBottom: 16 }}>diagnostic visit</span>
          {[`Upfront pricing — no surprises`, `$60 credited toward ${actionWord}`, '180-day warranty included', `No fix, no ${actionWord} charge`].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', justifyContent: 'center' }}>
              <span style={{ color: PC.accent, fontWeight: 700, fontSize: 14 }}>&#10003;</span>
              <span style={{ fontFamily: F, fontSize: 13, color: PC.textMid }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { title: '180-Day Warranty', desc: 'Coverage on all parts and labor.' },
            { title: 'No Hidden Fees', desc: 'You approve the estimate before work starts.' },
          ].map((card, i) => (
            <div key={i} style={{ background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderRadius: PC.r, padding: 16 }}>
              <p style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: PC.textDark, margin: '0 0 4px' }}>{card.title}</p>
              <p style={{ fontFamily: F, fontSize: 13, color: PC.textMid, margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      {(SERVICE_PRICING[appliance] || MAINTENANCE_PRICING[appliance]) && (() => {
        const p = SERVICE_PRICING[appliance] || MAINTENANCE_PRICING[appliance];
        const isMaint = !SERVICE_PRICING[appliance];
        return (
          <section style={{ background: PC.cream, padding: '32px 16px' }} data-testid="pricing-section">
            <div style={{ color: PC.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6, fontFamily: F }}>PRICING</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: PC.navy, marginBottom: 6 }}>
              {appliance} {isMaint ? 'Maintenance' : 'Repair'} Cost
            </h2>
            <div style={{ background: '#fff', borderRadius: 6, padding: '16px 18px', border: '1px solid #e5e7eb', marginTop: 12 }}>
              <p style={{ fontFamily: F, fontSize: 15, color: PC.navy, lineHeight: 1.8, margin: '0 0 8px' }}>
                <strong>From ${p.from}</strong> after $60 diagnostic.
              </p>
              <p style={{ fontFamily: F, fontSize: 13, color: '#4A5568', lineHeight: 1.7, margin: 0 }}>
                {p.repairs || p.includes}.
              </p>
              {p.luxury && (
                <p style={{ fontFamily: F, fontSize: 13, color: '#4A5568', lineHeight: 1.7, margin: '6px 0 0' }}>
                  <strong>Luxury brands:</strong> {p.luxury}.
                </p>
              )}
            </div>
          </section>
        );
      })()}

      {/* ═══ 10. FAQ ═══ */}
      {faqs.length > 0 && (
        <section style={{ background: PC.navy, padding: '32px 20px' }} aria-label="Frequently asked questions" data-testid="faq-section">
          <p style={{ fontSize: 11, fontWeight: 700, color: PC.white45, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: F }}>FAQ</p>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.white, margin: '0 0 16px', fontFamily: F }}>Common Questions</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${PC.white08}` }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  data-testid={`faq-btn-${i}`}
                  aria-expanded={faqOpen === i}
                  aria-controls={`faq-answer-${i}`}
                  style={{
                    width: '100%', minHeight: 52, padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontSize: 14, fontWeight: 600, color: PC.white, background: 'none', border: 'none', fontFamily: F, cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ paddingRight: 12 }}>{faq.q || faq.question}</span>
                  <span style={{ color: PC.accent, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{faqOpen === i ? '\u2212' : '+'}</span>
                </button>
                {faqOpen === i && (
                  <div id={`faq-answer-${i}`} role="region" style={{ padding: '0 0 16px', fontFamily: F, color: PC.white60, fontSize: 14, lineHeight: 1.65 }}>{faq.a || faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 11. REPAIR VS REPLACE ═══ */}
      {repairVsReplace && (
        <section style={{ background: PC.cream, padding: '32px 20px' }} data-testid="repair-vs-replace">
          <p style={{ fontSize: 11, fontWeight: 700, color: PC.accent, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: F }}>Expert Advice</p>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.textDark, margin: '0 0 10px', fontFamily: F }}>{repairVsReplace.title || `Repair vs. Replace Your ${appliance}`}</h2>
          <p style={{ fontFamily: F, fontSize: 13, color: PC.textMid, margin: '0 0 16px', lineHeight: 1.5 }}>{repairVsReplace.intro}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {repairVsReplace.items.map((item, idx) => (
              <div key={idx} style={{ background: PC.white, border: '1px solid rgba(0,0,0,0.08)', borderLeft: `3px solid ${PC.accent}`, borderRadius: PC.r, padding: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  background: PC.accentBg, color: PC.accent, fontWeight: 700, fontSize: 13,
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{item.action === 'repair' ? '\u2713' : '\u2192'}</div>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: PC.textDark, margin: '0 0 2px' }}>{item.condition}</p>
                  <p style={{ fontFamily: F, fontSize: 12, color: PC.textMid, margin: 0, lineHeight: 1.5 }}>{item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 12. RELATED SERVICES ═══ */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ background: PC.navy, padding: '32px 20px' }} data-testid="related-services">
          <p style={{ fontSize: 11, fontWeight: 700, color: PC.white45, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 14px', fontFamily: F }}>Related Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {relatedLinks.map((link, idx) => (
              <a key={idx} href={link.href} data-testid={`related-link-${idx}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: PC.navyMid, border: `1px solid ${PC.white08}`, borderRadius: PC.r, padding: 16,
                textDecoration: 'none', color: PC.white,
              }}>
                <div>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: PC.white, margin: '0 0 2px' }}>{link.label}</p>
                  {link.desc && <p style={{ fontFamily: F, fontSize: 12, color: PC.white60, margin: 0 }}>{link.desc}</p>}
                </div>
                <span style={{ color: PC.accent, fontSize: 18, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>&rarr;</span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 13. FINAL CTA ═══ */}
      <section style={{ background: PC.navy, borderTop: `3px solid ${PC.accent}`, padding: '40px 20px', textAlign: 'center' }} aria-label="Book service" data-testid="final-cta">
        <p style={{ color: PC.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 10px', fontFamily: F }}>Schedule Today</p>
        <h2 style={{ fontFamily: F, fontSize: 24, fontWeight: 800, color: PC.white, lineHeight: 1.2, margin: '0 0 8px' }}>Get Your {appliance} Running Like New</h2>
        <p style={{ fontFamily: F, fontSize: 13, color: PC.white45, margin: '0 0 8px' }}>Licensed technician &middot; Genuine parts &middot; One-visit resolution</p>
        <p style={{ fontFamily: F, fontSize: 12, color: PC.white45, margin: '0 0 28px' }}>Same-day &middot; 180-day warranty &middot; $60 diagnostic</p>
        <button onClick={() => handleBook('final', pageSlug)} data-testid="final-book-btn" aria-label="Book appliance repair service online" style={{
          width: '100%', minHeight: 56, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: PC.accent, color: PC.white, border: 'none', borderRadius: PC.r,
          fontSize: 16, fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer', fontFamily: F,
        }}>BOOK SERVICE ONLINE</button>
      </section>

      {/* Back link */}
      <div style={{ padding: '14px 20px', textAlign: 'center', background: PC.navy }}>
        <a href="/" style={{ fontFamily: F, fontSize: 13, color: PC.white45, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          &larr; Back to FixitBay LLC Home
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) { body { padding-bottom: 56px; } }
        [data-testid="${pageSlug}-page"] * { box-sizing: border-box; }
        [data-testid="${pageSlug}-page"] h1,
        [data-testid="${pageSlug}-page"] h2,
        [data-testid="${pageSlug}-page"] h3,
        [data-testid="${pageSlug}-page"] button,
        [data-testid="${pageSlug}-page"] a {
          font-family: 'Montserrat', 'Inter', -apple-system, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default MobileServiceLanding;

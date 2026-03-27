import React, { useEffect, useState, lazy, Suspense } from 'react';
import { CalendarCheck, User, SearchCheck, ShieldCheck, Phone, Home as HomeIcon, DollarSign } from 'lucide-react';
import SEOMetaTags from './SEOMetaTags';
import ServiceSchema from './schema/ServiceSchema';
import useAggregateRating from '../hooks/useAggregateRating';
import useInView from '../hooks/useInView';
import HomeHero from './sections/HomeHero';
import HomeServicesGrid from './sections/HomeServicesGrid';
import HomePricing from './sections/HomePricing';
import HomeReviews from './sections/HomeReviews';
import HomeExploreLinks from './sections/HomeExploreLinks';
import HomeBlogSection from './sections/HomeBlogSection';
import FAQAccordion from './sections/FAQAccordion';

const UnifiedFooter = lazy(() => import('./UnifiedFooter'));
const ThumbtackReviewWidget = lazy(() => import('./sections/ThumbtackReviewWidget'));
const ServiceAreaMapLibre = lazy(() => import('./sections/ServiceAreaMapLibre'));

/* ─── Homepage-only schema injection (BreadcrumbList + FAQPage) ─── */
const HomepageSchemas = () => {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }]
    };
    const faqSchema = {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does appliance repair cost in the Bay Area?", "acceptedAnswer": { "@type": "Answer", "text": "Our diagnostic fee is $60, which is applied toward the repair if you choose to proceed. Most common repairs range from $150 to $400 depending on the appliance type and issue. We always provide an upfront estimate before starting any work." } },
        { "@type": "Question", "name": "Do you offer fast appliance repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer same- or next-day and next-day appointments throughout San Francisco, Peninsula, and Marin County. Call us at (760) 543-5733 or book online to check availability for your area." } },
        { "@type": "Question", "name": "What areas do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve 21 cities across San Francisco, the Peninsula (Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara), and Marin County (Mill Valley, San Rafael, Novato, Sausalito, Tiburon, Corte Madera, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo, Belvedere)." } },
        { "@type": "Question", "name": "What brands do you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair all major brands including Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Sub-Zero, Viking, Wolf, Thermador, Miele, and many more." } },
        { "@type": "Question", "name": "Do you provide a warranty on repairs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every repair comes with a 180-day warranty on both parts and labor. If the same issue recurs within the warranty period, we will fix it at no additional cost." } },
        { "@type": "Question", "name": "What appliances do you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair refrigerators, washers, dryers, dishwashers, ovens and ranges, cooktops, ice makers, wine coolers, garbage disposals, and commercial appliances." } },
        { "@type": "Question", "name": "Are your technicians licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our technicians are licensed by the State of California (License #51001) and fully insured." } },
        { "@type": "Question", "name": "How do I schedule a repair?", "acceptedAnswer": { "@type": "Answer", "text": "You can schedule online through our booking page or call us directly at (760) 543-5733. We offer flexible scheduling including same- or next-day and next-day appointments, Monday through Saturday." } }
      ]
    };
    const ids = ['homepage-breadcrumb-schema', 'homepage-faq-schema'];
    const schemas = [breadcrumbSchema, faqSchema];
    ids.forEach((id, i) => {
      if (!document.getElementById(id)) {
        const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = id; s.textContent = JSON.stringify(schemas[i]); document.head.appendChild(s);
      }
    });
    return () => ids.forEach(id => { const el = document.getElementById(id); if (el) el.remove(); });
  }, []);
  return null;
};

const faqs = [
  { question: "How much does appliance repair cost in the Bay Area?", answer: "Our diagnostic fee is $60, which is applied toward the repair if you choose to proceed. Most common repairs range from $150 to $400 depending on the appliance type and issue. We always provide an upfront estimate before starting any work." },
  { question: "Do you offer fast appliance repair?", answer: "Yes! We offer same- or next-day and next-day appointments throughout San Francisco, Peninsula, and Marin County. Book online to check availability for your area." },
  { question: "What areas do you serve?", answer: "We serve San Francisco, the Peninsula, and Marin County — including Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, San Rafael, Mill Valley, Novato, and nearby communities." },
  { question: "What brands do you repair?", answer: "We repair all major brands including Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Sub-Zero, Viking, Wolf, Thermador, Miele, and many more." },
  { question: "Do you provide a warranty on repairs?", answer: "Yes — every repair includes a 180-day warranty on parts and labor. If the same issue returns within the warranty period, we fix it at no additional cost." },
  { question: "What appliances do you repair?", answer: "Refrigerators, washers, dryers, dishwashers, ovens, cooktops, ice makers, wine coolers, garbage disposals, and commercial appliances." },
  { question: "Are your technicians licensed and insured?", answer: "All technicians are licensed by the State of California (License #51001) and fully insured." },
  { question: "How do I schedule a repair?", answer: "Book online through our booking page. Same- or next-day and next-day appointments are available Monday through Saturday." }
];

const ProfessionalLandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const t = setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 500);
      return () => clearTimeout(t);
    } else { window.scrollTo(0, 0); }
  }, []);

  useAggregateRating(4.9, 94);

  const [mapRef, isMapInView] = useInView({ rootMargin: '300px' });
  const [reviewsRef, isReviewsInView] = useInView({ rootMargin: '200px' });

  /* Sticky Call Now — show after scrolling past hero */
  const [showCallBtn, setShowCallBtn] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowCallBtn(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* GEO meta & preconnect */
  useEffect(() => {
    const metas = [
      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: 'San Francisco, California' },
      { name: 'geo.position', content: '37.7749;-122.4194' },
      { name: 'ICBM', content: '37.7749, -122.4194' },
    ];
    metas.forEach(({ name, content }) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    });
    ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach(href => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const l = document.createElement('link');
        l.rel = 'preconnect'; l.href = href;
        if (href.includes('gstatic')) l.crossOrigin = 'anonymous';
        document.head.appendChild(l);
      }
    });
  }, []);

  return (
    <div className="min-h-screen pb-[72px] lg:pb-0" style={{ background: '#fff', fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif' }}>
      <SEOMetaTags title="Appliance Repair San Francisco & Bay Area | FixitBay LLC" description="Professional appliance repair in San Francisco Bay Area. Same- or next-day appointments for refrigerators, washers, dryers, dishwashers. Call (760) 543-5733 or book online." canonical="https://fixitbay.net/" keywords="appliance repair San Francisco, refrigerator repair, washer repair, appliance repair Bay Area, FixitBay LLC" ogTitle="Appliance Repair San Francisco & Bay Area | FixitBay LLC" ogDescription="Professional appliance repair in San Francisco Bay Area. Same- or next-day appointments for refrigerators, washers, dryers, dishwashers. Call (760) 543-5733 or book online." ogImage="https://fixitbay.net/images/og-cover.png" twitterSite="@fixitbay" twitterTitle="Appliance Repair SF Bay Area | FixitBay LLC" twitterDescription="Licensed appliance repair in San Francisco. $60 diagnostic, 180-day warranty, fast scheduling." />
      <HomepageSchemas />
      <HomeHero />

      {/* ═══ STATS SECTION ═══ */}
      <section className="block" style={{ background: '#F8F5F0' }} data-testid="stats-section">
        <div className="py-6 lg:py-16" style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <div className="stats-desktop-grid" style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'stretch' }}>
            {[
              { num: '22', numMobile: '22+', unit: 'Cities', title: 'BAY AREA', titleDesktop: 'BAY AREA COVERAGE', desc: 'SF, Peninsula & Marin', numSize: 64, mobileClass: 'stat-num-cities' },
              { num: '$60', numMobile: '$60', unit: 'Diagnostic', title: 'TOWARD REPAIR', titleDesktop: 'GOES TOWARD REPAIR', desc: 'Applied if you proceed', numSize: 64, mobileClass: 'stat-num-diag' },
              { num: '180-Day', numMobile: null, unit: 'Warranty', title: 'PARTS & LABOR', titleDesktop: 'PARTS & LABOR', desc: '180-day guarantee', numSize: 36, mobileClass: 'stat-num-warranty' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div className="stat-accent-bar" style={{ width: 3, alignSelf: 'stretch', background: '#FF5722', flexShrink: 0 }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      {/* Desktop: original num */}
                      <span className={`stat-num stat-num-desktop ${s.mobileClass}`} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: s.numSize, lineHeight: 1, color: '#0D1B2A', whiteSpace: 'nowrap' }}>{s.num}</span>
                      {/* Mobile: custom num (hidden on desktop via CSS) */}
                      {s.numMobile && <span className={`stat-num stat-num-mobile ${s.mobileClass}`} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, lineHeight: 1, color: '#0D1B2A', whiteSpace: 'nowrap', display: 'none' }}>{s.numMobile}</span>}
                      {!s.numMobile && s.mobileClass === 'stat-num-warranty' && (
                        <span className="stat-num stat-num-mobile stat-num-warranty" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, lineHeight: 1, color: '#0D1B2A', display: 'none' }}>
                          180<span style={{ fontSize: 14, fontWeight: 600, verticalAlign: 'super', marginLeft: 1 }}>-Day</span>
                        </span>
                      )}
                      <span className="stat-unit" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 20, color: '#FF5722' }}>{s.unit}</span>
                    </div>
                    <div className="stat-title stat-title-desktop" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.titleDesktop}</div>
                    <div className="stat-title stat-title-mobile" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'none' }}>{s.title}</div>
                    <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 13, color: '#4A5568', maxWidth: 200, marginTop: 4, lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
                {i < 2 && <div className="stat-divider" style={{ width: 1, background: 'rgba(0,0,0,0.08)', margin: '0 24px' }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile intro cards */}
      <section className="lg:hidden" style={{ background: '#F8F5F0', padding: '24px 0' }}>
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 16px' }}>
          <div className="grid gap-4">
            {[
              { title: 'In-Home Repairs Across SF, Peninsula & Marin', body: 'Looking for appliance repair near me in San Francisco? FixitBay LLC provides fast, in-home service across all SF neighborhoods. We repair refrigerators, freezers, ice makers, dishwashers, ovens, cooktops, washers, dryers, wine coolers, and more.', iconBg: '#F0EBE5', iconColor: '#0D1B2A', icon: <HomeIcon size={22} strokeWidth={2} /> },
              { title: 'Clear Pricing Before Work Starts', body: 'Your $60 diagnostic visit is applied toward the repair if you proceed. You approve the estimate first.', iconBg: '#F8F5F0', iconColor: '#8B5A2B', icon: <DollarSign size={22} strokeWidth={2} /> },
              { title: 'Fast Scheduling, Local Service', body: 'Same- or next-day and next-day appointments available Monday through Saturday.', iconBg: '#FECACA', iconColor: '#FF5722', icon: <CalendarCheck size={22} strokeWidth={2} /> },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-5 border border-gray-200 bg-white shadow-sm">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: c.iconColor }}>{c.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0D1B2A' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="intro-cta-row flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="/book?go=1" data-testid="intro-cta-book" className="r2-btn-primary intro-cta-book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 230, height: 56, borderRadius: 4, background: '#FF5722', color: '#fff', fontSize: 16, fontWeight: 800, textDecoration: 'none' }}>BOOK REPAIR ONLINE</a>
            <a href="tel:+17605435733" data-testid="intro-cta-call" className="r2-btn-secondary intro-cta-call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, minWidth: 230, height: 56, borderRadius: 4, background: '#fff', color: '#FF5722', fontSize: 16, fontWeight: 800, textDecoration: 'none', border: '2px solid #FF5722' }}><Phone size={18} /> Call (760) 543-5733</a>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Dark Navy ═══ */}
      <section id="how-it-works" style={{ background: '#0D1B2A', padding: '80px 0' }} data-testid="how-it-works-section">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="hidden lg:block text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', letterSpacing: '0.22em', textTransform: 'uppercase' }}>THE PROCESS</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 40, color: '#FFFFFF', marginTop: 12 }}>Simple. Fast. Professional.</h2>
          </div>
          <h2 className="lg:hidden text-3xl font-bold mb-3 text-center" style={{ color: '#FFFFFF' }}>How It Works</h2>
          <div style={{ marginTop: 56 }}>
            <div className="hiw-steps-container" style={{ position: 'relative' }}>
              <div className="hidden lg:block" style={{ position: 'absolute', top: 80, left: '18%', right: '18%', height: 1, borderTop: '1px dashed rgba(255,87,34,0.30)', zIndex: 0 }} aria-hidden="true" />
              {[
                { num: '01', icon: <CalendarCheck size={32} strokeWidth={1.5} />, title: 'BOOK ONLINE', desc: 'Schedule in 60 seconds, no calls' },
                { num: '02', icon: <User size={32} strokeWidth={1.5} />, title: 'TECH ARRIVES', desc: 'Licensed, on time, with tools' },
                { num: '03', icon: <SearchCheck size={32} strokeWidth={1.5} />, title: 'DIAGNOSIS', desc: 'Upfront estimate, zero surprises' },
                { num: '04', icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'REPAIR DONE', desc: '180-day warranty on every job' },
              ].map((step, i) => {
                const card = (
                <div className="hiw-step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span className="hiw-num-watermark" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 72, lineHeight: 1, color: 'rgba(255,255,255,0.05)', display: 'block' }}>{step.num}</span>
                  <span className="hiw-num-pill" style={{ display: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, background: '#FF5722', color: '#fff', borderRadius: 12, padding: '2px 10px', marginBottom: 6 }}>{step.num}</span>
                  <div style={{ color: '#FF5722', marginTop: -8 }} className="hiw-step-icon">{step.icon}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#FFFFFF', marginTop: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{step.title}</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.50)', maxWidth: 160, lineHeight: 1.6, marginTop: 8 }}>{step.desc}</p>
                </div>
                );
                const wrapped = i === 0 ? <a key={`step-${i}`} href="/book" style={{ textDecoration: 'none', color: 'inherit' }} className="hiw-step-card-wrap">{card}</a> : <div key={`step-${i}`} className="hiw-step-card-wrap">{card}</div>;
                return (
                  <React.Fragment key={i}>
                    {wrapped}
                    {i < 3 && i !== 1 && <div className="hiw-arrow" aria-hidden="true"><span className="hiw-arrow-h">&rarr;</span></div>}
                    {i === 1 && <div className="hiw-arrow hiw-arrow-down" aria-hidden="true"><div className="hiw-connector-l"></div></div>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          {/* Mobile: vertical steps — hidden */}
          <div className="hidden px-2 mt-6">
            {[
              { num: '01', title: 'Book Online', desc: 'Schedule your repair in seconds — no calls, no waiting.' },
              { num: '02', title: 'Technician Arrives', desc: 'A licensed technician arrives on time with the right tools.' },
              { num: '03', title: 'Quick Diagnosis', desc: 'We diagnose the issue and provide an upfront estimate — no surprises.' },
              { num: '04', title: 'Professional Repair', desc: 'Fast, quality repair backed by our 180-day warranty.' },
            ].map((step, i) => {
              const inner = (
              <div data-testid={`hiw-mobile-step-${i}`} style={{ padding: '20px 16px', borderLeft: '3px solid #FF5722', marginBottom: 12, background: 'rgba(255,255,255,0.03)' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 28, color: '#FF5722', display: 'block', marginBottom: 6, lineHeight: 1 }}>{step.num}</span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#FFFFFF', margin: '0 0 6px 0' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
              );
              return i === 0 ? <a key={i} href="/book" style={{ textDecoration: 'none', color: 'inherit' }}>{inner}</a> : <React.Fragment key={i}>{inner}</React.Fragment>;
            })}
          </div>
        </div>
      </section>

      <HomeServicesGrid />
      <HomePricing />
      <HomeReviews ref={reviewsRef} />

      {/* ═══ SERVICE AREA MAP ═══ */}
      <div ref={mapRef} id="service-area">
        {isMapInView && <Suspense fallback={<div style={{ minHeight: 600 }} />}><ServiceAreaMapLibre /></Suspense>}
      </div>

      <FAQAccordion faqs={faqs} testIdPrefix="faq" />
      <HomeBlogSection />
      <HomeExploreLinks />

      {/* Utility styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .stats-desktop-grid { display: grid; }
        @media (max-width: 1023px) {
          .stats-desktop-grid { display: grid !important; grid-template-columns: 1fr 1px 1fr 1px 1fr; align-items: stretch; gap: 0; padding: 10px 12px; }
          .stats-desktop-grid .stat-divider { display: block !important; width: 1px !important; background: rgba(0,0,0,0.1) !important; margin: 0 !important; align-self: stretch; }
          .stats-desktop-grid .stat-accent-bar { display: none; }
          .stats-desktop-grid > div:not(.stat-divider) { text-align: center !important; padding: 4px 4px !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 2px !important; overflow: hidden; min-height: 80px; }
          .stats-desktop-grid > div:not(.stat-divider) > div { align-items: center !important; }
          .stats-desktop-grid > div:not(.stat-divider) > div > div:first-child { justify-content: center !important; flex-wrap: wrap; }
          .stats-desktop-grid .stat-num-desktop { display: none !important; }
          .stats-desktop-grid .stat-num-mobile { display: inline !important; }
          .stats-desktop-grid .stat-num-cities { font-size: 32px !important; font-weight: 800; color: #0D1B2A; }
          .stats-desktop-grid .stat-num-diag { font-size: 22px !important; font-weight: 700; color: #0D1B2A; }
          .stats-desktop-grid .stat-num-warranty { font-size: 28px !important; font-weight: 800; color: #0D1B2A; }
          .stats-desktop-grid .stat-unit { font-size: 11px !important; text-transform: uppercase; letter-spacing: 0.5px; }
          .stats-desktop-grid .stat-title-desktop { display: none !important; }
          .stats-desktop-grid .stat-title-mobile { display: block !important; }
          .stats-desktop-grid .stat-title { font-size: 9px !important; letter-spacing: 0.08em; }
          .stats-desktop-grid .stat-desc { display: none; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (hover: hover) and (pointer: fine) {
          .hiw-card:hover { box-shadow: 0 20px 48px -12px rgba(255,87,34,0.14); border-color: #FF5722; }
          .hiw-card:hover h3 { color: #FF5722; }
          .hiw-card .hiw-icon-circle { color: #FF5722; }
          .hiw-card:hover .hiw-icon-circle { background: #FF5722 !important; color: #fff !important; border-color: #FF5722 !important; }
          .svc-card:hover { border-color: #FF5722 !important; box-shadow: 0 8px 32px rgba(13,27,42,0.10); }
          .svc-card:hover .svc-view-btn { background: #FF5722 !important; }
          .pricing-card:hover { border-color: #FF5722 !important; }
          .intro-impact-card:hover { box-shadow: 0 20px 48px -12px rgba(255,87,34,0.15); border-color: #FF5722; }
          .intro-impact-card:hover .impact-accent-bar { background: #FF5722 !important; }
          .intro-impact-card:hover .impact-icon-circle { background: #FF5722 !important; color: #fff !important; }
          .r2-btn-primary:hover { background: #FF7043 !important; }
          .r2-btn-secondary:hover { background: rgba(255,87,34,0.08) !important; }
          .r2-ext-btn:hover { box-shadow: 0 6px 16px rgba(26,59,93,0.1); border-color: #FF5722 !important; }
          .r2-chip:hover { border-color: #FF5722 !important; background: #fff !important; }
        }
        @media (prefers-reduced-motion: reduce) { .hiw-card, .svc-card, .pricing-card { transition: color 200ms, border-color 200ms, box-shadow 200ms !important; transform: none !important; } }

        /* ═══ HIW Steps Layout ═══ */
        .hiw-steps-container { display: flex; align-items: flex-start; justify-content: center; gap: 0; }
        .hiw-step-card-wrap { flex: 1; min-width: 0; }
        .hiw-arrow { display: flex; align-items: center; justify-content: center; padding: 0 8px; color: #FF5722; font-size: 24px; font-weight: 700; padding-top: 56px; }
        .hiw-arrow-down { display: none; }
        .hiw-num-pill { display: none !important; }
        .hiw-num-watermark { display: block !important; }
        .hiw-connector-l { display: none; }
        @media (max-width: 767px) {
          .hiw-steps-container { display: grid !important; grid-template-columns: 1fr auto 1fr; gap: 4px 0; }
          .hiw-step-card-wrap { min-width: 0; }
          .hiw-arrow { padding: 0 4px; font-size: 18px; padding-top: 36px; }
          .hiw-arrow-h { display: inline; }
          .hiw-arrow-down { grid-column: 1 / -1; padding: 0; display: flex !important; justify-content: flex-end; height: 36px; position: relative; }
          .hiw-arrow-down .hiw-arrow-h { display: none; }
          .hiw-connector-l { display: block !important; position: absolute; right: 25%; top: 0; width: 50%; height: 100%; border-right: 2px dashed rgba(255,87,34,0.35); border-bottom: 2px dashed rgba(255,87,34,0.35); border-radius: 0 0 10px 0; }
          .hiw-connector-l::after { content: '\u2193'; position: absolute; bottom: -14px; left: -6px; color: #FF5722; font-size: 16px; font-weight: 700; }
          .hiw-num-watermark { display: none !important; }
          .hiw-num-pill { display: inline-block !important; }
          .hiw-step-icon { margin-top: 0 !important; }
          .hiw-step-card span[style*="fontSize: 72"], .hiw-step-card span[style*="font-size: 72px"] { font-size: 48px !important; }
        }

        @media (max-width: 768px) {
          * { box-sizing: border-box; }
          p, li { font-size: 14px; line-height: 1.6; }
          h2 { font-size: 22px !important; line-height: 1.25; word-break: break-word; }
          h3 { font-size: 18px !important; word-break: break-word; }
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) { min-height: 480px; padding: 60px 16px 80px; }
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) h1 { font-size: 26px !important; line-height: 1.2; margin-bottom: 12px; }
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) p { font-size: 14px; padding: 0 8px; margin-bottom: 20px; }
          .hero .cta-group, .hero [class*="buttons"], .hero [class*="cta"]:not(.hero-mobile-wrapper *) { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 320px; margin: 0 auto 24px; }
          .hero:not(.hero-section-root) a, .hero:not(.hero-section-root) button { width: 100%; min-height: 52px; padding: 15px 20px; font-size: 15px; display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 4px; font-family: Montserrat, sans-serif; font-weight: 700; text-decoration: none; }
          .trust-badges, .hero [class*="badge"]:not(.hero-mobile-wrapper *) { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 20px; }
          .trust-badges span, [class*="badge"] span { font-size: 12px; }
          [class*="steps"] .grid, [class*="process"] .grid { grid-template-columns: 1fr; gap: 16px; }
          .intro-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .intro-cta-book, .intro-cta-call { width: 100% !important; min-width: 0 !important; box-sizing: border-box; display: flex !important; justify-content: center; }
          .tabs, [class*="tab-list"], [role="tablist"] { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 8px; padding-bottom: 4px; }
          .tabs::-webkit-scrollbar { display: none; }
          .tab-btn, [role="tab"], [class*="tab-item"] { flex-shrink: 0; scroll-snap-align: start; padding: 10px 16px; font-size: 13px; white-space: nowrap; min-height: 44px; border-radius: 4px; }
          .tab-content .grid, [class*="services-grid"] { grid-template-columns: 1fr 1fr; gap: 12px; }
          .service-card, [class*="service-card"] { padding: 16px; min-width: 0; }
          .service-card h3 { font-size: 15px !important; }
          [class*="warranty"], [class*="guarantee"], [class*="no-surprises"] { padding: 32px 16px; }
          [class*="warranty"] .grid, [class*="guarantee"] .grid { grid-template-columns: 1fr; gap: 16px; }
          [class*="faq"], [class*="accordion"] { padding: 32px 16px; }
          .faq-item, [class*="accordion-item"] { border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
          .faq-question, [class*="accordion-trigger"], [class*="faq-q"] { font-size: 14px; padding: 14px 16px; min-height: 52px; display: flex; align-items: center; justify-content: space-between; font-family: Montserrat, sans-serif; font-weight: 600; cursor: pointer; width: 100%; text-align: left; }
          .faq-question .chevron, .faq-question svg, [class*="accordion-trigger"] svg { flex-shrink: 0; width: 20px; height: 20px; }
          .faq-answer, [class*="accordion-content"] { font-size: 14px; padding: 0 16px 16px; line-height: 1.6; }
          [class*="areas"], [class*="cities"], [class*="service-area"] { padding: 32px 16px; }
          [class*="pills"], [class*="city-list"], [class*="areas"] ul { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; list-style: none; }
          [class*="pill"], [class*="city-tag"], [class*="area-tag"] { font-size: 12px; padding: 8px 12px; white-space: nowrap; border-radius: 100px; min-height: 36px; display: flex; align-items: center; }
          [class*="popular-services"] .grid, [class*="services-list"] .grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          [class*="popular-services"] a, [class*="services-list"] a { font-size: 13px; padding: 10px 12px; min-height: 44px; display: flex; align-items: center; }
          footer { padding: 40px 16px 80px; }
          footer .grid, footer [class*="footer-grid"] { grid-template-columns: 1fr; gap: 32px; }
          footer h4, footer h3 { font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; font-family: Montserrat, sans-serif; font-weight: 700; }
          footer a { font-size: 14px; padding: 4px 0; min-height: 36px; display: flex; align-items: center; }
          footer .phone, footer a[href*="tel"] { font-size: 22px !important; font-weight: 800; color: #FF5722; font-family: Montserrat, sans-serif; display: block; margin-bottom: 12px; }
          #stats-section .grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 12px !important; }
          #stats-section .grid > div { border-left: 3px solid #FF5722 !important; padding: 12px 10px !important; }
          #stats-section .grid span[style*="font-size: 64"], #stats-section .grid span[style*="fontSize: 64"] { font-size: 36px !important; }
          .hiw-dashed-line { display: none !important; }
          #services-section .grid.md\\:grid-cols-2.lg\\:grid-cols-3 { grid-template-columns: 1fr !important; }
          .svc-card img { height: 180px !important; }
          .svc-view-btn { width: 100% !important; }
          [data-testid^="review-card"] { padding: 20px !important; }
          #faq [style*="maxWidth: 720"] { max-width: 100% !important; padding: 0 16px !important; }
          #faq button span:first-child { font-size: 14px !important; }
          footer { padding-bottom: 80px !important; }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          #pricing h2 { font-size: 30px !important; font-weight: 700; }
          #faq h2 { font-size: 30px !important; font-weight: 700; }
          [data-testid="homepage-explore-links"] h2 { font-size: 24px !important; font-weight: 700; }
          [data-testid="service-area-section"] h2 { font-size: 30px !important; font-weight: 700; }
        }
        @media (max-width: 480px) {
          .hero h1 { font-size: 24px !important; }
        }
      `}</style>

      {/* Sticky Call Now — desktop only */}
      {showCallBtn && (
        <a
          href="tel:+17605435733"
          data-testid="sticky-call-btn"
          className="hidden md:flex"
          style={{
            position: 'fixed', right: 24, bottom: 40, zIndex: 90,
            background: '#FF5722', color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14,
            textTransform: 'uppercase', textDecoration: 'none',
            letterSpacing: '0.08em', minWidth: 140,
            padding: '16px 28px', borderRadius: 4,
            boxShadow: '0 4px 20px rgba(255,87,34,0.55)',
            transition: 'all 0.2s ease',
            alignItems: 'center', justifyContent: 'center',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.75)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.55)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <Phone size={16} style={{ marginRight: 6 }} /> CALL NOW
        </a>
      )}

      <Suspense fallback={<div style={{ minHeight: 400 }} />}><UnifiedFooter /></Suspense>
    </div>
  );
};

export default ProfessionalLandingPage;

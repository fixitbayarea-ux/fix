import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import ServiceSchema from '../schema/ServiceSchema';
import { useSchemas } from '../../hooks/useSchema';
import { motion } from 'framer-motion';
import { Phone, Star, CheckCircle, Wrench, Clock, Shield, MapPin, Award, Users, ThumbsUp, Home, Settings, Calendar, Search, ChevronDown, MessageSquare } from 'lucide-react';
import FloatingButtons from '../FloatingButtons';
import RelatedServices from '../RelatedServices';

const F = 'Montserrat, sans-serif';
const C = { navy: '#0d1b2a', navyMid: '#1a2f45', accent: '#ff5722', accentHover: '#ff7043', cream: '#f8f5f0', textDark: '#1a1a1a', textMid: '#4a5568', white: '#ffffff', white60: 'rgba(255,255,255,0.6)', white75: 'rgba(255,255,255,0.75)', accentFaint: 'rgba(255,87,34,0.15)' };

const Eyebrow = ({ children }) => (
  <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.2px', marginBottom: 12, display: 'block', fontFamily: F }}>{children}</span>
);
const SectionPad = ({ bg, children, style }) => (
  <section style={{ padding: '70px 0', background: bg, ...style }}><div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>{children}</div></section>
);
const H2Light = ({ children }) => <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: '33.6px', marginBottom: 16, fontFamily: F }}>{children}</h2>;
const H2Dark = ({ children }) => <h2 style={{ fontSize: 28, fontWeight: 800, color: C.white, lineHeight: '33.6px', marginBottom: 16, fontFamily: F }}>{children}</h2>;
const P = ({ children, dark }) => <p style={{ fontSize: 16, lineHeight: '24px', color: dark ? C.white60 : C.textMid, fontFamily: F, marginBottom: 12 }}>{children}</p>;

const CityLandingPage = ({
  city, citySlug, pageTitle, metaDescription,
  neighborhoods = [], localExpertise = '', homeTypes = '',
  commonProblems = [], recentRepairs = [], faqData = [],
  nearbyCities = [], brands = []
}) => {
  const slug = citySlug || city.toLowerCase().replace(/\s+/g, '-');

  const citySchemas = useMemo(() => {
    const schemas = [
      { id: `city2-breadcrumb-${slug}`, data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net/" },
        { "@type": "ListItem", "position": 2, "name": "Cities We Serve", "item": "https://fixitbay.net/service-areas" },
        { "@type": "ListItem", "position": 3, "name": `${city} Appliance Repair`, "item": `https://fixitbay.net/${slug}-appliance-repair` }
      ]}}
    ];
    const validFaqs = (faqData || []).filter(f => f.question?.trim() && f.answer?.trim());
    if (validFaqs.length > 0) {
      schemas.push({ id: `city2-faq-${slug}`, data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": validFaqs.map(f => ({ "@type": "Question", "name": f.question.trim(), "acceptedAnswer": { "@type": "Answer", "text": f.answer.trim() } })) }});
    }
    return schemas;
  }, [city, slug, faqData]);
  useSchemas(citySchemas);

  const track = (action, label) => { if (window.gtag) window.gtag('event', 'cta_click', { page_path: window.location.pathname, category: 'CTA', action, label }); };
  const handleBook = () => { track('book_online', 'Book Online'); window.location.href = '/book?go=1'; };
  const handleCall = () => { track('call_now', 'Call'); window.location.href = 'tel:7605435733'; };

  const services = [
    { name: 'Refrigerator Repair', href: '/refrigerator-repair', icon: <Home className="w-5 h-5" /> },
    { name: 'Washer Repair', href: '/washer-repair', icon: <Settings className="w-5 h-5" /> },
    { name: 'Dryer Repair', href: '/dryer-repair', icon: <Settings className="w-5 h-5" /> },
    { name: 'Dishwasher Repair', href: '/dishwasher-repair', icon: <Shield className="w-5 h-5" /> },
    { name: 'Oven & Range Repair', href: '/oven-repair', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Cooktop Repair', href: '/cooktop-repair', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Ice Maker Repair', href: '/ice-maker-repair', icon: <Star className="w-5 h-5" /> },
    { name: 'Wine Cooler Repair', href: '/wine-cooler-repair', icon: <Star className="w-5 h-5" /> },
  ];

  const defaultBrands = ['Whirlpool', 'Samsung', 'LG', 'GE', 'Bosch', 'KitchenAid', 'Maytag', 'Frigidaire', 'Miele', 'Thermador', 'Sub-Zero', 'Wolf', 'Viking'];
  const brandList = brands.length > 0 ? brands : defaultBrands;

  const reviews = [
    { name: 'Sarah M.', text: `Best appliance repair in ${city}! Technician arrived on time, diagnosed fast, fair price. Highly recommend FixitBay.`, rating: 5 },
    { name: 'James L.', text: `Called FixitBay for my washer repair in ${city}. Same-day service, fixed the drain pump in under an hour. Great work.`, rating: 5 },
    { name: 'Michelle T.', text: `Professional and honest. The tech explained everything clearly before starting. Will use FixitBay for all my ${city} appliance needs.`, rating: 5 },
  ];

  return (
    <>
      <SEOMetaTags title={pageTitle} description={metaDescription} canonical={`https://fixitbay.net/${slug}-appliance-repair`} ogImage="https://fixitbay.net/images/og-cover.png" noindex={false} />
      <ServiceSchema serviceType="Appliance Repair" city={city} serviceName={`Appliance Repair in ${city}`} />

      <div style={{ minHeight: '100vh', background: C.white, fontFamily: F }}>
        <style>{`@media(max-width:767px){.clp-hero-h1{font-size:32px!important;line-height:1.15!important}.clp-stats-grid{grid-template-columns:1fr!important}.clp-3col{grid-template-columns:1fr!important}.clp-2col{grid-template-columns:1fr!important}}@media(min-width:768px)and(max-width:1023px){.clp-3col{grid-template-columns:repeat(2,1fr)!important}}`}</style>

        {/* 1. HERO */}
        <section style={{ background: C.navy, paddingTop: 80, paddingBottom: 48 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <Eyebrow>FAST SCHEDULING AVAILABLE</Eyebrow>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="clp-hero-h1" style={{ fontSize: 52, fontWeight: 800, color: C.white, lineHeight: '58px', marginBottom: 16, fontFamily: F }}>
              Appliance Repair in <span style={{ color: C.accent }}>{city}</span>
            </motion.h1>
            <p style={{ fontSize: 16, color: C.white60, marginBottom: 8, fontFamily: F }}>$60 diagnostic &middot; Same/Next-Day &middot; 180-Day Warranty</p>
            <p style={{ fontSize: 14, color: C.white60, marginBottom: 24, fontFamily: F }}>Most slots filled by noon &mdash; book now to secure today</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={handleBook} data-testid="hero-book-btn" style={{ background: C.accent, color: C.white, borderRadius: 4, padding: '10px 20px', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.12px', border: 'none', cursor: 'pointer', fontFamily: F }}>BOOK REPAIR ONLINE</button>
              <a href="tel:7605435733" onClick={handleCall} style={{ background: 'transparent', color: C.white, border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 4, padding: '10px 20px', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.12px', textDecoration: 'none', fontFamily: F }}>CALL (760) 543-5733</a>
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.65)', fontFamily: F }}>
              &#10003; Licensed CA Technician &middot; &#11088; 4.9 Google (95 Reviews) &middot; License #51001
            </div>
          </div>
          {/* Stats grid */}
          <div className="clp-stats-grid" style={{ maxWidth: 1100, margin: '32px auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: C.navyMid, borderRadius: 8 }}>
            {[['3+', 'YEARS of Service'], ['180', 'DAY Warranty'], ['$60', 'DIAGNOSTIC Waived*']].map(([num, label], i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px 16px', borderRight: i < 2 ? `1px solid ${C.accentFaint}` : 'none' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.white, fontFamily: F }}>{num}</div>
                <div style={{ fontSize: 11, color: C.white60, fontFamily: F, letterSpacing: '1px' }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '10px 24px', fontSize: 13, color: 'rgba(255,255,255,0.65)', fontFamily: F, textAlign: 'center' }}>
            &#10003; Licensed CA Technician #51001 &middot; &#11088; 4.9 Google &middot; License #51001
          </div>
        </section>

        {/* 2. SERVICES — Every Major Appliance */}
        <SectionPad bg={C.cream}>
          <Eyebrow>FULL-SERVICE REPAIR</Eyebrow>
          <H2Light>Every Major Appliance</H2Light>
          <P>We repair all major household appliances in {city}. One call, one technician, one warranty.</P>
          <div className="clp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 24 }}>
            {services.map(s => (
              <Link key={s.name} to={s.href} data-testid={`service-${s.href.slice(1)}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: C.white, borderRadius: 8, textDecoration: 'none', color: C.navy, fontWeight: 600, fontSize: 15, fontFamily: F, border: '1px solid rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}>
                <span style={{ color: C.accent }}>{s.icon}</span>{s.name}
              </Link>
            ))}
          </div>
        </SectionPad>

        {/* 3. PROBLEMS — Common Appliance Problems */}
        <SectionPad bg={C.white}>
          <Eyebrow>COMMON ISSUES</Eyebrow>
          <H2Light>Common Appliance Problems in {city}</H2Light>
          <div className="clp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 20 }}>
            {commonProblems.map((p, i) => (
              <div key={i} style={{ padding: 20, background: C.cream, borderRadius: 8 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6, fontFamily: F }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: '22px', fontFamily: F }}>{p.description}</p>
              </div>
            ))}
          </div>
        </SectionPad>

        {/* 4. PROCESS — Simple. Fast. Professional. */}
        <SectionPad bg={C.cream}>
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <H2Light>Simple. Fast. Professional.</H2Light>
          <div className="clp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, marginTop: 24 }}>
            {[
              { num: '01', title: 'BOOK', desc: `Schedule online or call us. We confirm a same- or next-day slot in ${city}.`, icon: <Calendar className="w-5 h-5" /> },
              { num: '02', title: 'DIAGNOSE', desc: 'Our licensed technician arrives, inspects, and explains the issue. $60 diagnostic.', icon: <Search className="w-5 h-5" /> },
              { num: '03', title: 'APPROVE & REPAIR', desc: 'You approve the quote. We fix it on the spot. 180-day warranty on parts and labor.', icon: <Wrench className="w-5 h-5" /> },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: C.accentFaint, fontFamily: F, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.navy, fontFamily: F, margin: '8px 0' }}>{s.title}</div>
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: '22px', fontFamily: F }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </SectionPad>

        {/* 5. PRICING — No Surprises. Ever. */}
        <SectionPad bg={C.navyMid}>
          <Eyebrow>TRANSPARENT PRICING</Eyebrow>
          <H2Dark>No Surprises. Ever.</H2Dark>
          <div className="clp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20 }}>
            {[
              { label: 'Diagnostic Visit', price: '$60', note: 'Applied toward repair' },
              { label: 'Most Repairs', price: '$250 – $450', note: 'Parts + labor included' },
              { label: 'Warranty', price: '180 Days', note: 'Parts and labor' },
            ].map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: C.white60, fontFamily: F, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>{p.label}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.white, fontFamily: F }}>{p.price}</div>
                <div style={{ fontSize: 13, color: C.white60, fontFamily: F, marginTop: 4 }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: C.white60, fontFamily: F, marginTop: 16, textAlign: 'center' }}>No trip fees. No hidden charges. You approve the price before we start.</p>
        </SectionPad>

        {/* 6. CTA — Need Appliance Repair in [City] Today? */}
        <SectionPad bg={C.navy}>
          <div style={{ textAlign: 'center' }}>
            <Eyebrow>SCHEDULE NOW</Eyebrow>
            <H2Dark>Need Appliance Repair in {city} Today?</H2Dark>
            <P dark>Don't let broken appliances disrupt your home. Book online or call — most {city} appointments confirmed within minutes.</P>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
              <button onClick={handleBook} data-testid="cta-book-btn" style={{ background: C.accent, color: C.white, borderRadius: 4, padding: '12px 28px', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.12px', border: 'none', cursor: 'pointer', fontFamily: F }}>BOOK REPAIR ONLINE</button>
              <a href="tel:7605435733" style={{ color: C.white, border: `1.5px solid rgba(255,255,255,0.3)`, borderRadius: 4, padding: '12px 28px', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.12px', textDecoration: 'none', fontFamily: F }}>CALL (760) 543-5733</a>
            </div>
          </div>
        </SectionPad>

        {/* 7. BRANDS — All Major Brands */}
        <SectionPad bg={C.cream}>
          <Eyebrow>BRANDS WE SERVICE</Eyebrow>
          <H2Light>All Major Brands</H2Light>
          <P>Our technicians are trained and experienced with every major appliance brand.</P>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
            {brandList.map(b => (
              <span key={b} style={{ padding: '8px 18px', background: C.white, borderRadius: 4, fontSize: 14, fontWeight: 600, color: C.navy, fontFamily: F, border: '1px solid rgba(0,0,0,0.06)' }}>{b}</span>
            ))}
          </div>
        </SectionPad>

        {/* 8. LOCAL EXPERTISE — We Know [City] Homes */}
        <SectionPad bg={C.navy}>
          <Eyebrow>LOCAL EXPERTISE</Eyebrow>
          <H2Dark>We Know {city} Homes</H2Dark>
          <P dark>{localExpertise}</P>
          {homeTypes && <P dark>{homeTypes}</P>}
          {neighborhoods.length > 0 && (
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.white, fontFamily: F, marginBottom: 12 }}>Neighborhoods we serve in {city}:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {neighborhoods.map(n => (
                  <span key={n} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: 4, fontSize: 13, color: C.white75, fontFamily: F }}>{n}</span>
                ))}
              </div>
            </div>
          )}
        </SectionPad>

        {/* 9. RECENT REPAIRS */}
        <SectionPad bg={C.cream}>
          <Eyebrow>RECENT WORK</Eyebrow>
          <H2Light>Recent Repairs in {city}</H2Light>
          <div className="clp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 20 }}>
            {recentRepairs.map((r, i) => (
              <div key={i} style={{ padding: 20, background: C.white, borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, fontFamily: F, marginBottom: 4 }}>{r.appliance}</div>
                <div style={{ fontSize: 14, color: C.textMid, fontFamily: F, lineHeight: '22px' }}>{r.description}</div>
                {r.location && <div style={{ fontSize: 12, color: C.accent, fontFamily: F, marginTop: 6 }}><MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{r.location}</div>}
              </div>
            ))}
          </div>
        </SectionPad>

        {/* 10. REVIEWS */}
        <SectionPad bg={C.navy}>
          <Eyebrow>CUSTOMER REVIEWS</Eyebrow>
          <H2Dark>What {city} Residents Say</H2Dark>
          <div className="clp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ padding: 24, background: 'rgba(255,255,255,0.06)', borderRadius: 8 }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>{Array.from({ length: r.rating }, (_, j) => <Star key={j} size={14} fill={C.accent} color={C.accent} />)}</div>
                <p style={{ fontSize: 14, color: C.white75, fontFamily: F, lineHeight: '22px', marginBottom: 12 }}>"{r.text}"</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.white, fontFamily: F }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </SectionPad>

        {/* 11. POPULAR REPAIRS */}
        <SectionPad bg={C.cream}>
          <Eyebrow>POPULAR SERVICES</Eyebrow>
          <H2Light>Popular Repairs in {city}</H2Light>
          <div className="clp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 16 }}>
            {[
              { label: 'Refrigerator Repair', svc: 'refrigerator' },
              { label: 'Washer Repair', svc: 'washer' },
              { label: 'Dryer Repair', svc: 'dryer' },
              { label: 'Dishwasher Repair', svc: 'dishwasher' },
              { label: 'Oven & Range Repair', svc: 'oven' },
              { label: 'Wine Cooler Repair', svc: 'wine-cooler' },
              { label: 'Ice Maker Repair', svc: 'ice-maker' },
            ].map(s => (
              <Link key={s.svc} to={`/${slug}-${s.svc}-repair`} data-testid={`popular-${s.svc}`} style={{ fontWeight: 600, fontSize: 13, color: C.navy, textDecoration: 'none', background: C.white, border: '1px solid rgba(0,0,0,0.09)', borderRadius: 4, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: F, transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.navy; }}>
                {s.label}
              </Link>
            ))}
          </div>
        </SectionPad>

        {/* 12. FAQ — Quick Answers */}
        <SectionPad bg={C.white}>
          <Eyebrow>FAQ</Eyebrow>
          <H2Light>Quick Answers</H2Light>
          <div style={{ marginTop: 16 }}>
            {faqData.map((faq, i) => (
              <details key={i} style={{ marginBottom: 8, background: C.cream, borderRadius: 8, padding: '16px 20px', cursor: 'pointer' }}>
                <summary style={{ fontSize: 15, fontWeight: 700, color: C.navy, fontFamily: F, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.question}<ChevronDown size={16} style={{ flexShrink: 0, marginLeft: 8 }} />
                </summary>
                <p style={{ fontSize: 14, color: C.textMid, fontFamily: F, lineHeight: '22px', marginTop: 10 }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </SectionPad>

        {/* 13. NEARBY CITIES */}
        {nearbyCities.length > 0 && (
          <SectionPad bg={C.cream}>
            <Eyebrow>NEARBY SERVICE AREAS</Eyebrow>
            <H2Light>Nearby Service Areas</H2Light>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
              {nearbyCities.map(nc => (
                <Link key={nc.slug} to={`/${nc.slug}-appliance-repair`} style={{ padding: '10px 20px', background: C.white, borderRadius: 4, fontSize: 14, fontWeight: 600, color: C.navy, fontFamily: F, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.06)', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.navy; }}>
                  {nc.name}
                </Link>
              ))}
            </div>
          </SectionPad>
        )}

        <RelatedServices type="appliances" />

        <FloatingButtons />
      </div>
    </>
  );
};

export default CityLandingPage;

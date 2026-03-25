import React, { useEffect, useState, lazy, Suspense } from 'react';
import { CalendarCheck, User, SearchCheck, ShieldCheck, Tag, BadgeCheck, Shield, Clock, DollarSign, MapPin, Wrench, Phone, Home as HomeIcon } from 'lucide-react';
import SEOMetaTags from './SEOMetaTags';
import ServiceSchema from './schema/ServiceSchema';
import useAggregateRating from '../hooks/useAggregateRating';
import useReviews from '../hooks/useReviews';
import useInView from '../hooks/useInView';
import HomeHero from './sections/HomeHero';

const UnifiedFooter = lazy(() => import('./UnifiedFooter'));
const ThumbtackReviewWidget = lazy(() => import('./sections/ThumbtackReviewWidget'));
const ServiceAreaMapLibre = lazy(() => import('./sections/ServiceAreaMapLibre'));

import refrigeratorImg from '../assets/services/refrigerator.jpg';
import freezerImg from '../assets/services/freezer.jpg';
import iceMakerImg from '../assets/services/ice-maker.jpg';
import dishwasherImg from '../assets/services/dishwasher.jpg';
import ovenImg from '../assets/services/oven.jpg';
import cooktopImg from '../assets/services/cooktop.jpg';
import rangeImg from '../assets/services/range.jpg';
import disposalImg from '../assets/services/disposal.jpg';
import wineCoolerImg from '../assets/services/wine-cooler.jpg';
import washerImg from '../assets/services/washer.jpg';
import dryerImg from '../assets/services/dryer.jpg';
import commercialRefrigeratorImg from '../assets/services/commercial-refrigerator.jpg';
import commercialDishwasherImg from '../assets/services/commercial-dishwasher.jpg';
import commercialWasherImg from '../assets/services/commercial-washer.jpg';
import commercialDryerImg from '../assets/services/commercial-dryer.jpg';

import refrigeratorImgWebP from '../assets/services/refrigerator.webp';
import freezerImgWebP from '../assets/services/freezer.webp';
import iceMakerImgWebP from '../assets/services/ice-maker.webp';
import dishwasherImgWebP from '../assets/services/dishwasher.webp';
import ovenImgWebP from '../assets/services/oven.webp';
import cooktopImgWebP from '../assets/services/cooktop.webp';
import rangeImgWebP from '../assets/services/range.webp';
import disposalImgWebP from '../assets/services/disposal.webp';
import wineCoolerImgWebP from '../assets/services/wine-cooler.webp';
import washerImgWebP from '../assets/services/washer.webp';
import dryerImgWebP from '../assets/services/dryer.webp';
import commercialRefrigeratorImgWebP from '../assets/services/commercial-refrigerator.webp';
import commercialDishwasherImgWebP from '../assets/services/commercial-dishwasher.webp';
import commercialWasherImgWebP from '../assets/services/commercial-washer.webp';
import commercialDryerImgWebP from '../assets/services/commercial-dryer.webp';

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
        { "@type": "Question", "name": "Do you offer same-day appliance repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer same-day and next-day appointments throughout San Francisco, Peninsula, and Marin County. Call us at (760) 543-5733 or book online to check availability for your area." } },
        { "@type": "Question", "name": "What areas do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve 21 cities across San Francisco, the Peninsula (Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara), and Marin County (Mill Valley, San Rafael, Novato, Sausalito, Tiburon, Corte Madera, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo, Belvedere)." } },
        { "@type": "Question", "name": "What brands do you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair all major brands including Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Sub-Zero, Viking, Wolf, Thermador, Miele, and many more." } },
        { "@type": "Question", "name": "Do you provide a warranty on repairs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every repair comes with a 180-day warranty on both parts and labor. If the same issue recurs within the warranty period, we will fix it at no additional cost." } },
        { "@type": "Question", "name": "What appliances do you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair refrigerators, washers, dryers, dishwashers, ovens and ranges, cooktops, ice makers, wine coolers, garbage disposals, and commercial appliances." } },
        { "@type": "Question", "name": "Are your technicians licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our technicians are licensed by the State of California (License #51001) and fully insured." } },
        { "@type": "Question", "name": "How do I schedule a repair?", "acceptedAnswer": { "@type": "Answer", "text": "You can schedule online through our booking page or call us directly at (760) 543-5733. We offer flexible scheduling including same-day and next-day appointments, Monday through Saturday." } }
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

/* ─── Reusable SVG icons ─── */
const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);
const ThumbIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#00BFFF"><path d="M6.18 6.38h11.69v2.68H6.17zm7.27 3.8v3.14c0 3.23-.02 3.74-.14 4.36a7.95 7.95 0 0 1-1.3 2.87c-.03 0-.78-1.35-.9-1.62-.17-.4-.3-.8-.4-1.25l-.09-.41-.02-5.78.16-.2a3.3 3.3 0 0 1 2.44-1.1zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Z"/></svg>
);

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

  /* ── GEO meta & preconnect (homepage-specific) ── */
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

  /* Reviews state */
  const { reviews: apiReviews } = useReviews(true);
  const fallbackReviews = [
    { id: "g-1", source: "Google", author: "jennifer mushnick", rating: 5, text: "Andrei was great\u2014diagnosed issues with our oven, was communicative, and professional. His assessment of the problem with the igniter seems accurate. He was informed and thorough explaining the issue." },
    { id: "g-2", source: "Google", author: "Ms Tee", rating: 5, text: "I would recommend FixitBay. It\u2019s a professional service. Andrei was punctual and came the day after I called. He took his time and looked all over the unit. Appreciate the service." },
    { id: "g-3", source: "Google", author: "Karen Dzienkowski", rating: 5, text: "Andrei was great! Fixed it the first visit and came back to install a new thermostat the next day because he didn\u2019t have that part day 1. Reasonable price to fix a 20 yo fridge too! Highly recommend." },
    { id: "g-4", source: "Google", author: "Gayle Rabbitt", rating: 5, text: "Andrei was excellent. He explained and checked everything. He quickly realized the leak was from the utility sink next to the washer and shut off the hoses so leak stopped. I\u2019d definitely contact FixitBay LLC if have a problem with any appliance." },
    { id: "g-5", source: "Google", author: "Emily Chen", rating: 5, text: "One of the smoothest repair experiences I\u2019ve had. Super easy to book online and continue communicating over text with Andrei. He showed up on time, and was in/out within 2 hours. Would highly recommend!" },
    { id: "g-6", source: "Google", author: "Michael Kagan", rating: 5, text: "Andrei from FixItBay is great. He\u2019s knowledgeable, professional, fast, and answered any questions I had about my fridge and dishwasher. He\u2019s saved me twice already!" },
    { id: "t-1", source: "Thumbtack", author: "Heather O.", rating: 5, text: "Andrei was awesome! He diagnosed the problem with my washing machine and fixed it, giving me 2 options along the way in terms of cost. He was punctual and professional. Would use him again!" },
    { id: "g-7", source: "Google", author: "Sarah M.", rating: 5, text: "Had a Sub-Zero emergency on Thanksgiving morning. They came within an hour and saved our dinner party. Incredibly professional." },
    { id: "g-8", source: "Google", author: "James L.", rating: 5, text: "Fixed my LG washer same day. Andrei knew exactly what was wrong, explained everything clearly, and the price was fair. No upselling." },
  ];
  const reviews = apiReviews.length > 0 ? apiReviews : fallbackReviews;
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoplayTimerRef = React.useRef(null);
  const interactionTimeoutRef = React.useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  React.useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion || isAutoplayPaused || userInteracted) return;
    if (typeof document !== 'undefined' && document.hidden) return;
    autoplayTimerRef.current = setTimeout(() => {
      setCurrentReviewIndex(prev => { const n = prev + 2; return n >= reviews.length ? 0 : n; });
    }, 5000);
    return () => { if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current); };
  }, [currentReviewIndex, isAutoplayPaused, userInteracted, prefersReducedMotion, reviews.length]);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const h = () => setIsAutoplayPaused(document.hidden);
    document.addEventListener('visibilitychange', h);
    return () => document.removeEventListener('visibilitychange', h);
  }, []);

  const handleManualNav = (i) => {
    setCurrentReviewIndex(i); setUserInteracted(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => setUserInteracted(false), 8000);
  };

  /* Services data */
  const servicesData = [
    { name: 'Refrigerator', category: 'Kitchen', description: 'Not cooling, water leaks, ice maker issues', path: '/refrigerator-repair', image: refrigeratorImg, imageWebP: refrigeratorImgWebP },
    { name: 'Freezer', category: 'Kitchen', description: 'Not freezing, frost buildup, temperature issues', path: '/freezer-repair', image: freezerImg, imageWebP: freezerImgWebP },
    { name: 'Ice Maker', category: 'Kitchen', description: 'Not making ice, water leaking, jammed', path: '/ice-maker-repair', image: iceMakerImg, imageWebP: iceMakerImgWebP },
    { name: 'Dishwasher', category: 'Kitchen', description: 'Not draining, leaking, won\'t start', path: '/dishwasher-repair', image: dishwasherImg, imageWebP: dishwasherImgWebP },
    { name: 'Oven', category: 'Kitchen', description: 'Not heating, temperature issues', path: '/oven-repair', image: ovenImg, imageWebP: ovenImgWebP },
    { name: 'Stove & Cooktop', category: 'Kitchen', description: 'Burners not working, igniter problems', path: '/cooktop-repair', image: cooktopImg, imageWebP: cooktopImgWebP },
    { name: 'Range', category: 'Kitchen', description: 'Combo oven and stove repair', path: '/oven-repair', image: rangeImg, imageWebP: rangeImgWebP },
    { name: 'Garbage Disposal', category: 'Kitchen', description: 'Jammed, leaking, or humming', path: '/garbage-disposal-repair', image: disposalImg, imageWebP: disposalImgWebP },
    { name: 'Wine Cooler', category: 'Kitchen', description: 'Temperature not holding, not cooling', path: '/wine-cooler-repair', image: wineCoolerImg, imageWebP: wineCoolerImgWebP },
    { name: 'Washer', category: 'Laundry', description: 'Not spinning, draining, or filling', path: '/washer-repair', image: washerImg, imageWebP: washerImgWebP },
    { name: 'Dryer', category: 'Laundry', description: 'Not heating, tumbling, or turning on', path: '/dryer-repair', image: dryerImg, imageWebP: dryerImgWebP },
    { name: 'Commercial Refrigerator', category: 'Commercial', description: 'Walk-in coolers, reach-in units, display cases', path: '/commercial-refrigerator-repair', image: commercialRefrigeratorImg, imageWebP: commercialRefrigeratorImgWebP },
    { name: 'Commercial Dishwasher', category: 'Commercial', description: 'Restaurant dishwashers, high-temp units', path: '/commercial-dishwasher-repair', image: commercialDishwasherImg, imageWebP: commercialDishwasherImgWebP },
    { name: 'Commercial Washer', category: 'Commercial', description: 'Industrial washing machines, coin-op units', path: '/commercial-washer-repair', image: commercialWasherImg, imageWebP: commercialWasherImgWebP },
    { name: 'Commercial Dryer', category: 'Commercial', description: 'Industrial dryers, coin-op dryers', path: '/commercial-dryer-repair', image: commercialDryerImg, imageWebP: commercialDryerImgWebP },
  ];
  const categories = ['Kitchen', 'Laundry', 'Commercial'];
  const [activeCategory, setActiveCategory] = useState('Kitchen');
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const carouselRef = React.useRef(null);

  /* Reset carousel state + swipe hint whenever tab changes */
  React.useEffect(() => {
    setShowSwipeHint(true);
    setActiveCarouselIndex(0);
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    const timer = setTimeout(() => setShowSwipeHint(false), 3000);
    return () => clearTimeout(timer);
  }, [activeCategory]);
  const filteredServices = servicesData.filter(s => s.category === activeCategory);

  const howItWorksSteps = [
    { icon: CalendarCheck, title: 'Book Online', description: 'Schedule your repair in seconds — no calls, no waiting.' },
    { icon: User, title: 'Technician Arrives', description: 'A licensed technician arrives on time with the right tools.' },
    { icon: SearchCheck, title: 'Quick Diagnosis', description: 'We diagnose the issue and provide an upfront estimate — no surprises.' },
    { icon: ShieldCheck, title: 'Professional Repair', description: 'Fast, quality repair backed by our 180-day warranty.' }
  ];

  const faqs = [
    { question: "How much does appliance repair cost in the Bay Area?", answer: "Our diagnostic fee is $60, which is applied toward the repair if you choose to proceed. Most common repairs range from $150 to $400 depending on the appliance type and issue. We always provide an upfront estimate before starting any work." },
    { question: "Do you offer same-day appliance repair?", answer: "Yes! We offer same-day and next-day appointments throughout San Francisco, Peninsula, and Marin County. Book online to check availability for your area." },
    { question: "What areas do you serve?", answer: "We serve San Francisco, the Peninsula, and Marin County — including Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, San Rafael, Mill Valley, Novato, and nearby communities." },
    { question: "What brands do you repair?", answer: "We repair all major brands including Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Sub-Zero, Viking, Wolf, Thermador, Miele, and many more." },
    { question: "Do you provide a warranty on repairs?", answer: "Yes — every repair includes a 180-day warranty on parts and labor. If the same issue returns within the warranty period, we fix it at no additional cost." },
    { question: "What appliances do you repair?", answer: "Refrigerators, washers, dryers, dishwashers, ovens, cooktops, ice makers, wine coolers, garbage disposals, and commercial appliances." },
    { question: "Are your technicians licensed and insured?", answer: "All technicians are licensed by the State of California (License #51001) and fully insured." },
    { question: "How do I schedule a repair?", answer: "Book online through our booking page. Same-day and next-day appointments are available Monday through Saturday." }
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: '#fff', fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif' }}>
      <SEOMetaTags title="Appliance Repair San Francisco & Bay Area | FixitBay" description="Professional appliance repair in San Francisco Bay Area. Same-day service for refrigerators, washers, dryers, dishwashers. Call (760) 543-5733 or book online." canonical="https://fixitbay.net/" keywords="appliance repair San Francisco, refrigerator repair, washer repair, same day appliance repair Bay Area, FixitBay" ogTitle="Appliance Repair San Francisco & Bay Area | FixitBay" ogDescription="Professional appliance repair in San Francisco Bay Area. Same-day service for refrigerators, washers, dryers, dishwashers. Call (760) 543-5733 or book online." ogImage="https://fixitbay.net/images/og-cover.png" twitterSite="@fixitbay" twitterTitle="Appliance Repair SF Bay Area | FixitBay" twitterDescription="Same-day appliance repair in San Francisco. $60 diagnostic, 180-day warranty, licensed CA technician." />
      <HomepageSchemas />
      <HomeHero />

      {/* ═══ TRUST BAR — Mobile Only ═══ */}
      <div className="lg:hidden mobile-trust-bar" data-testid="mobile-trust-bar" style={{ background: '#1A2F45', padding: '14px 16px' }}>
        {[
          { top: '\u2B50 4.9', bottom: 'GOOGLE' },
          { top: '\u2713 94', bottom: 'REVIEWS' },
          { top: '\uD83D\uDEE1\uFE0F #51001', bottom: 'LICENSE' },
          { top: '180-Day', bottom: 'WARRANTY' },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ color: '#FF5722', fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat, sans-serif', lineHeight: 1.3 }}>{item.top}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 600, fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.bottom}</div>
          </div>
        ))}
      </div>

      {/* ═══ STATS SECTION ═══ */}
      <section className="hidden lg:block" style={{ background: '#F8F5F0', padding: '60px 0 70px' }} data-testid="stats-section">
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'stretch' }}>
            {[
              { num: '22', unit: 'Cities', title: 'BAY AREA COVERAGE', desc: 'SF, Peninsula & Marin', numSize: 64 },
              { num: '$60', unit: 'Diagnostic', title: 'GOES TOWARD REPAIR', desc: 'Applied if you proceed', numSize: 64 },
              { num: '180-Day', unit: 'Warranty', title: 'PARTS & LABOR', desc: '180-day guarantee', numSize: 36 },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{ width: 3, alignSelf: 'stretch', background: '#FF5722', flexShrink: 0 }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: s.numSize, lineHeight: 1, color: '#0D1B2A', whiteSpace: 'nowrap' }}>{s.num}</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 20, color: '#FF5722' }}>{s.unit}</span>
                    </div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.title}</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 13, color: '#4A5568', maxWidth: 200, marginTop: 4, lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
                {i < 2 && <div style={{ width: 1, background: 'rgba(0,0,0,0.08)', margin: '0 24px' }} />}
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
              { title: 'In-Home Repairs Across SF, Peninsula & Marin', body: 'Looking for appliance repair near me in San Francisco? FixitBay provides same-day, in-home service across all SF neighborhoods. We repair refrigerators, freezers, ice makers, dishwashers, ovens, cooktops, washers, dryers, wine coolers, and more.', iconBg: '#F0EBE5', iconColor: '#0D1B2A', icon: <HomeIcon size={22} strokeWidth={2} /> },
              { title: 'Clear Pricing Before Work Starts', body: 'Your $60 diagnostic visit is applied toward the repair if you proceed. You approve the estimate first.', iconBg: '#F8F5F0', iconColor: '#8B5A2B', icon: <DollarSign size={22} strokeWidth={2} /> },
              { title: 'Fast Scheduling, Local Service', body: 'Same-day and next-day appointments available Monday through Saturday.', iconBg: '#FECACA', iconColor: '#FF5722', icon: <CalendarCheck size={22} strokeWidth={2} /> },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-5 border border-gray-200 bg-white shadow-sm">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: c.iconColor }}>{c.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0D1B2A' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="intro-cta-row flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="/book?go=1" data-testid="intro-cta-book" className="r2-btn-primary intro-cta-book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 230, height: 56, borderRadius: 4, background: '#FF5722', color: '#fff', fontSize: 16, fontWeight: 800, textDecoration: 'none' }}>Book Online</a>
            <a href="tel:+17605435733" data-testid="intro-cta-call" className="r2-btn-secondary intro-cta-call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, minWidth: 230, height: 56, borderRadius: 4, background: '#fff', color: '#FF5722', fontSize: 16, fontWeight: 800, textDecoration: 'none', border: '2px solid #FF5722' }}><Phone size={18} /> Call (760) 543-5733</a>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Dark Navy ═══ */}
      <section id="how-it-works" style={{ background: '#0D1B2A', padding: '80px 0' }} data-testid="how-it-works-section">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          {/* Eyebrow + Title */}
          <div className="hidden lg:block text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', letterSpacing: '0.22em', textTransform: 'uppercase' }}>THE PROCESS</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 40, color: '#FFFFFF', marginTop: 12 }}>Simple. Fast. Professional.</h2>
          </div>
          <h2 className="lg:hidden text-3xl font-bold mb-3 text-center" style={{ color: '#FFFFFF' }}>How It Works</h2>

          {/* 4 steps — responsive grid */}
          <div style={{ marginTop: 56 }}>
            <div className="grid grid-cols-2 lg:grid-cols-4" style={{ position: 'relative', gap: 24 }}>
              {/* Dashed line connecting steps — desktop only */}
              <div className="hidden lg:block" style={{ position: 'absolute', top: 80, left: '18%', right: '18%', height: 1, borderTop: '1px dashed rgba(255,87,34,0.30)', zIndex: 0 }} aria-hidden="true" />
              {[
                { num: '01', icon: <CalendarCheck size={32} strokeWidth={1.5} />, title: 'BOOK ONLINE', desc: 'Schedule in 60 seconds, no calls' },
                { num: '02', icon: <User size={32} strokeWidth={1.5} />, title: 'TECH ARRIVES', desc: 'Licensed, on time, with tools' },
                { num: '03', icon: <SearchCheck size={32} strokeWidth={1.5} />, title: 'DIAGNOSIS', desc: 'Upfront estimate, zero surprises' },
                { num: '04', icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'REPAIR DONE', desc: '180-day warranty on every job' },
              ].map((step, i) => {
                const inner = (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 72, lineHeight: 1, color: 'rgba(255,255,255,0.05)', display: 'block' }}>{step.num}</span>
                  <div style={{ color: '#FF5722', marginTop: -8 }}>{step.icon}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: '#FFFFFF', marginTop: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{step.title}</div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.50)', maxWidth: 160, lineHeight: 1.6, marginTop: 8 }}>{step.desc}</p>
                </div>
                );
                return i === 0 ? <a key={i} href="/book" style={{ textDecoration: 'none', color: 'inherit' }}>{inner}</a> : <React.Fragment key={i}>{inner}</React.Fragment>;
              })}
            </div>
          </div>

          {/* Mobile: vertical steps — hidden, replaced by responsive grid above */}
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

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ background: '#F8F5F0', paddingTop: 76, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div className="text-center" style={{ marginBottom: 36 }}>
            <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 12 }}>WHAT WE FIX</div>
            <h2 className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#0D1B2A', marginBottom: 20 }}>Every Major Appliance. Every Major Brand.</h2>
            <h2 className="lg:hidden text-3xl font-bold mb-3" style={{ color: '#0D1B2A' }}>Professional Appliance Repair Services</h2>
          </div>
          {/* Tabs — underline style */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <div className="inline-flex gap-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }} role="tablist">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} role="tab" aria-selected={activeCategory === cat} className="whitespace-nowrap transition-all duration-200" style={{ padding: '14px 36px', fontFamily: 'Montserrat, sans-serif', fontSize: 16, fontWeight: activeCategory === cat ? 600 : 500, background: 'transparent', color: activeCategory === cat ? '#0D1B2A' : '#4A5568', border: 'none', borderBottom: activeCategory === cat ? '2px solid #FF5722' : '2px solid transparent', cursor: 'pointer', marginBottom: -1, minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{cat}</button>
              ))}
            </div>
          </div>
          {/* Desktop grid */}
          <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn" style={{ gap: 28 }}>
            {filteredServices.map(svc => (
              <a key={svc.name} href={svc.path} rel={svc.name === 'Dishwasher' ? 'nofollow' : undefined} className="svc-card group flex flex-col bg-white overflow-hidden" style={{ borderRadius: 4, border: '1px solid rgba(0,0,0,0.08)', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }} data-testid={`svc-card-${svc.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative overflow-hidden" style={{ height: 200 }}><picture><source srcSet={svc.imageWebP} type="image/webp" /><img src={svc.image} alt={`${svc.name} repair — FixitBay`} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" width="800" height="533" loading="lazy" decoding="async" /></picture></div>
                <div className="flex flex-col flex-grow" style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontSize: 17, fontWeight: 700, color: '#0D1B2A', marginBottom: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', flexShrink: 0 }} />
                    {svc.name}
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.65, color: '#4A5568', fontWeight: 400, marginBottom: 14 }}>{svc.description}</p>
                  <div className="flex flex-wrap gap-2" style={{ marginBottom: 10 }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 3, background: 'rgba(255,87,34,0.08)', color: '#B85E20', border: '1px solid rgba(255,87,34,0.20)' }}>Same/Next-Day</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 3, background: 'rgba(255,87,34,0.08)', color: '#B85E20', border: '1px solid rgba(255,87,34,0.20)' }}>$60 Diagnostic</span>
                  </div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#4A5568', fontWeight: 500, marginBottom: 16 }}>180-Day Warranty on parts &amp; labor</p>
                  <div className="svc-view-btn mt-auto" style={{ width: '100%', height: 42, borderRadius: 4, background: '#0D1B2A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', transition: 'background 0.2s' }}>View Service</div>
                </div>
              </a>
            ))}
          </div>
          {/* Mobile carousel */}
          <div key={`m-${activeCategory}`} className="hidden animate-fadeIn">
            {/* Swipe hint — centered, fades out after 3s */}
            <div style={{ textAlign: 'center', marginBottom: 10, height: 20 }}>
              <span
                data-testid="swipe-hint"
                style={{
                  fontSize: 12, color: '#999',
                  fontFamily: 'Montserrat, sans-serif',
                  opacity: showSwipeHint ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                  pointerEvents: 'none', userSelect: 'none',
                }}
              >← Swipe to see all services →</span>
            </div>
            {/* Scroll container */}
            <div
              ref={carouselRef}
              data-testid="services-carousel"
              onScroll={(e) => {
                const el = e.currentTarget;
                const cardWidth = el.clientWidth * 0.85;
                const idx = Math.round(el.scrollLeft / (cardWidth + 16));
                setActiveCarouselIndex(Math.max(0, Math.min(idx, filteredServices.length - 1)));
              }}
              className="overflow-x-auto pb-4 scrollbar-hide -mx-4"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-4 px-4">
                {filteredServices.map(svc => (
                  <a key={svc.name} href={svc.path} rel={svc.name === 'Dishwasher' ? 'nofollow' : undefined} className="flex-shrink-0 flex flex-col bg-white rounded-xl overflow-hidden shadow-md" style={{ width: '85vw', maxWidth: 360, scrollSnapAlign: 'center', textDecoration: 'none' }}>
                    <div className="relative h-40 bg-gray-200 overflow-hidden"><picture><source srcSet={svc.imageWebP} type="image/webp" /><img src={svc.image} alt={`${svc.name} repair`} className="w-full h-full object-cover" loading="lazy" height="160" /></picture></div>
                    <div className="flex flex-col flex-grow p-5"><h3 className="text-lg font-bold mb-2" style={{ color: '#0D1B2A' }}>{svc.name}</h3><p className="text-sm mb-3" style={{ color: '#4A5568' }}>{svc.description}</p><div className="flex flex-wrap gap-2 mb-3"><span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#F0EBE5', color: '#0D1B2A' }}>Same/Next-Day</span><span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#F8F5F0', color: '#744210' }}>$60 Diagnostic</span></div><div className="mt-auto w-full px-5 py-2.5 rounded-lg font-bold text-center text-sm" style={{ background: '#FF5722', color: '#fff' }}>View Service</div></div>
                  </a>
                ))}
              </div>
            </div>
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-3" aria-hidden="true" data-testid="carousel-dots">
              {filteredServices.map((_, i) => (
                <button
                  key={i}
                  data-testid={`carousel-dot-${i}`}
                  onClick={() => {
                    const el = carouselRef.current;
                    if (el) {
                      const cardWidth = el.clientWidth * 0.85;
                      el.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' });
                    }
                    setActiveCarouselIndex(i);
                  }}
                  style={{
                    width: 8,
                    height: 8, borderRadius: '50%', border: 'none', padding: 0,
                    background: activeCarouselIndex === i ? '#FF5722' : '#ccc',
                    cursor: 'pointer', flexShrink: 0,
                    transition: 'background 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" style={{ background: '#1A2F45', padding: '80px 0' }} data-testid="pricing-section">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>TRANSPARENT PRICING</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#FFFFFF' }}>No Surprises. Ever.</h2>
          </div>
          <div className="grid md:grid-cols-3" style={{ gap: 24, alignItems: 'stretch' }}>
            {[
              { icon: <ShieldCheck size={36} strokeWidth={1.8} />, title: '180-Day Warranty', body: 'Coverage on parts and labor.', featured: false },
              { icon: <Tag size={36} strokeWidth={1.8} />, title: '$60 Diagnostic Visit', body: 'Applied toward repair if you proceed.', featured: true },
              { icon: <BadgeCheck size={36} strokeWidth={1.8} />, title: 'No Hidden Fees', body: 'You approve the estimate before work starts.', featured: false },
            ].map(c => (
              <div key={c.title} className={`pricing-card relative ${c.featured ? 'pricing-card-featured' : 'pricing-card-default'}`} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 4, padding: '32px 18px 24px', border: c.featured ? '2px solid #FF5722' : '1px solid rgba(255,255,255,0.10)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }} data-testid={`pricing-card-${c.featured ? 'featured' : 'default'}`}>
                {c.featured && <span style={{ position: 'absolute', top: 10, left: 0, right: 0, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 10, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }} data-testid="pricing-badge">MOST ASKED</span>}
                <div style={{ color: '#FF5722', marginBottom: 20 }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: c.featured ? 18 : 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: c.featured ? 14 : 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.60)', fontWeight: 400 }}>{c.body}</p>
              </div>
            ))}
          </div>
          <p className="hidden lg:block text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 400, fontStyle: 'italic', marginTop: 32 }}>Typical repairs range $150–$400 after diagnosis</p>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section ref={reviewsRef} id="reviews" style={{ background: '#0D1B2A', paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div className="text-center" style={{ marginBottom: 40 }}>
              <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>WHAT CLIENTS SAY</div>
              <h2 className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#FFFFFF' }}>Real People. Real Repairs.</h2>
              <h2 className="lg:hidden text-3xl font-bold mb-3" style={{ color: '#FFFFFF' }}>Real Customer Reviews</h2>
            </div>
            {/* Desktop: 3-column reviews grid */}
            <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
              {reviews.map((r, ri) => (
                <div key={r.id} style={{ borderRadius: 4, padding: 28, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }} data-testid={`review-card-${ri}`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{ display: 'flex', gap: 4 }}>{r.rating && [...Array(r.rating)].map((_, i) => <span key={i} style={{ color: '#FF5722', fontSize: 15 }}>&#9733;</span>)}</div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>{r.source}</span>
                  </div>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: 18 }}>"{r.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>{r.author}</span>
                    <a href={r.source === 'Google' ? 'https://share.google/Q48c6OXAIB7u60fNv' : 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644'} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 12, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Read on {r.source} &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: bottom links */}
            <div className="hidden lg:flex justify-center" style={{ gap: 32 }}>
              <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Read all Google reviews &rarr;</a>
              <a href="https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Read Thumbtack reviews &rarr;</a>
            </div>
            {/* Mobile */}
            <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide -mx-4"><div className="flex gap-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>{reviews.map(r => (
              <div key={r.id} className="flex-shrink-0 rounded-lg p-6 border border-white/10" style={{ width: '90vw', maxWidth: 400, scrollSnapAlign: 'center', background: 'rgba(255,255,255,0.05)' }}>
                <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2">{r.source === 'Google' ? <GoogleIcon size={18} /> : <ThumbIcon size={18} />}<span className="font-semibold text-sm" style={{ color: '#fff' }}>{r.source}</span></div></div>
                {r.rating && <div className="flex items-center mb-3">{[...Array(r.rating)].map((_, i) => <span key={i} style={{ color: '#FF5722', fontSize: 14 }}>&#9733;</span>)}</div>}
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>"{r.text}"</p>
                <div className="pt-4 border-t border-white/10"><p className="font-semibold text-sm mb-1" style={{ color: '#fff' }}>{r.author}</p><a href={r.source === 'Google' ? 'https://share.google/Q48c6OXAIB7u60fNv' : 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644'} target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ color: '#FF5722', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Read on {r.source} &rarr;</a></div>
              </div>
            ))}</div></div>
          </div>
      </section>

      {/* ═══ PART 8 — SERVICE AREA MAP ═══ */}
      <div ref={mapRef} id="service-area">
        {isMapInView && <Suspense fallback={<div style={{ minHeight: 600 }} />}><ServiceAreaMapLibre /></Suspense>}
      </div>

      {/* ═══ FAQ ═══ */}
      <section id="faq" style={{ background: '#F8F5F0', padding: '80px 0' }} data-testid="faq-section">
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 40 }}>
            <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>FAQ</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 36, fontWeight: 800, color: '#0D1B2A' }}>Quick Answers</h2>
          </div>
          <div>
            {faqs.map((faq, idx) => (
              <div key={idx} data-testid={`faq-item-${idx}`} style={{ borderBottom: '1px solid rgba(0,0,0,0.09)', padding: '22px 0' }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left flex items-center justify-between" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, fontWeight: 600, color: '#0D1B2A', background: 'transparent', border: 'none', cursor: 'pointer', padding: '12px 16px', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} aria-expanded={openFaq === idx} data-testid={`faq-btn-${idx}`}>
                  <span style={{ paddingRight: 16, fontSize: 14 }}>{faq.question}</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 400, color: '#FF5722', flexShrink: 0, lineHeight: 1, transition: 'transform 0.2s' }}>{openFaq === idx ? '\u00D7' : '+'}</span>
                </button>
                <div style={{ maxHeight: openFaq === idx ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, lineHeight: 1.70, color: '#4A5568', fontWeight: 400, paddingTop: 14, borderLeft: '2px solid #FF5722', paddingLeft: 16 }}>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PART 10 — EXPLORE SERVICES & AREAS ═══ */}
      <nav aria-label="Explore services and areas" style={{ background: 'radial-gradient(ellipse at 20% 50%, #F8F5F0 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #EEF7FC 0%, transparent 50%), #F8F5F0', paddingTop: 36, paddingBottom: 36, borderTop: '1px solid #E5E0DA' }} data-testid="homepage-explore-links">
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center" style={{ marginBottom: 20 }}>
            <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>SITEMAP</div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>Explore Services &amp; Areas</h2>
            <p style={{ fontSize: 15, color: '#4A5568', fontWeight: 500 }}>Browse popular repair services and local service area pages across the Bay Area.</p>
          </div>
          <div className="grid lg:grid-cols-2" style={{ gap: 18 }}>
            {/* Services panel */}
            <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid #E5E2DD' }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0D1B2A', marginBottom: 14 }}>Popular Services</h3>
              <div className="flex flex-wrap" style={{ gap: 10 }}>
                {[
                  { href: '/refrigerator-repair', label: 'Refrigerator Repair' }, { href: '/washer-repair', label: 'Washer Repair' }, { href: '/dryer-repair', label: 'Dryer Repair' }, { href: '/dishwasher-repair', label: 'Dishwasher Repair San Francisco' }, { href: '/oven-repair', label: 'Oven Repair' }, { href: '/cooktop-repair', label: 'Cooktop Repair' }, { href: '/ice-maker-repair', label: 'Ice Maker Repair' }, { href: '/freezer-repair', label: 'Freezer Repair' }, { href: '/wine-cooler-repair', label: 'Wine Cooler Repair' }, { href: '/garbage-disposal-repair', label: 'Garbage Disposal Repair' }, { href: '/commercial-appliance-repair', label: 'Commercial Repair' }, { href: '/maintenance', label: 'Maintenance' },
                ].map(l => (
                  <a key={l.href} href={l.href} className="r2-chip" style={{ fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 4, background: '#fff', border: '1px solid #E5E2DD', color: '#0D1B2A', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{l.label}</a>
                ))}
              </div>
              <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 18, fontSize: 15, fontWeight: 700, color: '#FF5722', textDecoration: 'none', minHeight: 44 }}>View all services &rarr;</a>
            </div>
            {/* Areas panel */}
            <div style={{ background: '#fff', borderRadius: 4, padding: 24, border: '1px solid #E5E2DD' }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0D1B2A', marginBottom: 14 }}>Popular Service Areas</h3>
              <div className="flex flex-wrap" style={{ gap: 10 }}>
                {[
                  { href: '/san-francisco-appliance-repair', label: 'San Francisco' }, { href: '/daly-city-appliance-repair', label: 'Daly City' }, { href: '/south-san-francisco-appliance-repair', label: 'South San Francisco' }, { href: '/san-bruno-appliance-repair', label: 'San Bruno' }, { href: '/pacifica-appliance-repair', label: 'Pacifica' }, { href: '/millbrae-appliance-repair', label: 'Millbrae' }, { href: '/san-rafael-appliance-repair', label: 'San Rafael' }, { href: '/mill-valley-appliance-repair', label: 'Mill Valley' }, { href: '/sausalito-appliance-repair', label: 'Sausalito' }, { href: '/novato-appliance-repair', label: 'Novato' },
                ].map(l => (
                  <a key={l.href} href={l.href} className="r2-chip" style={{ fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 4, background: '#fff', border: '1px solid #E5E2DD', color: '#0D1B2A', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{l.label}</a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 18 }}>
                <a href="/service-areas" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 15, fontWeight: 700, color: '#FF5722', textDecoration: 'none', minHeight: 44 }}>View all service areas &rarr;</a>
                <a href="/marin-county-appliance-repair" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none', minHeight: 44 }}>Marin County Appliance Repair &rarr;</a>
              </div>
              <div style={{ marginTop: 18, borderTop: '1px solid #E5E2DD', paddingTop: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(0,0,0,0.35)', textTransform: 'uppercase' }}>From the Blog</span>
                <div className="flex flex-col" style={{ gap: 6, marginTop: 8 }}>
                  <a href="/blog/same-day-appliance-repair-bay-area" style={{ fontSize: 14, fontWeight: 600, color: '#0D1B2A', textDecoration: 'none' }}>Same-Day Appliance Repair Guide &rarr;</a>
                  <a href="/blog/appliance-repair-marin-county" style={{ fontSize: 14, fontWeight: 600, color: '#0D1B2A', textDecoration: 'none' }}>Appliance Repair in Marin County &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Utility styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
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

        /* ===== MOBILE STYLES ===== */

        @media (max-width: 768px) {
          /* -- GLOBAL -- */
          * { box-sizing: border-box; }
          p, li { font-size: 14px; line-height: 1.6; }
          h2 { font-size: 22px !important; line-height: 1.25; word-break: break-word; }
          h3 { font-size: 18px !important; word-break: break-word; }
          /* Hide desktop-only stats section on all mobile viewports */
          [data-testid="stats-section"] { display: none !important; }

          /* -- TRUST BAR -- */
          .mobile-trust-bar { display: flex; justify-content: space-around; align-items: center; }
          @media (min-width: 1024px) { .mobile-trust-bar { display: none !important; } }

          /* -- HERO -- */
          /* hero-mobile-wrapper rules removed — unified hero layout */
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) { min-height: 480px; padding: 60px 16px 80px; }
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) h1 { font-size: 26px !important; line-height: 1.2; margin-bottom: 12px; }
          .hero:not(.hero-section-root):not(.hero-mobile-wrapper) p { font-size: 14px; padding: 0 8px; margin-bottom: 20px; }
          .hero .cta-group, .hero [class*="buttons"], .hero [class*="cta"]:not(.hero-mobile-wrapper *) {
            display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 320px; margin: 0 auto 24px;
          }
          .hero:not(.hero-section-root) a, .hero:not(.hero-section-root) button {
            width: 100%; min-height: 52px; padding: 15px 20px; font-size: 15px;
            display: flex; align-items: center; justify-content: center; text-align: center;
            border-radius: 4px; font-family: Montserrat, sans-serif; font-weight: 700; text-decoration: none;
          }
          .trust-badges, .hero [class*="badge"]:not(.hero-mobile-wrapper *) {
            display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 20px;
          }
          .trust-badges span, [class*="badge"] span { font-size: 12px; }

          /* -- HOW IT WORKS -- */
          [class*="how-it-works"] .grid, [class*="steps"] .grid, [class*="process"] .grid {
            grid-template-columns: 1fr; gap: 16px;
          }

          /* -- INTRO CTA BUTTONS (mobile full-width) -- */
          .intro-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .intro-cta-book, .intro-cta-call { width: 100% !important; min-width: 0 !important; box-sizing: border-box; display: flex !important; justify-content: center; }

          /* -- SERVICES TABS -- */
          .tabs, [class*="tab-list"], [role="tablist"] {
            display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 8px; padding-bottom: 4px;
          }
          .tabs::-webkit-scrollbar { display: none; }
          .tab-btn, [role="tab"], [class*="tab-item"] {
            flex-shrink: 0; scroll-snap-align: start; padding: 10px 16px; font-size: 13px;
            white-space: nowrap; min-height: 44px; border-radius: 4px;
          }
          .tab-content .grid, [class*="services-grid"] { grid-template-columns: 1fr 1fr; gap: 12px; }
          .service-card, [class*="service-card"] { padding: 16px; min-width: 0; }
          .service-card h3 { font-size: 15px !important; }

          /* -- PRICING / WARRANTY -- */
          [class*="warranty"], [class*="guarantee"], [class*="no-surprises"] { padding: 32px 16px; }
          [class*="warranty"] .grid, [class*="guarantee"] .grid { grid-template-columns: 1fr; gap: 16px; }

          /* -- FAQ -- */
          [class*="faq"], [class*="accordion"] { padding: 32px 16px; }
          .faq-item, [class*="accordion-item"] { border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
          .faq-question, [class*="accordion-trigger"], [class*="faq-q"] {
            font-size: 14px; padding: 14px 16px; min-height: 52px;
            display: flex; align-items: center; justify-content: space-between;
            font-family: Montserrat, sans-serif; font-weight: 600; cursor: pointer; width: 100%; text-align: left;
          }
          .faq-question .chevron, .faq-question svg, [class*="accordion-trigger"] svg {
            flex-shrink: 0; width: 20px; height: 20px;
          }
          .faq-answer, [class*="accordion-content"] { font-size: 14px; padding: 0 16px 16px; line-height: 1.6; }

          /* -- SERVICE AREAS (pills) -- */
          [class*="areas"], [class*="cities"], [class*="service-area"] { padding: 32px 16px; }
          [class*="pills"], [class*="city-list"], [class*="areas"] ul {
            display: flex; flex-wrap: wrap; gap: 8px; padding: 0; list-style: none;
          }
          [class*="pill"], [class*="city-tag"], [class*="area-tag"] {
            font-size: 12px; padding: 8px 12px; white-space: nowrap; border-radius: 100px;
            min-height: 36px; display: flex; align-items: center;
          }

          /* -- POPULAR SERVICES GRID -- */
          [class*="popular-services"] .grid, [class*="services-list"] .grid {
            grid-template-columns: 1fr 1fr; gap: 8px;
          }
          [class*="popular-services"] a, [class*="services-list"] a {
            font-size: 13px; padding: 10px 12px; min-height: 44px; display: flex; align-items: center;
          }

          /* -- FOOTER -- */
          footer { padding: 40px 16px 80px; }
          footer .grid, footer [class*="footer-grid"] { grid-template-columns: 1fr; gap: 32px; }
          footer h4, footer h3 {
            font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.05em;
            margin-bottom: 12px; font-family: Montserrat, sans-serif; font-weight: 700;
          }
          footer a { font-size: 14px; padding: 4px 0; min-height: 36px; display: flex; align-items: center; }
          footer .phone, footer a[href*="tel"] {
            font-size: 22px !important; font-weight: 800; color: #FF5722;
            font-family: Montserrat, sans-serif; display: block; margin-bottom: 12px;
          }

          /* Page-specific overrides */
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

        /* ── TABLET H2 OVERRIDES (merged desktop/mobile headings) ── */
        @media (min-width: 769px) and (max-width: 1023px) {
          #pricing h2 { font-size: 30px !important; font-weight: 700; }
          #faq h2 { font-size: 30px !important; font-weight: 700; }
          [data-testid="homepage-explore-links"] h2 { font-size: 24px !important; font-weight: 700; }
          [data-testid="service-area-section"] h2 { font-size: 30px !important; font-weight: 700; }
        }

        /* -- EXTRA SMALL -- */
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

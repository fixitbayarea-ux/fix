import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import freezerImg from '../../assets/services/freezer.jpg';
import iceMakerImg from '../../assets/services/ice-maker.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import cooktopImg from '../../assets/services/cooktop.jpg';
import rangeImg from '../../assets/services/range.jpg';
import disposalImg from '../../assets/services/disposal.jpg';
import wineCoolerImg from '../../assets/services/wine-cooler.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import commercialRefrigeratorImg from '../../assets/services/commercial-refrigerator.jpg';
import commercialDishwasherImg from '../../assets/services/commercial-dishwasher.jpg';
import commercialWasherImg from '../../assets/services/commercial-washer.jpg';
import commercialDryerImg from '../../assets/services/commercial-dryer.jpg';

import refrigeratorImgWebP from '../../assets/services/refrigerator.webp';
import freezerImgWebP from '../../assets/services/freezer.webp';
import iceMakerImgWebP from '../../assets/services/ice-maker.webp';
import dishwasherImgWebP from '../../assets/services/dishwasher.webp';
import ovenImgWebP from '../../assets/services/oven.webp';
import cooktopImgWebP from '../../assets/services/cooktop.webp';
import rangeImgWebP from '../../assets/services/range.webp';
import disposalImgWebP from '../../assets/services/disposal.webp';
import wineCoolerImgWebP from '../../assets/services/wine-cooler.webp';
import washerImgWebP from '../../assets/services/washer.webp';
import dryerImgWebP from '../../assets/services/dryer.webp';
import commercialRefrigeratorImgWebP from '../../assets/services/commercial-refrigerator.webp';
import commercialDishwasherImgWebP from '../../assets/services/commercial-dishwasher.webp';
import commercialWasherImgWebP from '../../assets/services/commercial-washer.webp';
import commercialDryerImgWebP from '../../assets/services/commercial-dryer.webp';

const servicesData = [
  { name: 'Refrigerator', category: 'Kitchen', description: 'Not cooling, water leaks, ice maker issues', path: '/refrigerator-repair', image: refrigeratorImg, imageWebP: refrigeratorImgWebP },
  { name: 'Freezer', category: 'Kitchen', description: 'Not freezing, frost buildup, temperature issues', path: '/freezer-repair', image: freezerImg, imageWebP: freezerImgWebP },
  { name: 'Ice Maker', category: 'Kitchen', description: 'Not making ice, water leaking, jammed', path: '/ice-maker-repair', image: iceMakerImg, imageWebP: iceMakerImgWebP },
  { name: 'Dishwasher', category: 'Kitchen', description: 'Not draining, leaking, won\'t start', path: '/dishwasher-repair', image: dishwasherImg, imageWebP: dishwasherImgWebP },
  { name: 'Oven', category: 'Kitchen', description: 'Not heating, temperature issues', path: '/oven-repair', image: ovenImg, imageWebP: ovenImgWebP },
  { name: 'Stove & Cooktop', category: 'Kitchen', description: 'Burners not working, igniter problems', path: '/cooktop-repair', image: cooktopImg, imageWebP: cooktopImgWebP },
  { name: 'Range', category: 'Kitchen', description: 'Combo oven and stove repair', path: '/oven-repair', image: rangeImg, imageWebP: rangeImgWebP },
  { name: 'Garbage Disposal', category: 'Kitchen', description: 'Jammed, leaking, or humming', path: '/garbage-disposal-repair', image: disposalImg, imageWebP: disposalImgWebP },
  { name: 'Wine Cooler', category: 'Kitchen', description: 'Temperature not holding, not cooling', path: '/wine-cooler-repair', image: wineCoolerImg, imageWebP: wineCoolerImgWebP },
  { name: 'Washer', category: 'Laundry', description: 'Not spinning, draining, or filling', path: '/washer-repair', image: washerImg, imageWebP: washerImgWebP },
  { name: 'Dryer', category: 'Laundry', description: 'Not heating, tumbling, or turning on', path: '/dryer-repair', image: dryerImg, imageWebP: dryerImgWebP },
  { name: 'Commercial Refrigerator', category: 'Commercial', description: 'Walk-in coolers, reach-in units, display cases', path: '/commercial-refrigerator-repair', image: commercialRefrigeratorImg, imageWebP: commercialRefrigeratorImgWebP },
  { name: 'Commercial Dishwasher', category: 'Commercial', description: 'Restaurant dishwashers, high-temp units', path: '/commercial-dishwasher-repair', image: commercialDishwasherImg, imageWebP: commercialDishwasherImgWebP },
  { name: 'Commercial Washer', category: 'Commercial', description: 'Industrial washing machines, coin-op units', path: '/commercial-washer-repair', image: commercialWasherImg, imageWebP: commercialWasherImgWebP },
  { name: 'Commercial Dryer', category: 'Commercial', description: 'Industrial dryers, coin-op dryers', path: '/commercial-dryer-repair', image: commercialDryerImg, imageWebP: commercialDryerImgWebP },
];

const categories = ['Kitchen', 'Laundry', 'Commercial'];

const HomeServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Kitchen');
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    setShowSwipeHint(true);
    setActiveCarouselIndex(0);
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    const timer = setTimeout(() => setShowSwipeHint(false), 3000);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredServices = servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ background: '#F8F5F0', paddingTop: 76, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 36 }}>
          <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 12 }}>WHAT WE FIX</div>
          <h2 className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#0D1B2A', marginBottom: 20 }}>Every Major Appliance. Every Major Brand.</h2>
          <h2 className="lg:hidden text-3xl font-bold mb-3" style={{ color: '#0D1B2A' }}>Professional Appliance Repair Services</h2>
        </div>
        {/* Tabs */}
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
              <div className="relative overflow-hidden" style={{ height: 200 }}><picture><source srcSet={svc.imageWebP} type="image/webp" /><img src={svc.image} alt={`${svc.name} repair — FixitBay LLC`} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" width="800" height="533" loading="lazy" decoding="async" /></picture></div>
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
        {/* Mobile carousel (hidden) */}
        <div key={`m-${activeCategory}`} className="hidden animate-fadeIn">
          <div style={{ textAlign: 'center', marginBottom: 10, height: 20 }}>
            <span data-testid="swipe-hint" style={{ fontSize: 12, color: '#999', fontFamily: 'Montserrat, sans-serif', opacity: showSwipeHint ? 1 : 0, transition: 'opacity 0.6s ease', pointerEvents: 'none', userSelect: 'none' }}>&larr; Swipe to see all services &rarr;</span>
          </div>
          <div ref={carouselRef} data-testid="services-carousel" onScroll={(e) => { const el = e.currentTarget; const cardWidth = el.clientWidth * 0.85; const idx = Math.round(el.scrollLeft / (cardWidth + 16)); setActiveCarouselIndex(Math.max(0, Math.min(idx, filteredServices.length - 1))); }} className="overflow-x-auto pb-4 scrollbar-hide -mx-4" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-4 px-4">
              {filteredServices.map(svc => (
                <a key={svc.name} href={svc.path} rel={svc.name === 'Dishwasher' ? 'nofollow' : undefined} className="flex-shrink-0 flex flex-col bg-white rounded-xl overflow-hidden shadow-md" style={{ width: '85vw', maxWidth: 360, scrollSnapAlign: 'center', textDecoration: 'none' }}>
                  <div className="relative h-40 bg-gray-200 overflow-hidden"><picture><source srcSet={svc.imageWebP} type="image/webp" /><img src={svc.image} alt={`${svc.name} repair`} className="w-full h-full object-cover" loading="lazy" height="160" /></picture></div>
                  <div className="flex flex-col flex-grow p-5"><h3 className="text-lg font-bold mb-2" style={{ color: '#0D1B2A' }}>{svc.name}</h3><p className="text-sm mb-3" style={{ color: '#4A5568' }}>{svc.description}</p><div className="flex flex-wrap gap-2 mb-3"><span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#F0EBE5', color: '#0D1B2A' }}>Same/Next-Day</span><span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#F8F5F0', color: '#744210' }}>$60 Diagnostic</span></div><div className="mt-auto w-full px-5 py-2.5 rounded-lg font-bold text-center text-sm" style={{ background: '#FF5722', color: '#fff' }}>View Service</div></div>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3" aria-hidden="true" data-testid="carousel-dots">
            {filteredServices.map((_, i) => (
              <button key={i} data-testid={`carousel-dot-${i}`} onClick={() => { const el = carouselRef.current; if (el) { const cardWidth = el.clientWidth * 0.85; el.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' }); } setActiveCarouselIndex(i); }} style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', padding: 0, background: activeCarouselIndex === i ? '#FF5722' : '#ccc', cursor: 'pointer', flexShrink: 0, transition: 'background 0.3s ease' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;

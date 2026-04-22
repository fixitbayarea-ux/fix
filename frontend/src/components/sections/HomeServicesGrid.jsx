import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import freezerImg from '../../assets/services/freezer.jpg';
import iceMakerImg from '../../assets/services/ice-maker.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import cooktopImg from '../../assets/services/cooktop.jpg';
import rangeImg from '../../assets/services/range.jpg';
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
  { name: 'Ice Maker', category: 'Kitchen', description: 'Not making ice, water leaking, jammed', path: '/ice-maker-repair', image: iceMakerImg, imageWebP: iceMakerImgWebP },
  { name: 'Dishwasher', category: 'Kitchen', description: "Not draining, leaking, won't start", path: '/dishwasher-repair', image: dishwasherImg, imageWebP: dishwasherImgWebP },
  { name: 'Oven', category: 'Kitchen', description: 'Not heating, temperature issues', path: '/oven-repair', image: ovenImg, imageWebP: ovenImgWebP },
  { name: 'Stove & Cooktop', category: 'Kitchen', description: 'Burners not working, igniter problems', path: '/cooktop-repair', image: cooktopImg, imageWebP: cooktopImgWebP },
  { name: 'Range', category: 'Kitchen', description: 'Combo oven and stove repair', path: '/oven-repair', image: rangeImg, imageWebP: rangeImgWebP },
  { name: 'Wine Cooler', category: 'Kitchen', description: 'Temperature not holding, not cooling', path: '/wine-cooler-repair', image: wineCoolerImg, imageWebP: wineCoolerImgWebP },
  { name: 'Washer', category: 'Laundry', description: 'Not spinning, draining, or filling', path: '/washer-repair', image: washerImg, imageWebP: washerImgWebP },
  { name: 'Dryer', category: 'Laundry', description: 'Not heating, tumbling, or turning on', path: '/dryer-repair', image: dryerImg, imageWebP: dryerImgWebP },
  { name: 'Commercial Refrigerator', category: 'Commercial', description: 'Walk-in coolers, reach-in units, display cases', path: '/commercial-refrigerator-repair', image: commercialRefrigeratorImg, imageWebP: commercialRefrigeratorImgWebP },
  { name: 'Commercial Dishwasher', category: 'Commercial', description: 'Restaurant dishwashers, high-temp units', path: '/commercial-dishwasher-repair', image: commercialDishwasherImg, imageWebP: commercialDishwasherImgWebP },
  { name: 'Commercial Washer', category: 'Commercial', description: 'Industrial washing machines, coin-op units', path: '/commercial-washer-repair', image: commercialWasherImg, imageWebP: commercialWasherImgWebP },
  { name: 'Commercial Dryer', category: 'Commercial', description: 'Industrial dryers, coin-op dryers', path: '/commercial-dryer-repair', image: commercialDryerImg, imageWebP: commercialDryerImgWebP },
];

const CATEGORIES = ['Kitchen', 'Laundry', 'Commercial'];

const ServiceCard = ({ svc, span }) => {
  const isFeatured = span === 2;
  const imgHeight = isFeatured ? 200 : 140;

  return (
    <Link
      to={svc.path}
      rel={svc.name === 'Dishwasher' ? 'nofollow' : undefined}
      data-testid={`svc-card-${svc.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="hsg-card"
      style={{
        gridColumn: `span ${span}`,
        background: '#FFFFFF',
        borderRadius: 4,
        border: '1px solid #E5E2DD',
        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {svc.image ? (
        <div style={{ height: imgHeight, overflow: 'hidden' }}>
          <picture>
            <source srcSet={svc.imageWebP} type="image/webp" />
            <img
              src={svc.image}
              alt={`${svc.name} repair — FixitBay LLC`}
              loading="lazy"
              decoding="async"
              width="800"
              height="533"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.25s' }}
            />
          </picture>
        </div>
      ) : (
        <div style={{ height: imgHeight, background: '#FFF1E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Wrench size={isFeatured ? 40 : 30} color="#FF5722" strokeWidth={2} />
        </div>
      )}

      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1, fontFamily: 'Montserrat, sans-serif' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: isFeatured ? 18 : 17, fontWeight: 700, color: '#0D1B2A', margin: 0, marginBottom: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5722', flexShrink: 0 }} />
          {svc.name}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: '#4A5568', fontWeight: 400, margin: 0, marginBottom: 14 }}>
          {svc.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 3, background: 'rgba(255,87,34,0.08)', color: '#B85E20', border: '1px solid rgba(255,87,34,0.20)' }}>Same/Next-Day</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 3, background: 'rgba(255,87,34,0.08)', color: '#B85E20', border: '1px solid rgba(255,87,34,0.20)' }}>$80 Diagnostic</span>
        </div>
        <p style={{ fontSize: 12, color: '#4A5568', fontWeight: 500, margin: 0, marginBottom: 16 }}>
          180-Day Warranty on parts &amp; labor
        </p>
        <div className="hsg-view-btn" style={{ marginTop: 'auto', width: '100%', height: 42, borderRadius: 4, background: '#0D1B2A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', transition: 'background 0.2s' }}>
          View Service
        </div>
      </div>
    </Link>
  );
};

const HomeServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Kitchen');
  const filtered = servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ background: '#F8F5F0', paddingTop: 76, paddingBottom: 80 }}>
      <style>{`
        .hsg-card:hover {
          border-color: #FF5722 !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
        }
        .hsg-card:hover .hsg-view-btn { background: #FF5722 !important; }
        .hsg-card:hover img { transform: scale(1.03); }
        @media (max-width: 1023px) {
          .hsg-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hsg-grid .hsg-card { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .hsg-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FF5722',
              marginBottom: 10,
            }}
          >
            What We Fix
          </div>
          <h2
            data-testid="home-services-heading"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Our Services
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-hide" style={{ marginBottom: 36 }}>
          <div className="inline-flex gap-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }} role="tablist">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                data-testid={`svc-tab-${cat.toLowerCase()}`}
                className="whitespace-nowrap transition-all duration-200"
                style={{
                  padding: '14px 36px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: activeCategory === cat ? 600 : 500,
                  background: 'transparent',
                  color: activeCategory === cat ? '#0D1B2A' : '#4A5568',
                  border: 'none',
                  borderBottom: activeCategory === cat ? '2px solid #FF5722' : '2px solid transparent',
                  cursor: 'pointer',
                  marginBottom: -1,
                  minHeight: 44,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-column grid — first card in each tab spans 2, rest span 1 */}
        <div
          key={activeCategory}
          className="hsg-grid animate-fadeIn"
          data-testid="home-services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {filtered.map((svc, i) => (
            <ServiceCard key={svc.path + svc.name} svc={svc} span={i === 0 ? 2 : 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;

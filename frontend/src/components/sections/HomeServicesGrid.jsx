import React from 'react';
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

// Refrigerator is the featured (double-width) card; everything else is single-width.
const services = [
  { name: 'Refrigerator Repair', description: 'Not cooling, water leaks, ice maker issues', path: '/refrigerator-repair', image: refrigeratorImg, imageWebP: refrigeratorImgWebP, span: 2 },
  { name: 'Freezer Repair', description: 'Not freezing, frost buildup, temperature issues', path: '/freezer-repair', image: freezerImg, imageWebP: freezerImgWebP, span: 1 },
  { name: 'Ice Maker Repair', description: 'Not making ice, water leaking, jammed', path: '/ice-maker-repair', image: iceMakerImg, imageWebP: iceMakerImgWebP, span: 1 },
  { name: 'Dishwasher Repair', description: "Not draining, leaking, won't start", path: '/dishwasher-repair', image: dishwasherImg, imageWebP: dishwasherImgWebP, span: 1 },
  { name: 'Oven Repair', description: 'Not heating, temperature issues', path: '/oven-repair', image: ovenImg, imageWebP: ovenImgWebP, span: 1 },
  { name: 'Stove & Cooktop', description: 'Burners not working, igniter problems', path: '/cooktop-repair', image: cooktopImg, imageWebP: cooktopImgWebP, span: 1 },
  { name: 'Range Repair', description: 'Combo oven and stove repair', path: '/oven-repair', image: rangeImg, imageWebP: rangeImgWebP, span: 1 },
  { name: 'Wine Cooler Repair', description: 'Temperature not holding, not cooling', path: '/wine-cooler-repair', image: wineCoolerImg, imageWebP: wineCoolerImgWebP, span: 1 },
  { name: 'Washer Repair', description: 'Not spinning, draining, or filling', path: '/washer-repair', image: washerImg, imageWebP: washerImgWebP, span: 1 },
  { name: 'Dryer Repair', description: 'Not heating, tumbling, or turning on', path: '/dryer-repair', image: dryerImg, imageWebP: dryerImgWebP, span: 1 },
  { name: 'Commercial Refrigerator', description: 'Walk-in coolers, reach-in units, display cases', path: '/commercial-refrigerator-repair', image: commercialRefrigeratorImg, imageWebP: commercialRefrigeratorImgWebP, span: 1 },
  { name: 'Commercial Dishwasher', description: 'Restaurant dishwashers, high-temp units', path: '/commercial-dishwasher-repair', image: commercialDishwasherImg, imageWebP: commercialDishwasherImgWebP, span: 1 },
  { name: 'Commercial Washer', description: 'Industrial washing machines, coin-op units', path: '/commercial-washer-repair', image: commercialWasherImg, imageWebP: commercialWasherImgWebP, span: 1 },
  { name: 'Commercial Dryer', description: 'Industrial dryers, coin-op dryers', path: '/commercial-dryer-repair', image: commercialDryerImg, imageWebP: commercialDryerImgWebP, span: 1 },
];

const ServiceCard = ({ svc }) => {
  const isFeatured = svc.span === 2;
  const imgHeight = isFeatured ? 160 : 120;

  return (
    <Link
      to={svc.path}
      data-testid={`svc-card-${svc.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="hsg-card"
      style={{
        gridColumn: `span ${svc.span}`,
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
              alt={`${svc.name} — FixitBay LLC`}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </picture>
        </div>
      ) : (
        <div
          style={{
            height: imgHeight,
            background: '#FFF1E8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Wrench size={isFeatured ? 36 : 28} color="#FF5722" strokeWidth={2} />
        </div>
      )}

      <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 16,
            fontWeight: 700,
            color: '#1A1A1A',
            margin: 0,
            marginBottom: 6,
          }}
        >
          {svc.name}
        </h3>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: '#4A5568',
            lineHeight: 1.55,
            margin: 0,
            marginBottom: 12,
          }}
        >
          {svc.description}
        </p>
        <span
          style={{
            alignSelf: 'flex-start',
            marginTop: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            color: '#FF5722',
            border: '2px solid #FF5722',
            borderRadius: 4,
            padding: '5px 12px',
          }}
        >
          Learn More →
        </span>
      </div>
    </Link>
  );
};

const HomeServicesGrid = () => {
  return (
    <section id="services" style={{ background: '#F8F5F0', paddingTop: 76, paddingBottom: 80 }}>
      <style>{`
        .hsg-card:hover {
          border-color: #FF5722 !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
        }
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
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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

        {/* 4-column grid with variable spans */}
        <div
          className="hsg-grid"
          data-testid="home-services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.path + svc.name} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;

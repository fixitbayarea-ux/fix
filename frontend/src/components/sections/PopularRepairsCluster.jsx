import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Shared internal-link cluster for city pages.
 * Renders chip-style links like "/{citySlug}-{service}-repair".
 *
 * Two visual variants so it can drop into either city template without
 * changing existing UX.
 *
 * Props:
 *  - city        display name
 *  - citySlug    URL slug
 *  - variant     'classic' | 'landing'   (defaults to 'classic')
 */
const REPAIRS = [
  { label: 'Refrigerator Repair', svc: 'refrigerator' },
  { label: 'Washer Repair', svc: 'washer' },
  { label: 'Dryer Repair', svc: 'dryer' },
  { label: 'Dishwasher Repair', svc: 'dishwasher' },
  { label: 'Oven & Range Repair', svc: 'oven' },
  { label: 'Wine Cooler Repair', svc: 'wine-cooler' },
  { label: 'Ice Maker Repair', svc: 'ice-maker' },
];

const PALETTE = {
  classic: {
    section: { background: '#F8F5F0', padding: '48px 0' },
    heading: { fontSize: 24, fontWeight: 700, color: '#0D1B2A', marginBottom: 20 },
    gridClass: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    gridStyle: { gap: 10 },
    linkBaseColor: '#0D1B2A',
    linkHoverBg: '#0D1B2A',
    linkRadius: 3,
  },
  landing: {
    section: { background: '#f8f5f0', padding: '70px 0' },
    heading: { fontSize: 28, fontWeight: 800, color: '#0d1b2a', marginBottom: 16, lineHeight: '33.6px', fontFamily: 'Montserrat, sans-serif' },
    gridClass: 'clp-3col',
    gridStyle: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 16 },
    linkBaseColor: '#0d1b2a',
    linkHoverBg: '#0d1b2a',
    linkRadius: 4,
  },
};

const PopularRepairsCluster = ({ city, citySlug, variant = 'classic', eyebrow = null, testIdPrefix = 'popular-repair' }) => {
  const slug = citySlug || (city || '').toLowerCase().replace(/\s+/g, '-');
  const p = PALETTE[variant] || PALETTE.classic;

  return (
    <section style={p.section}>
      <div className="max-w-6xl mx-auto" style={{ maxWidth: variant === 'landing' ? 1100 : undefined, margin: '0 auto', padding: '0 24px' }}>
        {eyebrow && (
          <span style={{ color: '#ff5722', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.2px', marginBottom: 12, display: 'block', fontFamily: 'Montserrat, sans-serif' }}>{eyebrow}</span>
        )}
        <h2 style={p.heading}>Popular Repairs in {city}</h2>
        <div className={p.gridClass} style={p.gridStyle}>
          {REPAIRS.map(s => (
            <Link
              key={s.svc}
              to={`/${slug}-${s.svc}-repair`}
              data-testid={`${testIdPrefix}-${s.svc}`}
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: p.linkBaseColor,
                textDecoration: 'none',
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.09)',
                borderRadius: p.linkRadius,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: variant === 'landing' ? 'Montserrat, sans-serif' : undefined,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = p.linkHoverBg;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = p.linkBaseColor;
              }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRepairsCluster;

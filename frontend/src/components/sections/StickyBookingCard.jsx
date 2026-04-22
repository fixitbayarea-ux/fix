import React from 'react';
import { Phone, Check } from 'lucide-react';

/**
 * Desktop-only floating booking card for service pages.
 *
 * Visually mirrors a sticky right-column card (position: sticky, top: 96px)
 * but implemented as `position: fixed` so it does not require wrapping the
 * entire 1264-LOC ApplianceRepairPageNew template in a 2-column grid
 * (which would risk breaking the layout of 56 consuming pages).
 *
 * Hidden below 1280px — mobile reverts to the existing in-page CTAs.
 *
 * Props:
 *  - serviceName   display name used in the button label (e.g. "Refrigerator")
 *  - isCommercial  true → $100 diagnostic, false → $80
 */
const StickyBookingCard = ({ serviceName, isCommercial = false }) => {
  const price = isCommercial ? '$100' : '$80';
  const label = serviceName ? `Book ${serviceName} Repair →` : 'Book Repair →';

  return (
    <aside
      className="sbc-wrap"
      data-testid="sticky-booking-card"
      aria-label="Book a diagnostic visit"
    >
      <style>{`
        .sbc-wrap {
          display: none;
        }
        @media (min-width: 1280px) {
          .sbc-wrap {
            display: block;
            position: fixed;
            top: 96px;
            right: 24px;
            width: 380px;
            z-index: 40;
            pointer-events: auto;
          }
          /* Hide the legacy floating "Book Repair" FAB to avoid duplicate CTAs */
          .sticky-book-fab { display: none !important; }
        }
        /* Keep clear of the 1200px main column on mid-large desktops */
        @media (min-width: 1280px) and (max-width: 1640px) {
          .sbc-wrap {
            right: max(24px, calc((100vw - 1200px) / 2 - 400px));
          }
        }
      `}</style>

      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 12,
          border: '1px solid #FFE4D6',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
          padding: '28px 24px',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#FF5722',
          }}
        >
          Diagnostic Fee
        </div>

        <div
          data-testid="sbc-price"
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: '#1A1A1A',
            marginTop: 4,
            lineHeight: 1.1,
          }}
        >
          {price}
        </div>

        <p
          style={{
            fontSize: 13,
            color: '#6B7280',
            margin: 0,
            marginTop: 4,
            marginBottom: 20,
          }}
        >
          Waived if we perform the repair
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            'Same-day assessment',
            'Upfront pricing',
            'Licensed technician',
            'All brands & models',
          ].map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: '#4A5568',
                marginBottom: 8,
              }}
            >
              <Check size={14} color="#FF5722" strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="/book?go=1"
          data-testid="sbc-book-btn"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: 20,
            background: '#FF5722',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 15,
            padding: '13px 24px',
            borderRadius: 4,
            width: '100%',
            boxShadow: '0 4px 12px rgba(255,87,34,0.25)',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          {label}
        </a>

        <a
          href="tel:+17605435733"
          data-testid="sbc-call-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 10,
            background: 'transparent',
            color: '#FF5722',
            border: '2px solid #FF5722',
            fontWeight: 700,
            fontSize: 14,
            padding: '11px 24px',
            borderRadius: 4,
            width: '100%',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          <Phone size={15} strokeWidth={2.5} />
          (760) 543-5733
        </a>
      </div>
    </aside>
  );
};

export default StickyBookingCard;

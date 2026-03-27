import React from 'react';

const F = 'Montserrat, sans-serif';

/**
 * BlogCTA — "Get Expert Help" section at the bottom of every blog post.
 * Place before the footer or related-posts section.
 */
const BlogCTA = () => (
  <section data-testid="blog-cta" style={{ background: '#0D1B2A', padding: '48px 24px' }}>
    <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 12 }}>Get Expert Help</div>
      <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 26, color: '#fff', lineHeight: 1.3, marginBottom: 16 }}>
        Not sure whether to repair or replace?
      </h2>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 28 }}>
        Get a <strong style={{ color: '#FF5722' }}>$60 diagnostic</strong> from a licensed Bay Area technician and an honest recommendation. If you approve the repair, the diagnostic fee is applied to the total cost.
      </p>
      <a
        href="/book"
        data-testid="blog-cta-book"
        style={{
          display: 'inline-block',
          background: '#FF5722',
          color: '#fff',
          fontFamily: F,
          fontWeight: 700,
          fontSize: 15,
          padding: '14px 36px',
          borderRadius: 4,
          textDecoration: 'none',
          transition: 'background 0.15s',
          minHeight: 52
        }}
      >
        Book Online &mdash; $60 Diagnostic
      </a>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>
        Same- or next-day &amp; next-day appointments &middot; 180-day warranty
      </p>
    </div>
  </section>
);

export default BlogCTA;

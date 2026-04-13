import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import UnifiedFooter from '../UnifiedFooter';
import useReviews from '../../hooks/useReviews';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

const TRUST_CARDS = [
  { num: '01', title: 'Honest Diagnosis', body: 'We tell you what\u2019s wrong and what it costs before any work begins. No surprises, no pressure. The $80 diagnostic is applied to your repair if you proceed.' },
  { num: '02', title: 'On-Time Reliability', body: 'Our technicians arrive on time with the parts needed for most common repairs. Most jobs are completed in a single visit \u2014 that\u2019s why customers come back.' },
  { num: '03', title: '180-Day Warranty', body: 'Every repair is backed by our 180-day warranty on parts and labor. If the same issue returns, we fix it free. No questions asked.' },
];

const PLATFORMS = {
  google: 'https://share.google/Q48c6OXAIB7u60fNv',
  yelp: 'https://www.yelp.com/biz/fixitbay-san-francisco-5',
  thumbtack: 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644',
};

const FILTER_TABS = ['All Reviews', 'Google', 'Thumbtack', 'Yelp'];

const ReviewsPage = () => {
  const { reviews, loading } = useReviews(false);
  const [activeFilter, setActiveFilter] = useState('All Reviews');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'All Reviews') return reviews;
    return reviews.filter(r => r.source === activeFilter);
  }, [reviews, activeFilter]);

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '4.9';

  const schemas = useMemo(() => [
    {
      id: 'reviews-localbusiness',
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FixitBay LLC",
        "telephone": "+17605435733",
        "award": "Nextdoor Neighborhood Fave 2025 — Bay Area Appliance Repair",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "106"
        },
        "review": reviews.filter(r => r.source === 'Google').slice(0, 3).map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating) },
          "reviewBody": r.text,
          "datePublished": r.date
        }))
      }
    },
    {
      id: 'reviews-breadcrumb',
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
          { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://fixitbay.net/reviews" }
        ]
      }
    }
  ], [reviews]);

  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="Customer Reviews | FixitBay LLC Appliance Repair SF"
        description="Read verified customer reviews for FixitBay LLC appliance repair in San Francisco Bay Area. 4.9 stars, 253 reviews across Google, Thumbtack & Yelp. Fast scheduling, 180-day warranty. Call (760) 543-5733."
        canonical="https://fixitbay.net/reviews"
      />

      <div style={{ fontFamily: F }}>
        <style>{`
          .rv-card{transition:border-color 0.2s,box-shadow 0.2s;break-inside:avoid}
          .rv-card:hover{border-color:rgba(255,87,34,0.3) !important;box-shadow:0 4px 24px rgba(255,87,34,0.1) !important}
          .trust-card:hover{box-shadow:0 4px 20px rgba(255,87,34,0.12) !important}
          .platform-btn:hover{border-color:#FF5722 !important;background:rgba(255,87,34,0.1) !important}
          @media(max-width:600px){.review-platforms-grid{grid-template-columns:1fr !important}.platform-btn{min-height:52px !important;width:100% !important;justify-content:center !important}}
          .filter-tab{cursor:pointer;transition:all 0.2s}
          .filter-tab:hover:not(.active){background:rgba(255,87,34,0.06) !important}
          .rv-masonry{column-count:2;column-gap:20px}
          @media(max-width:767px){.rv-masonry{column-count:1}}
          @media(max-width:767px){.stats-row{display:grid !important;grid-template-columns:1fr 1fr !important;gap:0 !important}.stats-row>div{border-right:none !important;padding:16px 24px !important}.stats-row>div:nth-child(1),.stats-row>div:nth-child(2){border-bottom:1px solid rgba(255,255,255,0.25)}}
          .rv-h1{font-size:46px !important}
          @media(max-width:767px){.rv-h1{font-size:28px !important}}
          @media(max-width:600px){.award-card{flex-direction:column !important;text-align:center !important;max-width:320px !important}}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="reviews-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 460, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 60px', color: '#fff' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Reviews</span>
            </nav>
            <div style={EYE}>VERIFIED CUSTOMER REVIEWS</div>
            <h1 className="rv-h1" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.5)', maxWidth: 700, margin: '0 auto 16px' }}>
              Customer Reviews — FixitBay LLC Appliance Repair San Francisco
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '0 auto 32px' }}>
              See why families across San Francisco, the Peninsula, and Marin County trust FixitBay LLC for appliance repair.
            </p>
            <div>
              <div style={{ color: '#FF5722', fontSize: 28, letterSpacing: 4, marginBottom: 12 }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 10 }}>
                <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" aria-label="Read our Google reviews" style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Google <span style={{ color: 'rgba(255,255,255,0.6)' }}>106 reviews &middot; 5 / 5</span></a>
                <a href="https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644" target="_blank" rel="noopener noreferrer" aria-label="Read our Thumbtack reviews" style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Thumbtack <span style={{ color: 'rgba(255,255,255,0.6)' }}>153 reviews &middot; 4.9 / 5</span></a>
                <a href="https://www.yelp.com/biz/fixitbay-san-francisco-5" target="_blank" rel="noopener noreferrer" aria-label="Read our Yelp reviews" style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Yelp <span style={{ color: 'rgba(255,255,255,0.6)' }}>5 reviews &middot; 5 / 5</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. STATS BAR ━━━ */}
        <section data-testid="reviews-stats" style={{ background: '#FF5722', padding: '32px 24px' }}>
          <div className="stats-row" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 0 }}>
            {[
              { val: '4.9', label: 'Average Rating' },
              { val: '253', label: 'Total Reviews' },
              { val: '100%', label: 'Would Recommend' },
              { val: 'Since 2023', label: 'Serving Bay Area' },
            ].map((s, i, arr) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 48px', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.25)' : 'none' }}>
                <div style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff' }}>{s.val}</div>
                <div style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 2.5 AWARDS & RECOGNITION ━━━ */}
        <section data-testid="reviews-awards" style={{ background: '#F8F5F0', padding: '48px 24px 0' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <div style={EYE}>RECOGNITION</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 6 }}>Awards &amp; Recognition</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 32 }}>
              Recognized as Bay Area's favorite appliance repair service
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
              <a href="https://nextdoor.com/page/fixitbay-san-francisco-ca/" target="_blank" rel="noopener noreferrer" aria-label="View FixitBay on Nextdoor — Neighborhood Fave 2025" className="award-card" data-testid="award-nextdoor" style={{
                background: '#fff', borderRadius: 16, padding: 28, maxWidth: 500,
                display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24,
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.06)',
                textAlign: 'left', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'border-color 0.2s',
              }}>
                <img
                  src="/images/awards/nextdoor-fave-2025-nd-square.png"
                  alt="Nextdoor Neighborhood Fave 2025 Winner — FixitBay LLC"
                  width="120"
                  height="120"
                  loading="lazy"
                  style={{ borderRadius: 12, objectFit: 'contain', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: '#1A1A1A', marginBottom: 4 }}>
                    Nextdoor Neighborhood Fave
                  </h3>
                  <p style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#FF5722', marginBottom: 8 }}>
                    2025 Winner &middot; Bay Area
                  </p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>
                    Voted by Nextdoor neighbors as the favorite appliance repair service in the San Francisco Bay Area.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ 3. FILTER TABS ━━━ */}
        <section data-testid="reviews-filters" style={{ background: '#F8F5F0', padding: '32px 24px 0' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <div style={EYE}>ALL REVIEWS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 6 }}>What Our Customers Say</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>Real feedback from verified customers across the Bay Area</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              {FILTER_TABS.map(tab => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    className={`filter-tab${isActive ? ' active' : ''}`}
                    data-testid={`filter-${tab.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveFilter(tab)}
                    style={{
                      fontFamily: F,
                      fontWeight: isActive ? 700 : 600,
                      fontSize: 13,
                      padding: '8px 20px',
                      borderRadius: 4,
                      border: isActive ? 'none' : '1px solid rgba(255,87,34,0.3)',
                      background: isActive ? '#FF5722' : '#fff',
                      color: isActive ? '#fff' : '#FF5722',
                      cursor: 'pointer',
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ━━━ 4. REVIEWS GRID ━━━ */}
        <section data-testid="reviews-grid" style={{ background: '#F8F5F0', padding: '32px 24px 64px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 40, height: 40, border: '3px solid rgba(255,87,34,0.2)', borderTopColor: '#FF5722', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 16, color: '#4A5568' }}>No reviews found for this platform yet.</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginTop: 8 }}>Check our other platforms or read all reviews.</p>
              </div>
            ) : (
              <div className="rv-masonry">
                {filtered.map((review, idx) => (
                  <div
                    key={review.id || idx}
                    className="rv-card"
                    data-testid={`review-card-${idx}`}
                    style={{
                      background: '#fff',
                      borderRadius: 4,
                      padding: 28,
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>{review.author}</span>
                      <span style={{ color: '#FF5722', fontSize: 14, letterSpacing: 2, flexShrink: 0 }}>
                        {Array.from({ length: review.rating }, () => '\u2605').join('')}
                      </span>
                    </div>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: F, fontWeight: 500, fontSize: 11,
                      color: 'rgba(255,87,34,0.8)',
                      background: 'rgba(255,87,34,0.08)',
                      padding: '2px 8px', borderRadius: 3,
                      marginBottom: 12,
                    }}>
                      {review.source} Review
                    </span>
                    <p style={{
                      fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568',
                      lineHeight: 1.7,
                      borderLeft: '2px solid rgba(255,87,34,0.3)',
                      paddingLeft: 14,
                    }}>
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ━━━ 5. READ MORE REVIEWS ━━━ */}
        <section data-testid="reviews-platforms" style={{ background: '#0D1B2A', padding: '48px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={EYE}>SEE MORE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', marginBottom: 8 }}>Read More Reviews Online</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>
              We're proud of every review &mdash; read them all on your preferred platform.
            </p>
            <div className="review-platforms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', justifyContent: 'center', gap: 12 }}>
              {[
                { label: 'Google Reviews', href: PLATFORMS.google },
                { label: 'Yelp Reviews', href: PLATFORMS.yelp },
                { label: 'Thumbtack Reviews', href: PLATFORMS.thumbtack },
              ].map(p => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-btn" data-testid={`platform-${p.label.split(' ')[0].toLowerCase()}`} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: '#1A2F45',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 4, padding: '14px 28px',
                  color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14,
                  textDecoration: 'none', transition: 'all 0.2s',
                }} aria-label="opens in new tab">
                  <span style={{ color: '#FF5722' }}>{'\u2605'}</span> {p.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 6. TRUST SECTION ━━━ */}
        <section data-testid="reviews-trust" style={{ background: '#F8F5F0', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>WHY CUSTOMERS TRUST US</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 28 }}>What Makes FixitBay LLC Different</h2>
            <div className="grid md:grid-cols-3" style={{ gap: 16 }}>
              {TRUST_CARDS.map((c, i) => (
                <div key={i} className="trust-card" style={{
                  background: '#fff', borderRadius: 4, padding: 28,
                  borderLeft: '3px solid #FF5722',
                  borderTop: '1px solid rgba(255,87,34,0.15)',
                  borderRight: '1px solid rgba(255,87,34,0.15)',
                  borderBottom: '1px solid rgba(255,87,34,0.15)',
                  transition: 'box-shadow 0.2s',
                }}>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: 'rgba(255,87,34,0.15)', display: 'block', marginBottom: 8 }}>{c.num}</span>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: '#1A1A1A', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.65 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 7. FINAL CTA ━━━ */}
        <section data-testid="reviews-cta" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ ...EYE, textAlign: 'center' }}>JOIN OUR CUSTOMERS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 40, color: '#fff', marginBottom: 12 }}>Ready to Experience 5-Star Service?</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
              Join hundreds of satisfied Bay Area homeowners. Schedule your repair today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="cta-book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>
                Schedule Repair Now
              </a>
              <a href="tel:+17605435733" data-testid="cta-call" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.6)', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                Call (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ 8. FOOTER ━━━ */}
        <UnifiedFooter />

      </div>
    </>
  );
};

export default ReviewsPage;

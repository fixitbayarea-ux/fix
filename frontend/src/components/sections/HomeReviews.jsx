import React, { useState, useRef, useEffect } from 'react';
import useReviews from '../../hooks/useReviews';

const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);
const ThumbIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#00BFFF"><path d="M6.18 6.38h11.69v2.68H6.17zm7.27 3.8v3.14c0 3.23-.02 3.74-.14 4.36a7.95 7.95 0 0 1-1.3 2.87c-.03 0-.78-1.35-.9-1.62-.17-.4-.3-.8-.4-1.25l-.09-.41-.02-5.78.16-.2a3.3 3.3 0 0 1 2.44-1.1zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Z"/></svg>
);

const fallbackReviews = [
  { id: "g-1", source: "Google", author: "jennifer mushnick", rating: 5, text: "Andrei was great\u2014diagnosed issues with our oven, was communicative, and professional. His assessment of the problem with the igniter seems accurate. He was informed and thorough explaining the issue." },
  { id: "g-2", source: "Google", author: "Ms Tee", rating: 5, text: "I would recommend FixitBay LLC. It\u2019s a professional service. Andrei was punctual and came the day after I called. He took his time and looked all over the unit. Appreciate the service." },
  { id: "g-3", source: "Google", author: "Karen Dzienkowski", rating: 5, text: "Andrei was great! Fixed it the first visit and came back to install a new thermostat the next day because he didn\u2019t have that part day 1. Reasonable price to fix a 20 yo fridge too! Highly recommend." },
  { id: "g-4", source: "Google", author: "Gayle Rabbitt", rating: 5, text: "Andrei was excellent. He explained and checked everything. He quickly realized the leak was from the utility sink next to the washer and shut off the hoses so leak stopped. I\u2019d definitely contact FixitBay LLC if have a problem with any appliance." },
  { id: "g-5", source: "Google", author: "Emily Chen", rating: 5, text: "One of the smoothest repair experiences I\u2019ve had. Super easy to book online and continue communicating over text with Andrei. He showed up on time, and was in/out within 2 hours. Would highly recommend!" },
  { id: "g-6", source: "Google", author: "Michael Kagan", rating: 5, text: "Andrei from FixItBay is great. He\u2019s knowledgeable, professional, fast, and answered any questions I had about my fridge and dishwasher. He\u2019s saved me twice already!" },
  { id: "t-1", source: "Thumbtack", author: "Heather O.", rating: 5, text: "Andrei was awesome! He diagnosed the problem with my washing machine and fixed it, giving me 2 options along the way in terms of cost. He was punctual and professional. Would use him again!" },
  { id: "g-7", source: "Google", author: "Sarah M.", rating: 5, text: "Had a Sub-Zero emergency on Thanksgiving morning. They came within an hour and saved our dinner party. Incredibly professional." },
  { id: "g-8", source: "Google", author: "James L.", rating: 5, text: "Fixed my LG washer same day. Andrei knew exactly what was wrong, explained everything clearly, and the price was fair. No upselling." },
];

const HomeReviews = React.forwardRef((_props, ref) => {
  const { reviews: apiReviews } = useReviews(true);
  const reviews = apiReviews.length > 0 ? apiReviews : fallbackReviews;
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoplayTimerRef = useRef(null);
  const interactionTimeoutRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isAutoplayPaused || userInteracted) return;
    if (typeof document !== 'undefined' && document.hidden) return;
    autoplayTimerRef.current = setTimeout(() => {
      setCurrentReviewIndex(prev => { const n = prev + 2; return n >= reviews.length ? 0 : n; });
    }, 5000);
    return () => { if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current); };
  }, [currentReviewIndex, isAutoplayPaused, userInteracted, prefersReducedMotion, reviews.length]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const h = () => setIsAutoplayPaused(document.hidden);
    document.addEventListener('visibilitychange', h);
    return () => document.removeEventListener('visibilitychange', h);
  }, []);

  return (
    <section ref={ref} id="reviews" style={{ background: '#0D1B2A', paddingTop: 80, paddingBottom: 80 }}>
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
                <a href={r.source === 'Google' ? 'https://share.google/Q48c6OXAIB7u60fNv' : 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644'} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 12, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} aria-label="opens in new tab">Read on {r.source} &rarr;</a>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: bottom links */}
        <div className="hidden lg:flex justify-center" style={{ gap: 32 }}>
          <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} aria-label="opens in new tab">Read all Google reviews &rarr;</a>
          <a href="https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} aria-label="opens in new tab">Read Thumbtack reviews &rarr;</a>
        </div>
        {/* Mobile */}
        <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide -mx-4"><div className="flex gap-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>{reviews.map(r => (
          <div key={r.id} className="flex-shrink-0 rounded-lg p-6 border border-white/10" style={{ width: '90vw', maxWidth: 400, scrollSnapAlign: 'center', background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2">{r.source === 'Google' ? <GoogleIcon size={18} /> : <ThumbIcon size={18} />}<span className="font-semibold text-sm" style={{ color: '#fff' }}>{r.source}</span></div></div>
            {r.rating && <div className="flex items-center mb-3">{[...Array(r.rating)].map((_, i) => <span key={i} style={{ color: '#FF5722', fontSize: 14 }}>&#9733;</span>)}</div>}
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>"{r.text}"</p>
            <div className="pt-4 border-t border-white/10"><p className="font-semibold text-sm mb-1" style={{ color: '#fff' }}>{r.author}</p><a href={r.source === 'Google' ? 'https://share.google/Q48c6OXAIB7u60fNv' : 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644'} target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ color: '#FF5722', minHeight: 44, display: 'inline-flex', alignItems: 'center' }} aria-label="opens in new tab">Read on {r.source} &rarr;</a></div>
          </div>
        ))}</div></div>
      </div>
    </section>
  );
});

HomeReviews.displayName = 'HomeReviews';
export default HomeReviews;

import React from 'react';

const F = 'Montserrat, sans-serif';

/**
 * BlogByline — Author + Published date (<time>) + Read time
 * Props: dateISO (e.g. "2026-01-15"), dateFormatted (e.g. "January 15, 2026"), readTime (e.g. "6 min")
 */
const BlogByline = ({ dateISO, dateFormatted, readTime }) => (
  <div data-testid="blog-byline" style={{ display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
      By Andrei &middot; Lead Technician, FixitBay
    </span>
    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>|</span>
    <time dateTime={dateISO} style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
      {dateFormatted}
    </time>
    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>|</span>
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
      ~{readTime} read
    </span>
  </div>
);

export default BlogByline;

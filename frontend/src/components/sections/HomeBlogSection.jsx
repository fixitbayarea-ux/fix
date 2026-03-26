import React from 'react';

const F = 'Montserrat, sans-serif';

const POSTS = [
  {
    slug: 'refrigerator-not-cooling',
    title: 'Refrigerator Not Cooling? 7 Causes & Fixes',
    excerpt: 'Is your fridge running but not keeping food cold? Top causes including compressor issues, dirty coils, and thermostat problems.',
    date: '2026-01-20',
    dateFormatted: 'Jan 20, 2026',
    readTime: '5 min',
    category: 'Refrigerator',
    image: '/images/blog-fridge.webp',
  },
  {
    slug: 'when-to-repair-vs-replace',
    title: 'Repair vs Replace: When to Fix Your Appliance',
    excerpt: 'Use our expert guide based on the 50% rule, age considerations, and repair costs to make the right decision.',
    date: '2026-01-15',
    dateFormatted: 'Jan 15, 2026',
    readTime: '6 min',
    category: 'Expert Advice',
    image: '/images/blog-repair.webp',
  },
  {
    slug: 'dishwasher-maintenance',
    title: 'How to Maintain Your Dishwasher for Longer Life',
    excerpt: 'Simple tips to prevent clogs, leaks, and odors. Keep your dishwasher running efficiently for 10+ years.',
    date: '2026-01-18',
    dateFormatted: 'Jan 18, 2026',
    readTime: '7 min',
    category: 'Dishwasher',
    image: '/images/blog-dishwasher.webp',
  },
];

const BlogCard = ({ post }) => (
  <a href={`/blog/${post.slug}`} data-testid={`blog-card-${post.slug}`} className="home-blog-card" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 6, border: '1px solid #E5E2DD', overflow: 'hidden', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
    <div style={{ aspectRatio: '16/9', background: '#E5E2DD', overflow: 'hidden', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0D1B2A 0%, #1A2D42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: 'rgba(255,87,34,0.15)' }}>{post.category.charAt(0)}</span>
      </div>
      <span style={{ position: 'absolute', top: 10, left: 10, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 10, padding: '3px 8px', borderRadius: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{post.category}</span>
    </div>
    <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#0D1B2A', lineHeight: 1.35, marginBottom: 8 }}>{post.title}</h3>
      <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6, flex: 1, marginBottom: 12 }}>{post.excerpt}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <time dateTime={post.date} style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>{post.dateFormatted}</time>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722' }}>Read More &rarr;</span>
      </div>
    </div>
  </a>
);

const HomeBlogSection = () => (
  <section data-testid="home-blog-section" style={{ background: '#F8F5F0', borderTop: '1px solid #E5E0DA', padding: '56px 24px 64px' }}>
    <style>{`
      .home-blog-card:hover{border-color:#FF5722 !important;box-shadow:0 4px 16px rgba(255,87,34,0.10) !important}
      .home-blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
      @media(max-width:767px){.home-blog-grid{grid-template-columns:1fr;gap:20px}}
      @media(min-width:768px) and (max-width:1023px){.home-blog-grid{grid-template-columns:repeat(2,1fr)}}
    `}</style>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>FROM OUR BLOG</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#0D1B2A', marginBottom: 8 }}>Tips, Guides &amp; Local Insights</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568' }}>For Bay Area homeowners who want to keep their appliances running longer.</p>
      </div>
      <div className="home-blog-grid">
        {POSTS.map(post => <BlogCard key={post.slug} post={post} />)}
      </div>
      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <a href="/blog" data-testid="blog-view-all" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: F, fontWeight: 700, fontSize: 15, color: '#FF5722', textDecoration: 'none', minHeight: 44, padding: '10px 24px', border: '1px solid rgba(255,87,34,0.3)', borderRadius: 4, transition: 'background 0.2s' }}>View All Articles &rarr;</a>
      </div>
    </div>
  </section>
);

export default HomeBlogSection;

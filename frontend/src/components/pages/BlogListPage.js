import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import UnifiedFooter from '../UnifiedFooter';
import { getBlogImage } from '../../data/blogImages';
import { STATIC_POSTS } from '../../data/blogPosts';
import './BlogListPage.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const TRUST_CARDS = [
  { num: '01', title: 'Certified Technicians', body: 'Written by licensed professionals with years of hands-on repair experience across all major appliance brands.' },
  { num: '02', title: 'Practical Tips', body: 'Real-world solutions you can apply today. DIY fixes, maintenance schedules, and when to call a pro.' },
  { num: '03', title: 'Always Updated', body: 'Fresh content based on the latest appliance technology and common issues we see in Bay Area homes.' },
];

const BlogListPage = () => {
  const [cmsPosts, setCmsPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/cms/blog-posts?published_only=true`)
      .then(r => r.json())
      .then(d => { if (d.success) setCmsPosts(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const h = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const allPosts = useMemo(() => {
    const cmsMap = new Set(cmsPosts.map(p => p.slug));
    return [...cmsPosts, ...STATIC_POSTS.filter(p => !cmsMap.has(p.slug))];
  }, [cmsPosts]);

  const categories = useMemo(() => {
    const cats = new Set();
    allPosts.forEach(p => (p.categories || []).forEach(c => cats.add(c)));
    return ['All', ...Array.from(cats).sort()];
  }, [allPosts]);

  const filtered = useMemo(() => {
    let list = allPosts;
    if (activeCategory !== 'All') list = list.filter(p => (p.categories || []).includes(activeCategory));
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || (p.excerpt || '').toLowerCase().includes(q));
    }
    return list;
  }, [allPosts, activeCategory, searchTerm]);

  const featuredPost = !searchTerm && activeCategory === 'All' ? filtered[0] : null;
  const gridPosts = featuredPost ? filtered.slice(1) : filtered;

  const formatDate = (d) => {
    if (!d) return '';
    try { return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); } catch { return d; }
  };

  const blogSchemas = useMemo(() => [
    {
      id: 'blog-schema',
      data: {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "FixitBay LLC Appliance Repair Tips & Advice",
        "description": "Expert appliance repair tips, cost guides, and maintenance advice from certified Bay Area technicians.",
        "url": "https://fixitbay.net/blog",
        "publisher": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": "+17605435733" },
        "blogPost": allPosts.slice(0, 10).map(p => ({
          "@type": "BlogPosting", "headline": p.title, "description": p.excerpt,
          "datePublished": p.publish_date, "author": { "@type": "Organization", "name": "FixitBay LLC" }
        }))
      }
    },
    {
      id: 'blog-breadcrumb',
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fixitbay.net/blog" }
        ]
      }
    }
  ], [allPosts]);

  useSchemas(blogSchemas);

  return (
    <>
      <SEOMetaTags
        title="Appliance Repair Tips & Guides | FixitBay LLC Blog — Bay Area"
        description="Free appliance repair tips, cost guides, and error code troubleshooting from certified technicians in San Francisco Bay Area. Learn when to repair vs replace, DIY fixes, and maintenance advice."
        canonical="https://fixitbay.net/blog"
      />

      <div>
        {/* 1. HERO */}
        <section data-testid="blog-hero" className="blp-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')" }}>
          <div className="blp-hero-inner">
            <nav className="blp-hero-nav">
              <a href="/">Home</a>
              <span className="blp-nav-sep">&rarr;</span>
              <span className="blp-nav-current">Blog</span>
            </nav>
            <div className="blp-eyebrow">APPLIANCE REPAIR TIPS &amp; ADVICE</div>
            <h1 className="blp-h1">Expert Tips to Keep Your Appliances Running</h1>
            <p className="blp-hero-sub">Free cost guides, error code troubleshooting, maintenance tips, and expert advice from certified appliance repair technicians.</p>
            <div className="blp-search-wrap">
              <input
                type="text"
                placeholder="Search for appliance tips..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="blp-search"
                data-testid="blog-search-input"
              />
              <Search size={18} className="blp-search-icon" />
            </div>
          </div>
        </section>

        {/* 2. FILTER TABS (STICKY) */}
        <section data-testid="blog-filters" className="blp-filters">
          <div className="blp-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blp-tab ${activeCategory === cat ? 'blp-tab--active' : 'blp-tab--inactive'}`}
                onClick={() => setActiveCategory(cat)}
                data-testid={`blog-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat === 'All' ? 'All Tips' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3. FEATURED ARTICLE */}
        {!loading && featuredPost && (() => {
          const img = getBlogImage(featuredPost.slug, featuredPost.categories);
          return (
            <section data-testid="blog-featured" className="blp-featured">
              <div className="blp-featured-inner">
                <div className="blp-eyebrow">FEATURED ARTICLE</div>
                <div className="blp-featured-grid">
                  <div className="blp-featured-img-wrap">
                    <img src={img.src} alt={img.alt} className="blp-featured-img" loading="eager" />
                    <span className="blp-featured-badge">Featured</span>
                  </div>
                  <div className="blp-featured-body">
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                      {(featuredPost.categories || []).map(c => (
                        <span key={c} className="blp-cat-chip">{c}</span>
                      ))}
                    </div>
                    <h2 className="blp-feat-h2">
                      <Link to={`/blog/${featuredPost.slug}`} className="blp-link-plain">{featuredPost.title}</Link>
                    </h2>
                    <p className="blp-body-sm">{featuredPost.excerpt}</p>
                    <div className="blp-meta" style={{ marginBottom: 20 }}>{formatDate(featuredPost.publish_date)}{featuredPost.readTime ? ` \u00B7 ${featuredPost.readTime} read` : ''}</div>
                    <Link to={`/blog/${featuredPost.slug}`} className="blp-feat-btn" data-testid={`blog-card-${featuredPost.slug}`}>
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Search results count */}
        {searchTerm && (
          <div className="blp-max-1000" style={{ padding: '24px 24px 0' }}>
            <p className="blp-body">
              Found {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;<strong>{searchTerm}</strong>&rdquo;
            </p>
          </div>
        )}

        {/* 4. ARTICLES GRID */}
        <section data-testid="blog-grid" className="blp-grid-section">
          <div className="blp-grid-inner">
            <h2 className="blp-section-h2" style={{ color: 'var(--blp-text-dark)', marginBottom: 8, paddingTop: 24 }}>
              Repair Tips &amp; Guides
            </h2>
            <p className="blp-body" style={{ marginBottom: 24 }}>
              Step-by-step troubleshooting and cost breakdowns from licensed Bay Area technicians.
            </p>
            {loading ? (
              <div className="blp-center" style={{ padding: '48px 0' }}>
                <div className="blp-spinner" />
              </div>
            ) : gridPosts.length === 0 && !featuredPost ? (
              <div className="blp-center" style={{ padding: '48px 0' }}>
                <p style={{ fontWeight: 600, fontSize: 16, color: 'var(--blp-text-mid)' }}>No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="blp-grid">
                {gridPosts.map(post => {
                  const img = getBlogImage(post.slug, post.categories);
                  return (
                    <article key={post.slug} className="blp-card" data-testid={`blog-card-${post.slug}`}>
                      <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                        <img src={img.src} alt={img.alt} className="blp-card-img" loading="lazy" />
                      </Link>
                      <div className="blp-card-body">
                        <div className="blp-card-meta">
                          {(post.categories || []).slice(0, 1).map(c => (
                            <span key={c} className="blp-card-chip">{c}</span>
                          ))}
                          {post.readTime && <span className="blp-card-read">{post.readTime}</span>}
                        </div>
                        <h3 className="blp-card-title">
                          <Link to={`/blog/${post.slug}`} className="blp-link-plain">{post.title}</Link>
                        </h3>
                        <p className="blp-card-excerpt">{post.excerpt}</p>
                        <div className="blp-card-footer">
                          <span className="blp-meta">{formatDate(post.publish_date)}</span>
                          <Link to={`/blog/${post.slug}`} className="blp-card-more">Read More &rarr;</Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* 5. WHY TRUST OUR ADVICE */}
        <section data-testid="blog-trust" className="blp-trust">
          <div className="blp-trust-inner">
            <div className="blp-eyebrow">WRITTEN BY EXPERTS</div>
            <h2 className="blp-section-h2" style={{ color: '#fff', marginBottom: 6 }}>Appliance Maintenance Advice</h2>
            <p className="blp-body" style={{ color: 'var(--blp-white-70)', marginBottom: 28 }}>All content is written by licensed technicians with hands-on experience.</p>
            <div className="blp-trust-grid">
              {TRUST_CARDS.map((c, i) => (
                <div key={i} className="blp-trust-card">
                  <span className="blp-trust-num">{c.num}</span>
                  <h3 className="blp-trust-title">{c.title}</h3>
                  <p className="blp-trust-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA STRIP */}
        <section data-testid="blog-cta" className="blp-cta">
          <div className="blp-cta-inner">
            <div className="blp-cta-eyebrow">FREE TIPS &amp; GUIDES</div>
            <h2 className="blp-section-h2" style={{ color: '#fff', marginBottom: 12 }}>Common Appliance Problems — Answered</h2>
            <p className="blp-cta-sub">Our certified technicians are here with fast, reliable service in San Francisco Bay Area.</p>
            <div className="blp-cta-btns">
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="blog-cta-book" className="blp-cta-primary" aria-label="opens in new tab">
                Schedule Repair Now
              </a>
              <a href="tel:+17605435733" data-testid="blog-cta-call" className="blp-cta-secondary">
                Call (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* 7. FOOTER */}
        <UnifiedFooter />

        {/* 8. FLOATING BUTTON */}
        {showFloat && (
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="blp-float hidden md:flex" aria-label="opens in new tab">
            BOOK REPAIR
          </a>
        )}

        {/* 9. MOBILE STICKY BAR */}
        {showFloat && (
          <div className="blp-mobile-bar flex md:hidden">
            <a href="tel:+17605435733" data-testid="mobile-call" className="blp-mobile-call">CALL</a>
            <button onClick={() => window.open('/book?go=1', '_blank')} data-testid="mobile-book" className="blp-mobile-book">
              <span style={{ fontSize: 9, color: 'var(--blp-white-45)', display: 'block', textAlign: 'center', marginBottom: 1 }}>Fast</span>
              BOOK ONLINE
            </button>
            <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" className="blp-mobile-text">TEXT US</a>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogListPage;

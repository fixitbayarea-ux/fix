import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import UnifiedFooter from '../UnifiedFooter';
import { getBlogImage } from '../../data/blogImages';

const API_URL = process.env.REACT_APP_BACKEND_URL;
const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

/* ── hardcoded blog posts ── */
const STATIC_POSTS = [
  { slug: 'refrigerator-not-cooling', title: "Refrigerator Not Cooling? 8 Causes & What to Do", excerpt: 'A warm refrigerator puts your food at risk. 8 common causes ranked from DIY fix to pro repair, with SF Bay Area pricing and a real technician case study.', publish_date: '2026-03-23', categories: ['Refrigerator'], readTime: '8 min' },
  { slug: 'dishwasher-maintenance', title: 'How to Maintain Your Dishwasher for Longer Life', excerpt: 'Simple maintenance tips to prevent clogs, leaks, and odors. Learn how to clean filters, check spray arms, and maintain door seals.', publish_date: '2026-01-18', categories: ['Dishwasher'], readTime: '7 min' },
  { slug: 'when-to-repair-vs-replace', title: 'Repair vs Replace: When to Fix Your Appliance', excerpt: "Not sure if it's worth repairing your old appliance? Use our expert guide based on the 50% rule, age considerations, and repair costs.", publish_date: '2026-01-15', categories: ['Expert Advice'], readTime: '6 min' },
  { slug: 'dryer-taking-too-long', title: 'Why Is My Dryer Taking So Long to Dry?', excerpt: 'Long drying times waste energy and money. Discover the 7 most common causes including clogged vents, heating element issues, and moisture sensor problems.', publish_date: '2026-01-12', categories: ['Dryer'], readTime: '6 min' },
  { slug: 'washer-error-codes', title: 'Common Washer Error Codes & What They Mean', excerpt: 'Decode OE, UE, LE, and other error codes from Samsung, LG, Whirlpool, and GE washers. Learn what each code means and simple troubleshooting steps.', publish_date: '2026-02-10', categories: ['Washer', 'Error Codes'], readTime: '8 min' },
  { slug: 'oven-temperature-calibration', title: 'How to Calibrate Your Oven Temperature', excerpt: 'Is your oven cooking unevenly or burning food? Learn how to test oven temperature accuracy with a thermometer and calibrate for perfect results.', publish_date: '2026-01-08', categories: ['Oven'], readTime: '5 min' },
  { slug: 'ice-maker-troubleshooting', title: 'Ice Maker Not Working? Top 10 Fixes', excerpt: 'No ice, slow ice production, or small/hollow cubes? Troubleshoot water supply, ice maker module, and water filter issues.', publish_date: '2026-01-05', categories: ['Refrigerator'], readTime: '7 min' },
  { slug: 'appliance-lifespan', title: 'How Long Should Your Appliances Last?', excerpt: 'Expected lifespans for refrigerators, washers, dryers, dishwashers, and ovens. Learn when to start planning for replacement.', publish_date: '2026-01-03', categories: ['Expert Advice'], readTime: '6 min' },
  { slug: 'energy-efficient-appliances', title: 'How to Make Your Appliances More Energy Efficient', excerpt: 'Save money on electricity with these proven tips. Small changes can reduce energy bills by 10-25% annually.', publish_date: '2026-01-01', categories: ['Expert Advice', 'Maintenance Tips'], readTime: '7 min' },
  { slug: 'gas-smell-from-stove', title: 'Smell Gas From Your Stove? Do This Immediately', excerpt: "Gas leaks are dangerous. Learn the immediate safety steps to take if you smell gas, when to call emergency services, and how to prevent gas leaks.", publish_date: '2026-03-01', categories: ['Safety'], readTime: '4 min' },
  { slug: 'refrigerator-water-filter', title: 'When to Change Your Refrigerator Water Filter', excerpt: 'Old filters reduce water flow, ice production, and water quality. Learn how often to change filters by brand and signs for replacement.', publish_date: '2026-01-01', categories: ['Refrigerator', 'Maintenance Tips'], readTime: '5 min' },
  { slug: 'dishwasher-not-draining', title: 'Dishwasher Not Draining? 7 Quick Fixes', excerpt: 'Standing water after a cycle? Check these 7 common causes: clogged filter, blocked drain hose, garbage disposal connection, and air gap.', publish_date: '2026-02-20', categories: ['Dishwasher'], readTime: '6 min' },
  { slug: 'dryer-not-heating', title: 'Dryer Not Heating? 7 Causes for Gas & Electric Dryers', excerpt: 'A dryer that tumbles but won\'t heat is one of the most common problems. 7 causes ranked by complexity with SF Bay Area pricing and a real technician case study.', publish_date: '2026-03-23', categories: ['Dryer'], readTime: '8 min' },
  { slug: 'appliance-repair-cost-san-francisco', title: 'Appliance Repair Cost SF 2026 — Price Guide', excerpt: 'How much does appliance repair cost in San Francisco? 3 pricing tables, luxury brand rates, a repair-vs-replace guide, and real numbers from a licensed technician.', publish_date: '2026-03-23', categories: ['Expert Advice', 'San Francisco'], readTime: '10 min' },
  { slug: 'same- or next-day-appliance-repair-bay-area', title: 'Same-Day Appliance Repair in the Bay Area — How It Works', excerpt: 'Need your appliance fixed today? Learn how FixitBay LLC delivers fast repair across SF, Peninsula & Marin. $60 diagnostic, 180-day warranty.', publish_date: '2026-02-15', categories: ['Expert Advice', 'San Francisco'], readTime: '5 min' },
  { slug: 'appliance-repair-marin-county', title: 'Appliance Repair in Marin County — Complete Guide', excerpt: 'Everything you need to know about appliance repair in Marin County. Coverage areas, pricing, common issues in Marin homes, and how to book.', publish_date: '2026-02-01', categories: ['Expert Advice', 'Marin County'], readTime: '6 min' },
];

const TRUST_CARDS = [
  { num: '01', title: 'Certified Technicians', body: 'Written by licensed professionals with years of hands-on repair experience across all major appliance brands.' },
  { num: '02', title: 'Practical Tips', body: 'Real-world solutions you can apply today. DIY fixes, maintenance schedules, and when to call a pro.' },
  { num: '03', title: 'Always Updated', body: 'Fresh content based on the latest appliance technology and common issues we see in Bay Area homes.' },
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
        "name": "FixitBay LLC Appliance Repair Tips & Advice",
        "description": "Expert appliance repair tips, cost guides, and maintenance advice from certified Bay Area technicians.",
        "url": "https://fixitbay.net/blog",
        "publisher": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": "+17605435733" },
        "blogPost": allPosts.slice(0, 10).map(p => ({
          "@type": "BlogPosting", "headline": p.title, "description": p.excerpt,
          "datePublished": p.publish_date, "author": { "@type": "Organization", "name": "FixitBay LLC" }
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
        title="Appliance Repair Tips & Guides | FixitBay LLC Blog \u2014 Bay Area"
        description="Free appliance repair tips, cost guides, and error code troubleshooting from certified technicians in San Francisco Bay Area. Learn when to repair vs replace, DIY fixes, and maintenance advice."
        canonical="https://fixitbay.net/blog"
      />

      <div style={{ fontFamily: F }}>
        <style>{`
          * { box-sizing: border-box; }

          .blog-h1 { font-size: 28px !important; line-height: 1.2 !important; }
          @media (min-width: 768px) { .blog-h1 { font-size: 46px !important; } }

          .blog-section-h2 { font-size: 24px !important; }
          @media (min-width: 768px) { .blog-section-h2 { font-size: 32px !important; } }

          .blog-feat-h2 { font-size: 20px !important; }
          @media (min-width: 768px) { .blog-feat-h2 { font-size: 26px !important; } }

          .blog-card { transition: border-color 0.2s, box-shadow 0.2s; }
          .blog-card:hover { border-color: rgba(255,87,34,0.3) !important; box-shadow: 0 4px 24px rgba(255,87,34,0.10) !important; }
          .blog-card:hover .blog-card-title { color: #FF5722 !important; }
          .blog-card:hover .blog-card-more { color: #FF7043 !important; }
          .blog-card img { height: 180px !important; object-fit: cover; }
          @media (min-width: 768px) { .blog-card img { height: 200px !important; } }

          .trust-card { transition: box-shadow 0.2s; }
          .trust-card:hover { box-shadow: 0 4px 20px rgba(255,87,34,0.12) !important; }

          .feat-btn { transition: background 0.2s; }
          .feat-btn:hover { background: #FF5722 !important; color: #fff !important; }

          .blog-search:focus { border-color: #FF5722 !important; background: rgba(255,255,255,0.15) !important; outline: none; }
          .blog-search::placeholder { color: rgba(255,255,255,0.45); }

          .filter-tab { cursor: pointer; transition: all 0.15s; }
          .filter-tab:hover:not(.ftab-active) { color: #fff !important; background: rgba(255,87,34,0.15) !important; }

          .blog-filter-bar { display: flex; flex-wrap: nowrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 6px; justify-content: flex-start !important; padding-bottom: 4px; }
          .blog-filter-bar::-webkit-scrollbar { display: none; }
          @media (min-width: 768px) { .blog-filter-bar { flex-wrap: wrap !important; overflow-x: visible; justify-content: center !important; } }

          .blog-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 20px; }
          @media (min-width: 640px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (min-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr 1fr !important; } }

          .trust-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 16px; }
          @media (min-width: 640px) { .trust-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (min-width: 900px) { .trust-grid { grid-template-columns: 1fr 1fr 1fr !important; } }

          .blog-featured-grid { grid-template-columns: 1fr !important; }
          @media (min-width: 768px) { .blog-featured-grid { grid-template-columns: 55% 45% !important; } }
          .blog-featured-grid > div:first-child { min-height: 220px !important; }
          @media (min-width: 768px) { .blog-featured-grid > div:first-child { min-height: 320px !important; } }

          @keyframes spin { to { transform: rotate(360deg); } }

          @media (max-width: 767px) { body { padding-bottom: 72px; } }
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="blog-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 460, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '72px 20px 48px', color: '#fff' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Blog</span>
            </nav>
            <div style={EYE}>APPLIANCE REPAIR TIPS &amp; ADVICE</div>
            <h1 className="blog-h1" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.15, color: '#fff', maxWidth: 700, margin: '0 auto 12px' }}>
              Expert Tips to Keep Your Appliances Running
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto 24px' }}>
              Free cost guides, error code troubleshooting, maintenance tips, and expert advice from certified appliance repair technicians.
            </p>
            <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search for appliance tips..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="blog-search"
                data-testid="blog-search-input"
                style={{ width: '100%', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 4, padding: '13px 48px 13px 18px', color: '#fff', fontFamily: F, fontWeight: 400, fontSize: 14, outline: 'none', boxSizing: 'border-box', transition: 'all 0.2s' }}
              />
              <Search size={18} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#FF5722', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ━━━ 2. FILTER TABS (STICKY) ━━━ */}
        <section data-testid="blog-filters" style={{ background: '#0D1B2A', position: 'sticky', top: 64, zIndex: 100, padding: '16px 24px', borderBottom: '1px solid rgba(255,87,34,0.2)' }}>
          <div className="blog-filter-bar" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {categories.map(cat => {
              const label = cat === 'All' ? 'All Tips' : cat;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`filter-tab${isActive ? ' ftab-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  data-testid={`blog-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    fontFamily: F, fontWeight: isActive ? 700 : 500, fontSize: 12,
                    padding: '8px 16px', borderRadius: 4, border: 'none',
                    background: isActive ? '#FF5722' : 'transparent',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
                    cursor: 'pointer', whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ━━━ 3. FEATURED ARTICLE ━━━ */}
        {!loading && featuredPost && (() => {
          const img = getBlogImage(featuredPost.slug, featuredPost.categories);
          return (
            <section data-testid="blog-featured" style={{ background: '#F8F5F0', padding: '40px 20px 24px' }}>
              <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <div style={EYE}>FEATURED ARTICLE</div>
                <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', background: '#fff', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,87,34,0.15)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }} className="blog-featured-grid">
                  <div style={{ position: 'relative', minHeight: 320 }}>
                    <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="eager" />
                    <span style={{ position: 'absolute', top: 16, left: 16, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 11, padding: '4px 12px', borderRadius: 3, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Featured</span>
                  </div>
                  <div style={{ padding: 'clamp(20px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                      {(featuredPost.categories || []).map(c => (
                        <span key={c} style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 600, fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>{c}</span>
                      ))}
                    </div>
                    <h2 className="blog-feat-h2" style={{ fontFamily: F, fontWeight: 800, fontSize: 26, color: '#1A1A1A', lineHeight: 1.3, marginBottom: 12 }}>
                      <Link to={`/blog/${featuredPost.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{featuredPost.title}</Link>
                    </h2>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7, marginBottom: 16 }}>{featuredPost.excerpt}</p>
                    <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,87,34,0.7)', marginBottom: 20 }}>{formatDate(featuredPost.publish_date)}{featuredPost.readTime ? ` \u00B7 ${featuredPost.readTime} read` : ''}</div>
                    <Link to={`/blog/${featuredPost.slug}`} className="feat-btn" data-testid={`blog-card-${featuredPost.slug}`} style={{ display: 'inline-block', background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', letterSpacing: '0.05em', transition: 'background 0.2s', alignSelf: 'flex-start' }}>
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* ━━━ Search results count ━━━ */}
        {searchTerm && (
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 24px 0' }}>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568' }}>
              Found {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;<strong>{searchTerm}</strong>&rdquo;
            </p>
          </div>
        )}

        {/* ━━━ 4. ARTICLES GRID ━━━ */}
        <section data-testid="blog-grid" style={{ background: '#F8F5F0', padding: '12px 20px 56px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 28, color: '#1A1A1A', marginBottom: 8, paddingTop: 24 }}>
              Repair Tips &amp; Guides
            </h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', marginBottom: 24 }}>
              Step-by-step troubleshooting and cost breakdowns from licensed Bay Area technicians.
            </p>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 40, height: 40, border: '3px solid rgba(255,87,34,0.2)', borderTopColor: '#FF5722', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
              </div>
            ) : gridPosts.length === 0 && !featuredPost ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: 16, color: '#4A5568' }}>No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="blog-grid">
                {gridPosts.map((post, idx) => {
                  const img = getBlogImage(post.slug, post.categories);
                  return (
                    <article
                      key={post.slug}
                      className="blog-card"
                      data-testid={`blog-card-${post.slug}`}
                      style={{ background: '#fff', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}
                    >
                      <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                        <img src={img.src} alt={img.alt} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                      </Link>
                      <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
                          {(post.categories || []).slice(0, 1).map(c => (
                            <span key={c} style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 3 }}>{c}</span>
                          ))}
                          {post.readTime && <span style={{ fontFamily: F, fontWeight: 400, fontSize: 11, color: '#4A5568' }}>{post.readTime}</span>}
                        </div>
                        <h3 className="blog-card-title" style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#1A1A1A', lineHeight: 1.4, marginBottom: 8, transition: 'color 0.2s' }}>
                          <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</Link>
                        </h3>
                        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', lineHeight: 1.6, marginBottom: 'auto', paddingBottom: 16 }}>{post.excerpt}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 14, marginTop: 'auto' }}>
                          <span style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,87,34,0.7)' }}>{formatDate(post.publish_date)}</span>
                          <Link to={`/blog/${post.slug}`} className="blog-card-more" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none', transition: 'color 0.2s' }}>Read More &rarr;</Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ━━━ 5. WHY TRUST OUR ADVICE ━━━ */}
        <section data-testid="blog-trust" style={{ background: '#0D1B2A', padding: '48px 20px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={EYE}>WRITTEN BY EXPERTS</div>
            <h2 className="blog-section-h2" style={{ fontFamily: F, fontWeight: 800, color: '#fff', marginBottom: 6 }}>Appliance Maintenance Advice</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>All content is written by licensed technicians with hands-on experience.</p>
            <div className="trust-grid">
              {TRUST_CARDS.map((c, i) => (
                <div key={i} className="trust-card" style={{ background: '#1A2F45', borderRadius: 4, padding: '28px 24px', borderLeft: '3px solid #FF5722', borderTop: '1px solid rgba(255,87,34,0.15)', borderRight: '1px solid rgba(255,87,34,0.15)', borderBottom: '1px solid rgba(255,87,34,0.15)', transition: 'box-shadow 0.2s' }}>
                  <span style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: 'rgba(255,87,34,0.15)', display: 'block', marginBottom: 8 }}>{c.num}</span>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 6. CTA STRIP ━━━ */}
        <section data-testid="blog-cta" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '48px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>FREE TIPS &amp; GUIDES</div>
            <h2 className="blog-section-h2" style={{ fontFamily: F, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Common Appliance Problems — Answered</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginBottom: 28 }}>Our certified technicians are here with fast, reliable service in San Francisco Bay Area.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="blog-cta-book" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', border: 'none' }} aria-label="opens in new tab">
                Schedule Repair Now
              </a>
              <a href="tel:+17605435733" data-testid="blog-cta-call" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.15)' }}>
                Call (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ 7. FOOTER ━━━ */}
        <UnifiedFooter />

        {/* ━━━ 8. FLOATING BUTTON ━━━ */}
        {showFloat && (
          <a href="/book?go=1" target="_blank" rel="noopener noreferrer" data-testid="float-btn" className="hidden md:flex" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, alignItems: 'center', gap: 8, background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none' }} aria-label="opens in new tab">
            BOOK REPAIR
          </a>
        )}

        {/* ━━━ 9. MOBILE STICKY BAR ━━━ */}
        {showFloat && (
          <div className="flex md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, background: '#1A2F45', borderTop: '2px solid #FF5722', padding: '10px 12px', gap: 8, justifyContent: 'center' }}>
            <a href="tel:+17605435733" data-testid="mobile-call" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none' }}>CALL</a>
            <button onClick={() => window.open('/book?go=1', '_blank')} data-testid="mobile-book" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0D1B2A', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '8px 0', borderRadius: 4, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer' }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', display: 'block', textAlign: 'center', marginBottom: 1 }}>Fast</span>
              BOOK ONLINE
            </button>
            <a href="sms:7605435733?body=Hello%20FixitBay!" data-testid="mobile-text" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', padding: '12px 0', borderRadius: 4, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.15)' }}>TEXT US</a>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogListPage;

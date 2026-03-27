import React, { useState, useEffect } from 'react';
import SEOMetaTags from '../SEOMetaTags';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Tag, ArrowLeft, Phone } from 'lucide-react';
import UnifiedFooter from '../UnifiedFooter';
import { getBlogImage } from '../../data/blogImages';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API_URL}/api/cms/blog-posts/${slug}`)
      .then(r => r.json())
      .then(d => { if (d.success) setPost(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!loading && !post) {
      navigate('/blog', { replace: true });
    }
  }, [loading, post, navigate]);

  useEffect(() => {
    if (post) {
      document.title = post.meta_title || post.title;
    }
    return () => {
      document.title = 'Appliance Repair San Francisco & Bay Area | FixitBay LLC';
    };
  }, [post]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: '64px' }}>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (!post) return null;

  const img = getBlogImage(slug, post.categories);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.meta_description,
    "image": img.src,
    "author": { "@type": "Organization", "name": "FixitBay LLC", "@id": "https://fixitbay.net/#organization" },
    "publisher": { "@type": "Organization", "name": "FixitBay LLC", "logo": { "@type": "ImageObject", "url": "https://fixitbay.net/logo.png" } },
    "datePublished": post.publish_date || post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "mainEntityOfPage": `https://fixitbay.net/blog/${post.slug}`
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '64px', background: '#F7FAFC' }}>
      <SEOMetaTags title={post.title + ' | FixitBay LLC Blog'} description={post.meta_description || post.excerpt} canonical={`https://fixitbay.net/blog/${post.slug}`} />

      {/* ─── Back button + Breadcrumb bar ─── */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-gray-100"
            style={{ color: '#1A3B5D' }}
            data-testid="blog-back-btn"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
          <nav className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>&rsaquo;</span>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span>&rsaquo;</span>
            <span className="text-gray-700 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero image ─── */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-64 md:h-80 object-cover"
            data-testid="blog-hero-image"
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {(post.categories || []).map(c => (
              <span key={c} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                <Tag className="w-3 h-3" />{c}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#1A3B5D' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.publish_date || 'Recently'}</span>
            <span>By {post.author || 'FixitBay LLC Team'}</span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          style={{ color: '#2B3A4A' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
          data-testid="blog-content"
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10 pt-6 border-t">
            {post.tags.map(t => (
              <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{t}</span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Need Appliance Repair?</h2>
          <p className="text-gray-600 mb-6">Fast scheduling available across the Bay Area. $60 diagnostic applied to repair.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/book?go=1"
              className="px-6 py-3 font-bold rounded-lg text-white" style={{ backgroundColor: '#C0362C' }}>
              Schedule Repair Now
            </a>
            <a href="tel:+17605435733" className="flex items-center gap-2 px-6 py-3 font-bold rounded-lg border-2" style={{ borderColor: '#1A3B5D', color: '#1A3B5D' }}>
              <Phone className="w-4 h-4" /> (760) 543-5733
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline" data-testid="blog-back-bottom">
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>
      </article>

      <UnifiedFooter />
    </div>
  );
};

export default BlogPostPage;

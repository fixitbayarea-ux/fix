import React, { useEffect } from 'react';
import SEOMetaTags from '../SEOMetaTags';

const POPULAR_PAGES = [
  { title: 'Book a Repair', sub: 'Schedule same-day or next-day', href: '/book' },
  { title: 'Homepage', sub: 'FixitBay appliance repair', href: '/' },
  { title: 'All Services', sub: 'Residential & commercial repair', href: '/services' },
  { title: 'Refrigerator Repair', sub: 'Not cooling, ice maker, leaks', href: '/refrigerator-repair' },
  { title: 'Washer Repair', sub: 'Won\u2019t drain, error codes, vibration', href: '/washer-repair' },
  { title: 'Dryer Repair', sub: 'Not heating, long cycles', href: '/dryer-repair' },
  { title: 'Service Areas', sub: 'SF, Peninsula, Marin County', href: '/service-areas' },
  { title: 'All Brands', sub: 'Whirlpool, LG, Sub-Zero and more', href: '/brands' },
  { title: 'Blog & Guides', sub: 'DIY tips and repair guides', href: '/blog' },
];

export default function NotFound404() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOMetaTags
        title="Page Not Found | FixitBay LLC"
        description="Page not found. Browse FixitBay appliance repair services, book a repair, or call (760) 543-5733."
        noindex={true}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        :root{--navy:#0D1B2A;--navy-mid:#1A2F45;--accent:#FF5722;--cream:#F8F5F0;--accent-hover:#FF7043}
        .nf-page *{font-family:'Montserrat',sans-serif;box-sizing:border-box}
        .nf-page a{text-decoration:none}
        .nf-eyebrow{font-weight:700;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:0.22em}

        .nf-hero{background:var(--navy);min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;padding:80px 24px 48px;position:relative;overflow:hidden}
        .nf-ghost{font-weight:800;font-size:180px;color:rgba(255,87,34,0.08);line-height:1;user-select:none;margin-bottom:-40px;position:relative;z-index:1}
        .nf-content{position:relative;z-index:2}
        .nf-icon{font-size:48px;margin-bottom:16px;display:block;color:var(--accent);font-weight:800}
        .nf-hero h1{font-weight:800;font-size:36px;color:#fff;margin-bottom:16px;line-height:1.2}
        .nf-hero-sub{color:rgba(255,255,255,0.65);font-size:16px;max-width:480px;margin:0 auto 36px;line-height:1.6}
        .nf-hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .nf-btn-primary{background:var(--accent);color:#fff;font-weight:700;padding:13px 28px;border-radius:4px;font-size:14px;transition:background 0.2s}
        .nf-btn-primary:hover{background:var(--accent-hover)}
        .nf-btn-secondary{border:1px solid rgba(255,255,255,0.3);color:#fff;background:transparent;font-weight:700;padding:13px 28px;border-radius:4px;font-size:14px;transition:border-color 0.2s}
        .nf-btn-secondary:hover{border-color:rgba(255,255,255,0.6)}
        .nf-phone-label{color:rgba(255,255,255,0.4);font-size:12px;margin-top:20px;margin-bottom:6px}
        .nf-phone{color:#fff;font-weight:700;font-size:18px;transition:color 0.2s}
        .nf-phone:hover{color:var(--accent)}

        .nf-popular{background:var(--cream);padding:64px 24px}
        .nf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:960px;margin:0 auto}
        @media(max-width:900px){.nf-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.nf-grid{grid-template-columns:1fr}}
        .nf-card{background:#fff;border-radius:4px;padding:20px 24px;border:1px solid rgba(255,87,34,0.15);border-left:3px solid var(--accent);display:flex;gap:12px;align-items:center;transition:box-shadow 0.2s}
        .nf-card:hover{box-shadow:0 4px 16px rgba(0,0,0,0.07)}
        .nf-card-icon{font-size:22px;flex-shrink:0;width:32px;text-align:center;color:var(--accent);font-weight:800}
        .nf-card-title{font-weight:700;font-size:14px;color:#1A1A1A}
        .nf-card-sub{font-weight:400;font-size:12px;color:#4A5568}
        .nf-card-arrow{color:var(--accent);font-weight:700;margin-left:auto;flex-shrink:0;font-size:16px}

        .nf-footer{background:var(--navy);border-top:1px solid rgba(255,87,34,0.2);padding:24px;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,0.5)}
        .nf-footer a{color:rgba(255,255,255,0.5);text-decoration:none}
        .nf-footer a:hover{color:rgba(255,255,255,0.8)}

        @media(max-width:767px){
          .nf-ghost{font-size:100px;margin-bottom:-24px}
          .nf-hero h1{font-size:24px}
        }
      `}</style>

      <div className="nf-page">

        {/* ─── 1. HERO ─── */}
        <section className="nf-hero" data-testid="nf-hero">
          <div className="nf-ghost">404</div>
          <div className="nf-content">
            <div className="nf-eyebrow" style={{ marginBottom: 12 }}>PAGE NOT FOUND</div>
            <h1 data-testid="nf-h1">Looks Like Something<br />Needs Fixing</h1>
            <p className="nf-hero-sub">The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. But your broken appliance is our problem &mdash; let&rsquo;s fix that.</p>
            <div className="nf-hero-ctas">
              <a href="/book" className="nf-btn-primary" data-testid="nf-book-btn">Book a Repair</a>
              <a href="/" className="nf-btn-secondary" data-testid="nf-home-btn">Go to Homepage</a>
            </div>
            <div className="nf-phone-label">Or call us directly:</div>
            <a href="tel:7605435733" className="nf-phone" data-testid="nf-phone">(760) 543-5733</a>
          </div>
        </section>

        {/* ─── 2. POPULAR PAGES ─── */}
        <section className="nf-popular" data-testid="nf-popular">
          <div className="nf-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>MAYBE YOU WERE LOOKING FOR</div>
          <div style={{ fontWeight: 800, fontSize: 28, color: '#1A1A1A', textAlign: 'center', marginBottom: 40 }}>Popular Pages</div>
          <div className="nf-grid">
            {POPULAR_PAGES.map((p, i) => (
              <a key={i} href={p.href} className="nf-card" data-testid={`nf-card-${i}`}>
                <div className="nf-card-icon">{p.title.charAt(0)}</div>
                <div>
                  <div className="nf-card-title">{p.title}</div>
                  <div className="nf-card-sub">{p.sub}</div>
                </div>
                <div className="nf-card-arrow">&rarr;</div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── 3. FOOTER ─── */}
        <footer className="nf-footer" data-testid="nf-footer">
          <a href="/" style={{ fontWeight: 700 }}>FixitBay</a>
          <a href="tel:7605435733">(760) 543-5733</a>
          <span>&copy; 2026 FixitBay LLC</span>
        </footer>
      </div>
    </>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };

const REVIEWS = [
  { id: 'g-1', author: 'jennifer mushnick', date: '5 days ago', rating: 5, text: "Andrei was great\u2014diagnosed issues with our oven, was communicative, and professional. His assessment of the problem with the igniter seems accurate and we will see if this resolves the problem. He was informed and thorough explaining the issue. Not sure about pricing because this was arranged through our property management company. So far, great experience!", service: 'Stove, cooktop & oven repair' },
  { id: 'g-2', author: 'Ms Tee', date: '1 week ago', rating: 5, text: "I would recommend FixitBay LLC. It\u2019s a professional service. I called about a dryer that wasn\u2019t working. Andrei was punctual and came the day after I called him. He took his time and looked all over the unit. He explained what had to be done and I agreed to the service. The parts arrived a few days earlier than expected and he let me know. He came the following day and again skillfully and patiently took his time to complete the job. Appreciate the service.", service: 'Dryer repair', price: '$300\u2013350' },
  { id: 'g-3', author: 'Karen Dzienkowski', date: '1 week ago', rating: 5, text: "Andrei was great! Fixed it the first visit and came back to install a new thermostat the next day because he didn\u2019t have that part day 1. Reasonable price to fix a 20 yo fridge too! Highly recommend", service: 'Refrigerator repair' },
  { id: 'g-4', author: 'Gayle Rabbitt', date: '3 weeks ago', rating: 5, text: "Andrei was excellent. He explained and checked everything. He quickly realized the leak was from the utility sink next to the washer and shut off the hoses so leak stopped. I\u2019d definitely contact FixitBay LLC if have a problem with any appliance. Again Andrei was wonderful again. He came next day and fixed problem I caused for a reasonable price. I highly recommend him and FixitBay LLC!", service: 'Washing machine repair', price: '$50\u2013100' },
  { id: 'g-5', author: 'Emily Chen', date: '3 weeks ago', rating: 5, text: "One of the smoothest repair experiences I\u2019ve had. Our dryer was leaving black marks on our clothes so we needed to clean out its inside from lint. Regular dryer maintenance. Super easy to book online and continue communicating over text with Andrei. Andrei gave an initial diagnosis and quote based on photos I sent, showed up on time, and was in/out within 2 hours. He gave clear tips on what to do next time this came up in a few years. Andrei was also careful to protect and keep our place clean while he was doing his work. Takes credit card. Prompt invoices. Very responsive. Would highly recommend!", service: 'Dryer vent cleaning, Dryer repair', price: '$350\u2013400' },
  { id: 'g-6', author: 'Michael Kagan', date: '3 weeks ago', rating: 5, text: "Andrei from FixItBay is great. He\u2019s knowledgeable, professional, fast, and answered any questions I had about my fridge and dishwasher. He\u2019s saved me twice already and I\u2019ll definitely call him in the future if I need help!", service: 'Dishwasher repair, Refrigerator/freezer repair' },
];

const GOOGLE_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';

const GoogleIcon = () => <span dangerouslySetInnerHTML={{ __html: GOOGLE_SVG }} />;

const PENINSULA = ['Daly City', 'South San Francisco', 'San Bruno', 'Pacifica', 'Colma', 'Brisbane', 'Millbrae', 'Montara'];
const MARIN = ['Mill Valley', 'San Rafael', 'Sausalito', 'Belvedere Tiburon', 'Corte Madera', 'San Quentin', 'Larkspur', 'Greenbrae', 'Ross', 'Fairfax', 'San Anselmo', 'Novato'];

const citySlug = (name) => `/${name.toLowerCase().replace(/\s+/g, '-')}-appliance-repair`;

const AboutPage = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (isAutoplayPaused) return;
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => {
        const next = prev + 2;
        return next >= REVIEWS.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplayPaused]);

  const handleNav = (index) => {
    setCurrentReviewIndex(index);
    setIsAutoplayPaused(true);
    setTimeout(() => setIsAutoplayPaused(false), 10000);
  };

  const schemas = useMemo(() => [
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://fixitbay.net/about" }] } },
    { id: 'person-schema', data: { "@context": "https://schema.org", "@type": "Person", "name": "Andrei Suprunov", "jobTitle": "Lead Appliance Repair Technician", "worksFor": { "@type": "LocalBusiness", "name": "FixitBay LLC" }, "description": "Licensed CA appliance repair technician (License #51001) with 3+ years of hands-on appliance repair experience in the Bay Area. Former cargo ship mechanical engineer.", "hasCredential": "BHGS License #51001", "knowsAbout": ["appliance repair", "refrigerator repair", "washer repair", "dryer repair", "dishwasher repair", "oven repair"] } },
    { id: 'video-schema', data: { "@context": "https://schema.org", "@type": "VideoObject", "name": "FixitBay Appliance Repair San Francisco — How It Works", "description": "Licensed appliance repair in San Francisco & Bay Area. Fast scheduling, $60 diagnostic, 180-day warranty. Call (760) 543-5733.", "thumbnailUrl": "https://img.youtube.com/vi/WBEc8Lz2saA/hqdefault.jpg", "uploadDate": "2024-01-01", "contentUrl": "https://www.youtube.com/watch?v=WBEc8Lz2saA", "embedUrl": "https://www.youtube.com/embed/WBEc8Lz2saA", "publisher": { "@type": "Organization", "name": "FixitBay LLC", "url": "https://fixitbay.net" } } }
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="About FixitBay LLC | Licensed Appliance Repair SF Bay Area"
        description="Meet Andrei, FixitBay LLC's licensed appliance repair technician (CA License #51001). Licensed technician, 3+ years experience, 4.9 Google rating. Serving San Francisco and Bay Area."
        canonical="https://fixitbay.net/about"
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          * { box-sizing: border-box; }
          .about-h1 { /* handled by global index.css */ }
          .about-h2 { font-size: 22px !important; }
          @media (min-width: 768px) { .about-h1 { font-size: 42px !important; } .about-h2 { font-size: 32px !important; } }
          .hero-badges { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 10px 16px; justify-items: start; max-width: 360px; margin: 0 auto; }
          @media (min-width: 640px) { .hero-badges { display: flex !important; flex-wrap: wrap; justify-content: center; max-width: none; gap: 16px 20px; } }
          .meet-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          @media (min-width: 768px) { .meet-grid { grid-template-columns: 1fr 1fr !important; gap: 48px !important; } }
          .stats-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .video-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          @media (min-width: 640px) { .video-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; } }
          .why-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          @media (min-width: 640px) { .why-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; } }
          .words-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          @media (min-width: 768px) { .words-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; } }
          .review-desktop { display: none !important; }
          .review-mobile { display: block !important; }
          @media (min-width: 768px) { .review-desktop { display: block !important; } .review-mobile { display: none !important; } }
          .nav-arrow:hover { border-color: #FF5722 !important; background: rgba(255,87,34,0.05) !important; }
          .nav-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
          .toc-link { transition: all 0.15s; }
          .toc-link:hover { color: #FF7043 !important; padding-left: 4px; }
          .city-pill:hover { color: #FF5722 !important; }
          .video-thumbnail-card { position: relative; text-decoration: none; color: inherit; display: block; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,87,34,0.2); transition: box-shadow 0.2s, transform 0.2s; }
          .video-thumbnail-card:hover { box-shadow: 0 4px 16px rgba(255,87,34,0.15); transform: translateY(-2px); }
          .video-thumb-wrapper { position: relative; }
          .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
          .video-caption { padding: 10px 12px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.85); font-family: 'Montserrat', sans-serif; margin: 0; }
          @media (max-width: 767px) { body { padding-bottom: 72px; } }
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="about-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.94),rgba(13,27,42,0.94)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', minHeight: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '72px 20px 48px', color: '#fff' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</span>
            </nav>
            <div style={EYE}>ABOUT FIXITBAY LLC</div>
            <h1 className="about-h1" data-testid="about-title" style={{ fontFamily: F, fontWeight: 800, lineHeight: 1.2, color: '#fff', maxWidth: 700, margin: '0 auto 16px' }}>
              Licensed Appliance Repair You Can Actually Trust
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.78)', maxWidth: 600, margin: '0 auto 24px' }}>
              Your trusted local appliance repair partner in San Francisco &amp; Bay Area. Family-owned, licensed, and committed to honest service.
            </p>
            <div className="hero-badges">
              {[
                'Licensed CA Technician #51001',
                '4.9 Google Reviews',
                '180-Day Warranty',
                '$60 Diagnostic',
              ].map((badge, i) => (
                <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13 }}>{'\u2713'}</span>
                  <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 2. MEET ANDREI ━━━ */}
        <section data-testid="meet-andrei" style={{ background: '#F8F5F0', padding: '48px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={EYE}>MEET OUR LEAD TECHNICIAN</div>
            <h2 className="about-h2" style={{ fontFamily: F, fontWeight: 800, color: '#1A1A1A' }}>Meet Andrei — Your Bay Area Appliance Technician</h2>
          </div>
          <div className="meet-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            {/* Left: Photos */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <img src="/images/team/andrei-lead-tech.webp" alt="Andrei - Lead Appliance Repair Technician" width={747} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <img src="/images/team/andrei-working.webp" alt="Andrei working on appliance repair" width={585} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center', marginTop: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5722' }} />
                <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#4A5568' }}>Andrei — Lead Technician &middot; SF Bay Area</span>
              </div>
            </div>

            {/* Right: Stats + Text + Quote */}
            <div>
              <div className="stats-grid" style={{ marginBottom: 24 }}>
                {[
                  { val: '3+', label: 'Years Experience' },
                  { val: '500+', label: 'Happy Customers' },
                  { val: '4.9\u2605', label: 'Google Rating' },
                  { val: '#51001', label: 'CA License' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid rgba(255,87,34,0.2)', borderTop: '2px solid #FF5722', borderRadius: 4, padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#FF5722' }}>{s.val}</div>
                    <div style={{ fontFamily: F, fontWeight: 500, fontSize: 11, color: '#4A5568', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', borderRadius: 4, padding: '20px 16px', marginBottom: 16, border: '1px solid rgba(255,87,34,0.15)', borderLeft: '3px solid #FF5722' }}>
                <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#1A1A1A', marginBottom: 16 }}>
                  About Andrei
                </div>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 }}>
                  Andrei is a trained mechanical engineer who worked as a boatswain on cargo ships — where he learned to fix complex systems while the floor was literally moving under his feet. After moving to San Francisco, he saw how many people needed honest, hands-on appliance repair.
                </p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 }}>
                  His first client was his own landlord upstairs. He fixed his fridge, and that's when he knew this was the right path. Today, Andrei brings that same precision and calm to every repair — from Victorian flats to high-rise condos across the Bay Area.
                </p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8 }}>
                  Andrei's commitment to quality service and customer satisfaction has made him a trusted name in the San Francisco Bay Area. He brings precision, professionalism, and a personal touch to every repair job.
                </p>
              </div>

              <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '16px 20px', borderLeft: '3px solid #FF5722' }}>
                <span style={{ color: '#FF5722', fontSize: 28, lineHeight: 0.5, display: 'block', marginBottom: 8 }}>{'\u275D'}</span>
                <p style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  We're not a large corporate chain — we're your neighbors, and we treat every home and every appliance with the same care we'd give our own.
                </p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 10 }}>— Andrei, FixitBay LLC</p>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 3. SEE HOW OUR REPAIR PROCESS WORKS ━━━ */}
        <section data-testid="videos-section" style={{ background: '#0D1B2A', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>SEE THE WORK</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff', marginBottom: 8 }}>See How Our Repair Process Works</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>Watch our licensed technicians diagnose and fix appliances across the Bay Area — from initial inspection to final testing.</p>
          </div>
          <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {[
              { id: 'WBEc8Lz2saA', alt: 'Watch how FixitBay LLC repairs appliances in San Francisco', caption: 'Professional Repair Service' },
              { id: 'ottiV_KfcUI', alt: 'FixitBay LLC expert technician at work in Bay Area', caption: 'Expert Technician at Work' },
            ].map((v, i) => (
              <a key={i} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="video-thumbnail-card" aria-label={`${v.caption} (opens in new tab)`}>
                <div className="video-thumb-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.alt}
                    width={450}
                    height={180}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px 8px 0 0', display: 'block' }}
                    loading="lazy"
                  />
                  <div className="play-overlay">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.6)" />
                      <polygon points="10,8 16,12 10,16" fill="white" />
                    </svg>
                  </div>
                </div>
                <p className="video-caption">{v.caption}</p>
              </a>
            ))}
          </div>
          <p data-testid="video-description" style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.55)', textAlign: 'center', maxWidth: 700, margin: '24px auto 0', lineHeight: 1.7 }}>
            Every FixitBay LLC repair starts with a thorough $60 diagnostic — we identify the root cause, explain the issue, and provide a written estimate before any work begins. All repairs include our 180-day warranty on parts and labor.
          </p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="phone-cta" style={{ display: 'inline-block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Your Repair Today</a>
          </div>
        </section>

        {/* ━━━ 4. OUR STORY ━━━ */}
        <section data-testid="our-story" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={EYE}>OUR STORY</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 32 }}>Why FixitBay LLC Exists</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 16 }}>
              FixitBay LLC is a local, family-owned appliance repair business proudly serving San Francisco and the greater Bay Area. We understand how frustrating it can be when your refrigerator stops cooling, your washer won't drain, or your oven won't heat up. That's why we're committed to providing fast, reliable, and honest appliance repair services.
            </p>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 16 }}>
              Founded on the principles of transparency and quality service, we believe in doing things right the first time. Our lead technician, Andrei, brings years of experience and a genuine passion for helping families get their homes running smoothly again.
            </p>
            <div style={{ background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', padding: '12px 16px', borderRadius: 4, margin: '8px 0' }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 15, color: '#1A1A1A', lineHeight: 1.8 }}>
                We're not a large corporate chain — we're your neighbors, and we treat every home and every appliance with the same care we'd give our own.
              </p>
            </div>
          </div>
        </section>

        {/* ━━━ 5. WHY CHOOSE US ━━━ */}
        <section data-testid="why-choose-us" id="why" style={{ background: '#fff', padding: '0 24px 72px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={EYE}>WHY FIXITBAY</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A' }}>Why Homeowners in SF Choose FixitBay LLC</h2>
          </div>
          <div className="why-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { num: '01', title: 'Licensed & Insured', body: 'Fully licensed CA Technician (License #51001). Insured for your protection. Professional service you can trust.' },
              { num: '02', title: 'Honest, Transparent Pricing', body: '$60 diagnostic fee fully applied to your repair cost \u2014 you never pay it twice. Upfront written estimate before any work begins. No surprises.' },
              { num: '03', title: '180-Day Warranty', body: 'All repairs backed by a 180-day warranty on parts and labor. If the same issue returns within 180 days, we come back at no charge.' },
              { num: '04', title: 'Truly Local Service', body: 'Serving San Francisco, Marin County, and Peninsula communities. We\u2019re your neighbors \u2014 not a call center franchise.' },
            ].map((card, i) => (
              <div key={i} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderTop: '3px solid #FF5722', borderRadius: 4, padding: 28 }}>
                <div style={{ fontFamily: F, fontWeight: 800, fontSize: 42, color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: 8 }}>{card.num}</div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#1A1A1A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 6. ANDREI IN HIS OWN WORDS ━━━ */}
        <section data-testid="own-words" style={{ background: '#0D1B2A', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={EYE}>ANDREI IN HIS OWN WORDS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#fff' }}>How Andrei Works</h2>
          </div>
          <div className="words-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            {[
              { q: 'How do you work with new customers?', a: "First I listen carefully to the issue \u2014 every detail helps. I schedule a visit to diagnose the problem ($60 diagnostic). If you move forward, that fee goes toward the total cost. I explain what's going on, suggest options, and provide a clear estimate. No pressure, no hidden fees \u2014 just honest service and a 180-day warranty on both labor and parts." },
              { q: "A recent project you're proud of?", a: "A $10,000 Sub-Zero fridge for an SF homeowner \u2014 it kept failing right before family meals, and they were stressed. Over two days I diagnosed the issue, replaced the compressor, and got it running like new. When the cool air kicked in, they were so relieved. I was proud to save them from buying a new fridge." },
              { q: 'What advice for hiring a repair technician?', a: "Look for someone with real experience and a track record of reliability. Make sure they're clear about pricing and explain things in a way that makes sense. A good tech won't rush \u2014 they care about doing it right. And don't underestimate reviews or word of mouth \u2014 they tell you a lot." },
            ].map((card, i) => (
              <div key={i} style={{ background: '#1A2F45', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 4, padding: 28 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>{card.q}</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>{card.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 7. SERVICE AREA ━━━ */}
        <section data-testid="service-area" style={{ background: '#F8F5F0', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={EYE}>WHERE WE SERVE</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Our Service Area</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568', marginBottom: 40 }}>We provide same/next-day appliance repair service in the following communities:</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', padding: '32px 40px', maxWidth: 860, margin: '0 auto' }}>
            {/* SF */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', textAlign: 'center', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid rgba(255,87,34,0.2)' }}>SAN FRANCISCO</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                <Link to="/san-francisco-appliance-repair" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 3, padding: '5px 14px', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#FF5722', textDecoration: 'none', whiteSpace: 'nowrap' }}>San Francisco</Link>
              </div>
            </div>
            {/* Peninsula */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', textAlign: 'center', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid rgba(255,87,34,0.2)' }}>PENINSULA</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {PENINSULA.map(c => (
                  <Link key={c} to={citySlug(c)} className="city-pill" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 3, padding: '5px 14px', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s' }}>{c}</Link>
                ))}
              </div>
            </div>
            {/* Marin */}
            <div style={{ marginBottom: 8 }}>
              <p style={{ fontFamily: F, fontWeight: 800, fontSize: 13, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.15em', textAlign: 'center', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid rgba(255,87,34,0.2)' }}>NORTH BAY / MARIN COUNTY</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {MARIN.map(c => (
                  <Link key={c} to={citySlug(c)} className="city-pill" style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.2)', borderRadius: 3, padding: '5px 14px', fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s' }}>{c}</Link>
                ))}
              </div>
            </div>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', fontStyle: 'italic', textAlign: 'center', marginTop: 16 }}>Not sure if we service your area? Give us a call — we're always happy to help!</p>
          </div>
        </section>

        {/* ━━━ 8. REVIEWS ━━━ */}
        <section data-testid="reviews-section" style={{ background: '#fff', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={EYE}>REVIEWS</div>
            <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#1A1A1A', marginBottom: 8 }}>Real Reviews from Bay Area Customers</h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, color: '#4A5568' }}>Real reviews from satisfied customers across San Francisco and the Bay Area</p>
          </div>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            {/* Desktop: 2 cards */}
            <div className="review-desktop" style={{ display: 'none' }} onMouseEnter={() => setIsAutoplayPaused(true)} onMouseLeave={() => setIsAutoplayPaused(false)}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                {REVIEWS.slice(currentReviewIndex, currentReviewIndex + 2).map(review => (
                  <div key={review.id} style={{ background: '#F8F5F0', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', borderTop: '3px solid #FF5722', padding: 24, minHeight: 320 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><GoogleIcon /><span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A' }}>Google</span></div>
                      <span style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 10, padding: '3px 8px', borderRadius: 3, textTransform: 'uppercase' }}>Verified</span>
                    </div>
                    <div style={{ color: '#FF5722', fontSize: 16, marginBottom: 12 }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7, marginBottom: 16, minHeight: 100, display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>"{review.text}"</p>
                    {review.service && <span style={{ display: 'inline-block', background: 'rgba(13,27,42,0.06)', borderRadius: 3, padding: '3px 8px', fontFamily: F, fontWeight: 500, fontSize: 11, color: '#4A5568', marginBottom: 12 }}>{review.service}</span>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <div>
                        <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{review.author}</p>
                        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{review.date}</p>
                      </div>
                      <a href="https://share.google/Q48c6OXAIB7u60fNv" target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#FF5722', textDecoration: 'none' }} aria-label="opens in new tab">Read on Google &rarr;</a>
                    </div>
                  </div>
                ))}
              </div>
              {/* Nav */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <button className="nav-arrow" onClick={() => handleNav(Math.max(0, currentReviewIndex - 2))} disabled={currentReviewIndex === 0} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #FF5722', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div style={{ display: 'flex', gap: 6 }}>
                  {Array.from({ length: Math.ceil(REVIEWS.length / 2) }).map((_, i) => (
                    <button key={i} onClick={() => handleNav(i * 2)} style={{ width: 8, height: 8, borderRadius: '50%', background: currentReviewIndex === i * 2 ? '#FF5722' : 'rgba(0,0,0,0.15)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} />
                  ))}
                </div>
                <button className="nav-arrow" onClick={() => handleNav(Math.min(REVIEWS.length - 2, currentReviewIndex + 2))} disabled={currentReviewIndex >= REVIEWS.length - 2} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #FF5722', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
            {/* Mobile: single card */}
            <div className="review-mobile" style={{ display: 'none' }}>
              {REVIEWS[currentReviewIndex] && (
                <div style={{ background: '#F8F5F0', borderRadius: 4, border: '1px solid rgba(255,87,34,0.15)', borderTop: '3px solid #FF5722', padding: 24, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><GoogleIcon /><span style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: '#1A1A1A' }}>Google</span></div>
                    <span style={{ background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 10, padding: '3px 8px', borderRadius: 3, textTransform: 'uppercase' }}>Verified</span>
                  </div>
                  <div style={{ color: '#FF5722', fontSize: 16, marginBottom: 12 }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7, marginBottom: 16 }}>"{REVIEWS[currentReviewIndex].text}"</p>
                  <div style={{ paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A' }}>{REVIEWS[currentReviewIndex].author}</p>
                    <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{REVIEWS[currentReviewIndex].date}</p>
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                {REVIEWS.map((_, i) => (
                  <button key={i} onClick={() => setCurrentReviewIndex(i)} style={{ width: 8, height: 8, borderRadius: '50%', background: currentReviewIndex === i ? '#FF5722' : 'rgba(0,0,0,0.15)', border: 'none', cursor: 'pointer' }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 9. FINAL CTA ━━━ */}
        <section data-testid="final-cta" style={{ background: '#0D1B2A', padding: '72px 24px', textAlign: 'center' }}>
          <div style={EYE}>GET STARTED</div>
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: '#fff', marginBottom: 12 }}>Ready to Work With Us?</h2>
          <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Experience honest, professional appliance repair service today.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7605435733" className="phone-cta" style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}>Call (760) 543-5733</a>
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="book-cta" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }} aria-label="opens in new tab">Book Online</a>
          </div>
        </section>

        {/* ━━━ 10. FOOTER ━━━ */}
        <footer data-testid="about-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>

      </div>
    </>
  );
};

export default AboutPage;

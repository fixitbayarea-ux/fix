import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import CustomerPortalButton from './CustomerPortalButton';
import './CustomerPortalButton.css';

// New round logo - optimized WebP sizes
import navbarLogo56 from '../assets/navbar-logo-new-56.webp';
import navbarLogo112 from '../assets/navbar-logo-new-112.webp';
import navbarLogo256 from '../assets/navbar-logo-new-256.webp';

// Lazy load dropdown panels and skeleton
const AreasDropdownPanel = lazy(() => import('./navbar/AreasDropdownPanel'));
const BrandsDropdownPanel = lazy(() => import('./navbar/BrandsDropdownPanel'));
const ServicesDropdownPanel = lazy(() => import('./navbar/ServicesDropdownPanel'));
const DropdownSkeleton = lazy(() => import('./navbar/DropdownSkeleton'));

// Constants
const PHONE_DISPLAY = '(760) 543-5733';
const PHONE_TEL = '+17605435733';

// Lazy load dropdown data (loaded only when dropdown opens)
let navbarDataModule = null;
const loadNavbarData = async () => {
  if (!navbarDataModule) {
    navbarDataModule = await import('../data/navbarData');
  }
  return navbarDataModule;
};

const SiteNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMaintenanceOpen, setMobileMaintenanceOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  
  // State for lazy-loaded data
  const [dropdownData, setDropdownData] = useState(null);
  const [prefetched, setPrefetched] = useState(false);
  
  const servicesDropdownRef = useRef(null);
  const brandsDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const citiesDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Smooth scroll to top when clicking logo
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      // If already on homepage, scroll to top smoothly
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on another page, navigate normally (React Router will handle it)
  };

  // Prefetch dropdown data and components after initial render (idle time)
  useEffect(() => {
    if (prefetched) return;
    
    const prefetchDropdowns = () => {
      // Prefetch data
      loadNavbarData().then((data) => {
        setDropdownData(data);
        setPrefetched(true);
        
      });
      
      // Prefetch components (triggers webpack to load chunks)
      import('./navbar/AreasDropdownPanel');
      import('./navbar/BrandsDropdownPanel');
      import('./navbar/ServicesDropdownPanel');
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(prefetchDropdowns);
    } else {
      setTimeout(prefetchDropdowns, 2000);
    }
  }, [prefetched]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (citiesDropdownRef.current && !citiesDropdownRef.current.contains(event.target)) {
        setCitiesDropdownOpen(false); // Areas dropdown
      }
      if (brandsDropdownRef.current && !brandsDropdownRef.current.contains(event.target)) {
        setBrandsDropdownOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileMaintenanceOpen(false);
    setMobileBrandsOpen(false);
    setMobileMoreOpen(false);
    setMobileAreasOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);

  // Scroll to anchor with offset — handles lazy-loaded sections with retry
  const scrollToAnchor = (anchorId) => {
    // Close mobile menu first
    setMobileMenuOpen(false);
    
    const doScroll = (retries = 0) => {
      const element = document.getElementById(anchorId);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (retries < 10) {
        // Retry — section may be lazy-loaded and not yet in DOM
        setTimeout(() => doScroll(retries + 1), 300);
      }
    };

    if (location.pathname === '/') {
      setTimeout(() => doScroll(), 150);
    } else {
      navigate('/');
      setTimeout(() => doScroll(), 500);
    }
  };

  const trackNavClick = (label, category = 'nav') => {
    if (window.gtag) window.gtag('event', 'nav_click', { label, category });
  };

  // Get data from lazy-loaded module or use empty arrays as fallback
  const servicesItems = dropdownData?.servicesItems || [];
  const maintenanceItems = dropdownData?.maintenanceItems || [];
  const citiesItems = dropdownData?.citiesItems || [];
  const areasGrouped = dropdownData?.areasGrouped || [];
  const brandsItems = dropdownData?.brandsItems || [];
  const topBrandLinks = dropdownData?.topBrandLinks || {};

  // Scroll-dependent glass density
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="main-nav sticky z-[100]" 
      style={{ 
        top: '0',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(13,27,42,0.97), rgba(13,27,42,0.97)), url('/background_new2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid rgba(255,87,34,0.25)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.15)' : 'none',
        transition: 'box-shadow 0.4s ease',
      }}
      role="navigation" 
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center" style={{ minHeight: '48px' }}>
          
          {/* LEFT: Logo + FixitBay LLC + Appliance Repair & Maintenance */}
          <a 
            href="/" 
            className="flex items-center shrink-0"
            aria-label="FixitBay LLC Home"
            style={{
              gap: 12,
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 6,
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
            }}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
              trackNavClick('logo');
            }}
          >
            <img 
              src={navbarLogo56}
              srcSet={`${navbarLogo56} 56w, ${navbarLogo112} 112w, ${navbarLogo256} 256w`}
              sizes="56px"
              alt="FixitBay Appliance Repair"
              width="160"
              height="56"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="navbar-logo-img"
              style={{ 
                display: 'block',
                objectFit: 'contain',
                borderRadius: 4,
              }}
            />
            {/* Mobile: tagline */}
            <div className="flex sm:hidden flex-col leading-tight">
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14, color: '#FFFFFF' }}>FixitBay LLC</span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>Appliance Repair</span>
            </div>
            {/* Desktop: tagline */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, color: '#FFFFFF' }}>FixitBay LLC</span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.50)' }}>Appliance Repair & Maintenance</span>
            </div>
          </a>

          {/* CENTER: Desktop Menu - better spacing */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6 flex-1 justify-center">
            {/* 1. Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button type="button"
                className="nav-link flex items-center gap-1"
                onClick={() => { const next = !servicesDropdownOpen; setServicesDropdownOpen(next); if (next) { setCitiesDropdownOpen(false); setBrandsDropdownOpen(false); setMoreDropdownOpen(false); } }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setServicesDropdownOpen(false);
                  if (e.key === 'Enter') { const next = !servicesDropdownOpen; setServicesDropdownOpen(next); if (next) { setCitiesDropdownOpen(false); setBrandsDropdownOpen(false); setMoreDropdownOpen(false); } }
                }}
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-dropdown"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && dropdownData && (
                <Suspense fallback={<DropdownSkeleton columns={2} rows={6} />}>
                  <ServicesDropdownPanel 
                    servicesItems={servicesItems}
                    maintenanceItems={maintenanceItems}
                    onClose={() => setServicesDropdownOpen(false)}
                    onTrackClick={trackNavClick}
                  />
                </Suspense>
              )}
            </div>

            {/* 2. Areas Dropdown (service areas with cities) */}
            <div className="relative" ref={citiesDropdownRef}>
              <button type="button"
                className="nav-link flex items-center gap-1 whitespace-nowrap"
                onClick={() => { const next = !citiesDropdownOpen; setCitiesDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setBrandsDropdownOpen(false); setMoreDropdownOpen(false); } }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setCitiesDropdownOpen(false);
                  if (e.key === 'Enter') { const next = !citiesDropdownOpen; setCitiesDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setBrandsDropdownOpen(false); setMoreDropdownOpen(false); } }
                }}
                aria-expanded={citiesDropdownOpen}
                aria-controls="areas-dropdown"
              >
                Areas <ChevronDown className="w-4 h-4" />
              </button>

              {citiesDropdownOpen && dropdownData && (
                <Suspense fallback={<DropdownSkeleton columns={4} rows={6} />}>
                  <AreasDropdownPanel 
                    areasGrouped={areasGrouped}
                    onClose={() => setCitiesDropdownOpen(false)}
                    onTrackClick={trackNavClick}
                    scrollToAnchor={scrollToAnchor}
                  />
                </Suspense>
              )}
            </div>

            {/* SF direct link — top service area */}
            <a
              href="/san-francisco-appliance-repair"
              className="nav-link whitespace-nowrap hidden lg:block"
              style={{ fontWeight: isActive('/san-francisco-appliance-repair') ? 700 : 500 }}
              onClick={() => trackNavClick('sf_direct')}
              aria-current={isActive('/san-francisco-appliance-repair') ? 'page' : undefined}
              data-testid="nav-sf-link"
            >
              San Francisco
            </a>

            {/* 3. Brands Dropdown */}
            <div className="relative" ref={brandsDropdownRef}>
              <button type="button"
                className="nav-link flex items-center gap-1 whitespace-nowrap"
                onClick={() => { const next = !brandsDropdownOpen; setBrandsDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setCitiesDropdownOpen(false); setMoreDropdownOpen(false); } }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setBrandsDropdownOpen(false);
                  if (e.key === 'Enter') { const next = !brandsDropdownOpen; setBrandsDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setCitiesDropdownOpen(false); setMoreDropdownOpen(false); } }
                }}
                aria-expanded={brandsDropdownOpen}
                aria-controls="brands-dropdown"
              >
                Brands <ChevronDown className="w-4 h-4" />
              </button>

              {brandsDropdownOpen && dropdownData && (
                <Suspense fallback={<DropdownSkeleton columns={3} rows={6} />}>
                  <BrandsDropdownPanel 
                    brandsItems={brandsItems}
                    topBrandLinks={topBrandLinks}
                    onClose={() => setBrandsDropdownOpen(false)}
                    onTrackClick={trackNavClick}
                  />
                </Suspense>
              )}
            </div>

            {/* 4. Reviews */}
            <button type="button"
              className="nav-link whitespace-nowrap"
              onClick={() => {
                scrollToAnchor('reviews');
                trackNavClick('reviews');
              }}
            >
              Reviews
            </button>

            {/* 5. More Dropdown (Maintenance, Tips, About, Contact, Portal) */}
            <div className="relative" ref={moreDropdownRef}>
              <button type="button"
                className="nav-link flex items-center gap-1 whitespace-nowrap"
                onClick={() => { const next = !moreDropdownOpen; setMoreDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setCitiesDropdownOpen(false); setBrandsDropdownOpen(false); } }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setMoreDropdownOpen(false);
                  if (e.key === 'Enter') { const next = !moreDropdownOpen; setMoreDropdownOpen(next); if (next) { setServicesDropdownOpen(false); setCitiesDropdownOpen(false); setBrandsDropdownOpen(false); } }
                }}
                aria-expanded={moreDropdownOpen}
                aria-controls="more-dropdown"
              >
                More <ChevronDown className="w-4 h-4" />
              </button>

              {moreDropdownOpen && (
                <div 
                  id="more-dropdown"
                  className="absolute right-0 mt-2 w-56 rounded py-2 z-50"
                  style={{ 
                    top: '100%',
                    background: '#1A2F45',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {/* Other items */}
                  <a
                    href="/blog"
                    className="block px-3 py-2 text-sm rounded transition-colors hover:bg-white/10"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                    onClick={() => {
                      trackNavClick('tips', 'more');
                      setMoreDropdownOpen(false);
                    }}
                  >
                    Blog &amp; Tips
                  </a>
                  <a
                    href="/about"
                    className="block px-3 py-2 text-sm rounded transition-colors hover:bg-white/10"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                    onClick={() => {
                      trackNavClick('about', 'more');
                      setMoreDropdownOpen(false);
                    }}
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="block px-3 py-2 text-sm rounded transition-colors hover:bg-white/10"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                    onClick={() => {
                      trackNavClick('contact', 'more');
                      setMoreDropdownOpen(false);
                    }}
                  >
                    Contact
                  </a>
                  
                  <div className="border-t border-white/10 my-1"></div>
                  
                  {/* Portal */}
                  <div className="px-2 py-1">
                    <CustomerPortalButton />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Phone + Book Online */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 whitespace-nowrap min-h-[44px]"
              style={{ 
                color: '#FF5722',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                opacity: 1,
              }}
              aria-label={`Call FixitBay LLC at ${PHONE_DISPLAY}`}
              onClick={() => trackNavClick('phone_cta')}
            >
              <Phone className="w-4 h-4" style={{ color: '#FF5722' }} />
              <span style={{ color: '#FF5722' }}>{PHONE_DISPLAY}</span>
            </a>
            <a
              href="/book?go=1"
              data-testid="nav-book-online-btn"
              className="nav-book-btn"
              style={{ 
                background: '#FF5722',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '4px',
                padding: '10px 20px',
                minHeight: '44px',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => trackNavClick('book_online_cta')}
            >
              Book Online
            </a>
          </div>

          {/* Mobile: Book + Phone + Hamburger */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            {/* Mobile BOOK Button */}
            <a
              href="/book?go=1"
              data-testid="navbar-mobile-book"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 14px',
                background: '#FF5722',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                textDecoration: 'none',
                minHeight: '44px',
                whiteSpace: 'nowrap',
              }}
              onClick={() => trackNavClick('mobile_topbar_book')}
            >
              BOOK
            </a>

            {/* Mobile Phone Icon-only Button */}
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="navbar-mobile-phone"
              className="navbar-mobile-phone-link"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: '44px', minWidth: '44px',
                color: '#FF5722',
                textDecoration: 'none',
              }}
              aria-label={`Call FixitBay LLC at ${PHONE_DISPLAY}`}
              onClick={() => trackNavClick('phone_mobile')}
            >
              <Phone className="w-5 h-5" style={{ color: '#FF5722' }} />
            </a>

            {/* Mobile Menu Button */}
            <button type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white/10 min-h-[44px] flex items-center"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — rendered via portal to avoid backdrop-filter containing block */}
        {mobileMenuOpen && createPortal(
          <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.50)',
              zIndex: 9998,
            }}
          />
          <div 
            id="mobile-menu"
            data-testid="mobile-menu-panel"
            className="md:hidden"
            style={{
              position: 'fixed',
              top: 'var(--navbar-height, 60px)',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#0D1B2A',
              zIndex: 9999,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >

            {/* ─────────────── QUICK LINKS ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 0, paddingTop: 0 }}>
              <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.30)', textTransform:'uppercase', padding:'4px 16px 0' }}>Quick Links</div>
              <a href="/" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_home'); }}>
                Home
              </a>
              <a href="/san-francisco-appliance-repair" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_sf'); }}>
                San Francisco
              </a>
              <a href="/reviews" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_reviews'); }}>
                Reviews
              </a>
            </div>

            {/* ─────────────── SERVICES ACCORDION ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.30)', textTransform:'uppercase', padding:'4px 16px 0' }}>Services</div>
              <button type="button"
                className={`mob-acc-trigger w-full${mobileServicesOpen ? ' open' : ''}`}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 16px', minHeight:'44px', background:'transparent', border:'none', cursor:'pointer', width:'100%' }}
                onClick={() => { setMobileServicesOpen(!mobileServicesOpen); setMobileMaintenanceOpen(false); setMobileBrandsOpen(false); setMobileAreasOpen(false); setMobileMoreOpen(false); }}
                aria-expanded={mobileServicesOpen}
              >
                <span style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(255,255,255,0.85)', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:14 }}>
                  Repair Services
                </span>
                <ChevronDown className={`mob-acc-arrow w-4 h-4${mobileServicesOpen ? ' open' : ''}`} style={{ color:'#FF5722' }} />
              </button>
              {mobileServicesOpen && <div style={{ padding:'2px 0 4px', background:'rgba(255,255,255,0.02)' }}>
                  {[
                    { name:'Refrigerator Repair', path:'/refrigerator-repair' },
                    { name:'Washer Repair', path:'/washer-repair' },
                    { name:'Dryer Repair', path:'/dryer-repair' },
                    { name:'Dishwasher Repair', path:'/dishwasher-repair' },
                    { name:'Oven Repair', path:'/oven-repair' },
                    { name:'Range Repair', path:'/range-repair' },
                    { name:'Stove Repair', path:'/stove-repair' },
                    { name:'Cooktop Repair', path:'/cooktop-repair' },
                    { name:'Ice Maker Repair', path:'/ice-maker-repair' },
                    { name:'Freezer Repair', path:'/freezer-repair' },
                    { name:'Wine Cooler Repair', path:'/wine-cooler-repair' },
                    { name:'Garbage Disposal', path:'/garbage-disposal-repair' },
                  ].map(item => (
                    <a key={item.path} href={item.path} className="mob-sub-item" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px 6px 28px', color:'rgba(255,255,255,0.65)', fontFamily:'Montserrat,sans-serif', fontWeight:500, fontSize:13, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick(item.name, 'services'); }}>
                      {item.name}
                    </a>
                  ))}
                  <a href="/services" style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 16px 6px 28px', color:'#FF5722', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:12, textDecoration:'none', letterSpacing:'0.05em' }} onClick={() => { setMobileMenuOpen(false); }}>
                    &#8594; All Services
                  </a>
                </div>}
            </div>

            {/* ─────────────── MAINTENANCE ACCORDION ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button type="button"
                className={`mob-acc-trigger w-full${mobileMaintenanceOpen ? ' open' : ''}`}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 16px', minHeight:'44px', background:'transparent', border:'none', cursor:'pointer', width:'100%' }}
                onClick={() => { setMobileMaintenanceOpen(!mobileMaintenanceOpen); setMobileServicesOpen(false); setMobileBrandsOpen(false); setMobileAreasOpen(false); setMobileMoreOpen(false); }}
                aria-expanded={mobileMaintenanceOpen}
              >
                <span style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(255,255,255,0.85)', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:14 }}>
                  Maintenance Services
                </span>
                <ChevronDown className={`mob-acc-arrow w-4 h-4${mobileMaintenanceOpen ? ' open' : ''}`} style={{ color:'#FF5722' }} />
              </button>
              {mobileMaintenanceOpen && <div style={{ padding:'2px 0 4px', background:'rgba(255,255,255,0.02)' }}>
                  {[
                    { name:'Refrigerator Maintenance', path:'/maintenance/refrigerator' },
                    { name:'Washer Maintenance', path:'/maintenance/washer' },
                    { name:'Dryer Maintenance', path:'/maintenance/dryer' },
                    { name:'Dishwasher Maintenance', path:'/maintenance/dishwasher' },
                    { name:'Oven & Range Maintenance', path:'/maintenance/oven-range' },
                    { name:'Cooktop Maintenance', path:'/maintenance/cooktop' },
                    { name:'Wine Cooler Maintenance', path:'/maintenance/wine-cooler' },
                  ].map(item => (
                    <a key={item.path} href={item.path} className="mob-sub-item" style={{ display:'flex', alignItems:'center', padding:'6px 16px 6px 28px', color:'rgba(255,255,255,0.65)', fontFamily:'Montserrat,sans-serif', fontWeight:500, fontSize:13, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick(item.name, 'maintenance'); }}>
                      {item.name}
                    </a>
                  ))}
                  <a href="/maintenance" style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 16px 6px 28px', color:'#FF5722', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:12, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); }}>
                    &#8594; All Maintenance
                  </a>
                </div>}
            </div>

            {/* ─────────────── BRANDS ACCORDION ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button type="button"
                className={`mob-acc-trigger w-full${mobileBrandsOpen ? ' open' : ''}`}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 16px', minHeight:'44px', background:'transparent', border:'none', cursor:'pointer', width:'100%' }}
                onClick={() => { setMobileBrandsOpen(!mobileBrandsOpen); setMobileServicesOpen(false); setMobileMaintenanceOpen(false); setMobileAreasOpen(false); setMobileMoreOpen(false); }}
                aria-expanded={mobileBrandsOpen}
              >
                <span style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(255,255,255,0.85)', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:14 }}>
                  Brands We Repair
                </span>
                <ChevronDown className={`mob-acc-arrow w-4 h-4${mobileBrandsOpen ? ' open' : ''}`} style={{ color:'#FF5722' }} />
              </button>
              {mobileBrandsOpen && <div style={{ padding:'4px 16px 6px 28px', background:'rgba(255,255,255,0.02)' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 8px' }}>
                    {[
                      { name:'Whirlpool', path:'/whirlpool-appliance-repair' },
                      { name:'LG', path:'/lg-appliance-repair' },
                      { name:'Samsung', path:'/samsung-appliance-repair' },
                      { name:'GE', path:'/ge-appliance-repair' },
                      { name:'Bosch', path:'/bosch-appliance-repair' },
                      { name:'KitchenAid', path:'/kitchenaid-appliance-repair' },
                      { name:'Maytag', path:'/maytag-appliance-repair' },
                      { name:'Frigidaire', path:'/frigidaire-appliance-repair' },
                      { name:'Sub-Zero', path:'/sub-zero-appliance-repair' },
                      { name:'Viking', path:'/viking-appliance-repair' },
                      { name:'Thermador', path:'/thermador-appliance-repair' },
                      { name:'Wolf', path:'/wolf-appliance-repair' },
                      { name:'Miele', path:'/miele-appliance-repair' },
                      { name:'Kenmore', path:'/kenmore-appliance-repair' },
                    ].map(brand => (
                      <a key={brand.path} href={brand.path} className="mob-sub-item" style={{ display:'block', padding:'5px 6px', color:'rgba(255,255,255,0.65)', fontFamily:'Montserrat,sans-serif', fontWeight:500, fontSize:13, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick(brand.name, 'brands'); }}>
                        {brand.name}
                      </a>
                    ))}
                  </div>
                  <a href="/brands" style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 0 2px', color:'#FF5722', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:12, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); }}>
                    &#8594; All Brands
                  </a>
                </div>}
            </div>

            {/* ─────────────── SERVICE AREAS ACCORDION ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button type="button"
                className={`mob-acc-trigger w-full${mobileAreasOpen ? ' open' : ''}`}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 16px', minHeight:'44px', background:'transparent', border:'none', cursor:'pointer', width:'100%' }}
                onClick={() => { setMobileAreasOpen(!mobileAreasOpen); setMobileServicesOpen(false); setMobileMaintenanceOpen(false); setMobileBrandsOpen(false); setMobileMoreOpen(false); }}
                aria-expanded={mobileAreasOpen}
              >
                <span style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(255,255,255,0.85)', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:14 }}>
                  Service Areas
                </span>
                <ChevronDown className={`mob-acc-arrow w-4 h-4${mobileAreasOpen ? ' open' : ''}`} style={{ color:'#FF5722' }} />
              </button>
              {mobileAreasOpen && <div style={{ padding:'2px 0 4px', background:'rgba(255,255,255,0.02)' }}>
                  {areasGrouped.map((group) => (
                    <React.Fragment key={group.region}>
                      <p className="area-group-label" style={{ padding:'6px 16px 1px 28px', fontFamily:'Montserrat,sans-serif', fontSize:10, fontWeight:700, letterSpacing:'0.10em', color:'rgba(255,255,255,0.30)', textTransform:'uppercase', marginTop:8, marginBottom:0 }}>{group.region}</p>
                      {group.cities.map(item => (
                        <a key={item.path} href={item.path} className="mob-sub-item" style={{ display:'block', padding:'5px 16px 5px 28px', color:'rgba(255,255,255,0.65)', fontFamily:'Montserrat,sans-serif', fontWeight:500, fontSize:13, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); }}>
                          {item.name}
                        </a>
                      ))}
                    </React.Fragment>
                  ))}
                  <a href="/service-areas" style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 16px 6px 28px', color:'#FF5722', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:12, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); }}>
                    &#8594; All Service Areas
                  </a>
                </div>}
            </div>

            {/* ─────────────── COMPANY LINKS ─────────────── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 0, paddingTop: 0 }}>
              <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.30)', textTransform:'uppercase', padding:'4px 16px 0' }}>Company</div>
              <a href="/blog" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_blog'); }}>
                Blog &amp; Tips
              </a>
              <a href="/about" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_about'); }}>
                About Us
              </a>
              <a href="/contact" style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 16px', minHeight:'44px', color:'rgba(255,255,255,0.80)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:14, textDecoration:'none' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_contact'); }}>
                Contact
              </a>
            </div>

            {/* ─────────────── BOTTOM CTA ─────────────── */}
            <div style={{ padding:'12px 16px', display:'flex', flexDirection:'column', gap:'8px' }}>
              <a href="/book?go=1" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'#FF5722', color:'#FFFFFF', padding:'12px 24px', borderRadius:'4px', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'14px', textDecoration:'none', textAlign:'center' }} onClick={() => { setMobileMenuOpen(false); trackNavClick('mobile_menu_book'); }}>
                Book Repair Online
              </a>
              <a href="tel:+17605435733" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'transparent', color:'#FF5722', padding:'10px 24px', borderRadius:'4px', border:'2px solid #FF5722', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'14px', textDecoration:'none' }} onClick={() => trackNavClick('mobile_menu_call')}>
                (760) 543-5733
              </a>
              <a href="sms:+17605435733?body=Hi%20FixitBay LLC!%20I%20need%20appliance%20repair." style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'transparent', color:'rgba(255,255,255,0.65)', padding:'10px 24px', minHeight:'44px', borderRadius:'4px', border:'1px solid rgba(255,255,255,0.15)', fontFamily:'Montserrat,sans-serif', fontWeight:600, fontSize:'13px', textDecoration:'none' }}>
                Text Us
              </a>
            </div>

          </div>
          </>,
          document.body
        )}
      <style>{`
        :root { --navbar-height: 72px; }
        .navbar-logo-img { width: 56px; height: 56px; }
        .mob-accordion-body {
          overflow: hidden;
          max-height: 0;
          padding: 0;
          margin: 0;
          transition: max-height 0.3s ease, opacity 0.2s ease;
          opacity: 0;
        }
        .mob-accordion-body.open {
          max-height: 1200px;
          opacity: 1;
        }
        .mob-acc-arrow {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .mob-acc-arrow.open {
          transform: rotate(180deg);
        }
        .mob-acc-trigger {
          position: relative;
          transition: background 0.2s ease;
        }
        .mob-acc-trigger.open {
          background: rgba(255, 87, 34, 0.07) !important;
          border-left: 3px solid #FF5722;
          padding-left: 13px !important;
        }
        .mob-sub-item {
          transition: background 0.15s ease, color 0.15s ease;
        }
        .mob-sub-item:hover {
          background: rgba(255,255,255,0.07) !important;
          color: #FF5722 !important;
        }
        @media (max-width: 767px) {
          :root { --navbar-height: 60px; }
          .main-nav { height: 60px !important; padding: 0 16px !important; }
          .main-nav > div { height: 60px !important; }
          .navbar-logo-img { width: 48px; height: 48px; }
          body { padding-bottom: 56px; }
          body.overflow-hidden { overflow: hidden !important; }
        }
      `}</style>
      </div>
    </nav>
  );
};

export default SiteNavbar;

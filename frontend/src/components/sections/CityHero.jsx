import React from 'react';
import logoWebP from '../../assets/logo.webp';
import logo512 from '../../assets/logo-512.webp';
import logo512Avif from '../../assets/logo-512.avif';
import logo768 from '../../assets/logo-768.webp';
import logo768Avif from '../../assets/logo-768.avif';
import googleIcon from '../../assets/icons/google.svg';
import thumbtackIcon from '../../assets/icons/thumbtack.svg';
import nextdoorIcon from '../../assets/icons/nextdoor.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
// Reuse all HomeHero CSS — same classes, same design

const BOOKING_URL = '/book?go=1';

const socialButtons = [
  {
    icon: googleIcon,
    aria: 'Read reviews on Google Business Profile',
    href: 'https://share.google/Q48c6OXAIB7u60fNv'
  },
  {
    icon: thumbtackIcon,
    aria: 'Read reviews on Thumbtack',
    href: 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644'
  },
  {
    icon: nextdoorIcon,
    aria: 'Find us on Nextdoor',
    href: 'https://nextdoor.com/page/fixitbay-san-francisco-ca/'
  },
  {
    icon: facebookIcon,
    aria: 'Follow us on Facebook',
    href: 'https://www.facebook.com/fixitbay'
  },
];

/**
 * CityHero — same layout as HomeHero but with a city-specific background image.
 * Props:
 *   bgImage  {string}  — imported WebP image for the city background
 *   cityName {string}  — city name shown in the subtle H1 overlay (e.g. "Daly City")
 */
const CityHero = ({ bgImage, cityName }) => {
  return (
    <>
      <section className="heroRoot">
      {/* City background image */}
      <img
        className="heroBackground"
        src={bgImage}
        alt=""
        aria-hidden="true"
        width="1080"
        height="1080"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay for contrast — same as HomeHero */}
      <div className="heroOverlay" aria-hidden="true" />

      {/* H1 overlay — "Appliance Repair in {City}" */}
      <div
        className="absolute top-0 left-0 right-0 z-20 pt-20 pb-2"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h1
            className="text-center text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-snug tracking-normal"
            style={{ color: '#6B7280', opacity: 0.9 }}
          >
            Appliance Repair in {cityName}
          </h1>
        </div>
      </div>

      {/* Content — logo + CTA (identical to HomeHero) */}
      <div className="heroContent">
        {/* Logo: Responsive AVIF + WebP */}
        <picture>
          <source media="(max-width: 480px)" srcSet={logo512Avif} type="image/avif" />
          <source media="(max-width: 768px)" srcSet={logo768Avif} type="image/avif" />
          <source srcSet={logo768Avif} type="image/avif" />
          <source media="(max-width: 480px)" srcSet={logo512} type="image/webp" />
          <source media="(max-width: 768px)" srcSet={logo768} type="image/webp" />
          <source srcSet={logo768} type="image/webp" />
          <img
            className="heroLogo"
            src={logoWebP}
            alt="FixitBay Appliance Repair Logo"
            aria-hidden="true"
            width="920"
            height="920"
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        {/* CTA row */}
        <div className="ctaRow">
          <div className="ctaCluster">
            {/* Social icons */}
            <div className="socialCluster">
              {socialButtons.map((item) => (
                <a
                  key={item.aria}
                  href={item.href}
                  target="_blank" rel="noopener noreferrer"
                  rel="noopener noreferrer"
                  aria-label={item.aria}
                  className="socialBtn"
                >
                  <img
                    src={item.icon}
                    alt={item.aria}
                    aria-hidden="true"
                    width="52"
                    height="52"
                    loading="lazy"
                  />
                <span className="sr-only"> (opens in new tab)</span></a>
              ))}
            </div>

            {/* Main CTA */}
            <a
              href={BOOKING_URL}
              target="_blank" rel="noopener noreferrer"
              rel="noopener noreferrer"
              className="heroCta"
              aria-label={`Schedule appliance repair in ${cityName}`}
            >
              Schedule Repair Now
            <span className="sr-only"> (opens in new tab)</span></a>
          </div>

          <div className="ctaSubtext">Same/Next-Day Service in {cityName}</div>
        </div>
      </div>
    </section>

      {/* Back + Breadcrumbs — compact light bar, same line */}
      <div style={{background: 'linear-gradient(135deg, #E8F4FA 0%, #F0F8FC 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Back button */}
          <button
            onClick={() => { if (window.history.length > 1) window.history.back(); else window.location.href = '/'; }}
            className="group flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg border-2 transition-all duration-300 hover:scale-105"
            style={{ color: '#1A3B5D', borderColor: '#C0E8F9' }}
            data-testid="city-back-button"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </div>
            <span className="font-bold text-sm md:text-base">Back</span>
          </button>

          {/* Breadcrumbs — same line, matching text size */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base">
            <a href="/" className="text-gray-500 hover:text-gray-800 transition-colors font-medium">Home</a>
            <span className="text-gray-400">›</span>
            <a href="/service-areas" className="text-gray-500 hover:text-gray-800 transition-colors font-medium">Service Areas</a>
            <span className="text-gray-400">›</span>
            <span className="font-bold" style={{ color: '#1A3B5D' }}>{cityName}</span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default CityHero;

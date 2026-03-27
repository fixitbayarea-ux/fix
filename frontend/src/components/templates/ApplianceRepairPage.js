import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import RelatedServices from '../RelatedServices';
import SEOMetaTags from '../SEOMetaTags';

import {
  Phone,
  Star,
  CheckCircle,
  Wrench,
  Clock,
  MapPin,
  MessageCircle,
  Award,
  Users,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

import BackButton from '../BackButton';
import FloatingButtons from '../FloatingButtons';

const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url
  }))
});

const COMMON_BRANDS = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch',
  'Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','JennAir','Electrolux','Fisher & Paykel'
];

// Map brands that have dedicated landing pages to their URLs
const brandLinkMap = {
  Whirlpool: '/whirlpool-appliance-repair',
  LG: '/lg-appliance-repair',
  Samsung: '/samsung-appliance-repair',
  GE: '/ge-appliance-repair',
  Bosch: '/bosch-appliance-repair',
  KitchenAid: '/kitchenaid-appliance-repair',
  Maytag: '/maytag-appliance-repair',
  Frigidaire: '/frigidaire-appliance-repair',
  Kenmore: '/kenmore-appliance-repair',
  Thermador: '/thermador-appliance-repair',
  Viking: '/viking-appliance-repair',
  Miele: '/miele-appliance-repair',
  'Sub-Zero': '/sub-zero-appliance-repair',
  Wolf: '/wolf-appliance-repair'
};

const ApplianceRepairPage = ({
  appliance,
  pageTitle,
  metaDescription,
  commonProblems = [],
  faqData = [],
  breadcrumbCategoryName = 'Services',
  breadcrumbCategoryHref = '/#services'
}) => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    // no-op placeholder for any on-mount logic
  }, []);

  const trustIndicators = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Licensed & Insured Technicians" },
    { icon: <Award className="w-5 h-5" />, text: "180-Day Warranty on All Repairs" },
    { icon: <Clock className="w-5 h-5" />, text: "Same/Next Day Service Available" },
    { icon: <Star className="w-5 h-5" />, text: "5-Star Google Rating" },
    { icon: <MapPin className="w-5 h-5" />, text: "Local San Francisco Family Business" }
  ];

  const howItWorks = [
    { step: '1', title: 'Book Online or Call', description: 'Schedule instantly via our booking system or call us directly', icon: <MessageCircle className="w-8 h-8" /> },
    { step: '2', title: 'Technician Arrives', description: 'On-time arrival with tools and common parts', icon: <Users className="w-8 h-8" /> },
    { step: '3', title: 'Quick Diagnosis', description: 'Upfront estimate before we start any work', icon: <Wrench className="w-8 h-8" /> },
    { step: '4', title: 'Professional Repair', description: 'Quality repair with 180-day parts & labor warranty', icon: <ThumbsUp className="w-8 h-8" /> }
  ];

  const handleBookNow = () => {
    if (window.gtag) window.gtag('event', 'cta_click', { category: 'CTA', action: 'book_online', label: `Book ${appliance} Repair` });
    window.location.href = '/book?go=1';
  };

  const handleCallNow = () => {
    if (window.gtag) window.gtag('event', 'cta_click', { category: 'CTA', action: 'call_now', label: 'Call (760) 543-5733' });
    window.location.href = 'tel:7605435733';
  };

  // Normalized breadcrumb values
  const breadcrumbLabel = breadcrumbCategoryName || 'Services';
  const breadcrumbHref = breadcrumbCategoryHref || '/#services';
  const schemaCategoryUrl = breadcrumbHref === '/brands'
    ? 'https://fixitbay.net/brands'
    : 'https://fixitbay.net/#services';

  return (
    <div className="min-h-screen bg-white font-montserrat" style={{ paddingTop: '64px' }}>
      <SEOMetaTags
        title={pageTitle || `${appliance} Repair`}
        description={metaDescription || `Professional ${appliance.toLowerCase()} repair services in San Francisco, Peninsula, and Marin County. Licensed technicians, 180-day warranty, fast scheduling.`}
        canonical={`https://fixitbay.net${currentPath}`}
        ogImage="https://fixitbay.net/images/og-cover.png"
      />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#62C2E3' }}>
        <div className="max-w-4xl mx-auto">
          {/* Back button left-aligned, above hero */}
          <div className="mb-3 text-left"><BackButton /></div>

          <div className="text-center">
            {/* JSON-LD breadcrumbs injected via SEOMetaTags */}

            {/* Round logo */}
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img src="/images/logo.png" width="120" height="120" loading="lazy" alt={`${appliance} repair technician – FixitBay LLC`} className="w-24 h-24 rounded-full mx-auto shadow-2xl bg-white p-2" />
            </picture>

            {/* Breadcrumbs (visual) */}
            <div className="mt-4">
              <a href="/" className="text-white/90 hover:text-white text-sm">Home</a>
              <span className="mx-2 text-white/70">›</span>
              <a href={breadcrumbHref} className="text-white/90 hover:text-white text-sm">{breadcrumbLabel}</a>
              <span className="mx-2 text-white/70">›</span>
              <span className="text-white font-semibold text-sm">{pageTitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{pageTitle}</h1>
            <p className="text-white/90 mb-8">Fast, Reliable, Affordable!</p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/90 mb-8 leading-relaxed">
              When your {appliance.toLowerCase()} breaks down, FixitBay LLC is here to help! Our licensed technicians provide fast, reliable {appliance.toLowerCase()} repair services in San Francisco, Peninsula, and Marin County. We're a local family-owned business with a 180-day warranty.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBookNow} className="px-8 py-4 bg-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" style={{ color: '#C0362C' }}>
                Book {appliance} Repair Now
              </button>
              <button onClick={handleCallNow} className="flex items-center justify-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-lg border-2 border-white hover:bg-white transition-all duration-300" style={{ color: 'white' }} onMouseEnter={(e)=>e.target.style.color='#1A3B5D'} onMouseLeave={(e)=>e.target.style.color='white'}>
                <Phone className="w-5 h-5" /> Call (760) 543-5733
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Why Choose FixitBay LLC for {appliance} Repair?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: '#F39C12' }}>{indicator.icon}</div>
                  <h3 className="font-bold" style={{ color: '#1A3B5D' }}>{indicator.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Common {appliance} Problems We Fix</h2>
            <p className="text-xl text-gray-600">Our experienced technicians can diagnose and repair all these issues and more</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(commonProblems || []).map((problem, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1A3B5D' }}>{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Models */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Brands & Models We Service</h2>
            <p className="text-gray-600">We repair most major appliance brands in San Francisco, Peninsula, and Marin County</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {COMMON_BRANDS.map((brand) => {
              const href = brandLinkMap[brand] || '/brands';
              return (
                <a
                  key={brand}
                  href={href}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  style={{ color: '#1A3B5D', border: '1px solid #E5E7EB' }}
                  aria-label={`${brand} appliance repair in San Francisco, Peninsula & Marin`}
                >
                  {brand}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ backgroundColor: '#D3EAF2' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>How Our {appliance} Repair Process Works</h2>
            <p className="text-xl" style={{ color: '#2C3E50' }}>Simple 4-step process to get your {appliance.toLowerCase()} working again</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white" style={{ backgroundColor: '#F39C12' }}>{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#C0362C' }}>{step.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SEOMetaTags title={pageTitle} description={metaDescription || "Licensed & Insured Appliance Repair in San Francisco, Peninsula & Marin County"} canonical={`https://fixitbay.net${currentPath}`} ogTitle={pageTitle} ogDescription={metaDescription || "Licensed & Insured Appliance Repair in San Francisco, Peninsula & Marin County"} ogImage="https://fixitbay.net/images/og-cover.png" />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {(faqData || []).map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold mb-3" style={{ color: '#1A3B5D' }}>{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Serving Our Local Communities</h2>
            <p className="text-xl text-gray-600 mb-8">Local {appliance.toLowerCase()} repair experts you can trust in your neighborhood</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We serve customers in San Francisco, Peninsula (to Millbrae), and Marin County with fast, professional appliance repair backed by our 180-day warranty.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /><span>1,200+ Local Repairs Completed</span></div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /><span>Licensed Local Technicians</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-500" /><span>Same/Next Day Service Available</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: '#1A3B5D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Fix Your {appliance}?</h2>
            <p className="text-xl text-white/90 mb-8">Don't let a broken {appliance.toLowerCase()} disrupt your day. Call FixitBay LLC now for fast, reliable repair service with our 180-day warranty.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={handleCallNow} whileHover={{ scale: 1.05 }} className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300" style={{ backgroundColor: '#C0362C', color: 'white' }}>
                <Phone className="w-5 h-5" /> Call (760) 543-5733
              </motion.button>
              <motion.button onClick={handleBookNow} whileHover={{ scale: 1.05 }} className="px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white transition-all duration-300" onMouseEnter={(e)=>e.target.style.color='#1A3B5D'} onMouseLeave={(e)=>e.target.style.color='white'}>
                Book Online Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related services */}
      <section aria-labelledby="related-heading" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="related-heading" className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Related Appliance Services</h2>
            <p className="text-gray-600">Explore more services we offer in San Francisco, Peninsula, and Marin County.</p>
          </div>
          <RelatedServices />
        </div>
      </section>

      {/* Footer + Floating */}
      <footer style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '24px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/navbar-logo-new.png" alt="FixitBay" style={{ height: 36, width: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14, color: '#FFFFFF', display: 'block' }}>FixitBay LLC</span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>Appliance Repair &amp; Maintenance</span>
            </div>
          </div>
          <a href="tel:+17605435733" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.30)' }}>&copy; 2026 FixitBay LLC</span>
        </div>
      </footer>
      <FloatingButtons />
    </div>
  );
};

export default ApplianceRepairPage;

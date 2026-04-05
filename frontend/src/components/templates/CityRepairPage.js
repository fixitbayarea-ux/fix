import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';
import SEOMetaTags from '../SEOMetaTags';
import ServiceSchema from '../schema/ServiceSchema';
import { useSchemas } from '../../hooks/useSchema';

import { motion } from 'framer-motion';

import { 
  Phone, 
  Star, 
  CheckCircle, 
  Wrench, 
  Clock, 
  Shield, 
  MapPin,
  MessageCircle,
  Award,
  Users,
  ThumbsUp,
  Home,
  Settings
} from 'lucide-react';

import FloatingButtons from '../FloatingButtons';
import RelatedServices from '../RelatedServices';

const CityRepairPage = ({ 
  city, 
  pageTitle, 
  metaDescription, 
  neighborhoods, 
  localFeatures,
  localContent,
  faqData 
}) => {
  useEffect(() => {
    // breadcrumbs JSON-LD injected
  }, []);

  const services = [
    { name: "Refrigerator Repair", href: "/refrigerator-repair", icon: <Home className="w-6 h-6" /> },
    { name: "Washer & Dryer Repair", href: "/washer-repair", icon: <Settings className="w-6 h-6" /> },
    { name: "Dryer Repair", href: "/dryer-repair", icon: <Settings className="w-6 h-6" /> },
    { name: "Dishwasher Repair", href: "/dishwasher-repair", icon: <Shield className="w-6 h-6" /> },
    { name: "Oven & Stove / Range Repair", href: "/oven-repair", icon: <Wrench className="w-6 h-6" /> },
    { name: "Cooktop Repair", href: "/cooktop-repair", icon: <Wrench className="w-6 h-6" /> },
{ name: "Ice Maker Repair", href: "/ice-maker-repair", icon: <Star className="w-6 h-6" /> }
  ];

  const trustIndicators = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Licensed & Insured Technicians" },
    { icon: <Award className="w-5 h-5" />, text: "180-Day Warranty on All Repairs" },
    { icon: <Clock className="w-5 h-5" />, text: "Same/Next Day Service Available" },
    { icon: <Star className="w-5 h-5" />, text: "5-Star Google Rating" },
    { icon: <MapPin className="w-5 h-5" />, text: "Local Bay Area Family Business" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Book Online or Call",
      description: "Schedule your appointment instantly or call us directly",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Technician Arrives",
      description: "Our licensed technician arrives on time with all necessary tools",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Quick Diagnosis",
      description: "We diagnose the issue and provide upfront pricing before starting work",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Professional Repair",
      description: "Quality repair completed with 180-day warranty on parts and labor",
      icon: <ThumbsUp className="w-8 h-8" />
    }
  ];

  // Helper to build breadcrumb JSON-LD - pure JSON only, no JSX
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

  // Inject BreadcrumbList + FAQPage schemas via direct DOM (Helmet broken with React 19)
  const citySchemas = useMemo(() => {
    const schemas = [
      {
        id: `city-breadcrumb-${city}`,
        data: buildBreadcrumbSchema([
          { name: 'Home', url: 'https://fixitbay.net/' },
          { name: 'Cities We Serve', url: 'https://fixitbay.net/site-map' },
          { name: `${city || 'City'} Appliance Repair`, url: `https://fixitbay.net/${(city || '').toLowerCase().replace(/\s+/g, '-')}-appliance-repair` }
        ])
      }
    ];
    // FAQ schema with guard against empty/invalid entries
    const validFaqs = (faqData || []).filter(f => f.question?.trim() && f.answer?.trim());
    if (validFaqs.length > 0) {
      schemas.push({
        id: `city-faq-${city}`,
        data: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": validFaqs.map(f => ({
            "@type": "Question",
            "name": f.question.trim(),
            "acceptedAnswer": { "@type": "Answer", "text": f.answer.trim() }
          }))
        }
      });
    }
    return schemas;
  }, [city, faqData]);
  useSchemas(citySchemas);

  const handleBookNow = () => {
    // GA4 Event Tracking
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        page_path: window.location.pathname,
        page_title: document.title,
        category: 'CTA',
        action: 'book_online',
        label: 'Book Online Now'
      });
    }
    window.location.href = '/book?go=1';
  };

  const handleCallNow = () => {
    // GA4 Event Tracking
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        page_path: window.location.pathname,
        page_title: document.title,
        category: 'CTA',
        action: 'call_now',
        label: 'Call (760) 543-5733'
      });
    }
    window.location.href = 'tel:7605435733';
  };

  return (
    <>
      <SEOMetaTags
        title={`${pageTitle} | FixItBay Appliance Repair`}
        description={`Licensed & insured technicians offering fast appliance repair in ${city}. FixItBay provides fast, local appliance repair and maintenance throughout the San Francisco Bay Area. 180-day warranty on parts and labor.`}
        canonical={`https://fixitbay.net/${city.toLowerCase().replace(/\s+/g, '-')}-appliance-repair`}
        ogImage="https://fixitbay.net/images/og-cover.png"
        noindex={false}
      />
      <ServiceSchema serviceType="Appliance Repair" city={city} serviceName={`Appliance Repair in ${city}`} />
      
      {/* Schemas injected via useSchemas hook above */}
      <div className="min-h-screen bg-white font-montserrat pb-[72px] lg:pb-0 ">
      <style>{`
        @media (max-width: 1023px) {
          .hero-main-h1 { font-size: 28px !important; line-height: 1.2 !important; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#62C2E3' }}>
        <div className="max-w-4xl mx-auto">
          {/* Back button left-aligned, inside main content */}
          <div className="mb-3 text-left">
            <BackButton />
          </div>

          <div className="text-center">
            {/* Round logo */}
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.png"
                alt="FixitBay Logo"
                width="120"
                height="120"
                loading="lazy"
                alt={`Appliance repair in ${city} – FixitBay LLC`}
                className="w-24 h-24 rounded-full mx-auto shadow-2xl bg-white p-2"
              />
            </picture>

            {/* Breadcrumbs */}
            <div className="mt-4">
              <a href="/" className="text-white/90 hover:text-white text-sm">Home</a>
              <span className="mx-2 text-white/70">›</span>
              <a href="/service-areas" className="text-white/90 hover:text-white text-sm">Cities</a>
              <span className="mx-2 text-white/70">›</span>
              <span className="text-white font-semibold text-sm">{city}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-main-h1 text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              {`Appliance Repair in ${city}`}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              When appliances break down in {city}, FixitBay LLC is your trusted local repair service! Our licensed technicians provide fast, reliable appliance repair throughout {city} and the surrounding Bay Area. We handle refrigerators (fridges), washers (washing machines), dryers, dishwashers, ovens/stoves/ranges, cooktops, ice makers, wine coolers,  — with fast scheduling available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handleBookNow}
                className="px-8 py-4 bg-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ color: '#C0362C' }}
              >
                Book Repair in {city}
              </button>
              
              <button
                onClick={handleCallNow}
                className="flex items-center justify-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-lg border-2 border-white hover:bg-white transition-all duration-300"
                style={{ color: 'white' }}
                onMouseEnter={(e) => e.target.style.color = '#1A3B5D'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                <Phone className="w-5 h-5" />
                Call (760) 543-5733
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              Appliance Repair Services in {city}
            </h2>
            <p className="text-xl text-gray-600">
              Professional repair for all major appliances in your {city} home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                aria-label={`${service.name} in ${city}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: '#F39C12' }}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold" style={{ color: '#1A3B5D' }}>
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Expert {service.name.toLowerCase()} service in {city} with fast scheduling.
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              Why {city} Residents Choose FixitBay LLC
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: '#F39C12' }}>
                    {indicator.icon}
                  </div>
                  <h3 className="font-bold" style={{ color: '#1A3B5D' }}>
                    {indicator.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ backgroundColor: '#D3EAF2' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              How Our {city} Repair Process Works
            </h2>
            <p className="text-xl" style={{ color: '#2C3E50' }}>
              Simple 4-step process to get your appliances working again
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: '#F39C12' }}
                  >
                    {step.icon}
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: '#C0362C' }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className="text-base lg:text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              {city} Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Local appliance repair experts serving neighborhoods throughout {city}
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a local family-owned business, we know {city} well. Our technicians provide personalized service to areas including {neighborhoods.join(', ')}, and surrounding neighborhoods. {localFeatures}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Trusted by {city} Residents</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span>Fast Local Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Licensed Technicians</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Local Content - SEO-rich text block */}
      {localContent && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#1A3B5D' }}>
              About Appliance Repair in {city}
            </h2>
            <div className="prose prose-lg max-w-none space-y-4">
              {localContent.map((para, idx) => (
                <p key={idx} className="text-base leading-relaxed" style={{color:'#2B3A4A'}}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section — schema already injected via useSchemas hook */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-bold mb-3" style={{ color: '#1A3B5D' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: '#1A3B5D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Appliance Repair in {city}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let broken appliances disrupt your {city} home. Call FixitBay LLC now for fast, reliable repair service with our 180-day warranty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCallNow}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300"
                style={{ backgroundColor: '#C0362C', color: 'white' }}
              >
                <Phone className="w-5 h-5" />
                Call (760) 543-5733
              </motion.button>
              
              <motion.button
                onClick={handleBookNow}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white transition-all duration-300"
                onMouseEnter={(e) => e.target.style.color = '#1A3B5D'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Book Online Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Repairs in City — internal links to city+service pages */}
      {(() => {
        const cs = city.toLowerCase().replace(/\s+/g, '-');
        const repairs = [
          { label: 'Refrigerator Repair', svc: 'refrigerator' }, { label: 'Washer Repair', svc: 'washer' },
          { label: 'Dryer Repair', svc: 'dryer' }, { label: 'Dishwasher Repair', svc: 'dishwasher' },
          { label: 'Oven & Range Repair', svc: 'oven' }, { label: 'Wine Cooler Repair', svc: 'wine-cooler' },
          { label: 'Ice Maker Repair', svc: 'ice-maker' },
        ];
        return (
          <section style={{ background: '#F8F5F0', padding: '48px 0' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0D1B2A', marginBottom: 20 }}>Popular Repairs in {city}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: 10 }}>
                {repairs.map(s => (
                  <Link key={s.svc} to={`/${cs}-${s.svc}-repair`} data-testid={`popular-repair-${s.svc}`} style={{ fontWeight: 600, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#fff', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 3, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <RelatedServices type="appliances" />
      <RelatedServices type="areas" exclude={`/${city.toLowerCase().replace(/\s+/g, '-')}-appliance-repair`} />

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2026 FixitBay LLC. Licensed & Insured Appliance Repair Company serving {city} and the San Francisco Bay Area.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  </>
  );
};

export default CityRepairPage;
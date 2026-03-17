import React, { useEffect, useMemo } from 'react';
import BackButton from '../BackButton';
import SEOMetaTags from '../SEOMetaTags';
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

const MarinCountyPage = () => {
  const city = "Marin County";
  const pageTitle = "Appliance Repair Marin County | Same-Day Service | FixitBay";
  const metaDescription = "Licensed appliance repair in Marin County. Serving Mill Valley, San Rafael, Novato, Sausalito, Tiburon. $60 diagnostic, 180-day warranty. Same-day service.";

  const marinCities = [
    { name: "Mill Valley", href: "/mill-valley-appliance-repair" },
    { name: "San Rafael", href: "/san-rafael-appliance-repair" },
    { name: "Novato", href: "/novato-appliance-repair" },
    { name: "Sausalito", href: "/sausalito-appliance-repair" },
    { name: "Tiburon", href: "/tiburon-appliance-repair" },
    { name: "Corte Madera", href: "/corte-madera-appliance-repair" },
    { name: "Larkspur", href: "/larkspur-appliance-repair" },
    { name: "Greenbrae", href: "/greenbrae-appliance-repair" },
    { name: "Ross", href: "/ross-appliance-repair" },
    { name: "Fairfax", href: "/fairfax-appliance-repair" },
    { name: "San Anselmo", href: "/san-anselmo-appliance-repair" },
    { name: "Belvedere", href: "/belvedere-appliance-repair" },
    { name: "San Quentin", href: "/san-quentin-appliance-repair" }
  ];

  const localFeatures = "We understand Marin County's unique homes — from hillside estates in Tiburon and Sausalito to charming bungalows in Mill Valley and San Anselmo. Our technicians are experienced with high-end appliances common in Marin, including Sub-Zero, Wolf, Viking, Thermador, and Miele.";

  const faqData = [
    {
      question: "Do you provide same-day appliance repair in Marin County?",
      answer: "Yes! We offer same-day appliance repair service throughout Marin County, including Mill Valley, San Rafael, Novato, Sausalito, Tiburon, Corte Madera, and all surrounding areas. Our technicians know Marin well and can typically arrive within 60-90 minutes."
    },
    {
      question: "How much does appliance repair cost in Marin County?",
      answer: "Appliance repair costs in Marin County typically range from $150-$400 depending on the issue. We charge a $60 diagnostic fee that's fully applied to your repair cost. Our upfront pricing means no surprises regardless of your Marin location."
    },
    {
      question: "What areas of Marin County do you serve?",
      answer: "We serve all of Marin County including Mill Valley, San Rafael, Novato, Sausalito, Tiburon, Corte Madera, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo, Belvedere, and San Quentin. No matter where you are in Marin, we can reach you."
    },
    {
      question: "Do you repair high-end appliances in Marin?",
      answer: "Absolutely! Our technicians are factory-trained on premium brands common in Marin homes: Sub-Zero, Wolf, Viking, Thermador, Miele, Bosch, and more. We carry specialized parts and tools for luxury appliance repairs."
    },
    {
      question: "Are you licensed to work in Marin County?",
      answer: "Yes, FixitBay LLC is fully licensed and insured to provide appliance repair services in Marin County. Our technicians meet all county requirements and carry proper insurance for your peace of mind."
    }
  ];

  const services = [
    { name: "Refrigerator Repair", href: "/refrigerator-repair", icon: <Home className="w-6 h-6" /> },
    { name: "Washer Repair", href: "/washer-repair", icon: <Settings className="w-6 h-6" /> },
    { name: "Dryer Repair", href: "/dryer-repair", icon: <Settings className="w-6 h-6" /> },
    { name: "Dishwasher Repair", href: "/dishwasher-repair", icon: <Shield className="w-6 h-6" /> },
    { name: "Oven & Range Repair", href: "/oven-repair", icon: <Wrench className="w-6 h-6" /> },
    { name: "Cooktop Repair", href: "/cooktop-repair", icon: <Wrench className="w-6 h-6" /> },
    { name: "Wine Cooler Repair", href: "/wine-cooler-repair", icon: <Star className="w-6 h-6" /> },
    { name: "Ice Maker Repair", href: "/ice-maker-repair", icon: <Star className="w-6 h-6" /> }
  ];

  const trustIndicators = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Licensed & Insured Technicians" },
    { icon: <Award className="w-5 h-5" />, text: "180-Day Warranty on All Repairs" },
    { icon: <Clock className="w-5 h-5" />, text: "Same-Day Service Available" },
    { icon: <Star className="w-5 h-5" />, text: "5-Star Google Rating" },
    { icon: <MapPin className="w-5 h-5" />, text: "Serving All Marin County" }
  ];

  const howItWorks = [
    { step: "1", title: "Book Online or Call", description: "Schedule your appointment instantly or call us directly", icon: <MessageCircle className="w-8 h-8" /> },
    { step: "2", title: "Technician Arrives", description: "Our licensed technician arrives on time with all necessary tools", icon: <Users className="w-8 h-8" /> },
    { step: "3", title: "Quick Diagnosis", description: "We diagnose the issue and provide upfront pricing before starting work", icon: <Wrench className="w-8 h-8" /> },
    { step: "4", title: "Professional Repair", description: "Quality repair completed with 180-day warranty on parts and labor", icon: <ThumbsUp className="w-8 h-8" /> }
  ];

  // Build schemas
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

  const buildFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "description": "Professional appliance repair services in Marin County. Same-day service, licensed technicians, 180-day warranty.",
    "telephone": "+17605435733",
    "url": "https://fixitbay.net/marin-county-appliance-repair",
    "image": "https://fixitbay.net/images/fixitbay-logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1549 Franklin St, Unit A",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94109",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.8044,
      "longitude": -122.4711
    },
    "areaServed": {
      "@type": "County",
      "name": "Marin County",
      "containsPlace": marinCities.map(c => ({
        "@type": "City",
        "name": c.name
      }))
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const pageSchemas = useMemo(() => {
    const schemas = [
      { id: 'breadcrumb-marin', data: buildBreadcrumbSchema([
        { name: 'Home', url: 'https://fixitbay.net/' },
        { name: 'Service Areas', url: 'https://fixitbay.net/service-areas' },
        { name: 'Marin County', url: 'https://fixitbay.net/marin-county-appliance-repair' }
      ])},
      { id: 'faq-marin', data: buildFAQSchema(faqData) },
      { id: 'localbusiness-marin', data: localBusinessSchema }
    ];
    return schemas;
  }, []);

  useSchemas(pageSchemas);

  return (
    <div className="min-h-screen bg-gray-50" data-testid="marin-county-page">
      <SEOMetaTags title={pageTitle} description={metaDescription} />
      <FloatingButtons />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0D1B2A] to-[#1B3A5F] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Appliance Repair Marin County</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Appliance Repair in Marin County — Same-Day Service</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional appliance repair across Mill Valley, San Rafael, Novato, Sausalito, Tiburon, and all Marin County cities. Licensed technicians, $60 diagnostic, 180-day warranty.</p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {trustIndicators.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-orange-400">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors" data-testid="book-online-btn">
                Book Online Now
              </a>
              <a href="tel:+17605435733" className="inline-flex items-center justify-center gap-2 bg-white text-[#0D1B2A] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors" data-testid="call-btn">
                <Phone className="w-5 h-5" />
                (760) 543-5733
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marin Cities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#0D1B2A]">Cities We Serve in Marin County</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Same-day appliance repair across all 13 Marin County cities. Click your city for local service details.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {marinCities.map((c, idx) => (
              <a key={idx} href={c.href} className="flex items-center gap-2 p-4 bg-gray-50 hover:bg-orange-50 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors" data-testid={`city-link-${c.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-medium text-[#0D1B2A]">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Marin Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#0D1B2A]">Expert Appliance Repair for Marin County Homes</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{localFeatures}</p>
          <p className="text-gray-700 text-lg leading-relaxed">Whether you need refrigerator repair in Mill Valley, washer repair in San Rafael, or dishwasher repair in Novato — our licensed technicians provide fast, reliable service with transparent pricing. We charge a $60 diagnostic fee (fully applied to your repair) and back every repair with our 180-day warranty.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0D1B2A]">Appliance Repair Services in Marin County</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <a key={idx} href={svc.href} className="flex flex-col items-center p-6 bg-gray-50 hover:bg-orange-50 rounded-xl border border-gray-200 hover:border-orange-300 transition-all hover:shadow-md" data-testid={`service-${svc.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-orange-500 mb-3">{svc.icon}</div>
                <span className="font-semibold text-[#0D1B2A] text-center">{svc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">{step.icon}</div>
                <div className="text-orange-400 font-bold text-sm mb-2">STEP {step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0D1B2A]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-gray-200 p-4 group" data-testid={`faq-${idx}`}>
                <summary className="font-semibold text-[#0D1B2A] cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Same-Day Appliance Repair in Marin County?</h2>
          <p className="text-lg mb-8 opacity-90">Book online or call now. $60 diagnostic, 180-day warranty, licensed technicians.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book?go=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#0D1B2A] hover:bg-[#1B3A5F] text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Book Online Now
            </a>
            <a href="tel:+17605435733" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              (760) 543-5733
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarinCountyPage;

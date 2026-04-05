import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  Star, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Home
} from 'lucide-react';
import SEOMetaTags from './SEOMetaTags';
import { getLocalBusinessSchema } from '../utils/schemaMarkup';
import HomeButton from './HomeButton';
import FloatingButtons from './FloatingButtons';

const BlogFAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const categories = [
    { id: 'all', name: 'All Topics', icon: <Star className="w-5 h-5" /> },
    { id: 'refrigerator', name: 'Refrigerator', icon: <Home className="w-5 h-5" /> },
    { id: 'washer', name: 'Washer & Dryer', icon: <Wrench className="w-5 h-5" /> },
    { id: 'dishwasher', name: 'Dishwasher', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'general', name: 'General Tips', icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  const blogFaqContent = [
    {
      id: 1,
      type: 'faq',
      category: 'refrigerator',
      title: '5 Common Refrigerator Problems and Quick Fixes',
      question: 'Why is my refrigerator not cooling properly?',
      answer: 'A refrigerator not cooling properly can be caused by several issues. First, check if the temperature settings are correct (37°F for fridge, 0°F for freezer). Clean the condenser coils on the back or bottom of the unit, as dirty coils make the compressor work harder. Ensure proper airflow by not overcrowding shelves and check that door seals are tight. If these steps don\'t help, you may have a failing compressor, thermostat, or refrigerant leak that requires professional repair.',
      content: `
        <h3>Top 5 Refrigerator Issues Bay Area Homeowners Face:</h3>
        <ol>
          <li><strong>Temperature fluctuations</strong> - Often caused by faulty thermostats or blocked vents</li>
          <li><strong>Ice maker problems</strong> - Usually water supply or filter issues</li>
          <li><strong>Excessive frost buildup</strong> - Indicates door seal or defrost system problems</li>
          <li><strong>Strange noises</strong> - Could signal compressor or fan motor issues</li>
          <li><strong>Water leaking</strong> - Often a clogged drain or damaged water line</li>
        </ol>
        <p>If you're experiencing any of these issues in San Francisco, Oakland, or anywhere in the Bay Area, FixitBay LLC's licensed technicians can diagnose and repair your refrigerator quickly with our 180-day warranty.</p>
      `,
      keywords: 'refrigerator repair San Francisco, fridge not cooling, refrigerator problems Bay Area',
      readTime: '5 min read'
    },
    {
      id: 2,
      type: 'blog',
      category: 'washer',
      title: 'When to Repair vs Replace Your Washing Machine',
      question: 'How do I know if my washer is worth repairing?',
      answer: 'Consider repair if your washer is under 8 years old, the repair cost is less than 50% of replacement cost, and it\'s a quality brand. Replace if it\'s over 10 years old, needs frequent repairs, or has major component failure like the transmission or motor.',
      content: `
        <h3>Washer Repair Decision Guide for Bay Area Residents:</h3>
        
        <h4>Repair When:</h4>
        <ul>
          <li>Machine is less than 8 years old</li>
          <li>Repair cost under $300</li>
          <li>Quality brand (Whirlpool, GE, LG, Samsung)</li>
          <li>Single component failure</li>
          <li>Still under extended warranty</li>
        </ul>
        
        <h4>Replace When:</h4>
        <ul>
          <li>Machine over 10 years old</li>
          <li>Multiple simultaneous problems</li>
          <li>Transmission or motor failure</li>
          <li>Repeated service calls</li>
          <li>Rust or structural damage</li>
        </ul>
        
        <p>In the competitive San Francisco Bay Area market, making the right choice saves money. Our technicians provide honest assessments to help Concord and all Bay Area customers make informed decisions.</p>
      `,
      keywords: 'washer repair vs replace, washing machine repair Bay Area, appliance repair Concord',
      readTime: '7 min read'
    },
    {
      id: 3,
      type: 'faq',
      category: 'dishwasher',
      title: 'Dishwasher Not Draining: Causes and Solutions',
      question: 'Why won\'t my dishwasher drain completely?',
      answer: 'Common causes include clogged filters, blocked garbage disposal, kinked drain hose, or faulty drain pump. Start by cleaning the dishwasher filter at the bottom of the tub, run your garbage disposal, and check that the drain hose isn\'t bent. If the problem persists, you may need professional service to replace the drain pump or clear internal blockages.',
      content: `
        <h3>Dishwasher Drainage Issues: A Bay Area Homeowner's Guide</h3>
        
        <h4>Step-by-Step Troubleshooting:</h4>
        <ol>
          <li><strong>Clean the filter:</strong> Located at the bottom of the dishwasher tub</li>
          <li><strong>Check garbage disposal:</strong> Run it to clear any blockages</li>
          <li><strong>Inspect drain hose:</strong> Look for kinks or clogs</li>
          <li><strong>Verify dishwasher connections:</strong> Ensure proper connection</li>
        </ol>
        
        <h4>When to Call FixitBay LLC:</h4>
        <p>If these steps don't resolve the issue, you may have:</p>
        <ul>
          <li>Faulty drain pump requiring replacement</li>
          <li>Internal blockages in wash arms</li>
          <li>Control board malfunctions</li>
          <li>Plumbing connection problems</li>
        </ul>
        
        <p>Our licensed technicians serve San Francisco, Oakland, and the entire Bay Area with fast, reliable service for dishwasher repairs.</p>
      `,
      keywords: 'dishwasher not draining, dishwasher repair San Francisco, appliance service Bay Area',
      readTime: '4 min read'
    },
    {
      id: 4,
      type: 'blog',
      category: 'general',
      title: 'Appliance Maintenance Tips to Extend Lifespan',
      question: 'How can I make my appliances last longer?',
      answer: 'Regular maintenance is key: clean filters monthly, check seals and gaskets, keep vents clear, use appropriate detergents, don\'t overload machines, and schedule annual professional inspections. These simple steps can extend appliance life by 3-5 years.',
      content: `
        <h3>Seasonal Appliance Maintenance Checklist for Bay Area Homes</h3>
        
        <h4>Monthly Tasks:</h4>
        <ul>
          <li>Clean refrigerator coils and replace water filters</li>
          <li>Clean dishwasher and washing machine filters</li>
          <li>Check and clean dryer lint trap and vent</li>
          <li>Wipe down appliance seals and gaskets</li>
        </ul>
        
        <h4>Quarterly Tasks:</h4>
        <ul>
          <li>Deep clean oven and stovetop</li>
          <li>Check washing machine hoses for wear</li>
          <li>Inspect appliance cords and plugs</li>
        </ul>
        
        <h4>Annual Professional Service:</h4>
        <p>Even with regular maintenance, professional annual inspections can catch problems early. FixitBay LLC offers comprehensive maintenance packages for Bay Area homeowners in San Francisco, Concord, and surrounding cities.</p>
        
        <h4>Bay Area Climate Considerations:</h4>
        <p>The Bay Area's humid climate and hard water can affect appliance performance. Our technicians understand local conditions and provide region-specific maintenance advice.</p>
      `,
      keywords: 'appliance maintenance tips, Bay Area appliance service, extend appliance lifespan',
      readTime: '8 min read'
    },
    {
      id: 5,
      type: 'faq',
      category: 'general',
      title: 'Emergency Appliance Repair: What Constitutes an Emergency?',
      question: 'When should I call for emergency appliance repair?',
      answer: 'Call for emergency service if you smell gas, see sparks or smoke, have electrical issues, experience major water leaks, or complete refrigerator failure with food spoilage risk. These situations require immediate professional attention for safety and to prevent property damage.',
      content: `
        <h3>Appliance Emergencies in the Bay Area: When to Act Fast</h3>
        
        <h4>Immediate Emergency Situations:</h4>
        <ul>
          <li><strong>Gas smell from range or dryer</strong> - Turn off gas, evacuate, call immediately</li>
          <li><strong>Sparks or electrical issues</strong> - Unplug and call for emergency service</li>
          <li><strong>Major water leaks</strong> - Turn off water supply, call emergency service</li>
          <li><strong>Complete refrigerator failure</strong> - Risk of food spoilage requires urgent attention</li>
          <li><strong>Smoke from any appliance</strong> - Safety hazard requiring immediate response</li>
        </ul>
        
        <h4>FixitBay LLC Emergency Response:</h4>
        <p>We provide fast emergency appliance repair throughout the San Francisco Bay Area, including:</p>
        <ul>
          <li>San Francisco and Peninsula cities</li>
          <li>Oakland and East Bay communities</li>
          <li>San Jose and South Bay areas</li>
          <li>Concord and North Bay regions</li>
        </ul>
        
        <h4>What to Do Before We Arrive:</h4>
        <ol>
          <li>Ensure safety - turn off gas, water, or electricity as needed</li>
          <li>Document the problem with photos if safe to do so</li>
          <li>Clear access area for our technicians</li>
          <li>Gather appliance model and serial numbers</li>
        </ol>
      `,
      keywords: 'emergency appliance repair, appliance service Bay Area, appliance repair San Francisco',
      readTime: '6 min read'
    }
  ];

  const filteredContent = blogFaqContent.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* SEO Meta Tags */}
      {/* Breadcrumb JSON-LD */}
      <script type="application/ld+json">{JSON.stringify({
        '@context':'https://schema.org',
        '@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:'https://fixitbay.net/' },
          { '@type':'ListItem', position:2, name:'Blog', item:'https://fixitbay.net/blog-faq' }
        ]
      })}</script>

      <SEOMetaTags
        title="Appliance Repair Tips & FAQ | FixitBay LLC Bay Area"
        description="Expert appliance repair tips, troubleshooting guides, and FAQ for San Francisco Bay Area homeowners. Learn when to repair vs replace, maintenance tips, and emergency procedures."
        keywords="appliance repair tips, refrigerator problems, dishwasher not draining, washer repair guide, Bay Area appliance maintenance, San Francisco appliance FAQ"
        canonical="https://fixitbay.net/blog-faq"
        structuredData={getLocalBusinessSchema("San Francisco")}
      />

      {/* Header (removed extra header wrapper to avoid duplication) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img src="/images/logo.png" alt="FixitBay LLC appliance repair logo" width="48" height="48" loading="lazy" className="w-12 h-12 rounded-full" />
            </picture>
            <div>
              <h1 className="text-lg font-bold" style={{ color: '#1A3B5D' }}>
                <a href="/" className="hover:opacity-80">FixitBay LLC</a>
              </h1>
              <p className="text-xs text-gray-600">Appliance Repair Tips & Expert FAQ</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              onClick={() => window.location.href = 'tel:7605435733'}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300"
              style={{ backgroundColor: '#C0362C' }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(760) 543-5733</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#62C2E3' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Appliance Repair Tips & Expert FAQ
          </motion.h1>
          
          {/* Breadcrumbs */}
          <div className="mt-2">
            <a href="/" className="text-white/90 hover:text-white text-sm">Home</a>
            <span className="mx-2 text-white/70">›</span>
            <a href="/#services" className="text-white/90 hover:text-white text-sm">Blog</a>
            <span className="mx-2 text-white/70">›</span>
            <span className="text-white font-semibold text-sm">Tips & FAQ</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Expert advice, troubleshooting guides, and frequently asked questions from Bay Area's trusted appliance repair specialists
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search repair tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No content found matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {['refrigerator', 'washer', 'dishwasher', 'general'].map((catId, catIndex) => {
                const catItems = filteredContent.filter(i => i.category === catId);
                if (catItems.length === 0) return null;
                const catLabel = { refrigerator: 'Refrigerator Repair Tips', washer: 'Washer & Dryer Repair Tips', dishwasher: 'Dishwasher Repair Tips', general: 'General Appliance Tips' }[catId];
                return (
                  <React.Fragment key={catId}>
                  <div>
                    <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 24, color: '#1A1A1A', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid rgba(255,87,34,0.2)' }}>{catLabel}</h2>
                    <div className="space-y-6">
                      {catItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            item.type === 'blog' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.type.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3B5D' }}>
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {item.answer}
                        </p>
                        
                        <div className="text-sm text-blue-600 font-medium">
                          Keywords: {item.keywords}
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedItems.has(item.id) ? 90 : 0 }}
                        className="ml-4 text-gray-400"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedItems.has(item.id) ? 'auto' : 0,
                      opacity: expandedItems.has(item.id) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div 
                        className="prose max-w-none pt-4 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
                      />
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">
                          Need professional help? FixitBay LLC provides expert appliance repair throughout the San Francisco Bay Area with fast scheduling and a 180-day warranty.
                        </p>
                        <div className="flex gap-3 mt-3">
                          <button
                            onClick={() => window.location.href = 'tel:7605435733'}
                            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Call (760) 543-5733
                          </button>
                          <button
                            onClick={() => window.location.href = '/book?go=1'}
                            className="text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            Book Online
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
                    </div>
                  </div>
                  {catIndex === 2 && (
                    <div data-testid="mid-article-cta" style={{
                      background: '#0D1B2A',
                      borderLeft: '4px solid #FF5722',
                      padding: '20px 24px',
                      borderRadius: '8px',
                      margin: '32px 0'
                    }}>
                      <p style={{color:'#fff', fontWeight:'600', fontSize:'16px', marginBottom:'6px'}}>
                        Need appliance repair in San Francisco?
                      </p>
                      <p style={{color:'rgba(255,255,255,0.7)', fontSize:'14px', marginBottom:'16px'}}>
                        Fast scheduling · $60 diagnostic · 180-day warranty
                      </p>
                      <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
                        <a href="tel:7605435733" style={{
                          background:'#FF5722', color:'#fff', padding:'12px 20px',
                          borderRadius:'6px', textDecoration:'none', fontWeight:'600',
                          fontSize:'14px'
                        }}>Call (760) 543-5733</a>
                        <a href="/book" style={{
                          color:'#FF5722', padding:'12px', textDecoration:'none',
                          fontSize:'14px', fontWeight:'500'
                        }}>Book online →</a>
                      </div>
                    </div>
                  )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1A3B5D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Professional Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our expert technicians are ready to solve any appliance problem in the Bay Area
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.location.href = 'tel:7605435733'}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300"
                style={{ backgroundColor: '#C0362C', color: 'white' }}
              >
                <Phone className="w-5 h-5" />
                Call (760) 543-5733
              </motion.button>
              
              <motion.button
                onClick={() => window.location.href = '/book?go=1'}
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

      {/* Footer */}
      <footer style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '24px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/navbar-logo-new.png" alt="FixitBay" style={{ height: 36, width: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14, color: '#FFFFFF', display: 'block' }}>FixitBay LLC</span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>Appliance Repair &amp; Maintenance</span>
            </div>
          </div>
          <a href="tel:+17605435733" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.30)' }}>&copy; 2026 FixitBay LLC</span>
        </div>
      </footer>

      {/* Home Button */}
      <HomeButton />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default BlogFAQPage;
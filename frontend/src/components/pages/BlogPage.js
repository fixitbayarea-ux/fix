import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag, Search, Wrench, Lightbulb, Shield, TrendingUp, ArrowRight, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      slug: 'refrigerator-not-cooling',
      title: '5 Common Reasons Your Refrigerator Isn\'t Cooling',
      excerpt: 'Is your fridge running but not keeping food cold? Learn the top 5 causes including compressor issues, dirty coils, and thermostat problems. Plus, what you can check yourself before calling a technician.',
      content: 'Common causes include dirty condenser coils, faulty thermostats, damaged door seals, compressor failures, and blocked air vents. Regular maintenance can prevent most of these issues.',
      date: 'January 20, 2025',
      readTime: '5 min',
      category: 'Refrigerator',
      icon: '🧊',
      tips: [
        'Clean condenser coils every 6 months',
        'Check door seals for proper closure',
        'Keep vents clear of obstructions',
        'Monitor temperature settings (37-40°F for fridge)'
      ]
    },
    {
      slug: 'dishwasher-maintenance',
      title: 'How to Maintain Your Dishwasher for Longer Life',
      excerpt: 'Simple maintenance tips to prevent clogs, leaks, and odors. Learn how to clean filters, check spray arms, and maintain door seals. Keep your dishwasher running efficiently for 10+ years.',
      content: 'Monthly filter cleaning, regular spray arm inspection, and proper loading techniques extend dishwasher life significantly.',
      date: 'January 18, 2025',
      readTime: '7 min',
      category: 'Dishwasher',
      icon: '🍽️',
      tips: [
        'Clean filter monthly',
        'Run hot water before starting cycle',
        'Use proper detergent amount',
        'Leave door open after cycle to air dry'
      ]
    },
    {
      slug: 'when-to-repair-vs-replace',
      title: 'Repair vs Replace: When to Fix Your Appliance',
      excerpt: 'Not sure if it\'s worth repairing your old appliance? Use our expert guide based on the 50% rule, age considerations, and repair costs. Make the right financial decision for your home.',
      content: 'The 50% rule: If repair costs exceed 50% of replacement cost and the appliance is over half its lifespan, consider replacing.',
      date: 'January 15, 2025',
      readTime: '6 min',
      category: 'Expert Advice',
      icon: '💡',
      tips: [
        'Consider appliance age vs expected lifespan',
        'Compare repair cost to 50% of replacement',
        'Factor in energy efficiency gains',
        'Check warranty coverage first'
      ]
    },
    {
      slug: 'dryer-taking-too-long',
      title: 'Why Is My Dryer Taking So Long to Dry?',
      excerpt: 'Long drying times waste energy and money. Discover the 7 most common causes including clogged vents, heating element issues, and moisture sensor problems. Learn DIY fixes and when to call a pro.',
      content: 'Clogged dryer vents are the #1 cause of long drying times and a serious fire hazard. Professional vent cleaning is recommended annually.',
      date: 'January 12, 2025',
      readTime: '6 min',
      category: 'Dryer',
      icon: '🌀',
      tips: [
        'Clean lint trap after every load',
        'Inspect and clean vent duct annually',
        'Don\'t overload the dryer',
        'Check moisture sensor and clean if needed'
      ]
    },
    {
      slug: 'washer-error-codes',
      title: 'Common Washer Error Codes & What They Mean',
      excerpt: 'Decode OE, UE, LE, and other error codes from Samsung, LG, Whirlpool, and GE washers. Learn what each code means and simple troubleshooting steps you can try before calling for service.',
      content: 'Error codes are diagnostic tools. OE = drainage issue, UE = unbalanced load, LE = motor lock error. Most can be resolved with simple fixes.',
      date: 'January 10, 2025',
      readTime: '8 min',
      category: 'Washer',
      icon: '👕',
      tips: [
        'Write down the exact error code',
        'Try unplugging for 2 minutes (resets control board)',
        'Check for obvious issues (door closed, water supply)',
        'Consult manual for brand-specific codes'
      ]
    },
    {
      slug: 'oven-temperature-calibration',
      title: 'How to Calibrate Your Oven Temperature',
      excerpt: 'Is your oven cooking unevenly or burning food? Learn how to test oven temperature accuracy with a thermometer and calibrate for perfect cooking results. Works for all oven brands.',
      content: 'Use an oven thermometer to check accuracy. Most ovens can be calibrated +/- 35°F through the control panel settings.',
      date: 'January 8, 2025',
      readTime: '5 min',
      category: 'Oven',
      icon: '🔥',
      tips: [
        'Use an oven thermometer for accuracy',
        'Test at multiple temperatures',
        'Check calibration settings in your manual',
        'Consider professional calibration if off by 50°F+'
      ]
    },
    {
      slug: 'ice-maker-troubleshooting',
      title: 'Ice Maker Not Working? Top 10 Fixes',
      excerpt: 'No ice, slow ice production, or small/hollow cubes? Troubleshoot water supply, ice maker module, and water filter issues. Most ice maker problems have simple solutions you can fix yourself.',
      content: 'Check water supply first, then filter, then ice maker module. Water filter should be changed every 6 months.',
      date: 'January 5, 2025',
      readTime: '7 min',
      category: 'Refrigerator',
      icon: '🧊',
      tips: [
        'Check water supply valve is fully open',
        'Replace water filter every 6 months',
        'Verify freezer temperature (0-5°F)',
        'Check ice maker arm/sensor position'
      ]
    },
    {
      slug: 'appliance-lifespan',
      title: 'How Long Should Your Appliances Last?',
      excerpt: 'Expected lifespans for refrigerators, washers, dryers, dishwashers, and ovens. Learn when to start planning for replacement and how proper maintenance extends appliance life by years.',
      content: 'Average lifespans: Refrigerators 13 years, Washers 10 years, Dryers 13 years, Dishwashers 9 years, Ovens 15 years. Maintenance can extend these significantly.',
      date: 'January 3, 2025',
      readTime: '6 min',
      category: 'Expert Advice',
      icon: '📅',
      tips: [
        'Refrigerators: 13 years average',
        'Washers & Dryers: 10-13 years',
        'Dishwashers: 9 years average',
        'Ovens & Ranges: 13-15 years'
      ]
    },
    {
      slug: 'energy-efficient-appliances',
      title: 'How to Make Your Appliances More Energy Efficient',
      excerpt: 'Save money on electricity with these proven tips for refrigerators, washers, dryers, and dishwashers. Small changes can reduce energy bills by 10-25% annually.',
      content: 'Energy-efficient operation saves money. Cold water washing, full loads, and proper maintenance reduce utility costs significantly.',
      date: 'December 28, 2024',
      readTime: '7 min',
      category: 'Expert Advice',
      icon: '⚡',
      tips: [
        'Wash clothes in cold water when possible',
        'Run dishwasher and washer with full loads only',
        'Clean refrigerator coils for 5-10% savings',
        'Air-dry dishes in dishwasher'
      ]
    },
    {
      slug: 'gas-smell-from-stove',
      title: 'Smell Gas From Your Stove? Do This Immediately',
      excerpt: 'Gas leaks are dangerous. Learn the immediate safety steps to take if you smell gas, when to call emergency services, and how to prevent gas leaks from ranges and ovens.',
      content: 'SAFETY FIRST: Smell gas? Don\'t use electrical switches. Open windows, evacuate, call 911 from outside, then call your gas company.',
      date: 'December 25, 2024',
      readTime: '4 min',
      category: 'Safety',
      icon: '⚠️',
      tips: [
        'Never ignore gas smell',
        'Don\'t use electrical switches or flames',
        'Evacuate immediately and call 911',
        'Schedule professional gas leak inspection'
      ]
    },
    {
      slug: 'refrigerator-water-filter',
      title: 'When to Change Your Refrigerator Water Filter',
      excerpt: 'Old filters reduce water flow, ice production, and water quality. Learn how often to change filters by brand (LG, Samsung, GE, Whirlpool) and signs it\'s time for replacement.',
      content: 'Change water filters every 6 months or 300 gallons. Old filters reduce water pressure and ice production.',
      date: 'December 22, 2024',
      readTime: '5 min',
      category: 'Refrigerator',
      icon: '💧',
      tips: [
        'Change every 6 months as standard rule',
        'Set phone reminder when installing new filter',
        'Reduced water flow = time to change',
        'Buy genuine filters for best performance'
      ]
    },
    {
      slug: 'dishwasher-not-draining',
      title: 'Dishwasher Not Draining? 7 Quick Fixes',
      excerpt: 'Standing water after a cycle? Check these 7 common causes: clogged filter, blocked drain hose, garbage disposal connection, and air gap. Most are easy DIY fixes.',
      content: 'Check filter first (5 minutes), then drain hose, then garbage disposal knockout plug. These fix 90% of drainage issues.',
      date: 'December 20, 2024',
      readTime: '6 min',
      category: 'Dishwasher',
      icon: '🚰',
      tips: [
        'Clean filter - most common cause',
        'Check drain hose for kinks',
        'Verify garbage disposal knockout removed',
        'Clean air gap if equipped'
      ]
    }
  ];

  const categories = ['all', 'Refrigerator', 'Dishwasher', 'Washer', 'Dryer', 'Oven', 'Expert Advice', 'Safety'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <>
      <Helmet>
        <title>Appliance Repair Tips & Expert Advice | FixitBay Blog</title>
        <meta 
          name="description" 
          content="Expert appliance repair tips, maintenance guides, and troubleshooting advice from FixitBay LLC. Learn how to fix and maintain refrigerators, washers, dryers, dishwashers & more." 
        />
        <meta 
          name="keywords" 
          content="appliance repair tips, refrigerator maintenance, dishwasher troubleshooting, dryer problems, washer error codes, oven calibration, appliance advice" 
        />
        <link rel="canonical" href="https://fixitbay.net/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "FixitBay Appliance Repair Blog",
            "description": "Expert appliance repair tips and maintenance guides",
            "url": "https://fixitbay.net/blog",
            "publisher": {
              "@type": "Organization",
              "name": "FixitBay LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fixitbay.net/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "FixitBay LLC"
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-16 px-4" 
          style={{ 
            background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)',
            paddingTop: '80px'
          }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Appliance Repair Tips & Advice</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Expert Tips to Keep Your Appliances Running
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Free maintenance guides, troubleshooting tips, and expert advice from certified appliance repair technicians.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#4A5568' }} />
                <input
                  type="text"
                  placeholder="Search for appliance tips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#86CBF0' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-6 px-4 bg-white border-b sticky top-16 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    selectedCategory === cat
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={selectedCategory === cat ? { background: 'linear-gradient(135deg, #C0362C 0%, #A02D24 100%)' } : {}}
                >
                  {cat === 'all' ? 'All Tips' : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && !searchTerm && (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8F4FA 0%, #C0E8F9 100%)' }}>
                    <div className="text-8xl">{featuredPost.icon}</div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ background: '#C0362C' }}>
                        Featured
                      </span>
                      <span className="text-sm" style={{ color: '#6B7280' }}>
                        <Tag className="w-4 h-4 inline mr-1" />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg mb-6" style={{ color: '#4A5568' }}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-6 text-sm" style={{ color: '#6B7280' }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} read
                      </span>
                    </div>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 text-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)' }}
                    >
                      Read Full Article <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {searchTerm && (
              <p className="text-lg mb-6" style={{ color: '#4A5568' }}>
                Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
              </p>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-6 flex items-center justify-center h-32" style={{ background: 'linear-gradient(135deg, #E8F4FA 0%, #F0F8FC 100%)' }}>
                    <div className="text-6xl group-hover:scale-110 transition-transform">{post.icon}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold" style={{ background: '#E8F4FA', color: '#032D55' }}>
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors" style={{ color: '#1A3B5D' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-3" style={{ color: '#6B7280' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                        style={{ color: '#C0362C' }}
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl" style={{ color: '#6B7280' }}>
                  No articles found. Try a different search term or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Read Our Blog */}
        <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #E8F4FA 0%, #F0F8FC 100%)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1A3B5D' }}>
              Why Trust Our Appliance Advice?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)' }}>
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Certified Technicians</h3>
                <p style={{ color: '#4A5568' }}>
                  Written by licensed professionals with years of hands-on repair experience across all major brands.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C0362C 0%, #A02D24 100%)' }}>
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Practical Tips</h3>
                <p style={{ color: '#4A5568' }}>
                  Real-world solutions you can apply today. DIY fixes, maintenance schedules, and when to call a pro.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF751F 0%, #E66A1C 100%)' }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>Always Updated</h3>
                <p style={{ color: '#4A5568' }}>
                  Fresh content based on the latest appliance technology and common issues we see in Bay Area homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Professional Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't fix it yourself? Our certified technicians are here to help with same-day service in San Francisco Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+17605435733"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C0362C 0%, #A02D24 100%)', color: 'white' }}
              >
                <Wrench className="w-5 h-5" />
                Call (760) 543-5733
              </a>
              <a 
                href="/book?go=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border-2 bg-white hover:bg-gray-50 transition-all"
                style={{ color: '#032D55', borderColor: 'white' }}
              >
                Book Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
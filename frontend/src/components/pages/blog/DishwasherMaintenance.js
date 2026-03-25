import React, { useMemo } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, Phone, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../Breadcrumbs';
import BlogRelatedLinks from '../../shared/BlogRelatedLinks';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';

const DishwasherMaintenance = () => {
  const schemas = useMemo(() => [
    { id: 'blogposting-schema', data: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "How to Maintain Your Dishwasher for Longer Life", "author": { "@type": "Person", "name": "Andrei", "jobTitle": "Licensed Appliance Technician", "worksFor": { "@type": "Organization", "name": "FixitBay LLC" } }, "publisher": { "@type": "Organization", "name": "FixitBay LLC" }, "datePublished": "2026-01-18", "dateModified": "2026-01-18", "url": "https://fixitbay.net/blog/dishwasher-maintenance" } },
  ], []);
  useSchemas(schemas);

  return (
    <>
      <SEOMetaTags
        title="How to Maintain Your Dishwasher for Longer Life | FixitBay"
        description="Simple dishwasher maintenance tips to prevent clogs, leaks, and odors. Clean filters, check spray arms, and maintain door seals."
        canonical="https://fixitbay.net/blog/dishwasher-maintenance"
        keywords="dishwasher maintenance, clean dishwasher filter, dishwasher care, prevent dishwasher problems, dishwasher longevity, San Francisco dishwasher service"
        ogType="article"
      />

      <article className="min-h-screen bg-gray-50">
        <section 
          className="relative py-16 px-4" 
          style={{ 
            background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)',
            paddingTop: '120px'
          }}
        >
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3829559/pexels-photo-3829559.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'How to Maintain Your Dishwasher for Longer Life' }
            ]} />
            
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold" style={{ background: '#C0362C', color: 'white' }}>
                <Tag className="w-4 h-4 mr-1" /> Dishwasher
              </span>
              <span className="text-white/80 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" /> January 18, 2026
              </span>
              <span className="text-white/80 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" /> 7 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Maintain Your Dishwasher for Longer Life
            </h1>
            
            <p className="text-xl text-white/90">
              Simple maintenance tips to prevent clogs, leaks, and odors. Learn how to clean filters, check spray arms, and maintain door seals. Keep your dishwasher running efficiently for 10+ years.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              
              <p className="text-lg mb-6" style={{ color: '#4A5568' }}>
                Your dishwasher is one of the hardest-working appliances in your home. With proper maintenance, a quality dishwasher should last 9-13 years. Neglect it, and you'll face frequent clogs, foul odors, poor cleaning performance, and costly repairs.
              </p>

              <p className="text-lg mb-8" style={{ color: '#4A5568' }}>
                The good news? Most dishwasher maintenance takes just minutes and can prevent 90% of common problems. Here's your complete guide:
              </p>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  1. Clean the Filter Monthly (Most Important!)
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Modern dishwashers use self-cleaning filters that trap food particles. When clogged, they cause poor drainage, dirty dishes, and foul smells.
                </p>
                <div className="p-4 rounded-lg mb-4" style={{ background: '#E8F4FA' }}>
                  <p className="font-semibold mb-2" style={{ color: '#032D55' }}>How to Clean the Filter:</p>
                  <ol className="list-decimal pl-5 space-y-2" style={{ color: '#4A5568' }}>
                    <li>Remove the bottom dish rack</li>
                    <li>Locate the filter assembly at the bottom center (usually a cylindrical mesh screen)</li>
                    <li>Twist and lift to remove (consult your manual if needed)</li>
                    <li>Rinse under hot water and scrub with a soft brush to remove debris</li>
                    <li>Reinstall by twisting back into place</li>
                  </ol>
                </div>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Frequency:</strong> Clean monthly for average use, bi-weekly if you run heavy loads or don't pre-rinse dishes.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  2. Inspect and Clean Spray Arms
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Spray arms distribute water throughout the dishwasher. Clogged spray arm holes lead to uneven cleaning and spots on dishes.
                </p>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  <strong>How to clean:</strong> Remove spray arms (they usually snap or twist off). Use a toothpick or small wire to clear any blockages in the spray holes. Rinse thoroughly and reinstall.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Frequency:</strong> Every 3-6 months, or whenever you notice poor cleaning performance.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  3. Wipe Down Door Seals and Edges
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Food particles and grime accumulate on the door gasket and edges, leading to leaks and mold growth.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>How to clean:</strong> Use a damp cloth with mild dish soap to wipe the rubber gasket around the door, the door edges, and the bottom of the door. Check for cracks or tears in the gasket.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Frequency:</strong> Weekly quick wipe, monthly deep clean.
                </p>
              </div>

              {/* ── MID-ARTICLE CTA ── */}
              <div data-testid="mid-cta" className="flex items-center justify-between flex-wrap gap-4 rounded p-6 my-8" style={{ background: '#0D1B2A', borderLeft: '4px solid #FF5722' }}>
                <div>
                  <p className="font-bold text-white text-base mb-1">Need appliance repair in San Francisco?</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Same-day service · $60 diagnostic · 180-day warranty</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a href="tel:7605435733" className="font-bold text-sm px-5 py-2 rounded" style={{ background: '#FF5722', color: '#fff', textDecoration: 'none' }}>Call (760) 543-5733</a>
                  <a href="/book" className="font-bold text-sm px-5 py-2 rounded border" style={{ background: 'transparent', color: '#fff', textDecoration: 'none', borderColor: 'rgba(255,255,255,0.4)' }}>Book online →</a>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  4. Run Hot Water Before Starting a Cycle
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Dishwashers clean best with hot water (120-150°F). If your water heater is far from the kitchen, the first water entering the dishwasher may be cold.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Pro tip:</strong> Run your kitchen faucet until the water is hot before starting the dishwasher. This ensures the first fill cycle uses hot water for better cleaning and dissolving detergent.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  5. Use the Right Amount of Detergent
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  More detergent ≠ cleaner dishes. Excess detergent leaves residue, clogs the filter faster, and can damage the pump.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Best practice:</strong> Use pods or follow the detergent manufacturer's recommended amount. If you have soft water, use even less.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  6. Leave the Door Ajar After Cycles
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Closing the door immediately after a cycle traps moisture inside, promoting mold, mildew, and musty odors.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Simple fix:</strong> Crack the door open for 30-60 minutes after the cycle ends to allow steam and moisture to escape. Many modern dishwashers have an "auto-open" feature that does this automatically.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  7. Run a Deep-Cleaning Cycle Monthly
                </h2>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  Even with regular maintenance, grease, limescale, and detergent buildup can accumulate inside the dishwasher.
                </p>
                <p className="text-lg mb-4" style={{ color: '#4A5568' }}>
                  <strong>How to deep clean:</strong> Place a dishwasher-safe cup filled with white vinegar on the top rack. Run a hot water cycle (empty dishwasher). Follow with a sprinkle of baking soda on the bottom and run a short hot cycle. This removes odors, grease, and buildup.
                </p>
                <p className="text-lg" style={{ color: '#4A5568' }}>
                  <strong>Frequency:</strong> Once a month.
                </p>
              </div>

              <div className="mb-10 p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, #E8F4FA 0%, #F0F8FC 100%)' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A3B5D' }}>
                  Quick Maintenance Checklist
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span style={{ color: '#4A5568' }}><strong>Monthly:</strong> Clean the filter and run a vinegar deep-clean cycle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span style={{ color: '#4A5568' }}><strong>Weekly:</strong> Wipe door seals and edges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span style={{ color: '#4A5568' }}><strong>Every 3-6 months:</strong> Inspect and clean spray arms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span style={{ color: '#4A5568' }}><strong>Always:</strong> Run hot water before starting, use proper detergent amounts, leave door ajar after cycles</span>
                  </li>
                </ul>
              </div>

              {/* ── Related Articles ── */}
              <div data-testid="related-articles" className="mb-10">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Related articles</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Dishwasher Not Draining? 7 Fixes to Try First', href: '/blog/dishwasher-not-draining' },
                    { title: 'Washer Error Codes Explained — What They Mean & How to Fix', href: '/blog/washer-error-codes' },
                  ].map((a, i) => (
                    <Link key={i} to={a.href} data-testid={`related-article-${i}`} className="flex items-center justify-between rounded p-4" style={{ background: '#F8F5F0', border: '1px solid rgba(0,0,0,0.06)', textDecoration: 'none' }}>
                      <span className="font-semibold text-sm" style={{ color: '#0D1B2A' }}>{a.title}</span>
                      <span className="font-bold text-sm ml-4 flex-shrink-0" style={{ color: '#FF5722' }}>Read article →</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-8 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #032D55 0%, #1A3B5D 100%)' }}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Dishwasher Not Performing? We Can Help!
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  Even with maintenance, dishwashers eventually need professional repairs. Our certified technicians service all major brands in SF Bay Area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+17605435733"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #C0362C 0%, #A02D24 100%)', color: 'white' }}
                  >
                    <Phone className="w-5 h-5" />
                    Call (760) 543-5733
                  </a>
                  <a 
                    href="/book?go=1"
                    target="_blank" rel="noopener noreferrer"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border-2 bg-white hover:bg-gray-50 transition-all"
                    style={{ color: '#032D55', borderColor: 'white' }}
                   aria-label="opens in new tab">
                    <Wrench className="w-5 h-5" />
                    Book Repair Online
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      <BlogRelatedLinks serviceHref="/dishwasher-repair" serviceLabel="Dishwasher Repair" />
        </article>
    </>
  );
};

export default DishwasherMaintenance;
import React, { useEffect } from 'react';
import BackButton from '../BackButton';
import { Calendar, Phone } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';

const RangeRepair = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEOMetaTags title="Range Repair | FixitBay LLC San Francisco" description="Same/next-day range repair in SF & Bay Area. Burner won't ignite, uneven heating, oven temp issues. $60 diagnostic applied to repair. 180-day warranty. Book online with FixitBay." canonical="https://fixitbay.net/range-repair" />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative hero py-12" style={{ background: 'linear-gradient(180deg, #A8D5FD 0%, #62C2E3 100%)' }}>
          <div className="container">
            <BackButton />
            <h1 className="h1 mb-4">Range Repair</h1>
            <p className="text-lg mb-8" style={{ color: '#1A3B5D' }}>
              Professional repair for gas and electric ranges. Licensed, insured, and backed by a 180-day warranty. $60 diagnostic applied to the repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/book?go=1" className="book-btn">
                <Calendar className="w-5 h-5 mr-2" /> Book Online
              </a>
              <a href="tel:+17605435733" className="contact-btn">
                <Phone className="w-5 h-5 mr-2" /> Call (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* Warranty badge row */}
        <section className="py-10">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="section-white text-center">
              <div className="text-3xl font-bold mb-2">$0</div>
              <div>Service Call with Repair</div>
            </div>
            <div className="badge-gold text-center">
              <div className="text-3xl font-bold mb-2">180 Days</div>
              <div>Warranty on Repairs & Labor</div>
            </div>
            <div className="section-white text-center">
              <div className="text-3xl font-bold mb-2">$60</div>
              <div>Diagnostic Only</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RangeRepair;

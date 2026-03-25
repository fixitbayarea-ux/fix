import React from 'react';
import { ShieldCheck, Tag, BadgeCheck } from 'lucide-react';

const HomePricing = () => (
  <section id="pricing" style={{ background: '#1A2F45', padding: '80px 0' }} data-testid="pricing-section">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <div className="text-center" style={{ marginBottom: 48 }}>
        <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>TRANSPARENT PRICING</div>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#FFFFFF' }}>No Surprises. Ever.</h2>
      </div>
      <div className="grid md:grid-cols-3" style={{ gap: 24, alignItems: 'stretch' }}>
        {[
          { icon: <ShieldCheck size={36} strokeWidth={1.8} />, title: '180-Day Warranty', body: 'Coverage on parts and labor.', featured: false },
          { icon: <Tag size={36} strokeWidth={1.8} />, title: '$60 Diagnostic Visit', body: 'Applied toward repair if you proceed.', featured: true },
          { icon: <BadgeCheck size={36} strokeWidth={1.8} />, title: 'No Hidden Fees', body: 'You approve the estimate before work starts.', featured: false },
        ].map(c => (
          <div key={c.title} className={`pricing-card relative ${c.featured ? 'pricing-card-featured' : 'pricing-card-default'}`} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 4, padding: '32px 18px 24px', border: c.featured ? '2px solid #FF5722' : '1px solid rgba(255,255,255,0.10)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }} data-testid={`pricing-card-${c.featured ? 'featured' : 'default'}`}>
            {c.featured && <span style={{ position: 'absolute', top: 10, left: 0, right: 0, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 10, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }} data-testid="pricing-badge">MOST ASKED</span>}
            <div style={{ color: '#FF5722', marginBottom: 20 }}>{c.icon}</div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: c.featured ? 18 : 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>{c.title}</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: c.featured ? 14 : 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.60)', fontWeight: 400 }}>{c.body}</p>
          </div>
        ))}
      </div>
      <p className="hidden lg:block text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 400, fontStyle: 'italic', marginTop: 32 }}>Typical repairs range $150&ndash;$400 after diagnosis</p>
    </div>
  </section>
);

export default HomePricing;

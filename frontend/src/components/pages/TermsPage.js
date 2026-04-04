import React, { useEffect, useMemo } from 'react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2B = { fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8 };
const B = { fontFamily: F, fontWeight: 700, color: '#1A1A1A' };
const SUB = { fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', margin: '16px 0 8px' };

const TOC = [
  { id: 'section-1', label: 'Services Provided' },
  { id: 'section-2', label: 'Appointments & Scheduling' },
  { id: 'section-3', label: 'Diagnostic Fee' },
  { id: 'section-4', label: 'Payment Terms' },
  { id: 'section-5', label: 'Warranty' },
  { id: 'section-6', label: 'Limitation of Liability' },
  { id: 'section-7', label: 'Governing Law' },
  { id: 'section-8', label: 'Contact & Disputes' },
];

const Dot = () => <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF5722', marginTop: 7, flexShrink: 0 }} />;
const Li = ({ children }) => (
  <div style={{ display: 'flex', gap: 8, padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
    <Dot />
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{children}</span>
  </div>
);

const SecH = ({ num, title, id }) => (
  <div id={id}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
      <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '3px 10px', borderRadius: 3, flexShrink: 0, whiteSpace: 'nowrap' }}>{num}</span>
      <h2 style={H2B}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.15)', marginBottom: 16 }} />
  </div>
);

const TermsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://fixitbay.net/terms" }] } }
  ], []);
  useSchemas(schemas);

  const secStyle = { marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(0,0,0,0.07)' };
  const lastSec = { marginBottom: 0 };

  return (
    <>
      <SEOMetaTags
        title="Terms of Service | FixitBay LLC Appliance Repair"
        description="Terms of Service for FixitBay LLC — appointment scheduling, diagnostic fee, payment terms, 180-day warranty, and liability for appliance repair in San Francisco Bay Area."
        canonical="https://fixitbay.net/terms"
        noindex={true}
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .tos-h1{font-size:36px !important}
          @media(max-width:767px){
            .tos-h1{font-size:24px !important}
            .tos-grid{grid-template-columns:1fr !important}
          }
          .toc-link{text-decoration:none;transition:color 0.15s}
          .toc-link:hover{color:#FF5722 !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="terms-hero" style={{ background: "linear-gradient(rgba(13,27,42,0.95),rgba(13,27,42,0.95)),url('/background_new2.webp')", backgroundSize: 'cover', backgroundPosition: 'center 60%', padding: '80px 24px 48px', textAlign: 'center', color: '#fff' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Terms of Service</span>
            </nav>
            <h1 className="tos-h1" data-testid="terms-h1" style={{ fontFamily: F, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Terms of Service</h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>FixitBay LLC Appliance Repair &amp; Maintenance</p>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Effective date: March 26, 2026 &middot; Last updated: March 26, 2026</p>
          </div>
        </section>

        {/* ━━━ 2. CONTENT GRID ━━━ */}
        <section data-testid="terms-content" style={{ background: '#F8F5F0', padding: '48px 24px 64px' }}>
          <div className="tos-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 40 }}>
            {/* Main content */}
            <div style={{ background: '#fff', borderRadius: 4, padding: '40px 36px', border: '1px solid rgba(255,87,34,0.1)' }}>
              <p style={P}>
                These Terms of Service ("Terms") govern your use of the services provided by <span style={B}>FixitBay LLC</span> ("FixitBay LLC," "we," "us," or "our"), a California limited liability company. By scheduling a repair, contacting us, or using our website, you agree to be bound by these Terms.
              </p>

              <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', margin: '32px 0' }} />

              {/* Section 1 */}
              <div style={secStyle}>
                <SecH num="01" title="Services Provided" id="section-1" />
                <p style={P}>
                  FixitBay LLC provides residential appliance repair and maintenance services in the San Francisco Bay Area, including San Francisco, the Peninsula (Daly City to Millbrae), and Marin County. Our services include, but are not limited to, repair and maintenance of:
                </p>
                <div style={{ marginTop: 12 }}>
                  <Li>Refrigerators and freezers</Li>
                  <Li>Washers and dryers</Li>
                  <Li>Dishwashers</Li>
                  <Li>Ovens, ranges, and cooktops</Li>
                  <Li>Ice makers and wine coolers</Li>
                  
                </div>
                <p style={{ ...P, marginTop: 16 }}>
                  All services are performed by licensed and insured technicians. FixitBay LLC holds California BHGS License #51001.
                </p>
              </div>

              {/* Section 2 */}
              <div style={secStyle}>
                <SecH num="02" title="Appointments & Scheduling" id="section-2" />
                <p style={SUB}>Booking</p>
                <p style={P}>
                  Appointments can be scheduled by phone at <span style={B}>(760) 543-5733</span>, via text, or through our online booking system at fixitbay.net/book. We offer same- or next-day appointment windows, subject to availability.
                </p>
                <p style={SUB}>Cancellations</p>
                <p style={P}>
                  We ask that you cancel or reschedule at least <span style={B}>2 hours before</span> your confirmed appointment window. Repeated no-shows or last-minute cancellations may result in a scheduling deposit requirement for future appointments.
                </p>
                <p style={SUB}>Access</p>
                <p style={P}>
                  You must ensure that our technician has safe and clear access to the appliance requiring service. If access is not available at the scheduled time, this may count as a no-show.
                </p>
              </div>

              {/* Section 3 */}
              <div style={secStyle}>
                <SecH num="03" title="Diagnostic Fee" id="section-3" />
                <p style={P}>
                  A diagnostic fee of <span style={B}>$60</span> is charged for each service visit. This fee covers the technician's travel, inspection, and diagnosis of your appliance.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Li>If you approve the repair, the $60 diagnostic fee is <span style={B}>applied as a credit</span> toward the total repair cost.</Li>
                  <Li>If you decline the repair, the $60 fee is retained as payment for the diagnostic service.</Li>
                  <Li>The diagnostic fee is non-refundable once the technician has arrived and performed the inspection.</Li>
                </div>
              </div>

              {/* Section 4 */}
              <div style={secStyle}>
                <SecH num="04" title="Payment Terms" id="section-4" />
                <p style={P}>
                  Payment is due upon completion of the repair unless otherwise agreed in writing. We accept the following payment methods:
                </p>
                <div style={{ marginTop: 12 }}>
                  <Li>Credit and debit cards (Visa, Mastercard, Amex, Discover)</Li>
                  <Li>Cash</Li>
                  <Li>Zelle, Venmo, and Apple Pay</Li>
                </div>
                <p style={{ ...P, marginTop: 16 }}>
                  A detailed invoice is provided for every service. If a repair requires ordering parts, a deposit may be required to cover the cost of parts before the follow-up visit.
                </p>
              </div>

              {/* Section 5 */}
              <div style={secStyle}>
                <SecH num="05" title="Warranty" id="section-5" />
                <p style={P}>
                  All repairs performed by FixitBay LLC are covered by a <span style={B}>180-day warranty</span> on both parts and labor, beginning on the date the repair is completed.
                </p>
                <p style={SUB}>Coverage</p>
                <div style={{ marginTop: 4 }}>
                  <Li>If the same issue recurs within 180 days, we will return and repair it at no additional charge.</Li>
                  <Li>Warranty covers the specific repair performed and the parts installed.</Li>
                </div>
                <p style={SUB}>Exclusions</p>
                <div style={{ marginTop: 4 }}>
                  <Li>Damage caused by misuse, neglect, power surges, flooding, or unauthorized third-party repair.</Li>
                  <Li>Pre-existing conditions unrelated to the original repair.</Li>
                  <Li>Cosmetic damage or wear-and-tear items not part of the original repair.</Li>
                  <Li>Appliances that have been moved or reinstalled after our service.</Li>
                </div>
                <p style={{ ...P, marginTop: 16 }}>
                  To make a warranty claim, contact us at <span style={B}>(760) 543-5733</span> or <a href="mailto:info@fixitbay.net" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>info@fixitbay.net</a> with a description of the issue.
                </p>
              </div>

              {/* Section 6 */}
              <div style={secStyle}>
                <SecH num="06" title="Limitation of Liability" id="section-6" />
                <p style={P}>
                  To the fullest extent permitted by California law, FixitBay LLC's total liability for any claim arising out of or related to our services shall not exceed the amount paid by you for the specific repair giving rise to the claim.
                </p>
                <p style={{ ...P, marginTop: 12 }}>
                  FixitBay LLC shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of use, lost profits, food spoilage, water damage from pre-existing conditions, or damage arising from circumstances beyond our reasonable control.
                </p>
                <p style={{ ...P, marginTop: 12 }}>
                  Nothing in these Terms limits liability that cannot be excluded or limited under applicable law, including liability for fraud or gross negligence.
                </p>
              </div>

              {/* Section 7 */}
              <div style={secStyle}>
                <SecH num="07" title="Governing Law" id="section-7" />
                <p style={P}>
                  These Terms shall be governed by and construed in accordance with the laws of the <span style={B}>State of California</span>, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved in the state or federal courts located in San Francisco County, California.
                </p>
              </div>

              {/* Section 8 */}
              <div style={lastSec}>
                <SecH num="08" title="Contact & Disputes" id="section-8" />
                <p style={P}>
                  If you have questions, concerns, or a dispute regarding our services or these Terms, please contact us directly. We are committed to resolving issues promptly and fairly.
                </p>
                <div style={{ background: '#F8F5F0', borderRadius: 4, border: '1px solid rgba(255,87,34,0.12)', padding: '20px 24px', marginTop: 16 }}>
                  <p style={{ ...P, marginBottom: 8 }}><span style={B}>FixitBay LLC</span></p>
                  <p style={{ ...P, marginBottom: 4 }}>1549 Franklin Street, Unit A</p>
                  <p style={{ ...P, marginBottom: 4 }}>San Francisco, CA 94109</p>
                  <p style={{ ...P, marginBottom: 4 }}>Phone: <a href="tel:+17605435733" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>(760) 543-5733</a></p>
                  <p style={P}>Email: <a href="mailto:info@fixitbay.net" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>info@fixitbay.net</a></p>
                </div>
                <p style={{ ...P, marginTop: 16 }}>
                  We encourage customers to reach out before filing any formal complaint. Most concerns can be resolved with a phone call or email within 1&ndash;2 business days.
                </p>
              </div>

              <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', margin: '40px 0 24px' }} />
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568', lineHeight: 1.6 }}>
                See also: <a href="/privacy-policy" style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</a>
              </p>
            </div>

            {/* Sidebar — TOC */}
            <div style={{ alignSelf: 'start', position: 'sticky', top: 100 }}>
              <div style={{ background: '#fff', borderRadius: 4, padding: '28px 24px', border: '1px solid rgba(255,87,34,0.1)' }}>
                <p style={{ ...EYE, marginBottom: 16 }}>Contents</p>
                <div style={{ borderBottom: '1px solid rgba(255,87,34,0.15)', marginBottom: 16 }} />
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" data-testid={`toc-${t.id}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < TOC.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none', textDecoration: 'none' }}>
                    <span style={{ fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', minWidth: 16 }}>{i + 1}</span>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: '#4A5568' }}>{t.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 3. FOOTER ━━━ */}
        <footer data-testid="terms-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TermsPage;

import React from 'react';

// Housecall Pro Customer Portal Integration
// Token: ad69fa02941649a5b5bfc9782226d332
// Org: FixitBay-LLC

const PORTAL_URL = 'https://client.housecallpro.com/customer_portal/request-link?token=ad69fa02941649a5b5bfc9782226d332';

const CustomerPortalButton = ({ className = '' }) => {
  const openPortal = () => {
    window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openPortal}
      className={`customer-portal-btn ${className}`}
      aria-label="Log in to customer portal"
      type="button"
    >
      Log in to Portal
    </button>
  );
};

export default CustomerPortalButton;

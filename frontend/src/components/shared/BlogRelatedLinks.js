import React from 'react';

const BlogRelatedLinks = ({ serviceHref, serviceLabel, cityHref = '/san-francisco-appliance-repair', cityLabel = 'San Francisco Appliance Repair' }) => (
  <nav aria-label="Related services" className="mt-12 py-8 px-6 rounded-2xl" style={{ background: '#F0F8FC' }}>
    <h2 className="text-lg font-bold mb-4" style={{ color: '#1A3B5D' }}>Related Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {serviceHref && (
        <a href={serviceHref} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all" style={{ textDecoration: 'none' }} data-testid="blog-related-service">
          <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}><span style={{ color: '#1A3B5D', fontWeight: 'bold', fontSize: '13px' }}>&#8594;</span></span>
          <span className="font-semibold text-sm" style={{ color: '#1A3B5D' }}>{serviceLabel}</span>
        </a>
      )}
      <a href={cityHref} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all" style={{ textDecoration: 'none' }} data-testid="blog-related-city">
        <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}><span style={{ color: '#1A3B5D', fontWeight: 'bold', fontSize: '13px' }}>&#8594;</span></span>
        <span className="font-semibold text-sm" style={{ color: '#1A3B5D' }}>{cityLabel}</span>
      </a>
      <a href="/services" className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all" style={{ textDecoration: 'none' }} data-testid="blog-related-services">
        <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}><span style={{ color: '#1A3B5D', fontWeight: 'bold', fontSize: '13px' }}>&#8594;</span></span>
        <span className="font-semibold text-sm" style={{ color: '#1A3B5D' }}>All Services</span>
      </a>
      <a href="/blog" className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all" style={{ textDecoration: 'none' }} data-testid="blog-related-blog">
        <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#E8F4FA' }}><span style={{ color: '#1A3B5D', fontWeight: 'bold', fontSize: '13px' }}>&#8594;</span></span>
        <span className="font-semibold text-sm" style={{ color: '#1A3B5D' }}>More Tips & FAQ</span>
      </a>
    </div>
  </nav>
);

export default BlogRelatedLinks;

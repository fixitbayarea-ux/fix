import React from 'react';

const RelatedServices = ({ title = 'Related Services', links = [] }) => {
  if (!links.length) return null;
  return (
    <nav aria-label={title} className="py-10" style={{ background: '#F0F8FC' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-5" style={{ color: '#1A3B5D' }}>{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              style={{ textDecoration: 'none' }}
              data-testid={`related-link-${i}`}
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#E8F4FA,#C0E8F9)' }}>
                <span style={{ color: '#1A3B5D', fontWeight: 'bold', fontSize: '14px' }}>&#8594;</span>
              </span>
              <span className="font-semibold text-sm" style={{ color: '#1A3B5D' }}>{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RelatedServices;

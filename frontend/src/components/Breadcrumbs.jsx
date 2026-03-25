import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Breadcrumbs({ trail = [] }){
  const location = useLocation();
  const [defaultTrail, setDefaultTrail] = useState([]);

  useEffect(() => {
    if (!trail || trail.length === 0) {
      const origin = 'https://fixitbay.net';
      const path = location.pathname || '/';
      const last = path.endsWith('/') ? path.slice(0, -1) : path;
      const lastName = decodeURIComponent(last.split('/').filter(Boolean).pop() || '');
      setDefaultTrail([
        { name: 'Home', url: `${origin}/` },
        { name: 'Services', url: `${origin}/#services` },
        { name: prettify(lastName), url: `${origin}${path}` },
      ]);
    }
  }, [trail, location.pathname]);

  const items = trail && trail.length ? trail : defaultTrail;
  if (!items.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.url
    }))
  };

  const scriptRef = useRef(null);
  useEffect(() => {
    const id = 'breadcrumb-schema-' + items.map(i => i.name).join('-');
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = id; document.head.appendChild(el); }
    el.textContent = JSON.stringify(jsonLd);
    scriptRef.current = id;
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, [jsonLd, items]);

  return (
    <nav className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center">
            <a href={it.url} className="hover:text-gray-700">{it.name}</a>
            {i !== items.length - 1 && <span className="mx-2">&rsaquo;</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function prettify(slug){
  if (!slug) return '';
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

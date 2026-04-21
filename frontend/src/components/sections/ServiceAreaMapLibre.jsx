import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_CITIES } from '../../data/cities';

const ServiceAreaMapLibre = React.memo(() => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const serviceCities = SERVICE_CITIES.filter(city =>
    ['San Francisco', 'Peninsula', 'North Bay'].includes(city.region)
  );

  const cityGroups = serviceCities.reduce((acc, city) => {
    if (!acc[city.region]) acc[city.region] = [];
    acc[city.region].push(city);
    return acc;
  }, {});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (mapContainer.current) observer.observe(mapContainer.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || map.current || !isIntersecting) return;

    Promise.all([
      import('maplibre-gl'),
      import('maplibre-gl/dist/maplibre-gl.css')
    ]).then(([maplibregl]) => {
      const MapLibre = maplibregl.default || maplibregl;

      map.current = new MapLibre.Map({
        container: mapContainer.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [-122.45, 37.75],
        zoom: 9.5,
        attributionControl: false
      });

      map.current.on('load', () => {
        setMapLoaded(true);
        serviceCities.forEach(city => {
          if (!city.coordinates || !Array.isArray(city.coordinates) || city.coordinates.length !== 2) return;
          const [lng, lat] = city.coordinates;
          if (isNaN(lng) || isNaN(lat)) return;

          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.width = '24px';
          el.style.height = '24px';
          el.style.cursor = 'pointer';
          el.title = city.name;

          const icon = document.createElement('div');
          icon.style.width = '100%';
          icon.style.height = '100%';
          icon.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTBjMCA3LTkgMTMtOSAxM3MtOS02LTktMTNhOSA5IDAgMCAxIDE4IDB6IiBmaWxsPSIjRkY1NzIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)';
          icon.style.backgroundSize = 'contain';
          icon.style.backgroundRepeat = 'no-repeat';
          icon.style.backgroundPosition = 'center';
          icon.style.transition = 'transform 0.2s ease';
          icon.style.transformOrigin = 'center center';
          icon.className = 'marker-icon';
          el.appendChild(icon);

          el.addEventListener('click', (e) => { e.stopPropagation(); window.location.href = city.path; });
          el.addEventListener('mouseenter', () => { icon.style.transform = 'scale(1.2)'; });
          el.addEventListener('mouseleave', () => { icon.style.transform = 'scale(1)'; });

          const marker = new MapLibre.Marker({ element: el }).setLngLat([lng, lat]).addTo(map.current);
          markersRef.current[city.name] = marker;
        });
      });
    }).catch(err => { if (process.env.NODE_ENV === 'development') console.error('Failed to load map:', err); });

    return () => { if (map.current) { map.current.remove(); map.current = null; } };
  }, [isIntersecting, serviceCities]);

  return (
    <section id="service-area" style={{ background: '#F8F5F0', paddingTop: 80, paddingBottom: 72 }} data-testid="service-area-section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center" style={{ marginBottom: 40 }}>
          <div className="hidden lg:block" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>OUR SERVICE AREA</div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 38, fontWeight: 800, color: '#0D1B2A' }}>Where We Serve</h2>
          <p className="hidden lg:block mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, lineHeight: 1.65, color: '#4A5568', maxWidth: 600, fontWeight: 500, marginTop: 12 }}>
            Serving San Francisco, the Peninsula, and Marin County.
          </p>
          <p className="lg:hidden text-sm" style={{ color: '#4A5568' }}>Professional appliance repair throughout the Bay Area</p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: 28 }}>
          {/* Map — hidden on mobile */}
          <div className="hidden lg:flex" style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #E5E2DD', background: '#fff', padding: 10, alignSelf: 'stretch', flexDirection: 'column' }}>
            <div
              ref={mapContainer}
              className="w-full overflow-hidden"
              style={{ flex: 1, minHeight: 420, borderRadius: 4, background: isIntersecting ? '#f3f4f6' : '#e5e7eb' }}
              role="img"
              aria-label="Service area map showing cities in San Francisco Bay Area"
              data-testid="service-area-map"
            >
              {!isIntersecting && (
                <div className="flex items-center justify-center h-full" style={{ color: '#4A5568' }}><MapPin size={48} /></div>
              )}
            </div>
          </div>

          {/* Cities List */}
          <div style={{ borderRadius: 4, border: '1px solid #E5E2DD', background: '#fff', padding: 28 }} data-testid="service-area-cities">
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 28 }}>Service Areas</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {Object.entries(cityGroups).map(([region, cities]) => (
                <div key={region}>
                  <h4 className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 700, color: '#FF5722', marginBottom: 12, gap: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <MapPin size={16} strokeWidth={2.5} /> {region}
                  </h4>
                  <div className="flex flex-wrap" style={{ gap: 8 }}>
                    {cities.map((city) => (
                      <a
                        key={city.name}
                        href={city.path}
                        className="city-tag"
                        style={{
                          fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 4,
                          background: '#fff', border: '1px solid #E5E2DD', color: '#0D1B2A',
                          textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#0D1B2A'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = '#E5E2DD'; }}
                        data-testid={`city-link-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {city.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 32 }}>
          <a href="/service-areas" style={{ fontFamily: 'Montserrat, sans-serif', display: 'inline-block', fontSize: 15, fontWeight: 700, color: '#FF5722', textDecoration: 'none', marginBottom: 8 }}>View all service areas &rarr;</a>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#4A5568', fontWeight: 500 }}>
            Don't see your city? Call{' '}
            <a href="tel:+17605435733" style={{ color: '#FF5722', fontWeight: 800, textDecoration: 'none' }}>(760) 543-5733</a>
            {' '}&mdash; we may still be able to help nearby.
          </p>
        </div>
      </div>
    </section>
  );
});

ServiceAreaMapLibre.displayName = 'ServiceAreaMapLibre';
export default ServiceAreaMapLibre;

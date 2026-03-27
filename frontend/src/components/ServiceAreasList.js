import React from 'react';

const ServiceAreasList = () => {
  const regions = [
    {
      name: 'San Francisco',
      cities: [{ name: 'San Francisco', slug: 'san-francisco' }]
    },
    {
      name: 'Peninsula',
      cities: [
        { name: 'Daly City', slug: 'daly-city' },
        { name: 'South San Francisco', slug: 'south-san-francisco' },
        { name: 'San Bruno', slug: 'san-bruno' },
        { name: 'Pacifica', slug: 'pacifica' },
        { name: 'Millbrae', slug: 'millbrae' },
        { name: 'Colma', slug: 'colma' },
        { name: 'Brisbane', slug: 'brisbane' },
        { name: 'Montara', slug: 'montara' },
      ]
    },
    {
      name: 'North Bay / Marin County',
      cities: [
        { name: 'San Rafael', slug: 'san-rafael' },
        { name: 'Novato', slug: 'novato' },
        { name: 'Mill Valley', slug: 'mill-valley' },
        { name: 'Sausalito', slug: 'sausalito' },
        { name: 'Belvedere Tiburon', slug: 'belvedere' },
        { name: 'Corte Madera', slug: 'corte-madera' },
        { name: 'San Quentin', slug: 'san-quentin' },
        { name: 'Larkspur', slug: 'larkspur' },
        { name: 'Greenbrae', slug: 'greenbrae' },
        { name: 'Ross', slug: 'ross' },
        { name: 'Fairfax', slug: 'fairfax' },
        { name: 'San Anselmo', slug: 'san-anselmo' },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {regions.map((region) => (
        <div key={region.name} className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4" style={{color:'#C0362C'}}>
            {region.name}
          </h3>
          <div className="space-y-2">
            {region.cities.map((city) => (
              <a
                key={city.slug}
                href={`/${city.slug}-appliance-repair`}
                className="block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 font-semibold text-sm"
                style={{color:'#1A3B5D', textDecoration: 'none'}}
              >
                {city.name}, CA &rarr;
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="md:col-span-3 mt-4 text-center">
        <p style={{color:'#4A5568', fontSize: '15px'}}>
          Not sure if we service your area? Call us at{' '}
          <a href="tel:+17605435733" style={{color:'#C0362C', fontWeight: 'bold'}}>(760) 543-5733</a>
          {' '}— we're always happy to help!
        </p>
      </div>
    </div>
  );
};

export default ServiceAreasList;

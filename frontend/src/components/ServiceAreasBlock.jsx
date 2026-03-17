import React from 'react';

const cities = [
  { name: 'San Francisco', href: '/san-francisco-appliance-repair' },
  { name: 'Daly City', href: '/daly-city-appliance-repair' },
  { name: 'South SF', href: '/south-san-francisco-appliance-repair' },
  { name: 'San Bruno', href: '/san-bruno-appliance-repair' },
  { name: 'Pacifica', href: '/pacifica-appliance-repair' },
  { name: 'Millbrae', href: '/millbrae-appliance-repair' },
  { name: 'Colma', href: '/colma-appliance-repair' },
  { name: 'Brisbane', href: '/brisbane-appliance-repair' },
  { name: 'Montara', href: '/montara-appliance-repair' },
  { name: 'Mill Valley', href: '/mill-valley-appliance-repair' },
  { name: 'San Rafael', href: '/san-rafael-appliance-repair' },
  { name: 'Sausalito', href: '/sausalito-appliance-repair' },
  { name: 'Belvedere Tiburon', href: '/belvedere-tiburon-appliance-repair' },
  { name: 'Corte Madera', href: '/corte-madera-appliance-repair' },
  { name: 'Larkspur', href: '/larkspur-appliance-repair' },
  { name: 'Greenbrae', href: '/greenbrae-appliance-repair' },
  { name: 'Ross', href: '/ross-appliance-repair' },
  { name: 'Fairfax', href: '/fairfax-appliance-repair' },
  { name: 'San Anselmo', href: '/san-anselmo-appliance-repair' },
  { name: 'Novato', href: '/novato-appliance-repair' },
];

export default function ServiceAreasBlock(){
  return (
    <section className="section-white" style={{marginBottom:24}}>
      <h2 className="h2" style={{color:'#1A3B5D'}}>Service Areas</h2>
      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {cities.map(c => (
          <li key={c.href}>
            <a href={c.href} data-ga="service_areas_click" data-ga-label={c.href.replace('-appliance-repair','').replace('/','')} className="hover:underline" style={{color:'#C0362C'}}>{c.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('especiais');

  const categories = [
    { id: 'especiais', label: 'Especiais da Casa' },
    { id: 'cervejas', label: 'Cervejas Artesanais' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'pratos', label: 'Pratos Principais' },
    { id: 'sobremesas', label: 'Sobremesas' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-gray-50" id="menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Nosso Cardápio</h2>
          
          <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <MenuSection category={activeCategory} />
        </div>
      </section>

      <Gallery />
      <Reviews />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
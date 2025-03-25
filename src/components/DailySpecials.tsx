import React from 'react';
import { useProducts } from '../hooks/useProducts';

export function DailySpecials() {
  const { products: specials, loading, error } = useProducts('especiais');

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Carregando especiais...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Erro ao carregar especiais</h2>
          <p className="text-center text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Especiais do Dia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special) => (
            <div key={special.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={special.image_url}
                  alt={special.name}
                  className="w-full h-full object-cover"
                />
                {special.discount && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                    {special.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{special.name}</h3>
                <p className="text-gray-600 mb-4">{special.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {special.discount
                      ? (special.price * (1 - special.discount / 100)).toFixed(2)
                      : special.price.toFixed(2)}
                  </span>
                  {special.discount && (
                    <span className="text-gray-500 line-through">R$ {special.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
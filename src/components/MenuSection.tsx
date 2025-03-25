import React from 'react';
import { useProducts } from '../hooks/useProducts';

interface MenuSectionProps {
  category: string;
}

export function MenuSection({ category }: MenuSectionProps) {
  const { products, loading, error } = useProducts(category);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-600 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Erro ao carregar produtos: {error}</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                {product.discount}% OFF
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">
                R$ {product.discount
                  ? (product.price * (1 - product.discount / 100)).toFixed(2)
                  : product.price.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-gray-500 line-through">R$ {product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
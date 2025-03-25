import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Interior do restaurante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Experimente o Melhor da Gastronomia
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Embarque em uma jornada culinária onde cada prato conta uma história e cada refeição se torna uma memória especial.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors flex items-center gap-2">
              Reservar Mesa
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
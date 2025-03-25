import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-9">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img src='./imagens/logo3.png'></img>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900">Início</a>
            <a href="#menu" className="text-gray-700 hover:text-gray-900">Cardápio</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contato</a>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Reservar Mesa
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Início</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Cardápio</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Sobre</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contato</a>
            <button className="w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Reservar Mesa
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
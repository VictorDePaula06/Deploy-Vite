import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">The Boua</h3>
            <p className="text-gray-400 mb-4">
              Experiência gastronômica única com pratos exclusivos e ambiente acolhedor.
            </p>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Horário de Funcionamento</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Segunda a Quinta: 18h - 23h</li>
              <li className="mb-2">Sexta e Sábado: 18h - 00h</li>
              <li className="mb-2">Domingo: 12h - 22h</li>
              <li className="mb-2 text-orange-500">Happy Hour: Seg-Sex 18h - 20h</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Contato</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Telefone: (11) 99999-9999</li>
              <li className="mb-2">Email: contato@theboua.com</li>
              <li className="mb-2">
                Endereço: Rua das Delícias, 123
                <br />
                Jardim Gourmet - São Paulo/SP
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Siga-nos nas redes sociais para novidades, promoções e eventos especiais!</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Boua. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
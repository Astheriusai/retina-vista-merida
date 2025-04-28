
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2020/01/logo-retina3.png"
              alt="Oftalmología Especializada Dr. Santander" 
              className="h-12 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-clinic-blue transition duration-300">
              Inicio
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-clinic-blue focus:outline-none transition duration-300 flex items-center">
                Servicios
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                <div className="py-2 px-4">
                  <Link to="/oftalmologia-integral" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Oftalmología Integral
                  </Link>
                  <Link to="/cirugia-catarata" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Cirugía de Catarata
                  </Link>
                  <Link to="/cirugia-refractiva" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Cirugía Refractiva
                  </Link>
                  <Link to="/laser" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Láser
                  </Link>
                  <Link to="/retina-vitreo" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Retina y Vítreo
                  </Link>
                  <Link to="/glaucoma" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Glaucoma
                  </Link>
                  <Link to="/cornea" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Córnea
                  </Link>
                  <Link to="/retinopatia-diabetica" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Retinopatía Diabética
                  </Link>
                  <Link to="/otros" className="block px-4 py-2 text-gray-800 hover:text-clinic-blue hover:bg-gray-100 rounded">
                    Otros
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/nosotros" className="px-3 py-2 text-gray-700 hover:text-clinic-blue transition duration-300">
              Nosotros
            </Link>
            <Link to="/contacto" className="px-3 py-2 text-gray-700 hover:text-clinic-blue transition duration-300">
              Contacto
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/agendar-cita" className="bg-clinic-blue text-white px-6 py-2 rounded-md hover:bg-clinic-dark transition duration-300">
              Agendar Cita
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="mobile-menu-button p-2 focus:outline-none"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white px-4 py-3 shadow-inner">
          <Link 
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
          >
            Inicio
          </Link>
          <div className="px-3 py-2 text-gray-700">
            <p className="font-medium mb-2">Servicios:</p>
            <Link 
              to="/oftalmologia-integral"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Oftalmología Integral
            </Link>
            <Link 
              to="/cirugia-catarata"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Cirugía de Catarata
            </Link>
            <Link 
              to="/cirugia-refractiva"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Cirugía Refractiva
            </Link>
            <Link 
              to="/laser"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Láser
            </Link>
            <Link 
              to="/retina-vitreo"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Retina y Vítreo
            </Link>
            <Link 
              to="/glaucoma"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Glaucoma
            </Link>
            <Link 
              to="/cornea"
              onClick={() => setIsMenuOpen(false)} 
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Córnea
            </Link>
            <Link 
              to="/retinopatia-diabetica"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Retinopatía Diabética
            </Link>
            <Link 
              to="/otros"
              onClick={() => setIsMenuOpen(false)}
              className="block pl-3 py-1 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
            >
              Otros
            </Link>
          </div>
          <Link 
            to="/nosotros"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
          >
            Nosotros
          </Link>
          <Link 
            to="/contacto"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 hover:text-clinic-blue rounded transition duration-300"
          >
            Contacto
          </Link>
          <div className="mt-3 px-3">
            <Link 
              to="/agendar-cita"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-clinic-blue text-white px-6 py-2 rounded-md hover:bg-clinic-dark transition duration-300"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

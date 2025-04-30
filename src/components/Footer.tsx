import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <>
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 py-[21px] px-[6px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Oftalmología Especializada<br />Dr. Santander</h2>
              <p className="text-sm text-gray-400 mb-4">
                El Dr. Juan Pablo Rivera Santander es Retinólogo y especialista en Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/oftalmologiaespecializadamerida" target="_blank" rel="noopener noreferrer" className="text-white hover:text-clinic-teal transition duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-semibold text-white mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/oftalmologia-integral" className="hover:text-clinic-teal transition duration-300">
                    Oftalmología Integral
                  </Link>
                </li>
                <li>
                  <Link to="/cirugia-catarata" className="hover:text-clinic-teal transition duration-300">
                    Cirugía de Catarata
                  </Link>
                </li>
                <li>
                  <Link to="/cirugia-refractiva" className="hover:text-clinic-teal transition duration-300">
                    Cirugía Refractiva
                  </Link>
                </li>
                <li>
                  <Link to="/laser" className="hover:text-clinic-teal transition duration-300">
                    Láser
                  </Link>
                </li>
                <li>
                  <Link to="/retina-vitreo" className="hover:text-clinic-teal transition duration-300">
                    Retina y Vítreo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/nosotros" className="hover:text-clinic-teal transition duration-300">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-clinic-teal transition duration-300">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to="/agendar-cita" className="hover:text-clinic-teal transition duration-300">
                    Agendar Cita
                  </Link>
                </li>
                <li>
                  <a href="https://www.doctoralia.com.mx/juan-pablo-rivera-santander/oftalmologo/yucatan" target="_blank" rel="noopener noreferrer" className="hover:text-clinic-teal transition duration-300">
                    Doctoralia
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-semibold text-white mb-4">Información de Contacto</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <Phone className="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" />
                  <span>+52 999 739 8637</span>
                </p>
                <p className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" />
                  <span className="break-all">info@oftalmologoespecializadosantander.com</span>
                </p>
                <p className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" />
                  <span>Calle 23 #311, X 30 y Calle 36 Diagonal (Av. García Lavin), Col. Montebello, C.P. 97113, Mérida, Yuc.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-gray-950 py-3">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>
              <p>CONSULTA ONLINE • Permiso de Publicidad: 203301202A0198</p>
            </div>
            <p className="mt-2 md:mt-0">
              © {new Date().getFullYear()} Todos los Derechos Reservados • Oftalmólogo Dr. Santander
            </p>
          </div>
        </div>
      </div>
    </>;
};
export default Footer;
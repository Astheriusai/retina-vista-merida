
import { Link } from 'react-router-dom';

interface ServicesMenuProps {
  className?: string;
}

const ServicesMenu = ({ className = "" }: ServicesMenuProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Menú de Servicios</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/oftalmologia-integral" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Oftalmología Integral
          </Link>
        </li>
        <li>
          <Link to="/cirugia-catarata" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Cirugía de Catarata
          </Link>
        </li>
        <li>
          <Link to="/cirugia-refractiva" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Cirugía Refractiva
          </Link>
        </li>
        <li>
          <Link to="/laser" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Láser
          </Link>
        </li>
        <li>
          <Link to="/retina-vitreo" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Manejo Especializado de Retina y Vítreo
          </Link>
        </li>
        <li>
          <Link to="/glaucoma" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Glaucoma
          </Link>
        </li>
        <li>
          <Link to="/cornea" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Córnea
          </Link>
        </li>
        <li>
          <Link to="/retinopatia-diabetica" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Retinopatía Diabética
          </Link>
        </li>
        <li>
          <Link to="/otros" className="text-gray-700 hover:text-clinic-blue transition duration-300 block py-2 px-3 hover:bg-gray-50 rounded">
            Otros
          </Link>
        </li>
      </ul>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <iframe 
          frameBorder="0" 
          scrolling="no" 
          allowTransparency
          title="Docplanner Booking Widget" 
          src="//www.doctoralia.com.mx/ajax/marketing/doctor/widget/small/juan-pablo-rivera-santander/null?customUtm=null&amp;id=0lazfy886w&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=https%3A%2F%2Foftalmologiaespecializadadrsantander.com%2Fcirugia-de-catarata%2F&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=false&amp;expand_calendar=false"
          style={{ border: "none", overflow: "hidden", width: "100%", height: "86px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ServicesMenu;

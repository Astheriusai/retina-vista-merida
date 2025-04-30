import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface ServicesMenuProps {
  className?: string;
}
const ServicesMenu = ({
  className = ""
}: ServicesMenuProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const services = [{
    title: "Oftalmología Integral",
    path: "/oftalmologia-integral",
    description: "Evaluación y tratamiento completo para todas las condiciones oculares."
  }, {
    title: "Cirugía de Catarata",
    path: "/cirugia-catarata",
    description: "Procedimientos avanzados con tecnología de última generación."
  }, {
    title: "Cirugía Refractiva",
    path: "/cirugia-refractiva",
    description: "Corrección permanente de defectos refractivos como miopía y astigmatismo."
  }, {
    title: "Láser",
    path: "/laser",
    description: "Tratamientos precisos y seguros con tecnología láser avanzada."
  }, {
    title: "Retina y Vítreo",
    path: "/retina-vitreo",
    description: "Diagnóstico y tratamiento especializado de enfermedades retinianas."
  }, {
    title: "Glaucoma",
    path: "/glaucoma",
    description: "Detección temprana y manejo integral del glaucoma."
  }, {
    title: "Córnea",
    path: "/cornea",
    description: "Tratamientos especializados para todas las condiciones corneales."
  }, {
    title: "Retinopatía Diabética",
    path: "/retinopatia-diabetica",
    description: "Manejo avanzado de las complicaciones oculares de la diabetes."
  }, {
    title: "Otros",
    path: "/otros",
    description: "Servicios adicionales como pterigión, estrabismo y blefaroplastia."
  }];
  return <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex justify-between items-center cursor-pointer mb-4 hover:bg-gray-50 p-2 rounded-md transition-colors" onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
        <h3 className="text-xl font-semibold text-gray-800">Menú de Servicios</h3>
        {isMenuExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </div>
      
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2">
          {services.map((service, index) => <li key={service.path} className="transform transition-transform duration-200 hover:translate-x-1">
              <Link to={service.path} className="block" onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
                <div className="py-2 px-3 rounded-md transition-all duration-300 hover:bg-gray-50 border border-transparent hover:border-gray-200">
                  <div className="flex items-center">
                    <span className={`block text-gray-700 transition-colors duration-300 ${hoverIndex === index ? 'text-clinic-blue font-medium' : ''}`}>
                      {service.title}
                    </span>
                  </div>
                  <div className={`text-xs text-gray-500 pl-2 transition-all duration-300 ${hoverIndex === index ? 'h-auto mt-1 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                    {service.description}
                  </div>
                </div>
              </Link>
            </li>)}
        </ul>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="mb-4 text-center">
          
        </div>
        <iframe frameBorder="0" scrolling="no" allowTransparency title="Docplanner Booking Widget" src="//www.doctoralia.com.mx/ajax/marketing/doctor/widget/small/juan-pablo-rivera-santander/null?customUtm=null&amp;id=0lazfy886w&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=https%3A%2F%2Foftalmologiaespecializadadrsantander.com%2Fcirugia-de-catarata%2F&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=false&amp;expand_calendar=false" style={{
        border: "none",
        overflow: "hidden",
        width: "100%",
        height: "86px"
      }}></iframe>
      </div>
    </div>;
};
export default ServicesMenu;
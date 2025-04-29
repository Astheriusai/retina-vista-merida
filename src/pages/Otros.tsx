
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';

const Otros = () => {
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.27.56-PM.jpeg" title="Otros Servicios" subtitle="Servicios adicionales especializados para el cuidado de sus ojos." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Otros Servicios</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pinguécula y pterigión</h3>
                <p className="text-gray-600 mb-4">
                  Una pinguécula es el crecimiento de una mancha o protuberancia amarilla en la conjuntiva del ojo, del lado cercano a la nariz. 
                  El pterigión, llamado comúnmente carnosidad en los ojos, es el crecimiento de tejido carnoso en la conjuntiva y que puede llegar 
                  a bloquear la visión al tapar la córnea. Ambas afecciones pueden ser causadas por la combinación de ojos secos y exposición a 
                  elementos ambientales, como viento, polvo y luz ultravioleta. Su tratamiento puede consistir en el uso de gotas o cirugía láser.
                </p>
                
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Estrabismo</h3>
                <p className="text-gray-600 mb-4">
                  El estrabismo es una condición en la que los ojos están desalineados y apuntan en direcciones diferentes. 
                  Esta afección es particularmente común en niños y en personas con parálisis cerebral, síndrome de Down, 
                  hidrocefalia y tumores cerebrales, entre otros. El tratamiento puede requerir el uso de un parche o cirugía.
                </p>
                
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Blefaroplastia</h3>
                <p className="text-gray-600 mb-4">
                  La blefaroplastia es la cirugía de párpados caídos; esta puede realizarse por razones estéticas o médicas. 
                  El paso de los años ocasiona que los párpados pierdan firmeza y tengan una apariencia caída, pudiendo llegar 
                  a bloquear la visión. La cirugía es ambulatoria.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>
      
      <InfoSections />
    </div>;
};
export default Otros;

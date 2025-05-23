
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
const Otros = () => {
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.27.56-PM.jpeg" title="Otros Servicios" subtitle="Servicios adicionales especializados para el cuidado de sus ojos." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Otros Servicios</h2>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://www.clinicasnovovision.com/wp-content/uploads/2015/04/pterigion1.jpg" alt="Pterigión" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Pinguécula y pterigión</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Una pinguécula es el crecimiento de una mancha o protuberancia amarilla en la conjuntiva del ojo, del lado cercano a la nariz. 
                      El pterigión, llamado comúnmente carnosidad en los ojos, es el crecimiento de tejido carnoso en la conjuntiva y que puede llegar 
                      a bloquear la visión al tapar la córnea.
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Ambas afecciones pueden ser causadas por la combinación de ojos secos y exposición a 
                  elementos ambientales, como viento, polvo y luz ultravioleta. Su tratamiento puede consistir en el uso de gotas o cirugía láser.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-clinic-blue mb-2">Opciones de tratamiento:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
                    <li>Gotas lubricantes para aliviar los síntomas</li>
                    <li>Gotas anti-inflamatorias para reducir la irritación</li>
                    <li>Cirugía de escisión para casos avanzados</li>
                    <li>Injerto conjuntival o de membrana amniótica</li>
                    <li>Tratamiento con radiación beta</li>
                  </ul>
                </div>
                
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://www.eurolaser.cat/wp-content/uploads/2021/01/Cuando-operar-estrabismo-infantil.jpg" alt="Estrabismo" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Estrabismo</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      El estrabismo es una condición en la que los ojos están desalineados y apuntan en direcciones diferentes. 
                      Esta afección es particularmente común en niños y en personas con parálisis cerebral, síndrome de Down, 
                      hidrocefalia y tumores cerebrales, entre otros.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-clinic-blue mb-2">Tipos de estrabismo:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-sm sm:text-base">Esotropía</p>
                      <p className="text-xs sm:text-sm text-gray-600">Cuando un ojo se desvía hacia adentro</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-sm sm:text-base">Exotropía</p>
                      <p className="text-xs sm:text-sm text-gray-600">Cuando un ojo se desvía hacia afuera</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-sm sm:text-base">Hipertropía</p>
                      <p className="text-xs sm:text-sm text-gray-600">Cuando un ojo se desvía hacia arriba</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-sm sm:text-base">Hipotropía</p>
                      <p className="text-xs sm:text-sm text-gray-600">Cuando un ojo se desvía hacia abajo</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    El tratamiento puede requerir el uso de un parche, lentes correctivos, ejercicios oculares o cirugía según la gravedad y tipo de estrabismo.
                  </p>
                </div>
                
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://www.cliniem.com/wp-content/uploads/2025/02/ojeras-post.jpg" alt="Blefaroplastia" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Blefaroplastia</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      La blefaroplastia es la cirugía de párpados caídos; esta puede realizarse por razones estéticas o médicas. 
                      El paso de los años ocasiona que los párpados pierdan firmeza y tengan una apariencia caída, pudiendo llegar 
                      a bloquear la visión.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-clinic-blue mb-2">Información sobre la cirugía:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
                    <li>Es un procedimiento ambulatorio</li>
                    <li>Se realiza con anestesia local</li>
                    <li>La recuperación completa toma de 1 a 2 semanas</li>
                    <li>Ayuda a mejorar tanto la visión como la apariencia</li>
                    <li>Puede reducir bolsas, exceso de piel y arrugas alrededor de los ojos</li>
                  </ul>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    La blefaroplastia puede realizarse en el párpado superior, inferior o ambos, según las necesidades del paciente. Esta intervención puede mejorar significativamente la calidad de vida al aumentar el campo visual y dar un aspecto más juvenil y descansado.
                  </p>
                </div>
                
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu className="sticky top-24" />
            </div>
          </div>
        </div>
      </section>
      
      <DoctorInfoBanner />
      <InfoSections />
    </div>;
};
export default Otros;


import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
import { Link } from 'react-router-dom';

const Cornea = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://www.aao.org/detail/image.axd?id=26e0deed-6b10-4604-9c96-68eee9701e28"
        title="Córnea"
        subtitle="Especialistas en el diagnóstico y tratamiento de enfermedades corneales."
        credentials={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Córnea</h2>
              <p className="text-gray-600 mb-6">
                La córnea es la ventana transparente del ojo y su salud es crucial para una buena visión. Ofrecemos tratamientos especializados para todas las condiciones que afectan a la córnea.
              </p>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="https://aio-oftalmologia.com/wp-content/uploads/De-que-se-ocupa-un-oftalmologo.jpg" 
                    alt="Estructura de la córnea" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    La córnea es una estructura transparente en forma de cúpula que cubre la parte frontal del ojo. Actúa como una ventana que permite la entrada de luz y protege contra elementos externos como polvo, gérmenes y la radiación UV. La córnea también ayuda a enfocar la luz para que se pueda ver con claridad.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones que tratamos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratocono</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Úlceras corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Distrofias corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratitis</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Lesiones corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Ojo seco severo</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Degeneración corneal</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Procedimientos disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trasplante de córnea</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Cross-linking</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratoplastia lamelar</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratoplastia penetrante</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Anillos intraestromales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>PRK y PTK</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Estructura del ojo</h3>
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://www.vista-laser.com/wp-content/uploads/2022/05/estructura-ojo.png" 
                      alt="Anatomía del ojo" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700">
                      La córnea es la primera capa del ojo que entra en contacto con la luz. Es una estructura transparente que permite el paso de la luz y la enfoca hacia la retina. Su salud y transparencia son fundamentales para una buena visión. Cualquier alteración en su forma, transparencia o hidratación puede afectar significativamente la calidad visual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Queratocono</h3>
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://salauno.com.mx/wp-content/uploads/2023/07/ojo-con-queratocono-salauno.jpg" 
                      alt="Queratocono" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700">
                      El queratocono es una condición progresiva donde la córnea se adelgaza y protruye hacia adelante en forma de cono, causando visión distorsionada. Ofrecemos tratamientos como el cross-linking para detener su progresión y anillos intraestromales o lentes de contacto especiales para mejorar la visión.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías avanzadas</h3>
                <p className="text-gray-600 mb-4">
                  Utilizamos las técnicas más modernas para el diagnóstico y tratamiento de enfermedades corneales:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Topografía corneal</h4>
                    <p>Mapa detallado de la superficie de la córnea para detectar irregularidades.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Microscopía especular</h4>
                    <p>Evaluación de las células endoteliales de la córnea.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">OCT de segmento anterior</h4>
                    <p>Imágenes detalladas de todas las capas de la córnea.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contacto" className="bg-clinic-blue text-white px-8 py-3 rounded-md hover:bg-clinic-teal transition duration-300 inline-block">
                  Contáctanos
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>
      
      <DoctorInfoBanner />
      <InfoSections />
    </div>
  );
};

export default Cornea;


import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
import { Link } from 'react-router-dom';

const RetinaVitreo = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgBWYvvW0YVMRqNvAPpNmns5l8EBEOfg3qg&s"
        title="Retina y Vítreo"
        subtitle="Diagnóstico y tratamiento especializado de enfermedades de la retina y el vítreo."
        credentials={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Retina y Vítreo</h2>
              <p className="text-gray-600 mb-6">
                Ofrecemos un servicio integral para el diagnóstico y tratamiento de las patologías que afectan a la retina y el vítreo, utilizando la tecnología más avanzada.
              </p>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgBWYvvW0YVMRqNvAPpNmns5l8EBEOfg3qg&s" 
                    alt="Retina y Vítreo" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    La retina es una capa de tejido sensible a la luz en la parte posterior del ojo que convierte la luz en señales nerviosas que son enviadas al cerebro. El vítreo es un gel transparente que llena el espacio entre la retina y el cristalino. Ambas estructuras son fundamentales para una buena visión.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones que tratamos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Desprendimiento de retina</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Degeneración macular</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Retinopatía diabética</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Membranas epirretinianas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Agujero macular</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Oclusiones venosas y arteriales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tumores intraoculares</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Tratamientos disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Fotocoagulación láser</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Inyecciones intravítreas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Vitrectomía</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Cirugía de desprendimiento de retina</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Cirugía combinada catarata-retina</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecnología de vanguardia</h3>
                <p className="text-gray-600 mb-6">
                  Contamos con equipos de última generación para el diagnóstico y tratamiento de enfermedades de la retina:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Tomografía de Coherencia Óptica (OCT)</h4>
                    <p>Permite ver imágenes en alta resolución de las diferentes capas de la retina y detectar alteraciones mínimas.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Angiografía Fluoresceínica</h4>
                    <p>Permite evaluar la circulación de la retina y detectar áreas de fuga o isquemia retiniana.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Ecografía ocular</h4>
                    <p>Permite visualizar estructuras del ojo cuando los medios oculares no son transparentes.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">OCT-Angiografía</h4>
                    <p>Tecnología no invasiva que permite visualizar los vasos sanguíneos de la retina sin necesidad de inyectar contraste.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://www.ioba.es/wp-content/uploads/2021/03/RetinaVitreo_Desprendimiento_Vitreo_11.jpg" 
                      alt="Desprendimiento de vítreo" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Desprendimiento de vítreo posterior</h3>
                    <p className="text-gray-700">
                      El desprendimiento de vítreo posterior ocurre cuando el gel vítreo se separa de la retina. Es una condición común asociada con el envejecimiento y puede manifestarse como "moscas volantes" o destellos de luz. Aunque generalmente es benigno, en algunos casos puede conducir a complicaciones como desgarros o desprendimiento de retina.
                    </p>
                  </div>
                </div>
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

export default RetinaVitreo;

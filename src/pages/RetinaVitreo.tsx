
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';

const RetinaVitreo = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://www.aao.org/data/upload/2018/01/08/retina-patients.jpg"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones que tratamos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Desprendimiento de retina</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Degeneración macular</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Retinopatía diabética</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Membranas epirretinianas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecnología de vanguardia</h3>
                <p className="text-gray-600">
                  Contamos con equipos de última generación para el diagnóstico y tratamiento de enfermedades de la retina, incluyendo OCT, angiografía fluoresceínica y láser retinal.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetinaVitreo;


import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones que tratamos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratocono</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Úlceras corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Distrofias corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trasplante de córnea</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías avanzadas</h3>
                <p className="text-gray-600">
                  Utilizamos las técnicas más modernas para el diagnóstico y tratamiento de enfermedades corneales, incluyendo topografía corneal, microscopía especular y cross-linking.
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
    </div>
  );
};

export default Cornea;

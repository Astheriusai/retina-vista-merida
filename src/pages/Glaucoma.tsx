
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';

const Glaucoma = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://www.glaucoma.org/wp-content/uploads/2021/01/iStock-1205850312-2048x1365.jpg"
        title="Glaucoma"
        subtitle="Diagnóstico temprano y tratamiento efectivo del glaucoma."
        credentials={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Glaucoma</h2>
              <p className="text-gray-600 mb-6">
                El glaucoma es una enfermedad que daña el nervio óptico y puede causar pérdida de visión. Ofrecemos diagnóstico temprano y tratamientos personalizados para cada paciente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Servicios disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tonometría</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Campimetría computarizada</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>OCT de nervio óptico</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trabeculoplastia láser</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tratamientos disponibles</h3>
                <p className="text-gray-600">
                  Ofrecemos una variedad de opciones de tratamiento, desde gotas oftálmicas hasta procedimientos quirúrgicos avanzados, adaptados a las necesidades específicas de cada paciente.
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

export default Glaucoma;


import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';

const Laser = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://eyeprocenter.com/wp-content/uploads/2021/04/iStock-1213365875-1200x628.jpeg"
        title="Tratamientos con Láser"
        subtitle="Tecnología de vanguardia para tratamientos precisos y seguros."
        credentials={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tratamientos con Láser</h2>
              <p className="text-gray-600 mb-6">
                En nuestra clínica, utilizamos la tecnología láser más avanzada para tratar diversas condiciones oculares con precisión y seguridad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Tratamientos disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Fotocoagulación láser</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Capsulotomía YAG</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Iridotomía láser</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trabeculoplastia láser</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beneficios del tratamiento con láser</h3>
                <p className="text-gray-600 mb-4">
                  Los tratamientos con láser ofrecen múltiples ventajas, incluyendo mayor precisión, menor tiempo de recuperación y menor riesgo de complicaciones en comparación con los procedimientos quirúrgicos tradicionales.
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

export default Laser;

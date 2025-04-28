
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';

const CirugiaRefractiva = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://www.opeluce.com.pe/blog/wp-content/uploads/2024/05/opeluce-blog-cirugia-refractiva.jpg"
        title="Cirugía Refractiva"
        subtitle="Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva."
        credentials={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cirugía Refractiva</h2>
              <p className="text-gray-600 mb-6">
                Se llama cirugía refractiva al procedimiento quirúrgico que corrige o mejora la visión, por medio de láser, para quitar la dependencia de los lentes. La operación suele llevarse a cabo en pacientes con:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones que tratamos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Miopía</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Astigmatismo</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Hipermetropía</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Presbicia</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="https://inof.es/wp-content/uploads/2019/07/como-se-realiza-cirugia-refractiva.jpg"
                  alt="Cirugía Refractiva Procedimiento"
                  className="rounded-lg shadow-lg w-full mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Resultados de la cirugía</h3>
                <p className="text-gray-600">
                  Para obtener resultados favorables de la cirugía refractiva es indispensable que el paciente no tenga otras enfermedades en los ojos. Asimismo, se debe entender que, si bien el procedimiento permite que ya no debas usar lentes, es posible que con el paso del tiempo vuelvas a requerir de anteojos para realizar ciertas actividades.
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

export default CirugiaRefractiva;

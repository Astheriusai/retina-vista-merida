import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
import { Link } from 'react-router-dom';
const Glaucoma = () => {
  return <div>
      <HeroSection backgroundImage="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/K7ARY35KSNFJJBWCSZGWCI7HQU.png" title="Glaucoma" subtitle="Diagnóstico temprano y tratamiento efectivo del glaucoma." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Glaucoma</h2>
              <p className="text-gray-600 mb-6">
                El glaucoma es una enfermedad que daña el nervio óptico y puede causar pérdida de visión. Ofrecemos diagnóstico temprano y tratamientos personalizados para cada paciente.
              </p>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img alt="Anatomía del glaucoma" className="rounded-lg shadow-md w-full h-auto" src="https://medlineplus.gov/spanish/ency/images/ency/fullsize/9349.jpg" />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    El glaucoma es conocido como "el ladrón silencioso de la visión" ya que en sus etapas iniciales no presenta síntomas. A medida que progresa, causa daño irreversible al nervio óptico, generalmente debido a una presión ocular elevada. Un diagnóstico y tratamiento temprano son fundamentales para preservar la visión.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Tipos de glaucoma</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma de ángulo abierto</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma de ángulo cerrado</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma de tensión normal</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma congénito</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma secundario</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Servicios de diagnóstico</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tonometría (medición de la presión intraocular)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Gonioscopia (evaluación del ángulo de drenaje)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Campimetría computarizada</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>OCT de nervio óptico</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Paquimetría corneal</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Opciones de tratamiento</h3>
                <p className="text-gray-600 mb-6">
                  Ofrecemos una variedad de opciones de tratamiento para el glaucoma, adaptadas a las necesidades específicas de cada paciente:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Medicamentos</h4>
                    <p>Gotas oftálmicas para reducir la presión intraocular y proteger el nervio óptico.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Tratamiento con láser</h4>
                    <p>Procedimientos como la trabeculoplastia láser que mejoran el drenaje del fluido ocular.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2">Cirugía de glaucoma</h4>
                    <p>Procedimientos como la trabeculectomía o implantes de drenaje para casos avanzados.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://www.venturacountylasik.com/wp-content/uploads/eye-anatomy-of-glaucoma.jpg" alt="Anatomía del ojo con glaucoma" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Anatomía del glaucoma</h3>
                    <p className="text-gray-700">
                      En un ojo normal, el humor acuoso fluye desde la cámara posterior del ojo, alrededor del iris, hacia la cámara anterior, y se drena a través de una estructura llamada malla trabecular. En el glaucoma, este drenaje se ve obstruido, causando un aumento de presión intraocular que daña el nervio óptico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">¿Quién debe hacerse revisiones de glaucoma?</h3>
                <p className="text-gray-700 mb-4">
                  Se recomienda realizar exámenes para detectar glaucoma a todas las personas mayores de 40 años, especialmente si tienen factores de riesgo como:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Antecedentes familiares de glaucoma</li>
                  <li>Presión ocular elevada</li>
                  <li>Miopía alta</li>
                  <li>Diabetes</li>
                  <li>Hipertensión arterial</li>
                  <li>Uso prolongado de corticoides</li>
                  <li>Origen afroamericano, hispano o asiático</li>
                </ul>
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
    </div>;
};
export default Glaucoma;
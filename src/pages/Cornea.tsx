import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
import { Link } from 'react-router-dom';
const Cornea = () => {
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.30.57-PM-1.jpeg" title="Córnea" subtitle="Tratamientos especializados para todas las condiciones corneales." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Especialista en Córnea</h2>
              <p className="text-gray-600 mb-6">
                La córnea es la ventana transparente del ojo. Ofrecemos diagnóstico y tratamiento de alta especialización para todas las patologías que afectan a esta estructura vital.
              </p>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img alt="Evaluación de córnea" className="rounded-lg shadow-md w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl4c4LFeLI9D-RiboXsaA6DRS_pBoNCUAsckWhuDobrJfPYHRpty0H438Lrx1zfpeU4c&usqp=CAU" />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    La córnea es una estructura transparente que cubre la parte anterior del ojo. Tiene un papel fundamental en la visión, ya que proporciona aproximadamente el 70% del poder refractivo del ojo. Las enfermedades corneales pueden afectar drásticamente la calidad visual y requieren una atención especializada.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Patologías corneales tratadas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Queratocono</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Distrofias corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Úlceras e infecciones corneales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Ojo seco</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Degeneración corneal</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Traumatismos corneales</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Tratamientos disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trasplante de córnea</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Crosslinking corneal</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Anillos intraestromales</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trasplantes lamelares</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tratamiento de ojo seco</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tratamiento con plasma rico en plaquetas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Anatomía de la córnea</h3>
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://www.vista-laser.com/wp-content/uploads/2022/05/estructura-ojo.png" alt="Estructura del ojo" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700">
                      La córnea consta de varias capas: epitelio, membrana de Bowman, estroma, membrana de Descemet y endotelio. Cada capa tiene funciones específicas y su alteración puede causar diferentes patologías. La transparencia corneal es fundamental para una visión clara y nítida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Queratocono: una enfermedad progresiva</h3>
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img src="https://salauno.com.mx/wp-content/uploads/2023/07/ojo-con-queratocono-salauno.jpg" alt="Queratocono" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700">
                      El queratocono es una enfermedad degenerativa de la córnea que provoca que esta se adelgace y adopte una forma cónica. Esto causa distorsión visual, astigmatismo irregular y progresivo deterioro de la visión. El diagnóstico temprano es fundamental para ralentizar su progresión mediante tratamientos como el crosslinking corneal.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Síntomas del queratocono:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Visión borrosa o distorsionada</li>
                        <li>Sensibilidad a la luz y deslumbramiento</li>
                        <li>Cambios frecuentes en la graduación</li>
                        <li>Dificultad para ver de noche</li>
                      </ul>
                    </div>
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
    </div>;
};
export default Cornea;
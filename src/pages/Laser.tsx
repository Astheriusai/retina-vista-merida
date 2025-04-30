import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
import { Link } from 'react-router-dom';

const Laser = () => {
  return <div>
      <HeroSection backgroundImage="https://eyeprocenter.com/wp-content/uploads/2021/04/iStock-1213365875-1200x628.jpeg" title="Tratamientos con Láser" subtitle="Tecnología de vanguardia para tratamientos precisos y seguros." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tratamientos con Láser</h2>
              <p className="text-gray-600 mb-6">
                En nuestra clínica, utilizamos la tecnología láser más avanzada para tratar diversas condiciones oculares con precisión y seguridad.
              </p>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2ewPz7b9LTALfl4tNQLECtDgIc9WVINN8StNqF4V0nmHHqAGSPvECJyATqVVwW0ljnw&usqp=CAU" 
                    alt="Tratamiento láser ocular" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    La tecnología láser ha revolucionado la oftalmología, permitiendo realizar procedimientos altamente precisos y mínimamente invasivos. Los tratamientos láser ofrecen recuperaciones más rápidas, menos dolor y mejores resultados para muchas condiciones oculares.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Tipos de tratamientos láser</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Cirugía refractiva LASIK</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>PRK (Queratectomía fotorrefractiva)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Fotocoagulación láser para retinopatía diabética</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Iridotomía láser para glaucoma</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Capsulotomía YAG después de cirugía de cataratas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Trabeculoplastia láser para glaucoma</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Condiciones tratadas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Errores refractivos (miopía, hipermetropía, astigmatismo)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Opacidad capsular posterior</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Retinopatía diabética</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Glaucoma</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Degeneración macular</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Desgarros de retina</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo se realiza una cirugía láser?</h3>
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="https://clinicadeojoslincoln.com/wp-content/uploads/2015/08/laserterapia-fotocoagulacion.jpg" 
                    alt="Procedimiento de cirugía láser" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <img 
                    src="https://blog.videre.mx/hs-fs/hubfs/ojos-.jpg?width=473&name=ojos-.jpg" 
                    alt="Procedimiento de cirugía láser" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Se emplea anestesia local para insensibilizar el ojo. A continuación, se coloca un sostenedor para mantener los párpados abiertos. 
                  Se emplea un láser o bisturí para abrir el tejido corneal y, finalmente, se aplica el láser. Se debe notar que, 
                  desde el momento en que se abre el tejido corneal, la visión del paciente se oscurece completamente; 
                  la visión regresa hasta terminada la intervención quirúrgica. Para la recuperación no es necesario aplicar puntos.
                </p>
                <p className="text-gray-600 mb-4">
                  Una vez concluida la operación deberás cubrir tus ojos para evitar exposición directa a la luz del sol, 
                  así como evitar frotarlos. Al terminar el periodo de recuperación, que puede tomar entre 1 a 7 días, 
                  recuperarás la visión sin la necesidad de anteojos.
                </p>
                <p className="text-gray-600 mb-4">
                  A pesar de esto, debes tener expectativas realistas. Con el paso de los años puede que vuelvas a necesitar 
                  lentes o algún otro procedimiento por un motivo diferente.
                </p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ventajas de los tratamientos láser</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 text-clinic-blue">Precisión</h4>
                    <p className="text-sm">Los láseres permiten realizar tratamientos con extrema precisión, minimizando el daño a los tejidos circundantes.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 text-clinic-blue">Mínimamente invasivos</h4>
                    <p className="text-sm">Menor riesgo de infección y complicaciones en comparación con la cirugía tradicional.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 text-clinic-blue">Recuperación rápida</h4>
                    <p className="text-sm">Tiempos de recuperación más cortos y menor necesidad de hospitalización.</p>
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
              <ServicesMenu className="sticky top-24" />
            </div>
          </div>
        </div>
      </section>
      
      <DoctorInfoBanner />
      <InfoSections />
    </div>;
};
export default Laser;

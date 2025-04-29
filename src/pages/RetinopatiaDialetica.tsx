
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';

const RetinopatiaDialetica = () => {
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.40.36-PM.jpeg" title="Retinopatía Diabética" subtitle="Diagnóstico y tratamiento especializado de la retinopatía diabética." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Retinopatía Diabética</h2>
              
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="https://www.nei.nih.gov/sites/default/files/health-images/Normal_macula_1_labeled_0.jpg" 
                    alt="Retina normal vs. retinopatía diabética" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700">
                    La retinopatía diabética es una complicación de la diabetes en la que se dañan los vasos sanguíneos que conducen a la retina. 
                    De no recibir el tratamiento adecuado de forma oportuna puede conducir a la pérdida completa de la visión.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Síntomas</h3>
                  <img 
                    src="https://eyeclops.com.mx/wp-content/uploads/post-que-es-retinopatia-diabetica-01.jpg" 
                    alt="Síntomas de retinopatía diabética" 
                    className="rounded-lg shadow-sm mb-4 w-full h-40 object-cover"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Aparición de manchas flotantes en el campo visual</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Visión borrosa</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Colores alterados</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Zonas oscuras en el campo visual</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Factores de riesgo</h3>
                  <img 
                    src="https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-05/Complications_Retinopathy.jpg" 
                    alt="Factores de riesgo" 
                    className="rounded-lg shadow-sm mb-4 w-full h-40 object-cover"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Padecer diabetes tipo 1 o tipo 2</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Presión arterial alta</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tabaquismo</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Embarazos</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Insuficiencia renal</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 my-6">
                Si la persona cuenta con factores de riesgo y presenta alguno de los síntomas, debe acudir con un oftalmólogo especialista inmediatamente.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Etapas de la retinopatía diabética</h3>
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
                    <img 
                      src="https://www.beyeopticianschool.com/wp-content/uploads/2021/07/diabetic-retinopathy-stages.jpg" 
                      alt="Etapas de retinopatía" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="font-medium">Retinopatía no proliferativa leve</p>
                        <p className="text-sm text-gray-600">Aparecen pequeñas dilataciones en los vasos sanguíneos de la retina.</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="font-medium">Retinopatía no proliferativa moderada y severa</p>
                        <p className="text-sm text-gray-600">Los vasos sanguíneos que nutren la retina se bloquean, causando isquemia retiniana.</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="font-medium">Retinopatía proliferativa</p>
                        <p className="text-sm text-gray-600">Las áreas de la retina con isquemia desarrollan nuevos vasos sanguíneos frágiles que pueden sangrar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tratamiento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <img 
                    src="https://www.penhmed.com/wp-content/uploads/2022/05/eye-injection.jpg" 
                    alt="Inyección intravítrea" 
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                  <img 
                    src="https://drnitinguptaeyehospital.com/wp-content/uploads/2020/06/Laser-Surgery.jpg" 
                    alt="Láser para retinopatía" 
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-6">
                  El tratamiento irá en función de si se trata de una retinopatía diabética en etapa inicial o si se encuentra en una etapa más avanzada. 
                  Si apenas comienza la afección es posible que tan solo haya seguimiento médico. Si, por el contrario, el padecimiento ha avanzado, 
                  una operación será necesaria.
                </p>
                <div className="bg-clinic-blue/5 p-6 rounded-lg border border-clinic-blue/10 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Opciones de tratamiento:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="font-medium">Fotocoagulación con láser</p>
                      <p className="text-sm text-gray-600">Sella o destruye los vasos sanguíneos anormales que sangran.</p>
                    </li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="font-medium">Inyecciones intravítreas</p>
                      <p className="text-sm text-gray-600">Medicamentos anti-VEGF que reducen la formación de vasos sanguíneos anormales.</p>
                    </li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="font-medium">Vitrectomía</p>
                      <p className="text-sm text-gray-600">Cirugía para eliminar sangre y tejido cicatricial del vítreo.</p>
                    </li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="font-medium">Control de diabetes</p>
                      <p className="text-sm text-gray-600">Fundamental para prevenir la progresión de la retinopatía.</p>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-6 font-light text-sm text-center">"Reconocido por su enorme profesionalismo, gran preparación y calidez humana, el Dr. Juan Pablo Rivera atiende a sus pacientes en su consultorio en Mérida. Te invitamos a visitarnos o a ponerte en contacto para obtener más información y conocer el precio de una cirugía."</p>
                <Link to="/contacto" className="bg-clinic-blue px-6 py-2 rounded-md text-white font-medium hover:bg-clinic-teal transition duration-300 inline-block">
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
export default RetinopatiaDialetica;

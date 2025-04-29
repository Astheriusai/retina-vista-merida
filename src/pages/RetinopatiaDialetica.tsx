import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
const RetinopatiaDialetica = () => {
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.40.36-PM.jpeg" title="Retinopatía Diabética" subtitle="Diagnóstico y tratamiento especializado de la retinopatía diabética." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Retinopatía Diabética</h2>
              <p className="text-gray-600 mb-6">
                La retinopatía diabética es una complicación de la diabetes en la que se dañan los vasos sanguíneos que conducen a la retina. 
                De no recibir el tratamiento adecuado de forma oportuna puede conducir a la pérdida completa de la visión.
              </p>

              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Síntomas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Aparición de manchas flotantes en el campo visual</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Visión borrosa</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Colores alterados</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Zonas oscuras en el campo visual</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Factores de riesgo</h3>
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

              

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tratamiento</h3>
                <p className="text-gray-600 mb-6">
                  El tratamiento irá en función de si se trata de una retinopatía diabética en etapa inicial o si se encuentra en una etapa más avanzada. 
                  Si apenas comienza la afección es posible que tan solo haya seguimiento médico. Si, por el contrario, el padecimiento ha avanzado, 
                  una operación será necesaria.
                </p>
                <p className="text-gray-600 mb-6 font-light text-sm text-center">"Reconocido por su enorme profesionalismo, gran preparación y calidez humana, el Dr. Juan Pablo Rivera atiende a sus pacientes en su consultorio en Mérida. Te invitamos a visitarnos o a ponerte en contacto para obtener más información y conocer el precio de una cirugía."</p>
                <Link to="/contacto" className="bg-clinic-blue px-6 py-2 rounded-md text-white font-medium hover:bg-clinic-teal transition duration-300 inline-block">
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
    </div>;
};
export default RetinopatiaDialetica;
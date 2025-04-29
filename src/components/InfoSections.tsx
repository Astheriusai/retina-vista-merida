
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const InfoSections = () => {
  return (
    <>
      {/* Retinopatía Diabética Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.40.36-PM.jpeg"
              alt="Retinopatía Diabética"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-2">Retinopatía Diabética</h2>
              <p className="mb-4 max-w-3xl">
                Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <p className="text-sm">
                Ced. Profesional: 11513357 | Ced. Especialidad: 11747970 | Permiso de Publicidad: 203301202A0198
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Retinopatía Diabética</h3>
            <p className="text-gray-600 mb-6">
              La retinopatía diabética es una complicación de la diabetes en la que se dañan los vasos sanguíneos que conducen a la retina. 
              De no recibir el tratamiento adecuado de forma oportuna puede conducir a la pérdida completa de la visión.
            </p>
            
            <Link to="/contacto" className="inline-block mb-8">
              <Button className="bg-clinic-blue hover:bg-clinic-teal">
                Contáctanos
              </Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-clinic-blue">Síntomas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Aparición de manchas flotantes en el campo visual</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Visión borrosa</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Colores alterados</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Zonas oscuras en el campo visual</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-clinic-blue">Factores de riesgo</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Padecer diabetes tipo 1 o tipo 2</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Presión arterial alta</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Tabaquismo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Embarazos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>Insuficiencia renal</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Si la persona cuenta con factores de riesgo y presenta alguno de los síntomas, debe acudir con un oftalmólogo especialista inmediatamente.
            </p>
            
            <Link to="/contacto" className="inline-block mb-8">
              <Button className="bg-clinic-blue hover:bg-clinic-teal">
                Contáctanos
              </Button>
            </Link>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tratamiento</h3>
              <p className="text-gray-600 mb-6">
                El tratamiento irá en función de si se trata de una retinopatía diabética en etapa inicial o si se encuentra en una etapa más avanzada. 
                Si apenas comienza la afección es posible que tan solo haya seguimiento médico. Si, por el contrario, el padecimiento ha avanzado, 
                una operación será necesaria.
              </p>
              <p className="text-gray-600 mb-6 font-light text-sm italic">
                Reconocido por su enorme profesionalismo, gran preparación y calidez humana, el Dr. Juan Pablo Rivera atiende a sus 
                pacientes en su consultorio en Mérida. Te invitamos a visitarnos o a ponerte en contacto para obtener más información 
                y conocer el precio de una cirugía.
              </p>
              
              <Link to="/contacto">
                <Button className="bg-clinic-blue hover:bg-clinic-teal">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Otros Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.27.56-PM.jpeg"
              alt="Otros Servicios"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-2">Otros Servicios</h2>
              <p className="mb-4 max-w-3xl">
                Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <p className="text-sm">
                Ced. Profesional: 11513357 | Ced. Especialidad: 11747970 | Permiso de Publicidad: 203301202A0198
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pinguécula y pterigión</h3>
            <p className="text-gray-600 mb-6">
              Una pinguécula es el crecimiento de una mancha o protuberancia amarilla en la conjuntiva del ojo, del lado cercano a la nariz. 
              El pterigión, llamado comúnmente carnosidad en los ojos, es el crecimiento de tejido carnoso en la conjuntiva y que puede llegar 
              a bloquear la visión al tapar la córnea. Ambas afecciones pueden ser causadas por la combinación de ojos secos y exposición a 
              elementos ambientales, como viento, polvo y luz ultravioleta. Su tratamiento puede consistir en el uso de gotas o cirugía láser.
            </p>
            
            <Link to="/contacto" className="inline-block mb-8">
              <Button className="bg-clinic-blue hover:bg-clinic-teal">
                Contáctanos
              </Button>
            </Link>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Estrabismo</h3>
            <p className="text-gray-600 mb-6">
              El estrabismo es una condición en la que los ojos están desalineados y apuntan en direcciones diferentes. 
              Esta afección es particularmente común en niños y en personas con parálisis cerebral, síndrome de Down, 
              hidrocefalia y tumores cerebrales, entre otros. El tratamiento puede requerir el uso de un parche o cirugía.
            </p>
            
            <Link to="/contacto" className="inline-block mb-8">
              <Button className="bg-clinic-blue hover:bg-clinic-teal">
                Contáctanos
              </Button>
            </Link>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Blefaroplastia</h3>
            <p className="text-gray-600 mb-6">
              La blefaroplastia es la cirugía de párpados caídos; esta puede realizarse por razones estéticas o médicas. 
              El paso de los años ocasiona que los párpados pierdan firmeza y tengan una apariencia caída, pudiendo llegar 
              a bloquear la visión. La cirugía es ambulatoria.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-clinic-blue text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">¿Necesitas una Consulta?</h3>
              <p className="max-w-2xl">
                Agenda una cita con el Dr. Juan Pablo Rivera Santander y recibe la mejor atención oftalmológica especializada en Mérida.
              </p>
            </div>
            <div>
              <Link to="/agendar-cita">
                <Button variant="secondary" className="bg-white text-clinic-blue hover:bg-gray-100">
                  Agendar Cita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;

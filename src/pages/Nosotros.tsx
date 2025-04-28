
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import DoctorInfoBanner from '../components/DoctorInfoBanner';

const Nosotros = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-10.48.15-AM.jpeg"
        title="Nosotros"
        subtitle="Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva."
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre el Doctor</h2>
                
                <p className="text-gray-700 mb-6">
                  El Dr. Juan Pablo Santander es un especialista en oftalmología clínica y quirúrgica con alta especialidad en Retina y Alta especialidad en Córnea, Segmento Anterior y Cirugía Refractiva.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Reconocido por su elevado grado de preparación y excelencia en el estudio, ha realizado estudios de posgrado en algunas de las instituciones médicas de mayor renombre de México y Latinoamérica. De la misma forma, cuenta con la experiencia de diplomados y diversos cursos.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Ha sido invitado como ponente en numerosos congresos especializados de oftalmología sobre operación láser y diferentes procedimientos en México. Asimismo, cuenta con certificaciones internacionales, como del International Council of Ophthalmology.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Certificado por el Consejo Mexicano de Oftalmologia, y miembro del Colegio de Oftalmólogo de Yucatán.
                </p>
                
                <p className="text-gray-700 mb-8">
                  Respaldado por una extensa trayectoria, actualmente sostiene consultas privadas de alta especialidad oftalmológica en Mérida, Yucatán. El Dr. Juan Pablo Rivera Santander es un especialista de ojos comprometido con el bienestar de sus pacientes.
                </p>

                <div className="my-12">
                  <iframe 
                    title="Certificado Doctoralia"
                    src="https://widgets.doctoralia.com.mx/doctor/widget/certificate/juan-pablo-rivera-santander?customUtm=null&id=zg3un4dfzn&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Foftalmologiaespecializadadrsantander.com%2Fcirugia-de-catarata%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" 
                    width="100%" 
                    height="300" 
                    frameBorder="0"
                  ></iframe>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Curriculum Vitae</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <h4 className="font-semibold mb-2">Título de médico cirujano</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Egresado de la Universidad Autónoma de Guadalajara – Diciembre 2010</li>
                    <li>Internado Rotatorio de Pregrado Hospital Centro Médico Puerta de Hierro – Guadalajara, Jalisco</li>
                    <li>Examen Profesional de Titulación: 21 de Julio del 2012 Hospital "Ángel Leaño", Universidad Autónoma de Guadalajara Zapopan, Jalisco. Calificación 100/100. Aprobado y Título con Mención Honorífca</li>
                    <li>Promedio Académico de la Carrera Medico Cirujano: 93.7, 5to lugar de la generación de un total de 227 graduados</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2">Título de especialista en oftalmología</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Título otorgado por la Universidad Nacional Autónoma de México. Examen de grado año 2016</li>
                    <li>Residencia en Oftalmología Clínica y Quirúrgica . Instituto de Oftalmología "Fundación Privada Conde de Valenciana"</li>
                    <li>Primer lugar en examen anual Académico durante el segundo año de residencia</li>
                    <li>Primer lugar en examen anual Académico durante el tercer año de residencia</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2">Título de alta Especialidad Retina Clínica y Quirúrgica</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Alta especialidad realizada en el Hospital Central Militar durante un periodo de 2 años. 2016</li>
                    <li>Cirugia de Vitrectomía posterior y Facovitrectomía</li>
                    <li>Cerclaje escleral</li>
                    <li>Aplicación de medicamentos intravítreos</li>
                    <li>Retinopexia neumática</li>
                    <li>Tratamiento de Retinopatía del prematuro</li>
                    <li>Aplicación de fotocoagulación láser</li>
                    <li>Aplicación de terapia fotodinámica</li>
                    <li>Cirugía de retina endoscópica</li>
                    <li>Fluoroangiografías retinianas</li>
                    <li>Cirugia de Retina asistida con tecnología 3D, NGUINITI</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2">Título de alta Especialidad Córnea, Segmento Anterior y Cirugía Refractiva</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Alta especialidad realizada en el Hospital Central Militar año 2018</li>
                    <li>Cirugía de catarata por facoemulsifcación con implante de lentes intraoculares premium</li>
                    <li>Cirugía de catarata asistida por láser de femtosegundo</li>
                    <li>Implante de lentes intraoculares fáquicos en cámara posterior</li>
                    <li>Implante de segmentos intraestromales: Técnica manual y asistida con láser de femtosegundo</li>
                    <li>Cirugía refractiva LASIK para tratamiento de miopía, hipermetropía y astigmatismo</li>
                    <li>Cirugía refractiva LASIK personalizada, asistida por Topolyzer</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <h4 className="font-semibold mb-2">Actividades laborales actuales</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Consulta privada de alta especialidad en clínica oftalmológica Cliniteq MID</li>
                    <li>Consulta privada de alta especialidad en clínica oftalmológica Medytec</li>
                  </ul>
                </div>
                
                <div className="bg-clinic-blue/10 p-6 rounded-lg shadow-sm border border-clinic-blue/20 mb-8">
                  <h4 className="font-semibold mb-3 text-clinic-dark">Certificaciones e Información Profesional</h4>
                  <p className="text-gray-700 mb-2">
                    Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Egresado del Hospital Central Militar CDMX.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Médico Cirujano, Universidad Autónoma de Guadalajara, Ced. Profesional: 11513357
                  </p>
                  <p className="text-gray-700">
                    Médico Oftalmólogo, Universidad Nacional Autónoma de México, Ced. Especialidad: 11747970
                  </p>
                  <p className="text-gray-700 mt-2">
                    Permiso de Publicidad: 203301202A0198
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>

      <DoctorInfoBanner />
    </div>
  );
};

export default Nosotros;


import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import DoctorInfoBanner from '../components/DoctorInfoBanner';

const CirugiaCatarata = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://149350968.v2.pressablecdn.com/wp-content/uploads/2022/03/cataract491x367.jpg"
        title="Cirugía de Catarata"
        subtitle="Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva."
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Cirugía de Catarata</h2>
                
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://www.aarp.org/content/dam/aarp/health/conditions_treatments/2019/01/1140-normal-and-cataract-eye-esp.jpg" 
                      alt="Catarata ocular" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700">
                      Una catarata es la formación de una opacidad en el lente natural que refracta la luz dentro del ojo. Cuando se padece de cataratas, la visión a través del lente, llamado cristalino, se asemeja a una ventana empañada.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Los principales síntomas incluyen:</h3>
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://www.bogotalaser.com/wp-content/uploads/2024/12/1-todo-sobre-las-cataratas-768x560.webp" 
                      alt="Síntomas de cataratas" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Visión opaca o borrosa</li>
                      <li>Dificultad para ver de noche</li>
                      <li>Ver halos alrededor de fuentes de luz</li>
                      <li>Necesidad de más luz para realizar actividades</li>
                      <li>Necesidad de cambiar frecuentemente la prescripción de los anteojos</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contacto" 
                    className="bg-clinic-blue text-white px-8 py-3 rounded-md hover:bg-clinic-teal transition duration-300 inline-block"
                  >
                    Contáctanos
                  </Link>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">¿A qué edad se generan las cataratas?</h3>
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YHWGUD44Y5HANNDSDVIJVFSPZE.jpg" 
                      alt="Desarrollo de cataratas" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 mb-4">
                      Las cataratas se desarrollan con mayor frecuencia en adultos mayores como consecuencia de cambios naturales en los ojos que comienzan a partir de los 40 años de edad, como la desintegración de las proteínas del cristalino. Es relativamente normal que los adultos mayores presenten un cierto grado de opacidad en los cristalinos después de los 60 años, aunque es posible que los problemas de visión no ocurran sino hasta tiempo después.
                    </p>
                    
                    <p className="text-gray-700 font-semibold mb-2">Algunos de los factores de riesgo que contribuyen a la formación de cataratas incluyen:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Herencia genética</li>
                      <li>Problemas médicos, como diabetes</li>
                      <li>Lesiones oculares</li>
                      <li>Larga exposición al sol</li>
                      <li>El uso de algunos medicamentos, como corticoesteroides</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Tratamiento</h3>
                <p className="text-gray-700 mb-4">
                  El único tratamiento efectivo para las cataratas es una cirugía correctiva. La operación consiste en extraer el cristalino y reemplazarlo con un lente artificial. El procedimiento, el cual es ambulatorio y no suele requerir de más de 30 minutos, aproximadamente, se lleva a cabo con anestesia local.
                </p>
                <p className="text-gray-700 mb-8">
                  Lo más probable es que la visión mejore tras pocos días de la cirugía. Para garantizar resultados óptimos es indispensable que se sigan las indicaciones del oftalmólogo, como evitar frotarse los ojos o usar protección ocular durante el periodo de recuperación.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700">
                    Reconocido entre especialistas por su enorme profesionalismo y calidez humana, el Dr. Juan Pablo Rivera Santander atiende a sus pacientes en su consultorio en Mérida.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contacto" 
                    className="bg-clinic-blue text-white px-8 py-3 rounded-md hover:bg-clinic-teal transition duration-300 inline-block"
                  >
                    Contáctanos
                  </Link>
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

export default CirugiaCatarata;


import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
import ServiceCard from '../components/ServiceCard';
import DoctorInfoBanner from '../components/DoctorInfoBanner';

const Index = () => {
  const services = [
    {
      title: "Oftalmología Integral",
      description: "Diagnóstico y tratamiento de todas las afecciones oculares por un especialista altamente capacitado.",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=500&h=300",
      link: "/oftalmologia-integral"
    },
    {
      title: "Cirugía de Catarata",
      description: "Procedimientos avanzados para eliminar las cataratas y mejorar significativamente la visión.",
      image: "https://149350968.v2.pressablecdn.com/wp-content/uploads/2022/03/cataract491x367.jpg",
      link: "/cirugia-catarata"
    },
    {
      title: "Cirugía Refractiva",
      description: "Corrección permanente de miopía, astigmatismo e hipermetropía con la más alta tecnología.",
      image: "https://www.opeluce.com.pe/blog/wp-content/uploads/2024/05/opeluce-blog-cirugia-refractiva.jpg",
      link: "/cirugia-refractiva"
    }
  ];

  return (
    <div>
      <HeroSection 
        backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-1.30.57-PM.jpeg"
        title="Dr. Juan Pablo Rivera Santander"
        subtitle="El Dr. Juan Pablo Rivera Santander es Retinólogo y especialista en Córnea, Segmento Anterior y Cirugía Refractiva. Entrenado en las instituciones con mayores avances tecnológicos y de más prestigio en México y Latinoamérica, destaca por su gran profesionalismo e incomparable calidez humana."
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Oftalmología Especializada</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sin importar si se trata del tratamiento más pequeño o una operación láser, te esperamos en nuestro consultorio en Mérida, Yucatán. El bienestar de tus ojos es nuestra prioridad.
            </p>
            <div className="mt-6">
              <Link 
                to="/contacto" 
                className="bg-clinic-blue text-white px-8 py-3 rounded-md hover:bg-clinic-teal transition duration-300"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/servicios" 
              className="inline-flex items-center text-clinic-blue hover:text-clinic-teal transition duration-300 text-lg"
            >
              Ver todos nuestros servicios
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <DoctorInfoBanner />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Atención Especializada para sus Ojos</h2>
              <p className="text-gray-600 mb-6">
                El Dr. Juan Pablo Rivera Santander es un especialista en oftalmología clínica y quirúrgica con alta especialidad en Retina y Alta especialidad en Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <p className="text-gray-600 mb-6">
                Reconocido por su elevado grado de preparación y excelencia en el estudio, ha realizado estudios de posgrado en algunas de las instituciones médicas de mayor renombre de México y Latinoamérica.
              </p>

              <div className="bg-gray-100 border-l-4 border-clinic-teal p-4 rounded">
                <p className="italic text-gray-700">
                  "En Oftalmología Especializada Dr. Santander nos comprometemos con el cuidado integral de su salud visual, utilizando la tecnología más avanzada y un enfoque personalizado para cada paciente."
                </p>
              </div>

              <div className="mt-8">
                <Link 
                  to="/nosotros" 
                  className="bg-clinic-dark text-white px-8 py-3 rounded-md hover:bg-clinic-blue transition duration-300"
                >
                  Conocer más
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clinic-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas una Consulta?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agenda una cita con el Dr. Juan Pablo Rivera Santander y recibe la mejor atención oftalmológica especializada en Mérida.
          </p>
          <Link 
            to="/agendar-cita" 
            className="bg-white text-clinic-blue px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 inline-block"
          >
            Agendar Cita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

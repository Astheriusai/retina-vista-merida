
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  credentials?: boolean;
}

const HeroSection = ({ backgroundImage, title, subtitle, credentials = true }: HeroSectionProps) => {
  return (
    <div 
      className="hero-section flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-overlay container mx-auto px-6 text-center py-16 md:py-24">
        <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto animate-slide-in">{title}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl mb-8 animate-slide-in">{subtitle}</p>
          {credentials && (
            <div className="mt-4 bg-black/30 backdrop-blur-sm p-4 rounded-lg inline-block animate-fade-in">
              <p className="text-sm md:text-base">
                Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <p className="text-sm mt-2">
                Ced. Profesional: 11513357 | Ced. Especialidad: 11747970 | Permiso de Publicidad: 203301202A0198
              </p>
            </div>
          )}
          <div className="mt-8">
            <Link 
              to="/agendar-cita" 
              className="bg-clinic-blue px-8 py-3 rounded-md text-white font-medium hover:bg-clinic-teal transition duration-300 animate-fade-in"
            >
              Agenda una Cita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  credentials?: boolean;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  credentials = true
}: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  return <div 
    className="hero-section relative flex items-center justify-center text-white" 
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="content-overlay container relative z-10 mx-auto text-center py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 lg:px-20 bg-[#091e1e]/40">
        <h1 className="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto animate-slide-in">{title}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl mb-8 animate-slide-in">{subtitle}</p>
          {credentials && <div className="mt-4 bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg inline-block animate-fade-in">
              <p className="text-xs sm:text-sm md:text-base">
                Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
              </p>
              <p className="text-xs sm:text-sm mt-2">
                Ced. Profesional: 11513357 | Ced. Especialidad: 11747970 | Permiso de Publicidad: 203301202A0198
              </p>
            </div>}
          <div className="mt-8">
            
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;

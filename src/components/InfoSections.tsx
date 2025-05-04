
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const InfoSections = () => {
  const isMobile = useIsMobile();
  
  return <>
      {/* Consultation Banner */}
      <section className="text-white bg-[#068ad0] py-[12px]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2 text-base sm:text-lg">¿Necesitas una Consulta?</h3>
              <p className="max-w-2xl text-xs sm:text-sm">
                Agenda una cita con el Dr. Juan Pablo Rivera Santander y recibe la mejor atención oftalmológica especializada en Mérida.
              </p>
            </div>
            <div>
              <Link to="/agendar-cita">
                <Button variant="secondary" className="text-sm bg-white text-clinic-blue hover:bg-gray-100">
                  Agendar Cita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>;
};

export default InfoSections;

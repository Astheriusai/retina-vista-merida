import { Link } from 'react-router-dom';
import { Button } from './ui/button';
const InfoSections = () => {
  return <>
      {/* Consultation Banner */}
      <section className="text-white py-[22px] bg-[#068ad0]">
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
    </>;
};
export default InfoSections;
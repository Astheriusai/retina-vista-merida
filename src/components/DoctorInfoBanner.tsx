import { MapPin, Phone } from 'lucide-react';
const DoctorInfoBanner = () => {
  return <div className="bg-clinic-dark text-white py-[9px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0 max-w-lg text-sm py-0 px-0 my-[8px]">
            En el consultorio del Dr. Juan Pablo Rivera Santander en Mérida, Yucatán, te recibirá un oftalmólogo comprometido con el cuidado de tu bienestar.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-clinic-teal" />
              <span className="text-sm">99 9739 8637</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-clinic-teal" />
              <span className="text-sm">Calle 23 #311, Col. Montebello, Mérida, Yuc.</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DoctorInfoBanner;
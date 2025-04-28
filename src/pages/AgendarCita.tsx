
import HeroSection from '../components/HeroSection';

const AgendarCita = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://images.unsplash.com/photo-1584516194607-05672d4851d9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        title="Agenda tu cita"
        subtitle="Reserva tu cita de forma rápida y sencilla a través de nuestro sistema de agendamiento integrado con Doctoralia."
        credentials={false}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="https://www.doctoralia.com.mx/images/logo.svg" 
                alt="Doctoralia" 
                className="h-16 mx-auto mb-8" 
              />
              <p className="text-lg text-gray-600 mb-6">
                Utiliza nuestro sistema de agenda online para programar tu cita con el Dr. Juan Pablo Rivera Santander.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <iframe 
                title="Doctoralia Calendario Completo"
                src="//www.doctoralia.com.mx/ajax/marketing/doctor/widget/big_with_calendar/juan-pablo-rivera-santander/null?customUtm=null&id=j6cbp50qz1&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Foftalmologiaespecializadadrsantander.com%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=true" 
                width="100%" 
                height="600" 
                frameBorder="0"
              ></iframe>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Prefieres agendar por teléfono?</h3>
              <p className="text-lg text-gray-600 mb-4">
                Puedes contactarnos directamente para programar tu cita:
              </p>
              <p className="text-2xl font-bold text-clinic-blue">+52 999 739 8637</p>
            </div>
            
            <div className="mt-12 bg-clinic-blue/10 rounded-lg p-6 border border-clinic-blue/20">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información importante</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-clinic-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Por favor llegar 10 minutos antes de su cita programada.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-clinic-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Traer consigo identificación oficial y, en caso de tenerlos, estudios previos relacionados con su consulta.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-clinic-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Si necesita cancelar o reprogramar su cita, favor de avisar con al menos 24 horas de anticipación.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgendarCita;

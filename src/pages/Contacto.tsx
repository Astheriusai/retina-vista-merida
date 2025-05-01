import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { MapPin, Phone, Mail, Send, Calendar } from 'lucide-react';
import InfoSections from '../components/InfoSections';
import DoctorInfoBanner from '../components/DoctorInfoBanner';
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <div>
      <HeroSection backgroundImage="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/10/contacto-header.png?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" title="Contacto" subtitle="Estamos aquí para responder a todas sus preguntas sobre servicios oftalmológicos." credentials={false} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-clinic-blue text-white p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+52 999 739 8637</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-blue text-white p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Correo</h3>
                    <p className="text-gray-600">contacto@oftalmologoespecializadodrsantander.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-blue text-white p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Calle 23 #311, X 30 y Calle 36 Diagonal (Av. García Lavin), Frente al Ateneo y a un costado de Victory Plat, Col. Montebello, C.P. 97113, Mérida, Yuc.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clinic-blue text-white p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Horarios</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 7:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 mb-10 px-[52px]">
                <img src="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2020/01/logo-retina3.png" alt="Dr. Santander logo" className="h-20 mb-4 object-fill" />
                
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Agenda tu Cita</h3>
                <div className="bg-white shadow-md rounded-lg p-4 mb-4 py-[8px] px-[114px]">
                  <img src="https://logos-download.com/wp-content/uploads/2023/02/Doctoralia_Logo.png" alt="Doctoralia" className="h-10 mb-4 object-scale-down" />
                </div>
                <iframe title="Doctoralia Calendario" src="//www.doctoralia.com.mx/ajax/marketing/doctor/widget/big_with_calendar/juan-pablo-rivera-santander/null?customUtm=null&id=j6cbp50qz1&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Foftalmologiaespecializadadrsantander.com%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" width="100%" height="400" frameBorder="0"></iframe>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h3>
                
                {submitSuccess && <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.
                  </div>}
                
                {submitError && <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
                    {submitError}
                  </div>}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue"></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full bg-clinic-blue text-white py-3 px-4 rounded-md hover:bg-clinic-dark transition duration-300 flex items-center justify-center">
                    {isSubmitting ? <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span> : <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </span>}
                  </button>
                </form>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-4">Antes de tu visita</h4>
                <img src="https://oftalmologiaespecializadadrsantander.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-04-at-10.48.14-AM.jpeg" alt="Consultorio oftalmológico" className="rounded-lg shadow-sm mb-4 w-full h-64 object-cover" />
                <p className="text-gray-600">
                  Para una primera consulta, te recomendamos traer:
                </p>
                <ul className="mt-2 text-gray-600 list-disc pl-5">
                  <li>Identificación oficial</li>
                  <li>Estudios o recetas previas (si existen)</li>
                  <li>Lista de medicamentos actuales</li>
                  <li>Antecedentes médicos relevantes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestra Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe src="https://www.google.com/maps/d/embed?mid=1MxglC7Iwc34AzCbSbdDqZwTzP177ZCD4" title="Ubicación del consultorio" className="w-full h-full border-0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <DoctorInfoBanner />
      <InfoSections />
    </div>;
};
export default Contacto;
import HeroSection from '../components/HeroSection';
import ServicesMenu from '../components/ServicesMenu';
const Laser = () => {
  return <div>
      <HeroSection backgroundImage="https://eyeprocenter.com/wp-content/uploads/2021/04/iStock-1213365875-1200x628.jpeg" title="Tratamientos con Láser" subtitle="Tecnología de vanguardia para tratamientos precisos y seguros." credentials={true} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tratamientos con Láser</h2>
              <p className="text-gray-600 mb-6">
                En nuestra clínica, utilizamos la tecnología láser más avanzada para tratar diversas condiciones oculares con precisión y seguridad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Precios Procedimiento</h3>
                  <ul className="space-y-2">
                    
                    
                    
                    
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo se realiza una cirugía láser?</h3>
                <p className="text-gray-600 mb-4">Se emplea anestesia local para para insensibilizar el ojo. A continuación, se coloca un sostenedor para mantener los párpados abiertos. Se emplea un láser o bisturí para abrir el tejido corneal y, finalmente, se aplica el láser. Se debe notar que, desde el momento en que se abre el tejido corneal, la visión del paciente se oscurece completamente; la visión regresa hasta terminada la intervención quirúrgica. Para la recuperación no es necesario aplicar puntos.

Una vez concluida la operación deberás cubrir tus ojos para evitar exposición directa a la luz del sol, así como evitar frotarlos. Al terminar el periodo de recuperación, que puede tomar entre 1 a 7 días, recuperarás la visión sin la necesidad de anteojos.

A pesar de esto, debes tener expectativas realistas. Con el paso de los años puede que vuelvas a necesitar lentes o algún otro procedimiento por un motivo diferente.</p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Laser;
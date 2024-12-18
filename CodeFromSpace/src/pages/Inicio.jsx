import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative flex flex-col items-center justify-center text-center py-20 lg:px-0 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/logo/mialien.webp')" }}>
        {/* Capa superpuesta */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Capa de desenfoque en el borde inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-negro via-transparent to-transparent"></div>

        {/* Contenido de la sección */}
        <div className="relative mx-4">
          <p className="text-4xl lg:text-6xl font-bold mb-4 animate-slowpulse text-white">
            Bienvenido a <span className="text-rosa underline font-extrabold">Code From Space.</span>
          </p>
          <p className="lg:text-xl text-gray-300 lg:max-w-4xl mt-4 lg:mt-0">
            Soy Marcos Núñez, <span className='font-medium text-blanco'>desarrollador de aplicaciones web</span> y técnico en sistemas🚀.
            Apasionado por crear <span className='underline font-medium text-blanco'>soluciones innovadoras</span> que brillan en <span className='underline font-medium text-blanco'>cualquier sector</span>.
          </p>
          <div className="relative mt-8 inline-block group">
            {/* Sombra negra detrás del botón */}
            <span className="absolute bottom-0 right-0 w-full h-full translate-x-1 translate-y-1 bg-gray-900 border-2 border-gray-600 rounded-md transition-all duration-[300ms] ease-in-out"></span>

            {/* Botón principal */}
            <button className="relative z-10 lg:px-6 px-2 lg:py-3 py-2 bg-boton duration-[300ms] border-gray-600 text-white font-semibold rounded-md shadow-md ease-in-out border-2 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-lg">
              Ver Proyectos
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 md:mt-20 mb-20">
        {/* Sección 1 */}
        <section className="flex flex-col items-center text-center py-10 px-4 lg:px-0 max-w-3xl lg:mx-auto mx-4 bg-gris border border-gray-700 rounded-xl shadow-lg shadow-gris mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-rosa">¿Listo para crear tu proyecto?</h2>
          <p className="mt-4 lg:text-xl">
            Si tienes una idea en mente, ¡estoy aquí para ayudarte! Contáctame ahora y juntos haremos realidad tu web.
          </p>
          <div className="relative mt-8 inline-block group">
            {/* Sombra negra detrás del botón */}
            <span className="absolute bottom-0 right-0 w-full h-full translate-x-1 translate-y-1 bg-gray-900 border-2 border-gray-600 rounded-md transition-all duration-[300ms] ease-in-out"></span>

            {/* Botón principal */}
            <button className="relative z-10 lg:px-6 px-2 lg:py-3 py-2 bg-boton duration-[300ms] border-gray-600 text-white font-semibold rounded-md shadow-md  ease-in-out border-2 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-lg">
              Solicitar Web
            </button>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="flex flex-col items-center text-center py-10 px-4 lg:px-0 max-w-3xl lg:mx-auto mx-4 bg-gris border border-gray-700 rounded-xl shadow-lg shadow-gris">
          <h2 className="text-3xl text-rosa font-bold">Mi Enfoque</h2>
          <p className="lg:text-xl mt-6 lg:max-w-4xl">
            Mi objetivo es proporcionar soluciones de alta calidad, fáciles de usar y adaptadas a las necesidades únicas de cada cliente.
            Mi proceso es siempre colaborativo, asegurándome de que el resultado final sea exactamente lo que necesitas.
          </p>
        </section>
      </div>

      <Footer />

    </div>
  );
};

export default Inicio;

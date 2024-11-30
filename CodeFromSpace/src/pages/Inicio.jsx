import React from 'react';
import Header from '../components/Header';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="flex flex-col items-center justify-center text-center py-20 px-4 lg:px-0">
        <p className="text-3xl lg:text-6xl font-bold mb-4 animate-slowpulse">
          Bienvenido a <span className="text-fosforito underline font-extrabold">Code From Space.</span>
        </p>
        <p className="lg:text-xl text-gray-300 lg:max-w-4xl mt-4 lg:mt-0">
          Soy Marcos Núñez, <span className='underline text-rosa font-medium'>desarrollador de aplicaciones web</span> y técnico en sistemas🚀.
          Apasionado por crear <span className='underline font-medium text-blanco'>soluciones innovadoras</span> que brillan en <span className='underline font-medium text-blanco'>cualquier sector</span>.
        </p>
        <button className="mt-8 lg:px-6 px-2 lg:py-3 py-2 bg-rosa text-white font-semibold rounded-md shadow-md duration-[1000ms] linear hover:bg-transparent border-2 hover:border-fosforito border-rosa hover:text-fosforito">
          Ver Proyectos
        </button>
      </section>
    </div>
  );
};

export default Inicio;

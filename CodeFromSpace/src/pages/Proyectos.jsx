import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Proyectos = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 mb-6 mx-4'>
                <span className='flex items-center border-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img className="object-cover w-32 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg opacity-35 pl-4" src="/assets/images/proyectos/adrenaline.png" alt="imagen proyecto adrenaline" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-white">Adrenaline ATVs Miami</h5>
                        <p className="mb-3 font-normal text-white">* Empresa</p>
                    </div>
                </span>

                <span className='flex items-center border-2 bg-gradient-to-r from-yellow-500 to-white rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img className="object-cover w-32 rounded-t-lg h-auto md:w-36 md:rounded-none md:rounded-s-lg opacity-35 pl-4" src="/assets/images/proyectos/juanjo.png" alt="imagen proyecto juanjo reverte" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-black">Juanjo Reverte</h5>
                        <p className="mb-3 font-normal text-gray-700">* Autónomo</p>
                    </div>
                </span>

                <span className='flex items-center border-2 bg-black rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img className="object-cover w-32 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg opacity-35 pl-4" src="/assets/images/proyectos/creen.png" alt="imagen proyecto creen asez" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-teal-500">Creen Asez</h5>
                        <p className="mb-3 font-normal text-white">* Autónomo</p>
                    </div>
                </span>

                <span className='flex items-center border-2 bg-black rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img style={{ filter: 'invert(100%) brightness(200%)' }} className="object-cover w-32 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg opacity-35 pl-4" src="/assets/images/proyectos/thedistrict.jpg" alt="imagen proyecto teh district" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-white">The District Wear</h5>
                        <p className="mb-3 font-normal text-white">* Marca de Ropa</p>
                    </div>
                </span>

                <span className='flex items-center border-2 bg-black rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img className="object-cover w-32 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg opacity-55 pl-4" src="/assets/images/proyectos/sabella.png" alt="imagen proyecto sabella" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-red-600">SabelLa Fashion Designer</h5>
                        <p className="mb-3 font-normal text-white">* Empresa</p>
                    </div>
                </span>

                <span className='flex items-center border-2 bg-[#222222] rounded-lg shadow-sm flex-row hover:scale-95 transition-transform h-40'>
                    <img className="object-cover w-32 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg opacity-35 pl-4" src="/assets/images/proyectos/masters.jpg" alt="imagen proyecto masters shawarma" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 md:text-3xl text-xl font-extrabold tracking-tight text-[#a81d1a]">Master's Shawarma & Grill</h5>
                        <p className="mb-3 font-normal text-white">* Empresa</p>
                    </div>
                </span>
            </div>

            <Footer />

        </div>
    );
};

export default Proyectos;

import React, { useState, useEffect } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú desplegable

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Bloquea el scroll al abrir el menú móvil
    useEffect(() => {
        if (menuOpen) {
            // Bloquea el scroll en todo el documento
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            // Vuelve a habilitar el scroll
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <header>
            <nav className="bg-gris px-4 lg:px-6 py-3.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo y nombre de la web */}
                    <div className="flex justify-between w-full lg:w-auto">
                        <div className="flex justify-center items-center mx-auto lg:mx-0">
                            <img src="/assets/images/logo/alien.png" className="mr-3 h-6 sm:h-9 animate-slowspin" alt="Logo Alien" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">Code From Space</span>
                        </div>

                        {/* Botón de menú (solo visible en móvil) */}
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden"
                            aria-controls="mobile-menu-2"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Abrir menú</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Menú desplegable (móvil) */}
                    <div
                        className={`${menuOpen ? "block" : "hidden"} top-0 left-0 w-full h-screen bg-gris flex items-center justify-center lg:static lg:h-auto lg:flex lg:w-auto`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col space-y-4 font-medium lg:flex-row lg:space-x-8 lg:space-y-0 text-2xl lg:text-lg -mt-36 lg:-mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-fosforito lg:bg-transparent lg:p-0">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="mt-4 lg:mt-0 bg-rosa text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-700">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

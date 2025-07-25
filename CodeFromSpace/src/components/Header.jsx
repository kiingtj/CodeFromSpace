import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú desplegable

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Bloquea el scroll al abrir el menú móvil
    useEffect(() => {
        if (menuOpen) {
            // Bloquea el scroll en todo el documento
            document.body.style.overflow = "hidden"; // Bloquea el scroll del body
            document.documentElement.style.overflow = "hidden"; // Bloquea el scroll del html
            document.body.style.position = "fixed"; // Evita que el contenido se desplace
            document.body.style.width = "100%"; // Mantiene el ancho fijo del body
        } else {
            // Vuelve a habilitar el scroll
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
            document.body.style.position = ""; // Vuelve a la posición original
            document.body.style.width = ""; // Restablece el ancho
        }

        return () => {
            // Asegúrate de restaurar el comportamiento del scroll cuando el componente se desmonte
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [menuOpen]);

    return (
        <header>
            <nav className="bg-gris px-4 lg:px-6 py-5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo y nombre de la web */}
                    <div className="flex justify-between w-full lg:w-auto">
                        <div className="flex justify-center items-center mx-auto lg:mx-0 hover:text-rosa duration-[500ms] linear">
                            <img src="/assets/images/logo/alien.png" className="mr-3 h-8 sm:h-9 animate-slowspin" alt="Logo Alien" />
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
                            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
                            {menuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6L14 14M6 14L14 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            ) : (
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
                            )}
                        </button>
                    </div>

                    {/* Menú desplegable (móvil) */}
                    <div
                        className={`${menuOpen ? "block" : "hidden"} top-0 left-0 w-full h-screen bg-gris flex items-center justify-center lg:static lg:h-auto lg:flex lg:w-auto`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col space-y-4 font-medium lg:flex-row lg:space-x-8 lg:space-y-0 text-2xl lg:text-lg -mt-36 lg:-mt-0">
                            <Link to="/">
                                <li>
                                    <p className="block py-2 pr-4 pl-3 rounded hover:text-rosa duration-[500ms] linear lg:bg-transparent lg:p-0">Inicio</p>
                                </li>
                            </Link>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-rosa duration-[500ms] linear lg:bg-transparent lg:p-0">CV</a>
                            </li>
                            <Link to="/proyectos">
                                <li>
                                    <p className="block py-2 pr-4 pl-3 rounded hover:text-rosa duration-[500ms] linear lg:bg-transparent lg:p-0">Proyectos</p>
                                </li>
                            </Link>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-rosa duration-[500ms] linear lg:bg-transparent lg:p-0">Sobre mí</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded hover:text-rosa duration-[500ms] linear lg:bg-transparent lg:p-0">Contacto</a>
                            </li>
                            <li>
                                <a href="#" className="mt-4 lg:mt-0 bg-rosa hover:bg-pink-800 duration-[500ms] linear text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-700">
                                    Solicitar Web
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

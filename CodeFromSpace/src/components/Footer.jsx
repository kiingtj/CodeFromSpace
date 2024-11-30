import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#1a202c] text-[#d9d9d9] px-6 lg:px-14 py-10">
      {/* Contenedor principal dividido en columnas para desktop */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Sección de logo y redes sociales */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[35%]">
          <div className="flex items-center gap-4">
            <img alt="Logo Preview" src="/assets/images/logo/alien.png" width="120" />
            <div className="text-3xl lg:text-5xl text-center lg:text-left">Code From Space</div>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#39ff14]"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#39ff14]"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#39ff14]"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Sección de enlaces */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-10 w-full lg:w-[65%]">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="font-bold uppercase text-[#d9d9d9] pb-3">Company</div>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">About Us</a>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">Contact</a>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">Support</a>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">News</a>
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="font-bold uppercase text-[#d9d9d9] pb-3">Legal</div>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">Imprint</a>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">Privacy Policy</a>
            <a href="#xxx" className="hover:underline hover:text-[#39ff14]">Terms of Use</a>
          </div>
        </div>
      </div>
      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-500 my-8"></div>
      {/* Copyright */}
      <div className="text-center text-xs">© 2024 Code From Space - All rights reserved.</div>
    </footer>
  );
};

export default Footer;

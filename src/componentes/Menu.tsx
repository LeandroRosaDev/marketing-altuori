'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`bg-[url('/assets/bg/1.png')] bg-cover bg-bottom md:h-screen h-[700px] relative ${lato.className} flex flex-col items-center`}
    >
      <div className="flex justify-center items-center pt-16 w-full">
        <div className="flex justify-between items-center w-[85%]">
          <img src="/assets/logotipo.png" alt="Logo" className="h-28" />
          <nav>
            <ul
              className={`hidden md:flex space-x-8 text-white text-sm md:text-lg font-semibold ${
                menuOpen ? 'hidden' : 'flex'
              }`}
            >
              <li>
                <Link href="/" className="hover:text-yellow-500">
                  INÍCIO
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-yellow-500">
                  SOBRE NÓS
                </Link>
              </li>
              <li>
                <Link href="#planos" className="hover:text-yellow-500">
                  PLANOS
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-yellow-500">
                  CONTATO
                </Link>
              </li>
            </ul>
            {menuOpen ? (
              ''
            ) : (
              <button
                onClick={toggleMenu}
                className="md:hidden focus:outline-none"
              >
                <div className="relative w-8 h-8 flex flex-col justify-between items-center">
                  <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
                  <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
                  <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
                </div>
              </button>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-neutral-700 flex flex-col items-center text-white animate-slide-in">
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-10 focus:outline-none"
            >
              <div className="relative w-8 h-8 flex flex-col justify-between items-center mt-6">
                <span className="absolute block w-full h-1 bg-yellow-500 -rotate-45" />
                <span className="absolute block w-full h-1 bg-yellow-500 transform rotate-45" />
              </div>
            </button>
            <ul className="space-y-12 sm:space-y-14 text-xl text-center mt-[20%]">
              <li className="hover:text-blue-400">
                <Link href="/" onClick={closeMenu}>
                  INÍCIO
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#sobre" onClick={closeMenu}>
                  SOBRE NÓS
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#planos" onClick={closeMenu}>
                  PLANOS
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#contato" onClick={closeMenu}>
                  CONTATO
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center h-full text-white w-[80%] items-start">
        <h1 className="text-4xl sm:text-6xl md:text-[80px] leading-normal tracking-widest font-semi-bold text-start">
          O Futuro do Marketing Digital <br />
          <span className="text-yellow-500 font-bold">está Aqui.</span>
        </h1>
        <Link
          href="#planos"
          className="mt-11 px-10 py-3 bg-transparent text-white border-2 hover:bg-white hover:text-black"
        >
          CONFIRA NOSSOS PLANOS
        </Link>
      </div>
    </header>
  );
};

export default Menu;

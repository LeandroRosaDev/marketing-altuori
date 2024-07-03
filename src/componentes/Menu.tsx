import Link from 'next/link';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <header className="bg-[url('/assets/bg/1.png')] bg-cover bg-center h-screen relative">
      <div className="flex justify-between items-center px-16 pt-16">
        <img src="/assets/logotipo.png" alt="Logo" className="h-28" />
        <nav>
          <ul className=" space-x-12 text-white text-lg font-bold hidden md:flex">
            <li>
              <Link href="#inicio" className="hover:text-yellow-500">
                INÍCIO
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-yellow-500">
                SOBRE NÓS
              </Link>
            </li>
            <li>
              <Link href="#servicos" className="hover:text-yellow-500">
                SERVIÇOS
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-yellow-500">
                CONTATO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-center h-full text-center text-white pl-16 ml-6 -mt-16">
        <h1 className="text-4xl md:text-6xl font-semi-bold text-start">
          O Futuro do Marketing Digital <br />
          <span className="text-yellow-500">está Aqui.</span>
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

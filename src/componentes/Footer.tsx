import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#474747] pt-8">
      <div className="text-center">
        <img
          src="/assets/logotipo.png"
          alt="logotipo"
          className="mx-auto mb-4 w-48 lg:w-64"
        />
        <p className="text-white sm:text-lg mb-4 mx-4">
          Transformando Visões em Realidade: Seu Negócio no Ápice do Sucesso.
        </p>
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-4">
          <img
            src="/assets/icones/8.svg"
            alt="Icone do facebook"
            className="w-8 sm:w-16 h-8 sm:h-16"
          />
          <img
            src="/assets/icones/10.svg"
            alt="Icone do instagram"
            className="w-8 sm:w-16 h-8 sm:h-16"
          />
          <img
            src="/assets/icones/12.svg"
            alt="Icone do linkedin"
            className="w-8 sm:w-16 h-8 sm:h-16"
          />
          <img
            src="/assets/icones/14.svg"
            alt="Icone do whatsapp"
            className="w-8 sm:w-16 h-8 sm:h-16"
          />
        </div>
      </div>
      <div className="bg-[#292929] py-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p className="mb-2">
            Todos os direitos reservados. | © 2020 ALTUORI MARKETING
          </p>
          <p>
            Uma empresa do{' '}
            <Link href="#" className="text-yellow-500">
              Grupo Altuori
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

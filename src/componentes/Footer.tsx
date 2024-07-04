'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
          <Link href="https://www.facebook.com/marketing.altuori">
            <img
              src="/assets/icones/8.svg"
              alt="Icone do facebook"
              className="w-8 sm:w-12 h-8 sm:h-12"
            />
          </Link>
          <Link href="https://www.instagram.com/marketing.altuori/">
            <img
              src="/assets/icones/10.svg"
              alt="Icone do instagram"
              className="w-8 sm:w-12 h-8 sm:h-12"
            />
          </Link>
          <Link href="">
            <img
              src="/assets/icones/12.svg"
              alt="Icone do linkedin"
              className="w-8 sm:w-12 h-8 sm:h-12"
            />
          </Link>
          <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
            <img
              src="/assets/icones/14.svg"
              alt="Icone do whatsapp"
              className="w-8 sm:w-12 h-8 sm:h-12"
            />
          </Link>
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
      <div className="flex items-center">
        {isVisible && (
          <button onClick={scrollToTop}>
            <img
              src="/assets/icones/18.svg"
              alt="Seta para ir ao topo do site"
              className="w-8 md:w-12 bottom-12 left-5 md:left-10 fixed"
            />
          </button>
        )}
        <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
          <img
            src="/assets/icones/1.png"
            alt=""
            className="w-14 md:w-20 bottom-8 right-5 md:right-10 fixed"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

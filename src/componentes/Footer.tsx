import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div className="bg-[#474747]">
          <img src="/assets/logotipo.png" alt="logotipo" />
          <p>
            Transformando Visões em Realidade: Seu Negócio no Ápice do Sucesso.
          </p>
          <div>
            <img src="/assets/icones/8.svg" alt="Icone do facebook" />
            <img src="/assets/icones/10.svg" alt="Icone do instagram" />
            <img src="/assets/icones/12.svg" alt="Icone do linkedin" />
          </div>
        </div>
        <div className="bg-[#292929]">
          <p>Todos os direitos reservados. | © 2020 ALTUORI MARKETING</p>
          <p>
            Uma empresa do <a href="">Grupo Altuori</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

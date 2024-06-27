import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <header className="bg-[url('/assets/bg/1.png')] bg-cover bg-center h-[1000px]">
      <div>
        <img src="/assets/logotipo.png" alt="" />
        <nav>
          <ul>
            <li>
              <Link href="">INÍCIO</Link>
            </li>
            <li>
              <Link href="">SOBRE NÓS</Link>
            </li>
            <li>
              <Link href="">SERVIÇOS</Link>
            </li>
            <li>
              <Link href="">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>
          O Futuro do Marketing Digital <span>está Aqui.</span>
        </h1>
        <Link href="">CONFIRA NOSSOS PLANOS</Link>
      </div>
    </header>
  );
};

export default Menu;

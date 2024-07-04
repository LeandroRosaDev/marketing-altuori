import Form from '@/componentes/Form';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main>
      <section
        id="sobre"
        className={`bg-[#DDD8D3] py-12 px-4 md:px-12 ${montserrat.className}`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col gap-8">
            <div className="mb-12 lg:w-[50%] text-center mx-auto lg:text-start lg:mx-0 space-y-4">
              <p className="text-lg opacity-70">Sobre Nós</p>
              <h1 className="text-3xl md:text-5xl font-bold">
                Entenda porque somos apaixonados pelo nosso trabalho
              </h1>
            </div>
            <div className="space-y-16 lg:space-y-0 lg:flex text-center lg:text-start">
              <div className="space-y-8 w-[80%] lg:w-[60%] mx-auto lg:mx-0">
                <div>
                  <p className="text-xl font-semibold border-b-4 border-yellow-400 inline-block">
                    O início
                  </p>
                  <p>
                    Desde a nossa fundação em 2019, a Marketing Altuori tem sido
                    uma força pioneira no universo do marketing digital. Com uma
                    trajetória marcada por inovação, resultados excepcionais e
                    um compromisso inabalável com o sucesso de nossos clientes,
                    estabelecemo-nos rapidamente como líderes neste espaço
                    competitivo. O que nos diferencia não é apenas o que
                    fazemos, mas como fazemos e por que fazemos.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold border-b-4 border-yellow-400 inline-block">
                    Resultados que Falam por Si
                  </p>
                  <p>
                    A excelência não é apenas um objetivo; é o nosso padrão. Na
                    Marketing Altuori, entregamos mais do que promessas –
                    entregamos resultados concretos. Através de estratégias
                    personalizadas, baseadas em dados e orientadas para o
                    desempenho, impulsionamos a visibilidade, o engajamento e o
                    crescimento de negócios em uma variedade de setores. Nossa
                    abordagem é simples: entender profundamente as metas de
                    nossos clientes e então superá-las, uma campanha de sucesso
                    por vez.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold border-b-4 border-yellow-400 inline-block">
                    Uma Abordagem Distinta
                  </p>
                  <p>
                    Diferenciamo-nos de outras agências pelo nosso compromisso
                    com a inovação e o aprendizado contínuo. A paisagem do
                    marketing digital está sempre evoluindo, e a Marketing
                    Altuori está sempre à frente da curva, antecipando
                    tendências e adaptando estratégias para garantir o máximo
                    impacto. Nosso segredo? Uma combinação imbatível de
                    tecnologia de ponta, criatividade sem limites e uma análise
                    de dados rigorosa.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold border-b-4 border-yellow-400 inline-block">
                    Uma Equipe Dedicada
                  </p>
                  <p>
                    O coração da Marketing Altuori é nossa equipe de
                    profissionais dedicados. Cada membro traz consigo uma
                    riqueza de conhecimento, experiência e, acima de tudo, uma
                    paixão genuína pelo marketing digital. Juntos, formamos uma
                    força coesa, comprometida em oferecer não apenas resultados,
                    mas também uma experiência excepcional para cada cliente com
                    quem trabalhamos.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold border-b-4 border-yellow-400 inline-block">
                    Abrace o futuro conosco
                  </p>
                  <p>
                    Na Marketing Altuori, estamos sempre olhando para o futuro,
                    prontos para abraçar novos desafios e continuar a redefinir
                    o que é possível no marketing digital. Se você está
                    procurando uma agência que combina estratégia comprovada,
                    inovação contínua e um compromisso genuíno com o seu
                    sucesso, sua busca termina aqui. Bem-vindo ao próximo
                    capítulo do seu sucesso. Bem-vindo à Marketing Altuori.
                  </p>
                </div>
              </div>
              <div className="space-y-16 w-[80%] lg:w-[40%] lg:ml-20 mx-auto">
                <div className="flex flex-col lg:flex-row ">
                  <img
                    src="/assets/icones/1.svg"
                    alt=""
                    className="h-28 mb-4 lg:mr-4"
                  />
                  <div className="mx-auto">
                    <p className="text-xl font-semibold">Inovação Constante</p>
                    <p>
                      Nossa paixão é alimentada pela constante busca por
                      inovação. Estamos sempre à frente, explorando novas
                      tendências, tecnologias e estratégias para manter nossos
                      clientes um passo à frente da concorrência. Acreditamos
                      que a criatividade combinada com a inovação é a chave para
                      desbloquear o verdadeiro potencial do Marketing Digital.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <img
                    src="/assets/icones/2.svg"
                    alt=""
                    className="h-28  mb-4 lg:mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">
                      Resultados Extraordinários
                    </p>
                    <p>
                      Somos movidos pelos resultados. Nossa paixão se traduz em
                      campanhas de marketing digital sob medida, que não apenas
                      atingem, mas superam os objetivos de nossos clientes.
                      Combinamos análise de dados com criatividade para garantir
                      que cada ação tenha um impacto significativo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <img
                    src="/assets/icones/3.svg"
                    alt=""
                    className="h-28 mb-4 lg:mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">
                      Relacionamentos Duradouros
                    </p>
                    <p>
                      Acreditamos na construção de relacionamentos duradouros,
                      tanto com nossos clientes quanto com nosso público. Para
                      nós, o marketing digital vai além das vendas; é sobre
                      criar conexões autênticas e significativas. Essa paixão
                      por criar laços verdadeiros é o que nos impulsiona a
                      buscar a excelência todos os dias.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <img
                    src="/assets/icones/4.svg"
                    alt=""
                    className="h-28  mb-4 lg:mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">
                      Aprendizado Contínuo
                    </p>
                    <p>
                      Desde a nossa fundação em 2019, a Marketing Altuori tem
                      sido uma força pioneira no universo do marketing digital.
                      Com uma trajetória marcada por inovação, resultados
                      excepcionais e um compromisso inabalável com o sucesso de
                      nossos clientes, estabelecemo-nos rapidamente como líderes
                      neste espaço competitivo. O que nos diferencia não é
                      apenas o que fazemos, mas como fazemos e por que fazemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-start mb-12">
            <h1 className="text-3xl md:text-5xl font-bold">
              Especialistas em <br /> Fazer sua Empresa{' '}
              <span className="text-yellow-500 border-b-4 border-yellow-400 inline-block">
                Aparecer
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/1.png"
                alt="Planejamento de Mídias Sociais"
                className="h-auto mb-4 border-2 border-yellow-500 "
              />
              <p className="text-lg ">
                Planejamento de Mídias Sociais, com integração com Ecossistema
                Meta
              </p>
            </div>
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/2.png"
                alt="Criação de Logo"
                className="h-auto mb-4 border-2 border-yellow-500"
              />
              <p className="text-lg">
                Criação de Logo, Todas as Artes para Mídias Sociais e Sites
              </p>
            </div>
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/3.png"
                alt="Construção de Sites Atrativos"
                className="h-auto mb-4 border-2 border-yellow-500"
              />
              <p className="text-lg">
                Construção de Sites Atrativos, com domínios próprios e
                Hospedagem inclusas
              </p>
            </div>
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/4.png"
                alt="Gestão de Tráfego Pago"
                className="h-auto mb-4 border-2 border-yellow-500"
              />
              <p className="text-lg ">
                Gestão de Tráfego Pago com criação de Campanhas que convertem
              </p>
            </div>
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/5.png"
                alt="Equipe Especializada"
                className="h-auto mb-4 border-2 border-yellow-500"
              />
              <p className="text-lg">
                Equipe especializada em engajamento e crescimento de novas
                marcas
              </p>
            </div>
            <div className="text-center mx-auto w-[50%] md:w-full">
              <img
                src="/assets/img/6.png"
                alt="Automação de Processo de Vendas"
                className="h-auto mb-4 border-2 border-yellow-500"
              />
              <p className="text-lg ">
                Automação de Processo de Vendas e Atendimento
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#474747] py-24">
        <div className="w-screen flex justify-end ">
          <h1 className="text-3xl md:text-5xl font-bold text-white w-[80%] md:w-[60%] xl:w-[50%] md:text-start text-center mb-12 mx-auto md:mx-0 md:mr-4">
            Pare de perder tempo com Agências que não entregam{' '}
            <span className="text-yellow-500">resultados.</span>
          </h1>
        </div>
        <div className="text-center mb-12 bg-[url('/assets/bg/2.png')] bg-cover bg-center h-[500px] lg:h-[600px] w-full"></div>
        <div className="">
          <h1
            className="text-3xl md:text-5xl font-bold text-white
         mb-12 w-[80%] md:w-[70%] xl:w-[50%] md:text-start text-center mx-auto md:mx-14"
          >
            Confiram nossos planos e <br /> se surpreendam com nossos{' '}
            <span className="text-yellow-500">Valores.</span>
          </h1>
        </div>
        <div
          id="planos"
          className="flex flex-col items-center lg:w-[80%] mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-14 lg:px-0 xl:flex">
            <div className="bg-yellow-500 text-center p-8 rounded-lg shadow-lg flex flex-col justify-between h-[550px] sm:h-[600px] mx-auto lg:w-[80%] xl:w-72 2xl:w-80">
              <h1 className="text-3xl font-semibold mb-4 md:text-4xl">
                Plano Iniciante
              </h1>
              <p className="mb-4 text-lg md:text-xl">
                Criação de Artes, Logotipos, Redes Sociais e Integração com o
                Ecossistema Meta. Consultoria profissional de tráfego pago e
                prospeção da marca no google.
              </p>
              <div className="mb-4">
                <p className="line-through text-lg md:text-2xl font-bold text-white">
                  R$ 799,99
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  R$ 299,99
                </p>
              </div>
              <a
                href="#"
                className="text-black bg-white px-4 py-2 rounded-lg font-semibold mx-auto lg:w-[90%] drop-shadow-md"
              >
                Clique e Saiba Mais
              </a>
            </div>

            <div className="bg-yellow-500 text-center p-8 rounded-lg shadow-2xl h-[620px] sm:h-[600px] flex flex-col justify-between lg:w-[80%] xl:w-72 2xl:w-80 mx-auto">
              <h1 className="text-3xl font-semibold mb-4 md:text-4xl">
                Plano Avançado
              </h1>
              <p className="mb-4 text-lg md:text-xl">
                Todas as opções dos Planos Iniciantes e Intermediário + Opção de
                Site Com Páginas + Gestão de Conteúdo de Publicações e Stories
                Mensais + Automações Simples Instagram e Facebook + Scripts de
                Vendas
              </p>
              <div className="mb-4">
                <p className="line-through text-lg md:text-2xl font-bold text-white">
                  R$ 1999,99
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  R$ 799,99
                </p>
              </div>
              <a
                href="#"
                className="text-black bg-white px-4 py-2 rounded-lg font-semibold lg:w-[90%] mx-auto"
              >
                Clique e Saiba Mais
              </a>
            </div>
            <div className="bg-yellow-500 text-center p-8 rounded-lg h-[620px] sm:h-[600px] flex flex-col justify-between lg:w-[80%] xl:w-72 2xl:w-80 mx-auto">
              <h1 className="text-3xl font-semibold mb-4 md:text-4xl">
                Plano Intermediário
              </h1>
              <p className="mb-4 md:text-lg">
                Todas as opções do nosso Plano Iniciante + Criação e Hospedagem
                de Site estilo landing Page + Domínio Grátis com todas as
                otimizações para marketing Digital + Tráfego Pago personalizado
                para o seu negócio + Gestão, curtidas, comentários e seguidores.
              </p>
              <div className="mb-4">
                <p className="text-white line-through md:text-xl font-bold">
                  R$ 1599,99
                </p>
                <p className="text-white text-2xl md:text-4xl font-extrabold">
                  R$ 699,99
                </p>
              </div>
              <a
                href="#"
                className="text-black bg-white px-4 py-2 rounded-lg font-semibold lg:w-[90%] mx-auto drop-shadow-md"
              >
                Clique e Saiba Mais
              </a>
            </div>
            <div className="bg-yellow-500 text-center p-8 rounded-lg h-[620px] sm:h-[600px] flex flex-col justify-between lg:w-[80%] xl:w-72 2xl:w-80 mx-auto">
              <h1 className="text-3xl font-semibold mb-4 md:text-4xl">
                Plano Advantage Pro
              </h1>
              <p className="mb-4 md:text-lg">
                Todas as Opções dos Planos Anteriores + Gestão de Marketing
                Digital Meta ads, Google Ads + Gestão Completa Whatsapp
                incluindo Automação de atendimento e venda, gestão de multiplos
                atendimentos e entrega.
              </p>
              <div className="mb-4">
                <p className="text-white line-through text-lg font-bold">
                  RS 4999,00
                </p>
                <p className="text-white text-2xl md:text-4xl font-extrabold">
                  R$ 1499,99
                </p>
              </div>
              <a
                href="#"
                className="text-black bg-white px-4 py-2 rounded-lg font-semibold lg:w-[90%] mx-auto drop-shadow-md"
              >
                Clique e Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="bg-[#DDD8D3] flex">
        <div className="hidden md:block w-1/3">
          <img
            src="/assets/img/7.png"
            alt="Imagem de uma atendente de telemarketing"
            className="h-full object-cover object-left"
          />
        </div>
        <div className="mx-auto md:flex md:justify-center md:items-center">
          <div className="w-full xl:w-[800px] 2xl:w-[1000px] pt-8">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="text-2xl lg:text-3xl font-semibold text-center md:text-start text-[#333333] md:p-6 px-5 mb-4">
                Profissionais sempre prontos para te{' '}
                <span className="border-b-4 border-yellow-500 inline-block font-bold">
                  Atender
                </span>
              </h1>
              <div className="flex justify-center space-x-4 lg:space-x-8 mb-4">
                <Link href="mailto:marketingaltuori@gmail.com">
                  <img
                    src="/assets/icones/5.svg"
                    alt="Icone de um email"
                    className="w-12 h-12 lg:w-20 lg:h-20"
                  />
                </Link>

                <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
                  <img
                    src="/assets/icones/6.svg"
                    alt="Icone de um telefone"
                    className="w-12 h-12 lg:w-20 lg:h-20"
                  />
                </Link>
                <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
                  <img
                    src="/assets/icones/7.svg"
                    alt="Icone de uma mensagem"
                    className="w-12 h-12 lg:w-20 lg:h-20"
                  />
                </Link>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section id="mapa">
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-4xl md:text-6xl font-semibold md:py-8">
            Onde Estamos <span className="text-yellow-500">?</span>
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3732837763105!2d-43.31173092390603!3d-22.788628233660347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%292%20-%20Centro%2C%20Duque%20de%20Caxias%2C%20RJ%2C%25070-330!5e!3m2!1spt-BR!2sbr!4v1719441922450!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 xl:h-96 mt-8"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

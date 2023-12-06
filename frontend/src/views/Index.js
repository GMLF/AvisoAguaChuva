/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/Heading.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-blueGray-600">
                Projeto Chuvalerta
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                "Chuva Alerta" é uma inovadora solução de notificação meteorológica projetada para manter
                você informado sobre chuvas intensas em tempo real. Com a capacidade de prever e monitorar
                padrões climáticos adversos, o Chuva Alerta oferece a você a tranquilidade de estar sempre
                um passo à frente das condições climáticas desafiadoras.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Além disso, estamos comprometidos com a solidariedade em tempos difíceis. Em parceria com a
                comunidade de Apucarana, oferecemos formulários dedicados para doações e solicitações de ajuda
                para aqueles afetados pelas condições climáticas adversas. Seja parte da mudança positiva,
                contribuindo com doações ou solicitando assistência para os necessitados de nossa querida cidade.
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/interrogacoes.avif").default}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 lg:w-12/12 pb-40 relative bg-blueGray-100 flex">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-10/12 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={require("assets/img/interrogacoes.avif").default}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Formulário de ajuda
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    "Nossa comunidade está aqui para se apoiar mutuamente. Se você ou
                    alguém que você conhece precisa de assistência devido às condições
                    climáticas desfavoráveis, preencha o Formulário de Ajuda. Estamos
                    comprometidos em oferecer suporte emocional, suprimentos essenciais
                    e a solidariedade necessária para superar desafios. Não hesite em pedir
                    ajuda – estamos todos juntos nessa jornada. Preencha o formulário agora e
                    permita-nos estar ao seu lado!"
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-10/12 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={require("assets/img/interrogacoes.avif").default}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Notificação de chuva
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    "Fique à frente das condições climáticas com nosso serviço
                    de Aviso de Chuvas Fortes. Sem a necessidade de cadastro, esta
                    página oferece informações em tempo real sobre a precipitação na região
                    de Apucarana. Mantenha-se informado instantaneamente sobre chuvas intensas
                    e esteja preparado para qualquer eventualidade."
                  </p>
                </blockquote>

              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-10/12 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={require("assets/img/interrogacoes.avif").default}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Formulário de doação
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    "Seja parte da corrente de solidariedade! Contribua com nossa
                    iniciativa preenchendo o Formulário de Doação. Suas generosas
                    contribuições ajudarão a fornecer suporte vital para aqueles
                    impactados por condições climáticas adversas em Apucarana.
                    Seja dinheiro, alimentos ou outros recursos, cada doação faz
                    a diferença. Juntos, podemos construir um futuro mais resiliente.
                    Faça sua doação agora e seja um agente de mudança positiva!"
                  </p>
                </blockquote>

              </div>
            </div>
          </div>
        </div>

      </section>


      <Footer />
    </>
  );
}

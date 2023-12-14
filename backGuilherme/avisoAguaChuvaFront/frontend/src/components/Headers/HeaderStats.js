import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";
import axios from "axios";

export default function HeaderStats() {

  const [quantidadeNomes_doacao, setQuantidadeNomes_doacao] = useState(0); 
  const [quantidadeNomes_help, setQuantidadeNomes_help] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/doacao");

        // Contar a quantidade de nomes
        setQuantidadeNomes_doacao(response.data.length);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/necessitados");

        // Contar a quantidade de nomes
        setQuantidadeNomes_help(response.data.length);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="NOVAS AJUDAS"
                  statTitle={quantidadeNomes_help.toString()}
                  statArrow=""
                  statPercent="100"
                  statPercentColor=""
                  statDescripiron="Atualizado"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="NOVAS DOAÇOES"
                  statTitle={quantidadeNomes_doacao.toString()}
                  statArrow=""
                  statPercent="100"
                  statPercentColor=""
                  statDescripiron="Atualizado"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>

              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="PORCENTAGEM AJUDAS"
                  statTitle="0"
                  statArrow=""
                  statPercent="100"
                  statPercentColor=""
                  statDescripiron="Atualizado"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
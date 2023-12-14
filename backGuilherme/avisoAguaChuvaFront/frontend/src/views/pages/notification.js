import React, { useState } from "react";
import axios from "axios";

export default function Notification() {
  const cidadesParana = [
    "Curitiba",
    "Londrina",
    "Maringá",
    "Ponta Grossa",
    "Cascavel",
    "São José dos Pinhais",
    "Foz do Iguaçu",
    "Colombo",
    "Guarapuava",
    "Paranaguá",
    "Campo Grande",
    "Dois Vizinhos",
    "Rio Branco"
  ];

  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [horario, setHorario] = useState("");
  const [precipitacao, setPrecipitacao] = useState("");
  const [alertaEnchente, setAlertaEnchente] = useState("");
  const [alertaChuva, setAlertaChuva] = useState(false);


  const removerAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ',AC';
  };

  const handleCidadeChange = (event) => {
    setCidadeSelecionada(event.target.value);
  };

  const handleVerificarClick = async () => {
    try {
      const cidadeSemAcento = removerAcentos(cidadeSelecionada.toLowerCase());
      const apiUrl = "http://localhost:3000/weather"; // Altere para a URL do seu servidor intermediário
      
      const params = {
        key: "6aa679a2",
        city_name: cidadeSemAcento,
      };
  
      const response = await axios.get(apiUrl, { params });
  
      if (!response.data.results) {
        throw new Error("Formato de resposta da API inválido");
      }
      const currentData = response.data.results.forecast;
      console.log(currentData)
  
      setHorario(currentData[0].date + " - "+currentData[0].weekday || "");
      setPrecipitacao(`${currentData[0].rain}mm` || "");
  
      const novoAlertaChuva = parseFloat(currentData[0].rain) > 0.2;
      setAlertaChuva(novoAlertaChuva);
  
      setAlertaEnchente(novoAlertaChuva ? "Alerta de Chuva" : "Sem alerta");
    } catch (error) {
      console.error("Erro na requisição à API:", error.message);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Aviso de Chuvas
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
            <form action="" method="POST">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="cidade"
                    >
                      <i class="fas fa-city mr-2"></i>
                      Escolha a cidade
                    </label>
                    <select
                      id="cidade"
                      name="cidade"
                      value={cidadeSelecionada}  // Valor da cidade selecionada
                      onChange={handleCidadeChange} // Adiciona o manipulador de eventos onChange
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-2"
                    >
                      {cidadesParana.map((cidade, index) => (
                        <option key={index} value={cidade}>
                          {cidade}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="horario"
                    >
                      <i class="far fa-clock mr-2"></i>
                      Dia Previsto
                    </label>
                    <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-2">

                      {horario}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="precipitacao"
                    >
                      <i class="fas fa-tint mr-2"></i>
                      Precipitação Aproximada
                    </label>
                    <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-2">
                      {/* Coloque aqui a informação a ser exibida */}
                      {precipitacao}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="alerta"
                    >
                      <i class="fas fa-exclamation-triangle mr-2"></i>
                      Alerta de enchente
                    </label>
                    <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-2">
                      {/* Coloque aqui a informação a ser exibida */}
                      {alertaEnchente}
                    </div>
                  </div>
                </div>


                <div className="text-center mt-6">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleVerificarClick}
                  >
                    <i class="far fa-check-circle mr-2"></i>
                    {/* Botão de verificar aqui */}
                    Verificar
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

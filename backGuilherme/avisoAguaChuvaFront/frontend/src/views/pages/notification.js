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
  ];

  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [horario, setHorario] = useState("");
  const [precipitacao, setPrecipitacao] = useState("");
  const [alertaEnchente, setAlertaEnchente] = useState("");
  const [alertaChuva, setAlertaChuva] = useState(false);


  const removerAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '-parana';
  };

  const handleCidadeChange = (event) => {
    // Atualiza a cidade selecionada quando o usuário escolhe uma opção
    setCidadeSelecionada(event.target.value);
  };

  const handleVerificarClick = () => {
    const cidadeSemAcento = removerAcentos(cidadeSelecionada.toLowerCase());
    // Construa a URL da API com a cidade selecionada
    const apiUrl = `http://api.weatherstack.com/current`;

    const params = {
      access_key: '29973e7a919cb0510e7768baf62a38c0',
      query: cidadeSemAcento

    }
    // Construa a URL da API com base nos parâmetros
    const url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    // Faça a requisição à API usando Fetch
    fetch(url)
      .then(response => {
        // Verifique se a resposta da API foi bem-sucedida (status 200-299)
        if (!response.ok) {
          throw new Error(`Erro na requisição à API: ${response.status}`);
        }
        // Parse da resposta JSON
        return response.json();
      })
      .then(data => {
        // Extraia os dados relevantes da resposta da API
        const currentData = data.current;

        // Atualize os estados com os dados obtidos
        setHorario(currentData.observation_time || "");
        setPrecipitacao(`${currentData.precip}mm` || "");

        // Verificação para o alerta de chuva
        const novoAlertaChuva = parseFloat(currentData.precip) > 55;
        setAlertaChuva(novoAlertaChuva);

        // Atualização da string do alertaEnchente com base no valor de alertaChuva
        setAlertaEnchente(novoAlertaChuva ? "Alerta de Chuva" : "Sem alerta");
      })
      .catch(error => {
        // Em caso de erro, manipule conforme necessário
        console.error("Erro na requisição à API:", error);
      });
  }
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
                      Horário de Observação
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

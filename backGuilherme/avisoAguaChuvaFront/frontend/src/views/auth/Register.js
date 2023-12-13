import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroCamposVazios, setErroCamposVazios] = useState(false);
  const [verRender, setVerRender] = useState(false);
  const [emailCriado, setEmailCriado] = useState(false);

  let verifica = [];

  const consultaBanco = async () => {
    await axios
      .get("http://localhost:3000/cadastro")
      .then((res) => {
        console.log(res);
        verifica = res.data.map((user) => {
          return user.email === email;
        });
      });
  };

  const resetForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setErroCamposVazios(false);
  };

  const enviarForm = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErroCamposVazios(true);
      return;
    }

    const data = {
      nome,
      email,
      senha,
    };

    await consultaBanco();

    if (verifica.includes(true)) {
      setVerRender(true);

      setTimeout(() => {
        setVerRender(false);
      }, 2000);
    } else {
      await axios.post("http://localhost:3000/cadastro", data);

      // Atualize o estado para indicar que o registro foi realizado com sucesso
      setEmailCriado(true);

      // Agora, após 5 segundos, redirecione para a página de login
      setTimeout(() => {
        setEmailCriado(false); // Limpa a mensagem após o redirecionamento
        setVerRender(false); // Limpa a mensagem de erro, se houver
        // Redireciona para a página de login
        window.location.href = "/auth/login";
      }, 2000);
    }

    resetForm();
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Cadastre-se com
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={enviarForm}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 `}
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </div>
                  {emailCriado && (
                    <div style={{ color: '#00C853' }} className="text-xs mt-1">
                    Registro Realizado com Sucesso
                  </div>
                  )}
                  {verRender && (
                    <div className="text-red-500 text-xs mt-1">E-mail já existe</div>
                  )}
                  {erroCamposVazios && (
                    <div className="text-red-500 text-xs mt-1">
                      Todos os campos são obrigatórios.
                    </div>
                  )}

                  <div className="text-center mt-6">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Criar Conta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

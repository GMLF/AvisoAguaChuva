import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [registroSucesso, setRegistroSucesso] = useState(0);
  const [erroCamposVazios, setErroCamposVazios] = useState(false);
  const [emailCadastrado, setEmailCadastrado] = useState(0);

  const resetForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setRegistroSucesso(0);
    setErroCamposVazios(false);
    setEmailCadastrado(0);
  };

  const clearSuccessMessage = () => {
    setRegistroSucesso(0);
  };

  const clearErrorMessage = () => {
    setRegistroSucesso(0);
  };

  const verificarEmailExistente = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cadastro?email=${email}`);

      if (response.data.length > 0) {
        // E-mail já existe
        setEmailCadastrado(1);
        setRegistroSucesso(6);

        // Limpar a mensagem de erro após 3 segundos
        setTimeout(clearErrorMessage, 3000);
      } else {
        // E-mail não existe
        setEmailCadastrado(2);
      }
    } catch (error) {
      console.error("Erro ao verificar e-mail:", error);
    }
  };

  const enviarForm = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!nome || !email || !senha) {
      setErroCamposVazios(true);
      return;
    }

    // Verificar se o e-mail já existe
    await verificarEmailExistente();

    if (emailCadastrado === 1) {
      // E-mail não existe, realizar o cadastro
      try {
        await axios.post("http://localhost:3000/cadastro", {
          nome,
          email,
          senha,
        });

        resetForm();
        setRegistroSucesso(1);

        // Limpar a mensagem de sucesso após 5 segundos
        setTimeout(clearSuccessMessage, 4000);
      } catch (error) {
        console.error("Erro na requisição:", error);
        setRegistroSucesso(6);
      }
    } else if (emailCadastrado === 2) {
      // E-mail já cadastrado
      setRegistroSucesso(0);

      // Limpar a mensagem de erro após 3 segundos
      setTimeout(clearErrorMessage, 3000);
    }
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
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${emailCadastrado === 2 ? 'border-red-500' : ''}`}
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={verificarEmailExistente}
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
                {registroSucesso === 1 && (
                  <div className="text-green-500 mt-3 text-center">
                    Registro realizado com sucesso!
                  </div>
                )}
                {registroSucesso === 6 && (
                  <div className="text-red-500 mt-3 text-center">
                    E-mail já cadastrado!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

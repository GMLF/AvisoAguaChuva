import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async () => {
    try {
      const dadosTemporarios = { email, senha };

      const response = await axios.get("http://localhost:3000/cadastro");

      const usuarioExistente = response.data.find(
        (usuario) => usuario.email === email && usuario.senha === senha
      );

      if (usuarioExistente) {
        console.log("Login bem-sucedido!");
        setRedirect(true);
      } else {
        setErroLogin("Credenciais inválidas. Verifique seu email e senha.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErroLogin("Erro ao realizar o login. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      {redirect && <Redirect to="/admin/dashboard" />}

      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Entre com a sua conta para acessar a plataforma
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${erroLogin ? 'border-red-500' : ''}`}
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
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${erroLogin ? 'border-red-500' : ''}`}
                      placeholder="Senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </div>
                  {erroLogin && <p className="text-red-500 text-xs mt-1">{erroLogin}</p>}
                  <div className="text-center mt-6">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleLogin}
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="#" className="text-black">
                  <small>Esqueceu sua senha?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-800">
                  <small>Registrar-se</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

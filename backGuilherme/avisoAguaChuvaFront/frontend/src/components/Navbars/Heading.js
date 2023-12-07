/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom';

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ml-2">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <div className="mr-4 lg:mb-0 flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-300">
                <i className="fas fa-umbrella"></i>
              </div>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto ml-3">
              <li className="flex items-center">

                <Link to="/pages/notification">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <i className="text-blueGray-400 far fa-bell text-lg leading-lg mr-2 ml-3" />{" "}
                    Avisos
                  </a>
                </Link>

                <Link to="/pages/donation">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2 ml-3" />{" "}
                    Doações
                  </a>
                </Link>

                <Link to="/pages/help">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2 ml-3" />{" "}
                    PEDIR AJUDA
                  </a>
                </Link>

              </li>
            </ul>
            <ul>
              <li className="flex items-center">
                <Link to="/auth/login">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-3 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-sign-in-alt"></i> Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>




      </nav>
    </>
  );
}

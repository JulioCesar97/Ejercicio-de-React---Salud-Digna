import React from "react";
import Logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className=" bg-primary bg-opacity-5 ">
      <div className="sticky container mx-auto top-0 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img className="mr-6" src={Logo} alt="logo" width="40" />
          <div className="flex">
            <a href="/" className="mx-6 hover:text-primary">
              inicio
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              quienes somos
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              precios
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              descargas
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              clientes
            </a>
          </div>
        </div>
        <div className="flex">
          <button className="bg-primary text-white hover:bg-amber-500 transition-colors duration-300 rounded-md py-2 px-6 mx-2">
            registrarse
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

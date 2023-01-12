import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto border-y border-lightgray">
        <div className="grid grid-cols-4">
          <div className="p-6 flex justify-center">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Inicio
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Quienes somos
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Registrse
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Clientes
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 flex justify-center">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Contáctanos
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Centro de ayuda
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 flex justify-center">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Politica de privacidad
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Terminos y condiciones
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Aviso de privacidad
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 ">
            <span className="text-gray">Newsletter</span>
            <p className="text-gray font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              volutpat bibendum erat eget vestibulum.
            </p>
            <div className="flex gap-2 my-4">
              <input
                type="email"
                className="border border-lightgray rounded-md p-4 outline-none "
                placeholder="correo electronico"
              />
              <button className="bg-primary text-white hover:bg-amber-500 transition-colors duration-300 rounded-md py-2 px-4 aspect-square">
                <svg
                  className="fill-current text-white inline mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                >
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import MBitcoin from "../../images/monedaBitcoin.png";
import MEtereo from "../../images/monedaEtereo.png";

function TableCurrency() {
  return (
    <section className="relative md:-mt-10">
      <div className="mx-auto rounded-3xl lg:mx-8 bg-white py-8 px-4 shadow-lg">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Tendencias</span>
              <a href="" className="text-primary">
                más
              </a>
            </div>
            <div>
              <div className="grid grid-cols-3 mb-4">
                <span className="text-gray">Nombre</span>
                <span className="text-gray">Precio</span>
                <span className="text-gray">Icono</span>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Bitcoin</div>
                <div className="flex items-center">
                  <svg
                    className="fill-current text-green inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MBitcoin} alt="mbitcoin" width="32" />
                </div>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Ethereum</div>
                <div>
                  <svg
                    className="fill-current text-red inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MEtereo} alt="mbitcoin" width="32" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Tendencias</span>
              <a href="" className="text-primary">
                más
              </a>
            </div>
            <div>
              <div className="grid grid-cols-3 mb-4">
                <span className="text-gray">Nombre</span>
                <span className="text-gray">Precio</span>
                <span className="text-gray">Icono</span>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Bitcoin</div>
                <div className="flex items-center">
                  <svg
                    className="fill-current text-green inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MBitcoin} alt="mbitcoin" width="32" />
                </div>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Ethereum</div>
                <div>
                  <svg
                    className="fill-current text-red inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MEtereo} alt="mbitcoin" width="32" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Tendencias</span>
              <a href="" className="text-primary">
                más
              </a>
            </div>
            <div>
              <div className="grid grid-cols-3 mb-4">
                <span className="text-gray">Nombre</span>
                <span className="text-gray">Precio</span>
                <span className="text-gray">Icono</span>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Bitcoin</div>
                <div className="flex items-center">
                  <svg
                    className="fill-current text-green inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MBitcoin} alt="mbitcoin" width="32" />
                </div>
              </div>
              <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
                <div>Ethereum</div>
                <div>
                  <svg
                    className="fill-current text-red inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="10"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                  $100
                </div>
                <div>
                  <img src={MEtereo} alt="mbitcoin" width="32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableCurrency;

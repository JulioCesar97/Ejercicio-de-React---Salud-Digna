import React from "react";
import Bitcoin from "../../images/bitcoin.png";

function HeroSection() {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div
          className="flex items-center "
          style={{ marginTop: "8rem", marginBottom: "8rem" }}
        >
          <div className="relative">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-normal">
              Lorem ipsum dolor sit amet <br />
              <span className="text-primary">
                Nulla volutpat bibendum erat eget vestibulum
              </span>
              <br />
              Integer ut turpis elit.
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                volutpat bibendum erat eget vestibulum. Integer ut turpis elit.
              </p>
            </div>
            <div className="flex">
              <button className="bg-primary text-white hover:bg-amber-500 transition-colors duration-300 rounded-md py-2 px-6">
                Iniciar
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-md py-2 px-6 mx-2">
                Descargar
              </button>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img
            src={Bitcoin}
            alt="bitcoin"
            width="400"
            style={{ marginLeft: "13rem", marginTop: "3rem" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

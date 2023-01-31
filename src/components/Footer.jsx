import React from "react";
import MercadoPago from "../img/mercadopago.png";
import MasterCard from "../img/mastercard.png";
import Visa from "../img/visa.png";
import AmericanExpress from "../img/american-express.png";
import CorreArgentino from "../img/correo-argentino.png";
import Andreani from "../img/Andreani.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import LinkedIn from "../img/linkedin.png";
import QR from "../img/QR.png";

const Footer = () => {
  return (
    <div className="bg-violet-500 w-full p-3 flex flex-col justify-between h-80 md:h-64 border border-orange-500 font-medium">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-0 md:justify-around md:items-center">
        <div className="md:text-center">
          <p>MEDIOS DE PAGO</p>
          <div className="flex space-x-2 pt-2">
            <img
              src={MercadoPago}
              className="w-10 h-6 md:w-16 md:h-9"
              alt="/"
            />
            <img src={MasterCard} className="w-10 h-6 md:w-16 md:h-9" alt="/" />
            <img src={Visa} className="w-10 h-6 md:w-16 md:h-9" alt="/" />
            <img
              src={AmericanExpress}
              className="w-10 h-6 md:w-16 md:h-9"
              alt="/"
            />
          </div>
        </div>
        <div className="md:text-center">
          <p>MEDIOS DE ENVÍO</p>
          <div className="flex space-x-2 pt-2">
            <img
              src={CorreArgentino}
              className="w-10 h-6 md:w-16 md:h-9"
              alt="/"
            />
            <img src={Andreani} className="w-10 h-6 md:w-16 md:h-9" alt="/" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-center">
        <p>SEGUINOS</p>
        <div className="flex space-x-8 pt-4">
          <img src={Instagram} className="w-12 h-12 md:w-17 md:h-17" alt="/" />
          <img src={Facebook} className="w-12 h-12 md:w-17 md:h-17" alt="/" />
          <a href="https://www.linkedin.com/in/iv%C3%A1n-ariel-gentta-117077231/">
            <img src={LinkedIn} className="w-12 h-12 md:w-17 md:h-17" alt="/" />
          </a>
          <img src={QR} className="w-12 h-12 md:w-17 md:h-17" alt="/" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <p>CONTACTO: ecommerce@fachero.com</p>
        <p>©2022 - Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;

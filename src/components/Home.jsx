import React from "react";
import Moda1 from "../img/moda1.jpg";
import Moda2 from "../img/moda2.jpg";
import Moda3 from "../img/moda3.jpg";
import { AiFillLock, AiFillCreditCard } from "react-icons/ai";
import { RiTruckFill } from "react-icons/ri";
import { TiArrowSync } from "react-icons/ti";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex pt-24 justify-center p-2">
        <h1 className="text-white pt-32 text-4xl lg:text-5xl text-center absolute top-0">
          E-Commerce Estilo
        </h1>
        <div className="border-2 border-orange-500 hidden md:flex md:w-[400px] lg:w-[600px]">
          <img src={Moda1} className="flex-grow" alt="/" />
        </div>
        <div className="border-2 border-orange-500 md:w-[400px] lg:w-[600px]">
          <img src={Moda2} className="flex-grow" alt="/" />
        </div>
        <div className="border-2 border-orange-500 hidden lg:flex lg:w-[600px]">
          <img src={Moda3} className="flex-grow" alt="/" />
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h1 className="text-white text-4xl text-center">Novedades</h1>
        <div className="bg-white w-full h-36">fetch de productos random</div>
        <div className="w-full flex-grow p-10 bg-violet-300 border-[3px] border-orange-500 grid grid-cols-1 lg:grid-cols-2">
          <div className="py-4 flex flex-col items-center font-semibold text-center">
            <p>
              <RiTruckFill className="text-4xl" />
            </p>
            <h2 className="text-xl py-2">ENVÍOS A TODO EL PAÍS</h2>
            <p>COMPRÁ SIN SALIR DE TU CASA</p>
          </div>
          <div className="py-4 flex flex-col items-center font-semibold text-center">
            <p>
              <AiFillCreditCard className="text-4xl" />
            </p>
            <h2 className="text-xl py-2">HASTA 3 CUOTAS SIN INTERÉS</h2>
            <p>CON TODAS LAS TARJETAS</p>
          </div>
          <div className="py-4 flex flex-col items-center font-semibold text-center">
            <p>
              <AiFillLock className="text-4xl" />
            </p>
            <h2 className="text-xl py-2">COMPRA SEGURA</h2>
            <p>PROTEGEMOS TUS DATOS</p>
          </div>
          <div className="py-4 flex flex-col items-center font-semibold text-center">
            <p>
              <TiArrowSync className="text-4xl" />
            </p>
            <h2 className="text-xl py-2">CAMBIOS O DEVOLUCIONES</h2>
            <p>HASTA 10 DÍAS LUEGO DE EFECTUAR LA COMPRA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

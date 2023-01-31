import CartWidget from "./CartWidget";
import logoRopa from "../img/logo-ropa.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="h-20 w-full px-4 flex justify-between items-center bg-violet-500 fixed border  border-orange-500 z-40">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoRopa} alt="posible logo tienda" className="w-12 h-12" />
        </Link>
      </div>
      <Link to="/">
        <p className="cursor-pointer font-bold hover:border-b-2 border-orange-500 hidden md:flex">
          Home
        </p>
      </Link>
      <Link to="/nosotros">
        <p className="cursor-pointer font-bold hover:border-b-2 border-orange-500 hidden md:flex">
          Nosotros
        </p>
      </Link>
      <div className="relative md:inline-block hidden text-left ">
        <div>
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex w-full justify-center rounded-md border-[3px] border-black bg-orange-400 px-4 py-2 text-sm font-bold shadow-sm hover:bg-orange-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Productos
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {showDropdown && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Link to="/productos">
                <p className="p-2 hover:font-semibold" onClick={handleClick}>
                  Todos los productos
                </p>
              </Link>
              <Link to="/categoria/men's clothing">
                <p className="p-2 hover:font-semibold" onClick={handleClick}>
                  Men's clothing
                </p>
              </Link>
              <Link to="/categoria/jewelery">
                <p className="p-2 hover:font-semibold" onClick={handleClick}>
                  Jewelery
                </p>
              </Link>
              <Link to="/categoria/electronics">
                <p className="p-2 hover:font-semibold" onClick={handleClick}>
                  Electronics
                </p>
              </Link>
              <Link to="/categoria/women's clothing">
                <p className="p-2 hover:font-semibold" onClick={handleClick}>
                  Women's clothing
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="absolute right-16 md:right-8">
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
      <div>
        <IoMdMenu
          className="h-10 w-10 md:hidden absolute top-5 right-4"
          onClick={handleNav}
        />
      </div>
      {/* MOBILE */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] h-full bg-violet-200 p-10 ease-in duration-500"
              : "fixed left-[-220%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-end">
              <AiOutlineClose className="w-8 h-8" onClick={handleNav} />
            </div>
            <div>
              <Link to="/">
                <p className="font-bold py-2" onClick={handleNav}>
                  Home
                </p>
              </Link>
              <Link to="/nosotros">
                <p className="font-bold py-2" onClick={handleNav}>
                  Nosotros
                </p>
              </Link>
              <p className="font-bold pt-2">Productos:</p>
            </div>
            <div className="">
              <Link to="/productos">
                <p className="pl-2" onClick={handleNav}>
                  Todos los productos
                </p>
              </Link>
              <Link to="/categoria/men's clothing">
                <p className="pl-2 pt-3" onClick={handleNav}>
                  Men's clothing
                </p>
              </Link>
              <Link to="/categoria/jewelery">
                <p className="pl-2 pt-3" onClick={handleNav}>
                  Jewelery
                </p>
              </Link>
              <Link to="/categoria/electronics">
                <p className="pl-2 pt-3" onClick={handleNav}>
                  Electronics
                </p>
              </Link>
              <Link to="/categoria/women's clothing">
                <p className="pl-2 pt-3" onClick={handleClick}>
                  Women's clothing
                </p>
              </Link>
            </div>
            <div className="flex flex-col justify-center pt-36 space-y-4">
              <img
                src={logoRopa}
                alt="posible logo tienda"
                className="w-30 h-30"
              />
              <p>CONTACTO: ecommerce@fachero.com</p>
              <p className="text-xs">©2022 - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

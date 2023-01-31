import CartWidget from "./CartWidget";
import logoRopa from "../img/logo-ropa.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-20 w-full px-4 flex justify-between items-center bg-violet-500 fixed border  border-orange-500 z-40">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoRopa} alt="posible logo tienda" className="w-12 h-12" />
        </Link>
      </div>
      <Link to="/">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Home
        </p>
      </Link>
      <Link to="/productos">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500 ">
          Productos
        </p>
      </Link>
      <Link to="/categoria/men's clothing">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Men's clothing
        </p>
      </Link>
      <Link to="/categoria/jewelery">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Jewelery
        </p>
      </Link>
      <Link to="/categoria/electronics">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Electronics
        </p>
      </Link>
      <Link to="/categoria/women's clothing">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Women's clothing
        </p>
      </Link>
      <Link to="/nosotros">
        <p className="cursor-pointer font-bold hover:border-b-2 hover:border-orange-500">
          Nosotros
        </p>
      </Link>
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;

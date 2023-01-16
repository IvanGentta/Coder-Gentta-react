import CartWidget from "./CartWidget";
import logoRopa from "../img/logo-ropa.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-20 w-full px-4 flex justify-between items-center bg-violet-500 fixed">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoRopa} alt="posible logo tienda" className="w-12 h-12" />
        </Link>
      </div>
      <Link to="/">
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Home
        </p>
      </Link>
      <Link to="/productos">
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Productos
        </p>
      </Link>
      <Link to="/nosotros">
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Nosotros
        </p>
      </Link>
      <CartWidget cantidad="23" />
    </nav>
  );
};

export default NavBar;

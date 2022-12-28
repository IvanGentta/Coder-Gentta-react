import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div className="h-20 w-full px-4 flex justify-between items-center bg-violet-500">
        <div className="flex items-center">
          <p className="px-2 text-xl">¿</p>
          <img
            src={require("../img/logo-ropa.png")}
            alt="posible logo tienda"
            className="w-12 h-12"
          />
          <p className="px-2 text-xl">O</p>
          <img
            src={require("../img/bebidasLogo.png")}
            alt="posible logo tienda"
            className="w-22 h-12"
          />
          <p className="px-2 text-xl">?</p>
        </div>
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Home
        </p>
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Categorias
        </p>
        <p className="cursor-pointer font-bold hover:border-b-2 border-violet-900">
          Nosotros
        </p>
        <CartWidget cantidad="23" />
      </div>
    </nav>
  );
};

export default NavBar;

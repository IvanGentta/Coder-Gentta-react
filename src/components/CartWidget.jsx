import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadItemsCarrito } = useContext(CartContext);

  return (
    <div className="flex cursor-pointer">
      <div className="w-7 h-7 flex justify-center bg-red-500 rounded-full animate-bounce">
        {cantidadItemsCarrito()}
      </div>
      <BsCart4 className="w-10 h-10 " />
    </div>
  );
};

export default CartWidget;

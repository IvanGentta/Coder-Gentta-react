import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = (props) => {
  const { id, title, category, description, price, image } = props.data;

  const { agregarAlCarrito } = useContext(CartContext);

  // const onAddd = () => {
  //   const itemExistente = state.cart.cartItems.find((i) => i.slug === product.slug);
  //   const quantity
  // }

  const [masProductos, setMasProductos] = useState([]);

  const [cantidadProductos, setCantidadProductos] = useState(1);
  const guardarCantidad = (cantidadX) => {
    setCantidadProductos(cantidadX);
  };
  useEffect(() => {
    console.log(
      `el contador es ${cantidadProductos}, el total es ${
        cantidadProductos * price
      }`
    );
  }, [cantidadProductos]);

  const onAdd = () => {
    const producto = {
      id: id,
      title: title,
      category: category,
      price: price * cantidadProductos,
      count: cantidadProductos,
      image: image,
    };
    agregarAlCarrito(producto);
  };

  //Mas productos
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=2`)
      .then((res) => res.json())
      .then((json) =>
        setMasProductos(
          json.map((e) => (
            <Item key={e.id} id={"Producto, id = " + e.id} data={e} />
          ))
        )
      );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full min-h-screen pt-24 flex flex-col items-center">
      <div className="border w-[315px] border-black mx-1 bg-white md:w-[760px] lg:w-[850px] md:h-[550px]">
        <div className="p-3 py-2">
          <p className="border-b-2 border-violet-500 first-letter:uppercase">
            {category}
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:h-[460px] md:space-x-12">
            <div className="p-2">
              <img src={image} className="w-56" alt="Imagen del producto" />
            </div>
            <div className="flex flex-col w-[300px] md:space-y-2 md:w-[500px]">
              <p className="font-semibold text-xl text-center md:text-2xl">
                {title}
              </p>
              <p className="text-center text-sm lg:text-base">{description}</p>
              <p className="font-semibold text-3xl text-center">{price}$</p>
              <div className="flex space-x-6 justify-center">
                <ItemCount stock={5} cantidadAComprar={guardarCantidad} />
                <button
                  onClick={onAdd}
                  className="border-[3px] border-orange-500 p-1 mt-5 rounded-xl bg-violet-400 font-semibold transition duration-150 ease-in hover:bg-violet-600"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-white text-3xl flex text-center py-2 justify-center">
          También podría interesarte
        </h1>
        <div className="flex flex-col items-center space-y-5">
          {masProductos}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

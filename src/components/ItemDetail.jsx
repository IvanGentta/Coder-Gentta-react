import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";
import { AiOutlineArrowRight } from "react-icons/ai";

const ItemDetail = (props) => {
  const { title, category, description, price, image } = props.data;
  const [masProductos, setMasProductos] = useState([]);

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
      <div className="border w-[315px] border-black mx-1 bg-white md:w-[700px] md:h-[500px]">
        <div className="p-3 py-2">
          <p className="border-b-2 border-violet-500 first-letter:uppercase">
            {category}
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:h-[460px] md:space-x-12">
            <div className="p-2">
              <img src={image} className="w-56" alt="Imagen del producto" />
            </div>
            <div className="flex flex-col w-[400px] md:space-y-3">
              <p className="font-semibold text-xl text-center md:text-2xl">
                {title}
              </p>
              <p className="text-center">{description}</p>
              <p className="font-semibold text-3xl text-center">{price}$</p>
              <div>
                <ItemCount stock={5} />
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
        <Link to="/">
          <h1 className="text-white text-3xl flex text-center py-2 w-full justify-center items-center">
            Más productos similares
            <AiOutlineArrowRight />
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;

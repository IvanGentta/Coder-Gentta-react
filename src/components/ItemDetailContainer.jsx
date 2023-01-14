import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  const { productoId } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productoId}`)
      .then((res) => res.json())
      .then((e) =>
        setProductos(
          <ItemDetail key={e.id} id={"Producto, id = " + e.id} data={e} />
        )
      );
  }, [productoId]);

  return (
    <section className="pt-20">
      <Link to="/productos">
        <h1 className="text-white text-2xl p-4 flex items-center">
          <AiOutlineArrowLeft />
          Volver a Productos
        </h1>
      </Link>
      {productos}
    </section>
  );
};

export default ItemDetailContainer;

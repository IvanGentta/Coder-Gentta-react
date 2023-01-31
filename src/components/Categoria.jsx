import React, { useEffect, useState } from "react";
import Item from "./Item";

const Categoria = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
      .then((res) => res.json())
      .then((json) =>
        setProductos(
          json.map((e) => (
            <Item key={e.id} id={"Producto, id = " + e.id} data={e} />
          ))
        )
      );
  }, [props.categoria]);

  return (
    <div className="flex items-center content-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 pb-4">
        {productos}
      </div>
    </div>
  );
};

export default Categoria;

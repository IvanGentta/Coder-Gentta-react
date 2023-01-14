import { React, useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // API Productos
    fetch("https://fakestoreapi.com/products?")
      .then((res) => res.json())
      .then((json) =>
        setProductos(
          json.map((e) => (
            <Item key={e.id} id={"Producto, id = " + e.id} data={e} />
          ))
        )
      );
  }, []);

  return (
    <div className="flex items-center content-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 pb-4">
        {productos}
      </div>
    </div>
  );
};

export default ItemList;

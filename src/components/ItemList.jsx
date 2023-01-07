import React from "react";
import Item from "./Item";

const ItemList = () => {
  const listaDeProductos = [
    {
      id: 1,
      nombre: "Heladera",
      descripcion: "Es blanca y tiene 2 metros de altura",
      precio: 8000,
      categoria: "hogar",
      stock: 3,
    },
    {
      id: 1,
      nombre: "Heladera",
      descripcion: "Es blanca y tiene 2 metros de altura",
      precio: 8000,
      categoria: "hogar",
      stock: 15,
    },
    {
      id: 1,
      nombre: "Heladera",
      descripcion: "Es blanca y tiene 2 metros de altura",
      precio: 8000,
      categoria: "hogar",
      stock: 10,
    },
    {
      id: 1,
      nombre: "Heladera",
      descripcion: "Es blanca y tiene 2 metros de altura",
      precio: 8000,
      categoria: "hogar",
      stock: 20,
    },
  ];

  //transformar datos en elementos renderizables
  const listaProductosRenderizables = listaDeProductos.map((producto) => (
    <Item
      key={producto.id}
      id={"producto, id = " + producto.id}
      data={producto}
    />
  ));

  return (
    <div>
      <div>{listaProductosRenderizables}</div>
    </div>
  );
};

export default ItemList;

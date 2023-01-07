import React from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <div>
      <div>
        <p>{props.data.categoria}</p>
        <p>{props.data.nombre}</p>
        <p>{props.data.descripcion}</p>
        <p>{props.data.precio}</p>
        <p>{props.data.stock}</p>
        <ItemCount stock={props.data.stock} />
      </div>
    </div>
  );
};

export default Item;

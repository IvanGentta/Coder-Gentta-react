import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-2xl text-center">{props.greeting}</h1>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;

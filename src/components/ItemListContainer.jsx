import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-20">
      <h1 className="text-2xl md:text-6xl text-center py-4 md:py-8 text-white">
        Todos nuestros productos
      </h1>
      <div className="">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;

import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="flex justify-center min-h-screen">
      <h1 className="text-2xl text-center">{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;

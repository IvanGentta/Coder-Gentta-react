import React from "react";
import { useParams } from "react-router-dom";
import Categoria from "./Categoria";

const CategoriaContainer = () => {
  const { categoriaId } = useParams();

  return (
    <div>
      <h1 className="text-2xl md:text-6xl text-center text-white pt-24 first-letter:uppercase">
        {categoriaId}
      </h1>
      <section className="flex flex-col items-center w-full min-h-screen pt-5">
        <Categoria categoria={categoriaId} />
      </section>
    </div>
  );
};

export default CategoriaContainer;

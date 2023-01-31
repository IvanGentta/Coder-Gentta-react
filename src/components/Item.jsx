import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { title, category, price, id, image } = props.data;

  return (
    <div className="w-[300px] h-[500px] md:w-[600px] md:h-[400px] border-4 border-black mx-1 p-3 flex flex-col bg-white">
      <p className="border-b-2 border-violet-500 first-letter:uppercase">
        {category}
      </p>

      <div className="flex flex-col items-center pt-2 md:flex-row md:justify-center md:h-[380px] md:space-x-8">
        <div className="p-2">
          <img src={image} className="w-32 md:w-44" alt="Imagen del producto" />
        </div>

        {/*title - price - detalles  */}
        <div className="flex flex-col w-[300px]">
          <p className="font-semibold text-xl text-center">{title}</p>
          <div className="flex items-center space-x-2 justify-center pt-4">
            <p className="font-semibold text-xl">{price}$</p>
            <Link
              to={`/producto/${id}`}
              className="border-[3px] border-orange-500 p-1 rounded-xl bg-violet-400 font-semibold
                transition duration-100 ease-in hover:bg-violet-600"
            >
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

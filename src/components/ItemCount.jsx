import { useState, React } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  //Funciones
  const plusOne = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const minusOne = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-around pt-5">
      <div className="flex justify-between items-center w-32">
        <button
          onClick={minusOne}
          className="text-2xl text-violet-500  hover:text-violet-600 transition duration-150 ease-in"
        >
          <AiFillMinusCircle />
        </button>
        <p className="text-4xl">{count}</p>
        <button
          onClick={plusOne}
          className="text-2xl text-violet-500  hover:text-violet-600 transition duration-150 ease-in"
        >
          <AiFillPlusCircle />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

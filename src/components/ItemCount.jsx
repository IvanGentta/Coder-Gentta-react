import { useState, React } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  //Funciones
  const plusOne = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const minusOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    console.log(count);
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
      <button
        onClick={onAdd}
        className="border-[3px] border-orange-500 p-1 rounded-xl bg-violet-400 font-semibold transition duration-150 ease-in hover:bg-violet-600"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;

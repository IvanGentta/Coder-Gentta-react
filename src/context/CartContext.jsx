// import { useReducer, createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const initialState = {
//   cart: {
//     cartItems: [],
//   },
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CART_ADD_ITEM": {
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (item) => item.slug === newItem.slug
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((item) =>
//             item.name === existItem.name ? newItem : item
//           )
//         : [...state.cart.cartItems, newItem];
//       return {
//         ...state,
//         cart: { ...state.cart, cartItems },
//       };
//     }
//     case "CART_REMOVE_ITEM": {
//       const cartItems = state.cart.cartItems.filter(
//         (item) => item.slug !== action.payload.slug
//       );
//       return { ...state, cart: { ...state.cart, cartItems } };
//     }

//     default:
//       return state;
//   }
// };

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export default CartProvider;

//import useContext (utiliza el contexto creado) createContext (Crea el contexto)
import { createContext, useState } from "react";

//se crea y exporta el contexto con el valor por default (array vacia en este caso)
export const CartContext = createContext([]);

//crear y exportar funcion para usar context (hook personalizado con use)
//export const useCartContext = () => useContext(CartContext);

//crear el componente del contexto proveedor y exportarlo default
//se pasa children por la prop para poder ser utilizado por todos los componentes englobados por el
const CartProvider = ({ children }) => {
  //estado del context
  const [items, setItems] = useState([]);

  const [itemsParaAgregar, setItemsParaAgregar] = useState(1);

  let listaActual = items;

  //funciones

  const cantidadItemsCarrito = () => {
    if (listaActual.length === 0) {
      return 5;
    } else {
      return listaActual.length;
    }
  };

  const agregarAlCarrito = (data) => {
    if (validarProductoExistente(data.id)) {
      alert("hola");
    } else {
      listaActual.push(data);
      setItems(listaActual);
      console.log(listaActual);
    }
  };

  const borrarDelCarrito = (id) => {
    const nuevaLista = items.filter((e) => e.id !== id);
    setItems(nuevaLista);
  };
  const limpiarCarrito = () => {
    setItems([]);
  };

  const validarProductoExistente = (id) => {
    if (items.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  //render
  return (
    //se empaquetan en un objeto {} todas las funciones para pasarlas por el value
    <CartContext.Provider
      value={{
        items,
        itemsParaAgregar,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito,
        cantidadItemsCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

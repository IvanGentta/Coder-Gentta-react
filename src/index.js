//Modulos
import React from "react";
import ReactDOM from "react-dom/client";

//Estilos
import "./index.css";

//Componentes
import NavBar from "./components/NavBar";

//Core
import reportWebVitals from "./reportWebVitals";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting="BIENVENIDOS AL E-COMMERCE EL CUAL AUN NO ME DECIDO SI VA A VENDER ROPA FACHERA O BEBIDAS ALCOHOLICAS" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

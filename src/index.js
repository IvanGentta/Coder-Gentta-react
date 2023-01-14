//Modulos
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Estilos
import "./index.css";

//Core
import reportWebVitals from "./reportWebVitals";

//Componentes
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Categorias from "./components/Categorias";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Background className="fondo">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route
            exact
            path="/producto/:productoId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/categorias" element={<Categorias />} />
          <Route exact path="/nosotros" element={<AboutUs />} />
        </Routes>
      </Background>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

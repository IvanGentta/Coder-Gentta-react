import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../img/Spinner.gif";

const Loader = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 5000);
  }, []);

  return (
    <div>
      <div>
        {cargando ? (
          <div>
            Cargando <img src={Spinner} alt="Gif cargando" />
          </div>
        ) : (
          "Cargado"
        )}
      </div>
    </div>
  );
};

export default Loader;

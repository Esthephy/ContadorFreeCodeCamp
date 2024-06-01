/* eslint-disable react/jsx-no-undef */
import "./App.css";
import freeCodeCampLogo from "./imagenes/logo.png";
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador.js";
import { useState } from "react";
function App() {
  //Hooks: son funciones especiales que te permiten usar caracteristicas de react con los componenetes
  const [numeroClics, setNumeroClics] = useState(0);

  const manejarClic = () => {
    setNumeroClics(numeroClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numeroClics={numeroClics} />

        <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

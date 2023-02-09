import React from "react";
import Catalogo from "./componentes/Catalogo";
import Contacto from "./componentes/Contacto";
import Home from "./componentes/Home";
import Marcas from "./componentes/Marcas";
import Navbar from "./componentes/navbar";
import Productos from "./componentes/Productos";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Productos></Productos>
      <Marcas></Marcas>
      <Catalogo></Catalogo>

      <Contacto></Contacto>
    </>
  );
};

export default App;

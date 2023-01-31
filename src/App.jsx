import React from "react";
import Home from "./componentes/Home";
import Navbar from "./componentes/navbar";
import Productos from "./componentes/Productos";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Productos></Productos>
    </>
  );
};

export default App;

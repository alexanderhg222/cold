import React, { useState } from "react";
import datos from "../datos.js";
const Productos = () => {
  const productos = datos;

  const prueba = [
    "All",
    ...new Set(productos.map((product) => product.producto)),
  ];
  console.log(prueba);
  const [data, setdata] = useState(datos);
  console.log(data);

  const filtrar = (product) => {
    if (product == "All") {
      setdata(datos);
      return;
    }
    const filtro = datos.filter((produc) => produc.producto === product);
    setdata(filtro);
    console.log(filtro);
  };

  return (
    <div className="min-h-screen py-10 text-black  ">
      <div className=" flex justify-center mx-auto py-10 font-semibold uppercase">
        <h3 className="text-4xl text-cyan-600"> Nuestros Productos</h3>
      </div>
      <div className="p-5 flex gap-2 justify-center">
        {prueba.map((btn) => (
          <button
            className="bg-cyan-600 px-2 py-3 rounded-lg text-white "
            type="button"
            value={btn}
            key={btn}
            onClick={(e) => {
              filtrar(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}>
            {btn}
          </button>
        ))}
      </div>
      <div className=" mx-10 flex gap-10 flex-wrap justify-center">
        {data.map((dat) => (
          <div className="border-4 rounded-lg border-cyan-600" key={dat.id}>
            <img className="border-b-4 border-cyan-600" src={dat.img} alt="" />

            <h3 className="text-sm flex justify-center py-1 font-semibold text-gray-700">
              {dat.nombre}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;

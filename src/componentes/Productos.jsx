import React, { useEffect, useState } from "react";
import img1 from "../assets/Productos/a5.png";
import datos from "../datos.js";
import Gatos from "../gatos";
import patos from "../datos.json";
import { motion } from "framer-motion";
import Modal from "./Modal";
const Productos = () => {
  const productos = datos;

  const prueba = [...new Set(productos.map((product) => product.producto))];
  //console.log(prueba);
  const [data, setdata] = useState(
    datos.filter((f1) => f1.producto == "Aire Acondiconado")
  );
  //console.log(data);

  const filtrar = (product) => {
    if (product == "All") {
      setdata(datos);
      return;
    }
    const filtro = datos.filter((produc) => produc.producto === product);
    setdata(filtro);
    //console.log(filtro);
  };

  //MODAL
  const [visible, setvisible] = useState(false);
  const [filtro, setfiltro] = useState(" ");
  const handleclose = () => {
    setvisible(false);
  };
  const handlemodal = (e) => {
    // e.preventDefault();
    setvisible(true);

    setfiltro(e.currentTarget.id);
  };

  return (
    <div className="min-h-screen pt-10  xl:py-32 lg:pt-10 text-black  ">
      <div className=" flex justify-center mx-auto py-5 font-semibold uppercase">
        <h3 className="md:text-4xl text-cyan-600 text-2xl">
          Nuestros Productos
        </h3>
      </div>
      <div className="p-5 flex flex-wrap gap-2 justify-center">
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
      <motion.div className=" md:mx-10 md:flex gap-5 grid grid-cols-2 md:flex-wrap justify-center transition-8000">
        {data.map((dat) => (
          <motion.div
            className="border-2 my-2 hover:scale-110 transition-6000 shadow-xl rounded-lg border-cyan-600 w-[12rem] "
            key={dat.id}
            layout
            transition={{ duration: 0.8 }}>
            <img
              className=" cursor-pointer  "
              src={dat.img}
              alt={" IMAGEN DAÑADA"}
              crossOrigin=""
            />

            <p
              id={dat.nombre}
              className="text-[10px]  border-t-4 border-cyan-600  text-center py-2 mx-2  font-semibold text-gray-700">
              {dat.nombre}
            </p>
            <div className="flex justify-center hover:scale-105 transition-300">
              {" "}
              <button
                id={dat.nombre}
                onClick={handlemodal}
                className="bg-cyan-600 p-1 my-1 text-white text-sm rounded-full ">
                Detalles
              </button>
            </div>
            <Modal
              filtro={filtro}
              data={data}
              onClose={handleclose}
              visible={visible}></Modal>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Productos;

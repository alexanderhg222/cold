import React, { useState } from "react";

const Modal = ({ visible, onClose, data, filtro }) => {
  if (!visible) return null;

  const gata = data.filter((dato) => dato.nombre === filtro);
  //console.log(filtro);

  return (
    <div>
      {gata.map((first) => (
        <div
          key={first.id}
          className="fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-md flex
       justify-center items-center z-20 text-white text-2xl">
          <div className=" bg-white flex flex-col justify-center items-center">
            <div className=" w-full h-auto flex justify-center ">
              <img src={first.img} alt="aaa" />
            </div>
            <div className="text-black mx-5 py-4"> {first.nombre}</div>
            <div className="text-black text-base py-4">{first.descripcion}</div>
            <button
              onClick={onClose}
              className="mx-2 bg-red-500 rounded-full my-2 p-2">
              CERRAR
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modal;

import React from "react";
import img from "../assets/imagenes/asset 7.png";
import video from "../assets/file.mp4";
import "../App.css";
const Home = () => {
  const sn = [
    "logo-instagram",
    "logo-facebook",
    "logo-whatsapp",
    "logo-linkedin",
  ];
  return (
    <section
      id="home"
      className=" min-h-screen flex py-10 
md:flex-row flex-col items-center ">
      <div>
        <video
          src={video}
          loop
          autoPlay
          muted
          className=" min-h-screen w-full z-auto top-[-10px] object-cover right-0 absolute opacity-80"></video>
      </div>
      <div className="flex-1  flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="md:w-7/12 w-11/12 h-full object-cover z-20  ml-[60px] "
        />
      </div>
      <div className="flex-1 z-10">
        <div className="md:text-left text-center">
          <h1
            className="md:text-5xl text-2xl md:leading-normal leading-10
        text-gray-400 font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl font-extrabold">
              Bienvenido!
              <br />
            </span>
            <span className="text-white font-extrabold">Somos</span> COLD
            <span className="text-cyan-600 font-extrabold">SMART</span>
          </h1>
          <h4
            className="md:text-2xl text-lg md:leading-normal leading-5
        mt-4 font-bold text-white">
            Somos importadores - distribuidores de las mejores marcas en HVAC y
            Refrigeración del mundo
          </h4>
          <button className="bg-[#01a2e3] font-semibold text-gray-600 rounded-lg px-6 py-2 mt-4">
            Cotiza
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {sn.map((social) => (
              <div
                key={social}
                className=" text-white hover:text-cyan-600 cursor-pointer">
                <ion-icon name={social}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

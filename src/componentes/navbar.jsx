import React from "react";
import { useState, useEffect } from "react";
import asset1 from "../assets/imagenes/asset 0.png";
const Navbar = () => {
  const menulinks = [
    { name: "INICIO", link: "#home" },
    { name: "NUESTROS PRODUCTOS", link: "#about" },
    { name: "CATALOGO", link: "#skills" },
    { name: "MARCAS DESTACADAS", link: "#projects" },
    { name: "CONTACTO", link: "#contact" },
  ];
  const sn = [
    "logo-instagram",
    "logo-facebook",
    "logo-whatsapp",
    "logo-linkedin",
  ];
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setsticky(true) : setsticky(false);
    });
  });
  const handlechangemenu = () => {
    open ? setopen(true) : setopen(false);
  };

  const [open, setopen] = useState(false);
  return (
    <nav
      className={` fixed w-full left-0 top-0 z-[999] ${
        sticky
          ? "md:bg-red-400 lg:bg-white/0 sm:bg-white md:text-gray-900 sm:text-gray-900 "
          : "md:text-white "
      }`}>
      <div className="flex items-center justify-between ">
        <div>
          <div className="mx-7 max-w-[55%] md:w-full flex flex-1  ">
            <img src={asset1} alt="" />
          </div>
        </div>

        <div
          className="text-white md:block hidden px-7 py-2  
        font-medium bg-gray-400 rounded-bl-full rounded-br-full ">
          <ul className="flex items-center xl:gap-20 lg:gap-5 py-2 lg:py-3 text-lg md:text-sm md:gap-3">
            {menulinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`z-[999] text-3xl  md:hidden m-5 sm:text-gray-900 cursor-pointer ${
            open ? "text-gray-900" : " sm:text-gray-100 md:hidden m-5 text-3xl"
          }`}
          onClick={() => setopen(!open)}>
          <ion-icon className="" name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-white absolute w-[58%] h-screen bg-[#01a2e3]
        px-7 py-2 font-medium  top-0 right-0 duration-300 ${
          open ? "right-0" : "right-[-100%]"
        }`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menulinks.map((menu, i) => (
              <li
                onClick={() => setopen(false)}
                key={i}
                className="px-6 hover:text-cyan-600">
                <a className="" href={menu?.link}>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 text-3xl  items-center md:justify-start justify-center gap-5 hidden lg:flex">
          {sn.map((social) => (
            <div
              key={social}
              className=" text-gray-600 hover:text-cyan-500 cursor-pointer">
              <ion-icon name={social}></ion-icon>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

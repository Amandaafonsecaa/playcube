import React from "react";
import Logo from "../assets/logo-navbar.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-brand-blue px-[10rem] py-2">
      <img src={Logo} alt="Logo" className="w-[8rem] h-[3rem] object-contain" />
      <div className="flex gap-[1.3rem] text-white font-semibold">
        <a href="">Filmes</a>
        <a href="">Séries</a>
      </div>
    </div>
  );
}

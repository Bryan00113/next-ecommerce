import Link from "next/link";
import React from "react";

import { Menu, NavbarIcon, SearchNavbar } from "..";

export const Navbar = () => {
  return (
    // md:px-8 lg:px-16 xl:px-32
    <header className="  sticky top-0  before:absolute before:inset-0 before:backdrop-blur-xl before:bg-black  before:-z-10 z-30  ">
      <div className=" px-4 sm:px-6 lg:px-8   ">
        <div className="flex items-center justify-between h-16">
          {/* mobile */}
          <div className=" h-full flex items-center justify-between md:hidden ">
            <Link href={"/"}>
              <div className="text-2xl text-white bg-slate-50 tracking-wide">
                <p className="">Lama</p>
              </div>
            </Link>
            <Menu />
          </div>
          {/* Bigger Screens */}
          <div className="hidden md:flex items-center justify-between gap-8  w-full h-full">
            {/* LEFT */}
            <div className="w-2/4 xl:w-1/2 flex items-center  text-white">
              <Link className="flex items-center gap-3" href="/">
                <div className=" tracking-wide pr-4">Lama</div>
              </Link>
              <div className="hidden   xl:flex gap-4   ">
                <Link href={"/"}>Inicio</Link>
                <Link href={"/"}>Categorias</Link>
                <Link href={"/"}>Detalles</Link>
                <Link href={"/"}>Contacto</Link>
                <Link href={"/"}>Sobre nosotros</Link>
              </div>
            </div>

            {/* RIGHT */}
            {/* w-2/4 relative bg-blue flex items-center  gap-8 justify-end */}
            <div className="w-2/4 relative bg-blue flex items-center  gap-8 justify-end">
              <SearchNavbar />
              <NavbarIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

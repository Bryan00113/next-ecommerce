import Link from "next/link";
import React from "react";

import { Menu, NavbarIcon, NavigationBar, SearchNavbar } from "..";

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
            <div className="w-2/4 xl:w-1/2 flex items-center text-white">
              <Link className="flex items-center gap-3" href="/">
                <div className="tracking-wide pr-4">Lama</div>
              </Link>
              <NavigationBar />
              {/* <div className="hidden xl:flex gap-4">
                <div className="relative group py-1 px-2">
                  <div className="hover:text-blue-300 transition-colors duration-400 cursor-pointer flex items-center">
                    <span>Inicio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black  shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-right duration-300 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Página Principal
                    </Link>
                    <Link
                      href="/featured"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Destacados
                    </Link>
                    <Link
                      href="/new-arrivals"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Nuevos Productos
                    </Link>
                  </div>
                </div>
                <div className="relative group py-1 px-2">
                  <div className="hover:text-blue-300 transition-colors duration-300 cursor-pointer flex items-center">
                    <span>Inicio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black  shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-right duration-300 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Página Principal
                    </Link>
                    <Link
                      href="/featured"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Destacados
                    </Link>
                    <Link
                      href="/new-arrivals"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Nuevos Productos
                    </Link>
                  </div>
                </div>
                <div className="relative group py-1 px-2">
                  <div className="hover:text-blue-300 transition-colors duration-300 cursor-pointer flex items-center">
                    <span>Inicio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black  shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-right duration-300 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Página Principal
                    </Link>
                    <Link
                      href="/featured"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Destacados
                    </Link>
                    <Link
                      href="/new-arrivals"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Nuevos Productos
                    </Link>
                  </div>
                </div>
                <div className="relative group py-1 px-2">
                  <div className="hover:text-blue-300 transition-colors duration-300 cursor-pointer flex items-center">
                    <span>Inicio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black  shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-right duration-300 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Página Principal
                    </Link>
                    <Link
                      href="/featured"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Destacados
                    </Link>
                    <Link
                      href="/new-arrivals"
                      className="block px-4 py-2 text-white hover:bg-cyan-400 transition-colors"
                    >
                      Nuevos Productos
                    </Link>
                  </div>
                </div>
              </div> */}
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

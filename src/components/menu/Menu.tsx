"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        alt="Logo de menu"
        src="/menu.png"
        width={24}
        height={24}
        className="cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 ">
          <Link href={"/"}>Pagina de inicio</Link>
          <Link href={"/"}>Tienda</Link>
          <Link href={"/"}>Detalles</Link>
          <Link href={"/"}>Sobre nosotros</Link>
          <Link href={"/"}>Contactos</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Carrito</Link>
        </div>
      )}
    </div>
  );
};

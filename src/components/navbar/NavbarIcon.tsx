"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CarttModal } from "..";
import { CgProfile } from "react-icons/cg";
import { IoCartSharp, IoNotificationsCircleSharp } from "react-icons/io5";

// import { AnimatePresence, motion } from "framer-motion";

export const NavbarIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartopen, setIsCartOpen] = useState(false);
  const router = useRouter();
  //Temporary hack
  const isLoggeadIn = false;
  const handleProfile = () => {
    if (isLoggeadIn) {
      router.push("/");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex  items-center gap-4 xl:gap-6 relative">
      <div className="text-2xl cursor-pointer " onClick={handleProfile}>
        <CgProfile style={{ color: "white" }} />
      </div>

      <div
        className={`absolute bg-white text-blue-300 top-10 w-[120px] z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md ease-in-out duration-300 ${
          isProfileOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } `}
      >
        <p>Perfil</p>
        <p>Iniciar secion</p>
      </div>
      <div className="text-2xl bg-white  rounded-full cursor-pointer">
        <IoNotificationsCircleSharp />
      </div>
      <div
        className="cursor-pointer relative "
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <IoCartSharp style={{ color: "white" }} />

        <div className="rounded-full px-[4px] absolute -top-4 -right-4  text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {/* Aqui llamamos a setIdsCartOpen y lo pasamos a true osea visible */}
      <div
        className={` z-20 ease-in-out duration-300 ${
          isCartopen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <CarttModal />
      </div>
    </div>
  );
};

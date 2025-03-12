"use client";
import React from "react";
import Image from "next/image";

export const CarttModal = () => {
  const cartItems = true;
  return (
    <div className=" py-8 scrollbar-hide w-[374px] max-h-[400px]  text-white  absolute top-6 p-4 right-6 overflow-y-auto no-scrollbar        overflow-x-hidden  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-tr from-sky-100 to-cyan-200 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div>cart is empty</div>
      ) : (
        <>
          {/* //LIST */}
          <h3 className="text-xl font-semibold">Shopping cart</h3>
          <div className="flex     flex-col gap-8">
            {/* ITEM */}
            <div className=" w-full border-b-2  border-black h-20 flex gap-4 pb-1 ">
              <Image
                className="hover:scale-95 rounded-md"
                objectFit="cover"
                alt="Imagen de fondo"
                src="/78915067_l.webp"
                width={120}
                height={96}
              />
              {/* justify-between  */}
              <div className="flex flex-col w-full">
                {/* TOP */}

                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8 ">
                    <h3 className="font-semibold text-black ">Product Name</h3>
                    <p className="p-1 bg-black rounded-md">49$</p>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-black">available</div>
                  {/* BOTTOM */}
                  <div className="flex  justify-between text-sm">
                    <span className="text-black"> Qty. 2</span>
                    <span className="text-red-900"> Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className=" w-[344px] border-b-2 border-black pb-1 h-20 flex gap-4 ">
              <Image
                className="rounded-md hover:scale-95"
                objectFit="cover"
                alt="Imagen de fondo"
                src="/78915067_l.webp"
                width={120}
                height={96}
              />
              {/* justify-between  */}
              <div className="flex flex-col w-full">
                {/* TOP */}

                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8 ">
                    <h3 className="font-semibold text-black  ">Product Name</h3>
                    <p className="p-1 bg-black rounded-md">49$</p>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-black">available</div>
                  {/* BOTTOM */}
                  <div className="flex  justify-between text-sm">
                    <span className="text-black"> Qty. 2</span>
                    <span className="text-red-900"> Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="text-black">
              <div className="flex  items-center justify-between font-semibold">
                <span>Subtotal: </span>
                <span>$198.00</span>
              </div>

              <p className="text-black text-sm mt-2 mb-4">
                shipping and taxes calculated at checkout
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 text-white px-4 bg-black hover:bg-gray-300">
                  View cart
                </button>
                <button className="rounded-md py-3 px-4 text-white  bg-black hover:bg-gray-300">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

import { Carousel, Hero, ProductList } from "@/components";

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <Hero />
      <div className="pt-8 rounded-md md-px-8 lg:px-8 xl:32 2xl:px-64 pb-8  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-b from-white to-cyan-50">
        {/* <ProductList /> */}
        <div className=" hidden bg-gradient-to-r from-cyan-50 to-blue-100 sm:flex justify-between h-[280px] shadow-blue-100 shadow-md px-4">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h3>Grab up to 50% off on Selected Products</h3>
            <button className="text-4xl font-semibold leading-[48px] text-gray-700 ">
              Buy Now
            </button>
          </div>

          <div className="relative W-1/3">
            <Image
              src="/woman.png"
              className="object-contain rounded-lg"
              alt="Imagen de fondo"
              width={280}
              height={240}
            />
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default page;

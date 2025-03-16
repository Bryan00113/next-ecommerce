import { Hero, ProductList } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <div className="pt-24 md-px-8 lg:px-8 xl:32 2xl:px-64 pb-8  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-b from-white to-cyan-50">
        <ProductList />
      </div>
    </div>
  );
};

export default page;

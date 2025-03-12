import { Hero, ProductList } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <div className="mt-24 md-px-8 lg:px-8 xl:32 2xl:px-64">
        <ProductList />
      </div>
    </div>
  );
};

export default page;

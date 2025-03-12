import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap ">
      ProductList
      <div className="relative  h-80">
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  );
};

import { Filter, ProductList } from "@/components";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative b">
      {/* campaign */}

      {/* filter */}
      {/* <Filter /> */}

      {/* Products */}
      <ProductList />
    </div>
  );
};

export default page;

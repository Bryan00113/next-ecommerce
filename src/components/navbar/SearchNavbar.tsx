"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

export const SearchNavbar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className=" flex  justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
        action=""
      >
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search..."
          name="name"
        />
        <button className="cursor-pointer" type="submit">
          <Image src="/search.png" alt="search" width={16} height={16} />
        </button>
      </form>
    </div>
  );
};

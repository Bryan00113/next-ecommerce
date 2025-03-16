"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { div, input } from "framer-motion/client";
export const ProductList = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div>
 {/* Page header */}
      <div className="mb-5">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Find the right product for you</h1>

      </div>

      {/* Search form */}
      <div className="max-w-xl mb-5">
        <form className="relative">
          <label htmlFor="app-search" className="sr-only">Search</label>
          <input id="app-search" className="form-input w-full pl-9 py-3 bg-white dark:bg-gray-800" type="search" />
          <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
            <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-3 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Filters */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700/60">
        <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <a className="text-violet-500 whitespace-nowrap" href="#0">View All</a>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">Courses</a>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">Digital Goods</a>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">Online Events</a>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">Crowdfunding</a>
          </li>
        </ul>
      </div>

    <div className="gallery px-4  ">


      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
      {/* card */}
      <div
        className="max-w-[300px] mx-auto pb-4  content text-center hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-md p-4 bg-gradient-to-tr from-cyan-100 to-sky-50
      "
      >
        <Link href="/test" className="">
          <Image
            // absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500
            className="rounded-md w-full h-[240px] "
            src="/1740176-00-A_1.jpg"
            alt=""
            width={200}
            height={100}
          />
        </Link>

        <h3 className="text-center text-2xl pt-3">Camiseta tesla</h3>
        <p className="font-light text-sm">
          consulta nuestras ofertas en la seccion de oferta del munu principal
        </p>
        <h6>$100.00</h6>
        {/* Calificacion en estrellas */}
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <>
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={22}
                    color={
                      currentRating <= (hover ?? rating ?? 0)
                        ? "#ffc107"
                        : "#ede5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </>
            );
          })}
        </div>
        {/* <p>Tu rating es de {rating}</p> */}
        <button className="bg-black text-blue-400 my-3 rounded-md text-md py-2 px-3">
          Comprar
        </button>
      </div>
    </div>
    </div>
  );
};

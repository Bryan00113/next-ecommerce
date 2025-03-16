"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { input } from "framer-motion/client";
export const ProductList = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  return (
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
  );
};

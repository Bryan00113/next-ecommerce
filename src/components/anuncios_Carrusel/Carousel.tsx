"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "../slider/style_Slider_Hero.css"; // Comenta esta línea
import "./style.css"; // Descomenta esta línea
// import "./style2.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
export const Carousel = () => {
  return (
    <div className="text-2xl font-bold my-8 h-[320px] ">
      tendencias de productos
      <>
        <Swiper
          slidesPerView={0}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper" // Cambiado de styles.mySwiper a clase CSS directa
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/blusa_blanca.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                // borderRadius: 0,
                aspectRatio: "2/2",
                height: "80%",
                width: "70%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/blusa_blanca.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                // borderRadius: 0,
                aspectRatio: "2/2",
                height: "80%",
                width: "70%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/blusa_blanca.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                // borderRadius: 0,
                aspectRatio: "2/2",
                height: "80%",
                width: "70%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

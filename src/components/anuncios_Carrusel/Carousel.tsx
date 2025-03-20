"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export const Carousel = () => {
  return (
    <div className="text-2xl font-bold my-8 h-[320px] relative">
      tendencias de productos
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 3,
            },
            1020: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/blusa_blanca.jpg"
              alt="imagen de tendencias"
              width={200}
              height={200}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/camisa_blanca.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/blusa.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/Blusa_deRayas.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/Camisa_Negra.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ropa_tendencia/camisa_deMujer.jpg"
              alt="imagen de tendencias"
              width={200}
              height={100}
              style={{
                aspectRatio: "2/2",
                height: "80%",
                width: "80%",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

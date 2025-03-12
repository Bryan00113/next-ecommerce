"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./style.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/unsplash1.jpg"
            width={1024}
            height={600}
            alt="Imagen de prueba"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/pexels4.jpg"
            alt="Imagen de prueba"
            width={1024}
            height={600}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            alt="Imagen de prueba"
            src="/unsplash3.jpg"
            width={1024}
            height={600}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            alt="Imagen de prueba"
            src="/unsplash2.jpg"
            width={1024}
            height={600}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

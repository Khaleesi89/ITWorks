import image1 from "../Carrousel/assets/cig1.jpg";
import image2 from "../Carrousel/assets/cig2.jpg";
import image3 from "../Carrousel/assets/cig3.jpg";
import image4 from "../Carrousel/assets/cig4.jpg";
import image5 from "../Carrousel/assets/cig5.jpg";
import image6 from "../Carrousel/assets/cig6.jpg";
import image7 from "../Carrousel/assets/cig7.jpg";
import image8 from "../Carrousel/assets/cig8.jpg";
import image9 from "../Carrousel/assets/cig9.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CarrouselStyle.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Carrousel() {
  return (
    <section className = 'carrouselig' id='carrouselig'>
      <h3>Nuestro Instagram</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

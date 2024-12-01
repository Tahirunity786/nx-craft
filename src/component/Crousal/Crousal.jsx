import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CldImage } from "next-cloudinary";
// Import Swiper styles
import "swiper/css";
import "./crousal.css";
import Link from "next/link";

const slides = [
  { id: 1, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
  { id: 2, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
  { id: 3, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
  { id: 4, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
  { id: 5, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
  { id: 6, src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png", overlayText: "Web Development" },
];

const Carousel = () => {
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        350: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      className="myblogSwiper"
    >
      {slides.map((slider) => (
        <SwiperSlide key={slider.id}>
          <div className="slide-container">
            <CldImage
              src={slider.src}
              width="500"
              height="600"
              priority
              alt={slider.overlayText}
              className="w-100 h-100"

            />
            <div className="overlay-text"><Link href={`/blogs/${slider.id}`}>{slider.overlayText}</Link></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CldImage } from "next-cloudinary";
import "swiper/css";
import "./crousal.css";
import Link from "next/link";

const Carousel = ({ content }) => {
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
      {content.map((slider) => (
        <SwiperSlide key={slider.id}>
          <div className="slide-container">
            <CldImage
              src={slider.cover_image.image_pb_id}
              width="500"
              height="280"
              priority
              alt={slider.title || 'Post image'}
              className="w-100 rounded-0 blog-res-image"
            />
            <div className="overlay-text">
              <Link href={`/blogs/${slider.id}`}>{slider.title}</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

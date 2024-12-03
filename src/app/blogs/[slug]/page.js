'use client'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import './blog-slug.css'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'

const Page = () => {
  return (
    <>
      <div className="container pt-5 pb-5 ps-0 pe-0">

        <div className="row w-100">
          <div className="col-lg-8">
            <div className="mb-2">
              <h1>NX Craft as an It agency</h1>
              <p>posted by <b>admin</b></p>

            </div>
            <div className="mb-4">
              <CldImage
                src='lxb5yakgem4zuusjat5b'
                height="400"
                width={500}
                alt='blog-image'
                className='w-100 rounded-4'
              />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
            <div className="ps-3 pe-3">
            <div className="w-100 bg-light text-center p-2 rounded-2">
              <div className=" mb-4">
                <CldImage
                  src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/tlkoddhhexulduzotyhz"
                  width="60"
                  height="60"
                  alt="Logo"
                />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia aliquam dicta excepturi eligendi. Cumque sapiente quibusdam voluptas porro perferendis dolores iste.</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

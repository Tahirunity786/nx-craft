'use client'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CldImage } from 'next-cloudinary';
import './portflio.css'

const Page = () => {
  useEffect(() => {
    document.title = "Portfolio - NX Craft";
  }, []);


  return (
    <>
      <div className="mb-5 mt-5 text-center">
        <h1 className='fs-portfolio fs-2 mb-4'>Our Recent Work</h1>
        <p>Discover our recent work, where innovation meets excellence.</p>
      </div>
      <div className="mb-5">
        <div className="container bg-light rounded-pill p-3 ps-5 pe-5">
          <div className="d-flex align-items-center justify-content-center">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={6}
              spaceBetween={15} /* Adjusted spacing between slides */
              breakpoints={{
                350: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 15 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 25 },
              }}
              className="mySwiper"
            >
              {/* "All" Button */}
              <SwiperSlide>
                <button className="btn-nx-recent active-btn">All</button>
              </SwiperSlide>

              {/* Dynamic Buttons */}
              {['Web Design', 'Web Development', 'Mobile App', 'Graphic Design', 'SEO'].map((name, index) => (
                <SwiperSlide key={index}>
                  <button className="btn-nx-recent">{name}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row row-sm-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-md-2 g-lg-4 mb-5">
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Page

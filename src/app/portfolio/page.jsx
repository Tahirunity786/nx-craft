'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CldImage } from 'next-cloudinary';
import './portflio.css'

const Page = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active button

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Update the active button index
  };

  // Client render
  useEffect(() => {
    document.title = "Portfolio - NX Craft";

  }, []);


  const buttonLabels = ["All", "Web Design", "Web Development", "Mobile App", "Graphic Design", "SEO"];

  return (
    <>
      <div className="mb-5 mt-5 text-center">
        <h1 className='fs-portfolio fs-2 mb-4'>Our Recent Work</h1>
        <p>Discover our recent work, where innovation meets excellence.</p>
      </div>
      <div className="mb-5">
        <div className="container bg-light rounded-pill-nx p-3 ps-5 pe-5">
          <div className="d-flex align-items-center justify-content-center position-relative">
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
              onSlideChange={(swiper) => setIsEnd(swiper.isEnd)}
            >
              {buttonLabels.map((label, index) => (
                <SwiperSlide key={index}>
                  <button
                    className={`btn-nx-recent ${activeIndex === index ? "active-btn" : ""}`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
            {!isEnd && <div className="to-side"></div>}
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="portfolio-grid">
          {/* Card 1 */}
          <div className="portfolio-card" style={{ gridRow: "span 2" }}>
            <div className="portfolio-tag">Web Design</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>

          {/* Card 2 */}
          <div className="portfolio-card">
            <div className="portfolio-tag">Web Development</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>

          {/* Card 3 */}
          <div className="portfolio-card" style={{ gridRow: "span 2" }}>
            <div className="portfolio-tag">Mobile App</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>

          {/* Card 4 */}
          <div className="portfolio-card" style={{ gridRow: "span 2" }}>
            <div className="portfolio-tag">Web Development</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>
          <div className="portfolio-card">
            <div className="portfolio-tag">Web Development</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>
          <div className="portfolio-card">
            <div className="portfolio-tag">Web Development</div>
            <CldImage
              src="fy7of11kfqhgguq5qsej"
              alt="portfolio"
              width={500}
              height={500}
              className="portfolio-image"
            />
          </div>


        </div>
        <div/>
      </div>


    </>
  )
}

export default Page

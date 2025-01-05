'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import './portflio.css'
import Link from 'next/link';

const Page = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [portfolioDetails, setPortfolioDetails] = useState([]); // State to track the active button
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active button

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Update the active button index
  };
  const getData = async () => {
    try {
      // Await the fetch call to ensure the response is resolved
      let response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-porfolio`);

      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Await the JSON data
      const data = await response.json();
      console.log(data)


      // Log or process the data
      setPortfolioDetails(data);

    } catch (error) {
      // Log the error
      console.error("Error fetching blogs:", error);
    }
  }

  // Client render
  useEffect(() => {


    document.title = "Portfolio - NX Craft";
    getData();
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
          {portfolioDetails.length === 0 ? (
            <div>Portfolio Data not Given</div>
          ) : (
            portfolioDetails.map((portfolio, index) => {
              const firstImage = portfolio.image?.[0]; // Access the first image
              const gridSpan = firstImage?.tag === 'Website Development' ? 2 : 1; // Determine grid span

              return (
                <div
                  className="portfolio-card"
                  key={index}
                  style={{ gridRow: `span ${gridSpan}` }}
                >
                  <div className="portfolio-tag">{firstImage?.tag || 'No Tag'}</div>
                  <Link href={`/portfolio/${portfolio.id}`}>

                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER_END_POINT}${firstImage?.media}`}
                      alt={portfolio.description || 'Portfolio Image'}
                      width={500}
                      height={500}
                      className="portfolio-image"
                    />

                  </Link>
                </div>
              );
            })
          )}

        </div>
        <div />
      </div>


    </>
  )
}

export default Page

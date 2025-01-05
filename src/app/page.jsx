'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'
import AnimatedCircles from '@/component/AnimatedCircles/AnimatedCircles';
import "./main.css";
import Timeline from "@/component/Timeline/Timeline";
import { reviewData } from '../static-data'
import Card from "@/component/Card/Card";

export default function Home() {
  const [activeItem, setActiveItem] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const getData = async () => {
    try {
      const [serviceResponse, blogResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-services`),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/lm-blogs`),
      ])
      if (!serviceResponse.ok || !blogResponse.ok) {
        throw new Error('Failed to fetch data');
      }


      const servicesData = await serviceResponse.json();
      const blogDataresponse = await blogResponse.json();
      setActiveItem(servicesData);
      setBlogData(blogDataresponse);

    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <main className={` container-fluid mb-5 position-relative`}>
        <AnimatedCircles />
        <div className="row p-lg-5 p-md-5 nx-mt-sm-5 p-sm-2 align-items-center">
          <div className="col-lg-6 mb-5">
            <header className="mb-2">
              <h6 className="nx-top-h ">Priority</h6>
              <h1 className="nx-heading">
                We Grow Your Business Reach to Next Level
              </h1>
            </header>
            <p className="mb-4">
              At NxCraft, we specialize in driving your business forward with
              custom digital strategies designed to help you thrive in today's
              competitive marketplace. Unlock growth, enhance visibility, and
              leave a lasting impact with our expert-driven approach.
            </p>
            <a
              href="/contact"
              className="btn-main-nx rounded-pill d-flex text-center align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Connect with Us
            </a>
          </div>
          <div className="col-lg-6 mt-4 position-relative text-center">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1732801006/Images/ijpgorwkk43frig4ugyh.png"
              width="600"
              height="450"
              alt="Main image"
              className="nx-img-m"
              priority
            />
          </div>
        </div>
      </main>


      {/* <section className="container-fluid mb-5 p-5 ">

        <div className="bg-secondary-nx">
          <Link href={"/hire"}>
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1732114198/Images/nvv9aidsed6qfw7tkown.jpg"
              width="900"
              height="800"
              alt="banner"
              className="w-100 h-100 rounded-4"
            />
          </Link>
        </div>

      </section> */}
      <section className="container-fluid mb-5 p-5 text-center">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Patners</h6>
          <h2 className="mb-2">People Who Worked With Us</h2>
        </header>

        <div className="marquee">
          <ul className="marquee__content">
            <div className=" marquee__item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="me-1">
                  <CldImage
                    src="efffbblyoqcsqwu7xeqq"
                    width="50"
                    height="50"
                    alt="banner"

                    style={{ height: '50px', width: '100%' }}
                  />
                </div>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>Backupdoc</span>
              </div>

            </div>
            <div className=" marquee__item">
              <CldImage
                src="soclllrezul6fj9e1ixl"
                width="300"
                height="50"
                alt="banner"
                className="rounded-4"
                style={{ height: '100px', width: '180px' }}
              />
            </div>
            <div className=" marquee__item">
              <CldImage
                src="x9nkfgn8ktao3on0b6mh"
                width="150"
                height="50"
                alt="banner"
                className="rounded-4"
                style={{ height: '50px', width: '100px' }}
              />
            </div>
            <div className=" marquee__item">
              <CldImage
                src="dgkwdt2axf0vrsguxp1o"
                width="150"
                height="100"
                alt="banner"
                className="rounded-4"
                style={{ height: '100px', width: '100px' }}
              />
            </div>

          </ul>
        </div>

      </section>

      <section className="container-fluid  text-center pe-lg-5 ps-lg-5 mb-5">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Service</h6>
          <h2 className="mb-2">We Provide Fastest & Unique <br /> Business Growing Service</h2>
          <p className="mb-2">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
        </header>
        <div className="w-100 text-center">

          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-3" id="service__spread">

            {activeItem.length === 0 ? <h4>Data Not Uploaded</h4> :
              activeItem.map((item) => (
                <div key={item._id} className="col p-lg-4 p-md-4 s-nx">
                  <div className="border-nx w-100 h-100 p-2 position-relative rounded-3">
                    <CldImage
                      src={item.image_pb_id}
                      width="500"
                      height="600"
                      priority
                      alt="Main image"
                      className="w-100 h-100 rounded-4"
                      style={{ objectFit: "fill" }}
                    />
                    <div className="hover-overlay d-flex align-items-center justify-content-center p-3">
                      <Link className="nx-hover-link" href={`services/${item.services_slug}`} >{item.title}</Link>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>
      </section>

      <section className="container-fluid pe-lg-5 ps-lg-5 pe-md-5 ps-md-5 mb-5 text-center">
        <div className="row mb-4">

          <div className="col-lg-6 text-start pt-5">
            <header className="mb-4 mt-3">
              <h6 className="nx-top-h mb-2">About</h6>
              <h2 className="mb-2">We Are Helping People to Reach
                Their Customer Since 2024</h2>
            </header>
            <p>
              Since 2024, NxCraft has been helping businesses connect with their customers through innovative and impactful digital solutions. We are committed to empowering brands by leveraging technology to build meaningful relationships and achieve sustainable growth. At NxCraft, we strive to deliver excellence and drive success in an ever-evolving digital world.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1732803019/Images/i0arrxydanceqzryt1tx.png"
              width="600" // Transform the image: auto-crop to square aspect_ratio
              height="480"
              alt="Main image"
              className="nx-w-100 rounded-4"
            />
          </div>
        </div>

      </section>
      <section className="container-fluid pe-lg-4 ps-lg-4 mb-100 text-center">
        <div className="mb-5">
          <h2>Our Workflow</h2>
        </div>
        <Timeline />


      </section>
      <section className="container-fluid ps-lg-5 pe-lg-5 mb-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-card mb-4">
              <div className="overlay">
                <div>
                  <span className="badge">Client Testimonial</span>
                  <h1 className="title">WebTech Solutions <br /> the transform</h1>
                  <a href="/contact" className="btn support-btn">Get Support →</a>
                </div>
              </div>
            </div>


          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="position-relative nx-pos-testi p-4">
              <div id="carouselExampleAutoplaying" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {reviewData.map((data, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''} pe-4`} key={data.key}>

                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div>
                          <p className="mb-1"><b>{data.name}</b></p>
                          <p className="mb-0">{data.location}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span className="me-2" key={i}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-2">
                        <p>{data.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pe-lg-5 ps-lg-5 mb-100 text-center">
        <header className="mb-5">
          <h6 className="nx-top-h">Our Expert Members</h6>
          <h2 className="mb-3">
            Behind the Great Success of <br /> NxCraft They Playing Role
          </h2>
        </header>
        <div className="d-flex nx-res0peron justify-content-center align-items-center flex-wrap">
          {/* Swiper Slider */}
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              350: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="mySwiper"
          >
            {[
              {
                name: "Tahir Zaman",
                role: "Founder",
                image:
                  "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png",
              },
              {
                name: "Hassan Asif",
                role: "Co-Founder",
                image:
                  "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731491953/xea4rvmxi7pp3hpo6o1m.jpg",
              },
              {
                name: "Mudassar Rafique",
                role: "CEO",
                image:
                  "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731491384/w5rpha72aylc6maxkdqn.jpg",
              },
            ].map((person, index) => (
              <SwiperSlide key={index}>
                <div className="slide-container">
                  <CldImage
                    src={person.image}
                    width="500"
                    height="400"
                    alt={`Portrait of ${person.name}`}
                    style={{ objectFit: "cover" }}
                    className="rounded-4 w-100"
                  />
                  <div className="person-info d-flex justify-content-between align-items-center mt-3">
                    <div className="text-start">
                      <h5 className="mb-1 text-white fw-bold">{person.name}</h5>
                      <p className="mb-0 text-white">{person.role}</p>
                    </div>
                    <div className="bg-light rounded-pill p-2">
                      <CldImage
                        src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731770109/Icons/zlkzdxt0ojahbrblyrbd.png"
                        width="40"
                        height="40"
                        alt="Icon"
                        className="icon"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <div className="mb-100 container-fluid pe-lg-5 ps-lg-5 ">
        <div className="text-center mb-3">
          <h6 className="nx-top-h">Blog</h6>
        </div>
        <h2 className='mb-50 text-center fs-nx'>Read Our Blogs</h2>
        <div className="pe-lg-5 ps-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-4">

            {
              blogData.length === 0 ? <h4>Data not upload</h4> :
                blogData.map((post) => (
                  <div className="col mb-4" key={post.id}>

                    <Card content={post} image={post.cover_image.image_pb_id} link={`/blogs/${post.id}`} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

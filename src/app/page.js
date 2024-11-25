'use client'

import Image from "next/image";
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'
import "./main.css";

export default function Home() {
  const [activeItem, setActiveItem] = useState([]);
  const getData = async () => {
    try {
      let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-services`);
      data = await data.json();

      setActiveItem(data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <main className="container-fluid mb-5 position-relative">
        <div className="row p-lg-5 p-md-5 nx-mt-sm-5 p-sm-2 align-items-center">
          <div className="col-lg-6 mb-5">
            <header className="mb-2">
              <h6 className="nx-top-h ms-2">Priority</h6>
              <h1 className="nx-heading">We Grow Your Business Reach to Next Level</h1>
            </header>
            <p className="mb-4">
             
              At NxCraft, we specialize in driving your business forward with custom digital strategies designed to help you thrive in today's competitive marketplace. Unlock growth, enhance visibility, and leave a lasting impact with our expert-driven approach.
            </p>

            <Link href="/contact" className="btn-main-nx rounded-pill d-flex text-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 " viewBox="0 0 16 16">

                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Connect with Us
            </Link>
          </div>
          <div className="col-lg-6 mt-4 position-relative text-center">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/dw0nebh6t3v7utj5wshm"
              width="500" // Transform the image: auto-crop to square aspect_ratio
              height="500"
              crop={{
                type: 'auto',
                source: true
              }}
              alt="Main image"
              className="nx-img-m"
            />

            <div className="social-icons position-absolute ico-nx" >
              {['instagram', 'pinterest', 'twitter', 'youtube'].map((icon, index) => (
                <div key={index} className="icon-wrapper mb-5 bg-light rounded-pill d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  <Image
                    src={`/Assets/Icons/${icon}.svg`}
                    alt={`${icon} icon`}
                    width={35}
                    height={35}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="container-fluid mb-5 p-5 ">

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

      </section>
      <section className="container-fluid mb-5 p-5">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Patners</h6>
          <h2 className="mb-2">People Who Worked With Us</h2>
        </header>

      </section>

      <section className="container-fluid  text-center pe-lg-5 ps-lg-5 mb-5">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Service</h6>
          <h2 className="mb-2">We Provide Fastest & Unique <br /> Business Growing Service</h2>
          <p className="mb-2">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
        </header>
        <div className="w-100 text-center">

          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-3" id="service__spread">

            {
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
          <div className="col-lg-6 mb-4">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1730459148/Images/n01yrhbyogaddmazskbf.svg"
              width="300" // Transform the image: auto-crop to square aspect_ratio
              height="400"
              alt="Main image"
              className="nx-w-100 rounded-4"
            />
          </div>
          <div className="col-lg-6 text-start">
            <header className="mb-4 mt-3">
              <h6 className="nx-top-h mb-2">About</h6>
              <h2 className="mb-2">We Are Helping People to Reach
                Their Customer Since 2024</h2>
            </header>
            <p>
            Since 2024, NxCraft has been helping businesses connect with their customers through innovative and impactful digital solutions. We are committed to empowering brands by leveraging technology to build meaningful relationships and achieve sustainable growth. At NxCraft, we strive to deliver excellence and drive success in an ever-evolving digital world.
            </p>
          </div>
        </div>

      </section>
      
      <section className="container-fluid ps-lg-5 pe-lg-5 mb-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-card mb-4">
              <div className="overlay">
                <div>
                  <span className="badge">Client Testimonial</span>
                  <h1 className="title">WebTech Solutions <br /> the transform</h1>
                  <a href="#" className="btn support-btn">Get Support →</a>
                </div>
              </div>
            </div>


          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="position-relative nx-pos-testi p-4">
              <div id="carouselExampleAutoplaying" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active pe-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div>
                        <p className="mb-1"><b>Client no 1</b></p>
                        <p className="mb-0">Web development</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit officia molestias cupiditate, beatae ex quae repudiandae asperiores, repellat, eveniet harum doloribus? Non ex provident consectetur sapiente doloremque minima quis et!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div>
                        <p className="mb-1"><b>Client no 1</b></p>
                        <p className="mb-0">Web development</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit officia molestias cupiditate, beatae ex quae repudiandae asperiores, repellat, eveniet harum doloribus? Non ex provident consectetur sapiente doloremque minima quis et!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div>
                        <p className="mb-1"><b>Client no 1</b></p>
                        <p className="mb-0">Web development</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit officia molestias cupiditate, beatae ex quae repudiandae asperiores, repellat, eveniet harum doloribus? Non ex provident consectetur sapiente doloremque minima quis et!</p>
                    </div>
                  </div>
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
          <h2 className="mb-3">Behind the Great Success of <br /> NxCraft They Playing Role</h2>
        </header>
        <div className="d-flex nx-res0peron justify-content-center align-items-center flex-wrap">
          {/* Person Card */}
          {[

            {
              name: "Tahir Zaman",
              role: "Founder",
              image: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png",
            },
            {
              name: "Hassan Asif",
              role: "Co-Founder",
              image: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731491953/xea4rvmxi7pp3hpo6o1m.jpg",
            },
            {
              name: "Mudassar Rafique",
              role: "CEO",
              image: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731491384/w5rpha72aylc6maxkdqn.jpg",
            },
          ].map((person, index) => (
            <div key={index} className="person-card me-2 ms-2 border rounded-4 position-relative nx-res0peron">
              <CldImage
                src={person.image}
                width="500"
                height="400"
                alt={`Portrait of ${person.name}`}
                style={{ objectFit: "cover" }}
                className="rounded-4 w-100"
              />
              <div className="person-info d-flex justify-content-between align-items-center">
                <div className="text-start">
                  <h5 className="mb-1 text-white fw-bold">{person.name}</h5>
                  <p className="mb-0 text-white">{person.role}</p>
                </div>
                <div className="bg-light rounded-pill">
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
          ))}
        </div>
      </section>

      <div className="mb-100 container-fluid pe-lg-5 ps-lg-5 ">
        <div className="text-center mb-3">
          <h6 className="nx-top-h">Blog</h6>
        </div>
        <h2 className='mb-50 text-center fs-nx'>Read Our Blogs</h2>
        <div className="pe-lg-5 ps-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-4">

            <div className="col mb-4">
              <div className="position-relative">
                <CldImage
                  src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png"
                  width="500"
                  height="230"
                  alt="Main image"
                  className="w-100 rounded-4"

                />
                <div className="p-3 bg-light w-90 nx-blog">
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <div className="me-5 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">posted by</p>
                    </div>
                    <div className="me-2 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">Comments</p>
                    </div>

                  </div>
                  <div className="mb-3">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                  </div>
                  <div className="mb-3">
                    <Link href={'#'} className="nx-blog-lnk">Read more
                      <span className="ms-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="position-relative">
                <CldImage
                  src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png"
                  width="500"
                  height="230"
                  alt="Main image"
                  className="w-100 rounded-4"

                />
                <div className="p-3 bg-light w-90 nx-blog">
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <div className="me-5 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">posted by</p>
                    </div>
                    <div className="me-2 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">Comments</p>
                    </div>

                  </div>
                  <div className="mb-3">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                  </div>
                  <div className="mb-3">
                    <Link href={'#'} className="nx-blog-lnk">Read more
                      <span className="ms-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="position-relative">
                <CldImage
                  src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png"
                  width="500"
                  height="230"
                  alt="Main image"
                  className="w-100 rounded-4"
                />
                <div className="p-3 bg-light w-90 nx-blog">
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <div className="me-5 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">posted by</p>
                    </div>
                    <div className="me-2 d-flex align-items-center">
                      <span className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                        </svg>
                      </span>
                      <p className="mb-0 nx-blog-fs">Comments</p>
                    </div>

                  </div>
                  <div className="mb-3">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                  </div>
                  <div className="mb-3">
                    <Link href={'#'} className="nx-blog-lnk">Read more
                      <span className="ms-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

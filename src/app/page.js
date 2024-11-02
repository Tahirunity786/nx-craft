'use client'

import Image from "next/image";
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'
import "./main.css";


export default function Home() {
  const [activeItem, setActiveItem] = useState([]);
  const getData = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-services`);
    data = await data.json();
    
    setActiveItem(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <main className="container-fluid mb-5 position-relative">
        <div className="row p-5 align-items-center">
          <div className="col-lg-6 mb-4">
            <header className="mb-2">
              <h6 className="nx-top-h ms-2">Priority</h6>
              <h1 className="nx-heading">We Grow Your Business Reach to Next Level</h1>
            </header>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <Link href="/contact" className="btn-main-nx rounded-pill d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 me-3" viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Book a Meeting
            </Link>
          </div>
          <div className="col-lg-6 position-relative">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/dw0nebh6t3v7utj5wshm"
              width="500" // Transform the image: auto-crop to square aspect_ratio
              height="500"
              crop={{
                type: 'auto',
                source: true
              }}
              alt="Main image"
              className="w-100 h-100"
            />

            <div className="social-icons position-absolute" style={{ top: '80px', right: '10px' }}>
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

      <section className="container-fluid mb-5 p-5">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Patners</h6>
          <h2 className="mb-2">People Who Worked With Us</h2>
        </header>

      </section>

      <section className="container-fluid  text-center pe-5 ps-5 mb-5">
        <header className="mb-5">
          <h6 className="nx-top-h mb-2">Our Service</h6>
          <h2 className="mb-2">We Provide Fastest & Unique <br /> Business Growing Service</h2>
          <p className="mb-2">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
        </header>
        <div className="w-100 text-center">

          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3" id="service__spread">

            {
              activeItem.map((item) => (
                <div key={item._id} className="col"  >
                  <Image
                  width={100}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_SERVER_END_POINT}${item.image}`}
                  alt={item.title}
                  />
                  <div className="bg-light">{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="container-fluid p-5 mb-5 text-center">
        <div className="row mb-4">
          <div className="col-lg-6 mb-2">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1730459148/Images/n01yrhbyogaddmazskbf.svg"
              width="300" // Transform the image: auto-crop to square aspect_ratio
              height="400"
              alt="Main image"
              className="w-100 rounded-4"
            />
          </div>
          <div className="col-lg-6 text-start">
            <header className="mb-4">
              <h6 className="nx-top-h mb-2">About</h6>
              <h2 className="mb-2">We Are Helping People to Reach
                Their Customer Since 2024</h2>
            </header>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
          </div>
        </div>

      </section>
      <section className="container-fluid p-5 mb-5 text-center">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <CldImage
              src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1730459475/Images/na7ncnynhgzloog0o6zw.svg"
              width="500"
              height="300"

              alt="Main image"
              className="img-fluid h-100"
            />
          </div>
          <div className="col-lg-6 text-start">
            <header className="mb-3">
              <h6 className="nx-top-h">About</h6>
              <h2 className="mb-3">We Are Helping People to Reach Their Customer Since 2024</h2>
            </header>
            <p>
              Education is a driving force that focuses on developing reflective
              thinking and abilities so that the human race can discover how they
              wish to exist in today's competitive and ever-changing global
              economy. Amidst extraordinary uncertainty and dynamic world order,
              Edify, a leading Study Abroad Consultant, is dedicated to helping
              higher education leaders worldwide build resilience, seize growth
              opportunities, and discover new ways to enhance their skill sets. With a
              deep commitment to our clients' aspirations, we provide expert
              guidance on educational pathways, universities, scholarships, and the
              intricacies of the application process. We aim to enable students to
              access the best education tailored to their ambitions.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid p-5 mb-5 text-center">
        <header className="mb-5">
          <h6 className="nx-top-h">Our Expert Members</h6>
          <h2 className="mb-3">Behind the Great Success of <br />
            NxCraft They Playing Role</h2>
        </header>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>

        </div>
      </section>

    </>
  );
}

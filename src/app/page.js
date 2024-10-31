'use client'

import Image from "next/image";
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import "./main.css";

export default function Home() {
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
            <Link href="#" className="btn-main-nx rounded-pill d-flex align-items-center">
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

            <div className="social-icons position-absolute" style={{ top: '100px', right: '50px' }}>
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

      <section className="container mb-5 text-center">
        <header className="mb-4">
          <h6 className="nx-top-h mb-2">Our Service</h6>
          <h2 className="mb-2">We Provide Fastest & Unique <br /> Business Growing Service</h2>
          <p className="mb-2">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
        </header>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4 p-5 mt-5 rounded-4 bg-light ">
          <div className="col p-2 text-start">
            <div className="mb-2">
              <CldImage
                src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Icons/dhwzka4rql3jgcl36iwo"
                width="80" // Transform the image: auto-crop to square aspect_ratio
                height="80"
                crop={{
                  type: 'auto',
                  source: true
                }}
                alt="service web development"
              />
            </div>
            <div className="ser-h-nx mb-3">
              <h3>Web Application</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client'
import Form from '@/component/Form/Form'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import './service-index.css'

const Page = () => {
  const [packages, setPackages] = useState([]);

  async function getData() {
    let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-services`);
    data = await data.json();
    setPackages(data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="container-fluid mb-50 p-5">
        <div className="row mb-100 ">
          <div className="col-lg-7 d-flex align-items-center">
            <h1>Nx Craft Helps you to grow your business</h1>
          </div>
          <div className="col-lg-5">
            <Form />
          </div>
        </div>
        <div className="mb-100">
          <div className="mb-5 text-center">
            <h2 className='mb-2'>Discover Our Cutting-Edge Solutions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim sit nostrum.</p>
          </div>
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3" id="service__spread">
            {packages.map((item) => (
              <div key={item._id} className="col p-4 text-center" style={{ height: '350px' }}>
                <div className="border-nx w-100 h-100 p-2 position-relative rounded-3">
                  <CldImage
                    src={item.image_pb_id}
                    width="500"
                    height="600"
                    priority
                    alt="Main image"
                    className="w-100 h-100 rounded-4"
                  />
                  <div className="hover-overlay d-flex align-items-center justify-content-center p-3">
                    <Link className="nx-hover-link" href={`services/${item.services_slug}`}>{item.title}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-100 container">
          <h2 className=' mb-50 text-center fs-nx'>Our Workflow</h2>
          <div className="content-box">
            <div className="box">
              <h6>Planning</h6>

              <div className="dot">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>
            <div className="box">
              <h6>Designing</h6>

              <div className="dot">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>
            <div className="box">
              <h6>Developing</h6>

              <div className="dot">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>
            <div className="box">
              <h6>Testing</h6>

              <div className="dot">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>
            <div className="box">
              <h6>Launch</h6>

              <div className="dot">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>

          </div>
        </div>
        <div className="container mb-100">
          <Link className='hire-nx' href={'/'}>Hire our top rated developer <span className='ms-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
          </span></Link>
        </div>
      </div>
    </>
  )
}

export default Page

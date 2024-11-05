'use client'
import Form from '@/component/Form/Form'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import './service-index.css'

const page = () => {
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
        <div className="row mb-5">
          <div className="col-lg-7 d-flex align-items-center">
            <h1>Nx Craft Helps you to grow your business</h1>
          </div>
          <div className="col-lg-5">
            <Form />

          </div>
        </div>
        <div className="mb-50">
          <div className="mb-5 text-center">
            <h2>Discover Our Cutting-Edge Solutions</h2>
          </div>
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3" id="service__spread">

            {
              packages.map((item) => (
                <div key={item._id} className="col p-2" style={{ height: '350px' }}>
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
                      <Link className="nx-hover-link" href={`services/${item.services_slug}`} >{item.title}</Link>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default page

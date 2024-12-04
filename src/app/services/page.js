'use client'
import Form from '@/component/Form/Form'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import './service-index.css'
import Model from '@/component/Model/Model';
import Clendly from '@/component/Clendly/Clendly';
import Image from 'next/image';



const Page = () => {
  const [packages, setPackages] = useState([]);

  async function getData() {
    let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/all-services`);
    data = await data.json();
    setPackages(data)
  }

  useEffect(() => {
    document.title = "Services - NX Craft";
    getData();
  }, [])

  return (
    <>
      <div className="container-fluid mb-50 p-lg-5 nmt-sm-5 nmt-md-5 ">
        <div className="row mb-100 ">
          <div className="col-lg-7 d-flex align-items-center">
            <div>
              <div className="mb-4">
                <h1>Nx Craft Helps you to grow your business</h1>
              </div>
              <div className="mb-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a dicta necessitatibus cum eveniet, aliquid animi enim autem provident quos veniam. Fuga, dignissimos optio commodi voluptatum repellendus enim! Dicta, fugit!</p>
              </div>
              <div className="mb-4">
                <button className='meeting-btn w-75' data-bs-toggle="modal" data-bs-target="#nx-meet">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 me-3" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  Schedule a meeting
                </button>
                <Model
                  id="nx-meet"
                  modelSize="modal-lg"
                  modelType="modal-dialog-scrollable"
                  title=""
                  modelBody={<Clendly />}
                />
              </div>
            </div>
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

          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-3" id="service__spread">

            {packages.map((item) => (
              <div key={item._id} className="col p-4 text-center s-nx">
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
          <div className="row">
            <div className="col-lg-6 position-relative">
              <Image
                src='/Assets/Images/blob (1).svg'
                width={500}
                height={500}
                alt='bg why'
              />
              <CldImage
                src='u732hbmuxo9jbyvnvnv2'
                width="350"
                height="400"
                priority
                alt="Main image"
                className='bg-why-img'
              />
            </div>
            <div className="col-lg-6 pt-4">
              <h2 className='mb-4 text-start fs-1'>Why choose us!</h2>
              <ul style={{ listStyle: 'none' }} className='ms-0 ps-0 mb-3'>
                <li className='mb-3 d-flex justify-content-start align-items-center'>
                  <div className="circle-nx-1 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  Excellent Customer Support
                </li>
                <li className='mb-3 d-flex justify-content-start align-items-center'>
                  <div className="circle-nx-1 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  Unmatched Expertise
                </li>
                <li className='mb-3 d-flex justify-content-start align-items-center'>
                  <div className="circle-nx-1 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  Customized Solutions
                </li>
                <li className='mb-3 d-flex justify-content-start align-items-center'>
                  <div className="circle-nx-1 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  Commitment to Quality
                </li>

              </ul>
              <p>We use modern methods to manage projects with efficiency and precision. Our IT agency follows the Agile approach, keeping clients involved and updated at every step. This ensures transparency, smooth workflows, and timely delivery. By using the latest tools, we consistently meet client expectations and strive for continuous improvement.</p>

            </div>
          </div>
        </div>
        <div className="mb-100 container">
          <h2 className=' mb-50 text-center fs-nx'>Our Workflow</h2>
          <div className="content-box">
            <div className="box">
              <h6>Planning</h6>

              <div className="dot">
                <div className="circle-nx">
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
                <div className="circle-nx">
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
                <div className="circle-nx">
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
                <div className="circle-nx">
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
                <div className="circle-nx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </div>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi nulla nesciunt nisi voluptate quia nostrum, quasi culpa dolor velit reprehenderit quos mollitia ducimus voluptatibus veniam quidem sequi possimus perspiciatis.</p>
            </div>

          </div>
        </div>

        <div className="mb-100 container pe-0 ps-0">
          <h2 className='mb-50 text-center fs-nx'>A Scalable Cooperation Model Tailored <br /> for Your Business</h2>
          <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-3">

              <div className="col mb-4">
                <div className="nx-models">
                  <div className="nx-top-border"></div>
                  <div className=" p-3 d-flex align-items-center justify-content-between flex-column mt-4 ">
                    <div className="mb-2 nx-hire-rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <h4 className='mb-2'>Expert Developer</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <div className="mb-2">
                      <Link className='nx-hire-btn' href={'/hire'}>HIRE US</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="nx-models">
                  <div className="nx-top-border"></div>
                  <div className="p-3 d-flex align-items-center justify-content-between flex-column mt-4 ">
                    <div className="mb-2 nx-hire-rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <h4 className='mb-2'>Offsore Company</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <div className="mb-2">
                      <Link className='nx-hire-btn' href={'/hire'}>HIRE US</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="nx-models">
                  <div className="nx-top-border"></div>
                  <div className="p-3 d-flex align-items-center justify-content-between flex-column mt-4 ">
                    <div className="mb-2 nx-hire-rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <h4 className='mb-2'>OutSource</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <div className="mb-2">
                      <Link className='nx-hire-btn' href={'/hire'}>HIRE US</Link>
                    </div>
                  </div>
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

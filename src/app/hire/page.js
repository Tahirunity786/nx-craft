'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import Team from '@/component/Team/Team';
import Form from '@/component/Form/Form';
import Model from '@/component/Model/Model';
import Clendly from '@/component/Clendly/Clendly';
import './hire.css';

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active button
  function handleActive(index) {
    setActiveIndex(index);

  }

  const Hire = [
    { id: 1, name: "Web Developer", slogan: "Developers", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" /></svg>` },
    { id: 2, name: "Graphic Designer", slogan: "Designers", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16"><path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" /></svg>` },
    { id: 3, name: "Mobile App Developer", slogan: "Developers", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" /></svg>` },
    { id: 4, name: "SEO Expert", slogan: "Experts", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" /></svg>` },
    { id: 5, name: "UX/UI Expert", slogan: "Experts", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-bezier" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/><path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.52 6.52 0 0 0 1.814 9H2.5q.186 0 .358.043a5.52 5.52 0 0 1 3.185-3.185A1.5 1.5 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.52 6.52 0 0 1 2.72 3.5H13.5q-.185 0-.358.043a5.52 5.52 0 0 0-3.185-3.185"/></svg>` },
    { id: 6, name: "Digital Marketing Expert", slogan: "Experts", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt adipisci ducimus at animi vero distinctio accusamus!', svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" /></svg>` },
  ]
  return (
    <>
      <div className="container pt-3">
        <div className="row mb-5" >
          <div className="col-lg-6 d-flex align-items-center">
            <div>

              <h1 className='mb-3'>Connect With Us!</h1>
              <h4 className='mb-3'>Let's make some magic and let the world see your brand in a more real way!
              </h4>
              <p className='mb-5'>We’re here to turn your vision into reality . Together, we’ll craft compelling experiences that showcase your brand’s authenticity and leave a lasting impression. Let’s collaborate to bring your story to life and make it truly unforgettable!</p>
              <Link href="/hire/process" className='nx-hire-btn' style={{ display: "inline-block" }}>Hire Top Expert</Link>
            </div>
          </div>
          <div className="col-lg-6 pe-4 ps-4" >
            <Team />
          </div>
        </div>
        <div className="mb-5 bg-light rounded-2 w-100 p-3">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              <h5>Trusted by Industry Leaders and Innovators</h5>
            </div>
            <div className="col-lg-8">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center me-4">
                  <div className="me-1">
                    <CldImage
                      src="efffbblyoqcsqwu7xeqq"
                      width="50"
                      height="50"
                      alt="banner"
                      className='rounded-pill'
                      style={{ height: '45px', width: '100%' }}
                    />
                  </div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>Backupdoc</span>
                </div>
                <div className='me-4'>
                  <CldImage
                    src="soclllrezul6fj9e1ixl"
                    width="300"
                    height="30"
                    alt="banner"
                    className="rounded-4"
                    style={{ height: '60px', width: '180px' }}
                  />
                </div>
                <div className='me-4'>
                  <CldImage
                    src="x9nkfgn8ktao3on0b6mh"
                    width="150"
                    height="50"
                    alt="banner"
                    className="rounded-4"
                    style={{ height: '45px', width: '100px' }}
                  />
                </div>
                <div className='me-4'>
                  <CldImage
                    src="dgkwdt2axf0vrsguxp1o"
                    width="300"
                    height="300"
                    alt="banner"
                    className="rounded-4"
                    style={{ height: '100px', width: '100px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-7 d-flex align-items-center pe-5">
            <div>
              <div className="mb-4">
                <h3>Collaborate with the Top 1% of NX Craft Talent, Tailored to Your Business Needs.</h3>
              </div>
              <div className="mb-5">
                <p>Collaborate with the top 1% of NX Craft talent to achieve tailored, high-performance solutions for your business. Our experts deliver precision-driven results designed to meet your unique goals through innovative and seamless approaches.</p>
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

        <div className="mb-5">
          <div className="row">
            {
              Hire.map((item, index) => (
                <div className={`col-lg-4 bg-hire-nx border p-3 pt-5 pb-5 ${activeIndex === index ? "active-hire" : ""}`} key={item.id} onClick={() => handleActive(index)}>
                  <div className="mb-3" dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                  <div className="mb-3">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="mb-3">
                    <p>{item.desc}</p>
                  </div>
                  <div className="mb-3">
                    <Link className='nav-link' href={"#"} style={{ fontWeight: 'bold' }}>View {item.slogan}</Link>
                  </div>
                </div>
              ))
            }
          </div>


        </div>
      </div>
    </>
  );
};

export default Page;

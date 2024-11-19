'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import './footer.css'



const Footer = () => {
  return (
    <footer className='footer-nx'>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="mb-4">
              <h2 className='text-light'>MENU</h2>
            </div>
            <ul className="mb-5 d-flex justify-content-between align-items-center flex-wrap ul-footer ps-1 pe-5">
              <li className='mb-2'>
                <Link href="/" className="nav-link text-light ">
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/services" className="nav-link text-light">
                  Services
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/portfolio" className="nav-link text-light">
                  Portfolio
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/blogs" className="nav-link text-light">
                  Blogs
                </Link>
                
              </li>
              <li className='mb-2'>
              <Link href="/contact" className="nav-link text-light">
                  Contact
                </Link>
              </li>

            </ul>
            <div className="mb-4">


              <Link href="/" className="navbar-brand d-flex align-items-center">
                <CldImage
                  src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/tlkoddhhexulduzotyhz"
                  width="60"
                  height="45"

                  alt="Logo"
                />
                <span className='nx-brand'>NxCraft</span>
              </Link>
            </div>
            <div className="mb-4">
             <p className='text-light'>435c People colony no 2 Faisalabad</p>

            </div>
            <div className="mb-4">
              <a href="tel:+923232963784" className="text-light tel-footer" aria-label="Call Us">
                <span className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16" aria-label="Phone Icon">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </span>
                +92 (323) 2963784
              </a>

            </div>
            <div className="mb-4">
              <a href="mailto:ceo@nxcraft.com" className="text-light tel-footer" aria-label="Call Us">
                <span className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </span>
                ceo@nxcraft.com
              </a>

            </div>
          </div>
          <div className="col-lg-5">

            <div className="mb-4">
              <h2 className='text-light'>Be In know</h2>
            </div>
            <div className="mb-4">
              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam odio cumque officiis quae doloribus dicta et deserunt impedit! Enim, quo laboriosam veniam similique nostrum odio voluptas perferendis rerum dolore dolorum.</p>
            </div>
            
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer

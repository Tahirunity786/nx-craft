'use client'
import { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import './portflio.css'

const Page = () => {
  useEffect(() => {
    document.title = "Portfolio - NX Craft";
  }, []);


  return (
    <>
      <div className="mb-5 mt-5 text-center">
        <h1 className='fs-portfolio fs-2 mb-4'>Our Recent Work</h1>
        <p>Discover our recent work, where innovation meets excellence.</p>
      </div>
      <div className="mb-5">
        <div className="container bg-light rounded-pill p-3 ps-5 pe-5">
          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center">
            <div class="col">
              <button class="btn-nx-recent">All</button>
            </div>
            {
              ['Web Design', 'Web Dev', 'Mobile App', 'Graphic Design', 'SEO'].map((names, index) => (
                <div class="col" key={index}>
                  <button class="btn-nx-recent">{names}</button>
                </div>
              ))
            }
          </div>


        </div>
      </div>

      <div className="container text-center">
        <div className="row row-sm-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-md-2 g-lg-4 mb-5">
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-0">
                <CldImage
                  src='fy7of11kfqhgguq5qsej'
                  alt='portfolio'
                  height={300}
                  width={400}
                  className='w-100'
                />
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Page

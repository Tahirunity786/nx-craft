'use client'
import { useEffect } from 'react'
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
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <button className='btn-nx-recent-all'>All</button>
            </div>
            {
              ['Web Design', 'Web Development', 'Mobile App', 'Graphic Design', 'SEO'].map((names, index) => (
                <div key={index}>
                  <button className='btn-nx-recent'>{names}</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-2 mb-5">
        <div className="col">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Page

import Form from '@/component/Form/Form'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="container-fluid  p-5">
        <div className="row mb-5">
          <div className="col-lg-7 d-flex align-items-center">
            <h1>Nx Craft Helps you to grow your business</h1>
          </div>
          <div className="col-lg-5">
            <Form />

          </div>
        </div>
        <div className="mb-5">
          <div className="mb-3 text-center">
            <h2>Explore our predefined packages</h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default page

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
        <h1 className='fs-portfolio'>Check out our look book of <br /> recently finished projects for <br />our clients!</h1>
      </div>
      <div className="mb-5">

      </div>
    </>
  )
}

export default Page

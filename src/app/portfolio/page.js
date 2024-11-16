'use client'
import { useEffect } from 'react'

const Page = () => {
  useEffect(()=>{
    document.title = "Portfolio - NX Craft";
  }, []);


  return (
    <>
   <h1>Portfolio</h1>
    </>
  )
}

export default Page

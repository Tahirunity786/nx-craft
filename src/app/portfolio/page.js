'use client'
import React,{ useEffect } from 'react'

const page = () => {
  useEffect(()=>{
    document.title = "Portfolio - NX Craft";
  }, []);


  return (
    <>
   <h1>Portfolio</h1>
    </>
  )
}

export default page

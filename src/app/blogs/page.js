"use client"
import Image from "next/image"
import "./blog.css"
import NX from "../../../public/Assets/Images/nx-craft.png"
const page = () => {
  return (
    <div className='container'>
      <div className="img-box">
      <Image src={NX} alt="nx-img" height={100} width={100}/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page

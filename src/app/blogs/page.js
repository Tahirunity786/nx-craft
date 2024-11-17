"use client";
import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import "./blog.css";
import NX from "../../../public/Assets/Images/nx-craft.png";
import Carousel from "@/component/Crousal/Crousal";

const Page = () => {
  const posts = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dx9xdlbae/image/upload/v1731685195/hoo0rug22tfkrlmm2fee.png",
      overlayText: "Web Development",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="container text-center mt-5 mb-5">
        <div className="img-box">
          <Image
            src={NX}
            alt="nx-craft logo"
            height={100}
            width={100}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mb-5 container-fluid">
        <Carousel />
      </div>

      {/* Posts Section */}
      <section className="container mb-5">
        
          {posts.map((post) => (
            <div className="p-lg-5 mb-4" key={post.id}>
              <div className="card">
                <CldImage
                  src={post.src}
                  width="500"
                  height="500"
                  priority
                  alt={post.overlayText}
                  className="w-100 rounded-0"
                
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{post.overlayText}</h5>
                </div>
              </div>
            </div>
          ))}
        
      </section>
    </>
  );
};

export default Page;

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import "./blog.css";
import NX from "../../../public/Assets/Images/nx-craft.png";
import Carousel from "@/component/Crousal/Crousal";

const Page = () => {

  useEffect(() => {
    document.title = "Blogs - NX Craft"
  }, [])
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
            <div className="p-2">
              <div className="mb-4 text-center"><h2>Web Development</h2></div>
              <div className="d-flex justify-content-center align-items-center mb-3 flex-wrap">
                <div className="me-3">
                  <h6>April 29, 2024</h6>
                </div>
                <div className="me-3">
                  <h6>7 Comments</h6>
                </div>
                <div className="me-3">
                  <h6>3 min Read</h6>
                </div>
                <div className="me-3 bg-light pe-4 ps-4 pt-2 pb-2 rounded-2">
                  <h6 className="mb-0">Traval</h6>
                </div>
              </div>
              <div className="mb-3">
                <CldImage
                  src={post.src}
                  width="500"
                  height="600"
                  priority
                  alt={post.overlayText}
                  className="w-100 rounded-0 blog-res-image"
                />
              </div>
              <div className="mb-4 p-2">
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, adipisci. Velit aspernatur dolor corporis quas ratione rem nam, non tempora! Incidunt delectus nostrum eveniet vero minima harum dolorum in laboriosam!</p>
              </div>
              <div className="mb-2 p-2">
                <Link href={'#'} className="btn-blog-nx">Continue Reading ...</Link>
              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default Page;

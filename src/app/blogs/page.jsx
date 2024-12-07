"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import Carousel from "@/component/Crousal/Crousal";
import PostContent from "@/component/PostContent/PostContent";
import Card from "@/component/Card/Card";
import "./blog.css";

const Page = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      // Await the fetch call to ensure the response is resolved
      let response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/all-blogs`);

      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Await the JSON data
      const data = await response.json();

      // Log or process the data
      setData(data.results);

    } catch (error) {
      // Log the error
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    // Set the document title
    document.title = "Blogs - NX Craft";

    // Fetch the data
    getData();
  }, []);



  return (
    <>
      {/* Header Section */}
      <div className="container text-center mt-5 mb-5">
        <div className="img-box">
          <Image
            src={'https://res.cloudinary.com/dx9xdlbae/image/upload/v1732096856/p0rxgm33ztmzhe1kvlhe.svg'}
            alt="nx-craft logo"
            height={100}
            width={100}
            className="mx-auto"
          />
        </div>
        <div className="mb-2 text-center">
          <h1 className="fs-1">Read Our Latest Blogs</h1>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mb-5 container-fluid">
        <Carousel content={data || []} />
      </div>


      {/* Posts Section */}
      <section className="container mb-5">
        <h2 className="mb-4">Our Recent Blogs</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-2 g-lg-4">
            {data.map((post) => (
          <div className="col mb-4">
              <Card key={post.id} content={post.content} image={post.cover_image.image_pb_id} link={`/blogs/${post.id}`}/>
          </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Page;

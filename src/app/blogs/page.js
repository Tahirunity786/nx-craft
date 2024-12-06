"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import "./blog.css";
import Carousel from "@/component/Crousal/Crousal";
import PostContent from "@/component/PostContent/PostContent";

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
          <h2 className="fs-1">Read Our Latest Blogs</h2>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mb-5 container-fluid">
        <Carousel content={data || []} />
      </div>


      {/* Posts Section */}
      <section className="container mb-5">

        {data.map((post) => (
          <div className="p-lg-5 mb-4" key={post.id}>
            <div className="p-2">
              <div className="mb-4 text-center">
                <h2>{post.title}</h2>
              </div>
              <div className="d-flex justify-content-center-nx align-items-center mb-3 flex-wrap">
                <div className="me-3">
                  <h6>{post.date_posted || 'No date available'}</h6>
                </div>
                <div className="me-3">
                  <h6>7 Comments</h6>
                </div>
                <div className="me-3">
                  <h6>3 min Read</h6>
                </div>
                <div className="me-3 bg-light pe-4 ps-4 pt-2 pb-2 rounded-2">
                  <h6 className="mb-0">{post.tag}</h6>
                </div>
              </div>
              <div className="mb-3">
                <CldImage
                  src={post.cover_image.image_pb_id}
                  width="500"
                  height="600"
                  priority
                  alt={post.title || 'Post image'}
                  className="w-100 rounded-0 blog-res-image"
                />
              </div>
              <PostContent content={post.content} wordLimit={40} />
              <div className="mb-2 p-2">
                <Link href={`/blogs/${post.id}`} className="btn-blog-nx">
                  Continue Reading ...
                </Link>
              </div>
            </div>
          </div>
        ))}


      </section>
    </>
  );
};

export default Page;

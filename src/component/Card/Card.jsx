<<<<<<< HEAD
import React from "react";

const Card = ({
style = {},
 
}) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black", borderRadius: "8px", ...style }}>
      
    </div>
  );
};

export default Card;
=======
import React from 'react'
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import PropTypes from 'prop-types'
import './card.css'
import PostContent from '../PostContent/PostContent';
import { formatDistanceToNow } from 'date-fns';

const Card = ({ image, title, link = "#", content }) => {
  return (
    <div className="position-relative">
      <Link href={link}>
        <CldImage
          src={image}
          width="500"
          height="230"
          alt="Main image"
          className="w-100 rounded-4"

        />
      </Link>
      <div className="p-3 bg-light w-90 nx-blog">
        <div className="d-flex justify-content-start align-items-center mb-1">
          <div className="me-5 d-flex align-items-center">
            <span className="mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </span>
            <p className="mb-0 nx-blog-fs ms-2">posted by <b>admin</b></p>
          </div>
          
          <div className="me-2 d-flex align-items-center">
            <span className="mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
              </svg>
            </span>
            <p className="mb-0 nx-blog-fs ms-2">Comments (<b>{content.comments_length}</b>)</p>
          </div>
        </div>
          <p className="mb-3 nx-blog-fs ">posted on <b>{content.date_posted ? formatDistanceToNow(new Date(content.date_posted), { addSuffix: true } ):'unknown date'}</b></p>
        <div className="mb-1">
          <h5><PostContent content={content.content} wordLimit={4} /></h5>
        </div>
        <div className="mb-3">
          <Link href={link} className="nx-blog-lnk">Read more
            <span className="ms-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}


Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,

}
export default Card
>>>>>>> 64534536ec11e9435a3f252f97440b631dbb5f4d

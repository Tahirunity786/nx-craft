'use client'

import './blog-slug.css'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import PostContent from '@/component/PostContent/PostContent';


const Page = () => {
  const params = useParams();
  const [detailPost, setPostDetail] = useState([]);

  useEffect(() => {

    const postDetail = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/sp-blog/${params.slug}/`);
      if (response.ok) {
        const data = await response.json();
        setPostDetail(data);
      }
    }
    postDetail();
    document.title = detailPost.title;
  }, [params?.slug]);


  return (
    <>
      <div className="container pt-5 pb-5 ps-0 pe-0">

        <div className="row w-100">

          <div className="col-lg-8">
            <div className="mb-2">
              <h1>{detailPost.title}</h1>
              <div className="d-flex align-items-center justify-content-start">
                <p className='me-4'>posted by <b>admin</b> </p>
                <p className='me-4'>posted on <b>date</b> </p>
                <p className='me-4'>comments <b>(3)</b> </p>
              </div>
            </div>
            <div className="mb-4">
              {detailPost.cover_image?.image_pb_id ? (
                <CldImage
                  src={detailPost.cover_image.image_pb_id}
                  height="450"
                  width={550}
                  alt="blog-image"
                  className="w-100 rounded-4"
                />
              ) : (
                <p>No image available</p> // Fallback content or design
              )}
            </div>
            <PostContent content={detailPost.content} wordLimit="full" />


            <div className="mb-5">
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='fs-4 mb-2'>Tag: </span>
                <button className='btn-blog ms-2'>{detailPost.tag}</button>
                  
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                  <button className='btn-blog ms-2'><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg></span>share</button>
                 
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h3 className='mb-5 '>Comments(3)</h3>
              <div className="border p-4 bg-light rounded-2">
              </div>
            </div>
            <div className="mb-4">
              <h3 className='mb-5'>Leave Comments</h3>
              <div className="border p-4 bg-light rounded-2">
                <form action="#" method="post">
                  <textarea name="" id="" className="form-control border mb-4" style={{ resize: 'none' }} rows={5}></textarea>
                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-12 mt-4">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <button className='btn-blog'>Submit</button>
                </form>
              </div>

            </div>
          </div>
          <div className="col-lg-4 pt-3">
            <div className="ps-3 pe-3 mb-5">
              <div className="w-100 bg-light text-center p-2 rounded-2">
                <div className=" mb-4">
                  <CldImage
                    src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/tlkoddhhexulduzotyhz"
                    width="60"
                    height="60"
                    alt="Logo"
                  />
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia aliquam dicta excepturi eligendi. Cumque sapiente quibusdam voluptas porro perferendis dolores iste.</p>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="blog-circle"></div>
                  <div className="blog-circle"></div>
                  <div className="blog-circle"></div>
                  <div className="blog-circle"></div>
                </div>
              </div>
            </div>
            <div className="ps-3 pe-3 pt-3">
              <div className="w-100 bg-light text-center p-2 rounded-2">
                <div className=" mb-4">
                  <h3>Recent Posts</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

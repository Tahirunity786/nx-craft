'use client'

import './blog-slug.css'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import PostContent from '@/component/PostContent/PostContent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatDistanceToNow } from 'date-fns';


const Page = () => {
  const params = useParams();
  const [detailPost, setPostDetail] = useState([]);
  const [detailComment, setCommentDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    user_message: '',
  });

  function getCsrfToken() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
  }

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/post-on-comment/${params.slug}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCsrfToken(),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        let data = await response.json()
        setFormData({
          user_message: '',
          user_name: '',
          user_email: '',
          user_subject: '',
        });
        toast.success(data.message)
      } else {
        toast.error("Error! Please try again!");
      }
    } catch (error) {
      console.error(error)
      toast.error(`Error while submitting form ${error}`);

    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const postDetail = async () => {

      const [postResponse, commentResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/sp-blog/${params.slug}/`),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/show-post-comment/${params.slug}/`),
      ])

      if (postResponse.ok) {
        const dataA = await postResponse.json();
        setPostDetail(dataA);
      }
      if (commentResponse.ok) {
        const dataB = await commentResponse.json();
        setCommentDetail(dataB);
      }
    };
    postDetail();
  }, [params?.slug]);

  // Update document.title on client-side
  useEffect(() => {
    if (detailPost.title) {
      document.title = `Blog - ${detailPost.title}`;
    }
  }, [detailPost.title]);

  return (
    <>
      <ToastContainer />
      <div className="container pt-5 pb-5 ps-0 pe-0">
        <div className="row w-100">
          <div className="col-lg-8">
            <div className="mb-2">
              <h1>{detailPost.title}</h1>
              <div className="d-flex align-items-center justify-content-start">
                <p className="me-4">posted by <b>admin</b></p>
                <p className="me-4">posted on
                
                  <b>
                    
                  </b>
                </p>
                <p className="me-4">comments <b>({detailComment.length})</b></p>
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
            <div className="bg-light-nx p-3 mb-5 rounded-3">

            

            <PostContent content={detailPost.content} wordLimit="full" />

            <div className="mb-5">
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fs-4 mb-2">Tag: </span>
                  <button className="btn-blog ms-2">{detailPost.tag}</button>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <button className="btn-blog ms-2">
                    <span className="me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                      </svg>
                    </span>
                    share
                  </button>
                </div>
              </div>
            </div>
            </div>

            <div className="mb-5 ">
              <h3 className="mb-4">Comments({detailComment.length})</h3>
              <div className="p-3  bg-light-nx rounded-4">
                {
                  detailComment.map((data) => {
                    const relativeTime = formatDistanceToNow(new Date(data.date_posted), { addSuffix: true });

                    return (
                      <div key={data.id} className='commentCard row'>
                        <div className="col-lg-2">
                          <div className="profile position-relative">
                            <div className="profile-image">
                              <CldImage
                                src='https://res.cloudinary.com/dx9xdlbae/image/upload/v1733738336/uyomip7ctv0eqk3tjltw.png'
                                width={55}
                                height={55}
                                alt='profile'
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="comment-content">
                            <p className='mb-1'>{data.user_name}</p>
                            <p className='mb-2'>{relativeTime}</p>
                            <p>{data.user_message}</p>

                            <button className="btn-blog p-2 ps-4 pe-4" data-id={data.id}>
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Leave Comments</h3>
              <div className="border p-4 bg-light-nx rounded-4">
                <form onSubmit={handleSubmit}>
                  <textarea
                    name="user_message"
                    placeholder="Write comment here..."
                    className="form-control border mb-4 rounded-4 p-3"
                    style={{ resize: 'none' }}
                    rows={5}
                    onChange={handleChange}
                    required
                    value={formData.user_message}
                  ></textarea>

                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control rounded-4 pt-2 pb-2 ps-3 pe-3"
                        placeholder="Full name"
                        onChange={handleChange}
                        required
                        value={formData.user_name}
                      />
                    </div>

                    <div className="col-lg-6">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control rounded-4 pt-2 pb-2 ps-3 pe-3"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        value={formData.user_email}
                      />
                    </div>

                    <div className="col-lg-12 mt-4">
                      <input
                        type="text"
                        name="user_subject"
                        className="form-control rounded-4 pt-2 pb-2 ps-3 pe-3"
                        placeholder="Subject"
                        onChange={handleChange}
                        required
                        value={formData.user_subject}
                      />
                    </div>
                  </div>

                  <button className="btn-blog" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4 pt-3">
            <div className="ps-3 pe-3 mb-5">
              <div className="w-100 bg-light-nx text-center p-2 rounded-2">
                <div className="mb-4 rounded-pill bg-light p-3" style={{ display: 'inline-block' }}>
                  <CldImage
                    src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1732096856/p0rxgm33ztmzhe1kvlhe.svg"
                    width="50"
                    height="50"
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
              <div className="w-100 bg-light-nx text-center p-2 rounded-2">
                <div className="mb-4 ">
                  <h3 className='mb-3'>Recent Posts</h3>
                  <div className="row p-3 w-100">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <CldImage
                        src='https://res.cloudinary.com/dx9xdlbae/image/upload/v1732096856/p0rxgm33ztmzhe1kvlhe.svg'
                        width={100}
                        height={50}
                        className='w-100'
                        alt='post-image'
                      />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 text-start">
                      <h6>Hello</h6>
                      <p style={{ fontSize: "12px" }}>posted on 1 month ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

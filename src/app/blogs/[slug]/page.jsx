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
  const [detailLmPost, setLmPostDetail] = useState([]);
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

  const fetchComments = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/show-post-comment/${params.slug}/`);
      if (response.ok) {
        const data = await response.json();
        setCommentDetail(data); // Update the state with the latest comments
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
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
        const data = await response.json();
        setFormData({
          user_message: '',
          user_name: '',
          user_email: '',
          user_subject: '',
        });
        toast.success(data.message);

        // Fetch updated comments
        await fetchComments();
      } else {
        toast.error("Error! Please try again!");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error while submitting form ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const [postResponse, commentResponse, lmPosts] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/sp-blog/${params.slug}/`),
          fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/show-post-comment/${params.slug}/`),
          fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/content/lm-blogs`),
        ]);

        if (postResponse.ok) {
          const postDetail = await postResponse.json();
          setPostDetail(postDetail);
        }

        if (commentResponse.ok) {
          const commentDetail = await commentResponse.json();
          setCommentDetail(commentDetail);
        }
        if (lmPosts.ok) {
          const lmPostsdata = await lmPosts.json();

          setLmPostDetail(lmPostsdata);
        }
      } catch (error) {
        console.error("Error fetching post or comments:", error);
      }
    };

    fetchPostDetails();
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
                  <b className="ms-2">
                    {detailPost.date_posted
                      ? formatDistanceToNow(new Date(detailPost.date_posted), { addSuffix: true })
                      : "Unknown date"}
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
                  <div className="mb-4">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="me-4">
                        <Link href={"#"} className="bg-light rounded-pill ico-footer">

                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d62976" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>

                        </Link>
                      </div>
                      <div className="me-4">
                        <Link href={"#"} className="bg-light rounded-pill ico-footer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#316FF6" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                          </svg>
                        </Link>
                      </div>
                      <div className="me-4">
                        <Link href={"#"} className="bg-light rounded-pill ico-footer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0077B5" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="me-4">
                        <Link href={"#"} className="bg-light rounded-pill ico-footer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ps-3 pe-3 pt-3">
              <div className="w-100 bg-light-nx text-center p-2 rounded-2">
                <div className="mb-4 ">
                  <h3 className='mb-3'>Recent Posts</h3>
                  <div className="row p-3 w-100">
                    {
                      detailLmPost.map((data) => {
                        return (
                          <div key={data.id} className="col-lg-12 mb-3">
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <Link href={`/blogs/${data.id}`}>
                                  <CldImage
                                    src={data.cover_image.image_pb_id}
                                    width={100}
                                    height={50}
                                    className='w-100 rounded-2'
                                    alt='post-image'
                                  />
                                </Link>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 text-start">
                                <Link href={`/blogs/${data.id}`} className='nav-link fs-5 fw-medium'>{data.title}</Link>
                                <p style={{ fontSize: "12px" }}>posted on {formatDistanceToNow(new Date(data.date_posted), { addSuffix: true })}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }

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

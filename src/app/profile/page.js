"use client"

import BorderBottom from '@/component/Border/BorderBottom';
import styles from './profile.module.css';
import { CldImage } from 'next-cloudinary';
import image1 from "../../../public/Assets/Icons/Rectangle 7.svg"
import Image from 'next/image';
const Page = () => {
    return (
        <>
            <div className="position-relative">

                <div className={styles.upperProfile}>
                    <div style={{ position: "absolute", left: "50%", top: "70px" }}>

                        <CldImage
                            src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/tlkoddhhexulduzotyhz"
                            width="80"
                            height="60"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className={styles.profile}>


                </div>
                <div className={styles.nxImage}></div>

            </div>


            <div className='container'>
                <div className='row mb-2'>
                    <div className="col-lg-6 col-md-6">
                        <div className="card" style={{ width: "25rem", backgroundColor: "#CDE3EB", }}>
                            {/* <img
                            src="\Assets\Images\download.png"
                            className="card-img-top"
                            alt="profile"
                        /> */}
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h2>Profile</h2>
                                        <BorderBottom width="300px" color="blue" borderthickness="2px" />
                                        <h4>Name</h4>
                                        <p>Education</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                                        </p>
                                    </div>
                                    {/* <div>
                                    <p className='mb-0'>last login 04 August 2018</p>
                                    <p>Lorem Ipsum</p>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card mb-2" style={{ width: "25rem", backgroundColor: "#CDE3EB" }}>
                            {/* <img
                            src="\Assets\Images\download.png"
                            className="card-img-top"
                            alt="profile"
                        /> */}
                            <div className="card-body">
                                <div>

                                    <h4>Awards</h4>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "25rem", backgroundColor: "#CDE3EB" }}>
                            {/* <img
                            src="\Assets\Images\download.png"
                            className="card-img-top"
                            alt="profile"
                        /> */}
                            <div className="card-body">
                                <div>

                                    <h4>Awards</h4>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: "relative" }}>
                    <Image style={{ position: "absolute",bottom:"1px", left: "320px" }} src={image1} alt='img1' height={330} width={270} />
                </div>

            </div>

        </>
    );
};

export default Page;

"use client"
import { useState } from 'react';
import BorderBottom from '@/component/Border/BorderBottom';
import styles from './profile.module.css';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import SkillsBox from '@/component/Skills/SkillBox';


const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "Google Workspace developemet"];
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

                            {/* Profile */}
                            <div className="card-body">
                                <div className='d-flex align-items-center gap-2'>
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", display: "inline-block", position: "relative" }}>
                                        <Image style={{ position: "absolute", top: "10px", left: "8px" }} src={"/Assets/Images/profile.svg"} height={50} width={50} alt='skills' />
                                    </div>
                                    <h4>Profile Details</h4>

                                </div>
                                <div>
                                    <h6>Bio</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
                                <div className='d-flex align-items-center gap-2'>
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", display: "inline-block", position: "relative" }}>
                                        <Image style={{ position: "absolute", top: "10px", left: "8px" }} src={"/Assets/Images/skills.svg"} height={50} width={50} alt='skills' />
                                    </div>
                                    <h4>Skills</h4>
                                </div>


                                <div>
                                    <SkillsBox skills={skills} />

                                </div>

                            </div>
                        </div>

                        {/* Education */}
                        <div className="card mb-2" style={{ width: "25rem", backgroundColor: "#CDE3EB" }}>
                            {/* <img
                            src="\Assets\Images\download.png"
                            className="card-img-top"
                            alt="profile"
                        /> */}
                            <div className="card-body">
                                <div className='d-flex align-items-center gap-2'>
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", display: "inline-block", position: "relative" }}>
                                        <Image style={{ position: "absolute", top: "10px", left: "8px" }} src={"/Assets/Images/education.svg"} height={50} width={50} alt='skills' />
                                    </div>
                                    <h4>Education</h4>
                                </div>
                                <div className={styles.cards} style={{ marginTop: "15px" }}>
                                    <h5>College Name</h5>
                                    <h6 className='mb-0'>from -date-to date</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>

                                <div className={styles.cards} style={{ marginTop: "15px" }}>
                                    <h5>College Name</h5>
                                    <h6 className='mb-0'>from -date-to date</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Awards */}
                        <div className="card" style={{ width: "25rem", backgroundColor: "#CDE3EB" }}>
                            {/* <img
                            src="\Assets\Images\download.png"
                            className="card-img-top"
                            alt="profile"
                        /> */}
                            <div className="card-body">
                                <div className='d-flex align-items-center gap-2'>
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", display: "inline-block", position: "relative" }}>
                                        <Image style={{ position: "absolute", top: "10px", left: "8px" }} src={"/Assets/Images/awards.svg"} height={50} width={50} alt='skills' />
                                    </div>
                                    <h4>Awards</h4>
                                </div>
                                <div className={styles.cards} style={{ marginTop: "15px" }}>
                                    <h5>Institute Name</h5>
                                    <h6 className='mb-0'>Issue date</h6>

                                </div>

                                <div className={styles.cards} style={{ marginTop: "15px" }}>
                                    <h5>Institute Name</h5>
                                    <h6 className='mb-0'>Issue date</h6>

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

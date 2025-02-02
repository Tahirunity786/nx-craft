"use client"
import { useState, useEffect } from 'react';
import BorderBottom from '@/component/Border/BorderBottom';
import styles from './profile.module.css';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import SkillsBox from '@/component/Skills/SkillBox';
import { useSearchParams } from 'next/navigation';

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "bootstrap", "Google Workspace developemet"];
const Page = () => {
    const [profileDetails, setProfileDetails] = useState([]);
    const searchParams = useSearchParams();
    const slug = searchParams.get('source');

    async function profileData() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/detail-profile/${slug}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setProfileDetails(data);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    }
    useEffect(() => {
        profileData();
    }, []);

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

                    <CldImage
                        src={profileDetails.image_pb_id}
                        width="80"
                        height="60"
                        alt="Logo"
                    />

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
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%",position: "relative", display:"flex", justifyContent:"center", alignItems:"center" }}>

                                        <CldImage
                                            src="e2gi8yrugzqm7qvqchho"
                                            width="40"
                                            height="40"
                                            alt="Logo"
                                        />

                                    </div>
                                    <h4>Profile Details</h4>

                                </div>
                                <div className='mt-4'>
                                    <h6>Bio</h6>
                                    <p>{profileDetails.experience}</p>
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
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", position: "relative",display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <CldImage
                                            src="kbrhlgzxmhoxegmbwoxj"
                                            width="40"
                                            height="40"
                                            alt="Logo"
                                        />

                                    </div>
                                    <h4>Skills</h4>
                                </div>


                                <div>
                                    <SkillsBox skills={profileDetails.skills} />

                                </div>

                            </div>
                        </div>

                        {/* Education */}
                        <div className="card mb-2" style={{ width: "25rem", backgroundColor: "#CDE3EB" }}>
                            <div className="card-body">
                                <div className='d-flex align-items-center gap-2'>
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", position: "relative", display:"flex", justifyContent:"center", alignItems:"center" }}>

                                        <CldImage
                                            src="yuh1vbgj0np26c6sqp4w"
                                            width="50"
                                            height="40"
                                            alt="Logo"
                                        />

                                    </div>
                                    <h4>Education</h4>
                                </div>
                                {
                                    profileDetails?.education?.map((data) => (
                                        <div className={styles.cards} style={{ marginTop: "15px" }} key={data.id}>
                                            <h5>{data.college_name}</h5>
                                            <h6 className="mb-0">{data.from_year} - {data.to_year}</h6>
                                            <p>{data.degree}</p>
                                        </div>
                                    ))
                                }

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
                                    <div className={styles.circleGradient} style={{ height: "70px", width: "70px", borderRadius: "50%", display: "inline-block", position: "relative",display:"flex", justifyContent:"center", alignItems:"center" }}>

                                        <CldImage
                                            src="he2wxfjvudg6ehvbmtvj"
                                            width="40"
                                            height="40"
                                            alt="Logo"
                                        />
                                    </div>
                                    <h4>Awards</h4>
                                </div>

                                {
                                    profileDetails?.awards?.map((data) => (
                                        <div className={styles.cards} style={{ marginTop: "15px" }} key={data.id}>
                                            <h5>{data.award_name}</h5>
                                            <h6>{data.institue_name}</h6>
                                            <p className='mb-0'>{data.year}</p>

                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Page;

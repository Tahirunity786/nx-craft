'use client';
import Form from '@/component/Form/Form';
import './service.css'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
    const params = useParams(); // params is now a Promise
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params; // Await the promise
            setSlug(resolvedParams.slug); // Access the `slug` property
        }
        fetchParams();
    }, [params]);

    return (
        <>
            <div className="container-fluid  p-5">
                <div className="row">
                    <div className="col-lg-7 d-flex align-items-center justify-content-center">
                        <div className="mb-3">
                            <h2 className='mb-3'>Elevate Your Business with Tailored Software Solutions</h2>
                            <p className='mb-5'>Nx Craft delivers specialized software development services designed to meet your unique business requirements, enhancing efficiency and fueling growth through our customized solutions.</p>
                     
                            <button className='meeting-btn w-75'>Schedule a meeting</button>

                        </div>


                    </div>
                    <div className="col-lg-5">
                        <Form />

                    </div>
                </div>

            </div>
        </>
    );
}

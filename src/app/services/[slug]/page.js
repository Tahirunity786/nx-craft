'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '@/component/Form/Form';
import Model from '@/component/Model/Model';
import './service.css'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clendly from '@/component/Clendly/Clendly';


export default function Page() {
    const params = useParams(); // params is now a Promise
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        
        // Dynamically import Bootstrap's JS 
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
        // Slug extraction
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
                    <div className="col-lg-7 mb-4 d-flex align-items-center justify-content-center">
                        <div className="mb-3">
                            <h2 className='mb-3'>Elevate Your Business with Tailored Software Solutions</h2>
                            <p className='mb-5'>Nx Craft delivers specialized software development services designed to meet your unique business requirements, enhancing efficiency and fueling growth through our customized solutions.</p>

                            <button className='meeting-btn w-75' data-bs-toggle="modal" data-bs-target="#nx-meet">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 me-3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                </svg>
                                Schedule a meeting
                            </button>
                            <Model
                                id="nx-meet"
                                modelSize="modal-lg"
                                modelType="modal-dialog-scrollable"
                                title=""
                                modelBody={<Clendly />}
                            />

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

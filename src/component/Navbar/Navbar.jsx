'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-nx sticky-top">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <Image
                        width={140}
                        height={60}
                        src="/Assets/Images/NxCraft.svg"
                        alt="NxCraft Logo"
                        priority // Optimize loading for logo
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <div className="search-input-nx">
                                <span className="pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" aria-label="Search Icon">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </span>
                                <input type="text" placeholder="Search" className="ms-2" aria-label="Search Input" />
                                <div className="dropdown">
                                    <Link href="#" className="dropdown-toggle nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Talent
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="#" className="dropdown-item">Talent</Link></li>
                                        <li><Link href="#" className="dropdown-item">Project</Link></li>
                                        <li><Link href="#" className="dropdown-item">Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* Optimized Navigation Links */}
                        {['/services', '/products', '/portfolio'].map((path, index) => (
                            <li key={index} className="nav-item ms-lg-3 me-lg-3">
                                <Link href={path} className="nav-link text-light">
                                    {path.replace('/', '').toUpperCase()}
                                </Link>
                            </li>
                        ))}



                    </ul>
                    <div className='d-flex justify-content-end w-100'>
                        {/* Contact Button */}
                        <a href="tel:+923232963784" className="btn-nx" aria-label="Call Us">
                            <span className="me-2 ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16" aria-label="Phone Icon">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </span>
                            +92 (323) 2963784
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

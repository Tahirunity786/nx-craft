import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import './offcanvas.css';

const Offcanvas = () => {
    return (
        <>
            <div
                className="offcanvas offcanvas-start  offcanvas-nx"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header flex-column align-items-start">
                    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                        <Link href="/" className="navbar-brand d-flex justify-content-start align-items-center">
                            <CldImage
                                src="https://res.cloudinary.com/dx9xdlbae/image/upload/f_auto,q_auto/v1/Images/tlkoddhhexulduzotyhz"
                                width="60"
                                height="45"
                                alt="Logo"
                            />
                            <span className="nx-brand text-light fs-4-nx">Craft</span>
                        </Link>
                        <button
                            type="button"
                            className="btn-close bg-light"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div>
                        <h5 className="text-light ps-1">Evaluate your business</h5>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column mt-5">
                        {['/', '/services', '/portfolio', '/blogs', '/contact'].map((path, index) => (
                            <li key={index} className="nav-item ms-lg-3 me-lg-3 d-flex align-items-center justify-content-start nav-link-nx-outer">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                    </svg>
                                </span>
                                <Link href={path} className="nav-link text-dark nav-link-nx p-0 ">
                                    {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Offcanvas;

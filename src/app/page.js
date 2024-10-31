import Image from "next/image";
import Link from 'next/link';
import "./main.css";

export default function Home() {
  return (
    <>
      <main className="container-fluid mb-5" style={{ position: 'relative' }}>
        <div className="row p-5 align-items-center">
          <div className="col-lg-6 mb-4">
            <header className="mb-2">
              <h6 className="nx-top-h ms-2">Priority</h6>
              <h1 className="nx-heading">We Grow Your Business Reach to Next Level</h1>
            </header>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <div className="mb-3">
              <Link href="#" className="btn-main-nx rounded-pill">
                Book a Meeting
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src="/Assets/Images/main-h.svg"
              alt="Main Image"
              width={100}
              height={60}
              priority
              style={{ width: "100%", height: "auto" }}
            />
            <div className="d-flex flex-column align-items-center justify-content-between" style={{ position: 'absolute', top: '150px', right: '50px' }}>
              <div className="mb-5 bg-light border rounded-pill d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <Image
                  src="/Assets/Icons/instagram.svg"
                  alt="Main Image"
                  width={35}
                  height={35}
                  priority

                />
              </div>
              <div className="mb-5 bg-light border rounded-pill d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <Image
                  src="/Assets/Icons/pinterest.svg"
                  alt="Main Image"
                  width={35}
                  height={35}
                  priority

                />
              </div>
              <div className="mb-5 bg-light border rounded-pill d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <Image
                  src="/Assets/Icons/twitter.svg"
                  alt="Main Image"
                  width={35}
                  height={35}
                  priority

                />
              </div>
              <div className="mb-5 bg-light border rounded-pill d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <Image
                  src="/Assets/Icons/youtube.svg"
                  alt="Main Image"
                  width={35}
                  height={35}
                  priority

                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="container-fluid mb-5">
        <div className="mb-4 text-center">
          <h6 className="nx-top-h mb-2">Our Service</h6>
          <h2 className="mb-2">We Provide Fastest & Unique <br />
            Business Growing Service</h2>
          <p className="mb-2">It is a long established fact that a reader will be distracted by the readable <br />
            content of a page when looking at its layout.</p>
        </div>

        <div className="row">
          
        </div>
      </section>
    </>
  );
}

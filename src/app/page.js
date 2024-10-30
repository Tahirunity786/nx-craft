import Image from "next/image";
import Link from 'next/link';
import "./main.css";

export default function Home() {
  return (
    <main className="container-fluid">
      <div className="row p-5 align-items-center">
        <div className="col-lg-6">
          <header className="mb-2">
            <h6 className="nx-top-h">Priority</h6>
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
        </div>
      </div>
    </main>
  );
}

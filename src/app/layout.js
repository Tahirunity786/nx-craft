import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import Head from "next/head"; // Import Next.js Head component
import './global.css';

export const metadata = {
  title: "Home",
  description: `NXCraft provides cutting-edge IT solutions, specializing in web and mobile app development, cloud services, and digital transformation. We help businesses drive growth, boost efficiency, and stay competitive in the digital age.`,
  keywords: `IT solutions, IT agency, web development, mobile app development, cloud services, digital transformation, software development, custom software solutions, digital strategy, technology consulting, scalable IT solutions, secure IT services, enterprise solutions, business growth technology, innovative IT services, tech agency, full-stack development, SaaS development, cloud computing, app development company, IT consulting, digital transformation services, software company, tech solutions for businesses, IT support services.`,
  author: "Tahir Zaman",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        {/* Google site verification */}
        <meta name="google-site-verification" content="Jr_3Z-ymiNvORdlkdvusQJyKkc8qH_BnZY3ARsR9q0I" />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

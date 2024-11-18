import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import './global.css';
import Script from 'next/script';
import Head from "next/head";

export const metadata = {
  title: "Welcome to NX Craft", 
  description: `NXCraft provides cutting-edge IT solutions, specializing in web and mobile app development, cloud services, and digital transformation.`,
  keywords: `NX craft, nx craft, Nx craft, IT solutions, IT agency, web development, mobile app development, cloud services.`,
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VCLVSETEK7"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VCLVSETEK7');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import './global.css'

export const metadata = {
  title: "Home",
  description: `
          NXCraft delivers innovative IT solutions, specializing in web and mobile app development, cloud services, and digital transformation. We help businesses of all sizes drive growth, improve efficiency, and stay competitive. Partner with us to unlock your business’s full potential through cutting-edge technology.  
`,
  keywords: `IT solutions, IT agency, web development, mobile app development, cloud services, digital transformation, software development, custom software solutions, digital strategy, technology consulting, scalable IT solutions, secure IT services, enterprise solutions, business growth technology, innovative IT services, tech agency, full-stack development, SaaS development, cloud computing, app development company, IT consulting, digital transformation services, software company, tech solutions for businesses, IT support services.`,

  author: "Tahir Zaman",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Dynamically add meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="Jr_3Z-ymiNvORdlkdvusQJyKkc8qH_BnZY3ARsR9q0I" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

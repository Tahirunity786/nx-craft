import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import './global.css'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

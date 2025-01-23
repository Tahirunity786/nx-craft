'use client';

import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { usePathname } from "next/navigation";

export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();
  const noNavbarFooterRoutes = ["/dashboard/login", "/dashboard/signup", "/404"]; // Paths without Navbar and Footer

  const showNavbar = !noNavbarFooterRoutes.includes(pathname);
  const showFooter = !noNavbarFooterRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

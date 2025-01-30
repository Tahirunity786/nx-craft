'use client';

import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { usePathname } from "next/navigation";
import ChatInbox from "@/component/ChatInbox/ChatInbox"; // Import the new client component

export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();
  const noNavbarFooterRoutes = ["/dashboard/login", "/dashboard/signup","/dashboard/home","/dashboard/inboxall", "/404"]; // Paths without Navbar and Footer

  const showNavbar = !noNavbarFooterRoutes.includes(pathname);
  const showFooter = !noNavbarFooterRoutes.includes(pathname);
  const showChatBox = !noNavbarFooterRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {showChatBox && <ChatInbox/>}
      <main className="w-100">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();

  if (pathname ==="/home" || pathname === "/") {
    // Home page → show only on mobile & tablet
    return <Navbar className="block lg:hidden" />;
  }

  // Other pages → show on all screen sizes
  return <Navbar />;
}

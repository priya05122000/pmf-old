"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

interface NavbarProps {
  className?: string;
}

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const Logo = ({ img1Size = 70, img2Size = 150 }: { img1Size?: number; img2Size?: number }) => (
    <Link href="/" className="flex items-center">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo1"
          height={70}
          width={60}
          className="object-contain h-12 "
        />
      </div>
      <div>
        <Image
          src="/images/promed.png"
          alt="logo2"
          height={120}
          width={120}
          className="object-contain mt-1"
        />
      </div>

    </Link>
  );

  const ActiveDot = (
    <span className="w-2 h-2 rounded-full mt-1 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />
  );

  return (
    <nav
      className={`w-full bg-[#151515] px-6 sm:px-10 lg:px-16 py-2 flex items-center justify-between ${className}`}
    >
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-white gap-8">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.path);
          return (
            <div key={link.path} className="flex items-center justify-center gap-2">
              {active && ActiveDot}
              <Link
                href={link.path}
                className={`relative text-lg transition ${active ? "font-semibold text-white" : "hover:text-gray-300"}`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Mobile Drawer Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#151515] text-white p-6">
            <Logo img1Size={50} img2Size={100} />
            <nav className="flex flex-col gap-6 mt-10">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <SheetClose asChild key={link.path}>
                    <div className="flex items-center">
                      {active && ActiveDot}
                      <Link
                        href={link.path}
                        className={`relative text-xl transition ${active ? "font-bold text-white" : "hover:text-gray-300"}`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

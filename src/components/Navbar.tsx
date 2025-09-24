"use client";

// --- Imports ---
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

// --- Types ---
interface SubMenu {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  submenus?: SubMenu[];
}

interface MobileMenuState {
  isOpen: boolean;
  activeSubmenu: string | null;
}

interface NavLinksListProps {
  navLinks: NavLink[];
  activeLink: string;
  activeSubmenu: string | null;
  onLinkClick?: (link: NavLink) => void;
  onSubmenuClick?: (submenu: SubMenu) => void;
  submenuOpenLabel?: string | null;
  isMobile?: boolean;
  onSubmenuToggle?: (label: string) => void;
  onClose?: () => void;
}

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

interface NavbarProps {
  hide?: boolean;
  className?: string;
  homeHeroStyle?: boolean;
}

// --- Constants ---
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "Contact us", href: "/contact-us" },
];

const COMPANY = {
  name: "Promed",
  logo: "/logos/logo.png",
  homeUrl: "/home",
};

// --- Utilities ---
const getActiveNavInfo = (
  pathname: string,
  navLinks: NavLink[]
): { activeLink: string; activeSubmenu: string | null } => {
  for (const link of navLinks) {
    if (link.href === pathname)
      return { activeLink: link.label, activeSubmenu: null };
    if (link.submenus) {
      for (const submenu of link.submenus) {
        if (submenu.href === pathname)
          return { activeLink: link.label, activeSubmenu: submenu.label };
      }
    }
  }
  return { activeLink: "", activeSubmenu: null };
};

// --- Components ---
const Logo: React.FC = () => (
  <div className="flex items-center gap-2 shrink-0 h-full justify-center">
    <Link href={COMPANY.homeUrl}>
      <Image
        src={COMPANY.logo}
        alt={`${COMPANY.name} Logo`}
        width={1000}
        height={1000}
        className="w-auto h-10 object-contain"
        quality={100}
        priority
      />
    </Link>
  </div>
);

const NavLinksList: React.FC<NavLinksListProps> = ({
  navLinks,
  activeLink,
  activeSubmenu,
  onLinkClick,
  onSubmenuClick,
  submenuOpenLabel,
  isMobile = false,
  onSubmenuToggle,
  onClose,
}) => (
  <ul
    className={
      isMobile
        ? "flex flex-col items-stretch gap-0 text-deep-green font-medium font-inter tracking-wide bg-[var(--light-bg-color)] py-0 z-20 text-white"
        : "hidden lg:flex ml-10 items-center justify-end text-sm xl:text-base text-white-custom font-medium font-inter"
    }
  >
    {navLinks.map((link) => (
      <React.Fragment key={link.label}>
        <li
          className={
            isMobile
              ? `px-6 sm:px-8 py-3 w-full text-deep-green text-left text-sm border-b last:border-b-0 border-deep-green ${
                  activeLink === link.label ? "font-bold text-deep-green" : ""
                } cursor-pointer transition-colors duration-200 hover:text-primary flex items-center justify-between`
              : `relative ml-10 ${
                  activeLink === link.label ? "text-accent" : ""
                } hover:text-accent cursor-pointer transition-colors duration-200 group`
          }
          onClick={() => {
            if (isMobile && link.submenus && onSubmenuToggle)
              onSubmenuToggle(link.label);
            else if (isMobile && !link.submenus && onClose) onClose();
            if (onLinkClick) onLinkClick(link);
          }}
        >
          {link.submenus ? (
            <>
              <span
                className={
                  isMobile ? "block w-full" : "block w-full h-full py-2"
                }
              >
                {link.label}
              </span>
              {isMobile && (
                <svg
                  className={`ml-2 w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    submenuOpenLabel === link.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </>
          ) : (
            <Link
              href={link.href || "#"}
              className={
                isMobile
                  ? "block w-full h-full"
                  : "block w-full h-full py-2 text-white text-lg font-medium cursor-pointer hover:text-white/70"
              }
              onClick={isMobile ? onClose : undefined}
            >
              {link.label}
            </Link>
          )}
          {/* Desktop submenu */}
          {!isMobile && link.submenus && (
            <ul className="absolute left-0 top-full bg-background text-gray-900 rounded shadow-lg min-w-[200px] z-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {link.submenus.map((submenu) => (
                <li
                  key={submenu.label}
                  className="px-4 py-2 transition-colors duration-150"
                >
                  <Link
                    href={submenu.href}
                    className={`block w-full text-sm ${
                      activeSubmenu === submenu.label ? "text-accent" : ""
                    }`}
                  >
                    {submenu.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Mobile submenu */}
        {isMobile && link.submenus && submenuOpenLabel === link.label && (
          <ul className="px-8 py-2">
            {link.submenus.map((submenu) => (
              <li key={submenu.label} className="py-1 text-xs">
                <Link
                  href={submenu.href}
                  className={`transition-colors duration-150 ${
                    activeSubmenu === submenu.label
                      ? "text-accent font-bold"
                      : "text-gray-700 hover:text-black"
                  }`}
                  onClick={onClose}
                >
                  {submenu.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    ))}
  </ul>
);

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    className="lg:hidden flex flex-col justify-center items-center ml-auto text-white"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <RxCross1 className="text-3xl rounded my-0.5 transition-all duration-300 text-white-custom" />
    ) : (
      <RxHamburgerMenu className="text-3xl rounded my-0.5 transition-all duration-300 text-white-custom" />
    )}
  </button>
);

// --- Main Navbar ---
const Navbar: React.FC<NavbarProps> = ({
  hide = false,
  className = "",
  homeHeroStyle = false,
}) => {
  // --- State ---
  const [mobileMenu, setMobileMenu] = useState<MobileMenuState>({
    isOpen: false,
    activeSubmenu: null,
  });
  const pathname = usePathname();
  const { activeLink, activeSubmenu } = getActiveNavInfo(pathname, NAV_LINKS);

  // --- Scroll Position ---
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (pathname === "/home" && homeHeroStyle && navRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        const initialTop = window.innerHeight * 0;
        gsap.set(navRef.current, { y: initialTop });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: navRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        });
        tl.to(navRef.current, { y: 0, duration: 3 }); // duration controls the speed
      }
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, [pathname, homeHeroStyle]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Handlers ---
  const toggleMobileMenu = () => {
    setMobileMenu((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      activeSubmenu: prev.isOpen ? null : prev.activeSubmenu,
    }));
  };

  const handleSubmenuToggle = (label: string) => {
    setMobileMenu((prev) => ({
      ...prev,
      activeSubmenu: prev.activeSubmenu === label ? null : label,
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenu({
      isOpen: false,
      activeSubmenu: null,
    });
  };

  // --- Classes ---
  const heroNavClass = scrolled
    ? "fixed top-0 transition-all duration-500"
    : "fixed top-1/3 transition-all duration-500";

  // --- Render ---
  return (
    <nav
      ref={pathname === "/home" && homeHeroStyle ? navRef : undefined}
      className={`
        left-0 z-50
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
        ${className}
        ${pathname === "/home" && homeHeroStyle ? heroNavClass : "fixed top-0 w-full"}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-full">
        <div className="bg-[var(--bg-color)]">
          <Section>
            <div
              className={`flex items-center w-full relative ${pathname === "/home" ? "py-0" : "py-2"}`}
            >
              <div
                style={{
                  visibility: pathname === "/home" ? "hidden" : "visible",
                }}
              >
                <Logo />
              </div>
              <NavLinksList
                navLinks={NAV_LINKS}
                activeLink={activeLink}
                activeSubmenu={activeSubmenu}
              />
              <HamburgerButton
                isOpen={mobileMenu.isOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </Section>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div
          className={`transition-all duration-300 ease-in-out ${
            mobileMenu.isOpen
              ? "max-h-[500px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          } overflow-hidden`}
        >
          <NavLinksList
            navLinks={NAV_LINKS}
            activeLink={activeLink}
            activeSubmenu={activeSubmenu}
            isMobile
            submenuOpenLabel={mobileMenu.activeSubmenu}
            onSubmenuToggle={handleSubmenuToggle}
            onClose={closeMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
};

// --- Export ---
export default Navbar;

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
   label: "Home",
   href: "/", 
  },
  {
   label: "About",
   href: "/about", 
  },
  {
    label: "E Bikes",
    href: "/e-bikes",
  },
  {
    label: "Prices",
    href: "/prices",
  },
  {
    label: "Book Now",
    href: "/book",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
]

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-200 p-4 md:p-0">
      <div className="container mx-auto flex justify-between items-center sm:h-[70px] md:h-[100px]">
        {/* Logo or Brand */}
        <div className="text-white text-xl font-bold">Ocean Cycles</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={cn(
            "flex-col md:flex md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0",
            isOpen ? "flex" : "hidden md:flex"
          )}
        >
          <div className="bg-gray-200 rounded-full p-4 md:p-2 flex flex-col md:flex-row items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-gray-500 hover:bg-white hover:text-black py-2 px-4 rounded-full transition-colors text-sm",
                  link.href === pathname ? "bg-white text-black" : ""
                )}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
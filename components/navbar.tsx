"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDirectionsBike } from "react-icons/md";
import { MobileSidebar } from "./mobile-sidebar";

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
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-blue-200 p-4 md:p-0">
      <div className="container mx-auto flex justify-between items-center sm:h-[70px] md:h-[100px]">
        {/* Logo or Brand */}
        <Link href="/">
          <div className="flex gap-1 items-center">
            <div className="text-white text-sm lg:text-xl font-bold">Ocean Cycles</div>
            <MdDirectionsBike color="white" size="2em" />
          </div>
        </Link>

        {/* Mobile Sidebar for smaller screens */}
        <div className="block md:hidden">
          <MobileSidebar />
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex">
          <div className="bg-gray-200 rounded-full p-4 md:p-2 flex flex-col md:flex-row items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-gray-500 hover:bg-white hover:text-black py-2 px-4 rounded-full transition-colors text-sm",
                  link.href === pathname ? "bg-white text-black" : ""
                )}
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

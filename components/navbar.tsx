"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div>
      <div className="w-full h-[100px] flex justify-center items-center bg-white">
        <div className="text-white text-lg md:text-sm p-4 bg-gray-300 rounded-full">
          {links.map((link) => (
            <Link
              key={link.href} 
              href={link.href} 
              className={cn(
                "mx-4 md:mx-2 text-gray-500 hover:bg-white hover:text-black py-2 px-4 rounded-full",
                link.href === pathname ? "bg-white" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
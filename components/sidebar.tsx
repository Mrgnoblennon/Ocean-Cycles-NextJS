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
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="py-10 px-10">
      <div className="flex flex-col items-center py-6  bg-gray-200 rounded-2xl gap-y-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-4 py-1 bg-gray-200 rounded-full",
              pathname === link.href ? "bg-white" : ""
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
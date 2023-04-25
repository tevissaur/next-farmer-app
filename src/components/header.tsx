import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { useState } from "react";
import { NavItem } from "./buttons";
import { SearchBar } from "./inputs";

export const Header = () => {
  const [navItems, setNavItems] = useState([
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ]);

  return (
    <>
      <header className="flex items-center justify-center gap-x-10 border-b-1 border-black bg-white py-5 shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
        <div className="flex flex-col items-center gap-3">
          <SearchBar />
          <div className="flex justify-center gap-4">
            {navItems.map((item, index) => (
              <NavItem href={item.href} label={item.label} key={index} />
            ))}
          </div>
        </div>
        <AuthShowcase />
      </header>
    </>
  );
};

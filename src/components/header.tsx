import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { useState } from "react";
import { NavItem, SignInButtonStyled, SignOutButtonStyled, SignUpButtonStyled } from "./buttons";
import { SearchBar } from "./inputs";
import { useUser } from "@clerk/nextjs";

export const Header = () => {
  const [navItems, setNavItems] = useState([
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ]);

  const user = useUser();

  return (
    <>
      <header className="flex items-center justify-between gap-1 border-b border-gray-200 bg-white px-4 py-3">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
        <div className="flex flex-col items-center gap-2">
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
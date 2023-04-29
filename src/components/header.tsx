import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { NavItem } from "./buttons";
import { SearchBar } from "./inputs";
import { Drawer } from "./drawer";

export const Header: FC<PropsWithChildren> = () => {
  const [expanded, setExpanded] = useState(false);
  const [navItems, setNavItems] = useState([
    {
      href: "",
      label: "",
    },
  ]);

  useEffect(() => {
    setNavItems([
      { href: "/", label: "Home" },
      { href: "/explore", label: "Explore" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/news", label: "News" },
    ]);
  }, []);

  return (
    <>
      <header className="flex items-center justify-center gap-x-10 border-b-1 border-black bg-white py-5 shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
        <Drawer expanded={expanded}>
          <div className="flex flex-col items-center gap-3">
            <SearchBar />

            <div className="flex w-full flex-col justify-center gap-4">
              {navItems.map((item, index) => (
                <NavItem href={item.href} label={item.label} key={index} />
              ))}
            </div>
          </div>
          <AuthShowcase />
          <button onClick={() => setExpanded(!expanded)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </Drawer>
        <div className="hidden gap-5 md:flex">
          <div className="flex flex-col items-center gap-3 md:flex">
            <SearchBar />

            <div className="md flex justify-center gap-4">
              {navItems.map((item, index) => (
                <NavItem href={item.href} label={item.label} key={index} />
              ))}
            </div>
          </div>
          <AuthShowcase />
        </div>
        <button className="md:hidden" onClick={() => setExpanded(!expanded)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

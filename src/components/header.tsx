import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { NavItem } from "./buttons";
import { SearchBar } from "./inputs";
import { Drawer } from "./drawer";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { toggleDrawer } from "~/utils/slices/ui/ui-slice";

export const Header: FC<PropsWithChildren> = () => {
  const { open } = useAppSelector((state) => state.ui.drawer);
  const dispatch = useAppDispatch();
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
      <Drawer>
        <div className="flex flex-col items-center gap-3">
          <SearchBar />

          <div className="flex w-full flex-col justify-center gap-4">
            {navItems.map((item, index) => (
              <NavItem href={item.href} label={item.label} key={index} />
            ))}
          </div>
        </div>
        <AuthShowcase />
      </Drawer>
      <header className="flex items-center justify-between gap-x-10 border-b-1 border-black bg-white py-5 shadow-lg md:justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
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
        <div>
          <button
            className="md:hidden"
            onClick={() => dispatch(toggleDrawer(!open))}
          >
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
          <div className="flex items-center justify-center gap-5">
            <Link href="/cart">
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

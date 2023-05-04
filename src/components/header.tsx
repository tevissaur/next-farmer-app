import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";
import { CartButton, NavItem } from "./buttons";
import { SearchBar } from "./inputs";
import { Drawer } from "./drawer";
import {
  Bars3BottomRightIcon,
  CircleStackIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { toggleDrawer } from "~/utils/slices/ui/ui-slice";
import { Transition, Dialog } from "@headlessui/react";

export const Header: FC<PropsWithChildren> = () => {
  const { open } = useAppSelector((state) => state.ui.drawer);
  const dispatch = useAppDispatch();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ];

  return (
    <>
      <Drawer>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => dispatch(toggleDrawer(!open))}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center justify-center gap-5">
                        <AuthShowcase />
                        <CartButton />
                      </div>
                      <SearchBar />

                      <div className="flex w-full flex-col justify-center gap-4">
                        {navItems.map((item, index) => (
                          <NavItem
                            href={item.href}
                            label={item.label}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Drawer>
      <header className="flex items-center justify-around gap-x-10 border-b-1 border-black bg-olivine py-5 shadow-lg md:justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
        <div className="hidden gap-5 lg:flex">
          <div className="flex flex-col items-center gap-3 lg:flex">
            <SearchBar />
            <div className="flex justify-center gap-4">
              {navItems.map((item, index) => (
                <NavItem href={item.href} label={item.label} key={index} />
              ))}
            </div>
          </div>
          <AuthShowcase />
        </div>
        <div className="flex items-center justify-end gap-5">
          <button
            className="lg:hidden"
            onClick={() => dispatch(toggleDrawer(!open))}
          >
            <Bars3BottomRightIcon className="h-6 w-6" />
          </button>
          <CartButton />
        </div>
      </header>
    </>
  );
};

import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";
import { CartButton, NavItem } from "./buttons";
import { SearchBar } from "./inputs";
import {
  Bars3BottomRightIcon,
  CircleStackIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { setDrawerBody, toggleDrawer } from "~/utils/slices/ui/ui-slice";
import { Transition, Dialog } from "@headlessui/react";

export const Header: FC<PropsWithChildren> = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ];
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed inset-0">
                <div className="absolute inset-0">
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
                                onClick={handleClose}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
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
                                  onClick={handleClose}
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="flex items-center justify-around gap-x-10 border-b-1 border-black bg-olivine py-5 shadow-lg md:justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Your Local Farmers</Link>
        </h1>
        <div className="hidden gap-5 lg:flex">
          <div className="flex flex-col items-center gap-3 lg:flex">
            <SearchBar />
            <div className="flex justify-center gap-4">
              {navItems.map((item, index) => (
                <NavItem
                  href={item.href}
                  label={item.label}
                  key={index}
                  onClick={handleClose}
                />
              ))}
            </div>
          </div>
          <AuthShowcase />
        </div>
        <div className="flex items-center justify-end gap-5">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Bars3BottomRightIcon className="h-6 w-6" />
          </button>
          <CartButton />
        </div>
      </header>
    </>
  );
};

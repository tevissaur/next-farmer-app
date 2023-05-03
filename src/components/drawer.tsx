import { FC, PropsWithChildren, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { toggleDrawer } from "~/utils/slices/ui/ui-slice";
import Link from "next/link";

interface DrawerProps extends PropsWithChildren {
  open: boolean;
}

export const Drawer: FC<PropsWithChildren> = ({ children }) => {
  const { open, body } = useAppSelector((state) => state.ui.drawer);
  const dispatch = useAppDispatch();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(toggleDrawer(!open))}
      >
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
            {body}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

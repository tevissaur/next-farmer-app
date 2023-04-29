import { FC, PropsWithChildren, useState } from "react";

interface DrawerProps extends PropsWithChildren {
  expanded?: boolean;
}

export const Drawer: FC<DrawerProps> = ({ children, expanded }) => {
  return (
    <>
      {expanded && (
        <div className="absolute left-0 flex h-screen min-h-screen w-full min-w-full flex-col bg-white/10 md:hidden">
          {children}
        </div>
      )}
    </>
  );
};

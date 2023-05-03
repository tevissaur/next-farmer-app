import { FC, PropsWithChildren, useEffect } from "react";

const Banner: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" flex min-h-[10rem] w-full items-end bg-black/50 ps-6">
      <h2 className=" text-[3rem]">{children}</h2>
    </div>
  );
};

export default Banner;

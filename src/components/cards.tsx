import { FC, PropsWithChildren } from "react";


export const Card: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      )
};
import { Farm } from "@prisma/client";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect } from "react";
import { api } from "~/utils/api";
import { useAppSelector } from "~/utils/hooks";

interface CarouselItemProps extends PropsWithChildren {
  placeholder?: string;
  imageUrl?: string;
  href?: string;
  farm?: Farm;
}
export const CarouselItem: FC<CarouselItemProps> = ({
  children,
  imageUrl,
  href,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 hover:z-50">
      <a
        href={href || ""}
        className="h-[80px] w-[80px] max-w-fit overflow-hidden rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-xl md:h-[120px] md:w-[120px]"
      >
        <Image
          width={120}
          height={120}
          src={imageUrl || ""}
          alt="Placeholder Image"
        />
      </a>
      <h3 className="text-md text-center font-semibold">{children}</h3>
    </div>
  );
};

export const TopFarms: FC = () => {
  const {
    location: { latitude, longitude },
  } = useAppSelector((state) => state.user);

  const {
    data: farms,
    isSuccess,
    isError,
    isLoading,
  } = api.farms.getLocalFarms.useQuery({ latitude, longitude });
  return (
    <>
      <div className="md:max-w-1/2 flex h-full w-full flex-col gap-4 rounded-lg p-3 md:w-2/3">
        <h3 className="content-start text-start text-[2rem]">
          Farms Near You!
        </h3>
        <div className="flex w-full items-center justify-start gap-4 overflow-visible overflow-y-auto rounded-lg  md:justify-center">
          {farms &&
            isSuccess &&
            farms.map((farm) => (
              <CarouselItem
                href={`/farm/${farm.id}`}
                imageUrl={farm.image}
                key={farm.id}
              >
                {farm.name}
              </CarouselItem>
            ))}
        </div>
      </div>
    </>
  );
};

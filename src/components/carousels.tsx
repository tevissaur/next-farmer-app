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
        className="h-[120px] w-[120px] max-w-fit overflow-hidden rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-xl"
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

export const Categories: FC = () => {

  const {
    data: categories,
    isSuccess,
    isError,
    isLoading,
  } = api.farms.getPopularCategories.useQuery();
  return (
    <>
      <div className="md:max-w-1/2 flex h-full w-full flex-col gap-5 rounded-lg p-3 md:w-2/3">
        <h3 className="content-start text-start text-[2rem]">
          Popular Categories
        </h3>
        <div className="flex h-full w-full items-start justify-start gap-4 overflow-y-auto overflow-x-visible rounded-lg p-3 lg:justify-center">
          {categories &&
            isSuccess &&
            categories.map((category) => (
              <CarouselItem
                href={`/category/${category.id}`}
                imageUrl={"https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                key={category.id}
              >
                {category.name}
              </CarouselItem>
            ))}
        </div>
      </div>
    </>
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
        <div className="flex h-full w-full items-start justify-start gap-4 overflow-y-auto overflow-x-visible rounded-lg p-3 lg:justify-center">
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

import { Article, Farm } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren, useEffect } from "react";
import slugify from "slugify";
import { api } from "~/utils/api";
import { useAppSelector } from "~/utils/hooks";

interface CarouselItemProps extends PropsWithChildren {
  placeholder?: string;
  imageUrl?: string;
  href?:
    | {
        pathname: string;
        query: {
          id?: string;
          slug?: string;
        };
      }
    | string
    | undefined;
  farm?: Farm;
}
export const CarouselItem: FC<CarouselItemProps> = ({
  children,
  imageUrl,
  href,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 hover:z-50">
      <Link
        href={href || ""}
        className="h-[250px] w-[250px] max-w-[250px] overflow-hidden rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-xl"
      >
        <Image
          width={250}
          height={250}
          src={imageUrl || ""}
          alt="Placeholder Image"
          className=" object-fill"
        />
      </Link>
      <h3 className="text-md text-center font-semibold">{children}</h3>
    </div>
  );
};

interface PopularCategoriesProps extends PropsWithChildren {
  posts?: Article[];
}
export const PopularCategories: FC<PopularCategoriesProps> = ({ posts }) => {
  const {
    data: categories,
    isSuccess,
    isError,
    isLoading,
  } = api.categories.getAllCategories.useQuery();
  return (
    <>
      <div className="md:max-w-1/2 flex h-full w-full flex-col gap-5 rounded-lg p-3 md:w-2/3">
        <h3 className="content-start text-start text-[2rem]">
          Popular Categories
        </h3>
        <div className="flex h-full w-full items-start justify-start gap-4 overflow-y-auto overflow-x-visible rounded-lg p-3">
          {categories &&
            isSuccess &&
            categories.map((category) => (
              <CarouselItem
                href={{
                  pathname: "/explore/categories/[slug]",
                  query: { slug: slugify(category.name, { lower: true }) },
                }}
                imageUrl={
                  "https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
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
        <div className="flex h-full w-full items-start justify-start gap-4 overflow-y-auto overflow-x-visible rounded-lg p-3">
          {farms &&
            isSuccess &&
            farms.map((farm) => (
              <CarouselItem
                href={{
                  pathname: "/storefront/[slug]",
                  query: { slug: farm.slug },
                }}
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

export const PopularBlogs: FC = () => {
  const {
    data: topPosts,
    isSuccess,
    isError,
    isLoading,
  } = api.articles.getTopBlogPosts.useQuery();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {topPosts?.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={""}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.createdAt.toDateString()} className="mr-8">
                  {post.createdAt.toDateString()}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author?.image || ""}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.author?.fullName}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={"/"}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

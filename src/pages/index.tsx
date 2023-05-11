import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import Banner from "~/components/banner";
import { Card, SignUpCard } from "~/components/cards";
import {
  PopularCategories,
  PopularBlogs,
  TopFarms,
} from "~/components/carousels";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Banner>Home</Banner>
      <TopFarms />
      <PopularCategories />
      <PopularBlogs />
      <SignUpCard />
    </>
  );
};
export default Home;

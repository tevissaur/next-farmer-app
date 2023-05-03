import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import Banner from "~/components/banner";
import { Card } from "~/components/cards";
import { Categories, PopularBlogs, TopFarms } from "~/components/carousels";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Banner>Home</Banner>
      <TopFarms />
      <Categories />
      <PopularBlogs />
    </>
  );
};

export default Home;

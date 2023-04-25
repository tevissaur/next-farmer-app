import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import Banner from "~/components/banner";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess, isError } = api.farms.getAll.useQuery();

  const user = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Banner>Home</Banner>
      {data &&
        isSuccess &&
        data.map((farm) => <div key={farm.id}>{farm.name}</div>)}
    </>
  );
};

export default Home;

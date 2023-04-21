import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import { TextArea } from "~/components/inputs";

import { api } from "~/utils/api";

const FarmDashboard: NextPage = () => {
  const { data, isLoading, isSuccess, isError } = api.farms.getAll.useQuery();

  const user = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <TextArea />
      {data &&
        isSuccess &&
        data.map((farm) => <div key={farm.id}>{farm.name}</div>)}
      {isError && <div>Something went wrong</div>}
    </>
  );
};

export default FarmDashboard;

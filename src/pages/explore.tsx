import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "~/components/buttons";
import { TextArea } from "~/components/inputs";
import { Layout } from "~/components/layout";

import { api } from "~/utils/api";

const Explore: NextPage = () => {
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
    </>
  );
};

export default Explore;

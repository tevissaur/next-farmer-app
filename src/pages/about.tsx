import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "~/components/buttons";
import { Layout } from "~/components/layout";

import { api } from "~/utils/api";

const About: NextPage = () => {
  const { data, isLoading, isSuccess, isError } = api.farms.getAll.useQuery();

  const user = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {data &&
        isSuccess &&
        data.map((farm) => <div key={farm.id}>{farm.name}</div>)}
    </>
  );
};

export default About;

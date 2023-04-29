import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import Banner from "~/components/banner";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "~/components/buttons";
import { TextArea } from "~/components/inputs";
import { Layout } from "~/components/layout";

import { api } from "~/utils/api";

const Explore: NextPage = () => {
  return (
    <>
      <Banner>Explore Farms</Banner>
      <TextArea />
    </>
  );
};

export default Explore;

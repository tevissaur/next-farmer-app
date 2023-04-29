import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import Banner from "~/components/banner";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "~/components/buttons";
import { Layout } from "~/components/layout";

import { api } from "~/utils/api";

const About: NextPage = () => {
  return (
    <>
      <Banner>About Us</Banner>
    </>
  );
};

export default About;

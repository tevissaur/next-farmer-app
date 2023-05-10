import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useEffect } from "react";
import { TextArea } from "~/components/inputs";

import { api } from "~/utils/api";

const FarmDashboard: NextPage = () => {
  return (
    <>
      <TextArea />
    </>
  );
};

export default FarmDashboard;

import { FC, PropsWithChildren, ReactElement, useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";
import { setUserLocation } from "~/utils/slices/user/user-slice";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((location) => {
        const { latitude, longitude } = location.coords;
        dispatch(setUserLocation({ latitude, longitude }));
      });
  }, []);
  return (
    <>
      <Head>
        <title>Your Local Farmers</title>
        <meta name="description" content="Find some truly local food!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative flex min-h-screen flex-col items-center justify-start gap-5 ">
        {/* <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        /> */}
        {children}
      </main>
      <Footer />
    </>
  );
};

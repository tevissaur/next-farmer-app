import { FC, PropsWithChildren, ReactElement, useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";
import { setUserLocation } from "~/utils/slices/user/user-slice";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { Drawer } from "./drawer";

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
      <main className="flex min-h-screen flex-col items-center justify-start gap-5">
        {children}
      </main>
      <Footer />
    </>
  );
};

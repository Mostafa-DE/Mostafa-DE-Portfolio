import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Head>
        <title> Mostafa-DE Portfolio </title>
        <link rel="icon" href="/mostafa/mostafa-avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

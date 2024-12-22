import type {AppProps} from "next/app";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/global.css";
import Head from "next/head";
import Cursor from "@/components/Cursor/Cursor";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <Head>
                <title> Mostafa-DE Portfolio </title>
                <link rel="icon" href="/mostafa/mostafa-avatar.png"/>
            </Head>

            <div style={{height: "95vh"}}>
                <Component {...pageProps} />

                <Cursor/>
            </div>

        </>
    );
}

export default MyApp;

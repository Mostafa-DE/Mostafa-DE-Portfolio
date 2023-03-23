import type {AppProps} from "next/app";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/global.css";
import Loading from "@/components/Loading";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title> Mostafa-DE Portfolio </title>
                <link rel="icon" href="/mostafa-avatar.png"/>
            </Head>
            {loading ? <Loading/> : <Component {...pageProps} />}
        </>
    );
}

export default MyApp;

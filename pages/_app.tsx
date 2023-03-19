import type {AppProps} from "next/app";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/global.css";
import Loading from "@/components/Loading";

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
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <Loading/> : <Component {...pageProps} />}
        </>
    );
}

export default MyApp;

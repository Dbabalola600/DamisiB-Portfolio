import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from './loading-animation.module.css';


export default function DefaultLayout({ children }: { children?: JSX.Element }) {

    const router = useRouter();
    const [loading, setLoading] = useState(false); // Initialize a loading state

    useEffect(() => {
        const handleRouteChangeStart = () => setLoading(true);
        const handleRouteChangeComplete = () => setLoading(false);
        const handleRouteChangeError = () => setLoading(false);

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        // Clean up event listeners
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, []);


    return (
        <>
            <div className={`${loading ? "" : "hidden "} styles['loading-animation']`}>
                <h1>Loading</h1>
            </div>

            <div className={loading ? "hidden" : ""}>
                <div className="font-Montserrat flex flex-col h-screen">
                    <Navbar />
                    <div className="flex-grow break-words mt-28 mb-20">{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    );


}

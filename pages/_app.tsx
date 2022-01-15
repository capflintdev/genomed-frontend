import '../styles/globals.css';
import {AppProps} from 'next/dist/shared/lib/router/router';
import React from "react";
import ym, {YMInitializer} from "react-yandex-metrika";
import Router from "next/router";

Router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
        ym('hit', url);
    }
});


function MyApp({Component, pageProps}: AppProps): JSX.Element {

    return (
        <>
            <YMInitializer
                accounts={[87143214]}
                options={{ webvisor: true, defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }}
                version="2"
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;


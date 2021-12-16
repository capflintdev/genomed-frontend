import '../styles/globals.css';
import {AppProps} from 'next/dist/shared/lib/router/router';
import React from "react";

function MyApp({Component, pageProps}: AppProps): JSX.Element {


    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;


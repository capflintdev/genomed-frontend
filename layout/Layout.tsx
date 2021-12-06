import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import React from 'react';
import { Footer } from './Footer/Footer';
import Head from 'next/head';


export const Layout = ({ children, title = 'Геномед' }: LayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content={""} />
                <meta property="og:locale" content="ru_RU" />
            </Head>
            <Header />
            <div>
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};
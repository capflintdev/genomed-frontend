import {LayoutProps} from './Layout.props';
import {Header} from './Header/Header';
import React, {FunctionComponent} from 'react';
import {Footer} from './Footer/Footer';
import Head from 'next/head';
import {useRouter} from 'next/dist/client/router';
import {AppContextProvider, IAppContext} from "../context/Context";

export const Layout = ({children, title = 'Геномед', ...props}: LayoutProps): JSX.Element => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>{props.test?.name ? props.test.name : title  }</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={title}/>
                <meta property="og:site_name" content="Геномед - лаборатория молекулярной патологии"/>
                <meta property="og:description" name="description"
                      content="Медико-генетический центр «Геномед» - команда высококвалифицированных врачей-генетиков, биоинформатиков и лабораторных специалистов. Мы предоставляем комплексную и высокоточную диагностику наследственных заболеваний, нарушений репродуктивной функции, подбор индивидуальной терапии в онкологии. Телефон горячей линии: 8-800-333-45-38"/>
                <meta property="og:locale" content="ru_RU"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
                <meta property="og:type" content="website"/>
            </Head>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider data={props.data} >
                <Layout {...props} >
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};
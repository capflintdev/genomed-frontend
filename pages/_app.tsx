import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {


  return (
    <>
      <Head>
        <title>Геномед</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={""} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


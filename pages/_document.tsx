import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
        ym('hit', url);
    }
});

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://mc.yandex.ru" />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700&family=Raleway:wght@400;500;600&display=swap" rel="stylesheet" />
                </Head>
                <YMInitializer
                    accounts={[87143214]}
                    options={{ webvisor: true, defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }}
                    version="2"
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
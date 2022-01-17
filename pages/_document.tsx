import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import Script from "next/script";
import React from "react";


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
                    <script type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                        var __cs = __cs || [];
                        __cs.push(["setCsAccount", "R_Sh42gUmGu8vp8VAaBHGVCzAfZxogD3"]);
                `,
                        }}
                    />
                    <script src="https://app.comagic.ru/static/cs.min.js"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
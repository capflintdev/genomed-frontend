import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import React from 'react';
import {ParsedUrlQuery} from 'querystring';
import {oneCategory, test} from '../../../../interfaces/page.interface';
import {testAPI, testsAPI} from '../../../../api/api';
import {withLayout} from '../../../../layout/Layout';
import styles from "./test.module.css";
import GeneralInfo from "../../../../components/TestPage/GeneralInfo/GeneralInfo";
import Card from "../../../../components/TestPage/Card/Card";
import TabsData from "../../../../components/TestPage/Tabs/TabsData";
import CardProduct from "../../../../components/Card/CardProduct/CardProduct";
import {translit} from "../../../../helpers/helpers";

function Test({test}: pageProps): JSX.Element {

    return (
        <div className={styles.testPage}>
            <div className={"container"}>
                <section className={styles.firstBlock}>
                    <GeneralInfo {...test}/>
                    <Card {...test}/>
                </section>
                <section className={styles.tabs}>
                    <TabsData
                        details={test.details}
                        indications={test.indications}
                        preparation={test.preparation}
                        methods={test.methods}
                        howto={test.howto}
                        results={test.results}
                    />
                </section>
                <section className={styles.relatedTests}>
                    <h2>С этим исследованием также назначают</h2>
                    <div className={styles.relatedTestsWrap}>
                        <div className={styles.relatedTestsItem}><CardProduct size={'m'}/></div>
                        <div className={styles.relatedTestsItem}><CardProduct size={'m'}/></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default withLayout(Test);

export const getStaticPaths: GetStaticPaths = async () => {

    const tests: oneCategory[] = await testsAPI.getTests();

    const paths: string[] = [];

    tests.forEach(function (item: oneCategory) {

        const baseUrl: any = `/categories/${item['category_path']}/`;

        for (const key in item) {
            if (key === 'tests') {
                item['tests'].forEach(function (item) {
                    paths.push(baseUrl + translit(item.name) + '&article=' + item.article);
                });
            }
        }
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<pageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const {article} = params as IParams;

    const indexEquals: number = article.indexOf('=', 0);
    const sliceArticle: string = article.slice(indexEquals + 1);
    const test: test = await testAPI.getTest(sliceArticle);

    //const tests: oneCategory[] = await testsAPI.getTests();
    const data: oneCategory[] = await testsAPI.getTests();

    return {
        props: {
            test,
            article,
            data
        }
    };
};


interface pageProps extends Record<string, unknown> {
    test: test;
    data: oneCategory[];
}

interface IParams extends ParsedUrlQuery {
    article: string
}


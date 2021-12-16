import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { RecordsEntity } from '../../../../interfaces/page.interface';
import {testAPI, testsAPI} from '../../../../api/api';
import { withLayout} from '../../../../layout/Layout';
import styles from "./test.module.css";
import GeneralInfo from "../../../../components/TestPage/GeneralInfo/GeneralInfo";
import Card from "../../../../components/TestPage/Card/Card";
import TabsData from "../../../../components/TestPage/Tabs/TabsData";
import CardProduct from "../../../../components/Card/CardProduct/CardProduct";

function Test({ test }: pageProps): JSX.Element {

    return (
        <div className={styles.testPage}>
            <div className="container">
                <section className={styles.firstBlock}>
                    <GeneralInfo {...test}/>
                    <Card {...test}/>
                </section>
                <section className={styles.tabs}>
                    <TabsData/>
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

   const tests: RecordsEntity[] = await testsAPI.getTests();

    const paths:any = [];
    tests.forEach(function(item, index) {
        const a:any = `/categories/${item['category_path']}/`;

        for (const key in item) {
            if (key === 'tests') {
                item[key].forEach(function(item, index) {
                    const b:any = item.article
                    paths.push(a + b)
                });
            }
        }
    });

   return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<pageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const { article } = params as IParams;

    const tests: RecordsEntity[] = await testsAPI.getTests();
    const test: RecordsEntity = await testAPI.getTest(article);
    const data: RecordsEntity[] = await testsAPI.getTests();

    return {
        props: {
            test,
            article,
            data
        }
    };
};


interface pageProps extends Record<string, unknown> {
    test: RecordsEntity;
    data: RecordsEntity[];
}

interface IParams extends ParsedUrlQuery {
    article: string
}


import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { RecordsEntity } from '../../../../interfaces/page.interface';
import {testAPI2, tests2API} from '../../../../api/api';
import { Layout } from '../../../../layout/Layout';
import styles from "../../../test.module.css";
import GeneralInfo from "../../../../components/TestPage/GeneralInfo/GeneralInfo";
import Card from "../../../../components/TestPage/Card/Card";
import TabsData from "../../../../components/TestPage/Tabs/TabsData";
import CardProduct from "../../../../components/Card/CardProduct/CardProduct";

function Test({ test }: pageProps): JSX.Element {

    return (
        <Layout title={test.name}>
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
        </Layout>
    );
}

export default Test;

export const getStaticPaths: GetStaticPaths = async () => {

    const tests: RecordsEntity[] = await tests2API.getTests();

    const paths = tests.map(t => {
        return {
            params: {
                category_path: t.category_path,
                id: t.id
            }
        };
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

    const { id } = params as IParams;

    const test: RecordsEntity = await testAPI2.getTest(id);

    return {
        props: {
            test,
            id
        }
    };
};


interface pageProps extends Record<string, unknown> {
    test: RecordsEntity;
}

interface IParams extends ParsedUrlQuery {
    id: string
}


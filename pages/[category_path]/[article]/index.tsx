import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import React from 'react';
import {ParsedUrlQuery} from 'querystring';
import {oneCategory, test} from '../../../interfaces/page.interface';
import {testAPI, testsAPI} from '../../../api/api';
import {withLayout} from '../../../layout/Layout';
import styles from "./test.module.css";
import GeneralInfo from "../../../components/TestPage/GeneralInfo/GeneralInfo";
import Card from "../../../components/TestPage/Card/Card";
import TabsData from "../../../components/TestPage/Tabs/TabsData";
import CardProduct from "../../../components/Card/CardProduct/CardProduct";
import {translit} from "../../../helpers/helpers";
import Container from "../../../components/Container/Container";

function Test({test, relatedTestsData}: pageProps): JSX.Element {

    return (
        <div className={styles.testPage}>
            <Container>
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
                        {
                            relatedTestsData && relatedTestsData.map((test, index) => {
                               return (
                                   <div className={styles.relatedTestsItem} key={index}>
                                       <CardProduct
                                           size={'m'}
                                           test={test}
                                           category={test['category_path']}
                                           className={'relatedTest'}
                                       />
                                   </div>
                               );
                            })
                        }
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default withLayout(Test);

export const getStaticPaths: GetStaticPaths = async () => {

    const tests: oneCategory[] = await testsAPI.getTests();

    const paths: string[] = [];

    tests.forEach(function (item: oneCategory) {

        const baseUrl: any = `/${item['category_path']}/`;

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

    const relatedTestsId: string[] = test.related_tests.split(',').map(item => {
        return item.trim();
    });

    const relatedTestsData: test[] = [];

    data.forEach(function (item: oneCategory) {
        for (const key in item) {
            if (key === 'tests') {
                item['tests'].forEach(function (test: test) {
                    if (relatedTestsId.includes(test['price_id'])) {
                        relatedTestsData.push({category_path: item.category_path, ...test});
                    }
                });
            }
        }
    });


    return {
        props: {
            test,
            article,
            data,
            relatedTestsData
        }
    };
};


interface pageProps extends Record<string, unknown> {
    test: test;
    data: oneCategory[];
    relatedTestsData: test[]
}

interface IParams extends ParsedUrlQuery {
    article: string
}


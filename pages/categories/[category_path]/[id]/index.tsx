import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { RecordsEntity } from '../../../../interfaces/page.interface';
import {testAPI, tests2API, testsAPI} from '../../../../api/api';
import { Layout } from '../../../../layout/Layout';

function Test({ test }: pageProps): JSX.Element {

    return (
        <Layout title={`Тест ${test.name}`}>
            <>
                <div>
                    <h2>Страница одного теста</h2>
                    {
                        test &&
                        <div key={test.id}>
                            <p>имя: {test.name}</p>
                            <p>артикул: {test.article}</p>

                        </div>
                    }
                </div>
            </>
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

    const test: RecordsEntity = await testAPI.getTest(id);

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


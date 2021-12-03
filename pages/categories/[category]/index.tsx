import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { RecordsEntity } from '../../../interfaces/page.interface';
import { categoryAPI, testsAPI } from '../../../api/api';
import { withLayout } from '../../../layout/Layout';

function Category({ tests, category }: pageProps): JSX.Element {

    return (
        <>
            <div>
                <h2>Тесты в категории "{category}"</h2>
                {
                    tests &&
                    tests.map(t => (
                        <div key={t.id}>
                            <Link href={`${t.category}/${t.id}`}>
                                <a>
                                    <p>тест: {t.name}<span> артикул: {t.article}</span></p>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {

    const tests: RecordsEntity[] = await testsAPI.getTests();

    const paths = tests.map(t => {
        return {
            params: {
                category: t.category,
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

    const { category } = params as IParams;

    const tests: RecordsEntity[] = await categoryAPI.getCategory(category);

    return {
        props: {
            tests,
            category
        }
    };
};


interface pageProps extends Record<string, unknown> {
    tests: RecordsEntity[];
}

interface IParams extends ParsedUrlQuery {
    category: string
}
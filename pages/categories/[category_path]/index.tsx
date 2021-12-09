import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { RecordsEntity } from '../../../interfaces/page.interface';
import {categoryAPI, categoryAPI2, tests2API} from '../../../api/api';
import { Layout } from '../../../layout/Layout';

function Category({ tests, category }: pageProps): JSX.Element {

    return (
        <Layout title="Категория">
            <>
                <div>
                    <h2>Тесты в категории </h2>
                    {
                        tests &&
                        tests.map(t => (
                            <div key={t.id}>
                                <Link href={`/categories/${t.category_path}/${t.id}`}>
                                    <a>
                                        <p>тест: {t.name}<span> артикул: {t.article}</span></p>
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </>
        </Layout>
    );
}

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {

    const tests: RecordsEntity[] = await tests2API.getTests();

/*    const paths = tests.map(t => {
        return {
            params: {
                category: t['category_path'].toString(),
            }
        };
    });*/
    const paths = tests.map(t => '/categories/' + t['category_path'])

    
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<pageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    const { category_path } = params as IParams;
    const tests: RecordsEntity[] = await categoryAPI2.getCategory(category_path);

    return {
        props: {
            tests,
            //category,
            category_path
        }
    };
};


interface pageProps extends Record<string, unknown> {
    tests: RecordsEntity[];
}

interface IParams extends ParsedUrlQuery {
    category: string
    category_path: string
}
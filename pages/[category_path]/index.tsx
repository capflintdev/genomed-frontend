import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React, {useState} from 'react';
import { ParsedUrlQuery } from 'querystring';
import {oneCategory, test} from '../../interfaces/page.interface';
import {categoryAPI, testsAPI} from '../../api/api';
import {withLayout} from '../../layout/Layout';
import styles from "./category.module.css";
import Image from "next/image";
import mainPageImage from "./category-photo.webp";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardProduct from "../../components/Card/CardProduct/CardProduct";
import Container from "../../components/Container/Container";


function Category({ tests, category, category_path ,data }: pageProps): JSX.Element {



    return (
            <div className={styles.categoryPage}>
                <section className={styles.firstScreen}>
                    <Container>
                        <div className={styles.firstScreenWrap}>
                            <div className={styles.firstScreenText}>
                                <h1>{category.category}</h1>
                                <div className={styles.firstScreenDesc}>
                                     <p>
                                         {category.description}
                                     </p>
                                </div>
                            </div>
                            <div className={styles.firstScreenImage}>
                                <div className={styles.imageWrap}>
                                    <Image
                                        src={mainPageImage}
                                        width={680}
                                        height={500}
                                        quality={100}
                                        priority={true}
                                        alt="главный баннер"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container>
                    <div className={styles.categoryWrap}>
                        <div className={styles.sidebar}>
                            <Sidebar data={data} />
                        </div>
                        <div className={styles.tests}>
                            {
                                tests && tests.map(
                                    (test:test, index: number) =>
                                        <div className={styles.testsItem} key={index}>
                                        <CardProduct size={'l'} test={test} category={category_path}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Container>
            </div>

    );
}

export default  withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {

    const categoryAll: oneCategory[] = await testsAPI.getTests();
    const paths: string[] = categoryAll.map((t:oneCategory) => '/' + t['category_path']);

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

    const { category_path } = params as IParams;
    const tests: test[] = await categoryAPI.getCategory(category_path).then(response => response[0].tests);
    const category: oneCategory  = await categoryAPI.getCategory(category_path).then(response => response[0]);
    const data: oneCategory[] = await testsAPI.getTests();

    return {
        props: {
            tests,
            category_path,
            data,
            category
        }
    };
};


interface pageProps extends Record<string, unknown> {
    tests: test[]
    data: oneCategory[]
    category: oneCategory
    category_path: string
}

interface IParams extends ParsedUrlQuery {
    category_path: string
}
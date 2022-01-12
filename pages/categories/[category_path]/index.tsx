import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import {oneCategory, test} from '../../../interfaces/page.interface';
import {categoryAPI, testsAPI} from '../../../api/api';
import {withLayout} from '../../../layout/Layout';
import styles from "./category.module.css";
import Image from "next/image";
import mainPageImage from "./category-photo.webp";
import Sidebar from "../../../components/Sidebar/Sidebar";
import CardProduct from "../../../components/Card/CardProduct/CardProduct";
import {Button} from "../../../components/Button/Button";

function Category({ tests, category, category_path ,data }: pageProps): JSX.Element {

    return (
            <div className={styles.categoryPage}>
                <section className={styles.firstScreen}>
                    <div className={"container"}>
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
                                    <div className={styles.frame}></div>
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
                    </div>
                </section>
                <div className={"container"}>
                    <div className={styles.categoryWrap}>
                        <div className={styles.sidebar}>
                            <Sidebar data={data}/>
                        </div>
                        <div className={styles.tests}>
                            {
                                tests && tests.map(
                                    (t) =>  <div className={styles.testsItem}>
                                        <CardProduct size={'l'} test={t} category={category_path}/>
                                    </div>
                                )
                            }
                           {/* <div className={styles.loadMore}><Button appearance={'white'}>Смотреть еще</Button></div>*/}
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default  withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {

    const categoryAll: oneCategory[] = await testsAPI.getTests();
    const paths: string[] = categoryAll.map((t:oneCategory) => '/categories/' + t['category_path']);


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
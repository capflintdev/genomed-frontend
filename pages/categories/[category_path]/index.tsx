import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import {categoryOne, recordsAll, test} from '../../../interfaces/page.interface';
import {categoryAPI, testsAPI} from '../../../api/api';
import {withLayout} from '../../../layout/Layout';
import styles from "./category.module.css";
import Image from "next/image";
import mainPageImage from "./category-photo.png";
import Sidebar from "../../../components/Sidebar/Sidebar";
import CardProduct from "../../../components/Card/CardProduct/CardProduct";
import {Button} from "../../../components/Button/Button";

function Category({ tests, category, category_path ,data }: pageProps): JSX.Element {

    return (
            <div className={styles.categoryPage}>
                <section className={styles.firstScreen}>
                    <div className="container">
                        <div className={styles.firstScreenWrap}>
                            <div className={styles.firstScreenText}>
                                <h1>{category.category}</h1>
                                <div className={styles.firstScreenDesc}>
                                    <p>Сегодня как никогда актуальна проблема негативного влияния свободных радикалов на репродуктивную
                                        функцию у мужчин.</p>
                                    <p>При возникшем дисбалансе антиоксидантов и активных форм кислорода повреждается генетический материал,
                                        находящийся в сперматозоидах.</p>
                                    <p> Повышенная чувствительность сперматозоидов к активным формам кислорода обусловлена высоким содержанием в
                                        их мембранах жирных кислот, окисление которых вызывает повреждение половых клеток. При таких
                                        повреждениях шанс стать отцом сильно снижается.</p>
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
                                        priority
                                        alt="главный баннер"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
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
                            <div className={styles.loadMore}><Button appearance={'white'}>Смотреть еще</Button></div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default  withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {

    const categoryAll: categoryOne[] = await testsAPI.getTests();
    const paths: string[] = categoryAll.map((t:categoryOne) => '/categories/' + t['category_path']);


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
    const category: categoryOne  = await categoryAPI.getCategory(category_path).then(response => response[0]);
    const data: categoryOne[] = await testsAPI.getTests();

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
    data: categoryOne[]
    category: categoryOne
    category_path: string
}

interface IParams extends ParsedUrlQuery {
    category_path: string
}
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { RecordsEntity } from '../../../interfaces/page.interface';
import {categoryAPI, categoryAPI2, tests2API} from '../../../api/api';
import { Layout } from '../../../layout/Layout';
import styles from "../../category.module.css";
import Image from "next/image";
import mainPageImage from "../../../public/images/first-section.png";
import Sidebar from "../../../components/Sidebar/Sidebar";
import CardProduct from "../../../components/Card/CardProduct/CardProduct";
import {Button} from "../../../components/Button/Button";

function Category({ tests, category }: pageProps): JSX.Element {

    return (
        <Layout title="Категория">
            <div className={styles.categoryPage}>
                <section className={styles.firstScreen}>
                    <div className="container">
                        <div className={styles.firstScreenWrap}>
                            <div className={styles.firstScreenText}>
                                <h1>{tests[0].category}</h1>
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
                            <Sidebar/>
                        </div>
                        <div className={styles.tests}>
                            <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                            <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                            <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                            <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                            <div className={styles.loadMore}><Button appearance={'white'}>Смотреть еще</Button></div>
                        </div>
                    </div>
                </div>
            </div>
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
            category_path
        }
    };
};


interface pageProps extends Record<string, unknown> {
    tests: RecordsEntity[];
}

interface IParams extends ParsedUrlQuery {
    category_path: string
}
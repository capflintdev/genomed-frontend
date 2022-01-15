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
import Burger from "../../layout/Header/MobileMenu/Burger/Burger";
import cn from 'classnames';

function Category({ tests, category, category_path ,data }: pageProps): JSX.Element {

    const [open, setOpen] = useState<boolean>(false);

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
                    <div className={styles.openSidebar}>
                        <Burger open={open} setOpen={setOpen} zIndex={0}/>
                        <span onClick={() => setOpen(!open)}>Все категории</span>
                    </div>
                    <div className={styles.categoryWrap}>
                        <div className={cn(styles.sidebar, {
                            [styles.showMobileSidebar]: open,
                        })}>
                            <Sidebar data={data} setOpen={setOpen}/>
                        </div>
                        <div className={cn(styles.tests, {
                            [styles.testsHide]: open
                        })}>
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
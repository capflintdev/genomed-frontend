import { GetStaticProps } from "next";
import Link from 'next/link';
import {tests2API, testsAPI} from '../../api/api';
import { RecordsEntity } from '../../interfaces/page.interface';
import { Layout } from '../../layout/Layout';


function Categories({ categories }: HomeProps): JSX.Element {

    return (
        <Layout title="Категории">
            <>
                <h2>Категории</h2>
                <ul>
                    {
                        categories && categories.map((с, i) => (
                            <li key={i}>
                                <p><Link href={`/categories/${с}`}><a>Категория: {с}</a></Link></p>
                            </li>
                        ))
                    }
                </ul>
            </>
        </Layout>
    );
}

export default Categories;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

   /* const categories: [][] = await tests2API.getTests().then(
        (tests: RecordsEntity[]) => {

            const uniqCategories: [][] = [];
           //const categoryPath: Record<string,unknown> = {}

            tests.forEach(function (entry) {
                let ar: string[] = []
                for (const key in entry) {
                    ar = [];
                    if (key === 'category' ) {
                        ar[0] = entry[key]
                    }
                    else if (key === 'category_path') {
                        ar[1] = entry[key]
                    }
                    if( ar.length === 1 ){
                        uniqCategories.push(ar);
                    }
                }
            });*/

    const categories: string[] = await testsAPI.getTests().then(
        (tests: RecordsEntity[]) => {

            const uniqCategories: string[] = [];
            tests.forEach(function (entry) {
                for (const key in entry) {
                    if (key === 'category') {
                        uniqCategories.push(entry[key]);
                    }
                }
            });

            return Array.from(new Set(uniqCategories)).sort();
        }
    );


    return {
        props: {
            categories
        }
    };

};

interface HomeProps extends Record<string, unknown> {
    categories: string[]
}



import { GetStaticProps } from "next";
import Link from 'next/link';
import { testsAPI } from '../../api/api';
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



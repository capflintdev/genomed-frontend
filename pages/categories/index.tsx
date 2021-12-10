import { GetStaticProps } from "next";
import Link from 'next/link';
import {tests2API, testsAPI} from '../../api/api';
import { RecordsEntity } from '../../interfaces/page.interface';
import { Layout } from '../../layout/Layout';


function Categories({ uniqCat }: HomeProps): JSX.Element {


    const arr = [];
    for(const key in uniqCat) arr.push(<li key={key}> <p><Link href={`/categories/${uniqCat[key]}`}><a>Категория: {key}</a></Link></p></li>);

    return (
        <Layout title="Категории">
            <>
                <h2>Категории</h2>
                <ul>
                    {
                       arr
                    }
                </ul>
            </>
        </Layout>
    );
}

export default Categories;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const tests: RecordsEntity[] = await tests2API.getTests();

    const categories = tests.map(t => [t.category, t.category_path]);
    const uniqCat = Object.fromEntries(categories);

    return {
        props: {
            uniqCat
        }
    };

};

interface HomeProps extends Record<string, unknown> {
    uniqCat: Record<string, unknown>
}



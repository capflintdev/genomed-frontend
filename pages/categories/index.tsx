import { GetStaticProps } from "next";
import Link from 'next/link';
import { testsAPI} from '../../api/api';
import { Layout } from '../../layout/Layout';
import {categoryOne} from "../../interfaces/page.interface";


function Categories({ uniqCat }: HomeProps): JSX.Element {


    const arr = [];
    for(const key in uniqCat) arr.push(<li key={key}> <p><Link href={`/categories/${uniqCat[key]}`}><a>Категория: {key}</a></Link></p></li>);

    return (
        <Layout title="Категории">
             <div className={'container'}>
                <h2>Категории</h2>
                 <style jsx>{`
                    h2 {
                    margin-bottom: 30px}
                   `}</style>
                <ul>
                    {
                       arr
                    }
                </ul>
             </div>
        </Layout>
    );
}

export default Categories;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const tests: categoryOne[] = await testsAPI.getTests();

    const categories = tests.map((t:categoryOne) => [t.category, t.category_path]);
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



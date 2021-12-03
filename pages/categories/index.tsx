import { GetStaticProps } from "next";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { testsAPI } from '../../api/api';
import { RecordsEntity } from '../../interfaces/page.interface';
import { withLayout } from '../../layout/Layout';

function Categories({ tests }: HomeProps): JSX.Element {

    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setCategories(uniqCat(tests));
    }, [tests]);

    const uniqCat = (tests: RecordsEntity[]) => {
        const newArr: string[] = [];
        tests.forEach(function (entry) {
            for (const key in entry) {
                if (key === 'category') {
                    newArr.push(entry[key]);
                }
            }
        });
        const uniqCat: string[] = Array.from(new Set(newArr)).sort();
        return uniqCat;
    };

    return (
        <>
            <h2>Категории</h2>
            <ul>
                {
                    categories && categories.map(с => (
                        <div>
                            <p><Link href={`categories/${с}`}><a>Категория: {с}</a></Link></p>
                        </div>
                    ))
                }
            </ul>
        </>
    );
}

export default withLayout(Categories);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const tests: RecordsEntity[] = await testsAPI.getTests();
    return {
        props: {
            tests
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    tests: RecordsEntity[]
}



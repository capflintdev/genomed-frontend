import Link from 'next/link';
import { Layout } from '../layout/Layout';

function Home(): JSX.Element {

  return (
    <Layout title="Геномед">
      <>
        <h1>Главная</h1>
        <h2>
          <Link href={'/categories'}><a>перейти в Категории</a></Link>
        </h2>
      </>
    </Layout>
  );
}

export default Home;



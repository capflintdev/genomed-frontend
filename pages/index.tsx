import Link from 'next/link';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  return (
    <>
      <h1>Главная</h1>
      <h2>
        <Link href={'/categories'}><a>перейти в Категории</a></Link>
      </h2>
    </>
  );
}

export default withLayout(Home);



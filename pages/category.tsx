import {Layout} from "../layout/Layout";
import FirstSection from "../components/FirstSection/FirstSection";
import {category} from "../components/FirstSection/FirstSection.data";
import styles from './category.module.css';
import Sidebar from "../components/Sidebar/Sidebar";
import CardProduct from "../components/Card/CardProduct/CardProduct";
import {Button} from "../components/Button/Button";

function Category(): JSX.Element {

    return (
        <Layout title="Категория">
            <div className={styles.categoryPage}>
            <FirstSection {...category}/>
            <div className="container">
                <div className={styles.categoryWrap}>
                    <div className={styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className={styles.tests}>
                        <div className={styles.testsItem}><CardProduct/></div>
                        <div className={styles.testsItem}><CardProduct/></div>
                        <div className={styles.testsItem}><CardProduct/></div>
                        <div className={styles.testsItem}><CardProduct/></div>
                        <div className={styles.loadMore}><Button appearance={'white'}>Смотреть еще</Button></div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default Category;


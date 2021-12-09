import {Layout} from "../layout/Layout";
import styles from './test.module.css';
import CardProduct from "../components/Card/CardProduct/CardProduct";
import Card from "../components/TestPage/Card/Card";
import GeneralInfo from "../components/TestPage/GeneralInfo/GeneralInfo";
import TabsData from "../components/TestPage/Tabs/TabsData";


function Test(): JSX.Element {

    return (
        <Layout title="Аминокислоты и ацилкарнитины">
            <div className={styles.testPage}>
                <div className="container">
                    <section className={styles.firstBlock}>
                        <GeneralInfo/>
                        <Card/>
                    </section>
                    <section className={styles.tabs}>
                       <TabsData/>
                    </section>
                    <section className={styles.relatedTests}>
                        <h2>С этим исследованием также назначают</h2>
                        <div className={styles.relatedTestsWrap}>
                            <div className={styles.relatedTestsItem}><CardProduct size={'m'}/></div>
                            <div className={styles.relatedTestsItem}><CardProduct size={'m'}/></div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export default Test;
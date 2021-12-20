import styles from './Analyzes.module.css';
import CardCategory from "../../Card/CardCategory/CardCategory";
import {oneCategory} from "../../../interfaces/page.interface";

const Analyzes = ({data}: pageProps ) => {

    return (
        <section className={styles.analyzes}>
            <div className={"container"}>
                <h2>Анализы</h2>
                <div className={styles.analyzesWrap}>
                    {
                        data.map((category: oneCategory, index: number) => {
                            return (
                                <div className={styles.analyzesItem} key={index}>
                                    <CardCategory
                                        title={category.category}
                                        link={category.category_path}
                                        description={category.description}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Analyzes;

interface pageProps extends Record<string, unknown> {
    data: oneCategory[];
}
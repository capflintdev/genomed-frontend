import styles from './Analyzes.module.css';
import CardCategory from "../../Card/CardCategory/CardCategory";
import {oneCategory} from "../../../interfaces/page.interface";
import Container from "../../Container/Container";

const Analyzes = ({data}: pageProps ) => {

    return (
        <section className={styles.analyzes}>
            <Container>
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
            </Container>
        </section>
    );
};

export default Analyzes;

interface pageProps extends Record<string, unknown> {
    data: oneCategory[];
}
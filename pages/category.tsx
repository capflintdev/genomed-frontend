import {Layout} from "../layout/Layout";
import styles from './category.module.css';
import Sidebar from "../components/Sidebar/Sidebar";
import CardProduct from "../components/Card/CardProduct/CardProduct";
import {Button} from "../components/Button/Button";
import Image from "next/image";
import mainPageImage from "../public/images/first-section.png";

function Category(): JSX.Element {

    return (
        <Layout title="Категория">
            <div className={styles.categoryPage}>
                <section className={styles.firstScreen}>
                    <div className="container">
                        <div className={styles.firstScreenWrap}>
                            <div className={styles.firstScreenText}>
                                <h1>Оксидативный стресс</h1>
                                <div className={styles.firstScreenDesc}>
                                    <p>Сегодня как никогда актуальна проблема негативного влияния свободных радикалов на репродуктивную
                                        функцию у мужчин.</p>
                                    <p>При возникшем дисбалансе антиоксидантов и активных форм кислорода повреждается генетический материал,
                                        находящийся в сперматозоидах.</p>
                                    <p> Повышенная чувствительность сперматозоидов к активным формам кислорода обусловлена высоким содержанием в
                                        их мембранах жирных кислот, окисление которых вызывает повреждение половых клеток. При таких
                                        повреждениях шанс стать отцом сильно снижается.</p>
                                </div>
                            </div>
                            <div className={styles.firstScreenImage}>
                                <div className={styles.imageWrap}>
                                    <div className={styles.frame}></div>
                                    <Image
                                        src={mainPageImage}
                                        width={680}
                                        height={500}
                                        quality={100}
                                        alt="главный баннер"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div className="container">
                <div className={styles.categoryWrap}>
                    <div className={styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className={styles.tests}>
                        <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                        <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                        <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                        <div className={styles.testsItem}><CardProduct size={'l'}/></div>
                        <div className={styles.loadMore}><Button appearance={'white'}>Смотреть еще</Button></div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default Category;


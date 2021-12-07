import styles from "./FirstSection.module.css";
import Image from "next/image";
import MainBanner from "../../../public/images/first-section.png";

const FirstSection = () => {
    return (
        <section className={styles.firstScreen}>
            <div className="container">
                <div className={styles.firstScreenWrap}>
                    <div className={styles.firstScreenText}>
                        <h1>Новый раздел анализов в Геномед - наше ценностное предложение!</h1>
                        <div className={styles.firstScreenDesc}>
                            <p>
                                Хроматография позволяет делать анализы крови на гормоны, витамины и микроэлементы
                                быстрее и точнее, чем обычная биохимия.
                            </p>
                            <p>
                                Узнайте всё о своих гормонах, витаминах и микроэлементах и следуйте здоровому образу
                                жизни, который необходим именно вам на основании данных о вашем здоровье.
                            </p>
                        </div>
                    </div>
                    <div className={styles.firstScreenImage}>
                        <Image
                            src={MainBanner}
                            width={577}
                            height={424}
                            quality={100}
                            alt="главный баннер"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
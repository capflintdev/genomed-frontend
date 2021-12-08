import styles from "./Advantages.module.css";
import PhoneIcon from './icon1.png';
import HumanIcon from './icon2.png';
import AnalysisIcon from './icon3.png';
import Image from "next/image";


const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className="container">
                <h2>
                    Геномед - лаборатория персонализированной медицины
                </h2>
                <div className={styles.advantagesWrap}>
                    <div className={styles.advantageItem}>
                        <div className={styles.advantageImage}>
                            <Image src={PhoneIcon} quality={100} width={155} height={155}/>
                        </div>
                        <div className={styles.advantageTitle}>Свыше 250 центров-партнеров</div>
                        <div className={styles.advantageDesc}>
                            Вы можете сдать нужный анализ в удобном для Вас месте
                        </div>
                    </div>
                    <div className={styles.advantageItem}>
                        <div className={styles.advantageImage}>
                            <Image src={HumanIcon} quality={100} width={155} height={155}/>
                        </div>
                        <div className={styles.advantageTitle}>Свыше 250 центров-партнеров</div>
                        <div className={styles.advantageDesc}>
                            Вы можете сдать нужный анализ в удобном для Вас месте
                        </div>
                    </div>
                    <div className={styles.advantageItem}>
                        <div className={styles.advantageImage}>
                            <Image src={AnalysisIcon} quality={100} width={155} height={155}/>
                        </div>
                        <div className={styles.advantageTitle}>25 000 пациентов ежегодно</div>
                        <div className={styles.advantageDesc}>
                            Доверяют нам самое драгоценное -
                            свое здоровье
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages
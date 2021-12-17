import styles from "./FirstSection.module.css";
import Image from "next/image";
import mainPageImage from './first-section.png';

const FirstSection = ({titleH1, subtitle1, subtitle2}: FirstSectionProps) => {
    return (
        <section className={styles.firstScreen}>
            <div className="container">
                <div className={styles.firstScreenWrap}>
                    <div className={styles.firstScreenText}>
                        <h1>{titleH1 || 'Заголовок'}</h1>
                        <div className={styles.firstScreenDesc}>
                            <p>{subtitle1}</p>
                            <p>{subtitle2}</p>
                        </div>
                    </div>
                    <div className={styles.firstScreenImage}>
                        <div className={styles.imageWrap}>
                            <div className={styles.frame}/>
                            <Image
                                src={mainPageImage}
                                width={680}
                                height={500}
                                quality={100}
                                priority
                                alt="главный баннер"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;


 interface FirstSectionProps {
     titleH1: string;
     subtitle1: string;
     subtitle2: string;
}

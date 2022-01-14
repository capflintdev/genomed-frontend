import styles from "./FirstSection.module.css";
import Image from "next/image";
import mainPageImage from './22.webp';
import Container from "../Container/Container";

const FirstSection = ({titleH1, subtitle1, subtitle2}: FirstSectionProps) => {
    return (
        <section className={styles.firstScreen}>
            <Container>
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

                            <Image
                                src={mainPageImage}
                                width={732}
                                height={515}
                                quality={100}
                                priority={true}
                                alt="главный баннер"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FirstSection;


 interface FirstSectionProps {
     titleH1: string;
     subtitle1: string;
     subtitle2: string;
}

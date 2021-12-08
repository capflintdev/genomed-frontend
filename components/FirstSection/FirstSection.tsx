import styles from "./FirstSection.module.css";
import Image from "next/image";
import {FirstSectionProps} from "./FirstSection.props";
import line from './line.svg'

const FirstSection = ({title,text, image}: FirstSectionProps) => {
    return (
        <section className={styles.firstScreen}>
            <div className="container">
                <div className={styles.firstScreenWrap}>
                    <div className={styles.firstScreenText}>
                        <h1>{title}</h1>
                        <div className={styles.firstScreenDesc}>
                            {text}
                        </div>
                    </div>
                    <div className={styles.firstScreenImage}>
                        <div className={styles.imageWrap}>
                            <div className={styles.frame}></div>
                            <Image
                                src={image}
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
    );
};

export default FirstSection;
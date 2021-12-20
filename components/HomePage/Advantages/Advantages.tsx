import styles from "./Advantages.module.css";
import PhoneIcon from './icon1.png';
import HumanIcon from './icon2.png';
import AnalysisIcon from './icon3.png';
import Image from "next/image";
import {block2} from "../../../interfaces/wp.interface";


const Advantages = ({...advantages}: block2[]) => {

    const icons = [PhoneIcon, HumanIcon, AnalysisIcon];

    return (
        <section className={styles.advantages}>
            <div className={"container"}>
                <h2>
                    Геномед - лаборатория персонализированной медицины
                </h2>
                <div className={styles.advantagesWrap}>
                    {
                        Object.values(advantages).map((item, index:number) => {
                            return (
                                <div className={styles.advantageItem} key={index}>
                                    <div className={styles.advantageImage}>
                                        <Image src={icons[index]} quality={100} width={155} height={155} alt={'преимущество'}/>
                                    </div>
                                    <div className={styles.advantageTitle}>{item.title}</div>
                                    <div className={styles.advantageDesc}>
                                        {item.subtitle}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Advantages
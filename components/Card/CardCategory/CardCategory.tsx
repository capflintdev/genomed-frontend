import stylesCategory from "./CardCategory.module.css";
import styles from "../Card.module.css";
import cn from 'classnames';
import Link from "next/link";

const CardCategory = () => {
    return (
        <div className={styles.card}>
            <div className={cn(styles.tag,stylesCategory.tag)}>Раздел</div>
            <div className={stylesCategory.content}>
                <div>
                    <div className={styles.title}>Марганец (Mn) в крови</div>
                    <div className={styles.shortDesc}>
                        Марганец необходим для формирования костной ткани, в процесса синтеза белков, АТФ, а
                        также
                        для регуляции клеточного метаболизма
                    </div>
                </div>
                <div className={cn(styles.moreBtn,stylesCategory.moreBtn )}>
                    <Link href={'/category'}>
                        <a>Подробнее</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;
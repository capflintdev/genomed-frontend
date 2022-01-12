import stylesCategory from "./CardCategory.module.css";
import styles from "../Card.module.css";
import cn from 'classnames';
import Link from "next/link";
import {cardCategoryProps} from "./CardCategory.props";

const CardCategory = ({title, link, description}: cardCategoryProps) => {
    return (
        <div className={cn(styles.card, styles.cardCategory)}>
            <div className={cn(styles.tag,stylesCategory.tag)}>Раздел</div>
            <div className={stylesCategory.content}>
                <div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.shortDesc}>
                        {description}
                    </div>
                </div>
                <div className={cn(styles.moreBtn,stylesCategory.moreBtn )}>
                    <Link href={`/categories/${link}`}>
                        <a>Подробнее</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;


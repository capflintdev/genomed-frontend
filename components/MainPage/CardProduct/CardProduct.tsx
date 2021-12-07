import styles from "./CardProduct.module.css";
import {CardProductProps} from './CardProduct.props';
import cn from 'classnames';


const CardProduct = ({category}: CardProductProps) => {
    return (
        <div className={cn(styles.card, {
            [styles.cardProduct]: !category,
            [styles.cardCategory]: category
        })}>
            {
                category
                    ? <div className={styles.tag}>Раздел</div>
                    : <div className={styles.tag}>Исследование</div>
            }
            <div className={styles.content}>
                <div className={cn({
                        [styles.info]: !category,
                    }
                )}>
                    <div className={styles.title}>Марганец (Mn) в крови</div>
                    <div className={styles.shortDesc}>
                        Марганец необходим для формирования костной ткани, в процесса синтеза белков, АТФ, а
                        также
                        для регуляции клеточного метаболизма
                    </div>
                    {
                        category
                            ? null
                            : <div className={styles.id}>id 100500</div>
                    }
                </div>
                {
                    category
                        ? <div className={styles.moreBtn}><a href={"#"}>Подробнее</a></div>
                        : <div className={styles.buy}>
                            <div className={styles.price}>6 000 ₽</div>
                            <button className={styles.buyBtn}>Купить</button>
                            <div className={styles.moreBtn}><a href={"#"}>Подробнее</a></div>
                        </div>
                }
            </div>
        </div>
    );
};

export default CardProduct;
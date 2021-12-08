import stylesCard from "./CardProduct.module.css";
import styles from "../Card.module.css";
import cn from 'classnames';

const CardProduct = () => {
    return (
        <div className={styles.card}>
            <div className={cn(styles.tag, stylesCard.tag)}>Исследование</div>
            <div className={stylesCard.content}>
                <div className={stylesCard.info}>
                    <div className={styles.title}>Марганец (Mn) в крови</div>
                    <div className={styles.shortDesc}>
                        Марганец необходим для формирования костной ткани, в процесса синтеза белков, АТФ, а
                        также
                        для регуляции клеточного метаболизма
                    </div>
                    <div className={stylesCard.id}>id 100500</div>
                </div>
                <div className={stylesCard.buy}>
                    <div className={stylesCard.price}>6 000 ₽</div>
                    <button className={stylesCard.buyBtn}>Купить</button>

                    <div className={styles.moreBtn}><a href={"#"}>Подробнее</a></div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
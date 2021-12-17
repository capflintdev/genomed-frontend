import stylesCard from "./CardProduct.module.css";
import styles from "../Card.module.css";
import cn from 'classnames';
import {Button} from "../../Button/Button";
import {CardProductProps} from './CardProduct.props';
import Link from "next/link";

const CardProduct = ({size, test, category} : CardProductProps) => {
    return (
        <div className={cn(styles.card, {
            [stylesCard.cardMedium]: size == 'm',
            [stylesCard.cardLarge]: size == 'l',
        })}>
            <div className={cn(styles.tag, stylesCard.tag)}>Исследование</div>
            <div className={stylesCard.content}>
                <div className={stylesCard.info}>
                    <div className={styles.title}>{test && test.name || 'Марганец (Mn) в крови'}</div>
                    <div className={styles.shortDesc}>
                        {test && test.shortinfo || 'Марганец необходим для формирования костной ткани, в процесса синтеза белков, АТФ, а также для регуляции клеточного метаболизма'}
                    </div>

                </div>
                <div className={stylesCard.buy}>
                    <div className={stylesCard.price}>{test && test.price || '1000'} ₽</div>
                    <div className={stylesCard.buyBtn}>
                        <Button appearance={'primary'}>Купить</Button>
                    </div>
                    <div className={styles.moreBtn}>
                        <Link href={`/categories/${category}/${test && test.article}`}><a>Подробнее</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
import styles from "../Card.module.css";
import stylesCard from "./CardProduct.module.css";
import cn from 'classnames';
import {Button} from "../../Button/Button";
import {CardProductProps} from './CardProduct.props';
import Link from "next/link";
import {priceRu, translit} from "../../../helpers/helpers";

const CardProduct = ({size, test, category, className} : CardProductProps) => {
    return (
        <div className={cn(styles.card, className && styles[className], {
            [stylesCard.cardMedium]: size == 'm',
            [stylesCard.cardLarge]: size == 'l',
            [stylesCard.cardSlider]: className == 'slide',
        })}>
            <div className={cn(styles.tag, stylesCard.tag)}>Исследование</div>
            <div className={stylesCard.content}>
                <div className={stylesCard.info}>
                    <div className={styles.title}>{test.name}</div>
                    <div className={styles.shortDesc}>
                        {test.shortinfo}
                    </div>
                </div>
                <div className={stylesCard.buy}>
                    <div className={stylesCard.price}>{priceRu(test.price)} </div>
                    <div className={stylesCard.buyBtn}>
                        <Link href={`http://price.genomed.ru/?order_tests=${test.price_id}`}>
                            <a target="_blank">
                                <Button appearance={'primary'}>Купить</Button>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.moreBtn}>
                        <Link href={`/categories/${category}/${translit(test.name)}&article=${test.article}`}>
                            <a>Подробнее</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
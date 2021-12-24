import styles from "./Card.module.css";
import {Button} from "../../Button/Button";
import {priceRu} from "../../../helpers/helpers";
import Link from "next/link";


const Card = ({...test}) => {
    return (
        <div className={styles.card}>
            <div className={styles.id}>id {test.price_id}</div>
            <div
                className={styles.title}>{test.name}</div>
            <div className={styles.price}>{priceRu(test.price)}</div>
            <div className={styles.button}>
                <Link href={`http://price.genomed.ru/?order_tests=${test.price_id}`}>
                    <a target="_blank">
                        <Button appearance={'primary'}>Купить</Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Card;
import styles from "./Card.module.css";
import {Button} from "../../Button/Button";
import {priceRu} from "../../../helpers/helpers";


const Card = ({...test}) => {
    return (
        <div className={styles.card}>
            <div className={styles.id}>id {test.price_id}</div>
            <div
                className={styles.title}>{test.name}</div>
            <div className={styles.price}>{priceRu(test.price)}</div>
            <div className={styles.button}><Button appearance={'primary'}>Купить</Button></div>
        </div>
    );
};

export default Card;
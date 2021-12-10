import styles from "./Card.module.css";
import {Button} from "../../Button/Button";


const Card = ({...test}) => {
    return (
        <div className={styles.card}>
            <div className={styles.id}>id 100500</div>
            <div
                className={styles.title}>{test.name}</div>
            <div className={styles.price}>{test.price || 1000} ₽</div>
            <div className={styles.button}><Button appearance={'primary'}>Купить</Button></div>
        </div>
    );
};

export default Card;
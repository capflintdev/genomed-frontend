import styles from "./Card.module.css";
import {Button} from "../../Button/Button";


const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.id}>id 100500</div>
            <div className={styles.title}>Биогенные амины </div>
            <div className={styles.price}>1 980 ₽</div>
            <div className={styles.button}><Button appearance={'primary'}>Купить</Button></div>
        </div>
    );
};

export default Card;
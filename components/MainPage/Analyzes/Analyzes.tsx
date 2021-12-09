import styles from './Analyzes.module.css';
import CardProduct from "../../Card/CardProduct/CardProduct";
import React from "react";

const Analyzes = () => {
    return (
        <section className={styles.analyzes}>
            <div className="container">
                <h2>Анализы</h2>
                <div className={styles.analyzesWrap}>
                    <div className={styles.analyzesItem}><CardProduct size={'m'}/></div>
                    <div className={styles.analyzesItem}><CardProduct size={'m'}/></div>
                    <div className={styles.analyzesItem}><CardProduct size={'m'}/></div>
                    <div className={styles.analyzesItem}><CardProduct size={'m'}/></div>
                </div>
            </div>
        </section>
    )
}

export default Analyzes
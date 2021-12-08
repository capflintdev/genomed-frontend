import styles from './Analyzes.module.css';
import CardProduct from "../CardProduct/CardProduct";
import React from "react";
import cn from 'classnames';

const Analyzes = () => {
    return (
        <section className={styles.analyzes}>
            <div className="container">
                <h2>Анализы</h2>
                <div className={styles.analyzesWrap}>
                    <div className={styles.analyzesItem}><CardProduct/></div>
                    <div className={styles.analyzesItem}><CardProduct/></div>
                    <div className={styles.analyzesItem}><CardProduct category/></div>
                    <div className={styles.analyzesItem}><CardProduct category/></div>
                </div>
            </div>
        </section>
    )
}

export default Analyzes
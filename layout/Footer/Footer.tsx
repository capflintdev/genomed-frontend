import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
import Image from "next/image";
import fbIcon from './fb.png';
import instaIcon from './insta.png';
import vkIcon from './vk.png';
import jjIcon from './jj.png';


export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerColumnAll}>
                        <div className={styles.footerColumn}>
                            <ul className={styles.footermenu}>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Личный кабинет врача</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Новости</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Наши партнеры</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">График приема граждан</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Вебинары</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Отзывы</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Правила предоставления<br/> медицинских
                                        услуг</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerColumn}>
                            <ul>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Квитанция на оплату</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Вышестоящие организации</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Информация для партнеров</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Контакты</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noreferrer">Лицензия</a>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.footerColumn} ${styles.workTime}`}>
                            <p className={styles.whiteFont}> График работы</p>
                            <p>Пн.-Пт.: 8.00 – 19.00</p>
                            <p>Сб.: 8.00 – 17.00</p>
                            <p>Вс.: 8.00 – 15.00</p>
                        </div>
                        <div className={`${styles.footerColumn} ${styles.footerContacts}`}>
                            <p className={styles.footerPhone}>+7 (800) 333-45-38</p>
                            <p className={styles.footerAddressTitle}>
                                Центральный офис МГЦ “Геномед”:
                            </p>
                            <p>
                                115093, г. Москва, Подольское шоссе, дом 8, корпус 5 (метро Тульская)
                            </p>
                            <p>ООО "Геномед", ОГРН 1077763509977</p>
                            <div className={styles.iconSoc}>
                                <a href="https://vk.com/club49260280" target="_blank" rel="noreferrer">
                                    <Image src={vkIcon}  quality={100} width={25} height={25}/>
                                </a>
                                <a href="https://www.facebook.com/GenomedRU/" target="_blank" rel="noreferrer">
                                    <Image src={fbIcon}  quality={100} width={25} height={25}/>
                                </a>
                                <a href="https://www.instagram.com/genomed.ru/" target="_blank" rel="noreferrer">
                                    <Image src={instaIcon}  quality={100} width={25} height={25}/>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <Image src={jjIcon}  quality={100} width={25} height={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.copyright}>© {new Date().getFullYear()} Геномед. Все права защищены</div>
                </div>
            </footer>
        </div>
    );
};
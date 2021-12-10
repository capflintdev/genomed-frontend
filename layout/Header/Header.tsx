import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Image from "next/image";
import Genomed from '../Header/genomed.png';
import Logo from '../Header/logo-new.png';
import MenuArrow from '../Header/arrow.svg';
import Link from "next/link";

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div className={styles.wrapper} {...props}>

            <div className={styles.headerLocation}>
                <div className={cn(styles.container, styles.headerLocationContent)}>
                    <p className={styles.city}>Ваш город: Москва </p>
                    <a href="" className={styles.num1}> 8 800 333-45-38, </a>
                    <a href="" className={styles.num2}> 8 495 660-83-77 </a>
                </div>
            </div>
            <div className="container">
                <div className={styles.headerMain}>
                    <div className={cn(styles.container, styles.headerMainContent)}>
                        <Link href={'/'}>
                            <a>
                                <div className={styles.logo}>

                                    <Image src={Logo}/>
                                    <Image src={Genomed}/>

                                </div>
                            </a>
                        </Link>
                        {/*<Logo className={cn(className, styles.logo)} />*/}
                        <input type="text" className={styles.search}/>
                        <button className={styles.learn}> Узнать результаты</button>
                        <button className={styles.call}> Позвоните мне</button>
                    </div>
                </div>

                <div className={styles.headerMenu}>
                    <div className={cn(styles.container, styles.headerMenuContent)}>
                        <ul>
                            <li className={styles.hoverLink}>Анализы и цены <Image src={MenuArrow}/>
                                <div className={styles.submenu}>
                                    <ul>
                                        <li>
                                            <Link href={'categories/oksidative-stress'}>
                                                <a>
                                                    Оксидативный стресс
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/steroid-hormones-and-metabolites'}>
                                                <a>
                                                    Стероидные гормоны и их метаболиты
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/neuromediators'}>
                                                <a>
                                                    Нейромедиаторы
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/amino-and-organic-acids'}>
                                                <a>
                                                    Аминокислоты и органические кислоты
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/fatty-acids-and-carnitins'}>
                                                <a>
                                                    Жирные кислоты и карнитины
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/microelements'}>
                                                <a>
                                                    Микроэлементы
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'categories/vitaminy'}>
                                                <a>
                                                    Витамины
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link href={'/categories/oksidative-stress/1'}>
                                                <a>
                                                    Оксидативный стресс (7 показателей) в крови
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/categories/neuromediators/9'}>
                                                <a>
                                                    Метанефрины: свободные фракции в крови
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/categories/steroid-hormones-and-metabolites/3'}>
                                                <a>
                                                    Эстрогены (3 показателя) в крови
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>Медицинские офисы <Image src={MenuArrow}/></li>
                            <li>Лаборатория <Image src={MenuArrow}/></li>
                            <li>Выезд на дом <Image src={MenuArrow}/></li>
                            <li>Журнал <Image src={MenuArrow}/></li>
                            <li>О компании <Image src={MenuArrow}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
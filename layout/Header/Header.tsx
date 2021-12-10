import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Image from "next/image";
import Genomed from '../Header/genomed.png';
import Logo from '../Header/logo-new.png';
import MenuArrow from '../Header/arrow.svg';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.headerLocation}>
                <div className={cn(styles.container, styles.headerLocationContent)}>
                    <p className={styles.city}>Ваш город: Москва </p>
                    <a href="" className={styles.num1}> 8 800 333-45-38, </a>
                    <a href="" className={styles.num2}> 8 495 660-83-77 </a>
                </div>
            </div>

            <div className={styles.headerMain}>
                <div className={cn(styles.container, styles.headerMainContent)}>
                    <div className={styles.logo}>
                        <Image src={Logo} />
                        <Image src={Genomed} />
                    </div>
                    {/*<Logo className={cn(className, styles.logo)} />*/}
                    <input type="text" className={styles.search} />
                    <button  className={styles.learn}> Узнать результаты</button>
                    <button  className={styles.call}> Позвоните мне</button>
                </div>
            </div>

            <div className={styles.headerMenu}>
                <div className={cn(styles.container, styles.headerMenuContent)}>
                    <ul>
                        <li>Анализы и цены <Image src={MenuArrow} /> </li>
                        <li>Медицинские офисы <Image src={MenuArrow} /> </li>
                        <li>Лаборатория <Image src={MenuArrow} /> </li>
                        <li>Выезд на дом <Image src={MenuArrow} /> </li>
                        <li>Журнал <Image src={MenuArrow} /> </li>
                        <li>О компании <Image src={MenuArrow} /> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
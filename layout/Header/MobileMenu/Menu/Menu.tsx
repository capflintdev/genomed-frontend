import styles from './Menu.module.css';
import cn from 'classnames';
import {oneCategory} from "../../../../interfaces/page.interface";
import {Button} from "../../../../components/Button/Button";
import {useState} from "react";
import ArrowPrev from './arrowPrev.svg';
import Image from "next/image";
import Link from "next/link";


const Menu = ({open, data, showPopupCall}: MenuProps) => {


    const [menuCategories, showMenuCategories] = useState(false);

    return (
        <div className={cn(styles.menuWrap, {
            [styles.open]: open
        })}>
            <nav>
                <div
                    style={{display: menuCategories ? 'block' : 'none'}}
                    className={styles.prev}
                    onClick={() => showMenuCategories(false)}
                >
                    <Image src={ArrowPrev}/>
                </div>
                <div style={{display: menuCategories ? 'none' : 'block'}}>
                    <ul className={styles.menu}>
                        <li onClick={() => showMenuCategories(true)}>
                            <span className={styles.arrow}>Анализы и цены</span>
                        </li>
                        <li><a href={"https://genomed.ru/contacts"} rel={"noreferrer"}>Медицинские офисы</a></li>
                        <li><a href={"https://genomed.ru/laboratoriya"} rel={"noreferrer"}>Лаборатория</a></li>
                        <li><a href={"https://genomed.ru/vyiezd-na-dom"} rel={"noreferrer"}>Выезд на дом</a></li>
                        <li><a href={"https://genomed.ru/journal"} rel={"noreferrer"}>Журнал</a></li>
                        <li><a href={"https://genomed.ru/about"} rel={"noreferrer"}>О компании</a></li>
                    </ul>
                    <Button appearance={'white'} href={"https://genomed.ru/laboratoriya/status-testa"}
                            className={'mobileBtnResult'} rel={"noreferrer"}>
                        Узнать результаты
                    </Button>
                    <div onClick={() => showPopupCall(true)}>
                        <Button
                            appearance={'primary'}
                            className={'mobileBtnCall'}
                        >
                            Позвоните мне
                        </Button>
                    </div>
                </div>
                <ul className={styles.menuCategories} style={{display: menuCategories ? 'block' : 'none'}}>
                    {
                        data.map((menuItem: oneCategory, index: number) => {
                            return (
                                <li key={index}>
                                    <Link href={`/categories/${menuItem.category_path}`}>
                                        <a>{menuItem.category}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>

            </nav>
        </div>
    );
};
export default Menu;

interface MenuProps {
    open: boolean,
    data: oneCategory[];
    showPopupCall: (popupCall: boolean) => void,
}
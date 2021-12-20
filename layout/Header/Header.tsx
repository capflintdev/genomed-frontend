import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Image from "next/image";
import Logo from '../Header/logo.png';
import MenuArrow from '../Header/arrow.svg';
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/Context";
import AutoComplete from "../../components/Search/Search";
import {Button} from "../../components/Button/Button";

interface TabContent {
    'title': JSX.Element,
    'content': JSX.Element
}

const TabContent = ({content}: TabContent) => (
    <div className={styles.tabContent}>
        {content}
    </div>
);

export const Header = ({...props}: HeaderProps): JSX.Element => {

    const data: any = useContext(AppContext);


    const [itemsMenu, setItems] = useState([]);
    const [active, setActive] = useState(0);
    const openTab = (e:any) => {
        setActive(e.currentTarget.getAttribute('data-index'));
    };

    const [submenuShow, setSubmenuShow] = useState(false);

    /*строим меню из входящего объекта всех тестов*/
    const buildMenu = () => {
        const items: any = [];
        {
            data.data.map((menu: any, index: number) =>
                <>
                    {
                        items.push(
                            {
                                'title':
                                    <Link key={index} href={`/categories/${menu.category_path}`}>
                                        <a>{menu.category}
                                        </a>
                                    </Link>
                                ,
                                'content':
                                    menu.tests.map((item: any, index: number) => {
                                        return <div key={index} className={styles.tabContentItem} onClick={() => setSubmenuShow(false)}>
                                            <Link href={`/categories/${menu.category_path}/${item.article}`}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </div>;
                                    })
                            }
                        )
                    }
                </>);
        }

        return (
            items
        );
    };
    useEffect(() => {
        setItems(buildMenu());
    }, [data]);

    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.headerLocation}>
                <div className={cn(styles.container, styles.headerLocationContent)}>
                    <p className={styles.city}>Ваш город: Москва </p>
                    <a href="tel:88003334538" className={styles.num1}> 8 800 333-45-38, </a>
                    <a href="tel:84956608377" className={styles.num2}> 8 495 660-83-77 </a>
                </div>
            </div>
            <div className={"container"}>
                <div className={styles.headerMain}>
                    <div className={cn(styles.container, styles.headerMainContent)}>
                        <Link href={'/'}>
                            <a>
                                <div className={styles.logo}>
                                    <Image src={Logo} alt={'логотитип'}/>
                                </div>
                            </a>
                        </Link>
                        <div className={styles.search}>
                            <AutoComplete data={data.data}/>
                        </div>
                        <div className={styles.learn}><Button appearance={'white'}>Узнать результаты</Button></div>
                        <div className={styles.call}><Button appearance={'primary'}>Позвоните мне</Button></div>
                    </div>
                </div>

                <div className={styles.headerMenu}>
                    <div className={cn(styles.container, styles.headerMenuContent)}>
                        <ul>
                            <li className={styles.hoverLink}
                                onMouseEnter={() => setSubmenuShow(true)}
                                onMouseLeave={() => setSubmenuShow(false)}
                            >
                                Анализы и цены <Image src={MenuArrow} alt={'стрелка'} className={styles.arrow}/>
                                <div className={cn(styles.submenu, {
                                    [styles.active]: submenuShow
                                })}
                                >

                                    <div className={styles.tab}>
                                        {itemsMenu.map((n, index: number) => (
                                            <div
                                                className={styles.tablinks}
                                                data-index={index}
                                                onMouseEnter={openTab}
                                                onClick={() => setSubmenuShow(false)}
                                            >
                                                {n['title']}
                                            </div>
                                        ))}
                                    </div>
                                    {itemsMenu[active] && <TabContent {...itemsMenu[active]} />}
                                </div>
                            </li>
                            <li>Медицинские офисы <Image src={MenuArrow} alt={'стрелка'}/></li>
                            <li>Лаборатория <Image src={MenuArrow} alt={'стрелка'}/></li>
                            <li>Выезд на дом <Image src={MenuArrow} alt={'стрелка'}/></li>
                            <li>Журнал <Image src={MenuArrow} alt={'стрелка'}/></li>
                            <li>О компании <Image src={MenuArrow} alt={'стрелка'}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
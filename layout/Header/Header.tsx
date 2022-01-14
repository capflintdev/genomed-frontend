import styles from './Header.module.css';
import cn from 'classnames';
import Image from "next/image";
import Logo from '../Header/logo-genomed.png';
import MenuArrow from '../Header/arrow.svg';
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {AppContext, IAppContext} from "../../context/Context";
import AutoComplete from "../../components/Search/Search";
import {Button} from "../../components/Button/Button";
import {translit} from "../../helpers/helpers";
import {test} from "../../interfaces/page.interface";
import Container from "../../components/Container/Container";
import MobileMenu from "./MobileMenu/MobileMenu";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import SearchIcon from './search.svg';
import PopupSearch from "./PopupSearch/PopupSearch";
import PopupCall from "./PopupCall/PopupCall";

const TabContent = ({content}: TabContent) => (
    <div className={styles.tabContent}>
        {content}
    </div>
);

export const Header = (): JSX.Element => {

    const data: IAppContext = useContext(AppContext);

    const [itemsMenu, setItems] = useState<TabContent[]>([]);
    const [active, setActive] = useState<number>(0);
    const [submenu, showSubmenu] = useState<boolean>(false);
    const [popupSearch, showPopupSearch] = useState<boolean>(false);
    const [popupCall, showPopupCall] = useState<boolean>(false);

    const openTab = (e: any) => {
        setActive(e.currentTarget.getAttribute('data-index'));
    };

    const {width} = useWindowDimensions();

    /*строим меню из входящего объекта всех тестов*/
    const buildMenu = () => {
        const items: TabContent[] = [];

        {
            data.data.map((menu: any, index: number) => {
                    return (
                        items.push(
                            {
                                'title':
                                    <Link key={index} href={`/categories/${menu.category_path}`}>
                                        <a>{menu.category}
                                        </a>
                                    </Link>
                                ,
                                'content':
                                    menu.tests.map((item: test, index: number) => {
                                        return <div key={index} className={styles.tabContentItem}
                                                    onClick={() => showSubmenu(false)}>
                                            <Link
                                                href={`/categories/${menu.category_path}/${translit(item.name)}&article=${item.article}`}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </div>;
                                    })
                            }
                        )
                    );
                }
            );
        }

        return (
            items
        );
    };

    useEffect(() => {
        setItems(buildMenu());
    }, [data]);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.headerLocation}>
                    <Container>
                        <div className={cn(styles.container, styles.headerLocationContent)}>
                            <p className={styles.city}>Ваш город: Москва </p>
                            <a href="tel:88003334538" className={styles.num1}> 8 800 333-45-38, </a>
                            <a href="tel:84956608377" className={styles.num2}> 8 495 660-83-77 </a>
                        </div>
                    </Container>
                </div>

                <div className={styles.headerMain}>
                    <Container>
                        <div className={styles.headerMainContent}>
                            <Link href={'/'}>
                                <a>
                                    <div className={styles.logo}>
                                        <Image
                                            src={Logo}
                                            alt={'логотитип'}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.search}>
                                {
                                    width && width > 576 ?
                                        <AutoComplete data={data.data}/>
                                        : <>
                                            <Image src={SearchIcon} onClick={() => showPopupSearch(true)}/>
                                            <PopupSearch
                                                data={data.data}
                                                open={popupSearch}
                                                showPopupSearch={showPopupSearch}
                                            />
                                        </>
                                }
                            </div>
                            <div className={styles.learn}>
                                <Button appearance={'white'} href={"https://genomed.ru/laboratoriya/status-testa"}>
                                    Узнать результаты
                                </Button>
                            </div>
                            <div className={styles.call} onClick={() => showPopupCall(true)}>
                                <Button appearance={'primary'}>Позвоните мне</Button>
                            </div>
                            <PopupCall popupCall={popupCall} showPopupCall={showPopupCall}/>
                            {
                                width && width > 992 ?
                                    null
                                    : <div className={styles.burger}>
                                        <MobileMenu data={data.data}/>
                                    </div>
                            }
                        </div>
                    </Container>
                </div>

                <Container>
                    {
                        width && width < 992 ?
                            null
                            : <>
                                <div className={styles.headerMenu}>
                                    <div className={cn(styles.container, styles.headerMenuContent)}>
                                        <ul>
                                            <li className={styles.hoverLink}
                                                onMouseEnter={() => showSubmenu(true)}
                                                onMouseLeave={() => showSubmenu(false)}
                                            >
                                                Анализы и цены
                                                <span className={styles.arrow}><Image src={MenuArrow}
                                                                                      alt={'стрелка'}/></span>
                                                <div className={cn(styles.submenu, {
                                                    [styles.active]: submenu
                                                })}
                                                >
                                                    <div className={styles.tab}>
                                                        {itemsMenu.map((n, index: number) => (
                                                            <div
                                                                key={index}
                                                                className={styles.tablinks}
                                                                data-index={index}
                                                                onMouseEnter={openTab}
                                                                onClick={() => showSubmenu(false)}
                                                            >
                                                                {n['title']}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {itemsMenu[active] && <TabContent {...itemsMenu[active]} />}
                                                </div>
                                            </li>
                                            <li><a href={"https://genomed.ru/contacts"}>Медицинские офисы</a></li>
                                            <li><a href={"https://genomed.ru/laboratoriya"}>Лаборатория</a></li>
                                            <li><a href={"https://genomed.ru/vyiezd-na-dom"}>Выезд на дом</a></li>
                                            <li><a href={"https://genomed.ru/journal"}>Журнал</a></li>
                                            <li><a href={"https://genomed.ru/about"}>О компании</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                    }
                </Container>

            </div>

        </>
    );
};

interface TabContent {
    'title': JSX.Element,
    'content': JSX.Element
}
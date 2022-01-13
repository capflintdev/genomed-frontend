import styles from './Sidebar.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames';
import {oneCategory} from "../../interfaces/page.interface";
import {useState} from "react";

const Sidebar = ({data, setOpen}: sidebarProps) => {

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                { data.map((item:oneCategory, index:number) => (
                    <li key={index} className={cn(styles.item, {
                        [styles.active] : router.asPath.split('/')[2] === item['category_path']
                    })}>
                        <Link href={`/categories/${item['category_path']}`} >
                            <a onClick={()=> setOpen(false)}>{item['category']}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;

interface sidebarProps {
    data: oneCategory[],
    setOpen: (open: boolean) => void
}

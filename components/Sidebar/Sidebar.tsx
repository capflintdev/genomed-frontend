import styles from './Sidebar.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames';
import {oneCategory} from "../../interfaces/page.interface";

const Sidebar = ({data}: sidebarProps) => {

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                {data.map((item:oneCategory, index:number) => (
                    <li key={index} className={cn(styles.item, {
                        [styles.active] : router.asPath.split('/')[1] === item['category_path']
                    })}>
                        <Link href={`/${item['category_path']}`} >
                            <a>{item['category']}</a>
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
}

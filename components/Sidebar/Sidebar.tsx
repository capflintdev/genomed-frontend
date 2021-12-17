import styles from './Sidebar.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames';

const Sidebar = ({data}:any) => {

    const router = useRouter();
    console.log(router)

    return (
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                { data.map((item:any, index:number) => (
                    <li key={index} className={cn(styles.item, {
                        [styles.active] : router.asPath.split('/')[2] === item['category_path']
                    })}>
                        <Link href={`/categories/${item['category_path']}`}>
                            <a>{item['category']}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;



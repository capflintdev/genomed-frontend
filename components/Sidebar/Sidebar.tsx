import styles from './Sidebar.module.css';
import Link from "next/link";

const Sidebar = () => {
    return (
        <nav className={styles.nav}>
            <p className={styles.navTitle}>Оксидативный стресс</p>
            <ul className={styles.navItems}>
                <li><Link href={`/categories/steroid-hormones-and-metabolites`}><a>Стероидные гормоны</a></Link></li>
                <li><Link href={`/categories/neuromediators`}><a>Нейромедиаторы</a></Link></li>
                <li><Link href={`/categories/amino-and-organic-acids`}><a>Аминокислоты</a></Link></li>
                <li><Link href={`/categories/fatty-acids-and-carnitins`}><a>Жирные кислоты</a></Link></li>
                <li><Link href={`/categories/microelements`}><a>Микроэлементы</a></Link></li>
                <li><Link href={`/categories/vitamins`}><a>Витамины</a></Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
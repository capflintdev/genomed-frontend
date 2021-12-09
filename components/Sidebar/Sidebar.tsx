import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.nav}>
            <p className={styles.navTitle}>Оксидативный стресс</p>
            <ul className={styles.navItems}>
                <li><a href="#">Стероидные гормоны</a></li>
                <li><a href="#">Нейромедиаторы</a></li>
                <li><a href="#">Аминокислоты</a></li>
                <li><a href="#">Жирные кислоты</a></li>
                <li><a href="#">Микроэлементы</a></li>
                <li><a href="#">Витамины</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
import styles from './Burger.module.css';
import cn from 'classnames';


const Burger = ({open, setOpen}: BurgerProps) => {
    return (
        <div onClick={() => setOpen(!open)} className={styles.styledBurger}>
            <div className={cn(styles.burgerLine,{
                [styles.open]: open,
            })}/>
            <div className={cn(styles.burgerLine,{
                [styles.open]: open,
            })}/>
            <div className={cn(styles.burgerLine,{
                [styles.open]: open,
            })}/>
        </div>
    );
};

export default Burger;

interface BurgerProps {
    open: boolean,
    setOpen: (open: boolean) => void
}
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

export const Button = ({appearance, href, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <div
            className={cn(styles.button, className, {
                    [styles.primary]: appearance == 'primary',
                    [styles.white]: appearance == 'white',
                },
                )}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

export const Button = ({appearance, href, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <div
            className={cn(styles.button, className && styles[className], {
                    [styles.primary]: appearance == 'primary',
                    [styles.white]: appearance == 'white',
                    [styles.link]: href,
                },
                )}
            {...props}
        >
            {
                href
                    ? <a href={href} target={"_blank"}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};
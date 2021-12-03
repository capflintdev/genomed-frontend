import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            тут будет футер
        </div>
    );
};
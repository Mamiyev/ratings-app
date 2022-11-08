import React from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import css from './Footer.module.css';

type IFooterProps = {
    className: string;
};

const Footer: React.FC<IFooterProps> = ({ className, ...props }) => {
    return (
        <footer className={clsx(css.footer, className)} {...props}>
            <div>Ratings © {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank">
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export default Footer;

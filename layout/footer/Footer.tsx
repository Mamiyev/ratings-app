import React, { HtmlHTMLAttributes } from 'react';
import css from './Footer.module.css';

type IFooterProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Footer: React.FC<IFooterProps> = () => {
    return <div>Footer</div>;
};

export default Footer;

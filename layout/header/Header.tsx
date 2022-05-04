import React, { HtmlHTMLAttributes } from 'react';
import css from './Header.module.css';

type IHeaderProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Header: React.FC<IHeaderProps> = ({...props}) => {
    return <div {...props}>Header</div>;
};

export default Header;

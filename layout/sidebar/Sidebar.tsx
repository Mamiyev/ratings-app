import React, { HtmlHTMLAttributes } from 'react';
import css from './Sidebar.module.css';

type ISidebarProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<ISidebarProps> = ({...props}) => {
    return <div {...props}>Sidebar</div>;
};

export default Sidebar;

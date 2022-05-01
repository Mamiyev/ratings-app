import React, { HtmlHTMLAttributes } from 'react';
import css from './Sidebar.module.css';

type ISidebarProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<ISidebarProps> = () => {
    return <div>Sidebar</div>;
};

export default Sidebar;

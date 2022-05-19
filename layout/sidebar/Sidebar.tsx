import React, { HtmlHTMLAttributes } from 'react';

import Menu from '../menu/Menu';
import css from './Sidebar.module.css';

type ISidebarProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<ISidebarProps> = ({...props}) => {
    return <div {...props}>
        <Menu />
    </div>;
};

export default Sidebar;

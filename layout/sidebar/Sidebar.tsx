import clsx from 'clsx';
import React from 'react';

import Menu from '../menu/Menu';
import css from './Sidebar.module.css';

type ISidebarProps = {
    className?: string;
};

const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
    return (
        <div className={clsx(css.sidebar, className)}>
            <Menu />
        </div>
    );
};

export default Sidebar;

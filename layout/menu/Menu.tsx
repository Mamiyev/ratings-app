import clsx from 'clsx';
import React, { HtmlHTMLAttributes, useContext } from 'react';
import {format} from 'date-fns'
import css from './Menu.module.css';
import { AppContext } from '../../context/app.context';


const Menu = ({ ...props}): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext)

    return (
        <ul>
            {menu.map((m) => (
                <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
            ))}
        </ul>
    );
};

export default Menu;

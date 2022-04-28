import React, { ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';
import clsx from 'clsx';
import ArrowIcon from '../icons/ArrowIcon';

type IButtonProps = {
    className?: string;
    color: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ color, children, arrow = 'none', className, ...props }) => {
    return (
        <button
            {...props}
            className={clsx(
                css.button,
                {
                    [css.primary]: color === 'primary',
                    [css.ghost]: color === 'ghost',
                },
                className,
            )}
        >
            {children}
            {arrow !== 'none' && (
                <span className={clsx(css.arrow, { [css.down]: arrow === 'down' })}>{<ArrowIcon />}</span>
            )}
        </button>
    );
};

export default Button;

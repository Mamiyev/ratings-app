import React, { ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';
import clsx from 'clsx';

type IButtonProps = {
    className?: string;
    color: 'primary' | 'ghost';
    icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ color, children, icon = false, className, ...props }) => {
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
            {icon}
        </button>
    );
};

export default Button;

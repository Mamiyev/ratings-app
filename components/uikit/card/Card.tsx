import React, { HTMLAttributes, ReactNode } from 'react';
import css from './Card.module.css';
import clsx from 'clsx';

type ICardProps = {
    color?: 'white' | 'blue';
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card: React.FC<ICardProps> = ({ children, color = 'white', className, ...props }) => {
    return (
        <div className={clsx(css.card, className, { [css.blue]: color === 'blue' })} {...props}>
            {children}
        </div>
    );
};

export default Card;

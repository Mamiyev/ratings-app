import React, { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react';
import css from './Card.module.css';
import clsx from 'clsx';

type ICardProps = {
    color?: 'white' | 'blue';
} & HTMLAttributes<HTMLDivElement>;

const Card: ForwardRefRenderFunction<HTMLDivElement, ICardProps> = ({
    children,
    color = 'white',
    className,
    ...props
}) => {
    return (
        <div className={clsx(css.card, className, { [css.blue]: color === 'blue' })} {...props}>
            {children}
        </div>
    );
};

export default forwardRef(Card);

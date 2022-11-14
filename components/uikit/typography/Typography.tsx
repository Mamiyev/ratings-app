import clsx from 'clsx';
import React from 'react';
import css from './Typography.module.css';

type IVariant = 'h1' | 'h2' | 'h3' | 'h4';

type ITypographyProps = {
    variant: IVariant;
    className?: string;
    children?: React.ReactNode;
};

const variants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
};
const Typography: React.FC<ITypographyProps> = ({ variant, className, children }) => {
    const element = variant ? variants[variant] : 'p';
    const classes = clsx(
        css.typography,
        {
            [css.h1]: variant === 'h1',
            [css.h2]: variant === 'h2',
            [css.h3]: variant === 'h3',
            [css.h4]: variant === 'h4',
        },
        className,
    );
    return React.createElement(element, { className: classes }, children);
};

export default Typography;

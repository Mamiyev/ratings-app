import React, { HTMLAttributes } from 'react';
import css from './Tag.module.css';
import clsx from 'clsx';

type ITagProps = {
    className?: string;
    size?: 's' | 'm';
	color?: 'red' |'green' | 'gray' | 'ghost' | 'primary';
    href?: string;
} & HTMLAttributes<HTMLDivElement>;

const Tag: React.FC<ITagProps> = ({ children, size, color = 'ghost', href, className, ...props }) => {
    return (
        <div
            className={clsx(
                css.tag,
                {
                    [css.s]: size === 's',
                    [css.m]: size === 'm',
                    [css.red]: color === 'red',
                    [css.green]: color === 'green',
                    [css.gray]: color === 'gray',
                    [css.ghost]: color === 'ghost',
                    [css.primary]: color === 'primary',
                },
                css.className,
            )}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;

import React, { HTMLAttributes } from 'react';
import css from './Divider.module.css';
import clsx from 'clsx';

type IDividerProps = {
    className?: string;
} & HTMLAttributes<HTMLHRElement>;

const Divider: React.FC<IDividerProps> = ({ className, ...props }) => {
    return <hr className={clsx(css.hr, className)} {...props} />;
};

export default Divider;

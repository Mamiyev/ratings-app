import React, { InputHTMLAttributes } from 'react';
import css from './Input.module.css';
import clsx from 'clsx';

type IInputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ className, ...props }) => {
    return <input className={clsx(css.input, className)} {...props} />;
};

export default Input;

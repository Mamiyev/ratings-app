import React, { TextareaHTMLAttributes } from 'react';
import css from './Textarea.module.css';
import clsx from 'clsx';

type ITextareaProps = {
    className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<ITextareaProps> = ({ className, ...props }) => {
    return <textarea className={clsx(css.textarea, className)} {...props} />;
};

export default Textarea;

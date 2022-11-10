import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import SortIcon from '../uikit/icons/SortIcon';
import css from './Sort.module.css';

export enum SortEnum {
    Rating,
    Price,
    Reset,
}

export type ISortProps = {
    sort: SortEnum;
    setSort: (sort: Exclude<SortEnum, SortEnum.Reset>) => void;
} & HTMLAttributes<HTMLDivElement>;

const Sort: React.FC<ISortProps> = ({ sort, setSort, className, ...props }) => {
    return (
        <div className={clsx(css.sort, className)} {...props}>
            <button
                onClick={() => setSort(SortEnum.Rating)}
                className={clsx({ [css.active]: sort === SortEnum.Rating })}
            >
                <SortIcon className={css.sortIcon} /> По рейтингу
            </button>

            <button onClick={() => setSort(SortEnum.Price)} className={clsx({ [css.active]: sort === SortEnum.Price })}>
                <SortIcon className={css.sortIcon} /> По цене
            </button>
        </div>
    );
};

export default Sort;

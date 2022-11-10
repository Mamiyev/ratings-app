import React, { useEffect, useReducer, useState } from 'react';
import AdvantageItem from '../../components/advantageItem/AdvantageItem';
import Product from '../../components/product/Product';
import Sort, { SortEnum } from '../../components/sort/Sort';
import HhData from '../../components/uikit/hhData/HhData';
import Tag from '../../components/uikit/tag/Tag';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { sortReducer } from './sort.reducer';
import css from './TopPageComponent.module.css';

export type ITopPageComponentProps = {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
};

const TopPageComponent: React.FC<ITopPageComponentProps> = ({ page, products, firstCategory }) => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
        products,
        sort: SortEnum.Reset,
    });

    const onSortClick = (sort: Exclude<SortEnum, SortEnum.Reset>) => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products });
    }, [products]);

    return (
        <div className={css.wrapper}>
            <div className={css.head}>
                <h1 className={css.title}>{page.title}</h1>
                {products && (
                    <Tag color="gray" size="m">
                        {products.length}
                    </Tag>
                )}
                <Sort sort={sort} setSort={onSortClick} />
            </div>

            <div>{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}</div>

            <div className={css.hhTitle}>
                <h2 className={css.categoryTitle}>Вакансии - {page.category}</h2>
                <Tag color="red" size="m">
                    hh.ru
                </Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && (
                <div className={css.advantageWrap}>
                    <h2 className={css.advantageTitle}>Преимущества</h2>
                    <AdvantageItem advantages={page.advantages} />
                </div>
            )}
            {page.seoText && <div className={css.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <div>
                <h2>Получаемые навыки</h2>
            </div>
            {page.tags.map((t) => (
                <Tag key={t} color={'primary'}>
                    {t}
                </Tag>
            ))}
        </div>
    );
};

export default TopPageComponent;

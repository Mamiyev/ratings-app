import React from 'react';
import Card from '../../components/uikit/card/Card';
import HhData from '../../components/uikit/hhData/HhData';
import Tag from '../../components/uikit/tag/Tag';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import css from './TopPageComponent.module.css';

export type ITopPageComponentProps = {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
};

const TopPageComponent: React.FC<ITopPageComponentProps> = ({ page, products, firstCategory }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.head}>
                <h1 className={css.title}>{page.title}</h1>
                {products && (
                    <Tag color="gray" size="m">
                        {products.length}
                    </Tag>
                )}
                <span>Сортировка</span>
            </div>

            <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

            <div className={css.hhTitle}>
                <h2 className={css.categoryTitle}>Вакансии - {page.category}</h2>
                <Tag color="red" size="m">
                    hh.ru
                </Tag>
            </div>
			{firstCategory === TopLevelCategory.Courses && <HhData {...page.hh}/>}
        </div>
    );
};

export default TopPageComponent;

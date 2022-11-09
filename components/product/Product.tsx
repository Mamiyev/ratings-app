import React from 'react';
import { ProductModel } from '../../interfaces/product.interface';
import Card from '../uikit/card/Card';
import Rating from '../uikit/rating/Rating';
import Tag from '../uikit/tag/Tag';
import css from './Product.module.css';
import Image from 'next/image';
import Button from '../uikit/button/Button';
import Divider from '../uikit/divider/Divider';

type IProductProps = {
    product: ProductModel;
};

const Product: React.FC<IProductProps> = ({ product }) => {
    console.log(product);
    return (
        <Card className={css.card}>
            <div className={css.topWrapper}>
                <div className={css.titleInfo}>
                    <div className={css.logo}>
                        <img
                            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                            alt={product.title}
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className={css.title}>
                        <h2>{product.title}</h2>
                        <div>
                            {product.tags.map((title) => (
                                <Tag key={title}>{title}</Tag>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={css.pricesInfo}>
                    <div className={css.item}>
                        <span className={css.itemValue}>{product.price}</span>
                        <div className={css.itemSubtitle}>цена</div>
                    </div>
                    <div className={css.item}>
                        <span className={css.itemValue}>{product.credit}</span>
                        <div className={css.itemSubtitle}>в кредит</div>
                    </div>
                    <div className={css.item}>
                        <span className={css.itemValue}>
                            <Rating rating={4} />
                        </span>
                        <div className={css.itemSubtitle}>{product.reviewCount} отзывов</div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className={css.content}>{product.description}</div>
            <Divider />

            <div className={css.actions}>
                <Button color="primary">Узнать подробнее</Button>
                <Button color="ghost">Читать отзывы</Button>
            </div>
        </Card>
    );
};

export default Product;

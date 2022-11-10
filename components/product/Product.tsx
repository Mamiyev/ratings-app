import React from 'react';
import { ProductModel } from '../../interfaces/product.interface';
import Card from '../uikit/card/Card';
import Rating from '../uikit/rating/Rating';
import Tag from '../uikit/tag/Tag';
import css from './Product.module.css';
import Image from 'next/image';
import Button from '../uikit/button/Button';
import Divider from '../uikit/divider/Divider';
import { declOfNum, priceRu } from '../../helpers/helpers';

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
                        <Image
                            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                            alt={product.title}
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className={css.title}>
                        <h2>{product.title}</h2>
                        <div>
                            {product.tags.slice(0, 2).map((title) => (
                                <Tag key={title}>{title}</Tag>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={css.pricesInfo}>
                    <div className={css.item}>
                        <div className={css.itemValue}>
                            {priceRu(product.price)}

                            {product.oldPrice && (
                                <Tag size="s" color="green" className={css.oldPrice}>
                                    {priceRu(product.price - product.oldPrice)}
                                </Tag>
                            )}
                        </div>
                        <div className={css.itemSubtitle}>цена</div>
                    </div>
                    <div className={css.item}>
                        <span className={css.itemValue}>
                            {priceRu(product.credit)}/<span className={css.month}>мес</span>
                        </span>
                        <div className={css.itemSubtitle}>в кредит</div>
                    </div>
                    <div className={css.item}>
                        <span className={css.itemValue}>
                            <Rating rating={4} />
                        </span>
                        <div className={css.itemSubtitle}>
                            {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className={css.description}>{product.description}</div>

            <div className={css.feature}>
                <div className={css.characteristicsBox}>
                    {product.characteristics.map((c) => (
                        <div key={c.name} className={css.characteristics}>
                            <span>{c.name}</span>
                            <span className={css.characteristicsDots}></span>
                            <span>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={css.advantages}>
                    <h4>Преимущества</h4>
                    {product.advantages ? <p>{product.advantages}</p> : 'Нет данных'}
                </div>
            </div>

            <Divider />

            <div className={css.actions}>
                <Button color="primary">Узнать подробнее</Button>
                <Button className={css.reviewButton} color="ghost">
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};

export default Product;

import clsx from 'clsx';
import React, { HTMLAttributes, useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from '../../icons/StarIcon';
import css from './Rating.module.css';

type IRatingProps = {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
} & HTMLAttributes<HTMLDivElement>;

const Rating: React.FC<IRatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
            <span
                key={i}
                className={clsx(css.star, {
                    [css.filled]: i < currentRating,
                    [css.editable]: isEditable,
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => onRatingClick(i + 1)}
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent) => isEditable && handleSpace(i + 1, e)}
            >
                <StarIcon />
            </span>
        ));
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onRatingClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};

export default Rating;

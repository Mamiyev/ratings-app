import { useState } from 'react';
import Rating from '../components/uikit/button/rating/Rating';

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    return (
        <div>
            <h1>Title</h1>
            <Rating rating={rating} isEditable setRating={setRating} />
        </div>
    );
}

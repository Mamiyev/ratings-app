import { useState } from 'react';
import Rating from '../components/uikit/rating/Rating';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <h1>Title</h1>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}

export default withLayout(Home);

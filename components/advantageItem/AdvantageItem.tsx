import React from 'react';
import css from './AdvantageItem.module.css';
import { TopPageAdvantage } from '../../interfaces/page.interface';
import CheckIcon from '../uikit/icons/CheckIcon';

type IAdvantageItem = {
    advantages: TopPageAdvantage[];
};

const AdvantageItem: React.FC<IAdvantageItem> = ({ advantages }) => {
    return (
        <>
            {advantages.map((a) => (
                <div key={a._id} className={css.advantage}>
                    <CheckIcon />
                    <div className={css.title}>{a.title}</div>
                    <hr className={css.vline} />
                    <div className={css.description}>{a.description}</div>
                </div>
            ))}
        </>
    );
};

export default AdvantageItem;

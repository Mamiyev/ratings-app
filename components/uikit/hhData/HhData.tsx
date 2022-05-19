import css from './HhData.module.css';
import { HhData } from '../../../interfaces/page.interface';
import Card from '../card/Card';
import RateIcon from '../icons/RateIcon';

const HhData: React.FC<HhData> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {
    return (
        <div className={css.hh}>
            <Card className={css.count}>
                <div className={css.title}>Всего вакансий</div>
                <div className={css.countValue}>{count}</div>
            </Card>
            <Card className={css.salary}>
                <div>
                    <div className={css.title}>Начальный</div>
                    <div className={css.salaryValue}>{juniorSalary}</div>
                    <div className={css.rate}>
                        <RateIcon className={css.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={css.title}>Средний</div>
                    <div className={css.salaryValue}>{middleSalary}</div>
                    <div className={css.rate}>
                        <RateIcon className={css.filled} />
                        <RateIcon className={css.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={css.title}>Профессионал</div>
                    <div className={css.salaryValue}>{seniorSalary}</div>
                    <div className={css.rate}>
                        <RateIcon className={css.filled} />
                        <RateIcon className={css.filled} />
                        <RateIcon className={css.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default HhData;

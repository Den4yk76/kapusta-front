import s from '../Balance/Balance.module.css';
// import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import { ReactComponent as BarChart } from '../../static/icons/bar_chart.svg';

export default function Balance() {
  return (
    // <CurrentPeriod />
    <div className={s.container}>
      <div className={s.containerLeft}>
        <div className={s.wrapperReports}>
          <div className={s.reports}>Go to reports</div>
          <BarChart className={s.iconsBarChart} />
        </div>
      </div>
      <div className={s.containerRight}>
        <div className={s.wrapperBalance}>
          <div className={s.title}>Balance:</div>
        </div>
        <div className={s.wrapperBtn}>
          <button className={`${s.money} ${s.btn}`}>00.00 UAH</button>
          <button className={`${s.confirm} ${s.btn} ${s.activeBtn}`}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

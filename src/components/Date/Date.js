import { ReactComponent as Calendar } from '../../static/icons/calendar.svg';
import s from '../Date/Date.module.css';

export default function DateComponent() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  console.log(day);
  console.log(month.length);
  console.log(year);
  return (
    <div className={s.wrapper}>
      <Calendar className={s.calendarSvg} />
      <p className={s.date}>
        {day}.{month < 10 ? '0' + month : month}.{year}
      </p>
    </div>
  );
}

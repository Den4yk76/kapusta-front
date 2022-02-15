import s from '../Summary/Summery.module.css';
import { months } from '../../shared/months';

export default function Summary({ data }) {
  const getMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const months = [];
    for (let i = 1; i < 7; i += 1) {
      const newDate = new Date(year, month - i);
      months.push(newDate.getMonth());
    }
    return months;
  };

  const findAmount = month => {
    const currentMonth = data.filter(el => el.month === month);
    const amount = currentMonth.reduce((acc, item) => {
      return acc + Number(item.count);
    }, 0);
    return amount;
  };

  return (
    <div className={s.wrap}>
      <table className={s.table}>
        <thead>
          <tr className={s.tr}>
            <th className={s.title} colSpan="2">
              Summary
            </th>
          </tr>
        </thead>
        {/* <tbod y> */}
        {getMonth().map(item => {
          const month = months[item];
          const amount = findAmount(item);
          return (
            <tr className={s.tr} key={item}>
              <td className={`${s.month} ${s.color}`}>{month}</td>
              <td className={`${s.sum} ${s.color}`}>{amount || 0}</td>
            </tr>
          );
        })}
        {/* </tbody> */}
      </table>
    </div>
  );
}

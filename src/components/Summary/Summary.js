import { useEffect } from 'react';
import s from '../Summary/Summery.module.css';

export default function Summary() {
  useEffect(() => {});

  return (
    <div className={s.wrap}>
      <table className={s.table}>
        <thead>
          <tr className={s.tr}>
            <th className={s.title} colSpan="3">
              Summary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>NOVEMBER</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>OCTOBER</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>SEPTEMBER</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>AUGUST</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>JULY</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
          <tr className={s.tr}>
            <td className={`${s.month} ${s.color}`}>JUNE</td>
            <td className={`${s.sum} ${s.color}`}>25500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

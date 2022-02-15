import { useState, useEffect } from 'react';
import { ReactComponent as Back } from '../../static/icons/back.svg';
import { ReactComponent as Forward } from '../../static/icons/forward.svg';
import { toast } from 'react-toastify';
import s from './Сosts/Costs.module.css';
import Costs from './Сosts/Costs';
import Income from './Income/Income';
import { getMonthReportTimeStamps } from '../../shared/unix-time';
import { getMonthStatistic } from '../../shared/api';
import { testData } from '../../shared/test-data';

export default function Reports() {
  const [showReports, setShowReports] = useState(true);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getMonthReportTimeStamps(today);
    getMonthStatistic(unixTimeStamps.start, unixTimeStamps.end, 'expenses')
      .then(data => {
        // setExpenseData(data.transactions);
        setExpenseData(testData);
        // const dataForExpenseReport = data.transactions.map(item => ({
        const dataForExpenseReport = testData.map(item => ({
          category: item.category,
          date: item.date,
          count: item.count,
        }));
        console.log(dataForExpenseReport);
        setExpenseData(dataForExpenseReport);
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []);

  const toggleReports = () => {
    setShowReports(!showReports);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={`${s.item} ${s.itemCosts}`}>
          <p className={s.title}> Costs:</p>
          <p className={`${s.sum} ${s.sumCosts}`}>- 18000.00 UAH</p>
        </li>
        <li className={`${s.item} ${s.itemIncome}`}>
          <p className={`${s.title} ${s.titleIncome}`}> Income:</p>
          <p className={`${s.sum} ${s.sumIncome}`}>+ 45000.00 UAH</p>
        </li>
      </ul>
      <div className={s.wrapperBackground}>
        <div className={s.sliderWrapper}>
          <button className={s.svg}>
            <Back className={s.arrows} onClick={toggleReports} />
          </button>
          <p className={s.titleSlider}>{showReports ? 'COSTS' : 'INCOME'}</p>
          <button className={s.svg}>
            <Forward className={s.arrows} onClick={toggleReports} />
          </button>
        </div>
        {showReports ? <Costs data={expenseData} /> : <Income />}
      </div>
      <div className={s.schedule}>Тут будет график</div>
    </div>
  );
}

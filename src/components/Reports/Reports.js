import { useState, useEffect } from 'react';
import { ReactComponent as Back } from '../../static/icons/back.svg';
import { ReactComponent as Forward } from '../../static/icons/forward.svg';
import { toast } from 'react-toastify';
import s from './Сosts/Costs.module.css';
import Costs from './Сosts/Costs';
import Income from './Income/Income';
import { getMonthReportTimeStamps } from '../../shared/unix-time';
import { getMonthAmount } from '../../shared/api';
// import { testData } from '../../shared/test-data';
// import categories from '../../optionsExpense.json';
// import Chart from '../BarChart/BarChart';
// import Chart from '../BarChart/BarChart';
import CurrentPeriod from '../Balance/CurrentPeriod/CurrentPeriod';

export default function Reports() {
  const [showReports, setShowReports] = useState(true);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getMonthReportTimeStamps(today);
    getMonthAmount(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        setIncomeAmount(data.result.incomesAmount);
        setExpenseAmount(data.result.expensesAmount);
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
    <>
      <CurrentPeriod />
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li className={`${s.item} ${s.itemCosts}`}>
            <p className={s.title}> Costs:</p>
            <p className={`${s.sum} ${s.sumCosts}`}>- {expenseAmount} UAH</p>
          </li>
          <li className={`${s.item} ${s.itemIncome}`}>
            <p className={`${s.title} ${s.titleIncome}`}> Income:</p>
            <p className={`${s.sum} ${s.sumIncome}`}>+ {incomeAmount} UAH</p>
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
          {showReports ? <Costs /> : <Income />}
        </div>
      </div>
    </>
  );
}

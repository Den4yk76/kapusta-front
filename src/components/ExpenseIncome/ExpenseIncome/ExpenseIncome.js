import { useEffect } from 'react';
import InputProductExpense from '../InputProductExpense/InputProductExpense';
import InputProductIncome from '../InputProductIncome/InputProductIncome';
// import { Link } from 'react-router-dom';
import ExpenseMobile from '../ExpenseMobile/ExpenseMobile';
import IncomeMobile from '../IncomeMobile/IncomeMobile';
import s from './ExpenseIncome.module.css';
import { useState } from 'react';
import Balance from '../../Balance/Balance';
import TableMobileList from '../TableMobileList/TableMobileList';
import { getExpenseData } from '../../../shared/api';
import { getUnixTimeStamp } from '../../../shared/unix-time';
import { toast } from 'react-toastify';
// import { testData } from '../../../shared/test-data';

export default function ExpenseIncome() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabMobile, setActiveTabMobile] = useState(0);
  const [expenseData, setExpenseData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getUnixTimeStamp(today);
    getExpenseData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        setExpenseData(data.transactions);
        const dataForExpenseReport = data.transactions.map(item => ({
          month: new Date(item.date).getMonth(),
          count: item.count,
        }));
        setSummaryData(dataForExpenseReport);
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []);

  const handleChangeTab = e => {
    e.preventDefault();
    if (e.target.innerText === 'EXPENSE') {
      setActiveTab(1);
      return;
    }
    setActiveTab(2);
    return;
  };

    const handleChangeTabMobile = e => {
    e.preventDefault();
    if (e.target.innerText === 'EXPENSE') {
      setActiveTabMobile(1);
      return;
    }
    setActiveTabMobile(2);
    return;
  };


  return (
    <>
      <div>
        {activeTabMobile === 0 && <Balance />}
        
        <div className={s.itemButton + ' ' + s.nomobile}>
          <ul className={s.item}>
            <li>
              <button
                className={
                  activeTab === 1 ? s.button + ' ' + s.active : s.button
                }
                onClick={handleChangeTab}
              >
                Expense
              </button>
            </li>
            <li>
              <button
                className={
                  activeTab === 2 ? s.button + ' ' + s.active : s.button
                }
                onClick={handleChangeTab}
              >
                Income
              </button>
            </li>
          </ul>
        </div>

        <div className={s.nomobile}>
          {activeTab === 1 ? (
            <InputProductExpense
              expenseData={expenseData}
              summaryData={summaryData}
            />
          ) : (
            <InputProductIncome />
          )}
        </div>
      </div>

      
      <div className={s.ismobile}>
          {activeTabMobile === 0 && <TableMobileList />}
          <div className={s.itemButton + ' ' + s.ismobile}>
            <ul className={s.item}>
              <li>
                <button
                  className={
                    setActiveTabMobile === 1 ? s.button + ' ' + s.activeMobile : s.button
                  }
                  onClick={handleChangeTabMobile}
                >
                  Expense
                </button>
              </li>
              <li>
                <button
                  className={
                    setActiveTabMobile === 2 ? s.button + ' ' + s.activeMobile : s.button
                  }
                  onClick={handleChangeTabMobile}
                >
                  Income
                </button>
              </li>
            </ul>
          </div>
      </div>
      
        <div className={s.ismobile}>
        {activeTabMobile === 1 && <ExpenseMobile activeTab={activeTab} />}
        {activeTabMobile === 2 && <IncomeMobile activeTab={activeTab} />}
        </div>
    </>
  );
}

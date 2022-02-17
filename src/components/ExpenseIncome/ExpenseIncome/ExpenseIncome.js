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
import { testData } from '../../../shared/test-data';

export default function ExpenseIncome() {
  const [activeTab, setActiveTab] = useState(1);
  const [expenseData, setExpenseData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [categoryExpense, setCategoryExpense] = useState({ "value": "transport", "label": "Transport" });
  const [categoryIncome, setCategoryIncome] = useState({ "value": "salary", "label": "Salary" });

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getUnixTimeStamp(today);
    getExpenseData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        // setExpenseData(data.transactions);
        setExpenseData(testData);
        // const dataForExpenseReport = data.transactions.map(item => ({
        const dataForExpenseReport = testData.map(item => ({
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

  return (
    <>
      <div>
        {/* треба видалити!! 
        <Link to="/">{activeTab === 0 && <Balance />}</Link> */}
        <Balance />
        {activeTab === 0 && <TableMobileList />}
        <div className={s.itemButton}>
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
              category={categoryExpense}
              setCategory={setCategoryExpense}
              expenseData={expenseData}
              summaryData={summaryData}
            />
          ) : (
              <InputProductIncome
              category={categoryIncome}
              setCategory={setCategoryIncome}
              expenseData={expenseData}
              summaryData={summaryData}
              />
          )}
        </div>
        <div className={s.ismobile}>
          {/* add expenseData={expenseData}
              summaryData={summaryData}*/}
          {activeTab === 1 && <ExpenseMobile setCategory={setCategoryExpense} activeTab={activeTab} />}
          {activeTab === 2 && <IncomeMobile setCategory={setCategoryIncome} activeTab={activeTab} />}
        </div>
      </div>
    </>
  );
}

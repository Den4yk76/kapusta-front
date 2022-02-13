import { useEffect } from 'react';
import InputProductExpense from '../InputProductExpense/InputProductExpense';
import InputProductIncome from '../InputProductIncome/InputProductIncome';
import { Link } from 'react-router-dom';
import ExpenseMobile from '../ExpenseMobile/ExpenseMobile';
import IncomeMobile from '../IncomeMobile/IncomeMobile';
import s from './ExpenseIncome.module.css';
import { useState } from 'react';
import Balance from '../../Balance/Balance';
import TableMobileList from '../TableMobileList/TableMobileList';

export default function ExpenseIncome() {
  const [activeTab, setActiveTab] = useState(0);

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
          {activeTab === 2 ? <InputProductExpense /> : <InputProductIncome />}
        </div>

        <div className={s.ismobile}>
          {activeTab === 1 && <ExpenseMobile activeTab={activeTab} />}
          {activeTab === 2 && <IncomeMobile activeTab={activeTab} />}
        </div>
      </div>
    </>
  );
}

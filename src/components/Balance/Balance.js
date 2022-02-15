import { useEffect, useState } from 'react';
import s from '../Balance/Balance.module.css';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
//import Reports from '../Reports/Reports';
import ModalBalance from '../ModalBalance/ModalBalance';
import { ReactComponent as BarChart } from '../../static/icons/bar_chart.svg';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { setBalanceUser } from '../../redux/auth/auth-operations';
//import { getReportsIncomeUser } from '../../redux/transaction/transaction-operation';
//import transactionsSelectors from '../../redux/transaction/transaction-selectors';
import { NavLink } from 'react-router-dom';

export default function Balance() {
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();

  const currentBalance = useSelector(authSelectors.getBalanceUser);

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  const onHandleChange = e => {
    const valueInput = e.target.value.split(' ')[0];
    setBalance(valueInput);
  };

  const clickOnBtn = e => {
    e.preventDefault();
    dispatch(setBalanceUser({ balance: parseFloat(balance).toFixed(2) }));
    console.log('after set', balance);
  };

  return (
    // <>
    //   {/* <CurrentPeriod /> */}
    //   {/* {<Reports />} */}
    // </>
    <div className={s.container}>
      <div className={s.containerLeft}>
        <NavLink className={s.wrapperReports} to="/Reports">
          <button className={s.reports}>
            Go to reports
            <BarChart className={s.iconsBarChart} />
          </button>
        </NavLink>
      </div>
      <div className={s.containerRight}>
        <form className={s.wrapperBalance}>
          <div className={s.form}>
            <p className={s.title}>Balance:</p>
            <div className={s.wrapperBtn}>
              <input
                className={`${s.money} ${s.btn}`}
                name="balance"
                type="number"
                id="balanceId"
                onChange={onHandleChange}
                value={balance === 0 ? '00.00 UAH' : balance}
                placeholder="00.00 UAH"
              />
              <button
                type="submit"
                onClick={clickOnBtn}
                className={`${s.confirm} ${s.btn}`}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </form>
      </div>
      {!+balance && <ModalBalance />}
    </div>
  );
}

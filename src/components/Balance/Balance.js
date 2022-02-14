import { useState } from 'react';
import s from '../Balance/Balance.module.css';
//import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import { ReactComponent as BarChart } from '../../static/icons/bar_chart.svg';
import ModalBalance from '../ModalBalance/ModalBalance';
//import Reports from '../Reports/Reports';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Balance() {
  const [balance, setBalance] = useState('');

  const onHandleChange = e => {
    setBalance(e.target.value);
  };
  const clickOnBtn = e => {
    e.preventDefault();
    const valueInput = e.target.value;
    if (!valueInput) {
      toast('Please enter the correct value!');
    }
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
                value={`${balance}`}
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

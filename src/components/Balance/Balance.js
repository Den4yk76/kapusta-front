import { useEffect, useState, React } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Balance/Balance.module.css';
import 'react-toastify/dist/ReactToastify.css';
import ModalBalance from '../ModalBalance/ModalBalance';
import { ReactComponent as BarChart } from '../../static/icons/bar_chart.svg';
import authSelectors from '../../redux/auth/auth-selectors';
import { setBalanceUser } from '../../redux/auth/auth-operations';

export default function Balance() {
  const [balance, setBalance] = useState(localStorage.getItem('balance'));
  const dispatch = useDispatch();

  const currentBalance = useSelector(authSelectors.getBalanceUser);

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  const onHandleChange = e => {
    const valueInput = e.target.value.split(' ')[0];
    setBalance(valueInput);
    localStorage.setItem('balance', valueInput);
  };

  const clickOnBtn = e => {
    e.preventDefault();
    dispatch(setBalanceUser({ balance: parseFloat(balance).toFixed(2) }));
    console.log('after set', balance);
  };

  return (
    <div className={s.container}>
      <div className={s.containerLeft}>
        <div className={s.wrapperReports} href="/Reports">
          <Link to="/reports" className={s.reports}>
            Go to reports
            <BarChart className={s.iconsBarChart} />
          </Link>
        </div>
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
      {balance === 0 && <ModalBalance />}
    </div>
  );
}

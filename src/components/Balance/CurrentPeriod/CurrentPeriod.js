import s from '../CurrentPeriod/CurrentPeriod.module.css';
import { ReactComponent as ArrowLeft } from '../../../static/icons/arrow_left.svg';
import { ReactComponent as Back } from '../../../static/icons/back.svg';
import { ReactComponent as Forward } from '../../../static/icons/forward.svg';
import useCurrentPeriod from '../../../hooks/useCurrentPeriod.js';
import { Link } from 'react-router-dom';

export default function CurrentPeriod() {
  const { selectedDate, monthNames, getNextMonth, getPrevMonth } =
    useCurrentPeriod();
  // const currentBalance = localStorage.getItem('balance');

  return (
    <div className={s.generalWrapper}>
      <Link className={s.btnBack} to="/">
        <ArrowLeft className={s.iconsArrowLeft} />
      </Link>
      <p className={s.backText}> Go back to the main page</p>
      <div className={s.wrapper}>
        <div className={s.wrapperPeriod}>
          <div className={s.wrapperData}>
            <p className={s.currentPeriod}>Current period:</p>
            <div className={s.dataWrapper}>
              <button className={s.svg}>
                <Back className={s.arrows} onClick={getPrevMonth} />
              </button>
              <p className={s.data}>
                {`${
                  monthNames[selectedDate.getMonth()]
                }  ${selectedDate.getFullYear()}`}
              </p>
              <button className={s.svg}>
                <Forward className={s.arrows} onClick={getNextMonth} />
              </button>
            </div>
          </div>

          <form className={s.wrapperBalance}>
            <div className={s.balance}>
              <p className={s.title}>Balance:</p>
              <p className={s.balanceBtn}>55.000 UAH</p>
              {/* <p className={s.balanceBtn}>{currentBalance} UAH</p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

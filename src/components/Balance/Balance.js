import { useState } from 'react';
import s from '../Balance/Balance.module.css';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import { ReactComponent as BarChart } from '../../static/icons/bar_chart.svg';
import ModalBalance from '../ModalBalance/ModalBalance';
//import Reports from '../Reports/Reports';

export default function Balance() {
  const [balance, setBalance] = useState('');

  const onHandleChange = e => {
    setBalance(e.target.value);
  };

  return (
    <>
      <CurrentPeriod />
      {/* {<Reports />} */}
    </>
    // <div className={s.container}>
    //   <div className={s.containerLeft}>
    //     <a className={s.wrapperReports} href="/Reports">
    //       <button className={s.reports}>Go to reports
    //        <BarChart className={s.iconsBarChart} />
    //       </button>
    //     </a>
    //   </div>
    //   <div className={s.containerRight}>
    //     <form className={s.wrapperBalance}>
    //       <div className={s.form}>
    //         <p className={s.title}>Balance:</p>
    //         <div className={s.wrapperBtn}>
    //           <input
    //             className={`${s.money} ${s.btn}`}
    //             name="balance"
    //             type="number"
    //             id="balanceId"
    //             onChange={onHandleChange}
    //             value={`${balance}`}
    //             placeholder="00.00 UAH"
    //           />

    //           <button type="submit" className={`${s.confirm} ${s.btn}`}>
    //             CONFIRM
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   {!+balance && <ModalBalance />}
    // </div>
  );
}

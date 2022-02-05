import s from '../CurrentPeriod/CurrentPeriod.module.css';

export default function CurrentPeriod() {
  return (
    <div className={s.generalWrapper}>
      <button className={s.btnBack}>back</button>
      <p className={s.backText}> Go back to the main page</p>
      <div className={s.wrapper}>
        <div className={s.wrapperPeriod}>
          <div className={s.wrapperData}>
            <p className={s.currentPeriod}>Current period:</p>
            <div className={s.dataWrapper}>
              <button className={s.svg}>s</button>
              <p className={s.data}>NOVEMBER 2019</p>
              <button className={s.svg}>s</button>
            </div>
          </div>

          <div className={s.wrapperBalance}>
            <p className={s.balance}>Balance:</p>
            <button className={s.balanceBtn}>55 000 UAH</button>
            <button className={s.confirm}>CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

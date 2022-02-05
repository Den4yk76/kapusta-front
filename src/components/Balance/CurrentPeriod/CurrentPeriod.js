import s from '../CurrentPeriod/CurrentPeriod.module.css';
import { ReactComponent as ArrowLeft } from '../../../static/icons/arrow_left.svg';
import { ReactComponent as Back } from '../../../static/icons/back.svg';
import { ReactComponent as Forward } from '../../../static/icons/forward.svg';

export default function CurrentPeriod() {
  return (
    <div className={s.generalWrapper}>
      <button className={s.btnBack}>
        <ArrowLeft className={s.iconsArrowLeft} />
      </button>
      <p className={s.backText}> Go back to the main page</p>
      <div className={s.wrapper}>
        <div className={s.wrapperPeriod}>
          <div className={s.wrapperData}>
            <p className={s.currentPeriod}>Current period:</p>
            <div className={s.dataWrapper}>
              <button className={s.svg}>
                <Back className={s.arrows} />
              </button>
              <p className={s.data}>NOVEMBER 2019</p>
              <button className={s.svg}>
                <Forward className={s.arrows} />
              </button>
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

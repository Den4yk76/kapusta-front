import s from '../Сosts/Costs.module.css';
import style from '../Income/Income.module.css';
import { ReactComponent as Additional } from '../../../static/icons/additional_income.svg';
import { ReactComponent as Salary } from '../../../static/icons/salary.svg';
import { ReactComponent as Oval } from '../../../static/icons/oval.svg';

export default function Income() {
  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <div className={style.wrapperIcon}>
            <Salary className={`${style.classIcon} ${style.classActiveIcon}`} />
            <Oval className={`${style.classOval} ${style.classActiveOval}`} />
          </div>
          <p className={s.titleIcons}>WAGE</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <div className={s.wrap}>
            <div className={style.wrapperIcon}>
              <Additional className={`${style.classIcon}`} />
              <Oval className={`${style.classOval}`} />
            </div>
          </div>
          <p className={s.titleIcons}>Additional income</p>
        </li>
      </ul>
    </>
  );
}

import s from '../Сosts/Costs.module.css';
import { ReactComponent as Additional } from '../../../static/icons/additional_income.svg';
import { ReactComponent as Salary } from '../../../static/icons/salary.svg';

export default function Income() {
  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Additional className={s.iconCategoriesActive} />
          <p className={s.titleIcons}>WAGE</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <div className={s.wrap}>
            <Salary />
          </div>
          <p className={s.titleIcons}>Additional income</p>
        </li>
      </ul>
    </>
  );
}

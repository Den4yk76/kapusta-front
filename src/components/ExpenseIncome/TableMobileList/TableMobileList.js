import { ReactComponent as Delete } from '../../../static/icons/delete.svg';
import s from "../TableMobileList/TableMobileList.module.css"

export default function TableMobileList() {
    
    return (
        <ul className={s.list}>
        <li className={s.item}>
          <div className={s.expense__thumb}>
            <p className={s.name}>djjdj</p>

            <div className={s.date__thumb}>
              <span className={s.date}>ghjdghj</span>
              <p className={s.category}>hjdhgj</p>
            </div>
          </div>

          <div className={s.sum__thumb}>
            <span className={s.sumNegative}>dghj</span>
            <button className={s.icon__thumb}>
              <Delete
                className={s.icon__delete}
              />
            </button>
          </div>
        </li>
    </ul>
    )
}
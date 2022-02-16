import { useDispatch } from 'react-redux';
import Summary from '../../Summary/Summary';
import { ReactComponent as Delete } from '../../../static/icons/delete.svg';
import s from '../TableExpense/TableExpense.module.css';
import { deleteData } from '../../../redux/button-delete-oper/delete-operation';

export default function TableExpense({ items, summaryData }) {
  const dispatch = useDispatch();
  
  return (
    <div className={s.container}>
      <div className={s.table__container}>
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <th className="th">Date</th>
              <th className="th">Description</th>
              <th className="th">Category</th>
              <th className="th">Sum</th>
              <th className="th"></th>
            </tr>
          </thead>

          <tbody className={s.tbody}>
            {items.map(item => { console.log(item.id)
              return (
                <tr key={item.date}>
                  <td className={s.td}>{item.date}</td>
                  <td className={s.td}>{item.description}</td>
                  <td className={`${s.category} ${s.td}`}>{item.category}</td>
                  <td className={`${s.sumNegative} ${s.td}`}>{item.count}</td>
                  <td className={`${s.icon__bg} ${s.td}`}>
                    <button
                      className={s.icon__thumb}
                      type="button"
                      onClick={e => dispatch(deleteData(e.target.id))}
                      
                    >
                      <Delete className={s.icon__delete} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Summary data={summaryData} />
      </div>
    </div>
  );
}

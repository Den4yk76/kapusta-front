import { ReactComponent as Delete } from '../../../static/icons/delete.svg';
import Summary from '../../Summary/Summary';
import s from '../TableExpense/TableExpense.module.css';

export default function TableIncome({ items, summaryData }) {
  // const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div className={s.table__container}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Sum</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => {
              return (
                <tr key={item.date}>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td className={s.category}>{item.category}</td>
                  <td className={s.sumNegative}>{item.count}</td>
                  <td className={s.icon__bg}>
                    <button
                      className={s.icon__thumb}
                      type="button"
                      //   onClick={e => dispatch(deleteData(e.target.id))}
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

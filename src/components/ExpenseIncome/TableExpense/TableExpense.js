import { useDispatch } from 'react-redux';
import Summary from '../../Summary/Summary';
import { ReactComponent as Delete } from '../../../static/icons/delete.svg';
import s from '../TableExpense/TableExpense.module.css';
import { deleteData } from '../../../redux/button-delete-oper/delete-operation';


export default function TableExpense() {
    
    
        
   

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
                            
                                <tr >
                                <td ></td>
                                <td></td>
                                <td className={s.category}></td>
                                <td className={s.sumNegative}></td>
                                <td className={s.icon__bg}>
                                    <button className={s.icon__thumb} type="button">
                                        <Delete className={s.icon__delete} />
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div>
                    <Summary />
                </div>
            </div>
        )
    }

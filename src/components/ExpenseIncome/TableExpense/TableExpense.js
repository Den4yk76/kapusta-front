import axios from "axios";
import Summary from "../../Summary/Summary";
import { ReactComponent as Delete } from '../../../static/icons/delete.svg';
import { useState, useEffect } from "react";
import s from "../TableExpense/TableExpense.module.css";






export default function TableExpense() {
    const [expenseId, setExpenseId] = useState([]);
   
   const handleDeleteItem = (id) => {
        if (window.alert("are you sure you want to delete!")) {
            axios.delete(`http://localhost:3001/api/operations/income/${id}`)
                .then((response) => {
                console.log('Data is deleted =>', response.data)
                }).catch((err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        axios
            .get('http://localhost:3001/api/operations/income/:id')
            .then((response) => {
                console.log(response);
                setExpenseId(response.data)
            }).catch((error) => {
                console.error(error);
            });
    }, []);

    

    
   

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
                            <tr>
                                <td>hfdkjsf</td>
                                <td>hahafha</td>
                                <td className={s.category}>hsghshs</td>
                                <td className={s.sumNegative}>hsghgsh</td>
                                <td className={s.icon__bg}>
                                    <button className={s.icon__thumb} onClick={() => handleDeleteItem()}>
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
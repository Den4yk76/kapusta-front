import s from "../TableExpense/TableExpense.module.css";

export default function TableExpense() {
    
    return (
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
                        <td>sdhghaha</td>
                        <td>hahafha</td>
                        <td className={s.category}>hsghshs</td>
                        <td className={s.sumNegative}>hsghgsh</td>
                        <td className={s.icon__bg}>hgfh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
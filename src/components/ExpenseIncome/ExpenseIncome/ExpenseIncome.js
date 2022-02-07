import { NavLink } from "react-router-dom";
import InputProductExpense from "../InputProductExpense/InputProductExpense";
import InputProductIncome from "../InputProductIncome/InputProductIncome";
import s from "./ExpenseIncome.module.css";

export default function ExpenseIncome() {

    return (
        <>
            <div className={s.itemButton}>
                <ul className={s.item}>
                    <li>
                        <button
                            // exact
                            // to={{
                            // pathname: `${url}/expense`,
                            // state: {
                            //     from: location.state ? location.state.from : '/',
                            // },
                            // }}
                            className={s.button}
                            // activeClassName={s.active}
                        >
                            Expense
                        </button>
                        </li>
                        <li>
                        <button
                            // exact
                            // to={{
                            // pathname: `${url}/income`,
                            // state: {
                            //     from: location.state ? location.state.from : '/',
                            // },
                            // }}
                            className={s.button}
                            // activeClassName={s.active}
                        >
                            Income
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <InputProductExpense />
                <InputProductIncome />
            </div>
        </>
    )
}
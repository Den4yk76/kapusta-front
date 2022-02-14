import { NavLink } from "react-router-dom";
import InputProductExpense from "../InputProductExpense/InputProductExpense";
import InputProductIncome from "../InputProductIncome/InputProductIncome";
import ExpenseMobile from "../ExpenseMobile/ExpenseMobile";
import IncomeMobile from "../IncomeMobile/IncomeMobile";
import s from "./ExpenseIncome.module.css";


// import { Operations, operationSelectors } from 'redux/operation';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

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
                <ExpenseMobile />
                <IncomeMobile />
            </div>
        </>
    )
}
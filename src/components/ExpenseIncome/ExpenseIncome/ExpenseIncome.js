import { NavLink } from "react-router-dom";

import InputProductExpense from "../InputProductExpense/InputProductExpense";
import InputProductIncome from "../InputProductIncome/InputProductIncome";
import ExpenseMobile from "../ExpenseMobile/ExpenseMobile";
import IncomeMobile from "../IncomeMobile/IncomeMobile";
import s from "./ExpenseIncome.module.css";
import { useState } from "react";

export default function ExpenseIncome() {

    const [activeTab, setActiveTab] = useState(false);

    const handleChangeTab = (e) => {
        e.preventDefault();
        
        console.log(e.target.innerText);

        if (e.target.innerText === 'EXPENSE') {
            setActiveTab(true);
            console.log(activeTab);
            return;
        }

        setActiveTab(false);
        console.log(activeTab);
        return;

    }


    return (
        <>
            <div className={s.itemButton}>
                <ul className={s.item}>
                    <li>
                        <button
                            className={ activeTab ? s.button + ' ' + s.active : s.button}
                            onClick={handleChangeTab}
                        >
                            Expense
                        </button>
                        </li>
                        <li>
                        <button
                            className={ !activeTab ? s.button + ' ' + s.active : s.button}
                            onClick={handleChangeTab}
                        >
                            Income
                        </button>
                    </li>
                </ul>
            </div>
            <div>

                {activeTab ? <InputProductExpense /> : <InputProductIncome />}
    
                <ExpenseMobile />
                <IncomeMobile />
            </div>
        </>
    )
}
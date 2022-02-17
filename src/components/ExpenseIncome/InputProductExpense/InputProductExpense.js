import DateItem from '../Date/Date';
import { useState } from 'react';
import DropdownSelect from '../Select/Select';
import TableExpense from '../TableExpense/TableExpense';
import options from '../../../optionsExpense.json';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import s from './InputProductExpense.module.css';
import { addOneExpenseTransaction } from '../../../redux/transaction/transaction-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useGetExpenseTransactionsQuery } from '../../../redux/transaction/transaction-slice';

export default function InputProductExpense({
  category,
  setCategory,
  expenseData,
  summaryData,
}) {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');

  const { dataExp } = useGetExpenseTransactionsQuery()
  console.log('data', dataExp)

  const changeAmount = e => {
    setAmount(e.target.value);
  };

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const onClearBtn = event => {
    event.preventDefault();
    setValue('');
    setAmount('');
  };

  const dispatch = useDispatch();

  const onSubmitExpenseForm = e => {
    e.preventDefault();
    dispatch(
      addOneExpenseTransaction({
        description: value,
        count: (Number(amount) * 100).toString(),
        date: Math.floor(new Date().getTime() / 1000.0),
        category: category.value,
      }),
    );
    setValue('');
    setAmount('');
    setCategory({ "value": "transport", "label": "Transport" });
  };
  
  const handleDropdownChange = (option) => {
    setCategory(option)
  }
  // const initValue = options.map()

  return (
    <div className={s.container}>
      <div className={s.controls__container}>
        <div className={s.date__container}>
          <DateItem />
        </div>
        <form className={s.containerForm}>
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
              <input
                type="text"
                name="name"
                placeholder="Product description"
                className={s.inputDescriptions}
                autoComplete="off"
                value={value}
                onChange={changeHandler}
              />
            </label>
            <label className={s.labelSelect}>
              <div className={s.positionIcon}>
                <DropdownSelect
                  value={category}
                  options={options}
                  onChange={handleDropdownChange}
                />
              </div>
            </label>
            <label className={s.labelSum}>
              <input
                name="sum"
                placeholder="0.00"
                pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title=""
                autoComplete="off"
                className={s.inputSum}
                value={amount}
                onChange={changeAmount}
              />
              <div className={s.calculatorIcon}>
                <Calculator />
              </div>
            </label>
          </div>

          <div className={s.positionButton}>
            <div>
              <button
                type="submit"
                className={`${s.button} ${s.buttonEnter}`}
                onClick={onSubmitExpenseForm}
              >
                ENTER
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={onClearBtn}
                className={`${s.button} ${s.buttonClear}`}
              >
                CLEAR
              </button>
            </div>
          </div>
        </form>
      </div>
      <TableExpense items={expenseData} summaryData={summaryData} />
    </div>
  );
}
